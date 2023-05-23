Ext.define('AppPolizas3.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: [
        'StoreMaestro',
        'StoreDetalle',
        'StoreArchivos',
        'StoreRfc',
        'StoreRegistros',
        'StoreTipoPoliza',
        'StoreTipoPolizaS',
        'StoreDiot',
        'StoreFE'
    ],
    models: [
        'ModeloMaestro',
        'ModeloDetalle',
        'ModeloTipoPoliza',
        'ModeloTipoPolizaS',
        'ModeloArchivos',
        'ModeloRfc',
        'ModeloRegistros',
        'ModeloDiot',
        'ModeloFE'
    ],
    refs: [
        {
            ref: 'menuGeneral',
            selector: 'menugeneral'
        },
        {
            ref: 'gridMaestro',
            selector: 'gridmaestro'
        },
        {
            ref: 'gridDetalle',
            selector: 'griddetalle'
        },
        {
            ref: 'formCopy',
            selector: 'formcopy'
        },
        {
            ref: 'formCentro',
            selector: 'formcentro'
        },
        {
            ref: 'gridArchivos',
            selector: 'gridarchivos'
        },
        {
            ref: 'pesPanel',
            selector: 'pespanel'
        },
        {
            ref: 'panelSur',
            selector: 'panelsur'
        },
        {
            ref: 'formArchivos2',
            selector: 'formarchivos2'
        },
        {
            ref: 'windowPolizasFE',
            selector: 'windowpolizasfe'
        },
        {
            ref: 'formCuentas',
            selector: 'formcuentas'
        },
        {
            ref: 'gridDiot',
            selector: 'griddiot'
        },
        {
            ref: 'gridFE',
            selector: 'gridfe'
        }
       
    ],
    views: [
        'general.MenuGeneral',
        'maestro.GridMaestro',
        'maestro.WindowPolizasFE',
        'detalle.GridDetalle',
        'detalle.GridDiot',
        'general.FormCentro',
        'general.TabPanel',
        'general.PanelSur',
        'archivos.GridArchivos',
        'archivos.FormArchivos2',
        'archivos.WindowArchivos',
        'general.FormCopy',
        'general.WindowCopy',
        'general.FormCuentas',
        'general.WindowCuentas',
        'general.GridFE'


    ],
    rowChange:-1,
    relacion:null,
    permisosP:null,
    init: function() {
        var me = this;
//        var rowChange = -1;
        Ext.Ajax.timeout = 240000;
        Ext.override(Ext.data.proxy.Ajax, { timeout: 240000 });
        //Manejo de inactividad en el browser
        Ext.ux.ActivityMonitor.init({verbose: true});

        Ext.ux.ActivityMonitor.maxInactive = (1000 * 60 * 9);

        Ext.ux.ActivityMonitor.isInactive = function() {

            alert("Ha dejado de utilizar el programa por mas de 10 minutos, SU SESION HA EXPIRADO,favor de cerrar y abrir la aplicacion.");
            window.location = "http://" + window.location.host + "/applets/salir.htm";
            return;
        };
        Ext.ux.ActivityMonitor.start();
        me.control({
            formcopy: {
                copiarPoliza: function(btn) {

                    this.copiarPoliza();

                }

            },
            menugeneral: {
                buscarMaestro: function(cboAno, tipoPoliza, btn) {

                    this.buscarMaestro(cboAno, tipoPoliza);
                },
                afterrender: function() {

                }

            },
             gridfe: {
                afterrender: function() {
                     
                    me.habilitarBotonesFe(); 
                    me.findFE();
                    
                },
                        
                
                cleanFiltersFE: function(){
                    me.cleanFiltersFE();
                },
                
                guardarFERelacion: function(){
            
                    me.guardarFERelacion();
                },
                borraFERelacion: function(){
                   me.borraFERelacion();
                }
             },
            gridmaestro: {
                
                beforeedit: function(editor, context, eOpts) {
                    
                    
                     
                    
                    me.cambiarEdicion(editor, context, eOpts);
//                    msgOut('beforeedit');
                },
                beforeitemclick: function(grid, record, item, index, e, eOpts) {
                  
//                    msgOut('beforeitemclick');
                },
                select: function(view, model, index) {
                   // msgOut('select');
                   
                    

                    if (me.rowChange !== index) {
                        me.rowChange = index;
                         
                        me.loadDet(index, model);
                        me.loadSumaDetalle();
                        me.actualizaEstatus();
                        me.verificaCuentasOrden();

                    }

                },
                afterrender: function() {
                    me.permisosPolizas();
                    me.buttonDisable();
                    me.buttonArchivoDisable();
                    me.findCompania();
                    me.storeClean();
                    
                },
                addPoliza: function(btn, cellEditing) {
                    me.addPoliza(btn, cellEditing);
                },
                copyPoliza: function(btn) {
                    me.copyPoliza(btn);

                },
                cancelaPoliza: function(btn) {
                    me.cancelaPoliza(btn);
                },
                guardaPolizas: function(celleditor) {
                    me.saveMaestro(celleditor);
                },
                imprimirPolizas: function(value) {
                    me.imprimirPoliza(value);
                },
                generarFE: function() {
                    me.generaPolFE();
                },
                relacionaFE: function() {
                    me.relacionaPolFE();
                },
                imprimirFEPDFXML:function(val){
                    me.imprimirFEPDFXML(val);
                },
                cleanFiltersMst:function(){
                    me.cleanFiltersMst();
                     
                },
                relacionaFeExistente: function(){
            
                   me.relacionaFeExistente();
                },
                deleteRelacion: function(){
            
                   me.deleteRelacion();
                }
        

            },
            griddetalle: {
                changeColumn: function(ct, column, width, eOpts) {
                    me.changeColumn(ct, column, width, eOpts);
                },
                hideColumn:function(ct,column, eOpts){
                         me.hideColumn(ct, column, eOpts);  
                },
                showColumn:function(ct,column, eOpts){
                         me.showColumn(ct, column, eOpts);  
                },
                keydetalle: function(ed, field, e, celleditor) {
                    me.cambiaTab(ed, field, e, celleditor);
                   // me.cambiaEnt(ed, field, e, celleditor);
                },
                afterrender: function() {
                    me.buttonDetDisable();

                },
                addDet: function(btn, cellEditing) {
                    me.addDet(btn, cellEditing);
                },
                copyDetalleExcel: function() {
                    me.copyDetalleExcel();
                },
                downloadExcel: function() {
                    me.downloadExcel();
                },
                downloadDocx: function() {
                    me.downloadDocx();
                },
                downloadPdf: function() {
                    me.downloadPdf();
                },
                pasteDetalleExcel: function() {
                    me.pasteDetalleExcel();
                },
                cancelaPolizaDet: function(btn) {
                    me.cancelaPolizaDet(btn);
                },
                sumaCA: function() {
                    me.sumaCA();
                },
                saveDet: function() {
                    me.saveDet();
                },
                nombreCuenta: function(nombre, cuenta) {
            
                  if (cuenta === 'x'){
                      
                      me.crearCuenta();
                      
                  }else{
                    me.nombreCuenta(nombre, cuenta);
                  }
                },
                cleanFiltersDet:function(){
                    me.cleanFiltersDet();
                     
                },
                addDiot:function(){
            
                   me.addDiot();
                   
                },
                addTrSAT:function(){
                    me.addTransaccionSAT();
                },
                
                deleteTrSAT:function(){
                    
                    me.deleteTransaccionSAT();
                    
                }
               
                


            },
            griddiot:{
        
                   saveDiot:function(btn){
                       me.saveDiot(btn);
                   },
                   afterrender: function() {
                    me.findDiot();

                },
                   keyDiot: function(ed, field, e, celleditor){
               
                    me.cambiaEnt(ed, field, e, celleditor);
               
               
                   }
            },
            gridarchivos: {
                addArchivo: function(btn) {

                    this.addArchivo(btn);


                },
                verPDF: function() {
                    me.imprimirPDF();
                },
                deleteArchivo: function(btn) {

                    this.deleteArchivo(btn);
                },
                verArchivo: function(btn) {
                    this.verArchivo(btn);
                }
            },
            formarchivos2: {
                saveArchivo2: function(btn) {
                    this.saveArchivo2(btn);
                }
            },
            formcuentas: {
                saveCuenta: function(btn){
                    this.saveCuenta(btn);
                }
            }

        });
    },
    
    verificaCuentasOrden:function(compania, tipoPoliza, numero, fecha){
              var me = this,
       
        gridDet = me.getGridDetalle(),
        grid = me.getGridMaestro(),
        records = grid.getSelectionModel().getSelection(),
        containerStatus = me.getPanelSur();


        var record = records[0];


        var compania = record.get('COMPANIA');
        var tipoPoliza = record.get('TIPO_POLIZA');
        var numero = record.get('NUMERO');
        var fecha = record.get('FECHA');

 
       var sb = containerStatus.getComponent('statusbarTotales');
       
        var orden = sb.getComponent('estatusOrden');

        sb.showBusy();
        
        Ext.Ajax.request({
            url: 'process/data/VerificaCuentasOrden',
            method: 'GET',
            params:{
                compania:compania,
                fecha:fecha,
                tipo_poliza: tipoPoliza,
                numero: numero
                
                
            },
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var cuentaOrd = val.data[0].CUENTA_ORD;
                    var cuenta = val.data[0].CUENTA;
                   
                    if (cuentaOrd > 0 && cuenta > 0){
                      orden.update('<span style="color:white;background-color:red;font-weight: bold;font-size: "4";">Esta poliza contiene cuentas de Orden</span>');
                    }else{
                       
                        orden.update('');
      
                    }
        

                } else if (!val.success) {
                    orden.update('');

                }
            },
            timeout: 30000

        });
    },
    
        permisosPolizas: function() {
        var me = this,
       
        gridDet = me.getGridDetalle(),
        grid = me.getGridMaestro();

        Ext.Ajax.request({
            url: 'process/data/BuscaPermisosPolizas',
            method: 'GET',
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var permisos = val.data[0].PE_PERMISOS;
                    
                    this.permisosP = permisos;
                    
                    msgOut('permisos'+ permisos);
                    
                      

                    
//                    me.permisosC = permisos;
//                    
//                   
//                    
                     if (permisos.indexOf("A")<0 ) {   
                                 grid.down('button[itemId=btnAgregarMst]').setVisible(false); 
                                 gridDet.down('button[itemId=btnAgregarDet]').setVisible(false);
                                 
                          if(permisos.indexOf("M")<0 ){
                              
                                 grid.down('button[itemId=btnGuardarMst]').setVisible(false); 
                                 gridDet.down('button[itemId=btnGuardarDet]').setVisible(false);
                              
                              
                          }
                                 
                     }
                     if (permisos.indexOf("B")<0 ) {   
                                 grid.down('button[itemId=btnBorrarMst]').setVisible(false); 
                                 gridDet.down('button[itemId=btnBorrarDet]').setVisible(false); 
                     }
//                     
//                     me.findCuentas();
                    
                    

                } else if (!val.success) {
                    this.permisosP = 'C';
                     grid.down('button[itemId=btnAgregarMst]').setVisible(false); 
                     gridDet.down('button[itemId=btnAgregarDet]').setVisible(false);
                     grid.down('button[itemId=btnGuardarMst]').setVisible(false); 
                     gridDet.down('button[itemId=btnGuardarDet]').setVisible(false);
                     grid.down('button[itemId=btnBorrarMst]').setVisible(false); 
                     gridDet.down('button[itemId=btnBorrarDet]').setVisible(false); 
                    
                  //  msgBoxErr('Permisos', 'Error el usuario no tiene permisos');
//                    grid.down('button[itemId=btnAgregarCta]').setVisible(false); 
//                    grid.down('button[itemId=btnBorrarCta]').setVisible(false); 
                }
            },
            timeout: 30000

        });
    },
    
    
    addTransaccionSAT:function(){
              var me = this,
              grid = me.getGridDetalle(),
              records = grid.getSelectionModel().getSelection(),
             store=grid.getStore();
          
           var record = records[0];
           
           if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado el detalle de poliza");
            return;
           
        }
           
            var selection = grid.getSelectionModel().getSelection();
            var data = [];
                for (var i=0; i < selection.length; i++) {

                        if(Ext.isEmpty(selection[i].data.CUENTA)){
                        
                        msgBoxErr('Error', 'Ha seleccionado un registro invalido');
                        return;
                    }
                    
        
                      data.push(selection[i].data);
                      
                      msgOut('data'+data);
                    
                }
        


        
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        var jsonData = Ext.encode(data);
        
        console.log(jsonData);
           
           var detTipoPoliza = record.get('TIPO_POLIZA');
           var detFecha = record.get('FECHA');
           var detNumeor = record.get('NUMERO');
           var sec = record.get('SEC');
           var cuenta = record.get('CUENTA');
           var jsonDetPolizas = jsonData;
          
          var controllerSAT = me.getController('AppTransaccionSAT.controller.Main');
          
         // controllerSAT.storePolizas = store;
          //  controllerSAT.isRelacion = false;
          //   controllerSAT.polizaNumero=null;
          // controllerSAT.polizaTipo=null;
          //    controllerSAT.polizaFecha=null;
          
                 controllerSAT.tipoPoliza = detTipoPoliza;
                 controllerSAT.numeroPoliza = detNumeor;
                 controllerSAT.fechaPoliza = detFecha;
                 controllerSAT.secPoliza = sec;
                 controllerSAT.ctaPoliza = cuenta;
                 controllerSAT.jsonDetPolizas = jsonDetPolizas;
            

          var vista =controllerSAT.getView(controllerSAT.views[0]).create();

          
        var window=  Ext.create('Ext.window.Window', {
            title: 'Transaccion',
            height: 400,
            width: 800,
             modal: true,
            layout: 'fit',
            items: [vista],
            listeners:{
                close:function(){
                    //if(flag == true){
                     //   msgBox("close window");
                        me.loadDet();
                        //add to db
                   // }
                }
            }
               
            
        }).show();
            controllerSAT.windowParent = window;
            
             window.add(vista);
          window.show();
        
    },
    
     deleteTransaccionSAT:function(){
              var me = this,
              grid = me.getGridDetalle(),
              records = grid.getSelectionModel().getSelection(),
             store=grid.getStore();
          
           var record = records[0];
           
           if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado el detalle de poliza");
            return;
           
        }
           
            var selection = grid.getSelectionModel().getSelection();
            var data = [];
                for (var i=0; i < selection.length; i++) {

                        if(Ext.isEmpty(selection[i].data.CUENTA)){
                        
                        msgBoxErr('Error', 'Ha seleccionado un registro invalido');
                        return;
                    }
                    
        
                      data.push(selection[i].data);
                      
                      msgOut('data'+data);
                    
                }
        


        
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        var jsonData = Ext.encode(data);
        
  
           var jsonDetPolizas = jsonData;
           
           
           grid.setLoading("Quitando Relacion...");
                
                 Ext.Ajax.request({
                url: 'Transaccion/quitarRelacionPolizasTrans',
                timeout: 60000,
                scope: this,
                params: {
                     data:jsonDetPolizas
                },
                success: function(response) {
                    
                 
                    
                    var text = response.responseText;
                    

                },
                callback: function(a, b, c) {
                   
                    if (Ext.isEmpty(c.responseText)) {
                        msgBoxErr('Error', 'Error al Quitar la Relacionar');
                        grid.setLoading(false);
                        return;
                       
                    }
                    var res = Ext.decode(c.responseText);
                    if (res.success) {

                        msgBox('Relacion', 'Se a quitado la Relacionado con Exito');

                        grid.setLoading(false);
                     
                    }else{

                           msgBoxErr('Relacion', 'Error al quitar la transaccion');

                           grid.setLoading(false);
                    }
                    
                    me.loadDet();
                    
                    
                }
                
            });
           
          

    },
    
    
    habilitarBotonesFe: function(){
        
         var me = this,
                grid = me.getGridFE(),
                store = grid.getStore();
        if (me.relacion === '0') {

               grid.down('button[itemId=btnGuardarRelacion]').setVisible(false);
               grid.down('button[itemId=btnQuitarRelacion]').setVisible(true);
               
            } else {
                
               grid.down('button[itemId=btnGuardarRelacion]').setVisible(true);
               grid.down('button[itemId=btnQuitarRelacion]').setVisible(false);

            }
         
                
        
    },
    
    guardarFERelacion: function(){
        
        var me = this,
              
              
              gridM = me.getGridMaestro(),
              storeM = gridM.getStore(),
              gridFE = me.getGridFE(),
              storeFE = gridFE.getStore(),
              recordsM = gridM.getSelectionModel().getSelection(),
              recordsFE = gridFE.getSelectionModel().getSelection();
        
        
        var recordM = recordsM[0];
        var recordFE = recordsFE[0];
        
        var compania = recordM.get('COMPANIA');
        var tipoPoliza = recordM.get('TIPO_POLIZA');
        var fecha = recordM.get('FECHA');
        var numeroPol = recordM.get('NUMERO');

        
        
      
        
       
            var selection = gridFE.getSelectionModel().getSelection();
            var data = [];
            msgOut('tamano'+selection.length);
        // if (selection.length >= 2){
                for (var i=0; i < selection.length; i++) {
                    
                    msgOut('tamano2'+i);
                    
                    if(!Ext.isEmpty(selection[i].data.NUMERO_POL)){
                        
                        msgBoxErr('Error', 'Ya existe la factura con numero: '+selection[i].data.NUMERO_FE+' relacionada en esta poliza');
                        return;
                    }
                    
        
                      data.push(selection[i].data);
                      
                      msgOut('data'+data);
                    
                }
        
        
//            data.push(recordM.data.TIPO_POLIZA);
//            data.push(recordM.data.FECHA);
//            data.push(recordM.data.NUMERO);
//            data.push(recordFE.data.FOLIO);
//            data.push(recordFE.data.NUMERO_FE);
//            data.push(recordFE.data.UUID);
        //});


        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        msgOut('jsonData'+jsonData);
         gridFE.setLoading('Guardando...');
         Ext.Ajax.request({
            url: 'UploadDocument/relacionaFacturas',
             params: {
                 data : jsonData,
                 compania:compania,
                 tipoPoliza: tipoPoliza,
                 fecha:fecha,
                 numeroPol:numeroPol

            },
            method: 'POST',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    gridFE.setLoading(false);
                    msgBox('Guardado',val.msg);
                    me.relacion = '1';
                    me.findFE();
                    //me.buscarMaestro();
//              
                }else{
                    
                    gridFE.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
                    me.relacion = '1';
                    me.findFE();
                    //me.buscarMaestro();

                }
                
             }
            //timeout: 30000

        });
        
    },
    
     borraFERelacion: function(){
        
        var me = this,
              
              
              gridM = me.getGridMaestro(),
              storeM = gridM.getStore(),
              gridFE = me.getGridFE(),
              storeFE = gridFE.getStore(),
              recordsM = gridM.getSelectionModel().getSelection(),
              recordsFE = gridFE.getSelectionModel().getSelection();
        
        
        var recordM = recordsM[0];
        var recordFE = recordsFE[0];
        
        var compania = recordM.get('COMPANIA');
        var tipoPoliza = recordM.get('TIPO_POLIZA');
        var fecha = recordM.get('FECHA');
        var numeroPol = recordM.get('NUMERO');

        
        
      
        
       
            var selection = gridFE.getSelectionModel().getSelection();
            var data = [];
            msgOut('tamano'+selection.length);
        // if (selection.length >= 2){
                for (var i=0; i < selection.length; i++) {
                    
                    
        
                      data.push(selection[i].data);
                      
                      msgOut('data'+data);
                    
                }
        
        



        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        msgOut('jsonData'+jsonData);
         gridFE.setLoading('Guardando...');
         Ext.Ajax.request({
            url: 'UploadDocument/borraRelacionaFacturas',
             params: {
                 data : jsonData,
                 compania:compania,
                 tipoPoliza: tipoPoliza,
                 fecha:fecha,
                 numeroPol:numeroPol

            },
            method: 'POST',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    gridFE.setLoading(false);
                    msgBox('Guardado',val.msg);
                    me.relacion = '0';
                    me.findFE();
                    //me.buscarMaestro();
//              
                }else{
                    
                    gridFE.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
                    me.relacion = '0';
                    me.findFE();
                    //me.buscarMaestro();

                }
                
             }
            //timeout: 30000

        });
        
    },
    
    cleanFiltersFE:function(){
        var me =this,
        grid = me.getGridFE();
        grid.filters.clearFilters();
    },
    
    findFE: function() {
        var me = this,
                grid = me.getGridFE(),
                store = grid.getStore(),
                 gridM = me.getGridMaestro(),
                 storeM=gridM.getStore(),
                 recordsM = gridM.getSelectionModel().getSelection();
                 var recordM = recordsM[0];
        msgOut('me.relacion'+me.relacion);
           var factura = '';
        store.proxy.extraParams.FACTURA = factura;
        store.proxy.extraParams.numeroPol = recordM.get('NUMERO');
        store.proxy.extraParams.tipoPol = recordM.get('TIPO_POLIZA');
        store.proxy.extraParams.fechaPol = recordM.get('FECHA');
        
        console.log(recordM.get('TIPO_SAT'));
        
        var dirBusFE = null;
        
         if (me.relacion === '0') {
             
               if(recordM.get('TIPO_SAT') === 'D'){

                   dirBusFE = 'process/data3/BuscaQuitarFE';
               }else{
                    dirBusFE = 'process/data3/BuscaQuitarFEPagos';
                    
               }
            } else {
                
                if(recordM.get('TIPO_SAT') === 'D'){

                   dirBusFE = 'process/data3/BuscaFE';
               }else{
                   
                   dirBusFE = 'process/data3/BuscaFEPagos';
                   
               }
               
             
            }
        
        store.proxy.api.read = dirBusFE;
    
        grid.setLoading('Buscando...');
        store.loadData([], false);
        store.load({
            callback: function() {
                grid.setLoading(false);
            }
        });
    },
    
     deleteRelacion: function(){
    
      var me = this,
              
              
              grid = me.getGridMaestro(),
             
              store=grid.getStore(),
                 records = grid.getSelectionModel().getSelection();
        var record = records[0];
        var gridFe = me.getGridFE();
      
        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado la poliza");
            return;
           // msgOut('record existente'+record);
        }
        if (Ext.isEmpty(record.get('UUID_RELACION'))) {
            msgBoxErr("Error", "Esta Poliza no tiene ninguna relacion de facturas");
            return;
           // msgOut('record existente'+record);
        }
       
       
       
        me.relacion = '0';
       var window=  Ext.create('Ext.window.Window', {
            title: 'Relacion Polizas',
            height: 480,
            width: 800,
             modal: true,
            layout: 'fit',
            items: [
                {
                xtype:'gridfe'
            }
            ],
               listeners:{
                beforeclose:function(win) {
                    
                    me.buscarMaestro();
                    // user has already answered yes

                }
            }
               
            
        }).show();
         
    },
    
    relacionaFeExistente: function(){
    
      var me = this,
              
              
              grid = me.getGridMaestro(),
              store=grid.getStore(),
                 records = grid.getSelectionModel().getSelection();
        var record = records[0];

    
        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado la poliza");
            return;
           // msgOut('record existente'+record);
        }
         me.relacion = '1';
       var window=  Ext.create('Ext.window.Window', {
            title: 'Relacion Polizas',
            height: 480,
            width: 800,
             modal: true,
            layout: 'fit',
            items: [
                {
                xtype:'gridfe'
            }
            ],
               listeners:{
                beforeclose:function(win) {
                    
                    me.buscarMaestro();
                    // user has already answered yes
//                    if(win.closeMe) {
//                        win.closeMe = false;
//                        return true;
//                    }
// 
//                    // ask user if really close
//                    Ext.Msg.show({
//                         title:'Close confirmation'
//                        ,msg:'Really close?'
//                        ,buttons:Ext.Msg.YESNO
//                        ,callback:function(btn) {
//                            if('yes' === btn) {
// 
//                                // save the user answer
//                                win.closeMe = true;
// 
//                                // call close once again
//                                win.close();
//                            }
//                        }
//                    });
// 
//                    // Always cancel closing if we get here
//                    return false;
                }
            }
               
            
        }).show();
    },
    cambiaEnt: function(ed, field, e, celleditor) {
        var me = this,
                grid = me.getGridDiot(),
                store = grid.getStore(),
                rows = grid.getSelectionModel().getSelection(),
                sm = rows[0];
        var pos = store.indexOf(sm);
        
        //msgOut('pos'+pos);
       // msgOut('cellEditor'+celleditor);

          
        if (e.getKey() === e.ENTER) {

            e.stopEvent();
        //    msgOut('Aplicando Enter');
            if (ed.editorId === 'diotIMPORTE') {
                celleditor.completeEdit();
                if (pos < (store.getCount( ) - 1)) {
                    
                   // msgOut('dentro de posiscion < count');
                    
                    celleditor.cancelEdit();
                    celleditor.startEditByPosition({
                        row: pos + 1,
                        column: 3
                    });
                }
//       

            }




        }
    },
    
    
    findDiot:function(){
        
          var me =this, 
     
                grid = me.getGridDetalle(),
                gridDiot = me.getGridDiot(),
                storeDiot = gridDiot.getStore(),
                records = grid.getSelectionModel().getSelection();
   
      
       
         
      
         var record = records[0];
       
       
        var compania = record.get('COMPANIA');
       var tipoPoliza = record.get('TIPO_POLIZA');
       var fecha = record.get('FECHA');
       var numero = record.get('NUMERO');
       var sec = record.get('SEC');
       var cuenta = record.get('CUENTA_ALIAS');
       
        if (Ext.isDate(fecha)) {
               var fechaDiot = Ext.Date.format(fecha, 'd/m/Y');
                    fecha = fechaDiot;
        }
        
                storeDiot.proxy.extraParams.compania = compania;
        storeDiot.proxy.extraParams.tipo_poliza = tipoPoliza;
        storeDiot.proxy.extraParams.fecha = fecha;
        storeDiot.proxy.extraParams.numero = numero;
        storeDiot.proxy.extraParams.sec = sec;
        storeDiot.proxy.extraParams.cuenta = cuenta;
        
        var dirBus = '';
        
        Ext.Ajax.request({
            url: 'process/data/BuscaCuentasDiot',
             params: {
                 compania : compania,
                tipo_poliza : tipoPoliza,
                fecha : fecha,
                numero : numero,
                sec : sec,
                cuenta : cuenta

                        //
                        //  fecha: fecha
            },
            method: 'GET',
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var cuenta = val.data[0].CUENTA;
                                     msgOut("cuenta"+cuenta);
//                    
//                    if(Ext.isEmpty(cuenta)){
//                        
//                        
//                        
//                    }else{
                        
                        msgOut("conceptos e importes");
                         dirBus = 'process/data2/BuscaConceptosDiot';
                        
                   // }

                    
                } else if (!val.success) {
                    
                     dirBus = 'process/data2/BuscaConceptos';
                        msgOut("solo conceptos");
                }
                
                 msgOut("dirBus "+dirBus);
        
                gridDiot.setLoading('Buscando...');
                           storeDiot.loadData([], false);
                           storeDiot.load({
                               url: dirBus,
                               callback: function() {
                                   gridDiot.setLoading(false);


                               }
                           });
                
                
            },
            timeout: 30000

        });
   
    },
    
    saveDiot: function(btn){
        
         var me =this, 
         grid = me.getGridDetalle(),
                gridDiot = me.getGridDiot(),
                storeDiot = gridDiot.getStore(),
                records = grid.getSelectionModel().getSelection();
   
         var record = records[0];
       
      
       
         
       var compania = record.get('COMPANIA');
       var tipoPoliza = record.get('TIPO_POLIZA');
       var fecha = record.get('FECHA');
       var numero = record.get('NUMERO');
       var sec = record.get('SEC');
       var cuenta = record.get('CUENTA_ALIAS');
       var cargos = record.get('CARGOS');
       var abonos = record.get('ABONOS');
       
        if (Ext.isDate(fecha)) {
               var fechaDiot = Ext.Date.format(fecha, 'd/m/Y');
                    fecha = fechaDiot;
        }
        
       
        
        var data = [];
        storeDiot.each(function(r) {
             if (Ext.isEmpty(r.data.IMPORTE)){
                 
                 r.data.IMPORTE = 0;
                 
             }
            
            r.data.TIPO_POLIZA = tipoPoliza;
            r.data.FECHA = fecha;
            r.data.NUMERO = numero;
            r.data.SEC = sec;
            r.data.CUENTA = cuenta;
            r.data.CARGOS = cargos;
            r.data.ABONOS = abonos;
            
            data.push(r.data);
        });


        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
         msgOut(jsonData);
 
          gridDiot.setLoading('Guardando...');
        //store.commitChanges(); 
        Ext.Ajax.request({
            url: 'controlDiot/procesaDiot/inserta',
            timeout: 60000,
            method: 'POST',
            scope: this,
            params: {
                data: jsonData//, 
                //user: usuario

            },
            success: function(response) {
                var text = response.responseText;

            },
            callback: function(a, b, c) {
                gridDiot.setLoading(false);
                if (Ext.isEmpty(c.responseText)) {
                    msgBoxErr('Error', 'Error de comunicacion al Guardar');
                    return;
                }
                var res = Ext.decode(c.responseText);
                if (res.success) {
                    gridDiot.setLoading('Buscando...');
                    storeDiot.loadData([], false);
                    storeDiot.load({
                        callback: function() {
                            gridDiot.setLoading(false);
                            me.loadDet();

                            
                        }
                    });

                    msgBox('Guardar', res.msg);
                }else{
                    
                    msgBoxErr('Error', res.msg);
                }
            }
        });
        
        
        
        
        
    },
    
    addDiot:function(btn){
        
         var me =this, 
     
                grid = me.getGridDetalle(),
               // gridDiot = me.getGridDiot(),
                //storeDiot = gridDiot.getStore(),
                records = grid.getSelectionModel().getSelection();
   
      
       
         
      
         var record = records[0];
       
       if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado el detalle de Poliza");
            return;
        }
        
        var sec = record.get("SEC");
        
       if (Ext.isEmpty(sec)) {
            msgBoxErr("Error", "Debe de guardar el detalle antes de crear DIOT");
            return;
        }
