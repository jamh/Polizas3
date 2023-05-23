Ext.define('AppConvertidor.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: [
//        'StoreErpCatConvertidor',
        'StoreErpDetConvertidor',
        'StoreBuscaConvertidor',
        'StoreTipoPoliza'
    ],
    models: [  
//        'ModeloErpCatConvertidor',        
        'ModeloErpDetConvertidor',
        'ModeloBuscaConvertidor',
        'ModeloTipoPoliza'
    ],
    refs: [
        {
            ref: 'panelContenido',
            selector: 'panelcontenido'
        },
//        {
//            ref: 'gridErpCatConvertidor',
//            selector: 'griderpcatconvertidor'
//        },
        {
            ref: 'gridErpDetConvertidor',
            selector: 'griderpdetconvertidor'
        },
        {
            ref: 'formErpCatConvertidor',
            selector: 'formerpcatconvertidor'
        },
        {
            ref: 'appMain',
            selector: 'app-main'
        }

    ],
    views: [
//        'GridErpCatConvertidor',
         'Main',
        'GridErpDetConvertidor',
        
        'FormErpCatConvertidor',
        'WindowErpCatConvertidor',
        'PanelContenido'
    ],
    idconcgastoFiltro :null,
    origen:null,
    init: function() {

        var me = this;
        me.control({
//            
//            panelcontenido: {
////                afterrender: function() {
////                    me.loadPage('AppConvertidor.view.GridErpCatConvertidor');
////                }
//
//            },
//            griderpcatconvertidor: {
//                afterrender: function() {
//                    me.findCompania();
//                   // me.findErpCatfindCompaniaConvertidor();
//                },
//                addArchivo: function(btn) {
//                    me.addArchivo(btn);
//                },
//                guardarErpCatConvertidor: function() {
//                    me.guardarErpCatConvertidor();
//                },
//                recargarArchivo: function() {
//                    me.findErpCatConvertidor();
//                },
//                setConcGasto: function(conc) {
//                    me.setConcGasto(conc);
//                },
//                verPoliza: function() {
//                    me.imprimirPoliza();
//                },
//                verPDF: function() {
//                    me.imprimirPDF();
//                },
//                findFactura:function(fact){
//                     me.findErpCatConvertidor(fact);
//                }
//            },
            griderpdetconvertidor: {
        
                 addDetConvertidor:function(btn, cellEditing){
                     
                     me.addDetConvertidor(btn, cellEditing);
                     
                 },
                deteleDetConvertidor: function(){
                     
                     me.deteleDetConvertidor();
                },
                 afterrender: function() {
                     me.limpiarGrid();
                    me.buttonDisableGrid();
                 
                }
//                afterrender: function() {
//                  //  me.loadDirectorio();
//
//                },
//                procesarArchivo: function() {
//                    me.procesaDirectorio();
//                },
//                recargarDirectory: function() {
//                    me.loadDirectorio();
//                }
            },
            formerpcatconvertidor: {
//                saveArchivo: function(btn) {
//                    me.saveArchivo(btn);
//                },
//                recargarArchivo: function() {
//                    me.findErpCatConvertidor();
//                },
                findConvertidor: function(compania,origen,idConGasto,tipoPoliza,descripcion,activo,caso,nombre){
                  
                    me.findConvertidor(compania,origen,idConGasto,tipoPoliza,descripcion,activo,caso,nombre);
            
                },
               agregarRegistro:function(){
                    me.agregarRegistro();
               },
                       
                saveConvertidorMaestro:function(){
                      me.saveConvertidorMaestro();
                },
                        
               deleteConvertidor:function(){
                        me.deleteConvertidor();           
               },
                       
              copiarRegistro:function(){
              
                        me.copiarRegistro();
          
              },
              afterrender: function() {
                    me.buttonDisable();
                    me.buscaParametroRIA();
                    
                    me.verificaHelp();
                    
                    
                    
                 
                },
               helpConvertidor:function(btn){
           
                 msgOut("HELP");
                        me.helpConvertidor(btn);
           
               },
               
               verificaQuery:function(storeBuscaConvertidor){
                   
                   me.verificaQuery(storeBuscaConvertidor);
               }
            }


        });
    },
    
    verificaQuery:function(storeBuscaConvertidor){
        
         if (this.origen === 'F'){
        
            storeBuscaConvertidor.proxy.api.read = 'process/data2/BuscaConvertidor';
        }
        
        if (this.origen === 'P'){
        
            storeBuscaConvertidor.proxy.api.read = 'process/data2/BuscaConvertidorPagos';
        }
        
        
    },
    
    verificaHelp:function(){
        
        if (this.origen === 'F'){
        
            Ext.getCmp('helpPago').setVisible(false);
        }
        
        if (this.origen === 'P'){
        
            Ext.getCmp('helpFactura').setVisible(false);
        }
        
        
        
    },
    
    buscaParametroRIA:function(){
     var me = this,
                form1 = me.getFormErpCatConvertidor(),
                form = me.getFormErpCatConvertidor().getForm();
        
          var param = '';
        
           if (!Ext.isEmpty(me.idconcgastoFiltro)) {
               
               param = me.idconcgastoFiltro;
               
           }
          

         form.findField('PARAMETRO').setValue(param);
       
    },
    helpConvertidor:function(btn){
        
        
        var mensaje = "<p><b>[rfcEmisor]</b> : RFC del Emisor de la factura.</p>\n\
                       <p><b>[rfcReceptor]</b> : RFC  del receptor de la factura.</p>\n\
                       <p><b>[IVA]</b> : IVA de la factura.</p>\n\
                       <p><b>[TOTAL]</b> : Total de la factura.</p>\n\
                       <p><b>[SUBTOTAL]</b> : Subtotal de la factura.</p>\n\\n\
                       <p><b>[DESCUENTO]</b> :  Descuento de la Factura.</p>\n\
                       <p><b>[RET_IVA]</b> : Retención de IVA por concepto.</p>\n\
                       <p><b>[nombreReceptor]</b> :  Razón social del receptor.</p>\n\
                       <p><b>[nombreEmisor]</b> :  Razón social del emisor.</p>";
        
        
         Ext.create('Ext.window.Window', {
                                    title: 'AYUDA',
                                    height: 500,
                                    width: 500,
                                   // minimizable: true,
                                   // maximizable : true,
                                    layout: 'fit',
                                    items: {  // Let's put an empty grid in just to illustrate fit layout
                                        xtype: 'panel',
                                        //title: 'My PDF',
                                        width: 500,
                                        height: 400,
                                        html:mensaje
                                    }
                                }).show();

        
    },
    
     findDatosCopiados: function(caso) {
        var me = this;
        Ext.Ajax.request({
            url: 'process/data/BuscaDatosCopi',
            method: 'GET',
            params: {
                     
                   
                    caso: caso

                },
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var nombre = val.data[0].NOMBRE;

                    var me = this,
                            form = me.getFormErpCatConvertidor().getForm();
                    form.findField('NOMBRE').setValue(nombre);
                    
                } else if (!val.success) {
                    msgBoxErr('Compania', 'Error compañia no encontrada');
                }
            },
            timeout: 30000

        });
    },
    
     buttonDisable: function() {

        var me = this,
               
                form = me.getFormErpCatConvertidor();


       
        form.getChildByElement('guardarConvertidorM', true).setDisabled(true);
        form.getChildByElement('borrarConvertidorM', true).setDisabled(true);
        form.getChildByElement('copiarConvertidorM', true).setDisabled(true);



    },
    buttonDisableGrid: function() {

        var me = this,
                grid = me.getGridErpDetConvertidor();
            
        grid.getChildByElement('btnAgregarDetConv', true).setDisabled(true);
        grid.getChildByElement('btnBorrarDetConv', true).setDisabled(true);
      


    },
            
   limpiarGrid: function(){
       
        var me = this,
                grid = me.getGridErpDetConvertidor(),
                  store = grid.getStore();
       
      
     
      
        store.loadData([], false);
   
       
   },
    copiarRegistro:function(){
        
          var me = this,
                form = me.getFormErpCatConvertidor().getForm();
           

        if (form.isValid()) {
            
            var caso = form.findField('NO_CASO').getValue();
            
          //  form.setLoading("Guardando Convertidor...");
            form.submit({
                url: 'Convertidor/copi',
                success: function(form, action) {
               
                     var sec = action.result.msg;
                    
                    form.findField('NO_CASO').setValue(sec);
                     me.copiarDetalle(sec);
                     me.findDatosCopiados(sec);
                    form.findField('COMPANIA').setReadOnly(true);
                    form.findField('ORIGEN').setReadOnly(true);
                    form.findField('IDCONCGASTO').setReadOnly(true);
                    
                    var cboConvertidor = Ext.getCmp('cboConvertidor');
       
                    var storeConv = cboConvertidor.getStore();
                    Ext.getCmp('cboConvertidor').clearValue();
                    storeConv.removeAll();
                    storeConv.proxy.extraParams.query = "";
                    storeConv.load();
                   
       
                  
                },
                failure: function(form, action) {
                    Ext.Msg.alert('Error', action.result.msg);
                }
            });
            
            
        } else {

            form.getFields().each(function(item) {
                if (!item.isValid()) {
                    msgBoxErr("Error falta un campo", item.name);
                    return;
                }

            });
        }
        
        
        
    },
    
    
    agregarRegistro:function(){
       var me = this,
               form = me.getFormErpCatConvertidor().getForm(),
               form1 =  me.getFormErpCatConvertidor(),
               grid = me.getGridErpDetConvertidor(),
               store = grid.getStore();
       
       form.reset();
       
     
      
        store.loadData([], false);
        
        me.findCompania();
        
         //form.findField('COMPANIA').setReadOnly(false);
         //form.findField('ORIGEN').setReadOnly(false);
         //form.findField('IDCONCGASTO').setReadOnly(false);
         if(me.origen === 'F'){
             
             form.findField('ORIGEN').setValue('X');
         }
         
         if(me.origen === 'P'){
             
             form.findField('ORIGEN').setValue('X2');
         }
         
         
         
         form.findField('IDCONCGASTO').setValue('A');
         form.findField('ACTIVO').setValue('1');
         
       
         
         form1.getChildByElement('guardarConvertidorM', true).setDisabled(false);
        form1.getChildByElement('borrarConvertidorM', true).setDisabled(false);
        form1.getChildByElement('copiarConvertidorM', true).setDisabled(false);

            
        grid.getChildByElement('btnAgregarDetConv', true).setDisabled(false);
        grid.getChildByElement('btnBorrarDetConv', true).setDisabled(false);
         
        
        
        
    },
            
     deleteConvertidor: function(btn) {

        var me = this,
                 grid = me.getGridErpDetConvertidor(),
                 store = grid.getStore(),

      
                form = me.getFormErpCatConvertidor().getForm();
         
            
       
   
        
        Ext.MessageBox.show({
            title: 'Borrar Convertidor',
            msg: 'Esta seguro que desea borrar el convertidor?',
            icon: Ext.MessageBox.QUESTION,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {
                
      
         
        
           var compania = form.findField('COMPANIA').getValue();
           var origen = form.findField('ORIGEN').getValue();
           var idconcgasto = form.findField('IDCONCGASTO').getValue();
           var caso = form.findField('NO_CASO').getValue();
        
           form.reset();

            var records = grid.getSelectionModel().getSelection();

       
       
      
           
               //var selection = records[0];
                //mascaraCmp(grid, 'Cancelando poliza...', 1);
                //store.destroy(selection);

                //store.remove(selection);

       
       
            grid.setLoading("Cancelando Convertidor ...");
            Ext.Ajax.request({
                url: 'Convertidor/poliza/del',
                timeout: 60000,
                scope: this,
                params: {
                    // data: jsonData, 
                    compania: compania,
                    origen: origen,
                    idconcgasto: idconcgasto,
                    caso: caso

                },
                success: function(response) {
                    
                     var cboConvertidor = Ext.getCmp('cboConvertidor');
       
                    var storeConv = cboConvertidor.getStore();
                    Ext.getCmp('cboConvertidor').clearValue();
                    storeConv.removeAll();
                    storeConv.proxy.extraParams.query = "";
                    storeConv.load();
                    
                    var text = response.responseText;
                    grid.setLoading(false);
                    grid.setLoading('Buscando...');
                    store.loadData([], false);
                    store.load({
                        callback: function() {
                            grid.setLoading(false);

                        }
                    });

                },
                callback: function(a, b, c) {
                    grid.setLoading(false);
                    if (Ext.isEmpty(c.responseText)) {
                        msgBoxErr('Error', 'Error al Eliminar');
                        return;
                       
                    }
                    var res = Ext.decode(c.responseText);
                    if (res.success) {

                        msgBox('Borrado', 'Borrado con Exito');
                    }
                }
            });
                }
               }
            
        });
        
      
       
    },
            
    deteleDetConvertidor: function(){

            var me = this,
                grid = me.getGridErpDetConvertidor(),
                 store = grid.getStore();
        
                 var records = grid.getSelectionModel().getSelection();

       
        if (Ext.isEmpty(records))
            return;
         //     msgOut(records.length);
        
             
                    var selection = records[0];
                    

                    
                        
                          if (selection.phantom) {
                             store.remove(selection);
                            return;
                            //continue;
                        }

                      
                        store.remove(selection);

                        grid.setLoading("Borrando Poliza Detalle...");
                        store.sync({
                            scope: this,
                            success: function(resp, dos) {
                              msgBox("Borrar Detalle Convertidor", 'Detalle Borrado');
                               
                                //this.loadSueldo();

                            },
                            failure: function(resp, dos) {
                                msgBoxErr('Error', 'Error al borrar Detalle:' + store.getProxy( ).getReader().rawData.msg);
                                //this.loadSueldo();
                                grid.setLoading(false);
                            },
                            callback: function(records, operation) {
                                
                                grid.setLoading(false);
                            }

                        });



    },
    
    saveConvertidorMaestro: function(btn){
        
         var me = this,
                form = me.getFormErpCatConvertidor().getForm();
                //grid = me.getGridArchivos(),
                //records = grid.getSelectionModel().getSelection(),
                //store = grid.getStore(),
               
                //form = btn.up('formarchivos'),
                 //win = form.up('window'),
                //basicForm = form.getForm();
        
               //var compania = basicForm.findField('archCOMPANIA').getValue();
               //var tipoPoliza = basicForm.findField('archTIPO_POLIZA').getValue();
               //var fecha = basicForm.findField('archFECHA').getValue();
               //var numero = basicForm.findField('archNUMERO').getValue();
                
                //store.proxy.extraParams.compania = compania;
                //store.proxy.extraParams.tipo_poliza = tipoPoliza;
                //store.proxy.extraParams.fecha = fecha;
                //store.proxy.extraParams.numero = numero;

        if (form.isValid()) {
          //  form.setLoading("Guardando Convertidor...");
            form.submit({
                
                success: function(form, action) {
                 //    win.close();
                     var sec = action.result.msg;
                    // Ext.Msg.alert('Guardado', action.result.msg);
                    form.findField('NO_CASO').setValue(sec);
                     me.saveDetConvertidor(sec);
                    form.findField('COMPANIA').setReadOnly(true);
                    form.findField('ORIGEN').setReadOnly(true);
                    form.findField('IDCONCGASTO').setReadOnly(true);
                    
                    var cboConvertidor = Ext.getCmp('cboConvertidor');
       
                    var storeConv = cboConvertidor.getStore();
                    Ext.getCmp('cboConvertidor').clearValue();
                    storeConv.removeAll();
                    storeConv.proxy.extraParams.query = "";
                    storeConv.load();
                   
            //         form.setLoading(false);
                   // store.loadData([], false);
                    //store.load({
                      //  callback: function() {
                            //grid.setLoading(false);
                           
                            // me.loadSumaDetalle(tipoPol,numeroPol,fechaPol);
                       // }
                   // });
                    //me.setSession(action.result.data[0].UC_COMPANIA, action.result.data[0].US_USUARIO);
                  
                },
                failure: function(form, action) {
                    Ext.Msg.alert('Error', action.result.msg);
                }
            });
            
            
        } else {

            form.getFields().each(function(item) {
                if (!item.isValid()) {
                    msgBoxErr("Error falta un campo", item.name);
                    return;
                }

            });
        }
        
    },
            
    addDetConvertidor: function(btn, cellEditing) {

        var me = this,
                gridDet = me.getGridErpDetConvertidor(),
                form = me.getFormErpCatConvertidor().getForm(),
                records = gridDet.getSelectionModel().getSelection(),
                storeDet = gridDet.getStore();
      
                var record = records[0];
                
         
           // msgOut("	store.getCount();"+	storeDet.getCount());
       
         var model = new AppConvertidor.model.ModeloErpDetConvertidor({
                   COMPANIA:form.findField('COMPANIA').getValue(),
                   ORIGEN:form.findField('ORIGEN').getValue(),
                   IDCONCGASTO:form.findField('IDCONCGASTO').getValue(),                   
                   NO_CASO:'',
                   CUENTA:'',
                   DESCRIPCION:'',
                   REFERENCIA:'',
                   REFERENCIA2:'',
                   ORDEN:storeDet.getCount() + 1
                  
               });
 
            
                storeDet.insert(0, model);
                cellEditing.startEditByPosition({
                    row: 0,
                    column: 1
                });
          


    },
    
    findConvertidor: function(compania,origen,idConGasto,tipoPoliza,descripcion,activo,caso,nombre){
      
        var me = this,
                form1 = me.getFormErpCatConvertidor(),
                form = me.getFormErpCatConvertidor().getForm();
//        msgOut("nombre"+nombre);
         var companiaGrid = form.findField('COMPANIA').setValue(compania);
         var origenGrid = form.findField('ORIGEN').setValue(origen);
         var idConGastoGrid = form.findField('IDCONCGASTO').setValue(idConGasto);
         form.findField('T_POLIZA').setValue(tipoPoliza);
         form.findField('DESCRIPCION').setValue(descripcion);
         form.findField('ACTIVO').setValue(activo);
         form.findField('NO_CASO').setValue(caso);
         form.findField('NOMBRE').setValue(nombre);
         
        
         form.findField('COMPANIA').setReadOnly(true);
         form.findField('ORIGEN').setReadOnly(true);
         form.findField('IDCONCGASTO').setReadOnly(true);
                  
         
         me.buscaDetConvertidor(compania,origen,idConGasto,caso);
         
         form1.getChildByElement('guardarConvertidorM', true).setDisabled(false);
        form1.getChildByElement('borrarConvertidorM', true).setDisabled(false);
        form1.getChildByElement('copiarConvertidorM', true).setDisabled(false);



   
         
         
         
         
        
    },
            
     buscaDetConvertidor: function(compania,origen,idConGasto,caso){
 
           var me = this,
                grid = me.getGridErpDetConvertidor(),
               
                records = grid.getSelectionModel().getSelection(),
               
                store = grid.getStore();

        var record = records[0];


            
        grid.getChildByElement('btnAgregarDetConv', true).setDisabled(false);
        grid.getChildByElement('btnBorrarDetConv', true).setDisabled(false);
        
         msgOut('gasto'+ idConGasto);

        //store.proxy.extraParams.compania = compania;
        store.proxy.extraParams.origen = origen;
        store.proxy.extraParams.idConGasto = idConGasto;
        store.proxy.extraParams.caso = caso;

        grid.setLoading('Buscando...');
        store.loadData([], false);
        store.currentPage = 1;
        store.load({
            //params: { start: 0, limit: 20,page: 1,},
            //page: 1,
            //start: 0,
              
            callback: function() {
                grid.setLoading(false);
                 //storeDet.loadPage(1);
            }
        });

 
     },
    
