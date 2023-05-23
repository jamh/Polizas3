Ext.define('AppTransaccionSAT.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: [
         'StoreTransaccion',
         'StoreCFDI'
    ],
    models: [  
        'ModeloTransaccion',
        'ModeloCFDI'
       
    ],
    refs: [
        {
            ref: 'panelContenido',
            selector: 'panelcontenido'
        },

        {
            ref: 'formTransaccion',
            selector: 'formtransaccion'
        },
        {
            ref: 'appMain',
            selector: 'app-main'
        },
         {
            ref: 'gridTransaccion',
            selector: 'gridtransaccion'
        }

    ],
    views: [

        'Main',
        'FormTransaccion',
        'PanelContenido',
        'GridTransaccion',
        'WindowTransaccion'
    ],
    
    tipoPoliza:null,
    numeroPoliza:null,
    fechaPoliza:null,
    secPoliza:null,
    ctaPoliza:null,
    jsonDetPolizas:null,
    windowParent: null,
    
    init: function() {

        var me = this;
        me.control({


            formtransaccion: {
                afterrender: function() {
                     
               //     me.buscaTransaccion(); 
                   
                    
                },
                
                saveTransaccion:function(btn){
                    me.saveTransaccion(btn);
                },
                 
                deleteTransaccion:function(btn){
                    me.deleteTransaccion(btn);
                }
                ,
                 findCompNal:function(){
                            me.findCompNal();
                 }

            },
            
            gridtransaccion:{
                    
                    afterrender: function() {
                     
                    me.findTransaccion(); 
                   
                    
                },
                
                addTransaccion: function(btn){
                    
                    me.addTransaccion(btn);
                    
                },
                 borrarTransaccion:function(btn){
             
                      me.deleteTransaccion(btn);
                 },
                  itemdblclick: function() {
                       me.editTransaccion();
                  },
                          
                 relacionarDetPol:function(btn){
             
                      me.relacionarDetPol(btn);
                 },
                 quitarRelacionarDetPol:function(btn){
             
                      me.quitarRelacionarDetPol(btn);
                 },
                 cleanFiltersTr:function(){
                      me.cleanFiltersTr();
                 }
                
        
            }


        });
    },
    cleanFiltersTr:function(){
        var me =this,
        grid = me.getGridTransaccion();
        grid.filters.clearFilters();
    },
    findCompNal:function(){
        var me = this,
        form1 = me.getFormTransaccion(),
          basicForm = form1.getForm();
           var storecfdi = basicForm.findField('txtUUID_CFDItrans').getStore();
                
           storecfdi.proxy.extraParams.tipoPoliza = this.tipoPoliza;
           storecfdi.proxy.extraParams.numero = this.numeroPoliza;
           storecfdi.proxy.extraParams.fecha = this.fechaPoliza;
           
//           var storeProveedor = basicForm.findField('txtBENEFtrans').getStore();
//                
//           storeProveedor.proxy.extraParams.tipoPoliza = this.tipoPoliza;
//           storeProveedor.proxy.extraParams.numero = this.numeroPoliza;
//           storeProveedor.proxy.extraParams.fecha = this.fechaPoliza;
         //  storecfdi.proxy.extraParams.query = '';
         
//         storecfdi.loadData([], false);
//        storecfdi.load({
//            callback: function() {
//               // grid.setLoading(false);
//            }
//        });

        
    },
    
    addTransaccion: function(){
        
        
          var me = this,
               
               
                grid = me.getGridTransaccion(),
                store = grid.getStore();
      
            var view = Ext.widget('windowtransaccion');
        view.setTitle('Crear Transaccion');
        var form = view.down('formtransaccion').getForm();
        //form.findField('estructuraCuenta').setValue(this.companiaSession);
        //form.findField('txtAccion').setValue('I');
    },
    
     cierraWindow: function() {
//        msgOut("Cierra window");
        var me = this;
        if (me.windowParent) {
            me.windowParent.close();
        }
    },
            
      findTransaccion: function() {

        var me = this,
                grid = me.getGridTransaccion(),
                store = grid.getStore();
//        if (Ext.isEmpty(cuenta))
//            cuenta = '';
        store.proxy.extraParams.tipoPoliza = this.tipoPoliza;
        store.proxy.extraParams.numero = this.numeroPoliza;
        store.proxy.extraParams.fecha = this.fechaPoliza;
        store.proxy.extraParams.sec = this.secPoliza;
     

        grid.setLoading('Buscando...');
        store.loadData([], false);
        store.load({
            callback: function() {
                grid.setLoading(false);
            }
        });
    },
      saveTransaccion:function(btn){

        var me = this,
        form1 = btn.up('formtransaccion'),
        win = form1.up('window'),
       // basicForm = form1.getForm();
       //  form1 = me.getFormTransaccion(),
          basicForm = form1.getForm();
          var id = basicForm.findField('txtIDtrans').getValue();

         msgOut('tipo'+id);
            
              if (basicForm.isValid()) {
                form1.setLoading("Guardando Datos...");
                basicForm.submit({
                   // timeout:30000,
                    success: function(form, action) {
                        if(!Ext.isEmpty(action.result))
                        Ext.Msg.alert('Guardado', action.result.msg);
                        form1.setLoading(false);
                        win.close();
                        me.findTransaccion();
                        
                     //   me.cierraWindow();
                       

                    },
                    failure: function(form, action) {
                       
                        if(!Ext.isEmpty(action.result))
                        Ext.Msg.alert('Error', action.result.msg);
                        form1.setLoading(false);
                       
                    },
                     callback: function(records, operation, val3) {
                   
                    
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
    
    deleteTransaccion: function(btn){

             var me = this,
              grid = me.getGridTransaccion(),     
              records = grid.getSelectionModel().getSelection();

             var record = records[0];
             
               if (Ext.isEmpty(record)) {
                    msgBoxErr("Error", "No ha seleccionado la transaccion a borrar");
                    return;

                }
             
             var id = record.get('ID');
      // var   form1 = btn.up('formcxpotros'),
       // win = form1.up('window'),
       // basicForm = form1.getForm();
      //   form1 = me.getFormTransaccion(),
       //   basicForm = form1.getForm();
        //  var id = basicForm.findField('txtIDtrans').getValue();

         console.log('tipo'+id);
            
                    //  basicForm.reset();

                grid.setLoading("Borrando Datos...");
                
                 Ext.Ajax.request({
                url: 'Transaccion/deleteTransaccion',
                timeout: 60000,
                scope: this,
                params: {
                    data: this.jsonDetPolizas, 
                    id: id,
                    tipoPoliza: this.tipoPoliza,
                    fecha:this.fechaPoliza,
                    numero:this.numeroPoliza,
                    sec:this.secPoliza

                },
                success: function(response) {
                    
                 
                    
                    var text = response.responseText;
                    

                },
                callback: function(a, b, c) {
                   
                    if (Ext.isEmpty(c.responseText)) {
                        msgBoxErr('Error', 'Error al Eliminar');
                        grid.setLoading(false);
                        return;
                       
                    }
                    var res = Ext.decode(c.responseText);
                    if (res.success) {

                        msgBox('Borrado', 'Borrado con Exito');
//                      basicForm.findField('txtNUMERO_POLtrans').setValue(this.numeroPoliza);
//                      basicForm.findField('txtTIPO_POLtrans').setValue(this.tipoPoliza);
//                      basicForm.findField('txtFECHA_POLtrans').setValue(this.fechaPoliza);
//                      basicForm.findField('txtSEC_POLtrans').setValue(this.secPoliza);
//                      basicForm.findField('txtNumCtatrans').setValue(this.ctaPoliza);
                        grid.setLoading(false);
                        me.findTransaccion();
                       // me.cierraWindow();
                        
                    }else{
                        
                             var mensajeERR = '';
                    
                    for (var i = 0; i < res.dataErr.length;i++){
                        
                        
                        mensajeERR = mensajeERR + res.dataErr[i].msgErr + ' ,';
                       
                        
                    }
                        msgBox('Relacion', mensajeERR);
                        grid.setLoading(false);
                        //me.findTransaccion();                  

                        
                    }
                }
            });
           
            
 
        
    },
    
     relacionarDetPol: function(btn){

             var me = this,
              grid = me.getGridTransaccion(),     
              records = grid.getSelectionModel().getSelection();

             var record = records[0];
             
               if (Ext.isEmpty(record)) {
                    msgBoxErr("Error", "No ha seleccionado la transaccion a relacionar");
                    return;

                }
             
             var id = record.get('ID');

        // msgOut('tipo'+id);
            
                    //  basicForm.reset();

                grid.setLoading("Relacionando Datos...");
                
                 Ext.Ajax.request({
                url: 'Transaccion/relacionTransaccion',
                timeout: 60000,
                scope: this,
                params: {
                    data: this.jsonDetPolizas, 
                    id: id,
                    tipoPoliza: this.tipoPoliza,
                    fecha:this.fechaPoliza,
                    numero:this.numeroPoliza,
                    sec:this.secPoliza

                },
                success: function(response) {
                    
                 
                    
                    var text = response.responseText;
                    

                },
                callback: function(a, b, c) {
                   
                    if (Ext.isEmpty(c.responseText)) {
                        msgBoxErr('Error', 'Error al Relacionar');
                        grid.setLoading(false);
                        return;
                       
                    }
                    var res = Ext.decode(c.responseText);
                    if (res.success) {
                        
                        console.log(res);

                        msgBox('Relacion', 'Relacionado con Exito');
//                      basicForm.findField('txtNUMERO_POLtrans').setValue(this.numeroPoliza);
//                      basicForm.findField('txtTIPO_POLtrans').setValue(this.tipoPoliza);
//                      basicForm.findField('txtFECHA_POLtrans').setValue(this.fechaPoliza);
//                      basicForm.findField('txtSEC_POLtrans').setValue(this.secPoliza);
//                      basicForm.findField('txtNumCtatrans').setValue(this.ctaPoliza);
                        grid.setLoading(false);
                        me.findTransaccion();
                       // me.cierraWindow();
                        
                    }else{
                   
                    
                     var mensajeERR = '';
                    
                    for (var i = 0; i < res.dataErr.length;i++){
                        
                        
                        mensajeERR = mensajeERR + res.dataErr[i].msgErr + ' ,';
                       
                        
                    }
                        msgBox('Relacion', mensajeERR);
                        grid.setLoading(false);
                        //me.findTransaccion();
                         
                        
                    }
                }
            });
           
            
 
        
    },
    
    editTransaccion: function(btn){
        var me = this,
        // form1 = me.getFormTransaccion(),
         grid = me.getGridTransaccion(),     
              records = grid.getSelectionModel().getSelection();

            
         // basicForm = form1.getForm();
  
          var record = records[0];
  
//         
//        Ext.Ajax.request({
//            url: 'process/data/BuscaTransaccionSat',
//            method: 'GET',
//             params: {
//                
//                // compania:compania,
//                 tipoPoliza: this.tipoPoliza,
//                 fecha:this.fechaPoliza,
//                 numeroPol:this.numeroPoliza,
//                 sec:this.secPoliza
//
//            },
//            scope: this,
//            callback: function(records, operation, success) {
//                if (Ext.isEmpty(success.responseText))
//                    return;
//                var val = Ext.decode(success.responseText);
//                if (Ext.isEmpty(val))
//                    return;
//                if (val.success) {
                    
                   var id = record.get('ID');
//                   var numPolTra = val.data[0].NUMERO_POL;
//                   var tipoPolTra = val.data[0].TIPO_POL;
//                   var fechaPolTra = val.data[0].FECHA_POL;
//                   var secPol = val.data[0].SEC_POL;
//                   var origenPago = val.data[0].ORIGEN_PAGO; 
//                   var tDocPago = val.data[0].T_DOC_PAGO; 
//                   var folioPago = val.data[0].FOLIO_PAGO; 
//                   var secPago = val.data[0].SEC_PAGO;
//                   var numCta = val.data[0].NUM_CTA;
//                   var desCta = val.data[0].DES_CTA;
//                   var concepto = val.data[0].CONCEPTO; 
//                   var debe = val.data[0].DEBE; 
//                   var haber = val.data[0].HABER;
                   var tipo = record.get('TIPO');
                   var uuidCfdi = record.get('UUID_CFDI');
                   var rfc = record.get('RFC'); 
                   var cfdCbbSerie = record.get('CFD_CBB_SERIE');
                   var cfdCbbNumFol = record.get('CFD_CBB_NUMFOL');
                   var numFactExt = record.get('NUM_FACT_EXT');
                   var taxId = record.get('TAX_ID');
                   var num = record.get('NUM');
                   var banEmisNal = record.get('BAN_EMIS_NAL');
                   var banEmisExt = record.get('BAN_EMIS_EXT');
                   var fechaTran = record.get('FECHA');
                   var benef = record.get('BENEF');
                   var ctaOri = record.get('CTA_ORI');
                   var bancoOriNal = record.get('BANCO_ORI_NAL');
                   var bancoOriExt = record.get('BANCO_ORI_EXT');
                   var ctaDest = record.get('CTA_DEST');
                   var bancoDestNal = record.get('BANCO_DEST_NAL');
                   var bancoDestExt = record.get('BANCO_DEST_EXT');
                   var metPagoPol = record.get('MET_PAGO_POL');
                   var montoTotal = record.get('MONTO_TOTAL');
                   var moneda = record.get('MONEDA');
                   var tipCam = record.get('TIP_CAMB');
                   var medPagoAux = record.get('MET_PAGO_AUX');
                   
                    var view = Ext.widget('windowtransaccion');
                    view.setTitle('Editar Transaccion');
                    var basicForm = view.down('formtransaccion').getForm();
                    
                    basicForm.findField('txtIDtrans').setValue(id);
//                    basicForm.findField('txtNUMERO_POLtrans').setValue(numPolTra);
//                    basicForm.findField('txtTIPO_POLtrans').setValue(tipoPolTra);
//                    basicForm.findField('txtFECHA_POLtrans').setValue(fechaPolTra);
//                    basicForm.findField('txtSEC_POLtrans').setValue(secPol);
//                    basicForm.findField('txtORIGEN_PAGOtrans').setValue(origenPago);
//                    basicForm.findField('txtT_DOC_PAGOtrans').setValue(tDocPago);
//                    basicForm.findField('txtFOLIO_PAGOtrans').setValue(folioPago);
//                    basicForm.findField('txtSEC_PAGOtrans').setValue(secPago);
//                    basicForm.findField('txtNumCtatrans').setValue(numCta);
//                    basicForm.findField('txtDesCtatrans').setValue(desCta);
//                    basicForm.findField('txtConceptotrans').setValue(concepto);
//                    basicForm.findField('txtDebetrans').setValue(debe);
//                    basicForm.findField('txtHabertrans').setValue(haber);
                    basicForm.findField('cboTipoTrans').setValue(tipo);
                    basicForm.findField('txtNUMtrans').setValue(num);
                    //basicForm.findField('txtBAN_EMIS_NALtrans').setValue(banEmisNal);
                    basicForm.findField('txtBAN_EMIS_EXTtrans').setValue(banEmisExt);
                    basicForm.findField('txtCTA_ORItrans').setValue(ctaOri);
                    //basicForm.findField('txtBANCO_ORI_NALtrans').setValue(bancoOriNal);
                    basicForm.findField('txtBANCO_ORI_EXTtrans').setValue(bancoOriExt);
                    basicForm.findField('txtCTA_DESTtrans').setValue(ctaDest);
                   // basicForm.findField('txtBANCO_DEST_NALtrans').setValue(bancoDestNal);
                    basicForm.findField('txtBANCO_DEST_EXTtrans').setValue(bancoDestExt);
                   // basicForm.findField('txtMET_PAGO_POLtrans').setValue(metPagoPol);
                    basicForm.findField('txtFECHAtrans').setValue(fechaTran);
                    basicForm.findField('txtBENEFtrans').setValue(benef);
                    basicForm.findField('txtNUM_FACT_EXTtrans').setValue(numFactExt);
                    basicForm.findField('txtTAX_IDtrans').setValue(taxId);
                    basicForm.findField('txtUUID_CFDItrans').setValue(uuidCfdi);
                    basicForm.findField('txtCFD_CBB_SERIEtrans').setValue(cfdCbbSerie);
                    basicForm.findField('txtCFD_CBB_NUMFOLtrans').setValue(cfdCbbNumFol);
                    basicForm.findField('txtRFCtrans').setValue(rfc);
                    basicForm.findField('txtMONTO_TOTALtrans').setValue(montoTotal);
                    //basicForm.findField('txtMONEDAtrans').setValue(moneda);
                    basicForm.findField('txtTIP_CAMBtrans').setValue(tipCam);
                  //  basicForm.findField('txtMET_PAGO_AUXtrans').setValue(medPagoAux);
                    
                    
                     var storeFormBanEmisNal = basicForm.findField('txtBAN_EMIS_NALtrans').getStore();
                         storeFormBanEmisNal.proxy.extraParams.query = '';
                         
                         storeFormBanEmisNal.load({
                             callback:function(val1){
                                  
                                 msgOut(val1);
                                
                                    basicForm.findField('txtBAN_EMIS_NALtrans').setValue(banEmisNal);
                             }
                         });
                         
                      var storeFormBancoOriNal = basicForm.findField('txtBANCO_ORI_NALtrans').getStore();
                         storeFormBancoOriNal.proxy.extraParams.query = '';
                         
                         storeFormBancoOriNal.load({
                             callback:function(val1){
                                  
                                 msgOut(val1);
                                
                                    basicForm.findField('txtBANCO_ORI_NALtrans').setValue(bancoOriNal);
                             }
                         });
                         
                       var storeFormBancoDestNal = basicForm.findField('txtBANCO_DEST_NALtrans').getStore();
                         storeFormBancoDestNal.proxy.extraParams.query = '';
                         
                         storeFormBancoDestNal.load({
                             callback:function(val1){
                                  
                                 msgOut(val1);
                                
                                    basicForm.findField('txtBANCO_DEST_NALtrans').setValue(bancoDestNal);
                             }
                         });
                         
                       var storeFormMetPagoPol = basicForm.findField('txtMET_PAGO_POLtrans').getStore();
                         storeFormMetPagoPol.proxy.extraParams.query = '';
                         
                         storeFormMetPagoPol.load({
                             callback:function(val1){
                                  
                                 msgOut(val1);
                                
                                    basicForm.findField('txtMET_PAGO_POLtrans').setValue(metPagoPol);
                             }
                         });
                         var storeFormMetPagoAux = basicForm.findField('txtMET_PAGO_AUXtrans').getStore();
                         storeFormMetPagoAux.proxy.extraParams.query = '';
                         
                         storeFormMetPagoAux.load({
                             callback:function(val1){
                                  
                                 msgOut(val1);
                                
                                    basicForm.findField('txtMET_PAGO_AUXtrans').setValue(medPagoAux);
                             }
                         });
                         
                       var storeFormDivisa = basicForm.findField('txtMONEDAtrans').getStore();
                         storeFormDivisa.proxy.extraParams.query = '';
                         
                         storeFormDivisa.load({
                             callback:function(val1){
                                  
                                 msgOut(val1);
                                
                                    basicForm.findField('txtMONEDAtrans').setValue(moneda);
                             }
                         });
                         
                         
                         
                         
                    
                     if(tipo === 'CompNal'){
                                 Ext.getCmp('txtUUID_CFDItrans').setVisible(true);
                                 Ext.getCmp('txtRFCtrans').setVisible(true);
                                 Ext.getCmp('txtMONTO_TOTALtrans').setVisible(true);
                                 Ext.getCmp('txtMONEDAtrans').setVisible(true);
                                 Ext.getCmp('txtMET_PAGO_AUXtrans').setVisible(true);
                                 Ext.getCmp('txtTIP_CAMBtrans').setVisible(true);
                                  Ext.getCmp('txtCTA_ORItrans').setVisible(false);
                                   Ext.getCmp('txtFECHAtrans').setVisible(false);
                                    Ext.getCmp('txtBENEFtrans').setVisible(false);
                                  
                            }else{
                                 Ext.getCmp('txtUUID_CFDItrans').setVisible(false);
                                

                                  
                                // Ext.getCmp('txtRFCtrans').setVisible(false);
                                // Ext.getCmp('txtMONTO_TOTALtrans').setVisible(false);
                                // Ext.getCmp('txtMONEDAtrans').setVisible(false);
                                // Ext.getCmp('txtTIP_CAMBtrans').setVisible(false);
                            }
                            
                            if(tipo === 'CompNalOtr'){
                                 Ext.getCmp('txtCFD_CBB_SERIEtrans').setVisible(true);
                                 Ext.getCmp('txtCFD_CBB_NUMFOLtrans').setVisible(true);
                                 Ext.getCmp('txtRFCtrans').setVisible(true);
                                 Ext.getCmp('txtMONTO_TOTALtrans').setVisible(true);
                                 Ext.getCmp('txtMONEDAtrans').setVisible(true);
                                  Ext.getCmp('txtMET_PAGO_AUXtrans').setVisible(true);
                                 Ext.getCmp('txtTIP_CAMBtrans').setVisible(true);
                                  Ext.getCmp('txtCTA_ORItrans').setVisible(false);
                                   Ext.getCmp('txtFECHAtrans').setVisible(false);
                                    Ext.getCmp('txtBENEFtrans').setVisible(false);
                            }else{
                                 Ext.getCmp('txtCFD_CBB_SERIEtrans').setVisible(false);
                                 Ext.getCmp('txtCFD_CBB_NUMFOLtrans').setVisible(false);
               
                                // Ext.getCmp('txtRFCtrans').setVisible(false);
                                // Ext.getCmp('txtMONTO_TOTALtrans').setVisible(false);
                                // Ext.getCmp('txtMONEDAtrans').setVisible(false);
                                // Ext.getCmp('txtTIP_CAMBtrans').setVisible(false);
                            } 
                            if(tipo === 'CompExt'){
                                 Ext.getCmp('txtNUM_FACT_EXTtrans').setVisible(true);
                                 Ext.getCmp('txtTAX_IDtrans').setVisible(true);
                                  Ext.getCmp('txtMET_PAGO_AUXtrans').setVisible(true);
                                 Ext.getCmp('txtRFCtrans').setVisible(false);
                                 Ext.getCmp('txtMONTO_TOTALtrans').setVisible(true);
                                 Ext.getCmp('txtMONEDAtrans').setVisible(true);
                                 Ext.getCmp('txtTIP_CAMBtrans').setVisible(true);
                                  Ext.getCmp('txtCTA_ORItrans').setVisible(false);
                                   Ext.getCmp('txtFECHAtrans').setVisible(false);
                                    Ext.getCmp('txtBENEFtrans').setVisible(false);
                            }else{
                                Ext.getCmp('txtNUM_FACT_EXTtrans').setVisible(false);
                                 Ext.getCmp('txtTAX_IDtrans').setVisible(false);
                                
                                 
                               
                            }
                            
                            if(tipo === 'Cheque'){
                                 Ext.getCmp('txtBAN_EMIS_EXTtrans').setVisible(true);
                                 Ext.getCmp('txtBAN_EMIS_NALtrans').setVisible(true);
                                 Ext.getCmp('txtNUMtrans').setVisible(true);
                                 Ext.getCmp('txtCTA_ORItrans').setVisible(true);
                                 Ext.getCmp('txtFECHAtrans').setVisible(true);
                                 Ext.getCmp('txtBENEFtrans').setVisible(true);
                                 Ext.getCmp('txtRFCtrans').setVisible(true);
                                 Ext.getCmp('txtMONTO_TOTALtrans').setVisible(true);
                                 Ext.getCmp('txtMONEDAtrans').setVisible(true);
                                 Ext.getCmp('txtTIP_CAMBtrans').setVisible(true);
                                  Ext.getCmp('txtMET_PAGO_AUXtrans').setVisible(false);
                            }else{
                                 Ext.getCmp('txtBAN_EMIS_EXTtrans').setVisible(false);
                                 Ext.getCmp('txtBAN_EMIS_NALtrans').setVisible(false);
                                 Ext.getCmp('txtNUMtrans').setVisible(false);
                                // Ext.getCmp('txtCTA_ORItrans').setVisible(false);
                                 //Ext.getCmp('txtFECHAtrans').setVisible(false);
                                // Ext.getCmp('txtBENEFtrans').setVisible(false);
                                 
                               
                            }
                            
                            if(tipo === 'Transferen'){
                                
                                
                                 Ext.getCmp('txtCTA_ORItrans').setVisible(true);
                                  Ext.getCmp('txtMET_PAGO_AUXtrans').setVisible(false);
                                 Ext.getCmp('txtBANCO_ORI_NALtrans').setVisible(true);
                                 Ext.getCmp('txtBANCO_ORI_EXTtrans').setVisible(true);
                                 Ext.getCmp('txtCTA_DESTtrans').setVisible(true);
                                 Ext.getCmp('txtBANCO_DEST_NALtrans').setVisible(true);
                                 Ext.getCmp('txtBANCO_DEST_EXTtrans').setVisible(true);
                                 
                                 Ext.getCmp('txtFECHAtrans').setVisible(true);
                                 Ext.getCmp('txtBENEFtrans').setVisible(true);
                                 Ext.getCmp('txtRFCtrans').setVisible(true);
                                 Ext.getCmp('txtMONTO_TOTALtrans').setVisible(true);
                                 Ext.getCmp('txtMONEDAtrans').setVisible(true);
                                 Ext.getCmp('txtTIP_CAMBtrans').setVisible(true);
                            }else{
                                 
                                 Ext.getCmp('txtBANCO_ORI_NALtrans').setVisible(false);
                                 Ext.getCmp('txtBANCO_ORI_EXTtrans').setVisible(false);
                                 Ext.getCmp('txtCTA_DESTtrans').setVisible(false);
                                 Ext.getCmp('txtBANCO_DEST_NALtrans').setVisible(false);
                                 Ext.getCmp('txtBANCO_DEST_EXTtrans').setVisible(false);
                                 
                               
                            }
                            if(tipo === 'OtrMetodoP'){
                                 
                                 Ext.getCmp('txtMET_PAGO_POLtrans').setVisible(true);
                                 Ext.getCmp('txtFECHAtrans').setVisible(true);
                                 Ext.getCmp('txtBENEFtrans').setVisible(true);
                                 Ext.getCmp('txtRFCtrans').setVisible(true);
                                 Ext.getCmp('txtMONTO_TOTALtrans').setVisible(true);
                                 Ext.getCmp('txtMONEDAtrans').setVisible(true);
                                 Ext.getCmp('txtTIP_CAMBtrans').setVisible(true);
                                  Ext.getCmp('txtCTA_ORItrans').setVisible(false);
                                   Ext.getCmp('txtMET_PAGO_AUXtrans').setVisible(false);
                            }else{
                                
                                Ext.getCmp('txtMET_PAGO_POLtrans').setVisible(false);
                                 
                               
                            }
                            
                     
                   
//                } else if (!val.success) {
//                      basicForm.findField('txtNUMERO_POLtrans').setValue(this.numeroPoliza);
//                      basicForm.findField('txtTIPO_POLtrans').setValue(this.tipoPoliza);
//                      basicForm.findField('txtFECHA_POLtrans').setValue(this.fechaPoliza);
//                      basicForm.findField('txtSEC_POLtrans').setValue(this.secPoliza);
//                      basicForm.findField('txtNumCtatrans').setValue(this.ctaPoliza);
//                }
//                
//                
//                
//                
//            },
//            timeout: 30000
//
//        });
 
         
  

          
        
    },
    
    quitarRelacionarDetPol: function(btn){
        
        
             var me = this,
              grid = me.getGridTransaccion(),     
              records = grid.getSelectionModel().getSelection();

             var record = records[0];
             
               if (Ext.isEmpty(record)) {
                    msgBoxErr("Error", "No ha seleccionado la transaccion a quitar");
                    return;

                }
             
             var id = record.get('ID_TRANSACCION');
             
              if (Ext.isEmpty(id)) {
                    msgBoxErr("Error", "No hay transacciones relacionadas");
                    return;

                }

        // msgOut('tipo'+id);
            
                    //  basicForm.reset();

                grid.setLoading("Quitando Relacion...");
                
                 Ext.Ajax.request({
                url: 'Transaccion/quitarRelacionTransaccionDet',
                timeout: 60000,
                scope: this,
                params: {
                     data: this.jsonDetPolizas, 
                    id: id,
                    tipoPoliza: this.tipoPoliza,
                    fecha:this.fechaPoliza,
                    numero:this.numeroPoliza,
                    sec:this.secPoliza

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
//                      basicForm.findField('txtNUMERO_POLtrans').setValue(this.numeroPoliza);
//                      basicForm.findField('txtTIPO_POLtrans').setValue(this.tipoPoliza);
//                      basicForm.findField('txtFECHA_POLtrans').setValue(this.fechaPoliza);
//                      basicForm.findField('txtSEC_POLtrans').setValue(this.secPoliza);
//                      basicForm.findField('txtNumCtatrans').setValue(this.ctaPoliza);
                        grid.setLoading(false);
                        me.findTransaccion();
                       // me.cierraWindow();
                        
                    }else{
                        
                         var mensajeERR = '';
                    
                    for (var i = 0; i < res.dataErr.length;i++){
                        
                        
                        mensajeERR = mensajeERR + res.dataErr[i].msgErr + ' ,';
                       
                        
                    }
                        msgBox('Relacion', mensajeERR);
                        grid.setLoading(false);
                        //me.findTransaccion();
                         
                        
                    }
                }
            });
           
            
 
        
    }
    
   
});
