Ext.define('AppConsolida.view.FormMaestro', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formmaestro',
    itemId: 'formmaestro',
    xtype: 'formmaestro',
    region: 'west',
    title: 'Conciliacion',
    collapsed: true,
    split: true,
    collapsible: true,
    layout: 'anchor',
    
    fieldDefaults: {
        labelAlign: 'top',
        msgTarget: 'side'
    },
    initComponent: function() {



        Ext.apply(this, {
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Compania',
                    name: 'archCOMPANIA',
                    id: 'archCOMPANIA',
                    allowBlank: false,
                    readOnly: true
                },
                {
                  xtype:'textfield',
                  fieldLabel:'Conciliacion'
                }

            ], //fin if item

            buttons: [
                {
                    text: 'Cargar',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("saveArchivo", btn);
                    }
                },
                {
                    text: 'Crear',
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







