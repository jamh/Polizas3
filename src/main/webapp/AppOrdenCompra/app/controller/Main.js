Ext.define('AppOrdenCompra.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: [
        'StoreOrdenCompra',
        'StoreDetOrdenCompra',
        'StoreFacturasXDetOrden',
        'StoreFacturasOrdenCXP',
        'StorePedidos',
        'StorePedidosArchivos',
        'StorePedidosArchivosLinea'
    ],
    models: [
        
        'ModeloOrdenCompra',
        'ModeloDetOrdenCompra',
        'ModeloFacturasXDetOrden',
        'ModeloFacturasOrdenCXP',
        'ModeloPedidos',
        'ModeloPedidosArchivos',
        'ModeloPedidosArchivosLinea'

    ],
    refs: [
        {
            ref: 'gridOrdenCompra',
            selector: 'gridordencompra'
        },
         {
            ref: 'gridDetOrdenCompra',
            selector: 'griddetordencompra'
        },
        
        {
            ref: 'gridFacturasXDetOrden',
            selector: 'gridfacturasxdetorden'
        },
        {
            ref: 'gridEnvioCXP',
            selector: 'gridenviocxp'
        },
        {
            ref: 'gridPedidos',
            selector: 'gridpedidos'
        },
        {
            ref: 'formAddPedido',
            selector: 'formaddpedido'
        },
        {
            ref: 'windowArchivos',
            selector: 'windowarchivos'
        },
        {
            ref: 'formArchivos',
            selector: 'formarchivos'
        },
        {
            ref: 'formCXPOtros',
            selector: 'formcxpotros'
        },
        {
            ref: 'windowCXPOtros',
            selector: 'windowcxpotros'
        },
        {
            ref:'gridArchivosPedidos',
            selector:'gridarchivospedidos'
            
        },
        {
            
            ref:'gridArchivosPedidosLinea',
            selector:'gridarchivospedidoslinea'
            
        }
        

    ],
    views: [
        'GridOrdenCompra',
        'GridDetOrdenCompra',
        'Main',
        'GridFacturasXDetOrden',
        'GridEnvioCXP',
        'GridPedidos',
        'FormAddPedido',
        'WindowArchivos',
        'FormArchivos',
        'FormCXPOtros',
        'WindowCXPOtros',
        'GridArchivosPedidos',
        'GridArchivosPedidosLinea'
       
    ],
  
    init: function() {

        var me = this;
        me.control({
            
            gridarchivospedidoslinea:{
                
                verArchivosPedidosLinea:function(){
                    
                    me.verArchivosPedidosLinea();
                }
                
            },
            
            gridarchivospedidos:{
                
                verArchivosPedidos:function(){
                    
                    me.verArchivosPedidos();
                },
                afterrender:function(){
                    
                    
                    
                     
                }
                
                
            },
            
            
            formcxpotros:{
                
                guardaCXPOtros:function(btn){
                    
                    me.guardaCXPOtros(btn);
                    
                }
                
            },
            
            formarchivos:{
                
                saveArchivoFE:function(){
                    
                    me.saveArchivoFE();
                }
                
                
            },
            
            formaddpedido:{
                
                generaOrdenPedido:function(btn){

                    me.generaOrdenPedido(btn);
                }
            },
            
            gridpedidos:{
                
                   select: function(view, model, index) {
                        // msgOut('select');



                             me.loadArchivosPedidos(index, model);


                       

                     },
                
                 afterrender: function() {

                            me.findPedidos();
                        },
                        
                  cleanFiltersPedidos:function(){
                      
                        me.cleanFiltersPedidos();
                  },
                  
                  addOrdenPedido:function(){
                  
                     me.addOrdenPedido();
                  }
            },
            
            gridenviocxp:{
                
                  afterrender: function() {

                            me.findRelFactCXP();
                        },
                        
                   verArchivoOrdenCXP:function(){
                       
                      me.verArchivoOrdenCXP();  
                   },
                        
                  verFacturaCXP:function(){
                   
                       var me = this,
                      grid = me.getGridEnvioCXP(),
                            records = grid.getSelectionModel().getSelection(),
                            store = grid.getStore();
                    var record = records[0];

                      if(record.get('ORIGEN')==='FE'){
                          
                          me.verFactNacCXP(); 
                      }
                      
                      if(record.get('ORIGEN')==='OTR'){
                          
                           me.verFactExtCXP();
                      }
                       
                      
                      
                   },
                   enviarFactCXP:function(){
                       
                       me.enviarFactCXP();
                   }
                
                
                
            },
            
            gridfacturasxdetorden:{
                
                  afterrender: function() {

                            me.findRelFact();
                        },
                        
                        
                   saveRel:function(btn){
                       
                       me.saveRel(btn);
                   },
                   delRel:function(){
                       
                       me.delRel();
                   },
                   verFactura:function(){
                   
                       var me = this,
                      grid = me.getGridFacturasXDetOrden(),
                            records = grid.getSelectionModel().getSelection(),
                            store = grid.getStore();
                    var record = records[0];

                      if(record.get('ORIGEN')==='FE'){
                          
                          me.verFactNac(); 
                      }
                      
                      if(record.get('ORIGEN')==='OTR'){
                          
                           me.verFactExt();
                      }
                       
                      
                      
                   },
                   
                   verArchivoOrden:function(){
                       
                       me.verArchivoOrden();
                   }
                
                
            },
            
            gridordencompra:{
                
                verPedidos:function(){
                    
                    me.verPedidos();  
                },
                
                estatusCanOrden:function(){
                    
                      var resp = Ext.MessageBox.show({
                        title: 'Cancelar Orden',
                        msg: 'Esta seguro que desea cancelar esta orden?',
                        icon: Ext.MessageBox.QUESTION,
                        buttons: Ext.Msg.YESNO,
                        fn: function(btn, text) {
                            if (btn === 'yes') {
                    
                                me.estatusCanOrden();
                        }
                        }
                    })
                },
                
              
                canAutorizaOrden:function(){
                    
                         var resp = Ext.MessageBox.show({
                        title: 'Cancela Autorizacion',
                        msg: 'Esta seguro que desea cancelar la autorizacion de esta orden?',
                        icon: Ext.MessageBox.QUESTION,
                        buttons: Ext.Msg.YESNO,
                        fn: function(btn, text) {
                            if (btn === 'yes') {
                    
                                me.canAutorizaOrden();
                            }
                        }
                    })
                    
                    
                },
                
                
                autorizaOrden:function(){
                    
                       var resp = Ext.MessageBox.show({
                        title: 'Autorizar Orden',
                        msg: 'Esta seguro que desea autorizar esta orden?',
                        icon: Ext.MessageBox.QUESTION,
                        buttons: Ext.Msg.YESNO,
                        fn: function(btn, text) {
                            if (btn === 'yes') {
                    
                                me.autorizaOrden();
                            }
                        }
                    })
                },
                
                verOrden:function(){
                    
                  me.verOrden();  
                },
                
                   cleanFiltersMstOrden:function(){
                       
                        me.cleanFiltersMstOrden();  
                   },
                
                    enviaIdProveedor:function(id){
                        
                        me.enviaIdProveedor(id);
                    },
                
                    cancelaOrden:function(btn){
                        
                      me.cancelaOrden(btn);  
                    },
            
                    afterrender: function() {

                            me.permisosComponentes();
                            me.findOrdenCompra();
                        },
                        
                     addOrden: function(btn, cellEditing) {
                         
                         me.addOrden(btn, cellEditing);
                         
                     },
                     
                     saveOrden:function(btn,celleditor){
                         
                         me.saveOrden(btn,celleditor);
                     },
                        
                     select: function(view, model, index) {
                        // msgOut('select');



                       //  if (me.rowChange !== index) {
                       //      me.rowChange = index;

                             me.loadDetOrden(index, model);


                         //}

                     }
            },
            
            griddetordencompra:{
                
                select: function(view, model, index) {
                        // msgOut('select');



                             me.loadArchivosPedidosLinea(index, model);


                       

                     },
                
                addFacturaExt:function(){
                    
                  me.addFacturaExt();  
                },
                
                addFactura:function(){
                    
                  me.addFactura();  
                },
                
                cerrarDetOrden:function(){
                    
                     var resp = Ext.MessageBox.show({
                        title: 'Cerrar Linea',
                        msg: 'Esta seguro que desea cerrar la linea?',
                        icon: Ext.MessageBox.QUESTION,
                        buttons: Ext.Msg.YESNO,
                        fn: function(btn, text) {
                            if (btn === 'yes') {
                    
                                me.cerrarDetOrden();  
                        }
                        }
                    })
                    
                     
                },
                abrirDetOrden:function(){
                    
                     var resp = Ext.MessageBox.show({
                        title: 'Cerrar Linea',
                        msg: 'Esta seguro que desea abrir la linea?',
                        icon: Ext.MessageBox.QUESTION,
                        buttons: Ext.Msg.YESNO,
                        fn: function(btn, text) {
                            if (btn === 'yes') {
                    
                                me.abrirDetOrden();  
                        }
                        }
                    })
                    
                     
                },
                addDetOrden:function(btn, cellEditing){
                     me.addDetOrden(btn, cellEditing);
                    
                },
                saveDetOrden:function(){
                    
                    me.saveDetOrden();
                },
                cancelaOrdenDet:function(){
                    
                    me.cancelaOrdenDet();
                },
                relacionaFacturas:function(){
                    
                    me.relacionaFacturas();
                },
                
                enviaFacturasCXP:function(){
                    
                    me.enviaFacturasCXP();
                    
                },
                
                 cleanFiltersMstOrdenDet:function(){
                       
                        me.cleanFiltersMstOrdenDet();  
                   }
                
            }
            
        });
    },
    
    
              permisosComponentes: function() {
        var me = this;
        
        
       // grid = me.getGridClientes(),
        //tab = me.getMainPanel();
        Ext.Ajax.request({
            url: 'process/data/BuscaPermisosComponentesOrden',
            method: 'GET',
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                   
                     
                     var i =0;
                     for(i=0;i<val.data.length;i++){
                         
                        var componente = val.data[i].COMPONENTE;
                        var readOnly = val.data[i].READ_ONLY;
                        var hidden = val.data[i].HIDDEN;
                        var allowblack = val.data[i].ALLOW_BLACK;
                        var tipo = val.data[i].TIPO;
                        
                        
                    if (tipo !== 'GRID'){    
                     
                        if (!Ext.isEmpty(allowblack)){
                        
                            if (allowblack === '1'){
                                Ext.getCmp(componente).allowBlank = true;

                            }else{

                                Ext.getCmp(componente).allowBlank = false;

                            }
                        }
                        
                        if (!Ext.isEmpty(readOnly)){
                        
                        if (readOnly === '1'){
                            Ext.getCmp(componente).setReadOnly(true);
                            
                        }else{
                            
                            Ext.getCmp(componente).setReadOnly(false);
                          
                        }
                      }
                        if (!Ext.isEmpty(hidden)){
                        if (hidden === '1'){
                            Ext.getCmp(componente).setVisible(false);
                            
                        }else{
                            
                            Ext.getCmp(componente).setVisible(true);
                          
                        }
                    }
                        
                   }
                   
                
                   
                   
                   
                   
                         
                         
                     }
                    
                     
                    

                } else if (!val.success) {
                   
                }
            },
            timeout: 30000

        });
    },
    
        addFacturaExt:function(){
        
         var me = this,
           grid = me.getGridDetOrdenCompra(),
           gridOrden = me.getGridOrdenCompra(),
   
               records = grid.getSelectionModel().getSelection(),
               recordsOrden = gridOrden.getSelectionModel().getSelection();
        
        
           
        var record = records[0];
        var recordOrden = recordsOrden[0];
        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado una linea");
            return;
        }
   
            var orden = recordOrden.get('ID');
            var rfc = recordOrden.get('RFC');
                  
            var linea = record.get('LINEA');

        var view = Ext.widget('windowcxpotros');
        
        view.setTitle('Agregar CXP');
        
         var basicForm = view.down('formcxpotros').getForm();
         
         view.down('formcxpotros').setLoading('Cargando...');
         
      
                         
           Ext.Ajax.request({
            url: 'process/data/BuscaDatosProveedorOrden',
            method: 'GET',
            params:{
                
              rfc:rfc  
            },
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
               
                    basicForm.findField('cxpBeneficiarioOrden').setValue(val.data[0].NOMBRE);
                    basicForm.findField('cxpID_CLIENTEOrden').setValue(val.data[0].ID_CLIENTE);
             
          
                    basicForm.findField('cxpRFCEmisorOrden').setValue(rfc);
                    
                   
                    
                    basicForm.findField('archORDEN_COMPRA_OTROrden').setValue(orden);
                    basicForm.findField('archLINEA_OTROrden').setValue(linea);
                    
                    
                       var storeMoneda = basicForm.findField('cboMonedaOrden').getStore();
                          storeMoneda.proxy.extraParams.query = "";
                         storeMoneda.load({
                             callback:function(val1){
                                  
                                
                                    basicForm.findField('cboMonedaOrden').setValue('USD');
                             }
                         });
                    
                    view.down('formcxpotros').setLoading(false);
                   

                } else if (!val.success) {
                    msgBoxErr('Compania', 'Error compañia no encontrada');
                }
            },
            timeout: 30000

        });
        
        
  

        
             
    
    
        
    },
    
        guardaCXPOtros:function(btn){
 //VIEW        var view = Ext.widget('windowcxpotros');
//        view.setTitle('Descarga Sat');
        //   me.findRfcCfdi(btn);
        var me = this;
       var   form1 = btn.up('formcxpotros'),
        win = form1.up('window'),
        basicForm = form1.getForm();

        var rfcStr = basicForm.findField('cxpRFCEmisorOrden').getValue();
      //  var tipoGasto = basicForm.findField('cboTipo').getValue();
      //  var compania = basicForm.findField('txtCompania').getValue();

        // me.validaRfc(rfc);
         
         var strCorrecta
         
         if(!Ext.isEmpty(rfcStr)){
             
             if (rfcStr.length === 10){
                 
             }else{
                if (rfcStr.length === 12)
                {

                        strCorrecta = 'X' + rfcStr;
                        msgOut("rfcStr"+rfcStr);
                }
                else
                {
                        strCorrecta = rfcStr;
                }
                var valid = '^(([A-Z]|[a-z]|\s){1})(([A-Z]|[a-z]){3})([0-9]{6})((([A-Z]|[a-z]|[0-9]){3}))';
                var validRfc=new RegExp(valid);
                var matchArray=strCorrecta.match(validRfc);
                if (matchArray===null) {
                        msgBoxErr('Error', 'El RFC: '+rfcStr+ ' tiene una estructura incorrecta');
                        return;

                }
            }
         }
	
              if (basicForm.isValid()) {
                form1.setLoading("Guardando Datos...");
                basicForm.submit({
                    timeout:30000,
                    success: function(form, action) {
                        if(!Ext.isEmpty(action.result))
                            msgOut("guardando1");
                        
                        Ext.Msg.alert('Guardado', 'Gasto guardado con numero: '+action.result.msg);
                        msgOut("guardando2");
                         win.close();
                         msgOut("guardando3");
                         // me.findArchivos();
                          msgOut("guardando4");
                        form1.setLoading(false);
                        
                        me.loadDetOrden();
                        
                        
                        //me.findCxpOtros();
                        
                    // if(tipoGasto === 'R' || tipoGasto === 'A'){    
                    //    me.enviaCorreoOtros(action.result.msg);
                    //    
                    //    
                    // }
                        
                    

                    },
                    failure: function(form, action) {
                        form1.setLoading(false);
                        if(!Ext.isEmpty(action.result))
                        Ext.Msg.alert('Error', action.result.msg);
                        form1.setLoading(false);
                    },
                     callback: function(records, operation, val3) {
                   
                   me.loadDetOrden();
                    
//                    me.procesarPolizas(modified, 0, me, grid);

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
    
     addFactura: function(btn){
        
        var me = this,
           grid = me.getGridDetOrdenCompra(),
           gridOrden = me.getGridOrdenCompra(),
   
               records = grid.getSelectionModel().getSelection(),
               recordsOrden = gridOrden.getSelectionModel().getSelection();
        
        
           
        var record = records[0];
        var recordOrden = recordsOrden[0];
        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado una linea");
            return;
        }
   
            var orden = recordOrden.get('ID');
            var rfc = recordOrden.get('RFC');
                  
            var linea = record.get('LINEA');
   
        var view = Ext.widget('windowarchivos');
        view.setTitle('Crear Archivos');
        var form = view.down('formarchivos').getForm();
        
        view.down('formarchivos').setLoading('Cargando...');
        
         Ext.Ajax.request({
            url: 'process/data/BuscaRFCEmpresa',
            method: 'GET',
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                   
                    form.findField('archCOMPANIAOrden').setValue(val.data[0].NOMBRE);
                    form.findField('idCOMPANIAOrden').setValue(val.data[0].COMPANIA);
                    form.findField('archCORFCPROVOrden').setValue(rfc);
                    
                    form.findField('archCORFCOrden').setValue(val.data[0].RFC);
                    
                     form.findField('archORDEN_COMPRA').setValue(orden);
                    form.findField('archLINEA').setValue(linea);
                    
                    view.down('formarchivos').setLoading(false);
                   

                } else if (!val.success) {
                    msgBoxErr('Compania', 'Error compañia no encontrada');
                }
            },
            timeout: 30000

        });
        
        //form.findField('idClienteProv').setReadOnly(false);
        //form.findField('idClienteProv').setDisabled(true);
        //form.findField('addBanderaViatic').setVisible(true);
       
        
      //  view.down('formproveedores').down('button[itemId=btnSaveProveedor]').setVisible(true);
      //  me.permisosComponentes();
    },
    
    
       saveArchivoFE: function(btn) {

        var me = this,
                form = me.getFormArchivos(),
                
                win = form.up('window'),
                
                basicForm = form.getForm();
               
          
        
            if (basicForm.isValid()) {
                form.setLoading("Guardando FE...");
                basicForm.submit({
                     url:'Uploadprov/savePortalAereoOrden',
                   
                    success: function(form2, action) {

                        Ext.Msg.alert('Guardado', 'El Archivo se guardo Correctamente:' + action.result.msg);

                        form.setLoading(false);
                        win.close();
                        me.loadDetOrden();
                        
                        //me.enviaCorreo(basicForm.findField('COMPANIA').getValue(),action.result.msg);
                      //  me.enviaCorreoIngresoGastos(ppCompa,action.result.msg,'F',ppUsr);
                        
                        //me.enviaCorreo('TEMP')
                       // me.findErpFecomprobantes();

                    },
                    failure: function(form2, action) {

                        form.setLoading(false);
                        if (Ext.isEmpty(action.result.numero)) {
                            
                            var winErr = Ext.create('Ext.window.Window', {
                            title: 'Error',
                            height: 130,
                            width: 400,
                            buttonAlign : 'center',
                           // minimizable: true,
                            maximizable : false,
                            layout: 'fit',
                            items: {  // Let's put an empty grid in just to illustrate fit layout
                                xtype: 'panel',
                                //title: 'My PDF',
                                width: 400,
                                height: 100,
                                
                                items: {
                                    
                                    xtype: 'component',
                                   // id: 'comp1',
                                    autoEl: {
                                        //fieldLabel: 'Order Code',
                                        html: '<div align="center"><p>'+action.result.msg+'</div>'
                                    }
                                    
                                 
                                }
                            },
                            buttons: [{
                                    text     : 'Aceptar',
                              handler  : function(){
                                        winErr.hide();
                                    }}]
                        }).show();
                            
                          //  msgBoxErr('Errorrrrr', action.result.msg);
                          // msgBoxErr('Errorrrrr', 'Error al cargar xml');
                        }
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
    
    generaOrdenPedido:function(btn){
        
           var me = this,
                grid = me.getGridPedidos(),
                gridDet = me.getGridDetOrdenCompra(),
             
        form = btn.up('formaddpedido'),
        winForm = form.up('window'),

         basicForm = form.getForm(),
              storeDet = gridDet.getStore(),
                store = grid.getStore();

        //var records = store.getRange(0,store.getTotalCount( ));

//      for(var i=0;i<records.length;i++){
//          msgOut(records.get('FLAG_CARGA'));
//      }
        grid.setLoading('Procesando...');
        var data = [];
        store.each(function(r) {
            
          
            
            if (r.data.FLAG_ID_GENERA === true){
                data.push(r.data);
            }
        });

        if (Ext.isEmpty(data)) {

            grid.setLoading(false);
            msgBoxErr('Error', 'No existen facturas a procesar');
            return;
        }

        var jsonData = Ext.encode(data);

        Ext.Ajax.request({
            url: 'detOrden/generaOrdenPedido',
            timeout: 60000,
            scope: this,
            params: {
                data: jsonData,
                prov:basicForm.findField('cboRfcOrdenPedido').getValue(),
                idProv:basicForm.findField('txtIdProvPedido').getValue(),
                idAlmacen:basicForm.findField('txtIdAlmacenOrdenPed').getValue(),
                fechaR:basicForm.findField('fechaReqPedidos').getRawValue()
                
                



            },
             callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    console.log(val);
                    
                    grid.setLoading(false);
                  //  win.close();
                   winForm.close();
                    msgBox('Guardado',val.msg);
                    me.findPedidos();
                    me.findOrdenCompra();
                        storeDet.loadData([], false);

                }else{
                    
                    grid.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
             

                }
                
             }
        });  
        
        
    },
    
    addOrdenPedido:function(){
        
        var me = this;
        
      var window=  Ext.create('Ext.window.Window', {
                                        title: 'Generar Orden',
                                        height: 260,
                                        width: 350,
                                         modal: true,
                                        layout: 'fit',
                                        items: [
                                            {
                                            xtype:'formaddpedido'
                                        }
                                        ],
                                           listeners:{
                                            beforeclose:function(win) {
                                                
                                                me.findPedidos();

                                            // me.findArchivos();
                                             //  me.findArchivos();

                                            }
                                        }


                                    }).show();
        },
        
        verFactNac: function() {

             var me = this,
                grid = me.getGridFacturasXDetOrden(),
                records = grid.getSelectionModel().getSelection();
        
        
        var selection = grid.getSelectionModel().getSelection();
        
 
              var dataNum = '';
           
                     for (var i=0; i < selection.length; i++) {
                    
                    var record = selection[i];
                    
                  
                      
                      if (i === selection.length - 1){
                          
                          dataNum = dataNum+record.get('NUMERO_FE');
                          
                      }else{
                      
                            dataNum = dataNum+record.get('NUMERO_FE')+',';
                        }
                      
                }
                
           
        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado Factura");
            return;
        }
        var compania = record.get('COMPANIA');
       // var xml = record.get('XML');
        var numero = record.get('NUMERO_FE');
       // xml = xml.replace('.XML', '.pdf');
        
          var string = Ext.String.format(
              'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=REP_COMPROBANTE_CFDI&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&numero={1}&reporte=REP_COMPROBANTE_CFDI',
                   compania,
                   dataNum
                );
                    
           
          
        
        Ext.create('Ext.window.Window', {
            title: 'PDF',
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
    
         verArchivoOrden: function(btn) {

        var me = this,
                grid = me.getGridFacturasXDetOrden(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];
      
         
         if (Ext.isEmpty(record)) {
             
             msgBoxErr('Error','Debe seleccionar una factura.');
             
             return;
             
             
         }
            
             var archivo = record.get('ARCHIVO_ORDEN');
             var companiaOtros = record.get('COMPANIA');
             var idOrden = record.get('ID_ORDEN');
//           
       
       

            var string = Ext.String.format(
                   // 'http://' + window.location.host + '/carga_erp/otras/' + companiaOtros + '/' + archivo
                      'http://appferaz1.com/carga_erp/filesordencompra/' + companiaOtros + '/' + idOrden + '/' + archivo
                    );

           window.open(string);

        return string;

       
            
            
        

       

    },
    
    verArchivosPedidosLinea:function(){
        
        
         var me = this,
                grid = me.getGridArchivosPedidosLinea(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];
      
         
         if (Ext.isEmpty(record)) {
             
             msgBoxErr('Error','Debe seleccionar un registro.');
             
             return;
             
             
         }
            
             var url = record.get('URL');
             var nombreArchivo = record.get('NOMBRE_ARCHIVO');
//           
       
       

            var string = Ext.String.format(
                   // 'http://' + window.location.host + '/carga_erp/otras/' + companiaOtros + '/' + archivo
                      'http://appferaz1.com' + url + nombreArchivo
                    );

             Ext.create('Ext.window.Window', {
            title: 'Archivo',
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
         //  window.open(string);

        //return string;

       
            
            
        
        
    },
    
    verArchivosPedidos:function(){
        
         var me = this,
                grid = me.getGridArchivosPedidos(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];
      
         
         if (Ext.isEmpty(record)) {
             
             msgBoxErr('Error','Debe seleccionar un registro.');
             
             return;
             
             
         }
            
             var url = record.get('URL');
             var nombreArchivo = record.get('NOMBRE_ARCHIVO');
//           
       
       

            var string = Ext.String.format(
                   // 'http://' + window.location.host + '/carga_erp/otras/' + companiaOtros + '/' + archivo
                      'http://appferaz1.com' + url + nombreArchivo
                    );

             Ext.create('Ext.window.Window', {
            title: 'Archivo',
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
         //  window.open(string);

        //return string;

       
            
            
        
        
    },
    
     verFactExt: function(btn) {

        var me = this,
                grid = me.getGridFacturasXDetOrden(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];
      
         
         if (Ext.isEmpty(record)) {
             
             msgBoxErr('Error','Debe seleccionar una factura.');
             
             return;
             
             
         }
            
             var archivo = record.get('ARCHIVO');
             var companiaOtros = record.get('COMPANIA');
//           
       
       

            var string = Ext.String.format(
                   // 'http://' + window.location.host + '/carga_erp/otras/' + companiaOtros + '/' + archivo
                      'http://appferaz1.com/carga_erp/otras/' + companiaOtros + '/' + archivo
                    );

           window.open(string);

        return string;

       
            
            
        

       

    },
      verFactNacCXP: function() {

             var me = this,
                grid = me.getGridEnvioCXP(),
                records = grid.getSelectionModel().getSelection();
        
        
        var selection = grid.getSelectionModel().getSelection();
        
 
              var dataNum = '';
           
                     for (var i=0; i < selection.length; i++) {
                    
                    var record = selection[i];
                    
                  
                      
                      if (i === selection.length - 1){
                          
                          dataNum = dataNum+record.get('NUMERO_FE');
                          
                      }else{
                      
                            dataNum = dataNum+record.get('NUMERO_FE')+',';
                        }
                      
                }
                
           
        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado Factura");
            return;
        }
        var compania = record.get('COMPANIA');
       // var xml = record.get('XML');
        var numero = record.get('NUMERO_FE');
       // xml = xml.replace('.XML', '.pdf');
        
          var string = Ext.String.format(
              'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=REP_COMPROBANTE_CFDI&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&numero={1}&reporte=REP_COMPROBANTE_CFDI',
                   compania,
                   dataNum
                );
                    
           
          
        
        Ext.create('Ext.window.Window', {
            title: 'PDF',
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
    
         verArchivoOrdenCXP: function(btn) {

        var me = this,
                grid = me.getGridEnvioCXP(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];
      
         
         if (Ext.isEmpty(record)) {
             
             msgBoxErr('Error','Debe seleccionar una factura.');
             
             return;
             
             
         }
            
             var archivo = record.get('ARCHIVO_ORDEN');
             var companiaOtros = record.get('COMPANIA');
             var idOrden = record.get('ID_ORDEN');
//           
       
       

            var string = Ext.String.format(
                   // 'http://' + window.location.host + '/carga_erp/otras/' + companiaOtros + '/' + archivo
                      'http://appferaz1.com/carga_erp/filesordencompra/' + companiaOtros + '/' + idOrden + '/' + archivo
                    );

           window.open(string);

        return string;

       
            
            
        

       

    },
    
    enviarFactCXP:function(){
        
           var me = this,
                grid = me.getGridEnvioCXP(),
                store = grid.getStore();

        //var records = store.getRange(0,store.getTotalCount( ));

//      for(var i=0;i<records.length;i++){
//          msgOut(records.get('FLAG_CARGA'));
//      }
        grid.setLoading('Procesando...');
        var data = [];
        store.each(function(r) {
            
            console.log(r.data.ESTATUS_CXP);
            console.log(r.data.ESTATUS_CXP2);
            
            if (r.data.ESTATUS_CXP === true && r.data.ESTATUS_CXP2 !== 1){
                data.push(r.data);
            }
        });

        if (Ext.isEmpty(data)) {

            grid.setLoading(false);
            msgBoxErr('Error', 'No existen facturas a procesar');
            return;
        }

        var jsonData = Ext.encode(data);

        Ext.Ajax.request({
            url: 'detOrden/enviaCXP',
            timeout: 60000,
            scope: this,
            params: {
                data: jsonData



            },
             callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    grid.setLoading(false);
                  //  win.close();
                    msgBox('Guardado',val.msg);
                    me.findRelFactCXP();

                }else{
                    
                    grid.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
             

                }
                
             }
        });  
    },
    
     verFactExtCXP: function(btn) {

        var me = this,
                grid = me.getGridEnvioCXP(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];
      
         
         if (Ext.isEmpty(record)) {
             
             msgBoxErr('Error','Debe seleccionar una factura.');
             
             return;
             
             
         }
            
             var archivo = record.get('ARCHIVO');
             var companiaOtros = record.get('COMPANIA');
//           
       
       

            var string = Ext.String.format(
                   // 'http://' + window.location.host + '/carga_erp/otras/' + companiaOtros + '/' + archivo
                      'http://appferaz1.com/carga_erp/otras/' + companiaOtros + '/' + archivo
                    );

           window.open(string);

        return string;

       
            
            
        

       

    },
    
    cleanFiltersPedidos:function(){
        
         var me = this,
                grid = me.getGridPedidos();
        grid.filters.clearFilters();
    },
    
    cleanFiltersMstOrden: function() {

        var me = this,
                grid = me.getGridOrdenCompra();
        grid.filters.clearFilters();

    },
    
    cleanFiltersMstOrdenDet: function() {

        var me = this,
                grid = me.getGridDetOrdenCompra();
        grid.filters.clearFilters();

    },
    
    enviaIdProveedor:function(id){
        
         var me = this,
                grid = me.getGridOrdenCompra(),
                records = grid.getSelectionModel().getSelection();
       

        var record = records[0];
        
        record.set('ID_PROVEEDOR',id);
        
    },
    loadArchivosPedidosLinea:function(){
        
           var me = this,
                grid = me.getGridDetOrdenCompra(),
                records = grid.getSelectionModel().getSelection(),
                gridA = me.getGridArchivosPedidosLinea(),
                storeA = gridA.getStore();


        var record = records[0];
        var compania = record.get('COMPANIA');
        var id = record.get('ID_PEDIDO');

              storeA.proxy.extraParams.compania = compania;
              storeA.proxy.extraParams.id = id;

        gridA.setLoading('Buscando...');
        storeA.loadData([], false);
        storeA.currentPage = 1;
        storeA.load({
            //params: { start: 0, limit: 20,page: 1,},
            //page: 1,
            //start: 0,

            callback: function(records, options, success) {
                gridA.setLoading(false);
                
                
            }
        });
        
        
        
    },
    loadArchivosPedidos:function(index, model){
        
        
         var me = this,
                grid = me.getGridPedidos(),
                records = grid.getSelectionModel().getSelection(),
                gridA = me.getGridArchivosPedidos(),
                storeA = gridA.getStore();


        var record = records[0];
        var compania = record.get('COMPANIA');
        var id = record.get('ID');

              storeA.proxy.extraParams.compania = compania;
              storeA.proxy.extraParams.id = id;

        gridA.setLoading('Buscando...');
        storeA.loadData([], false);
        storeA.currentPage = 1;
        storeA.load({
            //params: { start: 0, limit: 20,page: 1,},
            //page: 1,
            //start: 0,

            callback: function(records, options, success) {
                gridA.setLoading(false);
                
                
            }
        });
        
        
    },
     
    
    loadDetOrden:function(){
        
              var me = this,
                grid = me.getGridOrdenCompra(),
                gridA = me.getGridArchivosPedidosLinea(),
                storeA = gridA.getStore(),
        
                records = grid.getSelectionModel().getSelection(),
                gridDet = me.getGridDetOrdenCompra(),
                storeDet = gridDet.getStore();
       //  me.cleanFiltersDet();           




        var record = records[0];
        var compania = record.get('COMPANIA');
        var id = record.get('ID');






     

        storeDet.proxy.extraParams.compania = compania;
        storeDet.proxy.extraParams.id = id;

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

       storeA.loadData([], false);
   
        
    },
    
    verOrden:function(){
        
       
        var me = this,
                grid = me.getGridOrdenCompra(),
                records = grid.getSelectionModel().getSelection();

        var selection = grid.getSelectionModel().getSelection();


        var dataNum = '';

       


        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado la orden");
            return;
        }
        var compania = record.get('COMPANIA');
        // var xml = record.get('XML');
        var numero = record.get('ID');
        // xml = xml.replace('.XML', '.pdf');

        var string = Ext.String.format(
                'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=JRepOrdenCompra&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&id={1}&reporte=JRepOrdenCompra',
                compania,
                numero
                );


        Ext.create('Ext.window.Window', {
            title: 'Orden de Compra',
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
    
    cancelaOrdenDet:function(){
        
         var me = this,
                grid = me.getGridOrdenCompra(),
                gridDet = me.getGridDetOrdenCompra(),
                records = gridDet.getSelectionModel().getSelection(),
                recordsM = grid.getSelectionModel().getSelection(),
                //storeDet = grid.getStore(),
                storeDetOrden = gridDet.getStore();

        if (Ext.isEmpty(records)){
            
            msgBoxErr('Error', 'Error debe seleccionar la orden de compra');
            
            return;
        }
        
        if(recordsM[0].get('ESTATUS') === 'AU' || recordsM[0].get('ESTATUS')  === 'PA' || recordsM[0].get('ESTATUS')  === 'CA'){
                    
             msgBoxErr('Error', 'No se puede realizar modificaciones a una orden autorizada, pagada o cancelada');

                return;
         }
         
         if(records[0].get('ESTATUS_LINEA') === '2'){
             
              msgBoxErr('Error', 'No se puede realizar modificaciones a una linea cerrada');

                return;
             
         }
        //     msgOut(records.length);
        var i = 0;
        for (i = 0; i < records.length; i++) {

            var selection = records[i];
           
            if (selection) {

                if (selection.phantom) {
                    storeDetOrden.remove(selection);
                    //return;
                    continue;
                }

                storeDetOrden.remove(selection);

                gridDet.setLoading("Borrando Linea de Orden de Compra...");
                storeDetOrden.sync({
                    scope: this,
                    success: function(resp, dos) {
                      

                    },
                    failure: function(resp, dos) {
                        msgBoxErr('Error', 'Error al borrar linea de Orden:' + storeDetOrden.getProxy( ).getReader().rawData.msg);
                        //this.loadSueldo();
                        grid.setLoading(false);
                    },
                    callback: function(records, operation) {
                   
                        grid.setLoading(false);
                        me.loadDetOrden();
                        //storeDetOrden.loadData([], false);
                    }

                });

            }

        }
        
        
    },
        cancelaOrden: function(btn) {

        var me = this,
                grid = me.getGridOrdenCompra(),
                gridDet = me.getGridDetOrdenCompra(),
                records = grid.getSelectionModel().getSelection(),
                storeDet = grid.getStore(),
                storeDetOrden = gridDet.getStore();

        if (Ext.isEmpty(records)){
            
            msgBoxErr('Error', 'Error debe seleccionar la orden de compra');
            
            return;
        }
        //     msgOut(records.length);
        var i = 0;
        var msg = 0;
        for (i = 0; i < records.length; i++) {

            var selection = records[i];
            
             if(selection.data.ESTATUS === 'AU' || selection.data.ESTATUS === 'PA' || selection.data.ESTATUS === 'CA'){
                
              msg = 1;
              break;
                
            }
           
            if (selection) {

                if (selection.phantom) {
                    storeDet.remove(selection);
                    //return;
                    continue;
                }

                var fecha;
                fecha = Ext.Date.format(selection.data.FECHA_ORDEN, 'd/m/Y');
                selection.data.FECHA_ORDEN = fecha;
                
                fecha = Ext.Date.format(selection.data.FECHA_REQUERIDA, 'd/m/Y');
                selection.data.FECHA_REQUERIDA = fecha;
                
                storeDet.remove(selection);

                grid.setLoading("Borrando Orden de Compra...");
                storeDet.sync({
                    scope: this,
                    success: function(resp, dos) {
                      

                    },
                    failure: function(resp, dos) {
                        msgBoxErr('Error', 'Error al borrar Orden:' + storeDet.getProxy( ).getReader().rawData.msg);
                        //this.loadSueldo();
                        grid.setLoading(false);
                    },
                    callback: function(records, operation) {
                   
                        grid.setLoading(false);
                        me.findOrdenCompra();
                        storeDetOrden.loadData([], false);
                    }

                });

            }

        }
        
        
        if(msg === 1){
                
                msgBoxErr('Error', 'La orden no puede eliminarse ya que se encuentra autorizada, pagada o cancelada.');
                return;
                
            }
        

    },
    
    saveOrden: function(btn,celleditor) {

        var me = this,
                grid = me.getGridOrdenCompra(),
                gridDet = me.getGridDetOrdenCompra(),
              //  gridMaestro = me.getGridMaestro(),
               storeDetOrden = gridDet.getStore(),
                store = grid.getStore();
        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

        celleditor.completeEdit();


        if (!Ext.isEmpty(news) || !Ext.isEmpty(modified)) {
           
                grid.setLoading("Guardando Orden...");
                
         
              var fechaCam;
            var i = 0;
            var msgAct = 0;
            if (!Ext.isEmpty(modified)) {
                
                
                if(modified[i].data.ESTATUS === 'AU' || modified[i].data.ESTATUS === 'PA' || modified[i].data.ESTATUS === 'CA'){
                    
                    
                    msgAct= 1;
                }
                
               

                for (i = 0; i < modified.length; i++) {
               
                    fechaCam = Ext.Date.format(modified[i].data.FECHA_ORDEN, 'd/m/Y');
                    modified[i].data.FECHA_ORDEN = fechaCam;
                    
                    fechaCam = Ext.Date.format(modified[i].data.FECHA_REQUERIDA, 'd/m/Y');
                    modified[i].data.FECHA_REQUERIDA = fechaCam;

                }
            }
            if (!Ext.isEmpty(news)) {

                for (i = 0; i < news.length; i++) {
                 
                    fechaCam = Ext.Date.format(news[i].data.FECHA_ORDEN, 'd/m/Y');
                    news[i].data.FECHA_ORDEN = fechaCam;
                    
                    fechaCam = Ext.Date.format(news[i].data.FECHA_REQUERIDA, 'd/m/Y');
                    news[i].data.FECHA_REQUERIDA = fechaCam;

                }
            }
            
            
            if(msgAct === 1){
                
                msgBoxErr('Error', 'La orden no puede actualizarse ya que se encuentra autorizada, pagada o cancelada.');
                grid.setLoading(false);
                me.findOrdenCompra();
                storeDetOrden.loadData([], false);
                return;
                
            }
        
           
         

            store.sync({
                scope: this,
                success: function(resp, dos) {
                   
                        grid.setLoading(false);
                        
                         msgBox('Guardado', 'Orden Guardada.');
                    
                },
                failure: function(resp, dos) {
                    msgBoxErr('Error', 'Error al guardar Orden:' + store.getProxy( ).getReader().rawData.msg);
                        grid.setLoading(false);
                },
                callback: function(records, operation, val3) {

                 
                        grid.setLoading(false);
                        me.findOrdenCompra();
                        storeDetOrden.loadData([], false);


                }

            });
        }

    },
    
      addOrden: function(btn, cellEditing2) {

       console.log('add orden')

         var me = this,
                grid = me.getGridOrdenCompra(),
                gridDet = me.getGridDetOrdenCompra(),
                storeDet = gridDet.getStore(),
                //records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        //var record = records[0];
        //this.buttonDetDisable();
        var news = grid.getStore().getNewRecords();
        var modified = grid.getStore().getUpdatedRecords();

    //    if (!Ext.isEmpty(news) || !Ext.isEmpty(modified)) {
     //       msgBoxErr('Error', 'Se necesita guardar los cambios antes de agregar poliza');
     //       return;
      //  }

        storeDet.loadData([], false);

        var ModeloMaestro = Ext.create('AppOrdenCompra.model.ModeloOrdenCompra');

     //   var oldNameTipo = ModeloMaestro.get('TIPO_POLIZA'),
     //           newNameTipo = oldNameTipo + 'D';
     //   ModeloMaestro.set('TIPO_POLIZA', newNameTipo);

        var oldNameFechaM = ModeloMaestro.get('FECHA_REQUERIDA'),
                newNameFechaM = oldNameFechaM + Ext.Date.dateFormat(new Date(), 'd/m/Y');
        ModeloMaestro.set('FECHA_REQUERIDA', newNameFechaM);
        
        var oldNameFechaM = ModeloMaestro.get('FECHA_ORDEN'),
                newNameFechaM = oldNameFechaM + Ext.Date.dateFormat(new Date(), 'd/m/Y');
        ModeloMaestro.set('FECHA_ORDEN', newNameFechaM);


        ModeloMaestro.set('ESTATUS', '0');
     //   ModeloMaestro.set('DIVISA', 'PES');
     //   ModeloMaestro.set('PARIDAD', '1');


        cellEditing2.cancelEdit();
        store.insert(0, ModeloMaestro);
        cellEditing2.startEdit(ModeloMaestro, 0);

    },
    
    findPedidos:function(){
        
           var me = this,
                 

                grid = me.getGridPedidos(),
               
                store = grid.getStore();
        
     
                
        grid.setLoading('Buscando...');
        
//          
//                    store.proxy.extraParams.query = '';
//                    store.proxy.extraParams.idProveedor = record.get('ID_PROVEEDOR');
//                    store.proxy.extraParams.idOrden = record.get('ID');
//                    store.proxy.extraParams.idOrdenDet = record2.get('LINEA');
                    
      
                              //  grid.setLoading('Buscando...');
                                store.loadData([], false);
                                store.currentPage = 1;
                                store.load({
                                    callback: function() {
                                        grid.setLoading(false);
                                    }
                                }); 
        
                                 
        
    
    
        
        
    },
    
    findRelFactCXP:function(){
        
         var me = this,
                 
                gridMaestro = me.getGridOrdenCompra(),
                gridDet = me.getGridDetOrdenCompra(),
                records = gridMaestro.getSelectionModel().getSelection(),
                recordsDet = gridDet.getSelectionModel().getSelection(),
                

                grid = me.getGridEnvioCXP(),
               
                store = grid.getStore();
        
        var record = records[0];
        var record2 = recordsDet[0];
        
                
        grid.setLoading('Buscando...');
        
          
                    store.proxy.extraParams.query = '';
                    store.proxy.extraParams.idProveedor = record.get('ID_PROVEEDOR');
                    store.proxy.extraParams.idOrden = record.get('ID');
                    store.proxy.extraParams.idOrdenDet = record2.get('LINEA');
                    
      
                              //  grid.setLoading('Buscando...');
                                store.loadData([], false);
                                store.currentPage = 1;
                                store.load({
                                    callback: function() {
                                        grid.setLoading(false);
                                    }
                                }); 
        
        
    
    
        
        
    },
    
    findRelFact:function(){
        
          var me = this,
                 
                gridMaestro = me.getGridOrdenCompra(),
                gridDet = me.getGridDetOrdenCompra(),
                records = gridMaestro.getSelectionModel().getSelection(),
                recordsDet = gridDet.getSelectionModel().getSelection(),
                

                grid = me.getGridFacturasXDetOrden(),
               
                store = grid.getStore();
        
        var record = records[0];
        var record2 = recordsDet[0];
        
                
        grid.setLoading('Buscando...');
        
          
                    store.proxy.extraParams.query = '';
                    store.proxy.extraParams.idProveedor = record.get('ID_PROVEEDOR');
                    store.proxy.extraParams.idOrden = record.get('ID');
                    store.proxy.extraParams.idOrdenDet = record2.get('LINEA');
                    
      
                              //  grid.setLoading('Buscando...');
                                store.loadData([], false);
                                store.currentPage = 1;
                                store.load({
                                    callback: function() {
                                        grid.setLoading(false);
                                    }
                                }); 
        
        
    
    
        
    },
    
    findOrdenCompra:function(){
        
         
           var me = this,

                grid = me.getGridOrdenCompra(),
               
                store = grid.getStore();
        
                
        grid.setLoading('Buscando...');
        
          
                    store.proxy.extraParams.query = '';
                    
      
                              //  grid.setLoading('Buscando...');
                                store.loadData([], false);
                                store.currentPage = 1;
                                store.load({
                                    callback: function() {
                                        grid.setLoading(false);
                                    }
                                }); 
        
        
    
    
        
        
        
        
    },
    
        abrirDetOrden:function(){
        
         var me = this,
              
                gridMaestro = me.getGridDetOrdenCompra(),
            
                
                gridDet = me.getGridDetOrdenCompra(),
                storeDet = gridDet.getStore(),
                records = gridDet.getSelectionModel().getSelection(),
                store = gridMaestro.getStore();
        var record = records[0];
      
        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

       

         if(Ext.isEmpty(record)){
            
            msgBoxErr('Error','Debe seleccionar una orden de compra');
            return;
            
        }

    //    if(record.get('ESTATUS')  === 'PA' || record.get('ESTATUS')  === 'CA'){
                    
     //        msgBoxErr('Error', 'No se puede realizar modificaciones a una orden pagada o cancelada');

     //           return;
     //    }
        
        
        
    
              var data = [];
           
             
              record.data.ESTATUS_LINEA = '1';

        data.push(record.data);
        
       
        
     
        
        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
     
        var url;
  
            
            url = 'detOrden/updateEstatus';

        

         gridDet.setLoading('Guardando...');
         Ext.Ajax.request({
            url: url,
             params: {
                 data : jsonData
        
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
                    
                    gridDet.setLoading(false);
                  //  win.close();
                    msgBox('Guardado',val.msg);
                    me.loadDetOrden();
                   // storeDet.loadData([], false);

                }else{
                    
                    gridDet.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
             

                }
                
             }
            //timeout: 30000

        });
    
        
        
    },
    
    cerrarDetOrden:function(){
        
         var me = this,
              
                gridMaestro = me.getGridDetOrdenCompra(),
            
                
                gridDet = me.getGridDetOrdenCompra(),
                storeDet = gridDet.getStore(),
                records = gridDet.getSelectionModel().getSelection(),
                store = gridMaestro.getStore();
        var record = records[0];
      
        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

       

         if(Ext.isEmpty(record)){
            
            msgBoxErr('Error','Debe seleccionar una orden de compra');
            return;
            
        }

    //    if(record.get('ESTATUS')  === 'PA' || record.get('ESTATUS')  === 'CA'){
                    
     //        msgBoxErr('Error', 'No se puede realizar modificaciones a una orden pagada o cancelada');

     //           return;
     //    }
        
        
        
    
              var data = [];
           
             
              record.data.ESTATUS_LINEA = '2';

        data.push(record.data);
        
       
        
     
        
        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
     
        var url;
  
            
            url = 'detOrden/updateEstatus';

        

         gridDet.setLoading('Guardando...');
         Ext.Ajax.request({
            url: url,
             params: {
                 data : jsonData
        
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
                    
                    gridDet.setLoading(false);
                  //  win.close();
                    msgBox('Guardado',val.msg);
                    me.loadDetOrden();
                   // storeDet.loadData([], false);

                }else{
                    
                    gridDet.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
             

                }
                
             }
            //timeout: 30000

        });
    
        
        
    },
    
    saveDetOrden: function(btn) {

        var me = this,
                grid = me.getGridDetOrdenCompra(),
                gridMaestro = me.getGridOrdenCompra(),
                records = gridMaestro.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];
        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

       
        if(record.get('ESTATUS') === 'AU' || record.get('ESTATUS')  === 'PA' || record.get('ESTATUS')  === 'CA'){
                    
             msgBoxErr('Error', 'No se puede realizar modificaciones a una orden autorizada, pagada o cancelada');

                return;
         }
                

        if (!Ext.isEmpty(news) || !Ext.isEmpty(modified)) {
            if (Ext.isEmpty(btn))
                grid.setLoading("Guardando Linea...");
            
            var i=0;
            var msgAct = 0;
            
             if (!Ext.isEmpty(modified)) {
                 
                  for (i = 0; i < modified.length; i++) {
               
                     if(modified[i].data.ID_ESTATUS !== 1 || modified[i].data.ESTATUS_LINEA === '2'){
                    
                    
                            msgAct= 1;
                      }

                }
                
               

            }
          
            if(msgAct ===1){
                
                 msgBoxErr('Error', 'La linea solo puede actualizarse cuando tiene un estatus pendiente y se encuentra abierta');
                 grid.setLoading(false);
                  me.loadDetOrden();
                 return;
            }


            store.sync({
                scope: this,
                success: function(resp, dos) {
                        grid.setLoading(false);
                        msgBox('Guardado', 'Linea Guardada Correctamente.');
                    
                },
                failure: function(resp, dos) {
                    msgBoxErr('Error', 'Error al guardar Linea:' + store.getProxy( ).getReader().rawData.msg);
                        grid.setLoading(false);
                },
                callback: function(records, operation, val3) {

                        grid.setLoading(false);
                        me.loadDetOrden();


                }

            });
        }

    },
    
    enviaFacturasCXP:function(){
        
             
         var me = this,
         gridA = me.getGridDetOrdenCompra(),
         storeA = gridA.getStore(),
 
         recordsA = gridA.getSelectionModel().getSelection();
            
          var recordA = recordsA[0];
            
            if (Ext.isEmpty(recordA)){
                
                msgBoxErr('Error','No ha seleccionado ningun registro');
                return;
                
            }
            
            if(recordsA.length > 1){
            
                msgBoxErr('Error', 'Solo puede seleccionar una factura a la vez para este proceso');

                return;



            }
            
//            if (recordA.data.ESTATUS_CXP === 'REMB'){
//                
//                msgBoxErr('Error', 'Esta factura ya esta ligada a un reembolso');
//
//                return;
//                
//                
//            }
//            
//            if (recordA.data.ESTATUS_CXP === 'ANT'){
//                
//                msgBoxErr('Error', 'Esta factura ya esta ligada a un anticipo');
//
//                return;
//                
//                
//            }
//            
//            if (recordA.data.ESTATUS_CXP === 'FG' || recordA.data.ESTATUS_CXP === 'IMP' || recordA.data.ESTATUS_CXP === 'PAG' || recordA.data.ESTATUS_CXP === 'TES'){
//                
//                msgBoxErr('Error', 'Esta factura no puede ser relacionada por que se encuentra en proceso dentro de tesoreria');
//
//                return;
//                
//                
//            }
            
               


                
                 var window=  Ext.create('Ext.window.Window', {
                       title: 'Envia Facturas CXP',
                        height: 500,
                        width: 900,
                         modal: true,
                         maximizable:true,
                       // layout: 'form',
                       layout: {
                            type: 'vbox',
                            align : 'stretch',
                            pack  : 'start'
                        },
                        items: [
                            {
                            xtype:'gridenviocxp'
                        }
                        ],
                           listeners:{
                            beforeclose:function(win) {
                                
                             
                             me.loadDetOrden();
                            // me.findCxpOtros();
                            
                            }
                        }


                    }).show();
                
                
  
        
        
    },
    
         verPedidos: function(origen){
        
         var me = this;
        
            
               
                
            var window=  Ext.create('Ext.window.Window', {
                      //  title: 'Folios',
                        height: 500,
                        width: 900,
                         modal: true,
                         maximizable:true,
                         layout: {
                                        type: 'border',
                                        padding: 5
                                    },
                 
                        items: [
                              {
                                    xtype:'tabpanel',
                                       region: 'center',
                                          layout: {
                                              type: 'vbox',
                                              align : 'stretch',
                                              pack  : 'start'
                                          },
                                    
                                 items: [    
                                    {
                                          xtype:'panel',
                                          title: 'Pedidos',
                                          region: 'center',
                                          layout: {
                                              type: 'vbox',
                                              align : 'stretch',
                                              pack  : 'start'
                                          },

                                      items:[
                                           

                                            {

                                                xtype:'gridpedidos'

                                            }
                                        ]
                                   },
                                   {
                                          xtype:'panel',
                                          title: 'Archivos',
                                          region: 'center',
                                          layout: {
                                              type: 'vbox',
                                              align : 'stretch',
                                              pack  : 'start'
                                          },

                                      items:[
                                                {
                                                xtype:'gridarchivospedidos'


                                            }
                                        ]
                                   }
                                 ]
                             }
                        ],
                       
                       
                        
                           listeners:{
                            beforeclose:function(win) {
                                
                                var gridA = me.getGridArchivosPedidos();
                
                       var storeA = gridA.getStore();
                        storeA.loadData([], false);
                                
                           //     winForm.close();
//                             var grid = me.getGridFoliosGe();
//                             var store = grid.getStore();
//                              store.loadData([], false);
//                             
//                             me.findArchivos();
//                             me.findCxpOtros();
//                             me.findViaticos();
//                             me.findArchivosInt();
//                             //  me.findArchivos();

                            }
                        }


                    }).show();
                
          
                
                
  
        
    },
    
        relacionaFacturas: function(origen){
        
         var me = this,
         gridA = me.getGridDetOrdenCompra(),
         storeA = gridA.getStore(),
 
         recordsA = gridA.getSelectionModel().getSelection();
            
          var recordA = recordsA[0];
            
            if (Ext.isEmpty(recordA)){
                
                msgBoxErr('Error','No ha seleccionado ningun registro');
                return;
                
            }
            
            if(recordsA.length > 1){
            
                msgBoxErr('Error', 'Solo puede seleccionar una factura a la vez para este proceso');

                return;



            }
            
//            if (recordA.data.ESTATUS_CXP === 'REMB'){
//                
//                msgBoxErr('Error', 'Esta factura ya esta ligada a un reembolso');
//
//                return;
//                
//                
//            }
//            
//            if (recordA.data.ESTATUS_CXP === 'ANT'){
//                
//                msgBoxErr('Error', 'Esta factura ya esta ligada a un anticipo');
//
//                return;
//                
//                
//            }
//            
//            if (recordA.data.ESTATUS_CXP === 'FG' || recordA.data.ESTATUS_CXP === 'IMP' || recordA.data.ESTATUS_CXP === 'PAG' || recordA.data.ESTATUS_CXP === 'TES'){
//                
//                msgBoxErr('Error', 'Esta factura no puede ser relacionada por que se encuentra en proceso dentro de tesoreria');
//
//                return;
//                
//                
//            }
            
               


                
                 var window=  Ext.create('Ext.window.Window', {
                       title: 'Relacion de Facturas',
                        height: 500,
                        width: 900,
                         modal: true,
                         maximizable:true,
                       // layout: 'form',
                       layout: {
                            type: 'vbox',
                            align : 'stretch',
                            pack  : 'start'
                        },
                        items: [
                            {
                            xtype:'gridfacturasxdetorden'
                        }
                        ],
                           listeners:{
                            beforeclose:function(win) {
                                
                             
                             me.loadDetOrden();
                            // me.findCxpOtros();
                            
                            }
                        }


                    }).show();
                
                
  
        
    },
    
    addDetOrden:function(btn, cellEditing){
         

        var me = this,
                gridDet = me.getGridDetOrdenCompra(),
                gridMaster = me.getGridOrdenCompra(),
                records2 = gridMaster.getSelectionModel().getSelection(),
                records = gridDet.getSelectionModel().getSelection(),
                storeDet = gridDet.getStore();
        var record2 = records2[0];
        var record = records[0];
        
        
        if(Ext.isEmpty(record2)){
            
            msgBoxErr('Error','Debe seleccionar una orden');
            return;
            
        }
      


        var model = new AppOrdenCompra.model.ModeloDetOrdenCompra({
            ID:'',
            LINEA:'',
            ID_ORDEN_COMPRA:record2.get('ID'),
            COMPANIA:'',
            ID_PRODUCTO:'',
            DESCRIPCION:'',
            CANTIDAD_PEDIDA:'',
            CANTIDAD_LLEGO:'',
            PRECIO_UNITARIO:'',
            IVA:'',
            TOTAL:'',
            IMPORTE_COTIZACION:'',
            ID_ALMACEN:record2.get('ID_ALMACEN'),
            ID_ESTATUS:'',
            ID_PRIORIDAD:''
        });

  

            cellEditing.cancelEdit();
          
                storeDet.insert(0, model);
                cellEditing.startEditByPosition({
                    row: 0,
                    column: 4
                });
         
        


    
        
        
    },
    
    canAutorizaOrden:function(){
        
         var me = this,
              
                gridMaestro = me.getGridOrdenCompra(),
            
                records = gridMaestro.getSelectionModel().getSelection(),
                gridDet = me.getGridDetOrdenCompra(),
                storeDet = gridDet.getStore(),
                store = gridMaestro.getStore();
        var record = records[0];
      
        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

       

         if(Ext.isEmpty(record)){
            
            msgBoxErr('Error','Debe seleccionar una orden de compra');
            return;
            
        }

        if(record.get('ESTATUS')  === 'PA' || record.get('ESTATUS')  === 'CA'){
                    
             msgBoxErr('Error', 'No se puede realizar modificaciones a una orden pagada o cancelada');

                return;
         }
        
        
        
    
              var data = [];
           
             
              record.data.ESTATUS = 'PE';

        data.push(record.data);
        
       
        
     
        
        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
     
        var url;
  
            
            url = 'orden/actualizaEstatus';

        

         gridMaestro.setLoading('Guardando...');
         Ext.Ajax.request({
            url: url,
             params: {
                 data : jsonData
        
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
                    
                    gridMaestro.setLoading(false);
                  //  win.close();
                    msgBox('Guardado',val.msg);
                    me.findOrdenCompra();
                    storeDet.loadData([], false);

                }else{
                    
                    gridMaestro.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
             

                }
                
             }
            //timeout: 30000

        });
    
        
        
        
    },
    
    
        autorizaOrden:function(){
        
        
                var me = this,
              
                gridMaestro = me.getGridOrdenCompra(),
            
                records = gridMaestro.getSelectionModel().getSelection(),
                gridDet = me.getGridDetOrdenCompra(),
                storeDet = gridDet.getStore(),
                store = gridMaestro.getStore();
        var record = records[0];
      
        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

       

         if(Ext.isEmpty(record)){
            
            msgBoxErr('Error','Debe seleccionar una orden de compra');
            return;
            
        }

        if(record.get('ESTATUS') === 'AU' || record.get('ESTATUS')  === 'PA' || record.get('ESTATUS')  === 'CA'){
                    
             msgBoxErr('Error', 'No se puede realizar modificaciones a una orden autorizada, pagada o cancelada');

                return;
         }
        
        
        
    
              var data = [];
           
             
              record.data.ESTATUS = 'AU';

        data.push(record.data);
        
       
        
     
        
        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
     
        var url;
  
            
            url = 'orden/actualizaEstatus';

        

         gridMaestro.setLoading('Guardando...');
         Ext.Ajax.request({
            url: url,
             params: {
                 data : jsonData
        
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
                    
                    gridMaestro.setLoading(false);
                  //  win.close();
                    msgBox('Guardado',val.msg);
                    me.findOrdenCompra();
                    storeDet.loadData([], false);

                }else{
                    
                    gridMaestro.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
             

                }
                
             }
            //timeout: 30000

        });
    
    },
    
        estatusCanOrden:function(){
        
        
                var me = this,
              
                gridMaestro = me.getGridOrdenCompra(),
            
                records = gridMaestro.getSelectionModel().getSelection(),
                gridDet = me.getGridDetOrdenCompra(),
                storeDet = gridDet.getStore(),
                store = gridMaestro.getStore();
        var record = records[0];
      
        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

       

         if(Ext.isEmpty(record)){
            
            msgBoxErr('Error','Debe seleccionar una orden de compra');
            return;
            
        }

        if(record.get('ESTATUS')  === 'PA'){
                    
             msgBoxErr('Error', 'No se puede realizar modificaciones a una orden pagada');

                return;
         }
        
        
        
    
              var data = [];
           
             
              record.data.ESTATUS = 'CA';

        data.push(record.data);
        
       
        
     
        
        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
     
        var url;
  
            
            url = 'orden/actualizaEstatus';

        

         gridMaestro.setLoading('Guardando...');
         Ext.Ajax.request({
            url: url,
             params: {
                 data : jsonData
        
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
                    
                    gridMaestro.setLoading(false);
                  //  win.close();
                    msgBox('Guardado',val.msg);
                    me.findOrdenCompra();
                    storeDet.loadData([], false);

                }else{
                    
                    gridMaestro.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
             

                }
                
             }
            //timeout: 30000

        });
    
    },
    
    
    saveRel:function(){
        
        
                var me = this,
                gridRel = me.getGridFacturasXDetOrden(),
                gridMaestro = me.getGridOrdenCompra(),
                gridDet = me.getGridDetOrdenCompra(),
                records = gridMaestro.getSelectionModel().getSelection(),
                recordsDet = gridDet.getSelectionModel().getSelection(),
                recordsRel = gridRel.getSelectionModel().getSelection(),
                store = gridRel.getStore();
        var record = records[0];
        var recordDet = recordsDet[0];
        var recordRel = recordsRel[0];
        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

       

         if(Ext.isEmpty(recordRel)){
            
            msgBoxErr('Error','Debe seleccionar una factura');
            return;
            
        }

        if(!Ext.isEmpty(recordRel.get('ID_ORDEN_DET'))){
            
            msgBoxErr('Error','La Factura ya se encuentra relacionada');
            return;
            
            
        }
        
        
    
              var data = [];
           
             
              recordRel.data.ID_ORDEN = record.get('ID');
              recordRel.data.ID_ORDEN_DET = recordDet.get('LINEA');

        data.push(recordRel.data);
        
       
        
     
        
        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
     
        var url;
  
            
            url = 'detOrden/saveRel';

        

         gridRel.setLoading('Guardando...');
         Ext.Ajax.request({
            url: url,
             params: {
                 data : jsonData
        
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
                    
                    gridRel.setLoading(false);
                  //  win.close();
                    msgBox('Guardado',val.msg);
                    me.findRelFact();

                }else{
                    
                    gridRel.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
             

                }
                
             }
            //timeout: 30000

        });
    
    },
    
    delRel:function(){
        
            
                var me = this,
                gridRel = me.getGridFacturasXDetOrden(),
                gridMaestro = me.getGridOrdenCompra(),
                gridDet = me.getGridDetOrdenCompra(),
                records = gridMaestro.getSelectionModel().getSelection(),
                recordsDet = gridDet.getSelectionModel().getSelection(),
                recordsRel = gridRel.getSelectionModel().getSelection(),
                store = gridRel.getStore();
        var record = records[0];
        var recordDet = recordsDet[0];
        var recordRel = recordsRel[0];
        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

       

         if(Ext.isEmpty(recordRel)){
            
            msgBoxErr('Error','Debe seleccionar una factura');
            return;
            
        }

        
        
        
    
              var data = [];
           
             
              recordRel.data.ID_ORDEN = record.get('ID');
              recordRel.data.ID_ORDEN_DET = recordDet.get('LINEA');

        data.push(recordRel.data);
        
       
        
     
        
        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
     
        var url;
  
            
            url = 'detOrden/delRel';

        

         gridRel.setLoading('Guardando...');
         Ext.Ajax.request({
            url: url,
             params: {
                 data : jsonData
        
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
                    
                    gridRel.setLoading(false);
                  //  win.close();
                    msgBox('Guardado',val.msg);
                    me.findRelFact();

                }else{
                    
                    gridRel.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
             

                }
                
             }
            //timeout: 30000

        });
        
        
    }
    
    

});
