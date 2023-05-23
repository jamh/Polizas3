Ext.Loader.setPath('Ext.grid.filters', 'resources/js/extjs5/filters');

Ext.define('AppDashboard.view.WidSaldos.GridSaldos', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridsaldos',
    itemId: 'gridsaldos',
    xtype: 'gridsaldos',
    store: 'StoreSaldos',
    requires: [
        'Ext.grid.filters.Filters'        
    ],


    initComponent: function() {
        var me =this;
        
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

        var storeCalendario = Ext.create('AppDashboard.store.StoreCalendario');
        var storePeriodo = Ext.create('AppDashboard.store.StorePeriodo');
        Ext.apply(this, {
//              plugins:
              
                emptyText: 'No Matching Records',
                loadMask: true,
                stateful: true,
            plugins: [{
                    ptype: 'rowexpander',
                    rowBodyTpl: new Ext.XTemplate(
                            '<h4>{CUENTA_ALIAS}/{NOMBRE}</h4>',
                            '<p><b>CARGOS:</b> {CARGOS:this.formatChange}</p>',
                            '<p><b>ABONOS:</b> {ABONOS:this.formatChange}</p>',
                            {
                                formatChange: function(v) {
                                    var color = v >= 0 ? 'green' : 'red';
                                    return '<span style="color: ' + color + ';">' + Ext.util.Format.usMoney(v) + '</span>';
                                }
                            })
                },
                 'gridfilters'
            ],


            tbar: [
                {
                    xtype: 'combobox',
                    name: 'cboCalendario',
                    id: 'cboCalendario',
                    store: storeCalendario,
                    valueField: 'CALENDARIO',
                    displayField: 'CALENDARIO_NAME',
                    triggerAction: 'all',
                    emptyText: 'Calendario',
                    width: 200,
                    listConfig: {
                        loadingText: 'Buscando...',
                        emptyText: 'Calendario no encontrado.'
                    },
                    allowBlank: false,
                    listeners: {
                        'select': function(valor) {
                            if (Ext.isEmpty(valor.value))
                                return;
                            Ext.getCmp('cboPeriodo').clearValue();
                            storePeriodo.removeAll();
                            storePeriodo.proxy.extraParams.calendario = valor.value;
                            storePeriodo.load();


                        }
                    }
                },
                {
                    xtype: 'combobox',
                    name: 'cboPeriodo',
                    id: 'cboPeriodo',
                    store: storePeriodo,
                    valueField: 'PERIODO',
                    displayField: 'PERIODO',
                    triggerAction: 'all',
                    emptyText: 'Periodo',
                    width: 200,
                    listConfig: {
                        loadingText: 'Buscando...',
                        emptyText: 'Periodos No encontrados.'
                    },
                    allowBlank: false,
                       listeners: {
                        'select': function(valor) {
                            if (Ext.isEmpty(valor.value))
                                return;
                            
                            var store = me.getStore(),
                                cal=   Ext.getCmp('cboCalendario').getValue(),
                                per =valor.value;
                            store.proxy.extraParams.calendario = cal;
                            store.proxy.extraParams.periodo = per;
                                store.loadData([], false);
                            store.load();
                             
                            
                        }
                    }
                },
                 {
                    iconCls: 'search-icon',
                    text: 'Ver Saldos',
                    itemId: 'btnVerSaldo',
                    id: 'btnVerSaldo',
                    name: 'btnVerSaldo',
                      scope: this,
                            handler: function(btn) {
                                this.fireEvent("imprimirDashSaldo", btn);
                     }

                }

            ],
            columns: [
                {
                    dataIndex: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'salCOMPANIA',
                    sortable: true,
                    hidden: true,
                    header: 'Compania',
                    flex: 1
                },
                {
                    dataIndex: 'CALENDARIO',
                    name: 'CALENDARIO',
                    hidden: true,
                    id: 'salCALENDARIO',
                    sortable: true,
                    header: 'Calendario',
                    flex: 1
                },
                {
                    dataIndex: 'PERIODO',
                    hidden: true,
                    name: 'PERIODO',
                    id: 'salPERIODO',
                    sortable: true,
                    header: 'Periodo',
                    flex: 1
                },
                {
                    dataIndex: 'CUENTA_ALIAS',
                    hidden: false,
                    name: 'CUENTA_ALIAS',
                    id: 'salCUENTA',
                    sortable: true,
                    header: 'Cuenta',
                    flex: 1,
                    filter: {
                        type: 'string',
                        itemDefaults: {
                            emptyText: 'Buscar...'
                        }
                    }
                    
                  
                },
                {
                    dataIndex: 'SALDO_INICIAL',
                    name: 'SALDO_INICIAL',
                    hidden: false,
                    id: 'salSALDO_INICIAL',
                    sortable: true,
                    header: 'Saldo Inicial',
                    renderer: this.money,
                    align: 'right',
                    flex: 1,
                   
                    filter: 'number'
                },
                {
                    dataIndex: 'CARGOS',
                    name: 'CARGOS',
                    id: 'salCARGOS',
                    sortable: true,
                    hidden: false,
                    header: 'Cargos',
                    align: 'right',
                    flex: 1,
                    renderer: this.money,
                 
                    filter: 'number'
                },
                {
                    dataIndex: 'ABONOS',
                    name: 'ABONOS',
                    id: 'salABONOS',
                    sortable: true,
                    hidden: false,
                    header: 'Abonos',
                    align: 'right',
                    flex: 1,
                    renderer: this.money,
                   
                   filter: 'number'
                },
                {
                    dataIndex: 'SALDO_FINAL',
                    name: 'SALDO_FINAL',
                    hidden: false,
                    id: 'salSALDO_FINAL',
                    sortable: true,
                    header: 'Saldo Final',
                    align: 'right',
                    renderer: this.money,
                    flex: 1,
              
                    filter: 'number'
                }


            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreSaldos'
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