//        var compania = record.get('COMPANIA');
//       var tipoPoliza = record.get('TIPO_POLIZA');
//       var fecha = record.get('FECHA');
//       var numero = record.get('NUMERO');
//       var sec = record.get('SEC');
//       var cuenta = record.get('CUENTA_ALIAS');
//       
//        if (Ext.isDate(fecha)) {
//               var fechaDiot = Ext.Date.format(fecha, 'd/m/Y');
//                    fecha = fechaDiot;
//        }
//   
//         
//       var compania = record.get('COMPANIA');
//       var tipoPoliza = record.get('TIPO_POLIZA');
//       var fecha = record.get('FECHA');
//       var numero = record.get('NUMERO');
//       var sec = record.get('SEC');
//       var cuenta = record.get('CUENTA_ALIAS');
//       
//        if (Ext.isDate(fecha)) {
//               var fechaDiot = Ext.Date.format(fecha, 'd/m/Y');
//                    fecha = fechaDiot;
//        }
//
//         msgOut("fecha"+fecha);
        
        var window=  Ext.create('Ext.window.Window', {
            title: 'DIOT',
            height: 280,
            width: 300,
             modal: true,
            layout: 'fit',
            items: [
                {
                xtype:'griddiot'
            }
            ]
               
            
        }).show();
        
