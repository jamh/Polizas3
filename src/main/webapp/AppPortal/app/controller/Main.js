Ext.define('AppPortal.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: [
        'StoreErpFecomprobantes'

    ],
    models: [
        'ModelErpFecomprobantes'

    ],
    refs: [
        {
            ref: 'gridErpFecomprobantes',
            selector: 'griderpfecomprobantes'

        },
        {
            ref: 'formErpFecomprobantes',
            selector: 'formerpfecomprobantes'

        },
        {
            ref: 'formArchivos',
            selector: 'formarchivos'
        },
        {
            ref:'formDatosBancarios',
            selector:'formdatosbancarios'
            
        }

    ],
    views: [
        'GridErpFecomprobantes',
        'ContainerCentro',
        'WindowErpFecomprobantes',
        'FormErpFecomprobantes',
        'FormArchivos',
        'FormDatosBancarios',
        'WindowDatosBancarios'


    ],
    accion: '',
    init: function () {
        var me = this;
        this.control({
            griderpfecomprobantes: {
                
                
                addDatBanc:function(){
                    
                    me.findDatosBan();
                    
                },
                
                exitApp:function(){
                    
                    me.exitApp();
                    
                },
                
                select: function (view, model, index) {
                    me.cargaDatos(view, model, index);
                },
                itemdblclick: function () {
                    //  this.editErpFecomprobantes();
                },
                verExcel: function () {
                    this.verExcel();
                },
                verPDF: function () {
                    this.verPDF();
                },
                limpiaFiltros: function () {
                    this.limpiaFiltros();
                },
                addErpFecomprobantes: function () {
                    me.addErpFecomprobantes();
                },
                deleteErpFecomprobantes: function () {
                    me.deleteErpFecomprobantes();
                },
                afterrender: function (e, eOpts){
                    me.findErpFecomprobantes();
                    me.findCompania();
                },
                findErpFecomprobantes: function (erpfecomprobantes) {
                    me.findErpFecomprobantes(erpfecomprobantes);
                }

            },
            formerpfecomprobantes: {
                saveErpFecomprobantes: function (btn) {
                    me.saveErpFecomprobantes(btn);
                }

            },
            formarchivos:{
                saveArchivoFE:function(btn){
                    me.validaCarga();
                    //me.saveArchivo(btn);
                }
            },
            
            formdatosbancarios:{
                saveDatBan:function(btn){
                    me.saveDatBan(btn);
                    //me.saveArchivo(btn);
                }
            }


        });
    },
    
    
    
    
    findDatosBan: function() {
        var me = this;
        
   
        var view = Ext.widget('windowdatosbancarios');
        view.setTitle('Editar Datos Bancarios');
        var form = view.down('formdatosbancarios').getForm();
        
        view.down('formdatosbancarios').setLoading('Buscando...');

        Ext.getBody().on("contextmenu", Ext.emptyFn, null, {preventDefault: true});
        Ext.Ajax.request({
            url: 'process/data/BuscaDatosBancarios',
            method: 'GET',
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var banco = val.data[0].BANCO;
                    var numeroCuenta = val.data[0].NUMERO_CUENTA;
                    var cuentaClabe = val.data[0].CUENTA_CLAVE;
                    
                    form.findField('txtCTAclabe').setValue(cuentaClabe);
                    form.findField('txtCTAnum').setValue(numeroCuenta);
                    
                     var storeBanco = form.findField('cboBANCO').getStore();
                    storeBanco.proxy.extraParams.query = '';
                    storeBanco.load({
                             callback:function(val1){
                            
                                     form.findField('cboBANCO').setValue(banco);
                                     
                                     view.down('formdatosbancarios').setLoading(false);
                                     
                             }
                         });
                    
                   


                } else if (!val.success) {
                    msgBoxErr('Compania', 'Error compañia no encontrada');
                }
            },
            timeout: 30000

        });
    },
    
   
    
    exitApp:function(){
        
        Ext.Ajax.request({
            url: '/Polizas3/por/logout',
            method: 'POST',
            scope: this,
//            params:{
//                
//                parametro:'FC'
//                
//                
//            },
            callback: function(records, operation, success) {
                
                
                var redirect = '/Portal/Proveedor';
		window.location = redirect;	
                
//                if (Ext.isEmpty(success.responseText))
//                    return;
//                var val = Ext.decode(success.responseText);
//                if (Ext.isEmpty(val))
//                    return;
//                if (val.success) {
//                    var msgValida = val.data[0].MSG_VALIDA;
//                    
//                  if(msgValida === '1'){
//                      
//                     // msgBox('Carga', 'Valido.');
//                      me.saveArchivo(btn);
//                  }else{
//                      
//                    if(msgValida === '2'){  
//                         
//                         me.saveArchivo(btn);
//                      
//                        }else{
//                            msgBoxErr('Carga', 'No se puede completar la carga de las facturas. Día no valido.');
//                        }
//                   }
//                    
//                  
//
//                } else if (!val.success) {
//                    msgBoxErr('Error', 'Error permisos de carga no encontrados');
//                }
            },
            timeout: 30000

        });
        
        
    },
    
        validaCarga: function(btn) {
        var me = this;

        Ext.Ajax.request({
            url: 'process/data/PortalValidaCarga',
            method: 'GET',
            scope: this,
            params:{
                
                parametro:'FC'
                
                
            },
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var msgValida = val.data[0].MSG_VALIDA;
                    
                  if(msgValida === '1'){
                      
                     // msgBox('Carga', 'Valido.');
                      me.saveArchivo(btn);
                  }else{
                      
                    if(msgValida === '2'){  
                         
                         me.saveArchivo(btn);
                      
                        }else{
                            msgBoxErr('Carga', 'No se puede completar la carga de las facturas. Día no valido.');
                        }
                   }
                    
                  

                } else if (!val.success) {
                    msgBoxErr('Error', 'Error permisos de carga no encontrados');
                }
            },
            timeout: 30000

        });
    },
    
    
    saveDatBan:function(btn){
        
        
         var me = this,
                form = btn.up('formdatosbancarios'),
                win = form.up('window'),
                basicForm = form.getForm();

       // var compania = basicForm.findField('archCOMPANIA').getValue();

       // store.proxy.extraParams.compania = compania;

      //  basicForm.findField('idClienteProv').setDisabled(false);
        
       // console.log(basicForm.findField('addBanderaViatic').getValue());
        
        
        
        if (basicForm.isValid()) {
           // grid.setLoading("Guardando Proveedor...");
            form.setLoading("Guardando Datos Bancarios...");
            basicForm.submit({
//                params:{
//                    proceso:me.procesoProveedor,
//                    procesoDir:me.procesoDireccion,
//                    banderaViatic:basicForm.findField('addBanderaViatic').getValue()
//                    
//                },
                
                success: function(form1, action) {
                    win.close();
                    Ext.Msg.alert('Guardado', 'Los datos bancarios se guardaron Correctamente');
                    //store.loadData([], false);
//                    store.load({
//                        callback: function() {
             //       grid.setLoading(false);
                    form.setLoading(false);
               
                    win.close();
                    
                  //  me.buscaProveedor();
//                            // me.loadSumaDetalle(tipoPol,numeroPol,fechaPol);
//                        }
//                    });
                    //me.setSession(action.result.data[0].UC_COMPANIA, action.result.data[0].US_USUARIO);

                },
                failure: function(form1, action) {

                    form.setLoading(false);

                 
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
    
    
    saveArchivo: function(btn) {

        var me = this,
                form = me.getFormArchivos(),
                basicForm = form.getForm(),
                grid = me.getGridErpFecomprobantes();

        
            if (basicForm.isValid()) {
                form.setLoading("Guardando FE...");
                basicForm.submit({
                     url:'Uploadprov/save',
                    success: function(form2, action) {

                        Ext.Msg.alert('Guardado', 'El Archivo se guardo Correctamente:' + action.result.msg);

                        form.setLoading(false);
                        me.enviaCorreo(basicForm.findField('COMPANIA').getValue(),action.result.msg);
                        //me.enviaCorreo('TEMP')
                        me.findErpFecomprobantes();

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
    
    enviaCorreo: function(compania,numero){
        
         Ext.Ajax.request({
            url: '/CorreosAvisos/correoPortalFact.jsp',
         // url: '/CorreosAvisos/correoTesoreria.jsp',
             params: {
                 compania : compania,
                 folio:numero
                
        
            },
            method: 'GET',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
              
                
             }
            //timeout: 30000

        });
        
    },
    
    cargaDatos: function (view, model, index) {
        var me = this,
                grid = me.getGridErpFecomprobantes();
        var selection = grid.getSelectionModel().getSelection();

        var record = selection[0];

        if (Ext.isEmpty(record.data.IVA)) 
            record.data.IVA = 0;
        
        if (Ext.isEmpty(record.data.SERIE)) 
            record.data.SERIE = 'N/A';
        
        if (Ext.isEmpty(record.data.TIPO_CAMBIO)) 
            record.data.TIPO_CAMBIO = 'N/A';
        
        if (Ext.isEmpty(record.data.MONEDA)) 
            record.data.MONEDA = 'N/A';

        var bookTplMarkup = [
            '<div class="feDetails">',
            '<ul>',
            '<li><b>Compa&ntilde;ia:</b> {COMPANIA}</li>',
            '<li><b>Serie:</b> {SERIE}</li>',
            '<li><b>Numero:</b> {NUMERO}</li>',
            '<li><b>Fecha:</b> {FECHA}</li>',
            '<li><b>UUID:</b> {UUID}</li>',
            '<li><b>RFC emisor:</b> {RFC}</li>',
            '<li><b>Nombre Emisor:</b> {PROVEEDOR}</li>',
            '<li><b>Pdf:</b> {PDF}</li>',
            '<li><b> Xml:</b> {XML}</li>',
            '<li><b>Fecha Pago:</b>  {FECHA_PAGO_CXP_FE}</li>',
            '</ul>',
            '</div>',
            '<div class="feDetails2">',
            '<ul>',
            '<li><b>RFC receptor:</b>  {RFC_EMPRESA}</li>',
            '<li><b>Nombre receptor:</b>  {NOMBRE}</li>',
            '<li><b>Descripci&oacute;n:</b>  {DESCRIPCION}</li>',
            '<li><b>Subtotal:</b>  {SUBTOTAL}</li>',
            '<li><b>Total:</b>  {TOTAL}</li>',
            '<li><b>Iva:</b>  {IVA}</li>',
            '<li><b>Tipo de Cambio:</b>  {TIPO_CAMBIO}</li>',
            '<li><b>Moneda:</b>  {MONEDA}</li>',
            '<li><b>Descripcion de Cancelacion:</b>  {DESCRIPCION_CANCELACION}</li>',
            '<li><b>Descripcion de Pago:</b>  {DESCRIPCION_PAGOS}</li>',
            '</ul>',
            '</div>'





        ];
        
         var bookTplMarkup2 = [
            '<div class="feDetails">',
            '<ul>',
            '<li><b>Clave Banco:</b> {BANCO}</li>',
            '<li><b>Raz&oacute;n Social:</b> {RAZON_SOCIAL}</li>',
            '<li><b>Cuenta Clabe:</b> {CUENTA_CLABE}</li>',
            '<li><b>N&uacute;mero Cuenta:</b> {NUMERO_CUENTA}</li>',
            '</ul>',
            '</div>'
        ];
        var bookTpl = Ext.create('Ext.Template', bookTplMarkup);
        var detailPanel = Ext.getCmp('detailPanelCXC');
        detailPanel.update(bookTpl.apply(record.data));
        
        var bookTpl2 = Ext.create('Ext.Template', bookTplMarkup2);
        var detailPanel2 = Ext.getCmp('detailPanelBanc');
        detailPanel2.update(bookTpl2.apply(record.data));
        
        
        
    },
    limpiaFiltros: function () {
        var me = this,
                grid = me.getGridErpFecomprobantes();

        grid.filters.clearFilters();
    },
    verExcel: function () {

        var me = this,
                grid = me.getGridErpFecomprobantes(),
                store = grid.getStore(),
                records = grid.getSelectionModel().getSelection();

        var jsonData = Ext.encode(Ext.pluck(store.data.items, 'data'));

        //msgOut(jsonData);
        var keyToDelete = "id";


        delete jsonData.keyToDelete


        var form = Ext.create('Ext.form.Panel', {// this wolud be your form 
            standardSubmit: true, // this is the important part 
            method: 'POST',
            url: '/JWEBR/genF/files/csv'
        });

        form.submit({
            params: {
                data: jsonData
            }
        });

    },
    

    verPDF: function () {
        var me = this,
                grid = me.getGridErpFecomprobantes(),
                store = grid.getStore(),
                records = grid.getStore().getModel().getFields();


        var jsonData = Ext.encode(Ext.pluck(store.data.items, 'data'));

        jsonData = JSON.parse(jsonData);


        var columns = [
        ];

        Ext.each(grid.columns, function (col, index) {
            if (!col.hidden) {
                var obj = {
                    title: col.initialConfig.header,
                    dataKey: col.dataIndex
                }
                columns.push(obj);
            }
        });

        var rows = jsonData;


        // Only pt supported (not mm or in)
        var doc = new jsPDF('l', 'pt', 'a4');

        doc.autoTable(columns, rows, {
            tableWidth: 'wrap',
            styles: {cellPadding: 2},
            headerStyles: {rowHeight: 15, fontSize: 8},
            bodyStyles: {rowHeight: 12, fontSize: 8, valign: 'middle'}//,
            /*beforePageContent: function(data) {
             doc.text("ErpFecomprobantes", 10, 10);
             }*/
        });
        doc.save('table.pdf');
    },
    

    findErpFecomprobantes: function (usuario) {

        var me = this,
                grid = me.getGridErpFecomprobantes(),
                form =me.getFormArchivos().getForm(),
                storeGrid = grid.getStore();


        if (Ext.isEmpty(usuario)) {

            usuario = '';
        } else {

            if (usuario === 'N/A') {

                usuario = '';
            }

        }

        storeGrid.loadData([], false);

        storeGrid.load({
            callback: function (val1, val2, val3) {
                    
                    
            }
        });
    },
    
    findCompania: function() {
        var me = this;

        Ext.getBody().on("contextmenu", Ext.emptyFn, null, {preventDefault: true});
        Ext.Ajax.request({
            url: 'process/data/PortalDatosProveedor',
            method: 'GET',
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var nombre = val.data[0].NOMBRE;
                    
                  //  this.companiaSession = val.data[0].COMPANIA;

                    var me = this,
                            grid = me.getGridErpFecomprobantes(),
                             form =me.getFormArchivos().getForm();
                    //grid.setTitle(val.data[0].NOMBRE1);
                    grid.setTitle(val.data[0].RFC +'-'+val.data[0].PROVEEDOR);
                    form.findField('archCOMPANIA').setValue(val.data[0].NOMBRE);
                    form.findField('idCOMPANIA').setValue(val.data[0].COMPANIA);
                    form.findField('archCORFC').setValue(val.data[0].RFC_EMPRESA);
                    
                    me.permisosPortal();
                    

                } else if (!val.success) {
                    msgBoxErr('Compania', 'Error compañia no encontrada');
                }
            },
            timeout: 30000

        });
    },
    
         permisosPortal: function() {
        var me = this,
        grid = me.getGridErpFecomprobantes();

        Ext.Ajax.request({
            url: 'process/data/BuscaPermisosPortal',
            method: 'GET',
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var componente = val.data[0].COMPONENTE;
                    var hidden = val.data[0].HIDDEN;
                
                    
                     if (hidden==='1' ) { 
                         
                        
                                 grid.down('button[itemId='+componente+']').setVisible(true); 
                     }
                    
                     
                    // me.findCuentas();
                    
                    

                } else if (!val.success) {
                   
                }
            },
            timeout: 30000

        });
    }

});
