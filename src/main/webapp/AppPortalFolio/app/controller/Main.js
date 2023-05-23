Ext.define('AppPortalFolio.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: [
        'StoreErpFecomprobantes',
        'StoreCxpOtros'

    ],
    models: [
        'ModelErpFecomprobantes',
        'ModeloCxpOtros'

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
            
        },
        {
            ref:'formCXPOtros',
            selector:'formcxpotros'
            
        },
         {
            ref:'gridCxpOtros',
            selector:'gridcxpotros'
            
        },
         {
            ref:'formDatosBancExt',
            selector:'formdatosbancext'
            
        },
         {
            ref: 'appMain',
            selector: 'app-main'
        }

    ],
    rfcProv:null,
    id_cliente : null,
    proveedor: null,
    views: [
        'GridErpFecomprobantes',
        'Main',
        'WindowErpFecomprobantes',
        'FormErpFecomprobantes',
        'FormArchivos',
        'FormDatosBancarios',
        'WindowDatosBancarios',
        'WindowCXPOtros',
        'FormCXPOtros',
        'GridCxpOtros',
        'FormDatosBancExt',
        'WindowDatosBancExt'


    ],
    accion: '',
    init: function () {
        var me = this;
        
        
          
                    Ext.Ajax.request({
                                    url: 'process/data/avisosPortal',
                                    method: 'GET',
                                    scope: this,
                                    params:{
                                     //   compania: 'T2O',
                                       
                                    },
                                    callback: function(records, operation, success) {
                                        if (Ext.isEmpty(success.responseText))
                                            return;
                                        var val = Ext.decode(success.responseText);
                                        if (Ext.isEmpty(val))
                                            return;
                                        if (val.success) {
                                            
                                            console.log(val.data.length);
                                            
                                         var av = '';
                                            
                                          for ( var i=0;i<val.data.length;i++) { 
                                              console.log(i);
                                              var aviso = val.data[i].AVISO;
                                              
                                              var indice = i+1;
                                              
                                              av = av + '<p style=”text-align: justify;”><h3>'+indice+': '+aviso+'</h3></p><p>';
                                        }
                                           console.log(av);
                                           
                                              Ext.define('secondWindow',{
                                            extend:'Ext.window.Window',
                                            title:'Avisos',
                                            height:300,
                                            autoScroll: true,
                                            width:800,
                                            modal:true,
                                            html:'<div style="background-image: url(http://appferaz1.com/Polizas3/resources/images/logo_T2O_fondo.jpg); height: 350px; width: 900px; border: 1px solid black; background-repeat: no-repeat;background-position: 250px 30px;">'+av+'</div>'
                                            // html: '<body background="Imagen.JPG" bgcolor=aqua>'+av+'</body>'
                                           // afterShow:function(){

                                                //win.setLoading('Buscando...');

                                            //}
                                        });
                                        var win= new secondWindow;
                                        
                                           win.show();

                                        } else if (!val.success) {
                                            
                                            
                                           // msgBoxErr('Compania', 'Error compañia no encontrada');
                                        }
                                    },
                                    timeout: 30000

                                });
        
        
        this.control({
            
        
            
            gridcxpotros:{
                  addDatBancExt:function(){
                    
                    me.findDatosBanExt();
                    
                },
                
                verArchivo:function(){
                    
                    me.verArchivo();
                },
                
                 itemdblclick: function() {
                  
                    //me.editCXPOtras();
                    
                },
                
                deleteArchivoOtros:function(){
                    
                    me.deleteArchivoOtros();
                },
                
                cleanFiltersOtro:function(){
                    
                    me.cleanFiltersOtro();
                },
                
                 addCXP:function(){
                    
                   me.addCXP();  
                    
                },
                
                 afterrender: function (e, eOpts){
                     
                     console.log('after');
                    me.findCXPOtras();
                 //   me.findCompania();
                },
                 select: function (view, model, index) {
                    me.cargaDatosCXP(view, model, index);
                },
                 exitApp:function(){
                    
                    me.exitApp();
                    
                }
                
                
                
            },
            
            formcxpotros:{
                
                guardaCXPOtros:function(btn){
                    
                    me.guardaCXPOtros(btn);
                }
                
                
            },
            
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
            },
            
            formdatosbancext:{
                saveDatBanExt:function(btn){
                    me.saveDatBanExt(btn);
                    //me.saveArchivo(btn);
                }
            }


        });
    },
    
         verArchivo: function(btn) {

        var me = this,
                grid = me.getGridCxpOtros(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];
      
         
         if (Ext.isEmpty(record)) {
             
             msgBoxErr('Error','Debe seleccionar un archivo.');
             
             return;
             
             
         }
            
             var archivo = record.get('ARCHIVO');
             var companiaOtros = record.get('COMPANIA_OTROS');
//           
       
       

            var string = Ext.String.format(
                    'http://' + window.location.host + '/carga_erp/otras/' + companiaOtros + '/' + archivo
                    );

           window.open(string);

        return string;

       
            
            
        

       

    },
    
        deleteArchivoOtros: function(){
        
                var me = this,
                grid = me.getGridCxpOtros(),
                records = grid.getSelectionModel().getSelection(),
                storeArch = grid.getStore();

        var selection = grid.getSelectionModel().getSelection();

        //var record = selection[0];

        if (Ext.isEmpty(selection)) {
            msgBoxErr("Error", "No ha seleccionado ningun registro");
            return;
        }
        
       
        
                
        Ext.MessageBox.show({
            title: 'Cancelar Registro',
            msg: 'Esta seguro que desea borrar el registro?',
            icon: Ext.MessageBox.WARNING,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {


                    var data = [];
                    var err = '0';

                    for (var i = 0; i < selection.length; i++) {
                         
                        var record = selection[i];
                     if (record.data.ESTATUS_CXP_OTROS === 'IMP' || record.data.ESTATUS_CXP_OTROS === 'TES' || record.data.ESTATUS_CXP_OTROS === 'FG' || record.data.ESTATUS_CXP_OTROS === 'PAG'){
                         
                         msgBoxErr("Error", "Existen datos procesados en tesoreria, imposible eliminar registro, favor de verficar");
                         err = '1';
                         return;
                         
                         
                         
                     }
                     
                    
                     
                        data.push(record.data);

                        msgOut('data', data);


                    }
                    
                    if (err === '1'){
                        
                        return;
                        
                    }



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
                        url: 'Pagos/deleteOtros',
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
                                me.findCXPOtras();
                                
                                  var detailPanel = Ext.getCmp('detailPanelCXCOtras');
                                  detailPanel.update('Seleccione un registro para ver sus detalles.');
                    

                            } else {

                                msgBoxErr('Error en el Borrado', res.msg);

                            }
                        }
                    });


                }

            }

        });
        
    },
    
        editCXPOtras:function(btn){
      
       var me = this,
                grid = me.getGridCxpOtros(),
                records = grid.getSelectionModel().getSelection();
        
        var record = records[0];
//        
//        var tipoCxp = record.get('TIPO_CXP');
//        
//        if(tipoCxp === 'C'){
//            
//            msgBox('Editar','Este registro no se puede editar por este medio');
//            
//        }else{
            
              if (record.get('ESTATUS_CXP_OTROS') === 'IMP' || record.get('ESTATUS_CXP_OTROS') === 'TES' || record.get('ESTATUS_CXP_OTROS') === 'FG' || record.get('ESTATUS_CXP_OTROS') === 'PAG'){
                         
                         msgBoxErr("Error", "Existen datos procesadas en tesoreria, imposible modificar, favor de verficar");
                         return;
                         
                         
                     }
                     
     
           
            
               var compania = record.get('COMPANIA_OTROS');
             var numero = record.get('NUMERO_OTROS');
             var tipoGasto = record.get('TIPO_GASTO_OTROS');
             var fecha = record.get('FECHA_OTROS');
             var beneficiario = record.get('NOMBRE_EMISOR_OTROS');
             var moneda = record.get('MONEDA_OTROS');
             var subtotal = record.get('SUBTOTAL_OTROS');
             var otrosImpuestos = record.get('OTROS_IMPUESTOS_OTROS');
             var iva = record.get('IVA_OTROS');
             var total = record.get('TOTAL_OTROS');
             var conceptoCxp = record.get('CONCEPTO_OTROS');
             var cto = record.get('NOMCC_OTROS');
             var fechaV = record.get('CXP_FECHA_OTROS');
             var rfcEmisor = record.get('RFC_EMISOR_OTROS');
             var tipoCambio = record.get('TIPO_CAMBIO_OTROS');
             var descripcion = record.get('DESCRIPCION_OTRAS_OTROS');
             var facturable = record.get('FACTURABLE_OTROS');
             
             
             
             
       
      
           var view = Ext.widget('windowcxpotros');
        view.setTitle('Agregar CXP');
        var form = view.down('formcxpotros').getForm();
        form.findField('txtCompania').setValue(compania);
        form.findField('id').setValue(numero);
        form.findField('cboTipo').setValue(tipoGasto);
        form.findField('cxpFecha').setValue(fecha);
        
   
            form.findField('cxpBeneficiario').setVisible(true);
       
            
            form.findField('cxpBeneficiario').setValue(beneficiario);
        
        
       var storeFacturable = form.findField('cboFacturable').getStore();
                          
                         storeFacturable.load({
                             callback:function(val1){
                                  
                                
                                    form.findField('cboFacturable').setValue(facturable);
                             }
                         });
        
        form.findField('cboMoneda').setValue(moneda);
        
        form.findField('txtIMPORTE').setValue(subtotal);
        form.findField('txtOTROS_IMPUESTOS').setValue(otrosImpuestos);
        form.findField('txtIVA').setValue(iva);
        form.findField('txtTOTAL').setValue(total);
        form.findField('cxpVencFecha').setValue(fechaV);
        form.findField('cxpRFCEmisor').setValue(rfcEmisor);
         form.findField('txtTIPO_CAMBIO').setValue(tipoCambio);
         form.findField('cxpDescripcionOtras').setValue(descripcion);
         
         if (moneda === 'MXN'){
             
             form.findField('txtTIPO_CAMBIO').setVisible(false);
             
         }else{
             
             form.findField('txtTIPO_CAMBIO').setVisible(true);
         }
        
        
        
        
            
            
     //   }
      
        
    },
    
        guardaCXPOtros:function(btn){
 //VIEW        var view = Ext.widget('windowcxpotros');
//        view.setTitle('Descarga Sat');
        //   me.findRfcCfdi(btn);
        var me = this;
       var   form1 = btn.up('formcxpotros'),
        win = form1.up('window'),
        basicForm = form1.getForm();

        var rfcStr = basicForm.findField('cxpRFCEmisor').getValue();
        var tipoGasto = basicForm.findField('cboTipo').getValue();
        var compania = basicForm.findField('txtCompania').getValue();

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
                        
                        
                        //me.findCxpOtros();
                        
                    // if(tipoGasto === 'R' || tipoGasto === 'A'){    
                    //    me.enviaCorreoOtros(action.result.msg);
                    //    
                    //    
                    // }
                        
                         var detailPanel = Ext.getCmp('detailPanelCXCOtras');
                    detailPanel.update('Seleccione un registro para ver sus detalles.');
                    
                    me.findCXPOtras();
                    
                    console.log(ppCompa);
                    console.log(action.result.msg);
                    console.log(rfcStr);
                    
                     me.enviaCorreoIngresoGastos(ppCompa,action.result.msg,'O',ppUsr);
                       
                       

                    },
                    failure: function(form, action) {
                        form1.setLoading(false);
                        if(!Ext.isEmpty(action.result))
                        Ext.Msg.alert('Error', action.result.msg);
                        form1.setLoading(false);
                    },
                     callback: function(records, operation, val3) {
                   
                    
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
    
    addCXP:function(){
        
        var me = this;

        var view = Ext.widget('windowcxpotros');
        view.setTitle('Agregar CXP');
        
         var basicForm = view.down('formcxpotros').getForm();
         
         
         
         var storeMoneda = basicForm.findField('cboMoneda').getStore();
                          storeMoneda.proxy.extraParams.query = "";
                         storeMoneda.load({
                             callback:function(val1){
                                  
                                
                                    basicForm.findField('cboMoneda').setValue('MXN');
                             }
                         });
        
  

             basicForm.findField('cxpRFCEmisor').setValue(me.rfcProv);
             basicForm.findField('cxpBeneficiario').setValue(me.proveedor);
             basicForm.findField('cxpID_CLIENTE').setValue(me.id_cliente);
             
             
    
    
        
    },
    
    findDatosBanExt:function(){
        
         var me = this;
        
   
        var view = Ext.widget('windowdatosbancext');
        view.setTitle('Editar Datos Bancarios');
        var form = view.down('formdatosbancext').getForm();
        
        view.down('formdatosbancext').setLoading('Buscando...');
        
        console.log(ppUsr);

        Ext.getBody().on("contextmenu", Ext.emptyFn, null, {preventDefault: true});
        Ext.Ajax.request({
            url: 'process/data/BuscaDatosBancariosExt',
            method: 'GET',
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var iban = val.data[0].IBAN;
                    var swift = val.data[0].SWIFT;
                
                    
                    form.findField('portalFolIBAN').setValue(iban);
                    form.findField('portalFolSWIFT').setValue(swift);
                    
                   
                   view.down('formdatosbancext').setLoading(false);

                } else if (!val.success) {
                    msgBoxErr('Compania', 'Error datos de bancos no encontrados');
                    view.down('formdatosbancext').setLoading(false);
                }
            },
            timeout: 30000

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
                
                
                var redirect = '/Polizas3/PortalProveedor';
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
                            msgBoxErr('Carga', 'No se puede completar la carga de las facturas. D&iacute;a no valido.');
                        }
                   }
                    
                  

                } else if (!val.success) {
                    msgBoxErr('Error', 'Error permisos de carga no encontrados');
                }
            },
            timeout: 30000

        });
    },
    
    saveDatBanExt:function(btn){
        
          var me = this,
                form = btn.up('formdatosbancext'),
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
                    
                  //  me.findErpFecomprobantes();
                    me.findCompania();
                    
                     
                  //  var detailPanel = Ext.getCmp('detailPanelCXC');
                  //  detailPanel.update('Seleccione un registro para ver sus detalles.');

                  
                 //   var detailPanel2 = Ext.getCmp('detailPanelBanc');
                 //   detailPanel2.update('Seleccione un registro para ver sus detalles.');
                    
                    me.enviaCorreoDatosBan();

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
                    
                    me.findErpFecomprobantes();
                    me.findCompania();
                    
                     
                    var detailPanel = Ext.getCmp('detailPanelCXC');
                    detailPanel.update('Seleccione un registro para ver sus detalles.');

                  
                    var detailPanel2 = Ext.getCmp('detailPanelBanc');
                    detailPanel2.update('Seleccione un registro para ver sus detalles.');
                    
                    me.enviaCorreoDatosBan();

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
                     url:'Uploadprov/savePortalFolio',
                   
                    success: function(form2, action) {

                        Ext.Msg.alert('Guardado', 'El Archivo se guardo Correctamente:' + action.result.msg);

                        form.setLoading(false);
                        //me.enviaCorreo(basicForm.findField('COMPANIA').getValue(),action.result.msg);
                        me.enviaCorreoIngresoGastos(ppCompa,action.result.msg,'F',ppUsr);
                        
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
    
    enviaCorreoIngresoGastos:function(compania,numero,origen,usuario){
        
        Ext.Ajax.request({
            url: '/CorreosAvisos/correoIngresoGasto.jsp',
         // url: '/CorreosAvisos/correoTesoreria.jsp',
             params: {
                 compania : compania,
                 numero:numero,
                 origen:origen,
                 usuario:usuario
                
        
            },
            method: 'GET',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
              
                
             }
            //timeout: 30000

        });
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
    
    enviaCorreoDatosBan: function(){
        
         Ext.Ajax.request({
            url: '/CorreosAvisos/correoBatDatosBan.jsp',
     
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
            '<li><b>Fecha Vencimiento:</b> {FECHA_VENC_CXP}</li>',
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
    
        cargaDatosCXP: function (view, model, index) {
        var me = this,
                grid = me.getGridCxpOtros();
        var selection = grid.getSelectionModel().getSelection();

        var record = selection[0];

        if (Ext.isEmpty(record.data.TIPO_CAMBIO_OTROS)) 
            record.data.TIPO_CAMBIO_OTROS = 1;
        
        if (Ext.isEmpty(record.data.SUBTOTAL_OTROS)) 
            record.data.SUBTOTAL_OTROS = 0;
        
        if (Ext.isEmpty(record.data.IVA_OTROS)) 
            record.data.IVA_OTROS = 0;
        
        if (Ext.isEmpty(record.data.OTROS_IMPUESTOS_OTROS)) 
            record.data.OTROS_IMPUESTOS_OTROS = 0;
//        
//        if (Ext.isEmpty(record.data.SERIE)) 
//            record.data.SERIE = 'N/A';
//        
//        if (Ext.isEmpty(record.data.TIPO_CAMBIO)) 
//            record.data.TIPO_CAMBIO = 'N/A';
//        
//        if (Ext.isEmpty(record.data.MONEDA)) 
//            record.data.MONEDA = 'N/A';

        var bookTplMarkup = [
            '<div class="feDetails">',
            '<ul>',
            '<li><b>Fecha:</b> {FECHA_OTROS}</li>',
            '<li><b>RFC:</b> {RFC_EMISOR_OTROS}</li>',
            '<li><b>Beneficiario:</b> {NOMBRE_EMISOR_OTROS}</li>',
            '<li><b>Descripcion:</b> {DESCRIPCION_OTROS}</li>',
            '<li><b>Moneda:</b> {MONEDA_OTROS}</li>',
            '<li><b>Tipo Cambio:</b> {TIPO_CAMBIO_OTROS}</li>',
            '</ul>',
            '</div>',
            '<div class="feDetails2">',
            '<ul>',
            '<li><b>Subtotal:</b>  {SUBTOTAL_OTROS}</li>',
            '<li><b>Iva:</b>  {IVA_OTROS}</li>',
            '<li><b>Otros Impuestos:</b>  {OTROS_IMPUESTOS_OTROS}</li>',
            '<li><b>Total:</b>  {TOTAL_OTROS}</li>',
            '<li><b>Fecha Vencimiento:</b>  {FECHA_VENC_CXP_OTRAS}</li>',
            '</ul>',
            '</div>'





        ];
     
        var bookTpl = Ext.create('Ext.Template', bookTplMarkup);
        var detailPanel = Ext.getCmp('detailPanelCXCOtras');
        detailPanel.update(bookTpl.apply(record.data));
        
        
        
    },
    
    cleanFiltersOtro: function(){
          var me = this,
                grid = me.getGridCxpOtros();

        grid.filters.clearFilters();
        
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
    
    findCXPOtras:function(){
         var me = this,
                grid = me.getGridCxpOtros(),
                storeGrid = grid.getStore();


       console.log('buscando otras');
       

        storeGrid.loadData([], false);

        storeGrid.load({
            callback: function (val1, val2, val3) {
                    
                    
            }
        });
        
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
            url: 'process/data/PortalDatosProveedorExt',
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
                            grid2=me.getGridCxpOtros(),
                             form =me.getFormArchivos().getForm();
                    //grid.setTitle(val.data[0].NOMBRE1);
                    grid.setTitle(val.data[0].USUARIO +'-'+val.data[0].PROVEEDOR);
                    grid2.setTitle(val.data[0].USUARIO +'-'+val.data[0].PROVEEDOR);
                    form.findField('archCOMPANIA').setValue(val.data[0].NOMBRE);
                    form.findField('idCOMPANIA').setValue(val.data[0].COMPANIA);
                    form.findField('archCORFC').setValue(val.data[0].RFC_EMPRESA);
                    form.findField('archCORFCPROV').setValue(val.data[0].RFC);
                    
                    
                    me.rfcProv = val.data[0].RFC;
                    me.id_cliente = val.data[0].ID_CLIENTE;
                    me.proveedor = val.data[0].PROVEEDOR;
                    
                    me.permisosPortal();
                    me.permisosTipoProv(val.data[0].TIPO_CUENTA,grid);

                } else if (!val.success) {
                    msgBoxErr('Compania', 'Error compañia no encontrada');
                }
            },
            timeout: 30000

        });
    },
    
    permisosTipoProv:function(tipoCuenta,grid){
        
          var me = this,
                        tab = me.getAppMain();
                                  
                                  
                              
//                                  tab.items.items[1].tab.hide();//.tab.hide();
//                     
//                                  tab.items.items[2].tab.hide();//.tab.hide();
//                                  tab.items.items[4].tab.hide();//.tab.hide();
//                                  tab.setActiveTab(5);
//                                  tab.setActiveTab(3);
                                
        
           
           if (tipoCuenta === 'EXT'){
                 tab.items.items[0].tab.hide();//.tab.hide();
                                   tab.setActiveTab(1);
               
              // grid.down('button[itemId=btnEditBanc]').setVisible(false); 
               
           }else{
               
              // grid.down('button[itemId=btnEditBancExt]').setVisible(false); 
               
                 tab.items.items[1].tab.hide();//.tab.hide();
                                   tab.setActiveTab(0);
               
               
           }
             
                     
        
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