//        storeDiot.proxy.extraParams.compania = compania;
//        storeDiot.proxy.extraParams.tipo_poliza = tipoPoliza;
//        storeDiot.proxy.extraParams.fecha = fecha;
//        storeDiot.proxy.extraParams.numero = numero;
//        storeDiot.proxy.extraParams.sec = sec;
//        storeDiot.proxy.extraParams.cuenta = cuenta;
//         gridDiot.setLoading('Buscando...');
//                    storeDiot.loadData([], false);
//                    storeDiot.load({
//                        callback: function() {
//                            gridDiot.setLoading(false);
//
//                            
//                        }
//                    });
        
        

        
    },
            
    saveCuenta:function(btn){
        
        var me = this,
               
                form = btn.up('formcuentas'),
                 form1 = btn.up('formcuentas'),
                win = form.up('window'),
                basicForm = form.getForm();
        
//         Ext.Ajax.request({
//            url: 'process/data/BuscarNuevaCuenta',
//            method: 'GET',
//            scope: this,
//            params: {
//                
//                cuenta_padre : '000001-000001'
//
//            },
//            callback: function(records, operation, success) {
//                if (Ext.isEmpty(success.responseText))
//                    return;
//                var val = Ext.decode(success.responseText);
//                if (Ext.isEmpty(val))
//                    return;
//                if (val.success) {
//                    var cuentaNueva = val.data[0].CUENTA_NEW;
//                    
//                    msgOut("cuentaNueva"+cuentaNueva);
//                    
//
//                    
//                       
//                } else if (!val.success) {
//                    msgBoxErr('Cuentas', 'Error cuentas no encontradas');
//                }
//            },
//            timeout: 30000
//
//        });

        

        if (basicForm.isValid()) {
            form1.setLoading("Guardando Cuenta...");
            basicForm.submit({
                success: function(form, action) {
                   
                    Ext.Msg.alert('Guardado', action.result.msg);
                    
                            form1.setLoading(false);
                             win.close();

                       

                },
                failure: function(form, action) {
                        form1.setLoading(false);
                    Ext.Msg.alert('Error', action.result.msg);
                }
            });


        } else {

            basicForm.getFields().each(function(item) {
                if (!item.isValid()) {
                    msgBoxErr("Error falta un campo", item.name);
                    return;
                }

            });
        }

        
    },
    storeClean:function(){
        var me =this, 
        grid = me.getGridMaestro(),
          gridDet = me.getGridDetalle(),
          storeDet = gridDet.getStore(),
        store = grid.getStore();
        store.on('load',function (store, records, successful, eOpts ){
            storeDet.loadData([], false);
            me.rowChange =-1;
            
        });

    },
    
    
    crearCuenta:function(){
//           msgOut("crear cuenta");
       
       var me = this,
                grid = me.getGridDetalle(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];
        //  msgOut("nombre"+nombre);
       var estructura = record.get('COMPANIA');
       
       
            var view = Ext.widget('windowcuentas');
        view.setTitle('Crear Cuenta');
        var form = view.down('formcuentas').getForm();
        form.findField('estructuraCuenta').setValue(estructura);
        
         var me = this;
        Ext.Ajax.request({
            url: 'process/data/ActivarCuentaPadre',
            method: 'GET',
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var existeCtaPadre = val.data[0].TOTAL_CUENTA;
                    
                    if (existeCtaPadre === 0) {
                        
                        form.findField('cboCuentaPadre').setVisible(true);
          
                    }else{
                        
                         form.findField('cboCuentaPadre').setVisible(false);
                        
                        
                    }
                    

                    
                       
                } else if (!val.success) {
                    msgBoxErr('Cuentas', 'Error cuentas no encontradas');
                }
            },
            timeout: 30000

        });
    },
    
    cleanFiltersDet:function(){
        var me =this,
        grid = me.getGridDetalle();
        grid.filters.clearFilters();
    },
    
    cleanFiltersMst:function(){
        var me =this,
        grid = me.getGridMaestro();
        grid.filters.clearFilters();
    },
    
    
    imprimirFEPDFXML: function (val) {
        var me = this,
                grid = me.getGridMaestro(),
                records = grid.getSelectionModel().getSelection();
        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado la poliza");
        }
        var archi = "";
        var tipo = "";

        var numeroFact = record.get('NUMERO_FACT');
        var tipoPoliza = record.get('TIPO_POLIZA');
        var nom_cfdi = record.get('NOM_CFDI');
        

        if (val === '1') {
            archi = record.get('PDF');
            tipo = 'PDF';
        }
        if (val === '2') {
            archi = record.get('XML');
            tipo = 'XML';
        }

        

//       if(Ext.isEmpty(archi)){
//           msgBoxErr('Error','La poliza no tiene documento');
//           return;
//       }




        if (val === '1') {

            

        
            var xml = record.get('XML');
            var string;
            
            if (Ext.isEmpty(nom_cfdi)){
            
            
                    if (Ext.isEmpty(numeroFact)) {
                        string = Ext.String.format(
                                'http://www.appferaz3.com/cfdisWS/{0}',
                                record.get('CXC_PDF')
                                );
                    }else{
                       if(tipoPoliza === 'E') {

                           var string = Ext.String.format(
                                                'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=REP_COMPROBANTE_CFDI&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&numero={1}&reporte=REP_COMPROBANTE_CFDI',
                                                me.getCompania(),
                                                numeroFact
                                                );


                       }else{
                            var fecha = record.get('FECHA_FACT');
                            // xml = xml.replace('.xml', '.pdf');
                            // xml = xml.replace('.XML', '.pdf');
                            var fechaM = Ext.Date.parse(fecha, 'd/m/Y');
                            var mes = (fechaM.getMonth() + 1).toString();
                            var ano = fechaM.getFullYear().toString();

                            if (mes < 10) {

                                mes = '0' + mes;

                            }
                            if (ano > '2015') {
                                string = Ext.String.format(
                                        'http://' + window.location.host + '/carga_erp/xml/{0}/{1}/{2}/{3}',
                                        me.getCompania(),
                                        ano,
                                        mes,
                                        archi
                                        );
                            } else {
                                string = Ext.String.format(
                                        'http://' + window.location.host + '/carga_erp/xml/{0}/{1}',
                                        me.getCompania(),
                                        archi
                                        );
                            }
                        }
                    }
                }else{
                    
                    
                    string = Ext.String.format(
                                nom_cfdi
                                );
                    
                }

            Ext.create('Ext.window.Window', {
                title: tipo,
                height: 500,
                width: 500,
                minimizable: true,
                maximizable: true,
                layout: 'fit',
                items: {
                    xtype: 'panel',
                    width: 600,
                    height: 400,
                    items: [{
                            xtype: 'component',
                            autoEl: {
                                tag: 'iframe',
                                style: 'height: 100%; width: 100%; border: none',
                                src: string
                            }
                        }

                    ],
                    buttons: [
                        {
                            text: 'Ver pdf por default',
                            scope: this,
                            handler: function (btn) {
                                
                             if (Ext.isEmpty(nom_cfdi)){


                                if (Ext.isEmpty(numeroFact)) {
                                    string = Ext.String.format(
                                            'http://www.appferaz3.com/cfdisWS/{0}',
                                            record.get('CXC_PDF')
                                             );
                                }else{
                                var string = Ext.String.format(
                                        'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=REP_COMPROBANTE_CFDI&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&numero={1}&reporte=REP_COMPROBANTE_CFDI',
                                        me.getCompania(),
                                        numeroFact
                                        );
                                }
                            }else{
                                
                                string = Ext.String.format(
                                nom_cfdi
                                );
                            }


                                window.open(string);

                                return string;
                            }
                        }
                    ]//fin if 


                }

            }).show();
        }
        if (val === '2') {

            


            var xml = record.get('XML');
            var string;
            
            if (Ext.isEmpty(nom_cfdi)){
            
                    if (Ext.isEmpty(numeroFact)) {
                        string = Ext.String.format(
                                'http://www.appferaz3.com/cfdisWS/{0}',
                                record.get('CXC_XML')
                                );
                    }else{

                        var fecha = record.get('FECHA_FACT');
                        // xml = xml.replace('.xml', '.pdf');
                        // xml = xml.replace('.XML', '.pdf');
                        var fechaM = Ext.Date.parse(fecha, 'd/m/Y');
                        var mes = (fechaM.getMonth() + 1).toString();
                        var ano = fechaM.getFullYear().toString();

                       if (mes < 10 && ano < 2018){

                    mes = '0' + mes;

                }

                        if (ano > '2015') {
                            string = Ext.String.format(
                                    'http://' + window.location.host + '/carga_erp/xml/{0}/{1}/{2}/{3}',
                                    //'/empres/XML/{0}/{1}',
                                    me.getCompania(),
                                    ano,
                                    mes,
                                    archi
                                    );
                        } else {
                            string = Ext.String.format(
                                    'http://' + window.location.host + '/carga_erp/xml/{0}/{1}',
                                    //'/empres/XML/{0}/{1}',
                                    me.getCompania(),
                                    archi
                                    );
                        }
                    }
                }else{
                        
                        string = Ext.String.format(
                                nom_cfdi
                                );
                    
                    
                    
                }
            Ext.create('Ext.window.Window', {
                title: 'XML',
                height: 500,
                width: 500,
                minimizable: true,
                maximizable: true,
                layout: 'fit',
                items: {// Let's put an empty grid in just to illustrate fit layout
                    xtype: 'panel',
                    //title: 'My PDF',
                    width: 600,
                    height: 400,
                    items: [{
                            xtype: 'component',
                            autoEl: {
                                tag: 'iframe',
                                style: 'height: 100%; width: 100%; border: none',
                                src: string
                            }
                        }

                    ],
                    buttons: [
                        {
                            text: 'Ver xml en una nueva ventana',
                            scope: this,
                            handler: function (btn) {
                                

                                var xml = record.get('XML');
                                var string;
                            if (Ext.isEmpty(nom_cfdi)){
                                        if (Ext.isEmpty(numeroFact)) {
                                          string = Ext.String.format(
                                                  'http://www.appferaz3.com/cfdisWS/{0}',
                                                  record.get('CXC_XML')
                                                  );
                                      }else{
                                          var fecha = record.get('FECHA_FACT');
                                          // xml = xml.replace('.xml', '.pdf');
                                          // xml = xml.replace('.XML', '.pdf');
                                          var fechaM = Ext.Date.parse(fecha, 'd/m/Y');
                                          var mes = (fechaM.getMonth() + 1).toString();
                                          var ano = fechaM.getFullYear().toString();

                                          if (mes < 10 && ano < 2018){

                                              mes = '0' + mes;

                                          }

                                          if (ano > '2015') {
                                              string = Ext.String.format(
                                                      'http://' + window.location.host + '/carga_erp/xml/{0}/{1}/{2}/{3}',
                                                      //'/empres/XML/{0}/{1}',
                                                      me.getCompania(),
                                                      ano,
                                                      mes,
                                                      archi
                                                      );
                                          } else {
                                              string = Ext.String.format(
                                                      'http://' + window.location.host + '/carga_erp/xml/{0}/{1}',
                                                      //'/empres/XML/{0}/{1}',
                                                      me.getCompania(),
                                                      archi
                                                      );
                                          }
                                      }
                                  }else{
                                        
                                        string = Ext.String.format(
                                        nom_cfdi
                                        );
                                      
                                      
                                  }

                                window.open(string);

                                return string;
                            }
                        }
                    ]//fin if 

                }

            }).show();
        }
        // window.open(string);

    },
        
    generaPolFE:function(){
        var me = this,
              grid = me.getGridMaestro(),
              store=grid.getStore();
 
          var controllerFE = me.getController('AppFEPolizas.controller.Main');
    //      controllerFE.windowParent = window;
          controllerFE.storePolizas = store;
            controllerFE.isRelacion = false;
             controllerFE.polizaNumero=null;
           controllerFE.polizaTipo=null;
              controllerFE.polizaFecha=null;
          var vista =controllerFE.getView(controllerFE.views[0]).create();
//          window.add(vista);
//          window.show();
          
        var window=  Ext.create('Ext.window.Window', {
            title: 'Factura Electronica',
            height: 600,
            width: 800,
             modal: true,
            layout: 'fit'
           // items: [vista]
               
            
        }).show();
            controllerFE.windowParent = window;
            
             window.add(vista);
          window.show();

    },
    
    
        relacionaPolFE:function(){
        var me = this,
              grid = me.getGridMaestro(),
              store=grid.getStore(),
                 records = grid.getSelectionModel().getSelection();
        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado la poliza");
        }
        
//              var compania = record.get('COMPANIA');
//        var numero = record.get('NUMERO');
//        var tipoPoliza = record.get('TIPO_POLIZA');
//        var fecha = record.get('FECHA');
 
          var controllerFE = me.getController('AppFEPolizas.controller.Main');
       //   controllerFE.windowParent = window;
          controllerFE.storePolizas = store;
            controllerFE.isRelacion = true;
             controllerFE.polizaNumero=record.get('NUMERO');
           controllerFE.polizaTipo=record.get('TIPO_POLIZA');
              controllerFE.polizaFecha=record.get('FECHA');
          var vista =controllerFE.getView(controllerFE.views[0]).create();
