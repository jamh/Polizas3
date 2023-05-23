Ext.define('AppFormulas.view.FormCedula', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formcedula',
    itemId: 'formcedula',
    xtype: 'formcedula',
    flex: 1,
    defaultType: 'textfield',
    autoScroll: true,
    layout: 'form',
    url: 'processFormula/saveMaestroFormula',
    initComponent: function() {
        var me = this;


        var storeBuscaCedula = Ext.create('AppFormulas.store.StoreBuscaCedula');

        Ext.apply(me, {
           
            items: [
                {
       
                    fieldLabel: 'Compania',
                    name: 'COMPANIA',
                    id: 'txtCOMPANIAConv',
                    allowBlank: true,
                    readOnly: true,
                    hidden: true
                },
                {
                 
                    fieldLabel: 'Cedula',
                    name: 'CEDULA',
                    id: 'txtCEDULA',
                    hidden: false,
                    allowBlank: false,
                    readOnly: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Nombre',
                    name: 'NOMBRE',
                    id: 'txtNOMBRE',
                    allowBlank: false,
                    readOnly: false,
                    hidden: false

                },
                {
                    xtype: 'textarea',
                    fieldLabel: 'Descripcion',
                    name: 'DESCRIPCION',
                    id: 'txtDescripcion',
                    readOnly: false,
                    allowBlank: true

                },
                {
                    xtype: 'textarea',
                    fieldLabel: 'bandera',
                    name: 'BANDERA',
                    id: 'txtBandera',
                    readOnly: true,
                    allowBlank: true,
                    hidden:true

                }
                


            ], //fin if item

            tbar: [
                {
                    fieldLabel: 'Buscar',
                    xtype: 'combobox',
                    store: storeBuscaCedula,
                    displayField: 'NOMBRE',
                    valueField: 'CEDULA',
                    emptyText: 'Cedula',
                    id: 'cboCedula',
                    name: 'cboCedula',
                    minChars: 3,
                    typeAhead: false,
                   // anchor: '100%',
                    listConfig: {
                        loadingText: 'Buscando...',
                        emptyText: 'No se encontraron datos.',
                        getInnerTpl: function() {
                            return '<a class="banner-title">{NOMBRE}</a>' +
                                    '<br /> <a class="banner-text">{DESCRIPCION}</a>'
                                    ;
                        }
                    },
                    listeners: {
                        scope: this,
                        beforequery: function(queryEvent, eOpts) {
                            storeBuscaCedula.proxy.extraParams.condicion = Ext.getCmp('txtCEDULA').getValue();
                        },
                        select: function(value) {
                            this.fireEvent("findCedula", value);
                        }
                    },
                    pageSize: 10


                },
                '->',
                {
                    text: 'Agregar',
                    iconCls: 'add-icon',
                    id: 'agregarCedula',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("agregarRegistro", btn);
                    }
                },
                {
                    text: 'Guardar',
                    iconCls: 'save-icon',
                    id: 'guardarCedula',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("saveCedula", btn);
                    }
                },
                {
                    text: 'Borrar',
                    iconCls: 'delete-icon',
                    id: 'borrarCedula',
                    scope: this,
                    handler: function() {

                        this.fireEvent("deleteCedula");
                    }
                },
                {
                    text: 'Copiar',
                    iconCls: 'copy-icon',
                    id: 'copiarCedula',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("copiarCedula", btn);
                    }
                }
            ]

                    //fin if button

        });
        this.callParent(arguments);
    }


});







