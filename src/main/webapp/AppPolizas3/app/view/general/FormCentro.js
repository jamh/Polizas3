Ext.define('AppPolizas3.view.general.FormCentro', {
    extend: 'Ext.container.Container',
    alias: 'widget.formcentro',
    itemId: 'formcentro',
    xtype: 'formcentro',
    // bodyPadding: 5,
    frame: true,
    //split: true,
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    //bodyStyle: 'padding: 5px;',

    initComponent: function() {






        Ext.apply(this, {
            items: [
                {
                    xtype: 'gridmaestro'
                },
                {
                    xtype: 'griddetalle'
                }
            ]


        });

        this.callParent(arguments);

    }
}

);




