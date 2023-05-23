Ext.define('AppConsolida.view.GridAuxiliar', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridauxiliar',
    itemId: 'gridauxiliar',
    xtype: 'gridauxiliar',
    store: 'StoreAuxiliar',
    autoScroll: true,
    initComponent: function() {
        var me = this;


     

       
       

        Ext.apply(me, {
        
            multiSelect: true,
            tbar: [
                '->',
                {
                    iconCls: 'clean-filter-icon',
                    text: 'Limpiar Filtros',
                    handler: function(btn) {
                        me.fireEvent("cleanFiltersAux", btn);
                    }
                }                              

            ],
            columns: [
                {
                    dataIndex: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'consCOMPANIA',
                    sortable: true,
                    hidden: true,
                    header: 'Compania'
                },
                {
                    dataIndex: 'FECHA',
                    name: 'FECHA',
                    hidden: false,
                    filterable: true,          
                    id: 'consFECHA',
                    sortable: true,
                    header: 'Fecha'
                },
                {
                    dataIndex: 'NUMERO',
                    name: 'NUMERO',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'numero'
                    },
                    id: 'factNUMERO',
                    sortable: true,
                    header: 'Numero'
                },
                {
                    dataIndex: 'TIPO_POLIZA',
                    name: 'TIPO_POLIZA',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'date'
                    },
                    id: 'factTIPO_POLIZA',
                    sortable: true,
                    header: 'Tipo Poliza'
                },
                {
                    dataIndex: 'SEC',
                    name: 'SEC',
                    id: 'consSEC',
                    sortable: true,
                    hidden: true,
                    header: 'SEC'
                },
                {
                    dataIndex: 'CUENTA_ALIAS',
                    name: 'CUENTA',
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'text'
                    },
                    id: 'factCUENTA',
                    sortable: true,
                    header: 'CUENTA'
                },
                {
                    dataIndex: 'CARGOS',
                    name: 'CARGOS',
                    hidden: false,
                    id: 'consCARGOS',
                    sortable: true,
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    header: 'CARGOS',
                    align: 'right',
                    renderer: function(value) {
                        if (Ext.isEmpty(value)) {
                            return '0';
                        } else {
                            return '<span style="color:blue">' + Ext.util.Format.usMoney(value) + '</span>';
                        }
                    }
                },
                {
                    dataIndex: 'ABONOS',
                    name: 'ABONOS',
                    hidden: false,
                    id: 'consABONOS',
                    sortable: true,
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    header: 'ABONOS',
                    align: 'right',
                    renderer: function(value) {
                        if (Ext.isEmpty(value)) {
                            return '0';
                        } else {
                            return '<span style="color:blue">' + Ext.util.Format.usMoney(value) + '</span>';
                        }
                    }
                },
                 {
                    dataIndex: 'ESTATUS',
                    name: 'ESTATUS',
                    id: 'consESTATUS',
                    sortable: true,
                 
                    header: 'ESTATUS'
                }
            ]

        });


        this.callParent(arguments);
    }



});


