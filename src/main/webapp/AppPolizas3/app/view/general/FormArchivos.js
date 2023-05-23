Ext.define('AppPolizas3.view.general.FormArchivos', {
    extend: 'Ext.container.Container',
    alias: 'widget.formarchivos',
    itemId: 'formarchivos',
    xtype: 'formarchivos',
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
                    xtype: 'gridarchivos'
                }
              
            ]


        });

        this.callParent(arguments);

    }
}

);

