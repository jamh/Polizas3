Ext.define('AppDashboard.view.Dashboard', {
    extend: 'Ext.dashboard.Dashboard',
    xtype: 'dash',
    alias: 'widget.dash',
    itemId: 'dash',
//    title: 'Dashboard',
    reference: 'dash',
    flex: 1,
    tbar : [
        {
            xtype:'splitbutton',
            text:'Widget',
            iconCls: null,
            glyph: 61,
            menu:[
                {
                text:'Tipos de cambio'
                },
                {
                text:'Polizas Descuadradas'
                },
                 {
                text:'Facturas Eletronicas'
                }
             ]
        }],
//    layout: 'fit',
//  layout: {
//        type: 'border'
//    },
    stateful: false,
      stripeRows: true,
    columnLines: true,

    // Rapid updates are coalesced and flushed on a timer.
    throttledUpdate: true,
    columnWidths: [
        0.50,
        0.50
//        0.35,
//        0.40,
//        0.25
    ],
     parts: {
//            rss: 'google-rss',

            charPanelParidad: {
                viewTemplate: {
                    title: 'Tipo de Cambio Dolar',
                    items: [{
                        xtype: 'charttiposcambio'
                    }]
                }
            },

            panelAyuda: {
                viewTemplate: {
                    title: 'Ayuda del sistema',
                    items: [{
                        xtype: 'panelvideos'
                    }]
                }
            },
            gridPolizasDescuadradas: {
                viewTemplate: {
                    title: 'Polizas descuadradas',
                    items: [{
                        xtype: 'gridpolizasdescuadradas'
                    }]
                }
            },
            gridsaldos: {
                viewTemplate: {
                    title: 'Saldos',
                    items: [{
                        xtype: 'gridsaldos'
                    }]
                }
            },
             gridfeferaz: {
                viewTemplate: {
                    title: 'Facturas Electronicas',
                    items: [{
                        xtype: 'gridfeferaz'
                    }]
                }
            }
        },

        defaultContent: [

        {
            type: 'panelAyuda',
            columnIndex: 0,
            height: 300
        }, 
        {
            type: 'charPanelParidad',
            columnIndex: 1,
            height: 300
        },
        {
            type: 'gridPolizasDescuadradas',
            columnIndex: 0,
            height: 300
        },
        {
           type: 'gridsaldos',
            columnIndex: 1,
            height: 300
        },
        {
            type: 'gridfeferaz',
            columnIndex: 0,
            height: 300
        }

    ]
    
    
});