//     loadPage: function(aplication) {
//        var me = this,
//                panelContenido = me.getPanelContenido();
//
//
//        panelContenido.setLoading("Cargando...");
//        panelContenido.removeAll(true);
//
//        var panelGenerico = Ext.create(aplication);
//
//        panelContenido.add(panelGenerico);
//
//        panelGenerico.on('Add', function(value) {
//            panelContenido.removeAll(true);
//            me.loadPage(value);
//
//
//        });
//
//
//        panelContenido.setLoading(false);
//    },
//    imprimirPDF: function() {
//        var me = this,
//                grid = me.getGridErpCatConvertidor(),
//                records = grid.getSelectionModel().getSelection();
//
//        var record = records[0];
//
//        if (Ext.isEmpty(record)) {
//            msgBoxErr("Error", "No ha seleccionado XML");
//            return;
//        }
//        var compania = record.get('COMPANIA');
//        var xml = record.get('XML');
//        xml = xml.replace('.xml', '.pdf');
//        xml = xml.replace('.XML', '.pdf');
//
//
//            var string = Ext.String.format(
//                    'http://' + window.location.host + '/carga_erp/xml/{0}/{1}',
//                    //'/empres/XML/{0}/{1}',
//                    compania,
//                    xml
//                );
//        
//        Ext.create('Ext.window.Window', {
//            title: 'PDF',
//            height: 500,
//            width: 500,
//            minimizable: true,
//            maximizable : true,
//            layout: 'fit',
//            items: {  // Let's put an empty grid in just to illustrate fit layout
//                xtype: 'panel',
//                //title: 'My PDF',
//                width: 600,
//                height: 400,
//                items: {
//                    xtype: 'component',
//                    autoEl: {
//                        tag: 'iframe',
//                        style: 'height: 100%; width: 100%; border: none',
//                        src: string
//                    }
//                }
//            }
//        }).show();
//        
//       // window.open(string);
//
//    },
//    imprimirPoliza: function(value) {
//        var me = this,
//                grid = me.getGridErpCatConvertidor(),
//                records = grid.getSelectionModel().getSelection();
//
//        var record = records[0];
//
//        if (Ext.isEmpty(record)) {
//            msgBoxErr("Error", "No ha seleccionado la poliza");
//            return;
//        }
//        var compania = record.get('COMPANIA');
//        var numero = record.get('NUMERO_POL');
//        var tipoPoliza = record.get('TIPO_POLIZA');
//        var fecha = record.get('FECHA_POL');
//
//        var fechaM = Ext.Date.parse(fecha, 'd/m/Y');
//        
//        var fechaNueva = Ext.Date.format(fechaM, 'dmY');
//        
//        fecha = fechaNueva;
//
//
//
//        var string = Ext.String.format(
//                //'<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
//                'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={1}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con',
//                numero,
//                compania,
//                tipoPoliza,
//                fecha
//
//                );
//        
//        window.open(string);
//
//
//    },
//    setConcGasto: function(conc) {
//        var me = this,
//                grid = me.getGridErpCatConvertidor(),
//                records = grid.getSelectionModel().getSelection();
//
//        var record = records[0];
//
//        record.set('IDCONCGASTO', conc);
//
//
//    },
    guardarErpCatConvertidor: function() {
        var me = this,
                grid = me.getGridErpCatConvertidor(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        //  var record = records[0];

        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

        if (!Ext.isEmpty(news) || !Ext.isEmpty(modified)) {

//            if(!Ext.isEmpty(modified)){
//        var j;
//        for (j = 0; j < modified.length; j++) {   
//            
//             
//             if(Ext.isDate(modified[j].data.FECHA)){
//                fechaCam = Ext.Date.format(modified[j].data.FECHA, 'd/m/Y');
//                modified[j].data.IDCONGASTO = fechaCam;
//             }
//   
//                 
//        }
//      }

            grid.setLoading("Guardando...");
            store.sync({
                scope: this,
                success: function(resp, dos) {
                    //grid.setLoading(false);                                   
                },
                failure: function(resp, dos) {
                    msgBoxErr('Error', 'Error al guardar:' + store.getProxy( ).getReader().rawData.msg);
                    //grid.setLoading(false);
                },
                callback: function(records, operation, val3) {
                    //  grid.setLoading(false);   
                    me.procesarPolizas(modified, 0, me, grid);

                }

            });

        }
    },
    
    copiarDetalle:function(sec){
        
         var me = this,
                grid = me.getGridErpDetConvertidor(),
                 store = grid.getStore();
        var form = me.getFormErpCatConvertidor().getForm();
        // form.findField('archCOMPANIA').setValue(nombre);
          var records = grid.getSelectionModel().getSelection();

        var record = records[0];
       
       msgOut("sec"+sec);
       
      
        var data = [];
        store.each(function(r) {
            r.data.NO_CASO = sec;
            data.push(r.data);
        });


        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        msgOut(jsonData);
            grid.setLoading("Copiando Detalle Convertidor...");
        

        
        store.proxy.extraParams.origen =  form.findField('ORIGEN').getValue();
        store.proxy.extraParams.idConGasto = form.findField('IDCONCGASTO').getValue();
        store.proxy.extraParams.caso = sec;
        
          Ext.Ajax.request({
            url: 'controlDet/copiarconvertidordet',
            timeout: 60000,
            scope: this,
            params: {
                data: jsonData 
                

            },
            success: function(response) {
                var text = response.responseText;
                 grid.setLoading(false);
               

            },
            callback: function(a, b, c) {
                grid.setLoading(false);
                
                
                if (Ext.isEmpty(c.responseText)) {
                    msgBoxErr('Error', 'Error de comunicacion al Guardar');
                    return;
                }
                var res = Ext.decode(c.responseText);
                msgOut("res"+res);
                if (res.success) {

                    msgBox('Guardar', res.msg);
                   
                    store.load();
                }
            }
        });
        
        
    },
    
     saveDetConvertidor: function(sec) {

        var me = this,
                grid = me.getGridErpDetConvertidor(),
                 store = grid.getStore();
        var form = me.getFormErpCatConvertidor().getForm();
        // form.findField('archCOMPANIA').setValue(nombre);
          var records = grid.getSelectionModel().getSelection();

        var record = records[0];
       
       msgOut("sec"+sec);
   
       
       
       
        //if (Ext.isEmpty(record)) {
           // msgBoxErr("Error", "No ha seleccionado XML");
          //  return;
        //}
//        form.findField('txtCOMPANIA').getValue();
//        form.findField('txtORIGEN').getValue();
//        form.findField('txtIDCONCGASTO').getValue();
//       
//        
//        var compania = record.set(form.findField('txtCOMPANIA').getValue(),'COMPANIA');
//        var origen = record.set(form.findField('txtORIGEN').getValue(),'ORIGEN');
//        var idConCGasto = record.set(form.findField('txtIDCONCGASTO').getValue(),'IDCONCGASTO');
//        var noCaso = record.set(sec,'NO_CASO');
        
         
        
        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();
        
       

        if (!Ext.isEmpty(news) || !Ext.isEmpty(modified)) {
           
            grid.setLoading("Guardando Convertidor...");
         var i = 0;
                   if (!Ext.isEmpty(news)) {
                        for (i = 0; i < news.length; i++) {
                           
                            news[i].data.NO_CASO = sec;
                            
                            msgOut("cargo,abodno"+news[i].data.T_APLICACION);
                           if(Ext.isEmpty(news[i].data.T_APLICACION)){
                               
                               msgBoxErr("Error","Falta agregar cargos y abonos");
                         grid.setLoading(false);      
                         return;
                               
                               
                           }
                           
                            if(Ext.isEmpty(news[i].data.IDCAMPO)){
                               
                               msgBoxErr("Error","Falta agregar ID");
                         grid.setLoading(false);      
                         return;
                               
                               
                           }else{
                               
                               
                              news[i].data.IDCAMPO = Ext.String.trim(news[i].data.IDCAMPO);

                              
                           } 
                             if(Ext.isEmpty(news[i].data.CUENTA)){
                               
                               msgBoxErr("Error","Falta agregar cuenta");
                         grid.setLoading(false);      
                         return;
                               
                               
                           } 
                           

                        }
                    }
                     if (!Ext.isEmpty(modified)) {
                        for (i = 0; i < modified.length; i++) {
                           
                           
                            
                           
                           if(Ext.isEmpty(modified[i].data.T_APLICACION)){
                               
                               msgBoxErr("Error","Falta agregar cargos y abonos");
                         grid.setLoading(false);      
                         return;
                               
                               
                           } 
                           
                           if(Ext.isEmpty(modified[i].data.IDCAMPO)){
                               
                               msgBoxErr("Error","Falta agregar ID");
                         grid.setLoading(false);      
                         return;
                               
                               
                           }
                           if(Ext.isEmpty(modified[i].data.CUENTA)){
                               
                               msgBoxErr("Error","Falta agregar cuenta");
                         grid.setLoading(false);      
                         return;
                               
                               
                           }

                        }
                    }
                    
        
       

        //store.proxy.extraParams.compania = compania;
        store.proxy.extraParams.origen =  form.findField('ORIGEN').getValue();
        store.proxy.extraParams.idConGasto = form.findField('IDCONCGASTO').getValue();
        store.proxy.extraParams.caso = sec;
      

            store.sync({
                scope: this,
                success: function(resp, dos) {
                    
                     Ext.example.msg("Convertidor", 'Convertidor Guardado' );
                     
                      store.loadData([], false);
                        store.load({
                            //url: dirBus,
                            callback: function(val1, val2, val3) {
                                grid.setLoading(false);
                            }
                        });
                    
                                  
                    
                },
                failure: function(resp, dos) {
                    msgBoxErr('Error', 'Error al guardar Detalle del convertidor:' + store.getProxy( ).getReader().rawData.msg);
                   
                    grid.setLoading(false);
                },
                callback: function(records, operation, val3) {
                    
                  
                    grid.setLoading(false);
                    
                    
                }

            });
        }else{
            
            Ext.example.msg("Convertidor", 'Convertidor Guardado' );
            
        }

    },
    
//    procesarPolizas: function(modified, j, me, grid) {
//        //Ext.data.Connection.cors = true;
//        //var me =this;
////        var j;
////        
////        var task = new Ext.util.DelayedTask(function() {
////            me.findErpCatConvertidor();
////         });
////        for (j = 0; j < modified.length; j++) {   
//        msgOut(j);
//        if (j === (modified.length)) {
//            grid.setLoading(false);
//            me.findErpCatConvertidor();
//            return;
//        }
//        Ext.Ajax.request({
//            url: '/fenius/servlet/ada_ServAppletSqr?catalogo=Pro_GPoliza&dic_sistema=empres&dic_estado=66&reporte=Pro_GPoliza&ck_htm=on',
//            method: 'GET',
//            scope: this,
//            params: {
//                compania: modified[j].data.COMPANIA,
//                factura: modified[j].data.NUMERO
//            },
//            callback: function(records, operation, success) {
////                msgOut(records);
////                msgOut(operation);
////                msgOut(success);
////                msgOut(success.responseText);
//               var pos= success.responseText.indexOf("<title>");
//               msgOut("pos:"+pos);
//               var pos2 = success.responseText.indexOf("</title>",pos+1);
//                     msgOut("pos2:"+pos2);
//                
//                   
//              var reporte=  success.responseText.substring(pos+7,pos2);
//              msgOut("reporte:"+reporte);
//              me.pageGetLogs(reporte+'.htm');
//                me.procesarPolizas(modified, j + 1, me, grid);
//
//            },
//            timeout: 30000
//
//        });
//
//
////        }
////        
////        task.delay(1000);
//
//
//
//
//
//    },
    pageGetLogs:function (program){
          Ext.Ajax.request({
            url: '/sqr_empres/Pro_GPoliza/'+program,
            method: 'GET',
           
            callback: function(records, operation, success) {
                msgOut(records);
                msgOut(operation);
                msgOut(success);
                msgOut(success.responseText);
            
              //  me.procesarPolizas(modified, j + 1, me, grid);

            },
            timeout: 30000

        });
    },
    findErpCatConvertidor: function(factura) {

        var me = this,
                gridArch = me.getGridErpCatConvertidor(),
                storeArch = gridArch.getStore();
        if (Ext.isEmpty(factura))
            factura = '';
        storeArch.proxy.extraParams.FACTURA = factura;

        gridArch.setLoading('Buscando...');
        storeArch.loadData([], false);
        storeArch.load({
            callback: function() {
                gridArch.setLoading(false);
            }
        });
    },
//    addArchivo: function(btn) {
//
//        var me = this;
//        Ext.Ajax.request({
//            url: 'process/data/BuscaCompania',
//            method: 'GET',
//            scope: this,
//            callback: function(records, operation, success) {
//                if (Ext.isEmpty(success.responseText))
//                    return;
//                var val = Ext.decode(success.responseText);
//                if (Ext.isEmpty(val))
//                    return;
//                if (val.success) {
//                    var nombre = val.data[0].COMPANIA;
//
//                    var view = Ext.widget('windowerpcatconvertidor');
//                    view.setTitle('Agregar Archivo');
//                    var form = view.down('formerpcatconvertidor').getForm();
//                    form.findField('archCOMPANIA').setValue(nombre);
//
//                } else if (!val.success) {
//                    msgBoxErr('Compania', 'Error compañia no encontrada');
//                }
//            },
//            timeout: 30000
//
//        });
//
//
//
//    },
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
                    var compania = val.data[0].COMPANIA;

                    var me = this,
                            form = me.getFormErpCatConvertidor().getForm();
                    form.findField('COMPANIA').setValue(compania);
                    
                } else if (!val.success) {
                    msgBoxErr('Compania', 'Error compañia no encontrada');
                }
            },
            timeout: 30000

        });
    },
    getCompania: function() {
        var grid = this.getAppMain();
        var title = grid.title;
        var n = title.indexOf("-");
        var compania = title.substr(0, n);
        return compania;
    },
    procesaDirectorio: function() {
        var me = this,
                grid = me.getGridErpDetConvertidor(),
                store = grid.getStore();

        //var records = store.getRange(0,store.getTotalCount( ));

//      for(var i=0;i<records.length;i++){
//          msgOut(records.get('FLAG_CARGA'));
//      }
        grid.setLoading('Procesando...');
        var data = [];
        store.each(function(r) {
            if (r.data.FLAG_CARGA && Ext.isEmpty(r.data.CARGA))
                data.push(r.data);
        });

        if (Ext.isEmpty(data)) {
            // msgBoxErr('Error', 'No existen datos en la secuencia');
            return;
        }

        var jsonData = Ext.encode(data);

        Ext.Ajax.request({
            url: 'dirdata/process',
            timeout: 60000,
            scope: this,
            params: {
                data: jsonData



            },
            success: function(response) {
                var text = response.responseText;
                
                grid.setLoading(false);


            },
            callback: function(a, b, c) {
                grid.setLoading(false);
                 var val = Ext.decode(c.responseText);
                //msgOut(val.msg);
                
                 Ext.Ajax.request({
                        url: 'process/data/BuscaErr',
                        params: {
                           
                            id : val.msg
                        },
                        method: 'GET',
                        scope: this,
                        callback: function(records, operation, success) {
                            if (Ext.isEmpty(success.responseText))return;
                            var val = Ext.decode(success.responseText);
                            if (Ext.isEmpty(val))
                                return;
                            if (val.success) {
                                msgOut("arreglo"+val.data.length);
                                var mensaje = '';
                                for (var i = 0, len = val.data.length; i < len; i++) {
                                    
                                   mensaje += val.data[i].MENSAJE+'      ';
                                   msgOut("mensaje"+mensaje+"   "+i);
                                    
                                  };
                                msgOut("mensaje2"+mensaje);
                                
                                 Ext.create('Ext.window.Window', {
                                    title: 'ESTATUS',
                                    height: 500,
                                    width: 500,
                                    minimizable: true,
                                    maximizable : true,
                                    layout: 'fit',
                                    items: {  // Let's put an empty grid in just to illustrate fit layout
                                        xtype: 'panel',
                                        //title: 'My PDF',
                                        width: 600,
                                        height: 400,
                                        html:mensaje
                                    }
                                }).show();

                               
                            } else if (!val.success) {
                                msgBoxErr('mensaje', 'Error mensaje no encontrado');
                            }
                        },
                        timeout: 30000

                    });
                if (Ext.isEmpty(c.responseText)) {
                    msgBoxErr('Error', 'Error al Porcesar XML');
                    return;

                }
                me.loadDirectorio();
                me.findErpCatConvertidor();
                var res = Ext.decode(c.responseText);

            }
        });


    }
