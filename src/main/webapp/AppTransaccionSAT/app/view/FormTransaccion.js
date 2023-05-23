Ext.define('AppTransaccionSAT.view.FormTransaccion', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formtransaccion',
    itemId: 'formtransaccion',
    xtype: 'formtransaccion',
    //title:'Transaccion SAT',
    flex:1,
//    bodyPadding: 5,
//    width: 600,
    defaultType: 'textfield',
    autoScroll: true,
    layout: 'form',
    url: 'Transaccion/saveTransaccion',
    initComponent: function() {
        var me = this;
        
        var storeTipo = Ext.create('AppTransaccionSAT.store.StoreTipo');
        var storeDivisa = Ext.create('AppTransaccionSAT.store.StoreDivisa');
        var storeBancosSat = Ext.create('AppTransaccionSAT.store.StoreBancosSat');
        var storeMetPago = Ext.create('AppTransaccionSAT.store.StoreSatMetPago');
        var storeCfdi = Ext.create('AppTransaccionSAT.store.StoreCFDI');
        var storeProveedores = Ext.create('AppTransaccionSAT.store.StoreProveedor');
        var storeBancoProveedore = Ext.create('AppTransaccionSAT.store.StoreBancoProveedore');
        
//        
//        var estatus = Ext.create('Ext.data.Store', {
//            fields: ['estatus', 'name'],
//                data : [
//                    {"estatus":"1", "name":"1-Activo"},
//                    {"estatus":"0", "name":"0-Inactivo"}
//                 
//                ]
//            });
            
       

           

        Ext.apply(me, {

            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Compania',
                    name: 'txtCOMPANIAtrans',
                    id: 'txtCOMPANIAtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'id',
                    name: 'txtIDtrans',
                    id: 'txtIDtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true
                },
                
//                {
//                    xtype: 'textfield',
//                    fieldLabel: 'Numero Poliza',
//                    name: 'txtNUMERO_POLtrans',
//                    id: 'txtNUMERO_POLtrans',
//                    allowBlank: true,
//                    readOnly: false,
//                    hidden:true
//                },
//                {
//                    xtype: 'textfield',
//                    fieldLabel: 'Tipo Poliza',
//                    name: 'txtTIPO_POLtrans',
//                    id: 'txtTIPO_POLtrans',
//                    allowBlank: true,
//                    readOnly: false,
//                    hidden:true
//                },
//                          {
//                     xtype:'datefield',
//                    name: 'txtFECHA_POLtrans',
//                    fieldLabel: 'Fecha Poliza',
//                    id: 'txtFECHA_POLtrans',
//                    submitFormat: 'd/m/Y',
//                    format: 'd/m/Y',
//                    allowBlank: true,
//                    hidden:true,
//                     renderer:// Ext.util.Format.dateRenderer('d/m/Y'),
//                            function(value) {
//                                if(Ext.isDate(value)){
//                                    return   Ext.Date.format(value, 'd/m/Y');
//                                }else {
//                            return  value;
//                        }
////                        if (Ext.isEmpty(value.length)) {
////                            return   Ext.Date.format(value, 'd/m/Y');
////                        } else {
////                            return  value;
////                        }
//                    }
//
//             
//                 },
//                {
//                    xtype: 'textfield',
//                    fieldLabel: 'Sec Poliza',
//                    name: 'txtSEC_POLtrans',
//                    id: 'txtSEC_POLtrans',
//                    allowBlank: true,
//                    readOnly: false,
//                    hidden:true
//                },
                 {
                    xtype: 'textfield',
                    fieldLabel: 'Origen Pago',
                    name: 'txtORIGEN_PAGOtrans',
                    id: 'txtORIGEN_PAGOtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true
                },
                 {
                    xtype: 'textfield',
                    fieldLabel: 'Tipo Documento P',
                    name: 'txtT_DOC_PAGOtrans',
                    id: 'txtT_DOC_PAGOtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true
                },
                 {
                    xtype: 'textfield',
                    fieldLabel: 'Folio Pago',
                    name: 'txtFOLIO_PAGOtrans',
                    id: 'txtFOLIO_PAGOtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true
                },
                 {
                    xtype: 'textfield',
                    fieldLabel: 'Sec Pago',
                    name: 'txtSEC_PAGOtrans',
                    id: 'txtSEC_PAGOtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true
                },
                        
                
                {
                    xtype: 'textfield',
                    fieldLabel: 'Numero Cuenta',
                    name: 'txtNumCtatrans',
                    id: 'txtNumCtatrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true
                },
                 {
                    xtype: 'textfield',
                    fieldLabel: 'Des Ctas',
                    name: 'txtDesCtatrans',
                    id: 'txtDesCtatrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true
                },
                 {
                    xtype: 'textfield',
                    fieldLabel: 'Concepto',
                    name: 'txtConceptotrans',
                    id: 'txtConceptotrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true
                },
                 {
                    xtype: 'numberfield',
                    fieldLabel: 'Debe',
                    name: 'txtDebetrans',
                    id: 'txtDebetrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
                    allowDecimal: true,
                    forcePrecision: true, 
                    decimalPrecision: 2,
                    decimalSeparator: '.'
                },
                 {
                    xtype: 'numberfield',
                    fieldLabel: 'Haber',
                    name: 'txtHabertrans',
                    id: 'txtHabertrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
                    allowDecimal: true,
                    forcePrecision: true, 
                    decimalPrecision: 2,
                    decimalSeparator: '.'
                },
               
      
                {
                    xtype: 'combobox',
                    id: 'cboTipoTrans',
                    name: 'cboTipoTrans',
                    fieldLabel: 'Tipo',
                    itemId: 'cboTipoTrans',
                    displayField: 'NOMBRE',
                    valueField: 'ID',
                    typeAhead: true,
                    minChars: 0,
                    editable: false,
                    store: storeTipo,
                    allowBlank: false,
                     listeners: {
                        scope: this,
                        'select': function(valor) {
                            if (Ext.isEmpty(valor.value))
                                return;
                           
                           if(valor.value === 'CompNal'){
                                this.fireEvent("findCompNal");
                                 Ext.getCmp('txtUUID_CFDItrans').setVisible(true);
                                 Ext.getCmp('txtRFCtrans').setVisible(true);
                                 Ext.getCmp('txtMONTO_TOTALtrans').setVisible(true);
                                 Ext.getCmp('txtMONEDAtrans').setVisible(true);
                                 Ext.getCmp('txtMET_PAGO_AUXtrans').setVisible(true);
                                 Ext.getCmp('txtTIP_CAMBtrans').setVisible(true);
                                  Ext.getCmp('txtCTA_ORItrans').setVisible(false);
                                   Ext.getCmp('txtFECHAtrans').setVisible(false);
                                    Ext.getCmp('txtBENEFtrans').setVisible(false);
                                    
                                    Ext.getCmp('txtRFCtrans').setValue('');
                                    Ext.getCmp('txtTIP_CAMBtrans').setValue('');
                                    Ext.getCmp('txtMONEDAtrans').setValue('');
                                    Ext.getCmp('txtMONTO_TOTALtrans').setValue('');
                                    Ext.getCmp('txtUUID_CFDItrans').setValue('');
                                      Ext.getCmp('txtNUMtrans').setValue('');
                                    Ext.getCmp('txtBAN_EMIS_NALtrans').setValue('');
                                    Ext.getCmp('txtBAN_EMIS_EXTtrans').setValue('');
                                    Ext.getCmp('txtCTA_ORItrans').setValue('');
                                    Ext.getCmp('txtBANCO_ORI_NALtrans').setValue('');
                                    Ext.getCmp('txtBANCO_ORI_EXTtrans').setValue('');
                                    Ext.getCmp('txtCTA_DESTtrans').setValue('');
                                    Ext.getCmp('txtBANCO_DEST_NALtrans').setValue('');
                                    Ext.getCmp('txtBANCO_DEST_EXTtrans').setValue('');
                                    Ext.getCmp('txtMET_PAGO_POLtrans').setValue('');
                                    Ext.getCmp('txtFECHAtrans').setValue('');
                                    Ext.getCmp('txtFECHAtrans').setValue('');
                                    Ext.getCmp('txtBENEFtrans').setValue('');
                                    Ext.getCmp('txtNUM_FACT_EXTtrans').setValue('');
                                    Ext.getCmp('txtTAX_IDtrans').setValue('');
                                    Ext.getCmp('txtCFD_CBB_SERIEtrans').setValue('');
                                    Ext.getCmp('txtCFD_CBB_NUMFOLtrans').setValue('');
                                    Ext.getCmp('txtMET_PAGO_AUXtrans').setValue('');
                                    
                                  
                                  
                            }else{
                                 Ext.getCmp('txtUUID_CFDItrans').setVisible(false);
                                
                                // Ext.getCmp('txtRFCtrans').setVisible(false);
                                // Ext.getCmp('txtMONTO_TOTALtrans').setVisible(false);
                                // Ext.getCmp('txtMONEDAtrans').setVisible(false);
                                // Ext.getCmp('txtTIP_CAMBtrans').setVisible(false);
                            }
                            
                            if(valor.value === 'CompNalOtr'){
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
                                     Ext.getCmp('txtRFCtrans').setValue('');
                                     Ext.getCmp('txtTIP_CAMBtrans').setValue('');
                                    Ext.getCmp('txtMONEDAtrans').setValue('');
                                    Ext.getCmp('txtMONTO_TOTALtrans').setValue('');
                                    Ext.getCmp('txtUUID_CFDItrans').setValue('');
                                      Ext.getCmp('txtNUMtrans').setValue('');
                                    Ext.getCmp('txtBAN_EMIS_NALtrans').setValue('');
                                    Ext.getCmp('txtBAN_EMIS_EXTtrans').setValue('');
                                    Ext.getCmp('txtCTA_ORItrans').setValue('');
                                    Ext.getCmp('txtBANCO_ORI_NALtrans').setValue('');
                                    Ext.getCmp('txtBANCO_ORI_EXTtrans').setValue('');
                                    Ext.getCmp('txtCTA_DESTtrans').setValue('');
                                    Ext.getCmp('txtBANCO_DEST_NALtrans').setValue('');
                                    Ext.getCmp('txtBANCO_DEST_EXTtrans').setValue('');
                                    Ext.getCmp('txtMET_PAGO_POLtrans').setValue('');
                                    Ext.getCmp('txtFECHAtrans').setValue('');
                                    Ext.getCmp('txtFECHAtrans').setValue('');
                                    Ext.getCmp('txtBENEFtrans').setValue('');
                                    Ext.getCmp('txtNUM_FACT_EXTtrans').setValue('');
                                    Ext.getCmp('txtTAX_IDtrans').setValue('');
                                    Ext.getCmp('txtCFD_CBB_SERIEtrans').setValue('');
                                    Ext.getCmp('txtCFD_CBB_NUMFOLtrans').setValue('');
                                    Ext.getCmp('txtMET_PAGO_AUXtrans').setValue('');
                            }else{
                                 Ext.getCmp('txtCFD_CBB_SERIEtrans').setVisible(false);
                                 Ext.getCmp('txtCFD_CBB_NUMFOLtrans').setVisible(false);
                                
                                // Ext.getCmp('txtRFCtrans').setVisible(false);
                                // Ext.getCmp('txtMONTO_TOTALtrans').setVisible(false);
                                // Ext.getCmp('txtMONEDAtrans').setVisible(false);
                                // Ext.getCmp('txtTIP_CAMBtrans').setVisible(false);
                            } 
                            if(valor.value === 'CompExt'){
                                 Ext.getCmp('txtNUM_FACT_EXTtrans').setVisible(true);
                                 Ext.getCmp('txtTAX_IDtrans').setVisible(true);
                                 Ext.getCmp('txtRFCtrans').setVisible(false);
                                 Ext.getCmp('txtMONTO_TOTALtrans').setVisible(true);
                                 Ext.getCmp('txtMONEDAtrans').setVisible(true);
                                 Ext.getCmp('txtMET_PAGO_AUXtrans').setVisible(true);
                                 Ext.getCmp('txtTIP_CAMBtrans').setVisible(true);
                                  Ext.getCmp('txtCTA_ORItrans').setVisible(false);
                                   Ext.getCmp('txtFECHAtrans').setVisible(false);
                                    Ext.getCmp('txtBENEFtrans').setVisible(false);
                                     Ext.getCmp('txtRFCtrans').setValue('');
                                     Ext.getCmp('txtTIP_CAMBtrans').setValue('');
                                    Ext.getCmp('txtMONEDAtrans').setValue('');
                                    Ext.getCmp('txtMONTO_TOTALtrans').setValue('');
                                    Ext.getCmp('txtUUID_CFDItrans').setValue('');
                                      Ext.getCmp('txtNUMtrans').setValue('');
                                    Ext.getCmp('txtBAN_EMIS_NALtrans').setValue('');
                                    Ext.getCmp('txtBAN_EMIS_EXTtrans').setValue('');
                                    Ext.getCmp('txtCTA_ORItrans').setValue('');
                                    Ext.getCmp('txtBANCO_ORI_NALtrans').setValue('');
                                    Ext.getCmp('txtBANCO_ORI_EXTtrans').setValue('');
                                    Ext.getCmp('txtCTA_DESTtrans').setValue('');
                                    Ext.getCmp('txtBANCO_DEST_NALtrans').setValue('');
                                    Ext.getCmp('txtBANCO_DEST_EXTtrans').setValue('');
                                    Ext.getCmp('txtMET_PAGO_POLtrans').setValue('');
                                    Ext.getCmp('txtFECHAtrans').setValue('');
                                    Ext.getCmp('txtFECHAtrans').setValue('');
                                    Ext.getCmp('txtBENEFtrans').setValue('');
                                    Ext.getCmp('txtNUM_FACT_EXTtrans').setValue('');
                                    Ext.getCmp('txtTAX_IDtrans').setValue('');
                                    Ext.getCmp('txtCFD_CBB_SERIEtrans').setValue('');
                                    Ext.getCmp('txtCFD_CBB_NUMFOLtrans').setValue('');
                                    Ext.getCmp('txtMET_PAGO_AUXtrans').setValue('');
                            }else{
                                Ext.getCmp('txtNUM_FACT_EXTtrans').setVisible(false);
                                 Ext.getCmp('txtTAX_IDtrans').setVisible(false);
                                 
                                 
                               
                            }
                            
                            if(valor.value === 'Cheque'){
                                 this.fireEvent("findCompNal");
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
                                   Ext.getCmp('txtRFCtrans').setValue('');
                                   Ext.getCmp('txtTIP_CAMBtrans').setValue('');
                                    Ext.getCmp('txtMONEDAtrans').setValue('');
                                    Ext.getCmp('txtMONTO_TOTALtrans').setValue('');
                                    Ext.getCmp('txtUUID_CFDItrans').setValue('');
                                      Ext.getCmp('txtNUMtrans').setValue('');
                                    Ext.getCmp('txtBAN_EMIS_NALtrans').setValue('');
                                    Ext.getCmp('txtBAN_EMIS_EXTtrans').setValue('');
                                    Ext.getCmp('txtCTA_ORItrans').setValue('');
                                    Ext.getCmp('txtBANCO_ORI_NALtrans').setValue('');
                                    Ext.getCmp('txtBANCO_ORI_EXTtrans').setValue('');
                                    Ext.getCmp('txtCTA_DESTtrans').setValue('');
                                    Ext.getCmp('txtBANCO_DEST_NALtrans').setValue('');
                                    Ext.getCmp('txtBANCO_DEST_EXTtrans').setValue('');
                                    Ext.getCmp('txtMET_PAGO_POLtrans').setValue('');
                                    Ext.getCmp('txtFECHAtrans').setValue('');
                                    Ext.getCmp('txtFECHAtrans').setValue('');
                                    Ext.getCmp('txtBENEFtrans').setValue('');
                                    Ext.getCmp('txtNUM_FACT_EXTtrans').setValue('');
                                    Ext.getCmp('txtTAX_IDtrans').setValue('');
                                    Ext.getCmp('txtCFD_CBB_SERIEtrans').setValue('');
                                    Ext.getCmp('txtCFD_CBB_NUMFOLtrans').setValue('');
                                    Ext.getCmp('txtMET_PAGO_AUXtrans').setValue('');
                            }else{
                                 Ext.getCmp('txtBAN_EMIS_EXTtrans').setVisible(false);
                                 Ext.getCmp('txtBAN_EMIS_NALtrans').setVisible(false);
                                 Ext.getCmp('txtNUMtrans').setVisible(false);
                                // Ext.getCmp('txtCTA_ORItrans').setVisible(false);
                                 //Ext.getCmp('txtFECHAtrans').setVisible(false);
                                // Ext.getCmp('txtBENEFtrans').setVisible(false);
                                 
                               
                            }
                            
                            if(valor.value === 'Transferen'){
                                
                                 this.fireEvent("findCompNal");
                                 Ext.getCmp('txtCTA_ORItrans').setVisible(true);
                                 
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
                                  Ext.getCmp('txtMET_PAGO_AUXtrans').setVisible(false); 
                                   Ext.getCmp('txtRFCtrans').setValue('');
                                   Ext.getCmp('txtTIP_CAMBtrans').setValue('');
                                    Ext.getCmp('txtMONEDAtrans').setValue('');
                                    Ext.getCmp('txtMONTO_TOTALtrans').setValue('');
                                    Ext.getCmp('txtUUID_CFDItrans').setValue('');
                                      Ext.getCmp('txtNUMtrans').setValue('');
                                    Ext.getCmp('txtBAN_EMIS_NALtrans').setValue('');
                                    Ext.getCmp('txtBAN_EMIS_EXTtrans').setValue('');
                                    Ext.getCmp('txtCTA_ORItrans').setValue('');
                                    Ext.getCmp('txtBANCO_ORI_NALtrans').setValue('');
                                    Ext.getCmp('txtBANCO_ORI_EXTtrans').setValue('');
                                    Ext.getCmp('txtCTA_DESTtrans').setValue('');
                                    Ext.getCmp('txtBANCO_DEST_NALtrans').setValue('');
                                    Ext.getCmp('txtBANCO_DEST_EXTtrans').setValue('');
                                    Ext.getCmp('txtMET_PAGO_POLtrans').setValue('');
                                    Ext.getCmp('txtFECHAtrans').setValue('');
                                    Ext.getCmp('txtFECHAtrans').setValue('');
                                    Ext.getCmp('txtBENEFtrans').setValue('');
                                    Ext.getCmp('txtNUM_FACT_EXTtrans').setValue('');
                                    Ext.getCmp('txtTAX_IDtrans').setValue('');
                                    Ext.getCmp('txtCFD_CBB_SERIEtrans').setValue('');
                                    Ext.getCmp('txtCFD_CBB_NUMFOLtrans').setValue('');
                                    Ext.getCmp('txtMET_PAGO_AUXtrans').setValue('');
                            }else{
                                 
                                 Ext.getCmp('txtBANCO_ORI_NALtrans').setVisible(false);
                                 Ext.getCmp('txtBANCO_ORI_EXTtrans').setVisible(false);
                                 Ext.getCmp('txtCTA_DESTtrans').setVisible(false);
                                 Ext.getCmp('txtBANCO_DEST_NALtrans').setVisible(false);
                                 Ext.getCmp('txtBANCO_DEST_EXTtrans').setVisible(false);
                                 
                               
                            }
                            if(valor.value === 'OtrMetodoP'){
                                  this.fireEvent("findCompNal");
                                 Ext.getCmp('txtMET_PAGO_POLtrans').setVisible(true);
                                 Ext.getCmp('txtFECHAtrans').setVisible(true);
                                 Ext.getCmp('txtBENEFtrans').setVisible(true);
                                 Ext.getCmp('txtRFCtrans').setVisible(true);
                                 Ext.getCmp('txtMONTO_TOTALtrans').setVisible(true);
                                 Ext.getCmp('txtMONEDAtrans').setVisible(true);
                                 Ext.getCmp('txtTIP_CAMBtrans').setVisible(true);
                                  Ext.getCmp('txtCTA_ORItrans').setVisible(false);
                                   Ext.getCmp('txtMET_PAGO_AUXtrans').setVisible(false); 
                                   Ext.getCmp('txtRFCtrans').setValue('');
                                   Ext.getCmp('txtTIP_CAMBtrans').setValue('');
                                    Ext.getCmp('txtMONEDAtrans').setValue('');
                                    Ext.getCmp('txtMONTO_TOTALtrans').setValue('');
                                    Ext.getCmp('txtUUID_CFDItrans').setValue('');
                                    Ext.getCmp('txtNUMtrans').setValue('');
                                    Ext.getCmp('txtBAN_EMIS_NALtrans').setValue('');
                                    Ext.getCmp('txtBAN_EMIS_EXTtrans').setValue('');
                                    Ext.getCmp('txtCTA_ORItrans').setValue('');
                                    Ext.getCmp('txtBANCO_ORI_NALtrans').setValue('');
                                    Ext.getCmp('txtBANCO_ORI_EXTtrans').setValue('');
                                    Ext.getCmp('txtCTA_DESTtrans').setValue('');
                                    Ext.getCmp('txtBANCO_DEST_NALtrans').setValue('');
                                    Ext.getCmp('txtBANCO_DEST_EXTtrans').setValue('');
                                    Ext.getCmp('txtMET_PAGO_POLtrans').setValue('');
                                    Ext.getCmp('txtFECHAtrans').setValue('');
                                    Ext.getCmp('txtFECHAtrans').setValue('');
                                    Ext.getCmp('txtBENEFtrans').setValue('');
                                    Ext.getCmp('txtNUM_FACT_EXTtrans').setValue('');
                                    Ext.getCmp('txtTAX_IDtrans').setValue('');
                                    Ext.getCmp('txtCFD_CBB_SERIEtrans').setValue('');
                                    Ext.getCmp('txtCFD_CBB_NUMFOLtrans').setValue('');
                                    Ext.getCmp('txtMET_PAGO_AUXtrans').setValue('');

                            }else{
                                
                                Ext.getCmp('txtMET_PAGO_POLtrans').setVisible(false);
                                 
                               
                            }
                            
                            
                            
                        }
                     }


                },
                
               
                {
                    xtype: 'textfield',
                    fieldLabel: 'Num',
                    name: 'txtNUMtrans',
                    id: 'txtNUMtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
                     enforceMaxLength: true,
                     maxLength: 20
                },
//                        {
//                          xtype: 'textfield',
//                    fieldLabel: 'Ban Emis Nal',
//                    name: 'txtBAN_EMIS_NALtrans',
//                    id: 'txtBAN_EMIS_NALtrans',
//                    allowBlank: true,
//                    readOnly: false,
//                    hidden:true,
//                    enforceMaxLength: true,
//                     maxLength: 150
//                },
                        
                  {
                   
                        xtype: 'combobox',
                       
                        fieldLabel: 'Ban Emis Nal',
                        name: 'txtBAN_EMIS_NALtrans',
                        id: 'txtBAN_EMIS_NALtrans',
                        allowBlank: true,
                        readOnly: false,
                        hidden:true,
                        enforceMaxLength: true,
                        maxLength: 150,
                        store: storeBancosSat,
                        minChars: 3,
                        displayField: 'NOMBRE1',
                        valueField: 'CLAVE',
                        typeAhead: false,
                        validateOnChange: true,
                        hideTrigger: false,
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro el banco.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{CLAVE}</span><h3>{NOMBRE}</h3>';
                            }
                        },
                        listeners: {
                            scope: this,
                            select: function(value) {
                        
                            
                            }
                           
                        
                        
                       
                           
                        }//,
                        
                       // pageSize: 10
                    },
                
                        
                 {
                    xtype: 'textfield',
                    fieldLabel: 'Ban Emis Ext',
                    name: 'txtBAN_EMIS_EXTtrans',
                    id: 'txtBAN_EMIS_EXTtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
                    enforceMaxLength: true,
                     maxLength: 150
                },
                        
              
                        
                
                {
                    xtype: 'combobox',
                    fieldLabel: 'Banco Ori Nal',
                    name: 'txtBANCO_ORI_NALtrans',
                    id: 'txtBANCO_ORI_NALtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
                    enforceMaxLength: true,
                     maxLength: 150,
                     store: storeBancosSat,
                        minChars: 3,
                        displayField: 'NOMBRE1',
                        valueField: 'CLAVE',
                        typeAhead: false,
                        validateOnChange: true,
                        hideTrigger: false,
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro el banco.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{BANCO}</span><h3>{NOMBRE}</h3>';
                            }
                        },
                        listeners: {
                            scope: this,
                            select: function(value) {
                                
                                var cuentaBanco = value.valueModels[0].data.CUENTA_BANCO;
                               
                              if (!Ext.isEmpty(cuentaBanco)){
                                        
                                         Ext.getCmp('txtCTA_ORItrans').setValue(cuentaBanco);
                             
                               
                              }
                        
                        
                            
                            }
                           
                        
                        
                       
                           
                        }//,
                        
                       // pageSize: 10
                    },
                 {
                    xtype: 'textfield',
                    fieldLabel: 'Cta Ori',
                    name: 'txtCTA_ORItrans',
                    id: 'txtCTA_ORItrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
                    enforceMaxLength: true,
                     maxLength: 50
                },
               
                {
                    xtype: 'textfield',
                    fieldLabel: 'Banco Ori Ext',
                    name: 'txtBANCO_ORI_EXTtrans',
                    id: 'txtBANCO_ORI_EXTtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
                    enforceMaxLength: true,
                     maxLength: 150
                },
                
                 {
                    xtype: 'combobox',
                    fieldLabel: 'Benef',
                    name: 'txtBENEFtrans',
                    id: 'txtBENEFtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
                    enforceMaxLength: true,
                     maxLength: 300,
                     store: storeProveedores,
                        minChars: 3,
                        displayField: 'NOMBRE',
                        valueField: 'NOMBRE',
                        typeAhead: false,
                        validateOnChange: true,
                        hideTrigger: false,
                        
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro el Proveedor.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{ID_CLIENTE} - {NOMBRE}</span><h3>{RFC}</h3>';
                            }
                        },
                        listeners: {
                            scope: this,
                            select: function(value) {
                        
                             
                               var rfc = value.valueModels[0].data.RFC;
                               var cuentaClave = value.valueModels[0].data.CUENTA_CLAVE;
                               var bancoPro = value.valueModels[0].data.BANCO; 
                               
                              if (!Ext.isEmpty(rfc)){
                                        
                                         Ext.getCmp('txtRFCtrans').setValue(rfc);
                                         Ext.getCmp('txtCTA_DESTtrans').setValue(cuentaClave);
                                       
                                        storeBancoProveedore.proxy.extraParams.query = '';

                                        storeBancoProveedore.load({
                                            callback:function(val1){

                                                   Ext.getCmp('txtBANCO_DEST_NALtrans').setValue(bancoPro);
                                            }
                                        });
                                        
                             
                               
                              }
                        
                            }
                        }
                           
                        
                        
                       
                        
                },
                
                        
                {
                    xtype: 'combobox',
                    fieldLabel: 'Banco Dest Nal',
                    name: 'txtBANCO_DEST_NALtrans',
                    id: 'txtBANCO_DEST_NALtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
                    enforceMaxLength: true,
                     maxLength: 150,
                    store: storeBancoProveedore,
                        minChars: 3,
                        displayField: 'NOMBRE1',
                        valueField: 'CLAVE',
                        typeAhead: false,
                        validateOnChange: true,
                        hideTrigger: false,
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro el banco.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{CLAVE}</span><h3>{NOMBRE}</h3><h5>{NOMBRE_PROV}-{RFC}</h5>';
                            }
                        },
                        listeners: {
                            scope: this,
                            select: function(value) {
                        
                             
                               var cuentaClabe = value.valueModels[0].data.CUENTA_CLAVE;
                               
                              if (!Ext.isEmpty(cuentaClabe)){
                                        
                                         Ext.getCmp('txtCTA_DESTtrans').setValue(cuentaClabe);
                             
                               
                              }
                        
                            }
                        }
                        
                       // pageSize: 10
                    },
                 {
                    xtype: 'textfield',
                    fieldLabel: 'Cta Dest',
                    name: 'txtCTA_DESTtrans',
                    id: 'txtCTA_DESTtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
                    enforceMaxLength: true,
                     maxLength: 50
                },
                        
                {
                    xtype: 'textfield',
                    fieldLabel: 'Banco Dest Ext',
                    name: 'txtBANCO_DEST_EXTtrans',
                    id: 'txtBANCO_DEST_EXTtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
                    enforceMaxLength: true,
                     maxLength: 150
                },
                 {
                    xtype: 'combobox',
                    fieldLabel: 'Met Pago Pol',
                    name: 'txtMET_PAGO_POLtrans',
                    id: 'txtMET_PAGO_POLtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
                    enforceMaxLength: true,
                     maxLength: 300,
                     store: storeMetPago,
                        minChars: 3,
                        displayField: 'NOMBRE',
                        valueField: 'CLAVE',
                        typeAhead: false,
                        validateOnChange: true,
                        hideTrigger: false,
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro el banco.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{CLAVE}</span><h3>{CONCEPTO}</h3>';
                            }
                        },
                        listeners: {
                            scope: this,
                            select: function(value) {
                        
                            
                            }
                           
                        
                        
                       
                           
                        }//,
                        
           
                },
                        
                        
                        
                
                {
                     xtype:'datefield',
                    name: 'txtFECHAtrans',
                    fieldLabel: 'Fecha',
                    id: 'txtFECHAtrans',
                    submitFormat: 'd/m/Y',
                    format: 'd/m/Y',
                    allowBlank: true,
                    hidden:true,
                     renderer:// Ext.util.Format.dateRenderer('d/m/Y'),
                            function(value) {
                                if(Ext.isDate(value)){
                                    return   Ext.Date.format(value, 'd/m/Y');
                                }else {
                            return  value;
                        }
//                        if (Ext.isEmpty(value.length)) {
//                            return   Ext.Date.format(value, 'd/m/Y');
//                        } else {
//                            return  value;
//                        }
                    }

             
                 },