//          window.add(vista);
//          window.show();
          
        var window=  Ext.create('Ext.window.Window', {
            title: 'Factura Electronica',
            height: 600,
            width: 800,
             modal: true,
            layout: 'fit'
           // items: [vista]
               
            
        }).show();
            controllerFE.windowParent = window;
            
             window.add(vista);
          window.show();

    },
    
    
    hideColumn: function(ct, column, eOpts){
        
        console.log('hide Column');
        console.log(column.name);
     
        var hide = '0';
     
        var now = new Date();
        var expiry = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);
        var comp = this.getCompania();
        Ext.util.Cookies.set(comp + column.name + 'HIDE' , hide, expiry);
        
    },
    showColumn: function(ct, column, eOpts){
        
        console.log('show Column');
        
        var hide = '1';
     
        var now = new Date();
        var expiry = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);
        var comp = this.getCompania();
        Ext.util.Cookies.set(comp + column.name + 'HIDE', hide, expiry);
        
    },
    
    changeColumn: function(ct, column, width, eOpts) {

//        msgOut(ct);
//        msgOut(column);
//        msgOut(width);


        var now = new Date();
        var expiry = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);
        var comp = this.getCompania();
        Ext.util.Cookies.set(comp + column.name, width, expiry);



    },
    loadWithColumnDet: function() {
        var me = this,
                comp = me.getCompania(),
                grid = me.getGridDetalle();

        var withCC = Ext.util.Cookies.get(comp + 'CC');
        var withCT = Ext.util.Cookies.get(comp + 'CT');
        var withCUENTA = Ext.util.Cookies.get(comp + 'CUENTA');
        var withNOMCUENTA = Ext.util.Cookies.get(comp + 'NOMCUENTA');
        var withDESCRIPCION = Ext.util.Cookies.get(comp + 'DESCRIPCION');
        var withREFERENCIA = Ext.util.Cookies.get(comp + 'REFERENCIA');
        var withREFERENCIA2 = Ext.util.Cookies.get(comp + 'REFERENCIA2');
        var withCHEQUE = Ext.util.Cookies.get(comp + 'CHEQUE');
        var withRFC = Ext.util.Cookies.get(comp + 'RFC');
        var withCARGOS = Ext.util.Cookies.get(comp + 'CARGOS');
        var withABONOS = Ext.util.Cookies.get(comp + 'ABONOS');
        var withFECHA_DOCUMENTO = Ext.util.Cookies.get(comp + 'FECHA_DOCUMENTO');
        
        var hideCC = Ext.util.Cookies.get(comp + 'CC' + 'HIDE' );
        var hideCT = Ext.util.Cookies.get(comp + 'CT'+ 'HIDE');
        var hideCUENTA = Ext.util.Cookies.get(comp + 'CUENTA'+ 'HIDE');
        var hideNOMCUENTA = Ext.util.Cookies.get(comp + 'NOMCUENTA'+ 'HIDE');
        var hideDESCRIPCION = Ext.util.Cookies.get(comp + 'DESCRIPCION'+ 'HIDE');
        var hideREFERENCIA = Ext.util.Cookies.get(comp + 'REFERENCIA'+ 'HIDE');
        var hideREFERENCIA2 = Ext.util.Cookies.get(comp + 'REFERENCIA2'+ 'HIDE');
        var hideCHEQUE = Ext.util.Cookies.get(comp + 'CHEQUE'+ 'HIDE');
        var hideRFC = Ext.util.Cookies.get(comp + 'RFC'+ 'HIDE');
        var hideCARGOS = Ext.util.Cookies.get(comp + 'txtCargosDet'+ 'HIDE');
        var hideABONOS = Ext.util.Cookies.get(comp + 'txtAbonosDet'+ 'HIDE');
        var hideFECHA_DOCUMENTO = Ext.util.Cookies.get(comp + 'dtFechaDet'+ 'HIDE');

        //msgOut(grid.query('gridcolumn'));
//            msgOut('withREFERENCIA');
//            msgOut(withREFERENCIA);
       var columnas = grid.query('gridcolumn');
        if (!Ext.isEmpty(withCC)) {
            var colCC = columnas[7];
            colCC.setWidth(Number(withCC));
        }
        if (!Ext.isEmpty(withCT)) {
            var colCT = columnas[8];
            colCT.setWidth(Number(withCT));
        }
        if (!Ext.isEmpty(withCUENTA)) {
            var colCUENTA = columnas[9];
            colCUENTA.setWidth(Number(withCUENTA));
        }
        if (!Ext.isEmpty(withNOMCUENTA)) {
            var colNomCuenta = columnas[10];
            colNomCuenta.setWidth(Number(withNOMCUENTA));
        }

        if (!Ext.isEmpty(withDESCRIPCION)) {
            var colDescripc = columnas[11];
            colDescripc.setWidth(Number(withDESCRIPCION));
        }

        if (!Ext.isEmpty(withREFERENCIA)) {
           columnas[12].setWidth(Number(withREFERENCIA));
//                colDescripc.setWidth( Number(withREFERENCIA) );
        }
        if (!Ext.isEmpty(withREFERENCIA2)) {
            columnas[13].setWidth(Number(withREFERENCIA2));
        }
        
         if (!Ext.isEmpty(withCHEQUE))
           columnas[14].setWidth(Number(withCHEQUE));
       
        if (!Ext.isEmpty(withRFC))
           columnas[15].setWidth(Number(withRFC));
        
        if (!Ext.isEmpty(withCARGOS))
           columnas[16].setWidth(Number(withCARGOS));
        
        if (!Ext.isEmpty(withABONOS))
            columnas[17].setWidth(Number(withABONOS));
        
        if (!Ext.isEmpty(withFECHA_DOCUMENTO))
            columnas[18].setWidth(Number(withFECHA_DOCUMENTO));
        
        if (!Ext.isEmpty(hideCC)) {                   
            var colCCHide = columnas[7];
                        
            if (hideCC === '1'){
                colCCHide.setVisible(true);
            }
            if (hideCC === '0'){
                colCCHide.setVisible(false);
            }
        }
        if (!Ext.isEmpty(hideCT)) {
            var colCTHide = columnas[8];
            
            if (hideCT === '1'){
                colCTHide.setVisible(true);
            }
            if (hideCT === '0'){
                colCTHide.setVisible(false);
            }
            
            
        }
        if (!Ext.isEmpty(hideCUENTA)) {
            var colCUENTAHide = columnas[9];
            
            if (hideCUENTA === '1'){
                
                colCUENTAHide.setVisible(true);
            }
            
            if (hideCUENTA === '0'){
                
                colCUENTAHide.setVisible(false);
            }
            
            
        }
        if (!Ext.isEmpty(hideNOMCUENTA)) {
            var colNomCuentaHide = columnas[10];
            
            if (hideNOMCUENTA === '1'){
                
                colNomCuentaHide.setVisible(true);
            }
            if (hideNOMCUENTA === '0'){
                
                colNomCuentaHide.setVisible(false);
            }
            
            
        }

        if (!Ext.isEmpty(hideDESCRIPCION)) {
            var colDescripcHide = columnas[11];
            
            if (hideDESCRIPCION === '1'){
                
                colDescripcHide.setVisible(true);
                
            }
            
            if (hideDESCRIPCION === '0'){
                
                colDescripcHide.setVisible(false);
                
            }
            
            
        }

        if (!Ext.isEmpty(hideREFERENCIA)) {
            
            if(hideREFERENCIA === '1'){
            
             columnas[12].setVisible(true);
                
            }
            if(hideREFERENCIA === '0'){
            
             columnas[12].setVisible(false);
                
            }
            
           
//                colDescripc.setWidth( Number(withREFERENCIA) );
        }
        if (!Ext.isEmpty(hideREFERENCIA2)) {
            
            if (hideREFERENCIA2 === '1'){
                
                columnas[13].setVisible(true);
            }
            
             if (hideREFERENCIA2 === '0'){
                
                columnas[13].setVisible(false);
            }
            
            
        }
        
         if (!Ext.isEmpty(hideCHEQUE)){
             
             if (hideCHEQUE === '1'){
                 
                 columnas[14].setVisible(true);
                 
             }
         
             if (hideCHEQUE === '0'){
                 
                 columnas[14].setVisible(false);
                 
             }
           
         }
        if (!Ext.isEmpty(hideRFC)){
            
            if (hideRFC === '1'){
                
                columnas[15].setVisible(true);
                
            }
            
            if (hideRFC === '0'){
                
                columnas[15].setVisible(false);
                
            }
            
           
       }
        if (!Ext.isEmpty(hideCARGOS)){
            if (hideCARGOS === '1'){
                columnas[16].setVisible(true); 
                
            }
            
            if (hideCARGOS === '0'){
                columnas[16].setVisible(false); 
                
            }
            
            
          
       }
        if (!Ext.isEmpty(hideABONOS)){
            
            if(hideABONOS === '1'){
                
                columnas[17].setVisible(true);
            }
            
            if(hideABONOS === '0'){
                
                columnas[17].setVisible(false);
            }
            
            
        }
        if (!Ext.isEmpty(hideFECHA_DOCUMENTO)){
            
            if(hideFECHA_DOCUMENTO === '1'){
                
                columnas[18].setVisible(true);
                
            }
            
             if(hideFECHA_DOCUMENTO === '0'){
                
                columnas[18].setVisible(false);
                
            }
            
        }
},
    cambiarEdicion: function(editor, context, eOpts) {

        if (Ext.isEmpty(context.record.data.NUMERO)) {

            //context.cancel= false;
            context.grid.columns[4].setEditor({
                xtype: 'combo',
                id: 'cboTipoPoliza2',
                name: 'cboTipoPoliza2',
                itemId: 'cboTipoPoliza2',
                displayField: 'NOMBRE1',
                valueField: 'TIPO_POLIZA',
                store: 'StoreTipoPolizaS',
                typeAhead: true,
                selectOnFocus: true,
                minChars: 0,
                // editable:false,
                forceSelection: true,
                autoSelect: true,
                allowBlank: false

            });
            context.grid.columns[5].setEditor({
                xtype: 'datefield',
                format: 'd/m/Y',
                submitFormat: 'd/m/Y'
            });

        } else {

            // context.cancel= true;
            context.grid.columns[4].setEditor(null);
            context.grid.columns[5].setEditor(null);
        }


    },
    imprimirPoliza: function(value) {
        var me = this,
                grid = me.getGridMaestro(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado la poliza");
        }
        var compania = record.get('COMPANIA');
        var numero = record.get('NUMERO');
        var tipoPoliza = record.get('TIPO_POLIZA');
        var fecha = record.get('FECHA');

        var fechaM;
        if (Ext.isDate(fecha)) {
            fechaM = Ext.Date.format(fecha, 'dmY');
            fecha = fechaM;
        } else {

            fechaM = Ext.Date.parse(fecha, 'd/m/Y');
            msgOut(fechaM);
            var fechaNueva = Ext.Date.format(fechaM, 'dmY');
            msgOut(fechaNueva);
            fecha = fechaNueva;
        }

        //var fecha = Ext.Date.format(record.get('FECHA'), 'dmY');

        var string = Ext.String.format(
                //'<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
                'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con&orden=1',
                numero,
                compania,
                tipoPoliza,
                fecha,
                compania
                );
        window.open(string);

        return string;
    },
    imprimirPDF: function() {
        var me = this,
                grid = me.getGridArchivos(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado XML");
            return;
        }
        var compania = record.get('COMPANIA');
        var xml = record.get('URL');
//        msgOut("xml"+xml);
        xml = xml.replace('.xml', '.pdf');
        xml = xml.replace('.XML', '.pdf');


        var string = Ext.String.format(
                'http://' + window.location.host + '/carga_erp/xml/{0}/{1}',
                //'/empres/XML/{0}/{1}',
                compania,
                xml
                );

        Ext.create('Ext.window.Window', {
            title: 'PDF',
            height: 500,
            width: 500,
            minimizable: true,
            maximizable: true,
            layout: 'fit',
            items: {// Let's put an empty grid in just to illustrate fit layout
                xtype: 'panel',
                //title: 'My PDF',
                width: 600,
                height: 400,
                items: {
                    xtype: 'component',
                    autoEl: {
                        tag: 'iframe',
                        style: 'height: 100%; width: 100%; border: none',
                        src: string
                    }
                }
            }
        }).show();

        // window.open(string);

    },
    findCompania: function() {
        var me = this;
        Ext.Ajax.request({
            url: 'process/data/BuscaCompania',
            method: 'GET',
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var nombre = val.data[0].NOMBRE1;

                    var me = this,
                            grid = me.getGridMaestro();
                    grid.setTitle(val.data[0].NOMBRE1);
                    me.loadCookie();
                } else if (!val.success) {
                    msgBoxErr('Compania', 'Error compañia no encontrada');
                }
            },
            timeout: 30000

        });
    },
    getLlaveMaestro: function() {
        var me = this,
                grid = me.getGridMaestro(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];
        if (Ext.isEmpty(record)) {

            msgBoxErr("Error", "No ha seleccionado la poliza");
            return;
        }

        var compania = record.get('COMPANIA');
        var tipoPoliza = record.get('TIPO_POLIZA');
        var numero = record.get('NUMERO');
        var fecha = record.get('FECHA');
        var fechaCam;
        if (Ext.isDate(fecha)) {
            fechaCam = Ext.Date.format(fecha, 'd/m/Y');
            fecha = fechaCam;
        }

//              var ID = new Object();


        var getLlaveMaestro = new Array(4);
        getLlaveMaestro['compania'] = compania;
        getLlaveMaestro['tipoPoliza'] = tipoPoliza;
        getLlaveMaestro['numero'] = numero;
        getLlaveMaestro['fecha'] = fecha;
        return getLlaveMaestro;

    },
    actualizaEstatus: function(compania, tipoPoliza, numero, fecha) {
        var me = this,
                grid = me.getGridMaestro(),
                records = grid.getSelectionModel().getSelection();




        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado la poliza");
        }
        var compania = record.get('COMPANIA');
        var numero = record.get('NUMERO');
        var tipoPoliza = record.get('TIPO_POLIZA');
        var fecha = record.get('FECHA');

        var fechaM;
        if (Ext.isDate(fecha)) {
            fechaM = Ext.Date.format(fecha, 'd/m/Y');
            fecha = fechaM;
        } else {

            fechaM = Ext.Date.parse(fecha, 'd/m/Y');

            var fechaNueva = Ext.Date.format(fechaM, 'd/m/Y');
            msgOut(fechaNueva);
            fecha = fechaNueva;
        }


        if (Ext.isEmpty(numero)) {
            compania = record.get('COMPANIA');
            tipoPoliza = record.get('NUMERO');
            numero = record.get('TIPO_POLIZA');
            fecha = fechaM;
        }

        var labelEst = grid.getChildByElement('lblEstatus', true);

        Ext.Ajax.request({
            url: 'process/data/ActualizaEstatus',
            method: 'GET',
            scope: this,
            params: {
                compania: compania,
                tipoPoliza: tipoPoliza,
                fecha: fecha,
                numero: numero
            },
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var estat = val.data[0].ESTATUS;


                    if (estat === 1) {

                        labelEst.setValue('<span style="color:white;background-color:red;font-weight: bold;font-size: smaller;">DESCUADRADA</span>');


                    }
                    if (estat === 0) {

                        labelEst.setValue('<span style="color:blue;font-weight: bold;font-size: smaller;">CAPTURADA</span>');

                    }
                    if (estat === 2) {

                        labelEst.setValue('<span style="color:green;font-weight: bold;font-size: smaller;">ACTUALIZADA</span>');

                    }
                    if (estat === 99) {

                        labelEst.setValue('<span style="color:blue;font-weight: bold;font-size: smaller;">BLOQUEADA</span>');

                    }

                } else if (!val.success) {

                }
            },
            timeout: 30000

        });

    },
    downloadExcel: function() {
        var me = this,
                grid = me.getGridMaestro(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        if (Ext.isEmpty(record)) {

            msgBoxErr("Error", "No ha seleccionado la poliza");

        }
//        var compania = record.get('COMPANIA');
        var numero = record.get('NUMERO');
        var tipoPoliza = record.get('TIPO_POLIZA');
        var fecha = '';
        if (Ext.isDate(record.get('FECHA')))
            fecha = Ext.Date.format(record.get('FECHA'), 'd/m/Y');
        else
            fecha = record.get('FECHA');
        // var fecha = Ext.Date.format(record.get('FECHA'), 'd/m/Y');


        var exportApiUrl = "report/xls";

        var form = Ext.create('Ext.form.Panel', {
            standardSubmit: true,
            url: exportApiUrl
        });

        form.submit({
            params: {
                tipo: tipoPoliza,
                fecha: fecha,
                numero: numero
            }
        });
    },
    downloadDocx: function() {

        var me = this,
                grid = me.getGridMaestro(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        if (Ext.isEmpty(record)) {

            msgBoxErr("Error", "No ha seleccionado la poliza");

        }
//        var compania = record.get('COMPANIA');
        var numero = record.get('NUMERO');
        var tipoPoliza = record.get('TIPO_POLIZA');
        var fecha = '';
        if (Ext.isDate(record.get('FECHA')))
            fecha = Ext.Date.format(record.get('FECHA'), 'd/m/Y');
        else
            fecha = record.get('FECHA');


        var exportApiUrl = "report/word";

        var form = Ext.create('Ext.form.Panel', {
            standardSubmit: true,
            url: exportApiUrl
        });

        form.submit({
            params: {
                tipo: tipoPoliza,
                fecha: fecha,
                numero: numero
            }
        });
    },
    downloadPdf: function() {

        var me = this,
                grid = me.getGridMaestro(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        if (Ext.isEmpty(record)) {

            msgBoxErr("Error", "No ha seleccionado la poliza");

        }
//        var compania = record.get('COMPANIA');
        var numero = record.get('NUMERO');
        var tipoPoliza = record.get('TIPO_POLIZA');
        var fecha = '';
        if (Ext.isDate(record.get('FECHA')))
            fecha = Ext.Date.format(record.get('FECHA'), 'd/m/Y');
        else
            fecha = record.get('FECHA');


        var exportApiUrl = "report/pdf";

        var form = Ext.create('Ext.form.Panel', {
            standardSubmit: true,
            url: exportApiUrl
        });

        form.submit({
            params: {
                tipo: tipoPoliza,
                fecha: fecha,
                numero: numero
            }
        });
    },
    pasteDetalleExcel: function() {
        var me = this,
                grid = me.getGridDetalle();
        grid.setLoading("Importando a Excel...");
        var ta = document.createElement('textarea');
        ta.id = 'cliparea';

        ta.style.position = 'absolute';
        ta.style.left = '-1000px';
        ta.style.top = '-1000px';
        ta.value = '';

        document.body.appendChild(ta);
        document.designMode = 'off';

        setTimeout(function() {
            me.getRecsFromCsv(grid, ta);
        }, 100);

        ta.focus();
        ta.select();
    },
    copyDetalleExcel: function() {
        var me = this,
                grid = me.getGridDetalle();
        var recs = grid.getSelectionModel().getSelection();

        if (recs && recs.length != 0) {

            var clipText = me.getCsvDataFromRecs(recs);

            var ta = document.createElement('textarea');

            ta.id = 'cliparea';
            ta.style.position = 'absolute';
            ta.style.left = '-1000px';
            ta.style.top = '-1000px';
            ta.value = clipText;
            document.body.appendChild(ta);
            document.designMode = 'off';

            ta.focus();
            ta.select();

            setTimeout(function() {

                document.body.removeChild(ta);

            }, 100);
        }
    },
    getCsvDataFromRecs: function(records) {
        var me = this,
                grid = me.getGridDetalle(),
                store = grid.getStore();
        var clipText = '';

        var currRow = store.find('SEC', records[0].data.id);

        for (var i = 0; i < records.length; i++) {

            var index = store.find('SEC', records[i].data.id);
            var r = index;
            var rec = records[i];
            var cv = grid.columns;

            for (var j = 0; j < cv.length; j++) {
                var val = rec.data[cv[j].dataIndex];
                if (Ext.isEmpty(val))
                    val = 'nulo';
                if (r === currRow) {
                    clipText = clipText.concat(val, "\t");
                } else {
                    currRow = r;
                    clipText = clipText.concat("\n", val, "\t");
                }
            }

        }

        return clipText;
    },
    getRecsFromCsv: function(grid, ta) {
        var me = this,
                grid = me.getGridDetalle(),
                gridM = me.getGridMaestro(),
                store = grid.getStore(),
                rows = grid.getSelectionModel().getSelection(),
                rowsM = gridM.getSelectionModel().getSelection(),
                selectedM = rowsM[0],
                sm = rows[0];

        if (Ext.isEmpty(selectedM)) {
            msgBoxErr('Error', 'Se necesita seleccionar una poliza');
            grid.setLoading(false);
            return;
        }



        if (Ext.isEmpty(sm)) {
            var gRow = 0;
        } else
            var gRow = store.indexOf(sm);


        var compania = selectedM.data.COMPANIA;
        var tipo = selectedM.data.TIPO_POLIZA;
        var numero = selectedM.data.NUMERO;
        var fecha = '';
        if (Ext.isDate(selectedM.data.FECHA))
            fecha = Ext.Date.format(selectedM.data.FECHA, 'd/m/Y');
        else
            fecha = selectedM.data.FECHA;
//           msgOut(numero);

        document.body.removeChild(ta);

//	    	var del = '';
//
//	    	if (ta.value.indexOf("\r\n")) {
//
//	    		del = "\r\n";
//
//	    	} else if (ta.value.indexOf("\n")) {
//
//	    		del = "\n";
//
//	    	}

        var rows = ta.value.split("\n");
//                msgOut('rows:'+rows.length);

        for (var i = 0; i < rows.length; i++) {
            // msgOut("rows:"++"<-");

            if (Ext.isEmpty(Ext.String.trim(rows[i])))
                break;

            var cols = rows[i].split("\t");
            //  msgOut("cols:"+Ext.String.trim(cols)+"<-");


            var columns = grid.columns;

            if (cols.length > columns.length)
                cols = cols.slice(0, columns.length - 1);

            if (gRow === -1) {
                Ext.Msg.alert('Select un registro para pegar');
                grid.setLoading(false);
                return;
            }

            var cfg = {};
            var tmpRec = store.getAt(gRow);
//		    	var existing = false;
//	                
//                        msgOut('tmpRec:'+tmpRec);
            if (tmpRec) {
                cfg = tmpRec.data;
//			    	existing = true;	
            }
//	
            var l = cols.length;

            if (cols.length > columns.length)
                l = columns.length;

            if (cols.length < columns.length) {
                grid.setLoading(false);
                msgBoxErr("Error", "La cantidad de columnas no coincide");
                return;
            }

            for (var j = 0; j < l; j++) {

//			    	if (cols[j] === "") {		
//			    		return;		
//			    	}

                if (cols[j] === 'undefined')
                    cfg[columns[j].dataIndex] = null;
                else if (cols[j] === 'null')
                    cfg[columns[j].dataIndex] = null;
                else if (cols[j] === "")
                    cfg[columns[j].dataIndex] = null;
                else if (cols[j] === "nulo")
                    cfg[columns[j].dataIndex] = null;
                else
                    cfg[columns[j].dataIndex] = cols[j];
            }
            //msgOut('cfg1');
            //msgOut(cfg);

            me.storeInitialCount++;

            cfg['SEC'] = '';
            cfg['ID'] = '';
            cfg['id'] = null;
            cfg['TIPO_POLIZA'] = tipo;
            cfg['FECHA'] = fecha;
            cfg['NUMERO'] = numero;
            cfg['COMPANIA'] = compania;

            var tmpRow = gRow;

            grid.getSelectionModel().clearSelections(true);
            //msgOut('tmpRow:'+tmpRow);
//                        msgOut(cfg);
            var tmpRec = Ext.create('AppPolizas3.model.ModeloDetalle', cfg);

            //	if (existing)	
            //store.removeAt(tmpRow);	
            store.insert(tmpRow, tmpRec);
            gRow = ++tmpRow;

        }

        if (gRow === store.getCount()) {

            var RowRec = Ext.create('AppPolizas3.model.ModeloDetalle', {});
            store.add(RowRec);

        }

        gRow = 0;
        grid.setLoading(false);

    },
    cambiaTab: function(ed, field, e, celleditor) {
        var me = this,
                grid = me.getGridDetalle(),
                store = grid.getStore(),
                rows = grid.getSelectionModel().getSelection(),
                sm = rows[0];
        var pos = store.indexOf(sm);


        if (e.getKey() === e.TAB) {

            e.stopEvent();
            if (ed.editorId === 'detCC')
                celleditor.startEdit(pos, 8);

            if (ed.editorId === 'detCT')
                celleditor.startEdit(pos, 9);

            if (ed.editorId === 'detCUENTA')
                celleditor.startEdit(pos, 11);

            if (ed.editorId === 'detDESCRIPCION')
                celleditor.startEdit(pos, 12);

            if (ed.editorId === 'detREFERENCIA')
                celleditor.startEdit(pos, 13);

            if (ed.editorId === 'detREFERENCIA2')
                celleditor.startEdit(pos, 14);

            if (ed.editorId === 'detCHEQUE')
                celleditor.startEdit(pos, 15);

            if (ed.editorId === 'detRFC')
                celleditor.startEdit(pos, 16);

            if (ed.editorId === 'txtCargosDet')
                celleditor.startEdit(pos, 17);

            if (ed.editorId === 'txtAbonosDet')
                celleditor.startEdit(pos, 18);

            if (ed.editorId === 'dtFechaDet') {
                celleditor.completeEdit();
                if (pos < (store.getCount( ) - 1)) {
                    celleditor.cancelEdit();
                    celleditor.startEditByPosition({
                        row: pos + 1,
                        column: 7
                    });
                } else if (pos === (store.getCount( ) - 1)) {
                    me.addDet(null, celleditor, store.getCount());
                    //me.saveDet('1');
                } else if (Ext.isEmpty(pos)) {
                    me.addDet(null, celleditor, store.getCount());
                    //me.saveDet('1');
                }



            }

        }
    },
    verArchivo: function(btn) {

        var me = this,
                grid = me.getGridArchivos(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];
        var tipo = record.get('TIPO');

        msgOut("tipo" + tipo);
        
        
        if(tipo === '5'){
            
            var url = record.get('URL');
            
              var string = Ext.String.format(
                    //'http://appferaz1.com/{0}',
                 //   'http://' + window.location.host + '/empres/applets/filesComprobacion/{0}/{1}',
                 'http://appferaz1.com/empres/applets/filesComprobacion/{0}',               
                    url
                    );

            Ext.create('Ext.window.Window', {
                title: 'Archivo',
                height: 500,
                width: 500,
                minimizable: true,
                maximizable: true,
                layout: 'fit',
                items: {// Let's put an empty grid in just to illustrate fit layout
                    xtype: 'panel',
                    //title: 'My PDF',
                    width: 600,
                    height: 400,
                    items: {
                        xtype: 'component',
                        autoEl: {
                            tag: 'iframe',
                            style: 'height: 100%; width: 100%; border: none',
                            src: string
                        }
                    }
                }
            }).show();
        }
        
        
        if(tipo === '4'){
            
            
            
            if (Ext.isEmpty(record)) {
                msgBoxErr("Error", "No ha seleccionado XML");
                return;
            }
            //var compania = record.get('COMPANIA');
            var compania = 'VLH1';
            var xml = record.get('URL');
            msgOut("xml" + xml);
            msgOut("compania" + compania);
           xml = xml.replace('.xml', '.pdf');
            xml = xml.replace('.XML', '.pdf');


            var string2 = Ext.String.format(
                   // 'http://' + window.location.host + '/carga_erp/xml/{0}/{1}',
                    'http://appferaz1.com/carga_erp/xml/{0}/{1}',
                    //'/empres/XML/{0}/{1}',
                    compania,
                    xml
                    );
            
            console.log(string2);

            Ext.create('Ext.window.Window', {
                title: 'xml',
                height: 500,
                width: 500,
                minimizable: true,
                maximizable: true,
                layout: 'fit',
                items: {// Let's put an empty grid in just to illustrate fit layout
                    xtype: 'panel',
                    //title: 'My PDF',
                    width: 600,
                    height: 400,
                    items: {
                        xtype: 'component',
                        autoEl: {
                            tag: 'iframe',
                            style: 'height: 100%; width: 100%; border: none',
                            src: string2
                        }
                    }
                }
            }).show();
            
        }
        
        if (tipo === '3'){
            
             var url = record.get('URL');
//           


            var string = Ext.String.format(
                    url
                    );

            Ext.create('Ext.window.Window', {
                title: 'Reporte de Timbrados',
                height: 500,
                width: 500,
                minimizable: true,
                maximizable: true,
                layout: 'fit',
                items: {// Let's put an empty grid in just to illustrate fit layout
                    xtype: 'panel',
                    //title: 'My PDF',
                    width: 600,
                    height: 400,
                    items: {
                        xtype: 'component',
                        autoEl: {
                            tag: 'iframe',
                            style: 'height: 100%; width: 100%; border: none',
                            src: string
                        }
                    }
                }
            }).show();

            // window.open(string);

        
            return;
            
            
        }

        if ((tipo === '1' || Ext.isEmpty(tipo))) {

            msgOut("tipo1");


            if (Ext.isEmpty(records)) {
                Ext.Msg.alert('Error', 'Archivo no seleccionado');

                return;
            }
            //msgOut("URL:" + record.get('URL'));
            var resp = record.get('URL');

            window.open(resp, '_blank', 'fullscreen=yes');

        } else {
            
            if(tipo !== '4' && tipo !== '5'){

            if (Ext.isEmpty(record)) {
                msgBoxErr("Error", "No ha seleccionado XML");
                return;
            }
            var compania = record.get('COMPANIA');
            var xml = record.get('URL');
//            msgOut("xml" + xml);
            xml = xml.replace('.xml', '.pdf');
            xml = xml.replace('.XML', '.pdf');


            var string = Ext.String.format(
                    'http://' + window.location.host + '/carga_erp/xml/{0}/{1}',
                    //'/empres/XML/{0}/{1}',
                    compania,
                    xml
                    );

            Ext.create('Ext.window.Window', {
                title: 'PDF',
                height: 500,
                width: 500,
                minimizable: true,
                maximizable: true,
                layout: 'fit',
                items: {// Let's put an empty grid in just to illustrate fit layout
                    xtype: 'panel',
                    //title: 'My PDF',
                    width: 600,
                    height: 400,
                    items: {
                        xtype: 'component',
                        autoEl: {
                            tag: 'iframe',
                            style: 'height: 100%; width: 100%; border: none',
                            src: string
                        }
                    }
                }
            }).show();
        }

            // window.open(string);

        }

    },
    deleteArchivo: function(btn) {

        var me = this,
                grid = me.getGridArchivos(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];
//         
//         var compania = record.get('COMPANIA');
//         var fecha = record.get('FECHA');
//         var numero = record.get('NUMERO');
//         var tipoPoliza = record.get('TIPO_POLIZA');
        var tipo = record.get('TIPO');

        msgOut("tipo" + tipo);

        if (tipo === '2') {

            msgBoxErr("Error", "No se puede borrar este archivo, ubicacion incorrecta");

            return;

        }

        if (Ext.isEmpty(records))
            return;

        var resp = Ext.MessageBox.show({
            title: 'Borrara Archivo',
            msg: 'Esta seguro que desea borrar el Archivo?',
            icon: Ext.MessageBox.QUESTION,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {

                    var selection = records[0];

                    if (selection) {
                        // msgOut(selection);
                        var fecha;
                        fecha = Ext.Date.format(selection.data.FECHA, 'd/m/Y');
                        selection.data.FECHA = fecha;
                        store.remove(selection);

                        grid.setLoading("Borrando Archivo...");
                        store.sync({
                            scope: this,
                            success: function(resp, dos) {
                                msgBox("Borrar Archivo", 'Archivo Borrado');
                                //this.loadSueldo();

                            },
                            failure: function(resp, dos) {
                                msgBoxErr('Error', 'Error al borrar Archivo:' + store.getProxy( ).getReader().rawData.msg);
                                //this.loadSueldo();
                                grid.setLoading(false);
                            },
                            callback: function(records, operation) {
                                grid.setLoading(false);
                            }

                        });

                    }



                }
            }

        });



    },
    saveArchivo2: function(btn) {

        var me = this,
                grid = me.getGridArchivos(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore(),
                form = btn.up('formarchivos2'),
                win = form.up('window'),
                basicForm = form.getForm();

        var compania = basicForm.findField('archCOMPANIA2').getValue();
        var tipoPoliza = basicForm.findField('archTIPO_POLIZA2').getValue();
        var fecha = basicForm.findField('archFECHA2').getValue();
        var numero = basicForm.findField('archNUMERO2').getValue();

        store.proxy.extraParams.compania = compania;
        store.proxy.extraParams.tipo_poliza = tipoPoliza;
        store.proxy.extraParams.fecha = fecha;
        store.proxy.extraParams.numero = numero;

        if (basicForm.isValid()) {
            grid.setLoading("Guardando Archivo...");
            basicForm.submit({
                success: function(form, action) {
                    win.close();
                    Ext.Msg.alert('Guardado', action.result.msg);
                    store.loadData([], false);
                    store.load({
                        callback: function() {
                            grid.setLoading(false);

                            // me.loadSumaDetalle(tipoPol,numeroPol,fechaPol);
                        }
                    });
                    //me.setSession(action.result.data[0].UC_COMPANIA, action.result.data[0].US_USUARIO);

                },
                failure: function(form, action) {
                    Ext.Msg.alert('Error', action.result.msg);
                }
            });


        } else {

            basicForm.getFields().each(function(item) {
                if (!item.isValid()) {
                    msgBoxErr("Error falta un campo", item.name);
                    return;
                }

            });
        }

    },
    addArchivo: function(btn) {

        var me = this,
                grid = me.getGridMaestro(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];

        if (Ext.isEmpty(record)) {

            msgBoxErr("Error", "No ha seleccionado la poliza");
            return;
        }
        var compania = record.get('COMPANIA');
        var numero = record.get('NUMERO');
        var tipoPoliza = record.get('TIPO_POLIZA');
        var fecha = record.get('FECHA');


        var view = Ext.widget('windowarchivos');
        view.setTitle('Agregar Archivo');
        var form = view.down('formarchivos2').getForm();

        form.findField('archCOMPANIA2').setValue(compania);
        form.findField('archTIPO_POLIZA2').setValue(tipoPoliza);
        form.findField('archFECHA2').setValue(fecha);
        form.findField('archNUMERO2').setValue(numero);


    },
    nombreCuenta: function(nombre, cuenta) {
        var me = this,
                grid = me.getGridDetalle(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];
        //  msgOut("nombre"+nombre);
        record.set('NOMCUENTA', nombre);
        record.set('CUENTA', cuenta);

    },
    saveDet: function(btn) {

        var me = this,
                grid = me.getGridDetalle(),
                gridMaestro = me.getGridMaestro(),
                records = gridMaestro.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];
        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

        var compania = record.get('COMPANIA');
        var tipoPoliza = record.get('TIPO_POLIZA');
        var numero = record.get('NUMERO');
        var fecha = record.get('FECHA');
        
        


        if (!Ext.isEmpty(news) || !Ext.isEmpty(modified)) {
            if (Ext.isEmpty(btn))
                grid.setLoading("Guardando Poliza...");
            var fechaCam;
            var i = 0;
            if (!Ext.isEmpty(modified)) {
                
                if (this.permisosP.indexOf("M")<0 ) {
                         
                         msgBoxErr("Sin Permisos","El usuario no tiene permisos de editar");
                         grid.setLoading(false);
                         return;
                         
                        }  

                for (i = 0; i < modified.length; i++) {
                    if (Ext.isEmpty(modified[i].data.CUENTA_ALIAS)) {
                        msgBoxErr("Error Cuenta", "La Cuenta no existe");
                        grid.setLoading(false);
                        return;
                    }
                    fechaCam = Ext.Date.format(modified[i].data.FECHA_DOCUMENTO, 'd/m/Y');
                    modified[i].data.FECHA_DOCUMENTO = fechaCam;

                }
            }
            if (!Ext.isEmpty(news)) {

                for (i = 0; i < news.length; i++) {
                    if (Ext.isEmpty(news[i].data.CUENTA_ALIAS)) {
                        msgBoxErr("Error Cuenta", "La Cuenta no existe");
                        grid.setLoading(false);
                        return;
                    }
                    fechaCam = Ext.Date.format(news[i].data.FECHA_DOCUMENTO, 'd/m/Y');
                    news[i].data.FECHA_DOCUMENTO = fechaCam;

                }
            }



            store.sync({
                scope: this,
                success: function(resp, dos) {
                    if (Ext.isEmpty(btn))
                        grid.setLoading(false);
                    me.loadSumaDetalle();
                    
                },
                failure: function(resp, dos) {
                    msgBoxErr('Error', 'Error al guardar Poliza:' + store.getProxy( ).getReader().rawData.msg);
                    if (Ext.isEmpty(btn))
                        grid.setLoading(false);
                },
                callback: function(records, operation, val3) {

                    me.procesaErroresDetalle(store.getProxy().getReader());
                    me.actualizaEstatus(compania, tipoPoliza, numero, fecha);
                    me.verificaCuentasOrden(compania, tipoPoliza, numero, fecha);
                    if (Ext.isEmpty(btn))
                        grid.setLoading(false);


                }

            });
        }

    },
    procesaErroresDetalle: function(reader) {
        msgOut(reader.rawData);
        var i = 0;
        var mensajes = "";
        if (Ext.isEmpty(reader.rawData.dataErr))
            return;
        for (i = 0; i < reader.rawData.dataErr.length; i++) {
            msgOut(reader.rawData.dataErr[i].msgErr);
            mensajes = mensajes + "," + reader.rawData.dataErr[i].msgErr;
        }
        msgBoxErr('Existieron errores al guardar', mensajes);
    },
    saveMaestro: function(celleditor) {
        var me = this,
                grid = me.getGridMaestro(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();

        var record = records[0];
        celleditor.completeEdit();
        var compania = record.get('COMPANIA');
        var tipoPoliza = record.get('TIPO_POLIZA');
        // msgOut("TIPO_POLIZA"+tipoPoliza);
        var numero = record.get('NUMERO');
        var fecha = record.get('FECHA');

        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

        var fechaCam, i, j;
        var data = [];
        var data2 = [];
        var msg;
        
         
        

        if (!Ext.isEmpty(news) || !Ext.isEmpty(modified))
            grid.setLoading("Guardando Poliza...");

        if (!Ext.isEmpty(news)) {
            for (i = 0; i < news.length; i++) {

                if (Ext.isDate(news[i].data.FECHA)) {
                    fechaCam = Ext.Date.format(news[i].data.FECHA, 'd/m/Y');
                    news[i].data.FECHA = fechaCam;
                }
                
                if(!Ext.isEmpty(news[i].data.TIPO_SOLICITUD)){
                 var claveTipoS =  news[i].data.TIPO_SOLICITUD.indexOf("-");
                
                 var claveTipoSC = news[i].data.TIPO_SOLICITUD.substring(0,claveTipoS);
                
                if (claveTipoSC === 'AF' || claveTipoSC === 'FC'){
                    
                     if (Ext.isEmpty(news[i].data.NUM_ORDEN)){
  
        
                         data.push(claveTipoSC);
                         
                         
                     }
                    
                }
                
                if (claveTipoSC === 'DE' || claveTipoSC === 'CO'){
                    
                     if (Ext.isEmpty(news[i].data.NUM_TRAMITE)){
  
        
                         data2.push(claveTipoSC);
                         
                         
                     }
                    
                }
                
                }
            }
            
            
                    if (data.length > 0){
                        
                        msg = 'El campo numero de Orden es requerido';
                    // Ext.Msg.alert('Requerido', 'El campo numero de Orden es requerido');
                     
                     //grid.setLoading(false);
                     
                      //return;
                        
                        
                    }
                    
                    if (data2.length > 0){
                        
                      msg = 'El campo numero de Tramite es requerido';  
                     //Ext.Msg.alert('Requerido', 'El campo numero de Tramite es requerido');
                     
                     //grid.setLoading(false);
                     
                     // return;
                        
                        
                    }
                    
            
           
        }

        if (!Ext.isEmpty(modified)) {
            
           if (this.permisosP.indexOf("M")<0 ) {
                         
                         msgBoxErr("Sin Permisos","El usuario no tiene permisos de editar");
                         grid.setLoading(false);
                         return;
                         
                        }  

            for (j = 0; j < modified.length; j++) {
                
                


                if (Ext.isDate(modified[j].data.FECHA)) {
                    fechaCam = Ext.Date.format(modified[j].data.FECHA, 'd/m/Y');
                    modified[j].data.FECHA = fechaCam;
                }
                
                if(!Ext.isEmpty(modified[j].data.TIPO_SOLICITUD))  {  
                 var claveTipoS =  modified[j].data.TIPO_SOLICITUD.indexOf("-");
                
                 var claveTipoSC = modified[j].data.TIPO_SOLICITUD.substring(0,claveTipoS);
                
                if (claveTipoSC === 'AF' || claveTipoSC === 'FC'){
                    
                     if (Ext.isEmpty(modified[j].data.NUM_ORDEN)){
  
        
                         data.push(claveTipoSC);
                         
                         
                     }
                    
                }
                
                 if (claveTipoSC === 'DE' || claveTipoSC === 'CO'){
                    
                     if (Ext.isEmpty(modified[j].data.NUM_TRAMITE)){
  
        
                         data2.push(claveTipoSC);
                         
                         
                     }
                    
                }
                
                }  
//                

            }
            
                       if (data.length > 0){
                        
                        msg = 'El campo numero de Orden es requerido';
                     //Ext.Msg.alert('Requerido', 'El campo es requerido');
                     
                     //grid.setLoading(false);
                     
                     // return;
                        
                        
                    }
                    
                     if (data2.length > 0){
                        
                       msg = 'El campo numero de Tramite es requerido';   
                     //Ext.Msg.alert('Requerido', 'El campo numero de Tramite es requerido');
                     
                     //grid.setLoading(false);
                     
                     // return;
                        
                        
                    }
            
        }
        
         if (data2.length > 0 || data.length > 0){
        
         Ext.MessageBox.show({
            title: 'Requerido',
            msg: msg + ' desea dejarlo vacio?',
            icon: Ext.MessageBox.QUESTION,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {


                    store.sync({
                        scope: this,
                        success: function(resp, dos) {
                            // msgBox("Poliza", 'Poliza Guardada');
                            Ext.example.msg("Poliza ", 'Poliza Guardada');
                            //  store.commitChanges( );

                        },
                        failure: function(resp, dos) {
                            msgBoxErr('Error', 'Error al guardar Poliza:' + store.getProxy( ).getReader().rawData.msg);
                            grid.setLoading(false);
                        },
                        callback: function(records, operation) {
                            grid.setLoading(false);
                            this.buttonDetDisableFalse();

                            if (Ext.isEmpty(numero)) {

                                var numero = me.procesaDatosMaestro(store.getProxy().getReader());
                                me.actualizaEstatus(compania, tipoPoliza, numero, fecha);

                            } else {

                                me.actualizaEstatus(compania, tipoPoliza, numero, fecha);
                            }
                        }

                    });

                }else{
                    
                    grid.setLoading(false);
                    
                }
            }
        });
        
         }else{
         store.sync({
            scope: this,
            success: function(resp, dos) {
                // msgBox("Poliza", 'Poliza Guardada');
                Ext.example.msg("Poliza ", 'Poliza Guardada');
                //  store.commitChanges( );

            },
            failure: function(resp, dos) {
                msgBoxErr('Error', 'Error al guardar Poliza:' + store.getProxy( ).getReader().rawData.msg);
                grid.setLoading(false);
            },
            callback: function(records, operation) {
                grid.setLoading(false);
                this.buttonDetDisableFalse();

                if (Ext.isEmpty(numero)) {

                    var numero = me.procesaDatosMaestro(store.getProxy().getReader());
                    me.actualizaEstatus(compania, tipoPoliza, numero, fecha);

                } else {

                    me.actualizaEstatus(compania, tipoPoliza, numero, fecha);
                }
            }

        });
         }

    },
    sumaCA: function() {

        var me = this,
                gridDet = me.getGridDetalle(),
                //records = gridDet.getSelectionModel().getSelection(),
                storeDet = gridDet.getStore();
        //var record = records[0];


        // msgOut("entrando en suma");
        var bbarCargos = Ext.ComponentQuery.query("formcentro #totCargos")[0];
        var bbarAbonos = Ext.ComponentQuery.query("formcentro #totAbonos")[0];

        var recs2 = storeDet.getRange();
        var totCar = 0;
        var totAbo = 0;
        for (var j = 0; j < recs2.length; j++) {

            var rec2 = recs2[j];

            totCar += Number(rec2.get("CARGOS"));
            totAbo += Number(rec2.get("ABONOS"));

        }

        bbarCargos.setValue('<span style="color:blue;text-shadow: 0 1px #fff;padding: 5px 30px;font-weight: bold;">' + formatCurrency(Math.round(totCar * 1000) / 1000) + '</span>');
        bbarAbonos.setValue('<span style="color:blue;text-shadow: 0 1px #fff;padding: 5px 30px;font-weight: bold;">' + formatCurrency(Math.round(totAbo * 1000) / 1000) + '</span>');



    },
    cancelaPoliza: function(btn) {

        var me = this,
                grid = me.getGridMaestro(),
                gridDet = me.getGridDetalle(),
                storeDet = gridDet.getStore(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();

        var selection = records[0];
        var compania = selection.get('COMPANIA');
        //var fechaNue = Ext.Date.format(selection.get('FECHA'), 'd/m/Y');
        var fecha = selection.get('FECHA');
        var tipoPoliza = selection.get('TIPO_POLIZA');
        var numero = selection.get('NUMERO');


        Ext.MessageBox.show({
            title: 'Cancelar Poliza',
            msg: 'Esta seguro que desea cancelar la poliza?',
            icon: Ext.MessageBox.QUESTION,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {




                    if (Ext.isEmpty(numero) || numero === 'null') {


                        if (selection.phantom) {

                            store.remove(selection);

                        } else {
                            mascaraCmp(grid, 'Cancelando poliza...', 1);
                            store.destroy(selection);

                            store.remove(selection);

                        }
                    } else {



                        grid.setLoading("Cancelando Poliza ...");
                        Ext.Ajax.request({
                            url: 'control/poliza/del',
                            timeout: 60000,
                            scope: this,
                            params: {
                                // data: jsonData, 
                                compania: compania,
                                fecha: fecha,
                                tipoPoliza: tipoPoliza,
                                numero: numero

                            },
                            success: function(response) {
                                var text = response.responseText;
                                grid.setLoading(false);
                                gridDet.setLoading('Buscando...');
                                storeDet.loadData([], false);
                                storeDet.load({
                                    callback: function() {
                                        gridDet.setLoading(false);

                                    }
                                });

                            },
                            failure: function(resp, dos) {
                                msgOut("en failure");
                                msgBoxErr('Error', 'Error al borrar Detalle:' + storeDet.getProxy( ).getReader().rawData.msg);
                                //this.loadSueldo();
                                grid.setLoading(false);
                            },
                            callback: function(a, b, c) {
                                grid.setLoading(false);
                                msgOut("en callback");
                                if (Ext.isEmpty(c.responseText)) {
                                    msgBoxErr('Error', 'Error al Eliminar');
                                    return;

                                }
                                var res = Ext.decode(c.responseText);
                                if (res.success) {

                                    msgBox('Borrado', 'Borrado con Exito');
                                }else
                                 {

                                    msgBoxErr('Error', 'La poliza es actualizada');
                                                                }
                            }
                        });
                    }

                }
            }
        });

        this.buttonDetDisableFalse();

    },
    cancelaPolizaDet: function(btn) {

        var me = this,
                grid = me.getGridDetalle(),
                records = grid.getSelectionModel().getSelection(),
                storeDet = grid.getStore();

        if (Ext.isEmpty(records))
            return;
        //     msgOut(records.length);
        var i = 0;
        for (i = 0; i < records.length; i++) {

            var selection = records[i];
            var compania = selection.get('COMPANIA');
            var tipoPoliza = selection.get('TIPO_POLIZA');
            var numero = selection.get('NUMERO');
            var fecha = selection.get('FECHA');

            if (selection) {

                if (selection.phantom) {
                    storeDet.remove(selection);
                    //return;
                    continue;
                }

                var fecha;
                fecha = Ext.Date.format(selection.data.FECHA_DOCUMENTO, 'd/m/Y');
                selection.data.FECHA_DOCUMENTO = fecha;
                storeDet.remove(selection);

                grid.setLoading("Borrando Poliza Detalle...");
                storeDet.sync({
                    scope: this,
                    success: function(resp, dos) {
                        //   msgBox("Borrar Detalle Poliza", 'Detalle Borrado');
                        me.loadSumaDetalle();
                        //this.loadSueldo();

                    },
                    failure: function(resp, dos) {
                        msgBoxErr('Error', 'Error al borrar Detalle:' + storeDet.getProxy( ).getReader().rawData.msg);
                        //this.loadSueldo();
                        grid.setLoading(false);
                    },
                    callback: function(records, operation) {
                        me.actualizaEstatus(compania, tipoPoliza, numero, fecha);
                        me.verificaCuentasOrden(compania, tipoPoliza, numero, fecha);
                        grid.setLoading(false);
                    }

                });

            }

        }

    },
    copiarPoliza: function(btn) {

        var me = this,
                form = me.getFormCopy(),
                win = form.up('window'),
                basicForm = form.getForm(),
                grid = me.getGridMaestro(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore(),
                record = basicForm.getRecord(),
                values = basicForm.getValues();



        var selection = records[0];

        var compania = selection.get('COMPANIA');
        //var fechaNue = Ext.Date.format(selection.get('FECHA'), 'd/m/Y');
        var fechaMaestro = selection.get('FECHA');
        //msgOut("selection.get('FECHA'), 'd/m/Y'"+selection.get('FECHA'), 'd/m/Y');
        // msgOut("fechaMaestro"+fechaMaestro);
        var numero = selection.get('NUMERO');
        var tipoPoliza = selection.get('TIPO_POLIZA');

        if (basicForm.isValid()) {

            if (!record) {

                //basicForm.findField('cboCtoCtoCopia').getValue();
                var combo = basicForm.findField('cboCopiaTipoPoliza').getValue();
                var fecha = basicForm.findField('dtFechacopia').getRawValue();
                var ModeloMaestro = Ext.create('AppPolizas3.model.ModeloMaestro');

                var oldNameTipo = ModeloMaestro.get('TIPO_POLIZA'),
                        newNameTipo = oldNameTipo + combo;
                ModeloMaestro.set('TIPO_POLIZA', newNameTipo);

                var oldNameCompania = ModeloMaestro.get('COMPANIA'),
                        newNameCompania = oldNameCompania + selection.get('COMPANIA');
                ModeloMaestro.set('COMPANIA', newNameCompania);

                var oldNameFechaM = ModeloMaestro.get('FECHA'),
                        newNameFechaM = oldNameFechaM + fecha;
                ModeloMaestro.set('FECHA', newNameFechaM);

                var oldNameNombre = ModeloMaestro.get('NOMBRE'),
                        newNameNombre = oldNameNombre + selection.get('NOMBRE');
                ModeloMaestro.set('NOMBRE', newNameNombre);

                var oldNameFuente = ModeloMaestro.get('FUENTE'),
                        newNameFuente = oldNameFuente + selection.get('FUENTE');
                ModeloMaestro.set('FUENTE', newNameFuente);

                var oldNameRef = ModeloMaestro.get('REFERENCIA'),
                        newNameRef = oldNameRef + selection.get('REFERENCIA');
                ModeloMaestro.set('REFERENCIA', newNameRef);

//                var oldNameNumero = ModeloMaestro.get('NUMERO'),
//                        newNameNumero = oldNameNumero + null;
                ModeloMaestro.set('NUMERO', null);

                var oldNameEstatus = ModeloMaestro.get('ESTATUS'),
                        newNameEstatus = oldNameEstatus + selection.get('ESTATUS');
                ModeloMaestro.set('ESTATUS', newNameEstatus);

                var oldNameDivisa = ModeloMaestro.get('DIVISA'),
                        newNameDivisa = oldNameDivisa + selection.get('DIVISA');
                ModeloMaestro.set('DIVISA', newNameDivisa);

                var oldNameModuloOrig = ModeloMaestro.get('MODULO_ORIG'),
                        newNameModuloOrig = oldNameModuloOrig + selection.get('MODULO_ORIG');
                ModeloMaestro.set('MODULO_ORIG', newNameModuloOrig);

                var oldNameCargos = ModeloMaestro.get('CARGOS'),
                        newNameCargos = oldNameCargos + selection.get('CARGOS');
                ModeloMaestro.set('CARGOS', newNameCargos);

                var oldNameAbonos = ModeloMaestro.get('ABONOS'),
                        newNameAbonos = oldNameAbonos + selection.get('ABONOS');
                ModeloMaestro.set('ABONOS', newNameAbonos);

                var oldNameAbonosBase = ModeloMaestro.get('ABONOS_BASE'),
                        newNameAbonosBase = oldNameAbonosBase + selection.get('ABONOS_BASE');
                ModeloMaestro.set('ABONOS_BASE', newNameAbonosBase);

                var oldNameCargosBase = ModeloMaestro.get('CARGOS_BASE'),
                        newNameCargosBase = oldNameCargosBase + selection.get('CARGOS_BASE');
                ModeloMaestro.set('CARGOS_BASE', newNameCargosBase);

                var oldNameParidad = ModeloMaestro.get('PARIDAD'),
                        newNameParidad = oldNameParidad + selection.get('PARIDAD');
                ModeloMaestro.set('PARIDAD', newNameParidad);


                store.insert(0, ModeloMaestro);

            } else {

                //record.set(values);

            }

            var news = store.getNewRecords();
            var modified = store.getUpdatedRecords();



            if (!Ext.isEmpty(news) || !Ext.isEmpty(modified))
                win.close();
            grid.setLoading("Guardando Poliza...");



            store.sync({
                scope: this,
                success: function(resp, dos) {
                    //msgBox("Poliza", 'Poliza Guardada');



                },
                failure: function(resp, dos) {
                    msgBoxErr('Error', 'Error al guardar Poliza:' + store.getProxy( ).getReader().rawData.msg);
                    grid.setLoading(false);
                },
                callback: function(records, operation) {
                    //grid.setLoading(false);
                    var numeroCopi = me.procesaDatosMaestro(store.getProxy().getReader());

                    me.procesaDatosDetalleCopi(compania, fechaMaestro, tipoPoliza, numero, fecha, combo, numeroCopi);

                    grid.setLoading(false);
                }

            });
            //grid.setLoading("Guardando Entrada Almacen...");


        } else {

            basicForm.getFields().each(function(item) {
                if (!item.isValid()) {
                    msgBoxErr("Error falta un campo", item.name);
                    return;
                }

            });
        }



    },
    procesaDatosMaestro: function(reader) {
//        msgOut(reader.rawData);
        var i = 0;
        var mensajes = "";
//        msgOut(reader.rawData.data[0].NUMERO);
        if (Ext.isEmpty(reader.rawData.data))
            return;
//        for (i = 0; i < reader.rawData.data.length; i++) {
//            msgOut(reader.rawData.data[i].msgErr);
//            mensajes = mensajes + "," + reader.rawData.data[i].msgErr;
//        }
        return reader.rawData.data[0].NUMERO;
        msgBoxErr('Existieron errores al guardar', reader.rawData.data[0].NUMERO);
    },
    procesaDatosDetalleCopi: function(compania, fecha, tipoPoliza, numero, fechaCopi, tipoPolizaCopi, numeroCopi) {

        Ext.Ajax.request({
            url: 'control/poliza/copyDet',
            timeout: 60000,
            scope: this,
            params: {
                // data: jsonData, 
                compania: compania,
                fecha: fecha,
                tipoPoliza: tipoPoliza,
                numero: numero,
                fechaCopi: fechaCopi,
                tipoPolizaCopi: tipoPolizaCopi,
                numeroCopi: numeroCopi

            },
            success: function(response) {
                var text = response.responseText;
                //grid.setLoading(false);


            },
            callback: function(a, b, c) {
                //grid.setLoading(false);
                if (Ext.isEmpty(c.responseText)) {
                    msgBoxErr('Error', 'Error al Copiar');
                    return;

                }
                var res = Ext.decode(c.responseText);
                if (res.success) {

                    msgBox('Copiar', 'Copiado con Exito');
                }
            } });


    },
    copyPoliza: function(btn) {

        var me = this,
                grid = me.getGridMaestro(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();

        var sinGuardar = store.find('ESTATUS', 'N');



        if (sinGuardar > -1) {
            Ext.Msg.alert('Error al Copiar', 'Se necesita Guardar los cambios antes de copiar una poliza');
            return;
        }
        var selection = records[0];
        ;
        if (Ext.isEmpty(selection)) {
            Ext.Msg.alert('Error al Copiar', 'Se necesita Seleccionar una poliza para copiar.');
            return;
        }

        msgOut("NumeroCopia:", selection.get('ID'), selection.get('NOMBRE'), selection.get('FUENTE'), selection.get('REFERENCIA'));

        var news = grid.getStore().getNewRecords();
        var modified = grid.getStore().getUpdatedRecords();

        if (!Ext.isEmpty(news) || !Ext.isEmpty(modified)) {
            Ext.Msg.alert('Error al Copiar', 'Se necesita Guardar los cambios antes de copiar una poliza ');
            return;
            // mascaraCmp(formCentro,'Guardando...',1);
        }


        var view = Ext.widget('windowcopy');
        view.setTitle('Copia Poliza');
        var form = view.down('formcopy').getForm();


    },
    addPoliza: function(btn, cellEditing2) {

        var me = this,
                grid = me.getGridMaestro(),
                gridDet = me.getGridDetalle(),
                storeDet = gridDet.getStore(),
                //records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        //var record = records[0];
        this.buttonDetDisable();
        var news = grid.getStore().getNewRecords();
        var modified = grid.getStore().getUpdatedRecords();

        if (!Ext.isEmpty(news) || !Ext.isEmpty(modified)) {
            msgBoxErr('Error', 'Se necesita guardar los cambios antes de agregar poliza');
            return;
        }

        storeDet.loadData([], false);

        var ModeloMaestro = Ext.create('AppPolizas3.model.ModeloMaestro');

        var oldNameTipo = ModeloMaestro.get('TIPO_POLIZA'),
                newNameTipo = oldNameTipo + 'D';
        ModeloMaestro.set('TIPO_POLIZA', newNameTipo);

        var oldNameFechaM = ModeloMaestro.get('FECHA'),
                newNameFechaM = oldNameFechaM + Ext.Date.dateFormat(new Date(), 'd/m/Y');
        ModeloMaestro.set('FECHA', newNameFechaM);


        ModeloMaestro.set('ESTATUS', '0');
        ModeloMaestro.set('DIVISA', 'PES');
        ModeloMaestro.set('PARIDAD', '1');


        cellEditing2.cancelEdit();
        store.insert(0, ModeloMaestro);
        cellEditing2.startEdit(ModeloMaestro, 4);

    },
    addDet: function(btn, cellEditing, position) {

        var me = this,
                gridDet = me.getGridDetalle(),
                gridMaster = me.getGridMaestro(),
                records2 = gridMaster.getSelectionModel().getSelection(),
                records = gridDet.getSelectionModel().getSelection(),
                storeDet = gridDet.getStore();
        var record2 = records2[0];
        var record = records[0];
        var copiar = gridDet.getChildByElement('copi1', true).getValue();



        var model = new AppPolizas3.model.ModeloDetalle({
            COMPANIA: record2.get('COMPANIA'),
            TIPO_POLIZA: record2.get('TIPO_POLIZA'),
            FECHA: record2.get('FECHA'),
            NUMERO: record2.get('NUMERO'),
            SEC: '',
            CARGOS: '0',
            ABONOS: '0',
            EXISTE_CUENTA: '1',
            INDICADOR: '',
            FECHA_CAP: '',
            ESTATUS: '',
            HORA: '',
            CTO_TRABAJO: '',
            ID: '',
            CC: '',
            CT: '',
            CUENTA: '',
            DESCRIPCION: '',
            REFERENCIA: '',
            CHEQUE: '',
            RFC: '',
            ABONOS_BASE: '',
            CARGOS_BASE: '',
            NOMCUENTA: '',
            REFERENCIA2: '',
            FECHA_DOCUMENTO: '',
            id: ''
        });

        if (copiar) {
            if (!Ext.isEmpty(records)) {



                model.set('CC', record.get('CC'));
                model.set('CT', record.get('CT'));
                model.set('DESCRIPCION', record.get('DESCRIPCION'));
                model.set('REFERENCIA', record.get('REFERENCIA'));
                model.set('CHEQUE', record.get('CHEQUE'));
                var rfc = record.get('RFC');
                if (rfc === null || rfc === '') {

                } else {
                    model.set('RFC', record.get('RFC'));
                }

                model.set('REFERENCIA2', record.get('REFERENCIA2'));
                model.set('EXISTE_CUENTA', '1');


                var fechaDocumento = record.get('FECHA_DOCUMENTO');

                if (fechaDocumento === null) {

                } else {

                    model.set('FECHA_DOCUMENTO', record.get('FECHA_DOCUMENTO'));
                }

                cellEditing.cancelEdit();
                if (Ext.isEmpty(position)) {

                    storeDet.insert(0, model);
                    cellEditing.startEditByPosition({
                        row: 0,
                        column: 4
                    });
                } else {
                    storeDet.add(model);
                    cellEditing.startEditByPosition({
                        row: position,
                        column: 4
                    });
                }
                //desbloqueaBtnDet();
            } else {

//            

                cellEditing.cancelEdit();
                if (Ext.isEmpty(position)) {

                    storeDet.add(model);
                    cellEditing.startEditByPosition({
                        row: 0,
                        column: 4
                    });
                } else {
                    storeDet.add(model);
                    cellEditing.startEditByPosition({
                        row: position,
                        column: 4
                    });
                }

            }
        } else {


            cellEditing.cancelEdit();
            if (Ext.isEmpty(position)) {

                storeDet.insert(0, model);
                cellEditing.startEditByPosition({
                    row: 0,
                    column: 4
                });
            } else {
                storeDet.add(model);
                cellEditing.startEditByPosition({
                    row: position,
                    column: 4
                });
            }
        }


    },
    buttonDisable: function() {

        var me = this,
                grid = me.getGridMaestro();


        grid.getChildByElement('btnGuardarMst', true).setDisabled(true);
        grid.getChildByElement('btnAgregarMst', true).setDisabled(true);
        grid.getChildByElement('btnBorrarMst', true).setDisabled(true);
       // grid.getChildByElement('btnGuardarMst', true).setVisible(false);
       // grid.getChildByElement('btnAgregarMst', true).setVisible(false);
       // grid.getChildByElement('btnBorrarMst', true).setVisible(false);
        



    },
    buttonDetDisable: function() {
        var me = this,
                gridDet = me.getGridDetalle();
        msgOut("desabilitando detalle");
        gridDet.getChildByElement('btnGuardarDet', true).setDisabled(true);
        gridDet.getChildByElement('btnAgregarDet', true).setDisabled(true);
        gridDet.getChildByElement('btnBorrarDet', true).setDisabled(true);
        //gridDet.getChildByElement('btnGuardarDet', true).setVisible(false);
        //gridDet.getChildByElement('btnAgregarDet', true).setVisible(false);
        //gridDet.getChildByElement('btnBorrarDet', true).setVisible(false);
    },
    
    buttonArchivoDisable: function() {
//        var me = this,
//                gridA = me.getGridArchivos();
//        gridA.down('button[itemId=btnAddArchivo]').setVisible(false); 
//        gridA.down('button[itemId=btnQuitarArchivo]').setVisible(false); 
       
    },
    buttonDetDisableFalse: function() {
        var me = this,
                gridDet = me.getGridDetalle();
       
        gridDet.getChildByElement('btnGuardarDet', true).setDisabled(false);
        gridDet.getChildByElement('btnAgregarDet', true).setDisabled(false);
        gridDet.getChildByElement('btnBorrarDet', true).setDisabled(false);
    },
    loadSumaDetalle: function() {
        var me = this,
                text = '',
                grid = me.getGridMaestro(),
                records = grid.getSelectionModel().getSelection(),
                sumCargos = 0,
                sumAbonos = 0,
                totales = 0,
                detalle = me.getGridDetalle(),
                containerStatus = me.getPanelSur();



        var record = records[0];
        if (Ext.isEmpty(record)) {


            return;
        }

        var compania = record.get('COMPANIA');
        var tipoPoliza = record.get('TIPO_POLIZA');
        var numero = record.get('NUMERO');
        var fecha = record.get('FECHA');

        var fechaCam;
        if (Ext.isDate(fecha)) {
            fechaCam = Ext.Date.format(fecha, 'd/m/Y');
            fecha = fechaCam;
        }


        var sb = containerStatus.getComponent('statusbarTotales');
        var det = detalle.getComponent('statusDetalle');
        var banDet = det.getComponent('idBandera');
        var totCar = sb.getComponent('totalCargos');
        var totAbo = sb.getComponent('totalAbonos');
        var totReg = sb.getComponent('totalRegistros');
        var totDif = sb.getComponent('diferenciaRegistros');
        var regVali = sb.getComponent('totalRegistrosValidos');

        sb.showBusy();


//        var  llave =  me.getllaveMaestro();
        Ext.Ajax.request({
            url: 'process/data/SumCargosAbonos',
            method: 'POST',
            scope: this,
            params: {
                tipo_poliza: tipoPoliza,
                numero: numero,
                fecha: fecha
            },
            callback: function(records, operation, success) {

                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var sumCargos = val.data[0].SUM_CARGOS;
                    var sumAbonos = val.data[0].SUM_ABONOS;
                    var totales = val.data[0].TOTAL_REGISTROS;
                    var totalesValidos = val.data[0].TOTAL_VALIDOS;



                    var icon = 'x-status-valid';
                    if (sumCargos === sumAbonos) {
                        text = 'Cuadrados';
                        icon = 'x-status-valid';
                    } else {
                        text = 'Descuadrados';
                        icon = 'x-status-error';
                    }
                    sb.setStatus({
                        iconCls: icon,
                        text: text
                    });



                } else if (!val.success) {
                    // msgBoxErr('Error', 'Cargos y Abonos no encontrados');
                }

                totCar.update('Cargos:' + formatCurrency(Math.round(sumCargos * 1000) / 1000));
                totAbo.update('Abonos:' + formatCurrency(Math.round(sumAbonos * 1000) / 1000));
                totDif.update('Diferencia:' + formatCurrency(Math.round((sumAbonos - sumCargos) * 1000) / 1000));
                totReg.update('Total Registros:' + totales);
                regVali.update('Registros Validos:' + totalesValidos);
                if (totales === totalesValidos) {
                    banDet.update('<span style="color:white;background-color:green;font-weight: bold;font-size: "4";">Detalle Correcto</span>');

                } else {
                    banDet.update('<span style="color:white;background-color:red;font-weight: bold;font-size: "4";">Error en Detalle de Poliza</span>');

                }
            },
            timeout: 30000

        });
        grid.doLayout( );
//        storeSumaDetalles.load({
//            callback: function(val1, val2) {
//             
//
//            }
//        });
    },
    loadDet: function(view, selected) {

//        if (Ext.isEmpty(selected))
//            return;

        var me = this,
                grid = me.getGridMaestro(),
                gridArch = me.getGridArchivos(),
                storeArch = gridArch.getStore(),
                records = grid.getSelectionModel().getSelection(),
                gridDet = me.getGridDetalle(),
                storeDet = gridDet.getStore();
         me.cleanFiltersDet();           




        var record = records[0];
        var compania = record.get('COMPANIA');
        var numeroPol = record.get('NUMERO');
        var tipoPoliza = record.get('TIPO_POLIZA');
        var tipoPol = record.get('TIPO_POLIZA').substring(0, 2);
        var fechaPol = record.get('FECHA');






        if (Ext.isDate(fechaPol)) {
            var fecha = Ext.Date.format(fechaPol, 'd/m/Y');
            fechaPol = fecha;
        }
//


        storeDet.proxy.extraParams.tipo_poliza = tipoPol;
        storeDet.proxy.extraParams.numero = numeroPol;
        storeDet.proxy.extraParams.fecha = fechaPol;

        gridDet.setLoading('Buscando...');
        storeDet.loadData([], false);
        storeDet.currentPage = 1;
        storeDet.load({
            //params: { start: 0, limit: 20,page: 1,},
            //page: 1,
            //start: 0,

            callback: function(records, options, success) {
                gridDet.setLoading(false);
                
                
            }
        });


        storeArch.proxy.extraParams.tipo_poliza = tipoPol;
        storeArch.proxy.extraParams.numero = numeroPol;
        storeArch.proxy.extraParams.fecha = fechaPol;

        gridArch.setLoading('Buscando...');
        storeArch.loadData([], false);
        storeArch.load({
            callback: function() {
                gridArch.setLoading(false);
            }
        });


    },
    createCookie: function(ano, tipoPoliza, cto, fechaIni, fechaFin) {
        var now = new Date();
        var expiry = new Date(now.getTime() + 365 * 24 * 60 * 60 * 1000);
        var comp = this.getCompania();
        Ext.util.Cookies.set(comp + 'PolizaTipoPoliza', tipoPoliza, expiry);
        Ext.util.Cookies.set(comp + 'PolizaAno', ano, expiry);
        Ext.util.Cookies.set(comp + 'PolizaCto', cto, expiry);
        Ext.util.Cookies.set(comp + 'PolizaCto', cto, expiry);
        Ext.util.Cookies.set(comp + 'PolizaCto', cto, expiry);
        Ext.util.Cookies.set(comp + 'PolizaFechaIni', fechaIni, expiry);
        Ext.util.Cookies.set(comp + 'PolizaFechaFin', fechaFin, expiry);
    },
    loadCookie: function() {
        var me = this;
        me.loadCookieCalendario();
    },
    getCompania: function() {
        var grid = this.getGridMaestro();
        var title = grid.title;
        var n = title.indexOf("-");
        var compania = title.substr(0, n);
        if(compania ==='TPS'){
            
            var storeCtoCto = Ext.create('AppPolizas3.store.StoreCC');
            storeCtoCto.load({
                url:'process/data/PolizasFovi_CCostos_Usuarios'
            }); 
        }
        return compania;
    },
    loadCookieCalendario: function(cboCalendario) {
        var me = this,
                form = me.getMenuGeneral().getForm(),
                cboCalendario = form.findField('cboAno');
        var comp = me.getCompania();
        var cookieCalendario = Ext.util.Cookies.get(comp + 'PolizaAno');
        cboCalendario.getStore().load({
            callback: function(val1) {
                cboCalendario.setValue(cookieCalendario);
                me.loadCookieTipo();
            }
        });
    },
    loadCookieTipo: function() {
        var me = this,
                form = me.getMenuGeneral().getForm(),
                cboTipoPoliza = form.findField('cboTipoPoliza');
        var comp = me.getCompania();
        var cookieTipoPoliza = Ext.util.Cookies.get(comp + 'PolizaTipoPoliza');
        cboTipoPoliza.getStore().load({
            callback: function(val1) {
                cboTipoPoliza.setValue(cookieTipoPoliza);
                me.loadCookieCto();
            }
        });

    },
    loadCookieCto: function() {
        var me = this,
                form = me.getMenuGeneral().getForm(),
                comp = me.getCompania(),
                cboCto = form.findField('cboCtoCto'),
                cookieCto = Ext.util.Cookies.get(comp + 'PolizaCto');
       console.log("comp:"+comp);
       console.log("cookieCto:"+cookieCto);
       if(comp ==='TPS'){
          
            cboCto.getStore().load({
                url:'process/data/PolizasFovi_CCostos_Usuarios',
                callback: function(val1) {
                    if (cookieCto === 'null') {
                        cboCto.setValue(cboCto.getStore().getAt(0));
                    } 
                    else if(cookieCto === 'SIN CENTRO DE COSTO'){
                        cboCto.setValue(cboCto.getStore().getAt(0));
                    }else {
                        cboCto.setValue(cookieCto);
                    }
                    
                    me.loadCookieExtra();
                }
            });
        }else{
            cboCto.getStore().load({
                callback: function(val1) {
                    if (cookieCto === 'null') {
                        cboCto.setValue('SIN CENTRO DE COSTO');
                    } else {
                        cboCto.setValue(cookieCto);
                    }

                    me.loadCookieExtra();
                }
            });
        }
    },
    loadCookieExtra: function() {
        var me = this,
                comp = me.getCompania(),
                form = me.getMenuGeneral().getForm();

        form.findField('dtFechaIni').setValue(Ext.util.Cookies.get(comp + 'PolizaFechaIni'));
        form.findField('dtFechaFin').setValue(Ext.util.Cookies.get(comp + 'PolizaFechaFin'));
        me.buscarMaestro();

        me.loadWithColumnDet();
    },
    buscarMaestro: function(cboAno, tipoPoliza, btn) {
        var me = this;
        var form = this.getMenuGeneral().getForm();
        var grid = this.getGridMaestro();
        var gridDet = this.getGridDetalle();
        var store = grid.getStore();


        var cboAno = form.findField('cboAno').getValue();
        var tipoPoliza = form.findField('cboTipoPoliza').getValue();
        var cto = form.findField('cboCtoCto').getValue();
        var fechaIni = form.findField('dtFechaIni').getRawValue();
        var fechaFin = form.findField('dtFechaFin').getRawValue();
        var numIni = form.findField('txtNumIni').getValue();
        var numFin = form.findField('txtNumFin').getValue();

        me.createCookie(cboAno, tipoPoliza, cto, fechaIni, fechaFin);

        store.proxy.extraParams.tipoDat = "1";
        store.proxy.extraParams.calendario = cboAno;
        store.proxy.extraParams.ccostos = cto;
        store.proxy.extraParams.tipo_poliza = tipoPoliza;
        store.proxy.extraParams.fec_ini = fechaIni;
        store.proxy.extraParams.fec_fin = fechaFin;
        store.proxy.extraParams.num_ini = numIni;
        store.proxy.extraParams.num_fin = numFin;

        var dirBus = "";
        grid.setLoading('Buscando Poliza....');
        grid.getChildByElement('btnGuardarMst', true).setDisabled(false);
        grid.getChildByElement('btnAgregarMst', true).setDisabled(false);
        grid.getChildByElement('btnBorrarMst', true).setDisabled(false);
        gridDet.getChildByElement('btnGuardarDet', true).setDisabled(false);
        gridDet.getChildByElement('btnAgregarDet', true).setDisabled(false);
        gridDet.getChildByElement('btnBorrarDet', true).setDisabled(false);



        if (cto === 'SIN CENTRO DE COSTO')
            cto = null;
        if (!Ext.isEmpty(numIni) && !Ext.isEmpty(numFin)) {
            if (Ext.isEmpty(cto)) {
                
                 if (tipoPoliza==='0'){
                  dirBus = 'process/data3/PolizasFovi_datos_bus_sinTP_sinCCnum';   
                 }else{
                  dirBus = 'process/data3/PolizasFovi_datos_busfecnum_sinCC';
                 }
            } else {
                 if (tipoPoliza==='0'){
                 dirBus = 'process/data3/PolizasFovi_datos_bus_sinTP_num';   
                }else{

                dirBus = 'process/data3/PolizasFovi_datos_busfecnum';
                }
            }
        } else {
            if (Ext.isEmpty(cto)) {
                
                if (tipoPoliza==='0'){
                 dirBus = 'process/data3/PolizasFovi_datos_bus_sinTP_sinCC';   
                }else{
                dirBus = 'process/data3/PolizasFovi_datos_busfecha_sinCC';
                }
            } else {
                if (tipoPoliza==='0'){
                 dirBus = 'process/data3/PolizasFovi_datos_bus_sinTP';   
                }else{  
                
                
                dirBus = 'process/data3/PolizasFovi_datos_busfecha';
                }
             }
        }
       // dirBus = 'process/data3/PolizasFovi_datos_bus_sinTP';  
        store.proxy.api.read = dirBus;
//        gridDet.getStore().loadData([], false);
        store.loadData([], false);
        store.load({
            //url: dirBus,
            callback: function(val1, val2, val3) {
                grid.setLoading(false);
            }
        });

    }
});

