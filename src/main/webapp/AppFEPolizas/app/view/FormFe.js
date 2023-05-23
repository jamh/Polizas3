Ext.define('AppFEPolizas.view.FormFe', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formfe',
    itemId: 'formfe',
    xtype: 'formfe',
    bodyPadding: 5,
    width: 600,
    defaultType: 'textfield',
    autoScroll: true,
    layout: 'form',
    url: 'facturas/electronica/poliza',
    initComponent: function() {

        //var storeConcepto = Ext.create('AppCargaFE.store.StoreConcepto');
        
        var storeTipoPoliza = Ext.create('AppFEPolizas.store.StoreTipoPoliza');
        // storeTipoPoliza.load();

        Ext.apply(this, {
            items: [
                {
                     xtype: 'textfield', 
                      name: 'numeroFE',
                      readOnly:true,
                    id: 'txtNUMEROFE',
                    fieldLabel: 'Num. Factura',
                       allowBlank: false//,
                },
                {
                     xtype: 'textfield', 
                      name: 'folioFE',
                      readOnly:true,
                    id: 'txtFOLIOFE',
                    fieldLabel: 'Folio',
                       allowBlank: false//,
                },
                 {
                    xtype: 'datefield',
                    name: 'feFECHA',
                    id: 'feFECHA',
                    fieldLabel: 'FECHA',
                    width: 350,
                    colspan: 2,
                    format: 'd/m/Y',
                    altFormats: 'd/m/Y',
                    allowBlank: false//,
                    //renderer: Ext.Date.dateFormat(new Date(), 'd/m/Y')
                },
               
                {
                    xtype: 'combobox',
                    fieldLabel: 'Tipo Poliza',
                    id: 'cbofeTIPO_POLIZA',
                    name: 'feTIPO_POLIZA',
                    itemId: 'cbofeTIPO_POLIZA',
                    displayField: 'NOMBRE1',
                    valueField: 'TIPO_POLIZA',              
                    typeAhead: true,
                    minChars: 0,
                    editable:false,
                    store: storeTipoPoliza,
                    allowBlank: false//,
                    //renderer: this.poliza
                },
                    {
                    xtype: 'textfield',
                    fieldLabel: 'Referencia',
                    name: 'feREFERENCIA',
                    id: 'feREFERENCIA',
                    hidden:false,
                    allowBlank: true,
                    readOnly:false
                    
                },
                  {
                    xtype: 'textfield',
                    fieldLabel: 'Rfc Emisor',
                    name: 'rfcEmisor',
                    id: 'rfcEmisor',
                    hidden:false,
                    allowBlank: true,
                    readOnly:true
                    
                },
                    {
                    xtype: 'textfield',
                    fieldLabel: 'Rfc Receptor',
                    name: 'rfcReceptor',
                    id: 'rfcReceptor',
                    hidden:false,
                    allowBlank: true,
                    readOnly:true
                    
                },
                    {
                    xtype: 'textfield',
                    fieldLabel: 'UUID',
                    name: 'feUUID',
                    id: 'feUUID',
                    hidden:false,
                    allowBlank: true,
                    readOnly:true
                                   },
                    {
                    xtype: 'textfield',
                    fieldLabel: 'Moneda',
                    name: 'feMONEDA',
                    id: 'feMONEDA',
                    hidden:false,
                    allowBlank: true,
                    readOnly:true
                                   },
                     {
                    xtype: 'textfield',
                    fieldLabel: 'Tipo Cambio',
                    name: 'feTIPO_CAMBIO',
                    id: 'feTIPO_CAMBIO',
                    hidden:false,
                    allowBlank: true,
                    readOnly:true
                                   },
                                   ////,
//                    {
//                    xtype: 'textfield',
//                    fieldLabel: 'Retencion',
//                    name: 'feRETENCION',
//                    id: 'feRETENCION',
//                    hidden:false,
//                    allowBlank: true,
//                    readOnly:true
//                    
//                },
                 
        
                   
                    
                    {
                        xtype: 'radiogroup',
                        fieldLabel: 'Origen',
                        id: 'radioTipoOrigenGrp',
                        cls: 'x-check-group-alt',
                        items: [
                            {boxLabel: 'Por Pagar', name: 'radioTipoOrigen',  inputValue: 1, checked: true},
                            {boxLabel: 'Por Cobrar', name: 'radioTipoOrigen', inputValue: 2}

                        ],
                        listeners: {
                             scope: this,
                                change: function (field, newValue, oldValue) {
                                    //var value = Ext.ComponentQuery.query('radiofield[name=cstgrp]');

                                    //console.log(newValue['cstgrp']);
                                 var origen;
                                    switch (newValue['radioTipoOrigen']) {
                                        case 1:
                                             msgOut('por pagar');
                                              origen = 'pp';
                                            break;
                                        case 2:
                                            msgOut('por cobrar');
                                             origen = 'pc';
                                            break;
                                      
                                           
                                    }
                                    
                                    this.fireEvent("tipoOrigen", origen);
                                    
                                    
                                }//,
//                                 check: function(field, newValue, oldValue) {
//                                    msgOut(field, "Radio Checked ", newValue, "to", oldValue);
//                                },
//                                handler: function(field, state) {
//                                    msgOut("estado:"+field, state);
//                                }
                        }
                    }



            ], //fin if item

            buttons: [
                {
                    text: 'Generar Poliza',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("savePolizaFe", btn);
                    }
                }
            ]//fin if button

        });
        this.callParent(arguments);
    },
  
    poliza: function(val) {
        val = 'D';
         return val;
    },
     fecha : function(val) {
        var newNameFechaM =  Ext.Date.dateFormat(new Date(), 'd/m/Y');
        val = newNameFechaM;
        return val;
    }
   

});