//                  {
//                    xtype: 'textfield',
//                    fieldLabel: 'Benef',
//                    name: 'txtBENEFtrans',
//                    id: 'txtBENEFtrans',
//                    allowBlank: true,
//                    readOnly: false,
//                    hidden:true,
//                    enforceMaxLength: true,
//                     maxLength: 300
//                },
                        
                
                        

                {
                    xtype: 'textfield',
                    fieldLabel: 'Num Fact Ext',
                    name: 'txtNUM_FACT_EXTtrans',
                    id: 'txtNUM_FACT_EXTtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
                    enforceMaxLength: true,
                     maxLength: 36
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Tax Id',
                    name: 'txtTAX_IDtrans',
                    id: 'txtTAX_IDtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
                    enforceMaxLength: true,
                     maxLength: 30
                },
                        
                {
                    xtype: 'combobox',
                    fieldLabel: 'UUID Cfdi',
                    name: 'txtUUID_CFDItrans',
                    id: 'txtUUID_CFDItrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
                    enforceMaxLength: true,
                     maxLength: 36,
                     store: storeCfdi,
                        minChars: 3,
                        displayField: 'UUID',
                        valueField: 'UUID',
                        typeAhead: false,
                        validateOnChange: true,
                        hideTrigger: false,
                        
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro el Factura.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{FOLIO} - {RFC_EMISOR}</span><h3>{NOMBRE_EMISOR}  ${TOTAL}</h3>';
                            }
                        },
                        listeners: {
                            scope: this,
                            select: function(value) {
                        
                               msgOut('TOTAL',value.valueModels[0].data.UUID);
                               msgOut('TOTAL2',value);
                               var countE = value.valueModels[0].data.COUNT_RFC_E;
                               var countR = value.valueModels[0].data.COUNT_RFC_R;
                               var rfcEmisor = value.valueModels[0].data.RFC_EMISOR;
                               var rfcReceptor = value.valueModels[0].data.RFC_RECEPTOR;
                               
                               if (Ext.isEmpty(countE)){
                                   
                                    if (Ext.isEmpty(countR)){
                                        

                                    }else{
                                        
                                        //manda r
                                        
                                         Ext.getCmp('txtRFCtrans').setValue(rfcReceptor);
                                    }
                                   
                                   
                               }else{
                                   
                                    if (Ext.isEmpty(countR)){
                                        
                                        //maanda e
                                         Ext.getCmp('txtRFCtrans').setValue(rfcEmisor);
                                    }
                                   
                                   
                                   
                                   
                               }
                               

                        
                                 Ext.getCmp('txtMONTO_TOTALtrans').setValue(value.valueModels[0].data.TOTAL);
                                 Ext.getCmp('txtTIP_CAMBtrans').setValue(value.valueModels[0].data.TIPO_CAMBIO);
                              //   Ext.getCmp('txtUUID_CFDItrans').setValue(value.valueModels[0].data.UUID);
                                 Ext.getCmp('txtMONEDAtrans').setValue(value.valueModels[0].data.MONEDA);
                     
                               
                            }
                           
                        
                        
                       
                           
                        }//,
                        
                },
                
                 {
                    xtype: 'textfield',
                    fieldLabel: 'CFD CBB SERIE',
                    name: 'txtCFD_CBB_SERIEtrans',
                    id: 'txtCFD_CBB_SERIEtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
                    enforceMaxLength: true,
                     maxLength: 10
                },
                 {
                    xtype: 'textfield',
                    fieldLabel: 'CFD CBB NUM FOLIO',
                    name: 'txtCFD_CBB_NUMFOLtrans',
                    id: 'txtCFD_CBB_NUMFOLtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
                    enforceMaxLength: true,
                     maxLength: 20
                },        
                
                 
                {
                    xtype: 'textfield',
                    fieldLabel: 'Rfc',
                    name: 'txtRFCtrans',
                    id: 'txtRFCtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
                    enforceMaxLength: true,
                     maxLength: 13
                },
                
                 {
                    xtype: 'numberfield',
                    fieldLabel: 'Monto Total',
                    name: 'txtMONTO_TOTALtrans',
                    id: 'txtMONTO_TOTALtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
                    allowDecimals: true,
                    //forcePrecision: true,
                    forceDecimals : true,
                    decimalPrecision: 2,
                    decimalSeparator: '.',
                      renderer:// Ext.util.Format.dateRenderer('d/m/Y'),
                      
                            function(value) {
                               return Ext.util.Format.number(value, '0.000');
                        }

                    
                     
                },
                 
                 {
                    xtype: 'combobox',
                     fieldLabel: 'Moneda',
                    name: 'txtMONEDAtrans',
                    id: 'txtMONEDAtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden: true,
                    displayField: 'NOMBRE',
                    valueField: 'CODIGO',
                  
                    store:storeDivisa,
                    listeners: {
                        'select': function(valor) {
                            
                            msgOut('valor'+valor.value);
                            
                      
                        }
                    }
                },
                        
                  {
                    xtype: 'numberfield',
                    fieldLabel: 'Tipo Cambio',
                    name: 'txtTIP_CAMBtrans',
                    id: 'txtTIP_CAMBtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
                    allowDecimal: true,
                    forcePrecision: true, 
                    decimalPrecision: 2,
                    decimalSeparator: '.'
                },
                        
                 {
                    xtype: 'combobox',
                     fieldLabel: 'Met Pago Aux',
                    name: 'txtMET_PAGO_AUXtrans',
                    id: 'txtMET_PAGO_AUXtrans',
                    allowBlank: true,
                    readOnly: false,
                    hidden: true,
                     store: storeMetPago,
                        minChars: 3,
                        displayField: 'NOMBRE',
                        valueField: 'CLAVE',
                        
                    listeners: {
                        'select': function(valor) {
                            
                          //  msgOut('valor'+valor.value);
                            
                      
                        }
                    }
                }
                        
                                        
                    
                



            ], 

            tbar: [
//                 {
//                    width: 420,
//                    fieldLabel: 'Buscar',
//                    xtype: 'combobox',
//                  //  store: 'StoreBuscaConvertidor',
//                    displayField: 'NOMBRE1',
//                    valueField: 'NO_CASO',
//                    emptyText: 'Convertidor no encontrada',
//                    id: 'cboConvertidor',
//                    name: 'cboConvertidor',
//                    minChars : 3,
//                    typeAhead: false,
//                    anchor: '100%',
//                    listConfig: {
//                        loadingText: 'Buscando...',
//                        emptyText: 'No se encontraron datos.',
//                        getInnerTpl: function() {
//                            return '<a class="banner-title">{NOMBRE}</a>' +
//                                    '<br /> <a class="banner-text">{NO_CASO}</a>' 
//                                    ;
//                        }
//                    },
//                    listeners: {
//                        scope:this,
//                        select: function(value){
//                                    msgOut("nombre1:"+value.valueModels[0].data.NOMBRE);
//                              this.fireEvent("findConvertidor", value.valueModels[0].data.COMPANIA,value.valueModels[0].data.ORIGEN,value.valueModels[0].data.IDCONCGASTO,value.valueModels[0].data.T_POLIZA,value.valueModels[0].data.DESCRIPCION,value.valueModels[0].data.ACTIVO,Ext.getCmp('cboConvertidor').getValue(),value.valueModels[0].data.NOMBRE);
//                             //}
//                        }
//                    },
//                    pageSize: 10
//
//
//                },

                '->',
//                {
//                    text: 'Agregar',
//                    iconCls: 'add-icon',
//                    id:'agregarConvertidorM',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("agregarRegistro", btn);
//                    }
//                },
                {
                    text: 'Guardar',
                    iconCls: 'save-icon',
                    id:'guardarTransaccion',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("saveTransaccion", btn);
                    }
                }//,
//                {
//                    text: 'Borrar',
//                    iconCls: 'delete-icon',
//                    id:'borrarTransaccion',
//                    scope: this,
//                    handler: function() {
//                
//                        this.fireEvent("deleteTransaccion");
//                    }
//                }
            ]
          
            //fin if button

        });
        this.callParent(arguments);
    },
    
    

});







