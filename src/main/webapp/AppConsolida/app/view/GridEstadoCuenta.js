Ext.define('AppConsolida.view.GridEstadoCuenta', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridestadocuenta',
    itemId: 'gridestadocuenta',
    xtype: 'gridestadocuenta',
    store: 'StoreEstadoCuenta',
    autoScroll: true,
    initComponent: function() {
        var me = this;
        var encode = true;
        var local = false;

//        var filters = {
//            ftype: 'filters',
//            encode: encode,
//            local: local,
//            filters: [{
//                    type: 'boolean',
//                    dataIndex: 'visible'
//                }]
//        };

        Ext.apply(me, {
//            features: [
//                filters
//            ],
            multiSelect: true,
            tbar: [
                '->',
                {
                    iconCls: 'clean-filter-icon',
                    text: 'Limpiar Filtros',
                    handler: function(btn) {
                        // msgOut('Excel');
                        me.fireEvent("cleanFiltersEstadoCuenta", btn);
                    }
                },
                '-',
                {
                    iconCls: 'reload-icon',
                    text: 'Recarga Datos',
                    itemId: 'btnRecargaEstadoCuenta',
                    id: 'btnRecargaEstadoCuenta',
                    name: 'btnRecargaEstadoCuenta',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("recargaEstadoCuenta", btn);
                    }
 },
            ],
            columns: [
                {
                    dataIndex: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'cxpCOMPANIA',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    flex: 1
                },
                {
                    dataIndex: 'FECHA',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'date'
                    },
                    name: 'FECHA',
                    id: 'cxpFECHA',
                    sortable: true,
                    header: 'Fecha',
                    flex: 1,
                    format: 'd/m/Y',
                    renderer: function(value) {
                        if (Ext.isDate(value)) {
                            return   Ext.Date.format(value, 'd/m/Y');
                        } else {
                            return  value;
                        }

                    }
                },
                {
                    dataIndex: 'REFERENCIA',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'text'
                    },
                    name: 'REFERENCIA',
                    id: 'cxpREFERENCIA',
                    sortable: true,
                    header: 'Referencia',
                    flex: 1
                },
                {
                    dataIndex: 'REFERENCIA2',
                    name: 'REFERENCIA2',
                    filterable: true,
                    filter: {
                        type: 'text'
                    },
                    id: 'cxpREFERENCIA2',
                    sortable: true,
                    header: 'Referencia2',
                    flex: 1

                },
                {
                    dataIndex: 'CARGOS',
                    name: 'DEBE',
                    filterable: true,
                    hidden: false,
                    id: 'cxpDEBE',
                    sortable: true,
                    header: 'DEBE',
                    flex: 1
                },
                {
                    dataIndex: 'ABONOS',
                    name: 'HABER',
                    filterable: true,
                    hidden: false,
                    id: 'cxpHABER',
                    sortable: true,
                    header: 'HABER',
                    flex: 1
                },
                {
                    dataIndex: 'ESTATUS',
                    name: 'ESTATUS',
                    filterable: true,
                    hidden: false,
                    id: 'cxpESTATUS',
                    sortable: true,
                    header: 'ESTATUS',
                    flex: 1
                }
            ]
        });


        this.callParent(arguments);
    }



});