//    ,
//    loadDirectorio: function() {
//        var me = this,
//                gridDir = me.getGridErpDetConvertidor(),
//                storeDir = gridDir.getStore();
//
//
//        gridDir.setLoading('Buscando...');
//        storeDir.loadData([], false);
//        storeDir.proxy.extraParams.sql = 'BuscaErpCatConvertidorDirectorio';
//        storeDir.load({
//            callback: function() {
//                gridDir.setLoading(false);
//            }
//        });
//
//    },
//    saveArchivo: function(btn) {
//
//        var me = this,
//                grid = me.getGridErpCatConvertidor(),
//                records = grid.getSelectionModel().getSelection(),
//                store = grid.getStore(),
//                form = btn.up('formerpcatconvertidor'),
//                win = form.up('window'),
//                basicForm = form.getForm();
//
//        var compania = basicForm.findField('archCOMPANIA').getValue();
//
//        store.proxy.extraParams.compania = compania;
//
//
//        if (basicForm.isValid()) {
//            grid.setLoading("Guardando Archivo...");
//            //form.setLoading("Guardando Archivo...");
//            basicForm.submit({
//                success: function(form, action) {
//                    win.close();
//                    Ext.Msg.alert('Guardado', 'El Archivo se guardo Correctamente');
//                    //store.loadData([], false);
////                    store.load({
////                        callback: function() {
//                    grid.setLoading(false);
//                    store.load();
//                    win.close();
////                            // me.loadSumaDetalle(tipoPol,numeroPol,fechaPol);
////                        }
////                    });
//                    //me.setSession(action.result.data[0].UC_COMPANIA, action.result.data[0].US_USUARIO);
//
//                },
//                failure: function(form, action) {
//                 
//                  Ext.Ajax.request({
//                        url: 'process/data/BuscaErr',
//                        params: {
//                           
//                            id : action.result.msg
//                        },
//                        method: 'GET',
//                        scope: this,
//                        callback: function(records, operation, success) {
//                            if (Ext.isEmpty(success.responseText))return;
//                            var val = Ext.decode(success.responseText);
//                            if (Ext.isEmpty(val))
//                                return;
//                            if (val.success) {
//                                msgOut("arreglo"+val.data);
//                                var mensaje = val.data[0].MENSAJE;
//                                 Ext.create('Ext.window.Window', {
//                                    title: 'ESTATUS',
//                                    height: 500,
//                                    width: 500,
//                                    minimizable: true,
//                                    maximizable : true,
//                                    layout: 'fit',
//                                    items: {  // Let's put an empty grid in just to illustrate fit layout
//                                        xtype: 'panel',
//                                        //title: 'My PDF',
//                                        width: 600,
//                                        height: 400,
//                                        html:mensaje
//                                    }
//                                }).show();
//
//                               
//                            } else if (!val.success) {
//                                msgBoxErr('mensaje', 'Error mensaje no encontrado');
//                            }
//                        },
//                        timeout: 30000
//
//                    });
//                    //Ext.Msg.alert('Error', action.result.msg);
//                    grid.setLoading(false);
//                    //  form.setLoading(false);
//                }
//            });
//
//
//        } else {
//
//            basicForm.getFields().each(function(item) {
//                if (!item.isValid()) {
//                    msgBoxErr("Error falta un campo", item.name);
//                    return;
//                }
//
//            });
//        }
//
//    }

});
