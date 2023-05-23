Ext.define('AppDashboard.view.WidTiposCambio.ChartTiposCambio', {
    extend: 'Ext.Panel',
    xtype: 'charttiposcambio',

    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.series.Line',
        'Ext.chart.axis.Numeric',
        'Ext.draw.modifier.Highlight',
        'Ext.chart.axis.Time',
        'Ext.chart.interactions.ItemHighlight'
    ],

    layout: 'fit',



    tbar: [
        '->',
        {
            text: 'Refresh',
            
            hidden:true,
            handler: function () {
                var store = this.up('panel').down('cartesian').getStore();
                store.refreshData();
            }
        },
        {
            text: 'Cambiar Tema',
            handler: function () {
                var panel = this.up().up(),
                    chart = panel.down('cartesian'),
                    currentThemeClass = Ext.getClassName(chart.getTheme()),
                    themes = Ext.chart.theme,
                    themeNames = [],
                    currentIndex = 0,
                    name;

                for (name in themes) {
                    if (Ext.getClassName(themes[name]) === currentThemeClass) {
                        currentIndex = themeNames.length;
                    }
                    if (name !== 'Base' && name.indexOf('Gradients') < 0) {
                        themeNames.push(name);
                    }
                }
                chart.setTheme(themes[themeNames[++currentIndex % themeNames.length]]);
                chart.redraw();
            }
        }
    ],

    items: [{
        xtype: 'cartesian',
        height: 500,
        store: {
            type: 'StoreTiposCambio'
        },
        id: 'line-chart-markers',
        background: 'white',
        interactions: [
            {
            type: 'panzoom',
            zoomOnPanGesture: true
        },
            'itemhighlight'
        ],
        legend: {
            position: 'bottom'
        },
        series: [
            {
                type: 'line',
                label: {
                    field: 'FACTOR',
                    display: 'rotate',
                    font:'10px Helvetica'
                },
//                tooltip: {
//                    trackMouse: true,
//                    width: 140,
//                    height: 28,
//                    renderer: function (storeItem, item) {
//                       // this.setHtml(storeItem.get('name') + ': ' + storeItem.get('data1') + ' views');
//                    }
//                  },

                xField: 'FECHA',
                yField: 'FACTOR',
                fill: true,
                style: {
                    smooth: true,
                    miterLimit: 5,
                    lineCap: 'miter',
                    strokeOpacity: 1,
                    fillOpacity: 0.7,
                    lineWidth: 3
                },
                title: 'DOLAR',
                highlight: {
                    scale: 0.9
                },
                marker: {
                    type: 'image',
                    src: 'resources/images/square.png',
                    width: 48,
                    height: 48,
                    x: -24,
                    y: -24,
                    scale: 0.3,
                    fx: {
                        duration: 200
                    }
                }
            }

        ],
        axes: [
            {
                type: 'numeric',
                position: 'left',
                fields: 'FACTOR',
                minimum: 13,
                maximum: 16,
                increment : 0.1,
                 title: 'Importe'
//                 ,
//                     renderer: function (v, layoutContext) {
//                    // Custom renderer overrides the native axis label renderer.
//                    // Since we don't want to do anything fancy with the value
//                    // ourselves except appending a '%' sign, but at the same time
//                    // don't want to loose the formatting done by the native renderer,
//                    // we let the native renderer process the value first.
//                    return layoutContext.renderer(v) + '%';
//                }

            },
            {
                type: 'category',
                position: 'bottom',
                title:'Fechas',
               // visibleRange: [0, 15],
                fields: 'FECHA'
            }
        ]
    }],

    initComponent: function () {
        this.callParent();

    }

});