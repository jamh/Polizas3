Ext.define('AppPortalFolio.view.FormCXPOtros', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formcxpotros',
    itemId: 'formcxpotros',
    xtype: 'formcxpotros',
    bodyPadding: 5,
    defaultType: 'textfield',
    layout: 'form',
    height: 480,
    width: 400,
    url: 'CXP/saveOtrosCXPPortal',
    initComponent: function() {
        var me = this;
        //    var storeConCxp = Ext.create('AppCXPFacturas.store.StoreConceptoCXP');
        //var storeCto = Ext.create('AppCXPFacturas.store.StoreCto');
        //var storeTipoGasto = Ext.create('AppCXPFacturas.store.StoreTipoGasto');
        var storeDivisa = Ext.create('AppPortalFolio.store.StoreDivisa');
        //var storeEmpleados = Ext.create('AppCXPFacturas.store.StoreEmpleados');

     //   storeConCxp.load();
     //   storeCto.load();
     //   storeTipoGasto.load();
        //storeDivisa.load();
        
        
        var facturable = Ext.create('Ext.data.Store', {
            fields: ['clave', 'nombre'],
                data : [
                    {"clave":"S", "nombre":"Facturable"},
                    {"clave":"N", "nombre":"No Facturable"}
                 
                ]
            });
        
       // storeEmpleados.load();
        
        
//          Ext.apply(Ext.form.field.VTypes, {
//            validacionRFC:  function(v) {
//               
//                return /^(([A-Z]|[a-z]|\s){1})(([A-Z]|[a-z]){3})([0-9]{6})((([A-Z]|[a-z]|[0-9]){3}))/.test(v);
//                
//            },
//            validacionRFCText: 'Formato de RFC no valido'//,
//         
//        });
        
        Ext.apply(me, {
            items: [
                {
                    fieldLabel: 'Compañia',
                    name: 'COMPANIA',
                    id: 'txtCompania',
                    hidden: true,
                    readOnly: true
                },
                {
                    fieldLabel: 'Numero',
                    name: 'NUMERO',
                    id: 'id',
                    hidden: true,
                    readOnly: true
                },
                
                {
                    fieldLabel: 'Tipo de Gasto',
                    name: 'TIPO_GASTO',
                    id: 'cboTipo',
                    allowBlank: true,
                    hidden:true,
                    value:'X'
                },
                
                        
//                {
//                     xtype: 'combobox',
//                    fieldLabel: 'Tipo de Gasto',
//                    name: 'TIPO_GASTO',
//                    id: 'cboTipo',
//                   displayField: 'NOMBRE1',
//                    valueField: 'TIPO',
//                  
//                  //  store:storeTipoGasto,
//                    allowBlank: false,
//                    readOnly: false,
//                    listeners: {
//                        'select': function(valor) {
//                            
//                            msgOut('valor'+valor.value);
//                            
//                         //   if(valor.value === '1' || valor.value === '3' || valor.value  === 'R' || valor.value  === 'A' || valor.value  === 'T' || valor.value  === 'C' || valor.value  === 'N' || valor.value  === 'H' || valor.value  === 'I' || valor.value  === 'P'){
//                         //        Ext.getCmp('cxpBeneficiario').setVisible(false);
//                         //        Ext.getCmp('cxpcboBENEFICIARIO').setVisible(true);
//                         //   }else{
//                         //       Ext.getCmp('cxpBeneficiario').setVisible(true);
//                         //       Ext.getCmp('cxpcboBENEFICIARIO').setVisible(false);
//                         //   }
//                      
//                        }
//                    }
//                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Fecha',
                    name: 'FECHA',
                    id: 'cxpFecha',
                    format: 'd/m/Y',
                    submitFormat: 'd/m/Y',
                    allowBlank: false
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Moneda',
                    name: 'MONEDA',
                    id: 'cboMoneda',
                    minChars: 3,
                    allowBlank: false,
                    readOnly: false,
                    hidden: false,
                    typeAhead: false,
                    validateOnChange: true,
                    hideTrigger: false,
                    displayField: 'NOMBRE',
                    valueField: 'CODIGO',
                  
                    store:storeDivisa,
                     listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro la moneda.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{CODIGO}</span><h3>{NOMBRE}</h3>';
                            }
                        },
                    listeners: {
                        'select': function(valor) {
                            
                            msgOut('valor'+valor.value);
                            
                            if(valor.value === 'MXN'){
                                 Ext.getCmp('txtTIPO_CAMBIO').setVisible(false);
                            }else{
                                Ext.getCmp('txtTIPO_CAMBIO').setVisible(true);
                            }
                            
                           //  Ext.getCmp('cboPeriodo').clearValue();
                           // Ext.getCmp('txtTIPO_CAMBIO').setReadOnly(false);
                           //  Ext.getCmp('cboFECHA').setVisible(true);

                        }
                    }
                },
                {
                    xtype: 'numberfield',
                    name: 'TIPO_CAMBIO',
                    fieldLabel: 'Tipo de Cambio',
                    id: 'txtTIPO_CAMBIO',
                    allowBlank: true,
                     allowDecimal: true,
                    forcePrecision: true, 
                    decimalPrecision: 2,
                    decimalSeparator: '.',
                    readOnly:false,
                    hidden: true
                },
                
                {
                    fieldLabel: 'Id',
                    name: 'ID_CLIENTE',
                    id: 'cxpID_CLIENTE',
                    allowBlank: true,
                    hidden:true
                },
                
                {
                    fieldLabel: 'Beneficiario',
                    name: 'BENEFICIARIO',
                    id: 'cxpBeneficiario',
                    allowBlank: true,
                    hidden:false
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Beneficiario',
                    name: 'cboBENEFICIARIO',
                    id: 'cxpcboBENEFICIARIO',
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
//                    enforceMaxLength: true,
//                     maxLength: 36,
                   //  store: storeEmpleados,
                        minChars: 3,
                        displayField: 'NOMBRE',
                        valueField: 'NOMBRE',
                        typeAhead: false,
                        validateOnChange: true,
                        hideTrigger: false,
                        
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro el Empleado.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{RFC}</span><h3>{NOMBRE}</h3>';
                            }
                        },
                        listeners: {
                            scope: this,
                            select: function(value) {
                        
//                               msgOut('TOTAL',value.valueModels[0].data.UUID);
//                               msgOut('TOTAL2',value);
//                               var countE = value.valueModels[0].data.COUNT_RFC_E;
//                               var countR = value.valueModels[0].data.COUNT_RFC_R;
//                               var rfcEmisor = value.valueModels[0].data.RFC_EMISOR;
//                               var rfcReceptor = value.valueModels[0].data.RFC_RECEPTOR;
//                               
//                               if (Ext.isEmpty(countE)){
//                                   
//                                    if (Ext.isEmpty(countR)){
//                                        
//
//                                    }else{
//                                        
//                                        //manda r
//                                        
//                                         Ext.getCmp('txtRFCtrans').setValue(rfcReceptor);
//                                    }
//                                   
//                                   
//                               }else{
//                                   
//                                    if (Ext.isEmpty(countR)){
//                                        
//                                        //maanda e
//                                         Ext.getCmp('txtRFCtrans').setValue(rfcEmisor);
//                                    }
//                                   
//                                   
//                                   
//                                   
//                               }
//                               
//
//                        
//                                 Ext.getCmp('txtMONTO_TOTALtrans').setValue(value.valueModels[0].data.TOTAL);
//                                 Ext.getCmp('txtTIP_CAMBtrans').setValue(value.valueModels[0].data.TIPO_CAMBIO);
//                              //   Ext.getCmp('txtUUID_CFDItrans').setValue(value.valueModels[0].data.UUID);
                                Ext.getCmp('cxpRFCEmisor').setValue(value.valueModels[0].data.RFC);
//                     
//                               
                            },
                       beforequery: function(queryEvent, eOpts) {

                                
                            //    storeEmpleados.proxy.extraParams.rfc = '';

                    }
                            
                            
                   
         
                           
                        
                        
                       
                           
                        },
                          pageSize: 10
                        
                },
                {
                    fieldLabel: 'RFC Emisor',
                    name: 'RFCEmisor',
                    id: 'cxpRFCEmisor',
                    allowBlank: false,
                     enforceMaxLength: true,
                                  
                    // type: 'validacionRFC',
                     msgTarget: 'under',
                     maxLength: 13,
                    // value:ppUsr,
                     readOnly:true,
                     listeners:{
                                        change: function(field, newValue, oldValue){
                                                field.setValue(newValue.toUpperCase());
                                           }
                                    }
                }, 
                {
                    xtype: 'numberfield',
                    name: 'IMPORTE',
                    fieldLabel: 'IMPORTE',
                    id: 'txtIMPORTE',
                    allowBlank: true,
                    allowDecimal: true,
                    forcePrecision: true, 
                    decimalPrecision: 2,
                    hidden: false,           
                    value: '0',     
                    decimalSeparator: '.',  
                    listeners: {
                        scope: this,
                        'change': function(field, value) {
                         this.calcularTotal();
                         }
                       } 
                },
                {
                    xtype: 'numberfield',
                    name: 'IVA',
                    fieldLabel: 'IVA',
                    id: 'txtIVA',
                    allowBlank: true,
                     allowDecimal: true,
                    forcePrecision: true, 
                    decimalPrecision: 2,
                    hidden: false,           
                    value: '0',     
                    decimalSeparator: '.',  
                    listeners: {
                        scope: this,
                        'change': function(field, value) {
                         this.calcularTotal();
                         }
                       } 
                },
                {
                    xtype: 'numberfield',
                    name: 'OTROS_IMPUESTOS',
                    fieldLabel: 'Otros Impuestos',
                    id: 'txtOTROS_IMPUESTOS',
                    allowBlank: true,
                     allowDecimal: true,
                    forcePrecision: true, 
                    decimalPrecision: 2,
                    decimalSeparator: '.',
                    readOnly:false,
                    hidden: false
                },
                {
                    xtype: 'numberfield',
                    name: 'TOTAL',
                    fieldLabel: 'TOTAL',
                    id: 'txtTOTAL',
                    allowBlank: true,
                     allowDecimal: true,
                    forcePrecision: true, 
                    decimalPrecision: 2,
                    decimalSeparator: '.',
                    readOnly:true,
                    hidden: false
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Cto. Cto',
                    name: 'CTO_CXP',
                     displayField: 'NOMBRE_CTO',
                    valueField: 'CTO',
                    id: 'cboCto',
                    //store:storeCto,
                    allowBlank: true,
                    readOnly: false,
                    hidden:true,
                    listeners: {
                        change: function(field, newValue, oldValue) {

                        }
                    }
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Concepto',
                     name: 'CONCEPTO_CXP',
                    displayField: 'NOMBRE_CONCEPTO',
                    valueField: 'CONCEPTO',
                    id:'cxp_Concepto',
                    typeAhead: true,
                    minChars: 0,
                    editable: false,
                   // store: storeConCxp,
                   hidden:true,
                    allowBlank: true
                },
                  {
                    xtype: 'datefield',
                    fieldLabel: 'Fecha de Venc.',
                    name: 'FECHA_V',
                    id: 'cxpVencFecha',
                    format: 'd/m/Y',
                    submitFormat: 'd/m/Y',
                    hidden:true,
                    allowBlank: true
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Facturable',
                    name: 'cboFacturable',
                    id: 'cboFacturable',     
                    store: facturable,
                    queryMode: 'local',
                    readOnly: false,
                    hidden:false,
                    displayField: 'nombre',
                    valueField: 'clave',
                    allowBlank: false
                },
                {
                    xtype: 'filefield',
                    name: 'file',
                    id:'uploadItemPortal',
                    fieldLabel: 'Archivo',
                    labelWidth: 50,
                    msgTarget: 'side',
                    allowBlank: false,
                    anchor: '100%',
                    buttonText: 'Buscar...'
                },
                 {

                     xtype: 'textareafield',
                     id:'cxpDescripcionOtras',
                     name:'DESCRIPCION_OTRAS',
                     flex:1,
                     height:150, 
                    // columnWidth:500,
                     //labelWidth: 200,
                     fieldLabel: 'Descripcion',
                     enforceMaxLength: true,

                     maxLength: 500
                 }


            ], //fin if item
            buttons: [
                {
                    text: 'Guardar',
                    id: 'guardaCXPOtros',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("guardaCXPOtros", btn);
                    }
                }
            ]


        });
        this.callParent(arguments);
    },
      calcularTotal:function(){
                 
         var importe=Ext.getCmp('txtIMPORTE').getValue();                             
         var iva=Ext.getCmp('txtIVA').getValue();                             
         
         if (!Ext.isEmpty(importe) && !Ext.isEmpty(iva)) {
         var total =importe + iva;
         Ext.getCmp('txtTOTAL').setValue(total);
         }
         
                                
    }


});