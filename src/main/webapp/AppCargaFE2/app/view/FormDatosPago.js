Ext.define('AppCargaFE2.view.FormDatosPago', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formdatospago',
    itemId: 'formdatospago',
    xtype: 'formdatospago',
    bodyPadding: 5,
    width: 600,
    defaultType: 'textfield',
    autoScroll: true,
    layout: 'form',
    //url: 'UploadDocumentFE/save',
    initComponent: function() {


           var storeMetPagos = Ext.create('AppCargaFE2.store.StoreMetPagos');  
         var storeBancoPagos = Ext.create('AppCargaFE2.store.StoreBancosPagos'); 
         var storeMonedaPagos = Ext.create('AppCargaFE2.store.StoreMonedaPagos'); 
         storeMetPagos.load();
         storeBancoPagos.load();
      
        Ext.apply(this, {
            items: [
              
               {
                       xtype: 'combobox',
                        id: 'cboMetPagoTot',
                        fieldLabel: 'Metodo de Pago',
                        allowBlank: false,
                        name: 'cboMetPagoTot',
                        itemId: 'cboMetPagoTot',
                        displayField: 'CONCEPTO',
                        valueField: 'CLAVE',
                        typeAhead: true,
                        minChars: 0,
                        editable: false,
                        store: storeMetPagos,

                      
            
                        
                        listeners: {
                            select: function(value) {
                               // me.fireEvent("setConcGastoCXP", value.valueModels[0].data.NO_CASO);
                            }
                        }
                    },
                    {
                            xtype: 'combobox',
                        name: 'cboBancoDetTot',
                        fieldLabel: 'Banco',
                        id: 'cboBancoDetTot',
                        store: storeBancoPagos,
                        minChars: 3,
                        displayField: 'NOMBRE1',
                        valueField: 'CLAVE',
                        typeAhead: false,
                        validateOnChange: true,
                        allowBlank: false,
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
                                   Ext.getCmp('txtCuentaBancoTot').setValue(value.valueModels[0].data.CUENTA_BANCO);
                            }
                           
                        
                        
                       
                           
                        }//,
  
                        
                    },
                    
                    {
                    xtype: 'textfield',
                    fieldLabel: 'Cuenta Banco',
                    name: 'txtCuentaBancoTot',
                    id: 'txtCuentaBancoTot',
                    allowBlank: false,
                    readOnly:false,
                    hidden:false
                    //vtype: 'numeroId'
                }, 
                 {
                    xtype: 'textfield',
                    fieldLabel: 'Observaciones',
                    name: 'txtObservacionesTot',
                    id: 'txtObservacionesTot',
                    allowBlank: true,
                    readOnly:false,
                    hidden:false
                    //vtype: 'numeroId'
                },  
                 {
                     xtype:'datefield',
                    name: 'dtFechaPagoTot',
                    fieldLabel: 'Fecha de Pago',
                    id: 'dtFechaPagoTot',
                    submitFormat: 'd/m/Y',
                    format: 'd/m/Y',
                    allowBlank: false,
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
                 {
                            xtype: 'combobox',
                        name: 'cboMonedaDetTot',
                        fieldLabel: 'Moneda',
                        id: 'cboMonedaDetTot',
                        store: storeMonedaPagos,
                        minChars: 3,
                        displayField: 'NOMBRE',
                        valueField: 'CODIGO',
                        typeAhead: false,
                        validateOnChange: true,
                        allowBlank: false,
                        hideTrigger: false,
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro el Moneda.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{CODIGO}</span><h3>{NOMBRE}</h3>';
                            }
                        },
                        listeners: {
                            scope: this,
                            select: function(value) {
                                   //Ext.getCmp('txtCuentaBancoTot').setValue(value.valueModels[0].data.CUENTA_BANCO);
                            }
                           
                        
                        
                       
                           
                        }//,
  
                        
                    },
                 {
                     
                        xtype: 'numberfield',
                        fieldLabel: 'Tipo de Cambio',
                        allowNegative: true,
                        allowDecimals: true,
                        allowBlank: false,
                        decimalSeparator: '.',
                        name: 'numTipoCambioTot',
                        itemId: 'numTipoCambioTot',
                        id: 'numTipoCambioTot'
                 },
                 {
                     
                        xtype: 'numberfield',
                        fieldLabel: 'Importe a aplicar',
                        allowNegative: true,
                        allowDecimals: true,
                        allowBlank: true,
                        hidden:true,
                        decimalSeparator: '.',
                        name: 'numImporteApliTot',
                        itemId: 'numImporteApliTot',
                        id: 'numImporteApliTot'
                 },
                 {
                    xtype: 'textfield',
                    fieldLabel: 'tipo de accion',
                    name: 'txtAccionTot',
                    id: 'txtAccionTot',
                    allowBlank: true,
                    readOnly:false,
                    hidden:true
                    //vtype: 'numeroId'
                }
                 

            ], //fin if item

            buttons: [
                {
                    text: 'Guardar',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("guardaPagoTotal", btn);
                    }
                },
                {
                    text: 'Cancelar',
                    scope: this,
                    handler: function() {
                        this.up('window').close();
                    }
                }
            ]//fin if button

        });
        this.callParent(arguments);
    }

});







