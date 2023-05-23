Ext.define('AppClientes.view.FormClientes', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formclientes',
    itemId: 'formclientes',
    xtype: 'formclientes',
    bodyPadding: 5,
    width: 600,
    defaultType: 'textfield',
    autoScroll: true,
    layout: 'form',
    url: 'CrearCliente/save',
    initComponent: function () {

        var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
        var storeCuenta = Ext.create('AppClientes.store.StoreCuenta');
        var storeCuentaCompl = Ext.create('AppClientes.store.StoreCuenta');
        var storeCuentaIng = Ext.create('AppClientes.store.StoreCuenta');
        var storeBancosSat = Ext.create('AppClientes.store.StoreBanco');
        var storeCto = Ext.create('AppClientes.store.StoreCTO');


        var tPersona = Ext.create('Ext.data.Store', {
            fields: ['CLAVE', 'NOMBRE'],
            data: [
                {"CLAVE": "F", "NOMBRE": "F-Fisica"},
                {"CLAVE": "M", "NOMBRE": "M-Moral"}
            ]
        });

        var tMoneda = Ext.create('Ext.data.Store', {
            fields: ['CLAVE', 'NOMBRE'],
            data: [
                {"CLAVE": "PES", "NOMBRE": "PESOS"},
                {"CLAVE": "USD", "NOMBRE": "DOLARES"},
                {"CLAVE": "EUR", "NOMBRE": "EUROS"},
                {"CLAVE": "INT", "NOMBRE": "INTERCOMPANIAS"}
            ]
        });

        Ext.apply(this, {
            items: [
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [{
                            xtype: 'container',
                            flex: 1,
                            border: false,
                            layout: 'anchor',
                            defaultType: 'textfield',
                            items: [
                                {
                                    fieldLabel: 'COMPANIA',
                                    name: 'COMPANIA',
                                    id: 'companiaCli',
                                    hidden: true,
                                    allowBlank: true
                                },
                                {
                                    fieldLabel: 'Clave Cliente:',
                                    allowBlank: true,
                                    hidden: false,
                                    disabled: true,
                                    name: 'ID_CLIENTE',
                                    id: 'idClienteCli',
                                    enforceMaxLength: true,
                                    maxLength: 10,
                                    anchor: '95%',
                                    listeners: {
                                        change: function (field, newValue, oldValue) {
                                            field.setValue(newValue.toUpperCase());
                                        }
                                    }
                                },
                                {
                                    fieldLabel: 'Nombre Corto',
                                    name: 'NOMBRE',
                                    id: 'nombreCli',
                                    allowBlank: false,
                                    afterLabelTextTpl: required,
                                    enforceMaxLength: true,
                                    maxLength: 200,
                                    anchor: '95%',
                                    listeners: {
                                        change: function (field, newValue, oldValue) {
                                            field.setValue(newValue.toUpperCase());
                                        }
                                    }
                                },
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'Persona',
                                    name: 'cboPersona',
                                    id: 'cboPersonaCli',
                                    afterLabelTextTpl: required,
                                    store: tPersona,
                                    anchor: '95%',
                                    queryMode: 'local',
                                    readOnly: false,
                                    hidden: false,
                                    displayField: 'NOMBRE',
                                    valueField: 'CLAVE',
                                    allowBlank: false
                                }

                            ]
                        }, {
                            xtype: 'container',
                            flex: 1,
                            layout: 'anchor',
                            defaultType: 'textfield',
                            items: [
                                {
                                    fieldLabel: 'RFC',
                                    afterLabelTextTpl: required,
                                    allowBlank: false,
                                    name: 'RFC',
                                    id: 'rfcCli',
                                    enforceMaxLength: true,
                                    maxLength: 30,
                                    anchor: '95%',
                                    listeners: {
                                        change: function (field, newValue, oldValue) {
                                            field.setValue(newValue.toUpperCase());
                                        }
                                    }
                                },
                                {
                                    fieldLabel: "Razón Social",
                                    afterLabelTextTpl: required,
                                    allowBlank: false,
                                    name: 'RAZON_SOCIAL',
                                    id: 'razonSocialCli',
                                    enforceMaxLength: true,
                                    maxLength: 400,
                                    anchor: '95%',
                                    listeners: {
                                        change: function (field, newValue, oldValue) {
                                            field.setValue(newValue.toUpperCase());
                                        }
                                    }
                                },
                                {
                                    xtype: 'combobox',
                                    fieldLabel: 'Moneda',
                                    name: 'cboMonedaProv',
                                    id: 'cboMonedaCli',
                                    afterLabelTextTpl: required,
                                    store: tMoneda,
                                    queryMode: 'local',
                                    anchor: '95%',
                                    readOnly: false,
                                    hidden: false,
                                    displayField: 'NOMBRE',
                                    valueField: 'CLAVE',
                                    allowBlank: false
                                }
                            ]
                        }]
                },
                {
                    xtype: 'tabpanel',
                    id: 'tab',
                    plain: true,
                    layout: 'fit',
                    defaults: {
                        bodyPadding: 5
                    },
                    items: [
                        {
                            title: 'Generales',
                            layout: 'hbox',
                            defaultType: 'textfield',
                            bodyPadding: 5,
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    border: false,
                                    layout: 'anchor',
                                    defaultType: 'textfield',
                                    defaults: {
                                        width: 200
                                    },
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            name: 'CUENTA_CONTABLE',
                                            id: 'cboCUENTA_CONTABLECli',
                                            anchor: '95%',
                                            fieldLabel: 'Cuenta Contable',
                                            store: storeCuenta,
                                            minChars: 3,
                                            afterLabelTextTpl: required,
                                            displayField: 'NOMBRE',
                                            valueField: 'CUENTA',
                                            typeAhead: false,
                                            validateOnChange: true,
                                            allowBlank: false,
                                            hideTrigger: false,
                                            listConfig: {
                                                loadingText: 'Buscando...',
                                                emptyText: 'No se encontro la cuenta.',
                                                getInnerTpl: function () {
                                                    return '<span style="color:green;font-weight: bold">{CUENTA_ALIAS}</span><h3>{NOMBRE}</h3>';
                                                }
                                            },
                                            listeners: {
                                                scope: this,
                                                select: function (value) {

                                                    this.fireEvent("enviaAuxiliar", value.valueModels[0].data.CUENTA);


                                                }





                                            }

                                        },
                                        {
                                            fieldLabel: 'Auxiliar',
                                            name: 'AUXILIAR',
                                            id: 'auxCliente',
                                            anchor: '95%',
                                            enforceMaxLength: true,
                                            //minLength: 13,
                                            maxLength: 50,
                                            allowBlank: false,
                                            listeners: {
//                                                    change: function (field, newValue, oldValue) {
//                                                        field.setValue(newValue.toUpperCase());
//                                                    }
                                            }
                                        },
                                        {
                                            fieldLabel: 'Correo',
                                            name: 'CORREO',
                                            anchor: '95%',
                                            id: 'correoClie',
                                            regex:/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,3})$/,
                                            regexText:'Este campo contiene un formato de email incorrecto',
                                            blankText : 'Please enter email address(s)',
                                            enforceMaxLength: true,
                                            //minLength: 13,
                                            maxLength: 50,
                                            allowBlank: true,
                                            listeners: {
//                                                    change: function (field, newValue, oldValue) {
//                                                        field.setValue(newValue.toUpperCase());
//                                                    }
                                            }
                                        }

                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    border: false,
                                    layout: 'anchor',
                                    defaultType: 'textfield',
                                    defaults: {
                                        width: 200
                                    },
                                    items: [
                                        {
                                            fieldLabel: 'C. costos',
                                            name: 'CTO_CTO',
                                            xtype: 'combobox',
                                            anchor: '95%',
                                            id: 'ctoCli',
                                            allowBlank: true,
                                            store: storeCto,
                                            minChars: 2,
                                            displayField: 'NOMBRE1',
                                            valueField: 'CTO_CTO',
                                            typeAhead: false,
                                            validateOnChange: true,
                                            hideTrigger: false,
                                            listConfig: {
                                                loadingText: 'Buscando...',
                                                emptyText: 'No se encontro el C. costos.',
                                                getInnerTpl: function () {
                                                    return '<span style="color:green;font-weight: bold">{CTO_CTO}</span><h3>{NOMBRE}</h3>';
                                                }
                                            },
                                            listeners: {
                                                scope: this,
                                                select: function (value) {


                                                }





                                            }//,
                                        },
                                        
                                        {
                                            xtype: 'combobox',
                                            name: 'CUENTA_CONTABLE_COMP',
                                            id: 'cboCUENTA_CONTABLE_COMPCli',
                                            anchor: '95%',
                                            fieldLabel: 'Cuenta Complementaria',
                                            store: storeCuentaCompl,
                                            minChars: 3,
                                           // afterLabelTextTpl: required,
                                            displayField: 'NOMBRE',
                                            valueField: 'CUENTA',
                                            typeAhead: false,
                                            validateOnChange: true,
                                            allowBlank: true,
                                            hideTrigger: false,
                                            listConfig: {
                                                loadingText: 'Buscando...',
                                                emptyText: 'No se encontro la cuenta.',
                                                getInnerTpl: function () {
                                                    return '<span style="color:green;font-weight: bold">{CUENTA_ALIAS}</span><h3>{NOMBRE}</h3>';
                                                }
                                            },
                                            listeners: {
                                                scope: this,
                                                select: function (value) {

                                                  //  this.fireEvent("enviaAuxiliar", value.valueModels[0].data.CUENTA);


                                                }





                                            }

                                        },
                                        //AGREGANDO COMBO DE CUENTA INGRESO
                                        {
                                            xtype: 'combobox',
                                            name: 'CUENTA_CONTABLE_ING',
                                            id: 'cboCUENTA_CONTABLE_INGCli',
                                            anchor: '95%',
                                            fieldLabel: 'Cuenta Ingreso',
                                            store: storeCuentaIng,
                                            minChars: 3,
                                           // afterLabelTextTpl: required,
                                            displayField: 'NOMBRE',
                                            valueField: 'CUENTA',
                                            typeAhead: false,
                                            validateOnChange: true,
                                            allowBlank: true,
                                            hideTrigger: false,
                                            listConfig: {
                                                loadingText: 'Buscando...',
                                                emptyText: 'No se encontro la cuenta.',
                                                getInnerTpl: function () {
                                                    return '<span style="color:green;font-weight: bold">{CUENTA_ALIAS}</span><h3>{NOMBRE}</h3>';
                                                }
                                            },
                                            listeners: {
                                                scope: this,
                                                select: function (value) {

                                                  //  this.fireEvent("enviaAuxiliar", value.valueModels[0].data.CUENTA);

                                                }
                                            }
                                        }
                                    ]
                                }
     ]
                        },
                        {
                            title: "Bancos",
                            layout: 'hbox',
                            defaultType: 'textfield',
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    border: false,
                                    layout: 'anchor',
                                    defaultType: 'textfield',
                                    defaults: {
                                        width: 200
                                    },
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            fieldLabel: 'Banco',
                                            name: 'BANCO',
                                            anchor: '95%',
                                            //editable:false,
                                            afterLabelTextTpl: required,
                                            id: 'cboBANCOCli',
                                            store: storeBancosSat,
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
                                                getInnerTpl: function () {
                                                    return '<span style="color:green;font-weight: bold">{CLAVE}</span><h3>{NOMBRE}</h3>';
                                                }
                                            },
                                            listeners: {
                                                scope: this,
                                                select: function (value) {


                                                }





                                            }//,

                                        },
                                        {
                                            fieldLabel: 'Cuenta Bancaria',
                                            enforceMaxLength: true,
                                            maxLength: 20,
                                            anchor: '95%',
                                            name: 'CUENTA_BANCARIA',
                                            id: 'cuentaBancariaCli',
                                            listeners: {
                                                change: function (field, newValue, oldValue) {
                                                    field.setValue(newValue.toUpperCase());
                                                }
                                            }
                                        }

                                    ]
                                },
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    border: false,
                                    layout: 'anchor',
                                    defaultType: 'textfield',
                                    defaults: {
                                        width: 200
                                    },
                                    items: [
                                        {
                                            fieldLabel: "Cuenta Clabe",
                                            enforceMaxLength: true,
                                            maxLength: 20,
                                            name: 'CLABE',
                                            anchor: '95%',
                                            id: 'clabeCli',
                                            listeners: {
                                                change: function (field, newValue, oldValue) {
                                                    field.setValue(newValue.toUpperCase());
                                                }
                                            }
                                        }

                                    ]
                                }
                            ]


                        }

                    ]
                }
            ], //fin if item

            buttons: [
                {
                    text: 'Guardar',
                    scope: this,
                    handler: function (btn) {
                        this.fireEvent("saveCliente", btn);
                    }
                },
                {
                    text: 'Cancelar',
                    scope: this,
                    handler: function () {
                        this.up('window').close();
                    }
                }
            ]//fin if button

        });
        this.callParent(arguments);
    }

});









