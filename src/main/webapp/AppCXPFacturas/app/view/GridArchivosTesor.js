
Ext.define('AppCXPFacturas.view.GridArchivosTesor', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridarchivostesor',
    itemId: 'gridarchivostesor',
    xtype: 'gridarchivostesor',
    flex: 2,
    title: 'Archivos',
    split: true,
    collapsible: true,
    habilitaMenu: false,
    region: 'center',
    column: null,
    store: 'StoreArchivosTesor',
    initComponent: function () {

        var me = this;

        var encode = true;
        var local = false;
        var filters = {
            ftype: 'filters',
            encode: encode,
            local: local,
            filters: [{
                    type: 'boolean',
                    dataIndex: 'visible'
                }]
        };
       //var storeFolio = Ext.create('AppArchivoPagos.store.StoreFolioArchivos');
        //var storemensajes = Ext.create('AppTesoreria.store.StoreFacturas');
        var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        });

        var selectAll = Ext.create('Ext.Action', {
            iconCls: 'checkall-icon',
            text: 'Seleccinar todos',
            disabled: false,
            handler: function (widget, view, rec, node, index) {
                me.fireEvent("selectAllM", widget, me.poscol);
            }
        });
        var chooseAll = Ext.create('Ext.Action', {
            iconCls: 'checkall-icon',
            text: 'Deseleccinar todos',
            disabled: false,
            handler: function (widget, view, rec, node, index) {
                me.fireEvent("chooseAllM", widget, me.poscol);
            }
        });


        var contextMenu = Ext.create('Ext.menu.Menu', {
            items: [
              

            ]
        });

        //store
        Ext.apply(this, {
            plugins: [cellEditing],
            features: [
                filters

            ],
            tbar: [
                
                  
                
                '->',
               // {
               //     iconCls: 'clear-filter',
               //     text: 'Limpiar Filtros',
               //     handler: function (btn) {
               //         // msgOut('Excel');
               //         console.log('flter');
               //         me.fireEvent("limpiaFiltros");
               //     }
               // },
                 {
                    iconCls: 'search-icon',
                    text: 'Ver Archivos',
                    handler: function (btn) {
                       
                        me.fireEvent("verArchivoTesor");
                    }
                }
              
                
                
                
                

            ],
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 40,
                    sortable: false
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Compania',
                    dataIndex: 'COMPANIA_CXP',
                    name: 'COMPANIA_CXP',
                    id: 'conc_COMPANIA_CXP',
                    sortable: true,
                    flex: 1,
                    hidden:true,
                    filterable: true
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Folio',
                    dataIndex: 'FOLIO_CXP',
                    name: 'FOLIO_CXP',
                    id: 'conc_FOLIO_CXP',
                    sortable: true,
                    flex: 1,
                    filterable: true
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Sec',
                    dataIndex: 'SEC_CXP',
                    name: 'SEC_CXP',
                    id: 'conc_SEC_CXP',
                    sortable: true,
                    flex: 1,
                    filterable: true
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Path',
                    dataIndex: 'PATH_CXP',
                    name: 'PATH_CXP',
                    id: 'conc_PATH_CXP',
                    sortable: true,
                    flex: 1,
                    hidden:true,
                    filterable: true
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Url',
                    dataIndex: 'URL_CXP',
                    name: 'URL_CXP',
                    id: 'conc_URL_CXP',
                    sortable: true,
                    hidden:true,
                    flex: 1,
                    filterable: true
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Nombre',
                    dataIndex: 'NOMBRE_CXP',
                    name: 'NOMBRE_CXP',
                    id: 'conc_NOMBRE_CXP',
                    sortable: true,
                    flex: 1,
                    filterable: true
                }
//                {

            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreArchivosTesor'
                })
            ],
            viewConfig: {
                stripeRows: true,
                listeners: {
                    itemcontextmenu: function (view, rec, node, index, e) {
                        e.stopEvent();
                        if (me.habilitaMenu) {
                            contextMenu.showAt(e.getXY());
                        }
                        return false;
                    },
                    cellcontextmenu: function (view, cell, cellIndex, record, row, rowIndex, e) {
                        var column = view.getHeaderByCell(cell);
                        var position = view.getPositionByEvent(e);
                        var columnIndex = position.column;
                        var dataIndex = column.dataIndex;
                        me.poscol = dataIndex;


                        me.habilitaMenu = true;

                        me.column = 'MSJENVIAR';


                        e.preventDefault();

                    }
                }
            }
        });//fin this 
        this.callParent(arguments);
    }//fin funcion

});
