Ext.define('AppPolizas3.view.general.TabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.pespanel',
    itemId: 'pespanel',
    xtype: 'pespanel',
    region: 'center',
    bodyPadding: 5,
    bodyStyle: 'padding: 5px;',
    frame: true,
    split: true,
    //collapsible: true,
    initComponent: function() {
         
        
        Ext.apply(this, {
            items: [
                {
                    title: 'Datos Poliza',
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'formcentro'

                        }
                    ]
                }, 
                {
                    title: 'Datos Extra',
                    tabConfig: {
                        title: 'Imagenes Archivos',
                        tooltip: 'Imagenes de Archivos'
                    },
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'gridarchivos'

                        }
                    ]
                }
            ]
//            ,
//            bbar: [
//                lblTotal,lblRegistros,
//                '->', lblTotCar, 
//                {
//                    xtype:'displayfield',
//                    id: 'totAbonos',
//                    name: 'totAbonos',                    
//                    value: '<span style="color:green;">Abonos</span>',
//                    width: 150
//                }
//            ]

        });
        this.callParent(arguments);
    }
});

