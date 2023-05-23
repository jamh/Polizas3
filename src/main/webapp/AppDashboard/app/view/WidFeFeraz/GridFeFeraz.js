Ext.Loader.setPath('Ext.grid.filters', 'resources/js/extjs5/filters');

Ext.define('AppDashboard.view.WidFeFeraz.GridFeFeraz', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridfeferaz',
    itemId: 'gridfeferaz',
    xtype: 'gridfeferaz',
    store: 'StoreFe',
    requires: [
        'Ext.grid.filters.Filters'        
    ],


    initComponent: function() {
        var me =this;
        

        Ext.apply(this, {
              
                emptyText: 'No Matching Records',
                loadMask: true,
                stateful: true,
            plugins: [
                 'gridfilters'
            ],


            tbar: [
                '->',
                 {
                    xtype: 'splitbutton',
                    text: 'Ver...',
                    iconCls: 'see-icon',
                    menu: [
               
                        {
                            iconCls: 'xml-icon',
                            text: 'Ver XML',
                            itemId: 'btnVerDashXML',
                            id: 'btnVerDashXML',
                            name: 'btnVerDashXML',
                            handler: function(btn) {
                                me.fireEvent("verDashXML", btn);
                            }

                        },
                        {
                            iconCls: 'pdf-icon',
                            text: 'Ver PDF',
                            itemId: 'btnVerDashPDF',
                            id: 'btnVerDashPDF',
                            name: 'btnVerDashPDF',
                            handler: function(btn) {
                                me.fireEvent("verDashPDF", btn);
                            }

                }]
            }
              

            ],
            columns: [
                {
                    dataIndex: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'feCOMPANIA',
                    sortable: true,
                    hidden: false,
                    header: 'Compania',
                    flex: 1
                },
                {
                    dataIndex: 'ID_FACTURA',
                    name: 'ID_FACTURA',
                    id: 'feID_FACTURA',
                    sortable: true,
                    hidden: false,
                    header: 'Id Factura',
                    flex: 1
                },
                {
                    dataIndex: 'FOLIO',
                    name: 'FOLIO',
                    id: 'feFOLIO',
                    sortable: true,
                    hidden: false,
                    header: 'Folio',
                    flex: 1
                },
                {
                    dataIndex: 'IVA',
                    name: 'IVA',
                    id: 'feIVA',
                    sortable: true,
                    hidden: false,
                    header: 'Iva',
                    flex: 1,
                    align: 'right',
                    renderer: this.money
                },
                {
                    dataIndex: 'SUBTOTAL',
                    name: 'SUBTOTAL',
                    id: 'feSUBTOTAL',
                    sortable: true,
                    hidden: false,
                    header: 'Subtotal',
                    flex: 1,
                    align: 'right',
                    renderer: this.money
                },
                {
                    dataIndex: 'TOTAL',
                    name: 'TOTAL',
                    id: 'feTOTAL',
                    sortable: true,
                    hidden: false,
                    header: 'Total',
                    flex: 1,
                    align: 'right',
                    renderer: this.money
                }


            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreFe'
                })
            ]

        });


        this.callParent(arguments);
    },
    money: function(val) {
        if (val > 0) {
            return '<span style="color:green;font-weight: bold">' + formatCurrency(Math.round(val * 1000) / 1000) + '</span>';
        } else if (val < 0) {
            return '<span style="color:red;font-weight: bold">' + formatCurrency(Math.round(val * 1000) / 1000) + '</span>';
        }
        return val;
    }



});





