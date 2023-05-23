Ext.define('AppCargaFE2.view.GridDirectorios', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.griddirectorios',
    itemId: 'griddirectorios',
    xtype: 'griddirectorios',
    store: 'StoreDirectorios',
    title: 'Directorios',
    poscol: null,
    habilitaSelectDir: false,
    initComponent: function() {
          var me = this;
          
           var sellActionDir = Ext.create('Ext.Action', {
            iconCls: 'delete-icon',
            text: 'Quitar Todos',
            disabled: false,
            handler: function(widget, event) {
                me.fireEvent("deSelectAllDir", widget, me.poscol);
            }
        });
        
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

        var buyActionDir = Ext.create('Ext.Action', {
            iconCls: 'checkall-icon',
            text: 'Seleccionar todos',
            disabled: false,
            handler: function(widget, view, rec, node, index) {

                me.fireEvent("selectAllDir", widget, me.poscol);
            }
        });
         var contextMenu = Ext.create('Ext.menu.Menu', {
            items: [
                buyActionDir,
                sellActionDir
               
            ]
        });
    
        Ext.apply(me, {
              features: [
               filters
            ],
            multiSelect:true,
            tbar: [
                  {
                            iconCls: 'clean-filter-icon',
                            text: 'Limpiar Filtros',
                            handler: function(btn) {
                                // msgOut('Excel');
                                me.fireEvent("cleanFiltersDir", btn);
                            }
                  },
                '->',
                {
                    iconCls: 'process-icon',
                    text: 'Procesar Archivos',
                    itemId: 'btnProcesarArchivo',
                    id: 'btnProcesarArchivo',
                    name: 'btnProcesarArchivo',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("procesarArchivo", btn);
                    }

                },
                 {
                    iconCls: 'reload-icon',
                    text: 'Recargar',
                    itemId: 'btnRecargarDirectory',
                    id: 'btnRecargarDirectory',
                    name: 'btnRecargarDirectory',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("recargarDirectory", btn);
                    }

                }

            ],
            columns: [
                {
                    dataIndex: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'arCOMPANIA2',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    width:100
                },
                {
                    dataIndex: 'NUMERO',
                    hidden: false,
                    name: 'NUMERO',
                    id: 'arNUMERO2',
                    sortable: true,
                    header: 'Numero',
                    width:80
                },
                {
                    dataIndex: 'XML',
                    filterable: true,
                    hidden: false,
                    name: 'colXML',
                    id: 'colXML',
                    sortable: true,
                    header: 'XML',
                    width:500
                },
                { 
                    xtype : 'checkcolumn', 
                    text : 'Cargar Archivo', 
                    dataIndex : 'FLAG_CARGA', 
                    width:150
                },
                { 
                    
                    text : 'CARGA', 
                    dataIndex : 'CARGA', 
                    hidden: true,
                    width:150
                }
                


            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreDirectorios'
                })
            ],
             viewConfig: {
                stripeRows: true,
                listeners: {
                    itemcontextmenu: function(view, rec, node, index, e) {
//                     
                        e.stopEvent();
                        //  msgOut(me.habilitaMenu);
                        if (me.habilitaSelectDir) {
                            contextMenu.showAt(e.getXY());
                        }
                        return false;
                    },
                    cellcontextmenu: function(view, cell, cellIndex, record, row, rowIndex, e) {
                        var column = view.getHeaderByCell(cell);
                        var position = view.getPositionByEvent(e);
                        var columnIndex = position.column;
                        var dataIndex = column.dataIndex;
                        me.poscol = dataIndex;
                        msgOut(dataIndex);
                       // if (dataIndex === 'FLAG_CARGA') {
                            me.habilitaSelectDir = true;
                        //}
                        
                        

                        e.preventDefault();
//                           // alert(dataIndex);
                    }
                }
            }

        });


        this.callParent(arguments);
    }



});


