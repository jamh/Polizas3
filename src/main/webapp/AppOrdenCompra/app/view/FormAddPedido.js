Ext.define('AppOrdenCompra.view.FormAddPedido', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formaddpedido',
    itemId: 'formaddpedido',
    xtype: 'formaddpedido',
    bodyPadding: 5,
    width: 600,
    defaultType: 'textfield',
    autoScroll: true,
    layout: 'form',
    //url: 'UploadDocumentFE/save',
    initComponent: function() {

            var storeProveedor=Ext.create('AppOrdenCompra.store.StoreProveedor');
            var storeAlmacen=Ext.create('AppOrdenCompra.store.StoreAlmacen');
      
        Ext.apply(this, {
            items: [
                {
                            xtype: 'combobox',
                            name: 'cboRfcOrdenPedido',
                            id: 'cboRfcOrdenPedido',
                            allowBlank: false,
                            fieldLabel: 'Proveedor',
                            readOnly: false,
                            hidden:false,
        //                    enforceMaxLength: true,
        //                     maxLength: 36,
                             store: storeProveedor,
                                minChars: 3,
                                displayField: 'NOMBRE',
                                valueField: 'RFC',
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

    
                                        Ext.getCmp('txtIdProvPedido').setValue(value.valueModels[0].data.ID_CLIENTE);
        //                     
                                      // this.fireEvent("enviaIdProveedor", value.valueModels[0].data.ID_CLIENTE);
                                    },
                               beforequery: function(queryEvent, eOpts) {

                               }
                               
                                    //    storeEmpleados.proxy.extraParams.rfc = '';

                            }
                },
                {
                        xtype: 'textfield',
                        //allowBlank: true,
                        name: 'txtIdProvPedido',
                        hidden:true,
                        id: 'txtIdProvPedido'
                    },
                {
                        xtype: 'combobox',
                        name: 'txtIdAlmacenOrdenPed',
                        id: 'txtIdAlmacenOrdenPed',
                        fieldLabel: 'Almacen',
                        store: storeAlmacen,
                        minChars: 1,
                        displayField: 'NOMBRE',
                        valueField: 'ID',
                        typeAhead: false,
                        validateOnChange: true,
                        allowBlank: false,
//                        hideTrigger: true,
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro Centro de Costo.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{ID}</span><h3>{NOMBRE}</h3>';
                            }
                        },
                        listeners: {
                        scope: this,
                        'select': function(valor) {
                           
                          // me.fireEvent("buscaPorFecha",  Ext.getCmp('cboCalendarioFeCxp').getValue(),Ext.getCmp('cboPeriodoFeCxp').getValue());
                            
                        },
                          beforequery: function(queryEvent, eOpts) {
                              
                            
                    }
                     }
                 },
                 
                 {
                    xtype: 'datefield',
                    fieldLabel: 'Fecha Requerida',
                    name: 'fechaReqPedidos',
                    id: 'fechaReqPedidos',
                    format: 'd/m/Y',
                    submitFormat: 'd/m/Y',
                    hidden:false,
                    allowBlank: true
                }
                 

            ], //fin if item

            buttons: [
                {
                    text: 'Continuar',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("generaOrdenPedido", btn);
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







