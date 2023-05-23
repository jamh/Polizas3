Ext.define('AppClientes.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: [
        'StoreClientes',
        'StoreClientesFalt'
    ],
    models: [
        'ModeloClientes',
        'ModeloClientesFalt'
    ],
    refs: [
        {
            ref: 'gridClientes',
            selector: 'gridclientes'
        },
        {
            ref: 'formClientes',
            selector: 'formclientes'
        },
        {
            ref: 'gridClientesFalt',
            selector: 'gridclientesfalt'
        },
        {
            ref: 'mainPanel',
            selector: 'mainpanel' 
            
        }
        
    ],
    views: [
        'GridClientes',
        'MainPanel',
        'FormClientes',
        'WindowClientes',
        'GridClientesFalt'
    ],
    
    procesoCliente:null,
    permisosP:'',
    
    init: function () {

        var me = this;
        me.control({
            gridclientesfalt: {
                
                cleanFiltersClienteFalt:function(){
                    
                    me.cleanFiltersClienteFalt();  
                },
                
                afterrender: function(e, eOpts ) {
                    
                    me.buscaClienteFalt();
                    
                   
                },
                
                buscaClienteFalt:function(cliente){
                    
                    me.buscaClienteFalt(cliente);
                },
                
                crearClienteFalt:function(){
                    
                     if (me.permisosP.indexOf("M")<0 ) { 
                            
                             msgBoxErr('Permisos', 'Error no tiene permisos para modificar');
                                 
                        }else{
                            
                              me.crearClienteFalt();
                            
                        }
                    
                   
                }
                
                
            },
            gridclientes: {
                
                afterrender: function(e, eOpts ) {
                    
                    me.permisosComponentes();
                    me.permisosClientes();     
                    me.buscaCliente();
                    
                   
                },
                buscaCliente: function(cliente){
                    
                    me.buscaCliente(cliente);
                },
                
                crearCliente: function(btn){
                    
                    
                    me.crearCliente(btn);
                },
                 itemdblclick: function() {
                     
                      if (me.permisosP.indexOf("M")<0 ) { 
                            
                             msgBoxErr('Permisos', 'Error no tiene permisos para modificar');
                                 
                        }else{
                            
                             this.editClientes();
                            
                        }
                    
                    
                   
                     
                    
                },
                cancelaCliente: function(btn){
                    
                    me.cancelaCliente(btn);
                    
                },
                cleanFiltersCliente: function(){
                    
                    me.cleanFiltersCliente();
                }
                
            },
            formclientes: {
                
                enviaAuxiliar: function(cuenta){
                    
                    me.enviaAuxiliar(cuenta);
                },
                saveCliente: function(btn){
                    me.saveCliente(btn);
                }
            }
        });
    },
      permisosComponentes: function() {
        var me = this,
        grid = me.getGridClientes(),
        tab = me.getMainPanel();
        Ext.Ajax.request({
            url: 'process/data/BuscaPermisosComponentes',
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
                    var readOnly = val.data[0].READ_ONLY;
                    var hidden = val.data[0].HIDDEN;
                    var allowblack = val.data[0].ALLOW_BLACK;
                    var tipo = val.data[0].TIPO;
                 
                 if (tipo === 'GRID'){
                    if (!Ext.isEmpty(hidden)){ 
                        if (hidden === '1'){
                          tab.child('#'+componente).tab.hide();
                        }
                    
                    }
                 
                   }
                 
                     
                    

                } else if (!val.success) {
                   
                }
            },
            timeout: 30000

        });
    },
       permisosClientes: function() {
        var me = this,
        grid = me.getGridClientes(),
        gridF = me.getGridClientesFalt();

        Ext.Ajax.request({
            url: 'process/data/BuscaPermisosClientes',
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
                    
                    msgOut('permisos'+ permisos);
                    
                    me.permisosP = permisos;
                    
                   
                    
                     if (permisos.indexOf("A")<0 ) {   
                                 grid.down('button[itemId=btnAgregarCliente]').setVisible(false);
                                 gridF.down('button[itemId=btnAgregarClienteFalt]').setVisible(false);
                                 
                     }
                     if (permisos.indexOf("B")<0 ) {   
                                 grid.down('button[itemId=btnBorrarCliente]').setVisible(false); 
                     }
                     
                     //me.findCuentas();
                    
                    

                } else if (!val.success) {
                    msgBoxErr('Permisos', 'Error el usuario no tiene permisos');
                    grid.down('button[itemId=btnAgregarCliente]').setVisible(false); 
                    grid.down('button[itemId=btnBorrarCliente]').setVisible(false); 
                }
            },
            timeout: 30000

        });
    },
    
    cleanFiltersCliente: function(){
        
        
        var me = this,
                grid = me.getGridClientes();
        grid.filters.clearFilters();

        
    },
    
    cleanFiltersClienteFalt:function(){
         var me = this,
         grid = me.getGridClientesFalt();
        grid.filters.clearFilters();
        
        
    },
     editClientes:function(){
        var me = this,
          grid = me.getGridClientes(),
          store = grid.getStore(),
                records = grid.getSelectionModel().getSelection();
  
            
        me.procesoCliente = 'U';
        
        var record = records[0];
        
        var compania = record.get('COMPANIA');
        var idCliente = record.get('ID_CLIENTE');
        var nombre = record.get('NOMBRE');
        var rfc = record.get('RFC');
        var fechaA = record.get('F_ALTA');
        var razonSocial = record.get('RAZON_SOCIAL');
        var tPersona = record.get('T_PERSONA');
        var tClieprov = record.get('T_CLIEPROV');
        var auxiliar = record.get('AUXILIAR');
        var ctoCto = record.get('CTO_CTO');
        var cuenta = record.get('CUENTA');
        var banco = record.get('BANCO');
        var cuentaBanco = record.get('NUMERO_CUENTA');
        var clabe = record.get('CUENTA_CLABE');
        var correo = record.get('CORREO');
        var cuentaComple = record.get('CUENTA_COMPLEMENTARIA');
        var cuentaIngre = record.get('CUENTA_INGRESO');
        
        


         
        var view = Ext.widget('windowclientes');
        view.setTitle('Editar Clientes');
        var form = view.down('formclientes').getForm();
   
         form.findField('idClienteCli').setDisabled(true);
        
        form.findField('companiaCli').setValue(compania);
        form.findField('idClienteCli').setValue(idCliente);
        
        form.findField('idClienteCli').setReadOnly(true);
        
        form.findField('nombreCli').setValue(nombre);
       
        form.findField('rfcCli').setValue(rfc);
        form.findField('razonSocialCli').setValue(razonSocial);
        
        form.findField('auxCliente').setValue(auxiliar);
        form.findField('cuentaBancariaCli').setValue(cuentaBanco);
        form.findField('clabeCli').setValue(clabe);
        form.findField('correoClie').setValue(correo);
        
                        
   

                  
         var storePersona = form.findField('cboPersonaCli').getStore();
       
        storePersona.load({
                             callback:function(val1){
                            
                                    form.findField('cboPersonaCli').setValue(tPersona);
                             }
                         });
                         
                         
                         
          var storeMoneda = form.findField('cboMonedaCli').getStore();
      
        storeMoneda.load({
                             callback:function(val1){
                            
                                    form.findField('cboMonedaCli').setValue(tClieprov);
                             }
                         });
                         
          var storeCuenta = form.findField('cboCUENTA_CONTABLECli').getStore();
        storeCuenta.proxy.extraParams.query = '';
        storeCuenta.load({
                             callback:function(val1){
                            
                                    form.findField('cboCUENTA_CONTABLECli').setValue(cuenta);
                             }
                         });
                         
                         
            var storeCuentaCompl = form.findField('cboCUENTA_CONTABLE_COMPCli').getStore();
        storeCuentaCompl.proxy.extraParams.query = '';
        storeCuentaCompl.load({
                             callback:function(val1){
                            
                                    form.findField('cboCUENTA_CONTABLE_COMPCli').setValue(cuentaComple);
                             }
                         });    
                         
                         // CUENTA INGRESO
                         var storeCuentaIngre = form.findField('cboCUENTA_CONTABLE_INGCli').getStore();
        storeCuentaIngre.proxy.extraParams.query = '';
        storeCuentaIngre.load({
                             callback:function(val1){
                            
                                    form.findField('cboCUENTA_CONTABLE_INGCli').setValue(cuentaIngre);
                             }
                         });    
                         
    
                         
           var storeBanco = form.findField('cboBANCOCli').getStore();
        storeBanco.proxy.extraParams.query = '';
        storeBanco.load({
                             callback:function(val1){
                            
                                    form.findField('cboBANCOCli').setValue(banco);
                             }
                         });
                         
            var storeCto = form.findField('ctoCli').getStore();
        storeCto.proxy.extraParams.query = '';
        storeCto.load({
                             callback:function(val1){
                            
                                    form.findField('ctoCli').setValue(ctoCto);
                             }
                         });
                         
       
                         
   
                         
   
    },
    
    enviaAuxiliar:function(cuenta){
        
         var me = this, 
        form = me.getFormClientes().getForm();

        
        
        var aux = cuenta;
        
        while (aux.indexOf("-") > 0) {
          
            var tam = aux.length;

            var n = aux.indexOf("-");

            var aux = aux.substring(n + 1, tam);
            
        
 
        }
        
        form.findField('auxCliente').setValue(aux);
        
       
        
        
        
    },
    
    buscaClienteFalt:function(cliente){
        
         var me = this, 
        grid = me.getGridClientesFalt(),
        store = grid.getStore();
         
       
        if(Ext.isEmpty(cliente)){
            
            store.proxy.extraParams.cliente = '';
            
            
        }else{
            
            store.proxy.extraParams.cliente = cliente;
            
            
        }                                                               
                
        grid.setLoading('Buscando...');
        store.loadData([], false);
        store.load({
            callback: function() {      
                grid.setLoading(false);
            }
        });
        
        
    },
    
     buscaCliente:function(cliente){
        
         var me = this, 
        grid = me.getGridClientes(),
        store = grid.getStore();
         
       
        if(Ext.isEmpty(cliente)){
            
            store.proxy.extraParams.cliente = '';
            
            
        }else{
            
            store.proxy.extraParams.cliente = cliente;
            
            
        }                                                               
                
        grid.setLoading('Buscando...');
        store.loadData([], false);
        store.load({
            callback: function() {      
                grid.setLoading(false);
            }
        });
        
        
        
    },
    
      crearClienteFalt: function(){
        
          var me = this,
          grid = me.getGridClientesFalt(),
          store = grid.getStore(),
                records = grid.getSelectionModel().getSelection();
  
        if(Ext.isEmpty(records)){
            
            msgBoxErr('Error','No ha seleccionado el cliente');
            
            return;
            
        }
        
        
        
            
        me.procesoCliente = 'I';
        
        var record = records[0];
        
        var compania = record.get('COMPANIA_FALT');
        //var idCliente = record.get('ID_CLIENTE_FALT');
        var nombre = record.get('NOMBRE_FALT');
        var rfc = record.get('RFC_FALT');
        var fechaA = record.get('F_ALTA_FALT');
        var razonSocial = record.get('RAZON_SOCIAL_FALT');
        var tPersona = record.get('T_PERSONA_FALT');
        var tClieprov = record.get('T_CLIEPROV_FALT');
        var auxiliar = record.get('AUXILIAR_FALT');
        var ctoCto = record.get('CTO_CTO_FALT');
        var cuenta = record.get('CUENTA_FALT');
        var banco = record.get('BANCO_FALT');
        var cuentaBanco = record.get('NUMERO_CUENTA_FALT');
        var clabe = record.get('CUENTA_CLABE_FALT');
        var correo = record.get('CORREO_FALT');
     
         
        var view = Ext.widget('windowclientes');
        view.setTitle('Crear Clientes Contabilidad');
        var form = view.down('formclientes').getForm();
   
         form.findField('idClienteCli').setDisabled(true);
        
        form.findField('companiaCli').setValue(compania);
      //  form.findField('idClienteCli').setValue(idCliente);
        
        form.findField('idClienteCli').setReadOnly(true);
        
        form.findField('nombreCli').setValue(nombre);
       
        form.findField('rfcCli').setValue(rfc);
        form.findField('razonSocialCli').setValue(razonSocial);
        
        form.findField('auxCliente').setValue(auxiliar);
        form.findField('cuentaBancariaCli').setValue(cuentaBanco);
        form.findField('clabeCli').setValue(clabe);
        form.findField('correoClie').setValue(correo);
        
                        
   

                  
         var storePersona = form.findField('cboPersonaCli').getStore();
       
        storePersona.load({
                             callback:function(val1){
                            
                                    form.findField('cboPersonaCli').setValue(tPersona);
                             }
                         });
                         
                         
                         
          var storeMoneda = form.findField('cboMonedaCli').getStore();
      
        storeMoneda.load({
                             callback:function(val1){
                            
                                    form.findField('cboMonedaCli').setValue(tClieprov);
                             }
                         });
                         
          var storeCuenta = form.findField('cboCUENTA_CONTABLECli').getStore();
        storeCuenta.proxy.extraParams.query = '';
        storeCuenta.load({
                             callback:function(val1){
                            
                                    form.findField('cboCUENTA_CONTABLECli').setValue(cuenta);
                             }
                         });
                         
                         
        
    
                         
           var storeBanco = form.findField('cboBANCOCli').getStore();
        storeBanco.proxy.extraParams.query = '';
        storeBanco.load({
                             callback:function(val1){
                            
                                    form.findField('cboBANCOCli').setValue(banco);
                             }
                         });
                         
            var storeCto = form.findField('ctoCli').getStore();
        storeCto.proxy.extraParams.query = '';
        storeCto.load({
                             callback:function(val1){
                            
                                    form.findField('ctoCli').setValue(ctoCto);
                             }
                         });
                         
       
                         
   
                         
        
        
    },
    
    
    crearCliente: function(){
        
          var me = this,
           grid = me.getGridClientes();
   
        me.procesoCliente = 'I';
   
        var view = Ext.widget('windowclientes');
        view.setTitle('Crear Cliente');
        var form = view.down('formclientes').getForm();
        
         form.findField('idClienteCli').setDisabled(true);
        
        //form.findField('idClienteProv').setReadOnly(false);
        
        
        
    },
    
        saveCliente: function(btn){
        var me = this,
                grid = me.getGridClientes(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore(),
                form = btn.up('formclientes'),
                win = form.up('window'),
                basicForm = form.getForm();

  

        if (basicForm.isValid()) {
           // grid.setLoading("Guardando Proveedor...");
            form.setLoading("Guardando Cliente...");
            
            basicForm.findField('idClienteCli').setDisabled(false);
            
            
            basicForm.submit({
                params:{
                    proceso:me.procesoCliente
                
                    
                },
                
                success: function(form1, action) {
                    win.close();
                    Ext.Msg.alert('Guardado', 'El Cliente se guardo Correctamente');
                    //store.loadData([], false);
//                    store.load({
//                        callback: function() {
             //       grid.setLoading(false);
                    form.setLoading(false);
               
                    win.close();
                    
                    
                    me.buscaCliente();
                    me.buscaClienteFalt();
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
    cancelaCliente: function(){
        
                 var me = this,
                grid = me.getGridClientes(),
                records = grid.getSelectionModel().getSelection(),
                storeArch = grid.getStore();

        var selection = grid.getSelectionModel().getSelection();

        //var record = selection[0];

        if (Ext.isEmpty(selection)) {
            msgBoxErr("Error", "No ha seleccionado ningun registro");
            return;
        }
        
       
        
                
        Ext.MessageBox.show({
            title: 'Eliminar Clientes',
            msg: 'Esta seguro que desea borrar el Clientes?',
            icon: Ext.MessageBox.WARNING,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {


                    var data = [];
                    var err = '0';

                    for (var i = 0; i < selection.length; i++) {
                         
                        var record = selection[i];
//                     if (record.data.ESTATUS_CXP_OTROS === 'IMP' || record.data.ESTATUS_CXP_OTROS === 'TES' || record.data.ESTATUS_CXP_OTROS === 'FG' || record.data.ESTATUS_CXP_OTROS === 'PAG'){
//                         
//                         msgBoxErr("Error", "Existen datos procesados en tesoreria, imposible eliminar registro, favor de verficar");
//                         err = '1';
//                         return;
//                         
//                         
//                         
//                     }
//                     
//                      if (!Ext.isEmpty(record.data.NUMERO_RELACION_OTRAS)){
//                         
//                         msgBoxErr("Error", "Existen facturas relacionadas, no se puede modificar el registro");
//                         err = '1';
//                         return;
//                         
//                         
//                         
//                     }
                     
                        data.push(record.data);

                      //  msgOut('data', data);


                    }
                    
//                    if (err === '1'){
//                        
//                        return;
//                        
//                    }



//
//               var data = [];
//               
//                    data.push(record.data);



                    var jsonData = Ext.encode(data);
                    if (Ext.isEmpty(data)) {
                        msgBoxErr('Error', 'No existen equipos seleccionados');
                        return;
                    }



                    grid.setLoading("Borrando Registro...");
                    Ext.Ajax.request({
                        url: 'CrearCliente/deleteCliente',
                        timeout: 60000,
                        scope: this,
                        params: {
                            data: jsonData


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
                                me.buscaCliente();
                                me.buscaClienteFalt();

                            } else {

                                msgBoxErr('Error en el Borrado', res.msg);

                            }
                        }
                    });


                }

            }

        });
        
    }
    


});