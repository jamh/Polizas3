Ext.define('AppProveedores.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: [
        'StoreProveedores',
        'StoreProducto'
    ],
    models: [
        'ModeloProveedores',
        'ModeloProductos'
    ],
    refs: [
        {
            ref: 'gridProveedores',
            selector: 'gridproveedores'
        },
        {
            ref: 'formProveedores',
            selector: 'formproveedores'
        },
        {
            ref:'gridProductos',
            selector:'gridproductos'
            
        },
        {
            ref:'formProductos',
            selector:'formproductos'
            
        },
        {
            ref:'windowProveedores',
            selector:'windowproveedores'
        },
        {
            ref:'panelSurProv',
            selector:'panelsurprov'
        }

    ],
    views: [
        'GridProveedores',
        'Main',
        'FormProveedores',
        'WindowProveedores',
        'GridProductos',
        'FormProductos',
        'WindowProductos',
        'PanelSurProv'
    ],
    procesoProveedor:'',
    procesoDireccion:'',
    disableProducto:'',
    companiaSession: '',
    permisosP:'',
    hiddenGrid : '0',
    hiddenComp:'',
    init: function () {

        var me = this;
        me.control({
            
            windowproveedores:{
            
                 recargaProveedor:function(){
                     
                     me.buscaProveedor();
                     
                     
                 }
                 
                       
            },
            
            formproductos:{
                
                guardaProductos:function(btn){
                    
                    me.guardaProductos(btn);
                }
                
            },
            
            
            gridproductos:{
                
                cancelaProducto: function(){
                    
                    me.cancelaProducto();
                },
                
                itemdblclick: function() {
                   
                     this.editProductos();
                    
                },
                
                agregarProducto:function(btn){
                    
                    me.agregarProducto(btn);
                    
                },
                afterrender: function(e, eOpts ) {
                    
                   e.setDisabled(me.disableProducto);
                   
                   if(me.disableProducto === false){
                  
                        me.buscaProducto();
                    }else{
                        var store = e.getStore();
                         store.loadData([], false);
                        
                    }
                }
               
                
                
            },
            gridproveedores: {
                descargaProvPg:function(){
                    
                    me.descargaProvPg();
                },
                cleanFiltersProv:function(){
                    
                    me.cleanFiltersProv();
                },
                select: function(){
                    
                    me.verificaProveedor();
                },
                
                itemdblclick: function() {
                    
                     me.disableProducto = false;
                    
                      if (me.permisosP.indexOf("M")<0 ) { 
                          
                              this.editProveedores('M');
                          
                  
                            // msgBoxErr('Permisos', 'Error no tiene permisos para modificar');
                                 
                        }else{
                            
                             this.editProveedores();
                            
                        }
                    
                   
                  
                    
                    
                },
                crearProveedor: function(btn){
                    
                    me.disableProducto = true;
                    
                    me.crearProveedor(btn);
                },
                cancelaProveedor: function(){
                    
                    me.cancelaProveedor();
                },
                buscaProveedor: function(id){
                    
                    me.buscaProveedor(id);
                },
                afterrender: function() {
                    me.findCompania();
                   // me.permisosComponentes();
                    me.permisosProveedor();
                     me.buscaProveedor();
                 
                }
                
            },
            formproveedores: {
                
                saveProveerdor: function(btn){
                    
                    me.saveProveerdor(btn);
                }
                
            }
        });
    },
    
      permisosComponentes: function() {
        var me = this,
        form = me.getFormProveedores().getForm();
        Ext.Ajax.request({
            url: 'process/data/BuscaPermisosComponentesProv',
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
                         
                  if (tipo === 'GRID'){
                    if (!Ext.isEmpty(hidden)){ 
                        if (hidden === '1'){
                            
      
                            
                            Ext.getCmp("tab").child('#'+componente).tab.hide();

                         
                        }
                    
                    }
                 
                   }else{
                         
                      
                     
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
                        if (!Ext.isEmpty(hidden) && tipo !== 'GRID'){
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
        permisosProveedor: function() {
        var me = this,
        grid = me.getGridProveedores();

        Ext.Ajax.request({
            url: 'process/data/BuscaPermisosProveedores',
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
                                 grid.down('button[itemId=btnAgregarProv]').setVisible(false); 
                     }
                     if (permisos.indexOf("B")<0 ) {   
                                 grid.down('button[itemId=btnBorrarProv]').setVisible(false); 
                     }
                     
                    // me.findCuentas();
                    
                    

                } else if (!val.success) {
                    msgBoxErr('Permisos', 'Error el usuario no tiene permisos');
                    grid.down('button[itemId=btnAgregarProv]').setVisible(false); 
                    grid.down('button[itemId=btnBorrarProv]').setVisible(false); 
                }
            },
            timeout: 30000

        });
    },
    
     findCompania: function() {
        var me = this;

        Ext.getBody().on("contextmenu", Ext.emptyFn, null, {preventDefault: true});
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

                    //var me = this,
                     //       grid = me.getAppMain();
                    //grid.setTitle(val.data[0].NOMBRE1);
                    this.companiaSession = val.data[0].COMPANIA;

                } else if (!val.success) {
                    msgBoxErr('Compania', 'Error compañia no encontrada');
                }
            },
            timeout: 30000

        });
    },
    
        descargaProvPg: function() {
        var me = this,
                grid = me.getGridProveedores(),
                store = grid.getStore();
        var data = Ext.encode(grid.filters.getFilterData());
        var data = [];

        for (var i = 0; i < (grid.filters.getFilterData().length); i++) {
            data.push({"type": grid.filters.getFilterData()[i].data.type, "value": grid.filters.getFilterData()[i].data.value, "field": grid.filters.getFilterData()[i].field});
        }

        var jsonData = Ext.encode(data);

        var date = new Date();
        var systemtime = date.getFullYear() + "" + date.getMonth() + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds() + "" + date.getMilliseconds();


        var result = Ext.encode(jsonData);
        var encodedFilename = Ext.urlEncode(result);
        var filter = encodeURIComponent(jsonData);
        var page = store.currentPage;
        var start = 0;
        var limit = store.pageSize;

        var string = Ext.String.format(
                //'<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
                //   'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con',
                //   'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=JREP_descarga_Pagos&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&filter={1}&page={2}&start={3}&limit={4}&reporte=JREP_descarga_Pagos',
                'http://appferaz1.com/JWEBR/R3/JREP_Proveedores/' + systemtime + '/BuscaProveedores?compania={0}&filter={1}&page={2}&start={3}&limit={4}',
                me.companiaSession,
                filter,
                page,
                start,
                limit
                );

        Ext.create('Ext.window.Window', {
            title: 'Descarga Proveedores',
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

        return string;
    },
    cleanFiltersProv: function() {

        var me = this,
                grid = me.getGridProveedores();
        grid.filters.clearFilters();

    },
    guardaProductos:function(btn){
        
         var me = this,
                grid = me.getGridProveedores(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore(),
                form = btn.up('formproductos'),
                win = form.up('window'),
                basicForm = form.getForm();

       // var compania = basicForm.findField('archCOMPANIA').getValue();

       // store.proxy.extraParams.compania = compania;


        if (basicForm.isValid()) {
           // grid.setLoading("Guardando Proveedor...");
            form.setLoading("Guardando Producto...");
            basicForm.submit({
          
                success: function(form1, action) {
                   
                    msgBox('Guardado', 'El Producto se guardo Correctamente');
                    //store.loadData([], false);
//                    store.load({
//                        callback: function() {
             //       grid.setLoading(false);
                    form.setLoading(false);
               
                    win.close();
                    
                    me.buscaProducto();
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
    verificaProveedor:function(){
        
        
        var me = this,
                text = '',
                grid = me.getGridProveedores(),
                records = grid.getSelectionModel().getSelection(),
                containerStatus = me.getPanelSurProv();



        var record = records[0];
        if (Ext.isEmpty(record)) {


            return;
        }

        var estatus = record.get('ESTATUS');
        var rfc = record.get('RFC');
        var tClieprov = record.get('T_CLIEPROV');
        var cuentaClabe = record.get('CUENTA_CLAVE');
        var banco = record.get('BANCO');
        var persona = record.get('T_PERSONA');
        
        

        var sb = containerStatus.getComponent('statusbarTotales');
      //  var det = detalle.getComponent('statusDetalle');
     //   var banDet = det.getComponent('idBandera');
        var err = sb.getComponent('msgErr');
//        var totAbo = sb.getComponent('totalAbonos');
//        var totReg = sb.getComponent('totalRegistros');
//        var totDif = sb.getComponent('diferenciaRegistros');
//        var regVali = sb.getComponent('totalRegistrosValidos');

        sb.showBusy();
        
         var icon = 'x-status-valid';
        
                if(Ext.isEmpty(rfc)){

                    text = 'Error en Proveedor';
                    icon = 'x-status-error';
                    //err.update('<span style="color:white;background-color:red;font-weight: bold;font-size: "4";">Error: RFC incorrecto</span>');

                    

                }
                 else if(Ext.isEmpty(tClieprov)){

                    text = 'Error en Proveedor';
                    icon = 'x-status-error';
                    
                    //err.update('<span style="color:white;background-color:red;font-weight: bold;font-size: "4";">Error: Faltan tipo de Moneda</span>');


                }
                 else if(Ext.isEmpty(cuentaClabe)){

                    text = 'Error en Proveedor';
                    icon = 'x-status-error';
                    //err.update('<span style="color:white;background-color:red;font-weight: bold;font-size: "4";">Error: Faltan Datos Bancarios</span>');


                }
                 else if(estatus === '0'){

                    text = 'Error en Proveedor';
                    icon = 'x-status-error';

                }
                else if(persona === '0'){

                    text = 'Error en Proveedor';
                    icon = 'x-status-error';
                    //err.update('<span style="color:white;background-color:red;font-weight: bold;font-size: "4";">Error: Faltan tipo de Persona</span>');


                }
                

                 else if(Ext.isEmpty(banco)){

                    text = 'Error en Proveedor';
                    icon = 'x-status-error';
                    
                    //err.update('<span style="color:white;background-color:red;font-weight: bold;font-size: "4";">Error: Faltan Datos Bancarios</span>');


                }else{
                    
                     text = 'Proveedor Correcto';
                     icon = 'x-status-valid';
                     
                     //err.update('<span style="color:white;background-color:green;font-weight: bold;font-size: "4";">Datos Correctos</span>');

                     
                                     
                    
                }
        
        

                    sb.setStatus({
                        iconCls: icon,
                        text: text
                    });
                    
                //totCar.update('Cargos:' + formatCurrency(Math.round(sumCargos * 1000) / 1000));
                //totAbo.update('Abonos:' + formatCurrency(Math.round(sumAbonos * 1000) / 1000));
                //totDif.update('Diferencia:' + formatCurrency(Math.round((sumAbonos - sumCargos) * 1000) / 1000));
                //regVali.update('Registros Validos:' + totalesValidos);
                //if (totales === totalesValidos) {
                //    banDet.update('<span style="color:white;background-color:green;font-weight: bold;font-size: "4";">Detalle Correcto</span>');

               // } else {
               //     banDet.update('<span style="color:white;background-color:red;font-weight: bold;font-size: "4";">Error en Detalle de Poliza</span>');

               // }


        grid.doLayout( );
        
        
    },
    agregarProducto:function(btn){
        var me = this,
        grid = me.getGridProveedores(),
          store = grid.getStore(),
                records = grid.getSelectionModel().getSelection();
        
        var view = Ext.widget('windowproductos');
        view.setTitle('Crear Producto');
        var form = view.down('formproductos').getForm();
        
   
   
        
        var record = records[0];
        
        
        
        var proveedor = record.get('ID_CLIENTE');
        
        form.findField('txtProveedorProduct').setValue(proveedor);
        
        
    },
    cancelaProveedor: function(){
        
                 var me = this,
                grid = me.getGridProveedores(),
                records = grid.getSelectionModel().getSelection(),
                storeArch = grid.getStore();

        var selection = grid.getSelectionModel().getSelection();

        //var record = selection[0];

        if (Ext.isEmpty(selection)) {
            msgBoxErr("Error", "No ha seleccionado ningun registro");
            return;
        }
        
       
        
                
        Ext.MessageBox.show({
            title: 'Eliminar Proveedor',
            msg: 'Esta seguro que desea borrar el proveedor?',
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
                        url: 'CrearProveedor/deleteProveedor',
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
                                me.buscaProveedor();

                            } else {

                                msgBoxErr('Error en el Borrado', res.msg);

                            }
                        }
                    });


                }

            }

        });
        
    },
    
        cancelaProducto: function(){
        
                 var me = this,
                grid = me.getGridProductos(),
                records = grid.getSelectionModel().getSelection(),
                storeArch = grid.getStore();

        var selection = grid.getSelectionModel().getSelection();

        //var record = selection[0];

        if (Ext.isEmpty(selection)) {
            msgBoxErr("Error", "No ha seleccionado ningun registro");
            return;
        }
        
       
        
                
        Ext.MessageBox.show({
            title: 'Eliminar Producto',
            msg: 'Esta seguro que desea borrar el producto?',
            icon: Ext.MessageBox.WARNING,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {


                    var data = [];
                    var err = '0';

                    for (var i = 0; i < selection.length; i++) {
                         
                        var record = selection[i];
//                     if (record.data.ESTATUS_CXP_OTROS === 'IMP' || record.data.ESTATUS_CXP_OTROS === 'TES' || record.data.ESTATUS_CXP_OTROS === 'FG' || record.data.ESTATUS_CXP_OTROS === 'PAG'){

                        data.push(record.data);

                      //  msgOut('data', data);


                    }
                    


                    var jsonData = Ext.encode(data);
                    if (Ext.isEmpty(data)) {
                        msgBoxErr('Error', 'No existen equipos seleccionados');
                        return;
                    }



                    grid.setLoading("Borrando Registro...");
                    Ext.Ajax.request({
                        url: 'CrearProveedor/deleteProducto',
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
                                me.buscaProducto();

                            } else {

                                msgBoxErr('Error en el Borrado', res.msg);

                            }
                        }
                    });


                }

            }

        });
        
    },
    
    
    crearProveedor: function(btn){
        
        var me = this,
           grid = me.getGridProveedores();
   
        me.procesoProveedor = 'I';
   
        var view = Ext.widget('windowproveedores');
        view.setTitle('Crear Proveedores');
        var form = view.down('formproveedores').getForm();
        
        //form.findField('idClienteProv').setReadOnly(false);
        form.findField('idClienteProv').setDisabled(true);
        form.findField('addBanderaViatic').setVisible(true);
       // form.findField('addBanderaCie').setValue(false);
        
        view.down('formproveedores').down('button[itemId=btnSaveProveedor]').setVisible(true);
        me.permisosComponentes();
    },
    
    editProductos:function(){
        
        var me = this,
          grid = me.getGridProductos(),
          store = grid.getStore(),
                records = grid.getSelectionModel().getSelection();
  
            
        
        var record = records[0];
        
        
        
        var compania = record.get('COMPANIA');
        var proveedor = record.get('PROVEEDOR');
        var idProducto = record.get('ID_PRODUCTO');
        var nombre = record.get('NOMBRE');
        var codigo = record.get('CODIGO');
        var unidadMedida = record.get('UNIDAD_MEDIDA');
        var precio = record.get('PRECIO_SIN_IVA');
        var codigoProveedor = record.get('CODIGO_PROVEEDOR');
        
            
        var view = Ext.widget('windowproductos');
        view.setTitle('Editar Productos');
        var form = view.down('formproductos').getForm();
   
               
        
        form.findField('txtProveedorProduct').setValue(proveedor);       
        form.findField('txtIdProductoProduct').setValue(idProducto);
        form.findField('txtNombreProduct').setValue(nombre);
        form.findField('txtCodigoProduct').setValue(codigo);
        form.findField('txtCodigoProveedor').setValue(codigoProveedor);
        form.findField('txtUnidadMedidaProduct').setValue(unidadMedida);
        form.findField('txtPrecioSinIvaProduct').setValue(precio);
  
        
        
        
    },
    
    editProveedores:function(permEdit){
        var me = this,
          grid = me.getGridProveedores(),
          store = grid.getStore(),
                records = grid.getSelectionModel().getSelection();
  
            
        me.procesoProveedor = 'U';
        
        var record = records[0];
        
        
        
        var compania = record.get('COMPANIA');
        var idCliente = record.get('ID_CLIENTE');
        var origen = record.get('ORIGEN');
        var nombre = record.get('NOMBRE');     
        var rfc = record.get('RFC');
        var actEconomica = record.get('ACT_ECONOMICA');
        var fAlta = record.get('F_ALTA');
        var razonSocial = record.get('RAZON_SOCIAL');
        var papelerio = record.get('PAPELERIA');
        var tPersona = record.get('T_PERSONA');
        var tClieprov = record.get('T_CLIEPROV');
        var tTercero = record.get('T_TERCERO');
        var tOperacion = record.get('T_OPERACION');
        var idFiscal = record.get('ID_FISCAL');
        var nombreExtranjero = record.get('NOMBRE_EXTRANJERO');
        var paisResidencia = record.get('PAIS_RESIDENCIA');
        var nacionalidad = record.get('NACIONALIDAD');
        var auxiliar = record.get('AUXILIAR');
        var cto = record.get('CTO_CTO');
        var tipoIngreso = record.get('TIPO_INGRESO');
        var cuenta = record.get('CUENTA');
        var cuentaIva = record.get('CUENTA_IVA');
        var correo = record.get('CORREO');
        var telefono = record.get('TELEFONO');
        var tipoPoliza = record.get('TIPO_POLIZA');
        var banco = record.get('BANCO');
        var numeroCuenta = record.get('NUMERO_CUENTA');
        var cuentaClabe = record.get('CUENTA_CLAVE');
        var auxiliar = record.get('AUXILIAR');
        var operacionDiot = record.get('T_OPERACION_DIOT');
        var bancoPago = record.get('BANCO_PAGO');
        var diasCredito = record.get('DIAS_CREDITO');
        var cuentaGasto = record.get('CUENTA_GASTO');
        var cuentaIvaPago = record.get('CUENTA_IVA_PAGO');
        var cuentaComplementaria = record.get('CUENTA_COMPLEMENTARIA');
        
        var calle = record.get('CALLE');
        var noExterior = record.get('NO_EXTERIOR');
        var noInterior = record.get('NO_INTERIOR');
        var colonia = record.get('COLONIA');
        var estado = record.get('ESTADO');
        var pais = record.get('PAIS');
        var cp = record.get('CP');
        var delegacion = record.get('DELEGACION');
        var password = record.get('PASSWORD');
        
        var tercero = record.get('T_TERCERO');
        var operacion = record.get('T_OPERACION');
        var concepto = record.get('CONCEPTO_DEFAULT');
        
        var viatico = record.get('VIATICO');
        var cie = record.get('CIE');
        var pagoCie = record.get('PAGO_CIE');
        var refenciaCie = record.get('REFERENCIA_CIE');
        
        var ctoDefault = record.get('CTO_CTO_DEFAULT');
        
        var tipoCuenta = record.get('TIPO_CUENTA');
        var iban = record.get('IBAN');
        var swift = record.get('SWIFT');
        
        var cuentaValida = record.get('CUENTA_VALIDA');
 

        
        
        if (!Ext.isEmpty(pais)){

           me.procesoDireccion = 'U';
        }else{
            
            me.procesoDireccion = 'I';
            
        }
     

         
        var view = Ext.widget('windowproveedores');
        view.setTitle('Editar Proveedores');
        var form = view.down('formproveedores').getForm();
        me.permisosComponentes();
           form.findField('idClienteProv').setDisabled(true);    
        
        form.findField('diasProv').setValue(diasCredito);
        form.findField('companiaProv').setValue(compania);
        form.findField('idClienteProv').setValue(idCliente);
        form.findField('idClienteProv').setReadOnly(true);
        
        form.findField('nombreProv').setValue(nombre);
        form.findField('rfcProv').setValue(rfc);
        form.findField('razonSocialProv').setValue(razonSocial);
        form.findField('correoProv').setValue(correo);
        form.findField('txtTELEFONO').setValue(telefono);
        form.findField('cuentaBancariaProv').setValue(numeroCuenta);
        form.findField('clabeProv').setValue(cuentaClabe);
        
        form.findField('calleProv').setValue(calle);
        form.findField('NO_INTERIOR').setValue(noInterior);
        form.findField('NO_EXTERIOR').setValue(noExterior);
        form.findField('coloniaProv').setValue(colonia);
        form.findField('cpProv').setValue(cp);
        form.findField('delegacionProv').setValue(delegacion);
        form.findField('passProv').setValue(password);
        form.findField('auxiliarProv').setValue(auxiliar);
        //form.findFiled('cbotOperacionDiot').setValue(operacionDiot);
        
        form.findField('addBanderaViatic').setValue(viatico);
        form.findField('addBanderaViatic').setVisible(false);
        
        form.findField('swiftProv').setValue(swift);
        form.findField('ibanProv').setValue(iban);
        form.findField('cboTipoCuentaProv').setValue(tipoCuenta);
        form.findField('CUENTA_VALIDA').setValue(cuentaValida);
        
        if(tipoCuenta === 'EXT'){
            
            Ext.getCmp('cboBANCO').allowBlank = true;
            
        }else{
            
            
            Ext.getCmp('cboBANCO').allowBlank = false;
        }
        
        
        if(cie === '1'){
            form.findField('addBanderaCie').setValue(true);
        }else{
            
            form.findField('addBanderaCie').setValue(false);
            
        }
        form.findField('PAGO_CIE').setValue(pagoCie);
        form.findField('REFERENCIA_CIE').setValue(refenciaCie);
        
        
         if (!Ext.isEmpty(permEdit)){        
             
              view.down('formproveedores').down('button[itemId=btnSaveProveedor]').setVisible(false); 
          }else{
              
              view.down('formproveedores').down('button[itemId=btnSaveProveedor]').setVisible(true); 
          }
                        
   

                  
         var storePersona = form.findField('cboPersona').getStore();
       
        storePersona.load({
                             callback:function(val1){
                            
                                    form.findField('cboPersona').setValue(tPersona);
                             }
                         });
          var storeMoneda = form.findField('cboMonedaProv').getStore();
      
        storeMoneda.load({
                             callback:function(val1){
                            
                                    form.findField('cboMonedaProv').setValue(tClieprov);
                             }
                         });
                         
    
                         
          var storeTPoliza = form.findField('cboTIPO_POLIZA').getStore();
        storeTPoliza.proxy.extraParams.query = '';
        storeTPoliza.load({
                             callback:function(val1){
                            
                                    form.findField('cboTIPO_POLIZA').setValue(tipoPoliza);
                             }
                         });
                         
       
                         
           var storePais = form.findField('paisProv').getStore();
        storePais.load({
                             callback:function(val1){
                            
                                    form.findField('paisProv').setValue(pais);
                             }
                         });
                         
           var storeEstado = form.findField('estadoProv').getStore();
        storeEstado.proxy.extraParams.pais = pais;
        storeEstado.load({
                             callback:function(val1){
                            
                                    form.findField('estadoProv').setValue(estado);
                             }
                         });
                         
                 var storeCuenta = form.findField('cboCUENTA_CONTABLE').getStore();
        storeCuenta.proxy.extraParams.query = '';
        storeCuenta.load({
                             callback:function(val1){
                            
                                    form.findField('cboCUENTA_CONTABLE').setValue(cuenta);
                             }
                         });
                         
           var storeCuentaIva = form.findField('cboCUENTA_IVA').getStore();
        storeCuentaIva.proxy.extraParams.query = '';
        storeCuentaIva.load({
                             callback:function(val1){
                            
                                    form.findField('cboCUENTA_IVA').setValue(cuentaIva);
                             }
                         });
                         
                         var storeCuentaGasto = form.findField('cboCUENTA_GASTO').getStore();
        storeCuentaGasto.proxy.extraParams.query = '';
        storeCuentaGasto.load({
                             callback:function(val1){
                            
                                    form.findField('cboCUENTA_GASTO').setValue(cuentaGasto);
                             }
                         });
                         
               var storeCuentaIvaPago = form.findField('cboCUENTA_IVA_PAGO').getStore();
        storeCuentaIvaPago.proxy.extraParams.query = '';
        storeCuentaIvaPago.load({
                             callback:function(val1){
                            
                                    form.findField('cboCUENTA_IVA_PAGO').setValue(cuentaIvaPago);
                             }
                         });
                         
        var storeCuentaComplementaria = form.findField('cboCUENTA_COMPLEMENTARIA').getStore();
        storeCuentaComplementaria.proxy.extraParams.query = '';
        storeCuentaComplementaria.load({
                             callback:function(val1){
                            
                                    form.findField('cboCUENTA_COMPLEMENTARIA').setValue(cuentaComplementaria);
                             }
                         });
                         
          
                         
                         
           var storeBanco = form.findField('cboBANCO').getStore();
        storeBanco.proxy.extraParams.query = '';
        storeBanco.load({
                             callback:function(val1){
                            
                                    form.findField('cboBANCO').setValue(banco);
                             }
                         });   
                         
               var storeBancoPago = form.findField('bancoPagoProv').getStore();
        storeBancoPago.proxy.extraParams.query = '';
        storeBancoPago.load({
                             callback:function(val1){
                            
                                    form.findField('bancoPagoProv').setValue(bancoPago);
                             }
                         });
                         
        var storeTercero = form.findField('cbotTercero').getStore();
                         
        storeTercero.load({
                             callback:function(val1){
                            
                                    form.findField('cbotTercero').setValue(tercero);
                             }
                         });
         var storeOperacion = form.findField('cbotOperacion').getStore();
                         
        storeOperacion.load({
                             callback:function(val1){
                            
                                    form.findField('cbotOperacion').setValue(operacion);
                             }
                         });
                         
             var storeOperacionD = form.findField('cbotOperacionDiot').getStore();
                         
        storeOperacionD.load({
                             callback:function(val1){
                            
                                    form.findField('cbotOperacionDiot').setValue(operacionDiot);
                             }
                         });             
                         
          var storeConcep = form.findField('cboConceptoDefault').getStore();
                         
        storeConcep.load({
                             callback:function(val1){
                            
                                    form.findField('cboConceptoDefault').setValue(concepto);
                             }
                         });
                         
                         
             var storeCtoDefault = form.findField('cboctoDefault').getStore();
                         
        storeCtoDefault.load({
                             callback:function(val1){
                            
                                    form.findField('cboctoDefault').setValue(ctoDefault);
                             }
                         });
                         
                         
         
         
         
          
//          console.log(Ext.getCmp('btnPanelBancosCta'));
//         Ext.getCmp('btnPanelBancosCta').setVisible(true);
                         
                         
   
    },
    
    saveProveerdor: function(btn){
        var me = this,
                grid = me.getGridProveedores(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore(),
                form = btn.up('formproveedores'),
                win = form.up('window'),
                basicForm = form.getForm();

       // var compania = basicForm.findField('archCOMPANIA').getValue();

       // store.proxy.extraParams.compania = compania;

        basicForm.findField('idClienteProv').setDisabled(false);
        
       // console.log(basicForm.findField('addBanderaViatic').getValue());
        
        
        
        if (basicForm.isValid()) {
           // grid.setLoading("Guardando Proveedor...");
            form.setLoading("Guardando Proveedor...");
            basicForm.submit({
                params:{
                    proceso:me.procesoProveedor,
                    procesoDir:me.procesoDireccion,
                    banderaViatic:basicForm.findField('addBanderaViatic').getValue(),
                    addBanderaCie:basicForm.findField('addBanderaCie').getValue()
                    
                },
                
                success: function(form1, action) {
                    win.close();
                    Ext.Msg.alert('Guardado', 'El Proveedor se guardo Correctamente');
                    //store.loadData([], false);
//                    store.load({
//                        callback: function() {
             //       grid.setLoading(false);
                    form.setLoading(false);
               
                    win.close();
                    
                    me.buscaProveedor();
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
                    
                    basicForm.findField('idClienteProv').setDisabled(true);
                    
                    return;
                }

            });
        }

    },
    
    buscaProveedor: function(id){
       var me = this, 
        grid = me.getGridProveedores(),
           containerStatus = me.getPanelSurProv(),
                store = grid.getStore();
        
        if(Ext.isEmpty(id)){
            
            store.proxy.extraParams.id = '';
            
            
        }else{
            
            store.proxy.extraParams.id = id;
            
            
        }
                
                
        grid.setLoading('Buscando...');
        store.loadData([], false);
        store.load({
            callback: function() {      
                grid.setLoading(false);
                
                    


            var sb = containerStatus.getComponent('statusbarTotales');
            var err = sb.getComponent('msgErr');

            sb.showBusy();
        
        

                  
                    err.update('');


                    sb.setStatus({
                        iconCls: '',
                        text: ''
                    });
                
            }
        });
        
        
        
    },
    
    buscaProducto:function(){
        
         var me = this, 
        gridP = me.getGridProveedores(),
        records = gridP.getSelectionModel().getSelection(),
        form = me.getFormProveedores().getForm(),
        grid = me.getGridProductos(),
           
                store = grid.getStore();
         
         var record = records[0];

        var proveedor = record.get('ID_CLIENTE');
        
         store.proxy.extraParams.proveedor = proveedor;
                                                                        
                
        grid.setLoading('Buscando...');
        store.loadData([], false);
        store.load({
            callback: function() {      
                grid.setLoading(false);
            }
        });
        
        
        
    }


});
