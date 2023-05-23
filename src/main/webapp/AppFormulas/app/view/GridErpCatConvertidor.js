Ext.define('AppFormulas.view.GridErpCatConvertidor', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.griderpcatconvertidor',
    itemId: 'griderpcatconvertidor',
    xtype: 'griderpcatconvertidor',
    store: 'StoreErpCatConvertidor',
//    title: 'Convertidor de Polizas',
    initComponent: function() {
        var me = this;
     //   var storeConcGasto = Ext.create('AppFormulas.store.StoreConcGasto');

     
        var cellEditing2 = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        });

        Ext.apply(me, {
            plugins: [
                cellEditing2
            ],
//            tbar: [
//                {
//                    width: 400,
//                    fieldLabel: 'Buscar',
//                    xtype: 'combobox',
//                  //  store: 'StoreBuscaFactura',
//                    displayField: 'FOLIO',
//                    valueField: 'NUMERO',
//                    emptyText: 'Convertidor no encontrado',
//                    id: 'cboConvertidor',
//                    name: 'cboConvertidor',
//                    minChars : 3,
//                    typeAhead: false,
//                    anchor: '100%',
//                    listConfig: {
//                        loadingText: 'Buscando...',
//                        emptyText: 'No se encontraron datos.',
//                        getInnerTpl: function() {
//                            return '<a class="banner-title">{FOLIO}</a>' +
//                                    '<br /> <a class="banner-text">{RFC}</a>' +
//                                    '<br /> <a class="banner-text">{NOMBRE}</a>'
//                                    
//                                    ;
//                        }
//                    },
//                    listeners: {
//                        scope:this,
//                        select: function(value){
//                            msgOut(value);
//                            // if (e.getKey() == e.ENTER) {                             
//                              this.fireEvent("findConvertidor", Ext.getCmp('cboConvertidor').getValue());
//                             //}
//                        }
//                    },
//                    pageSize: 10
//
//
//                },
//                 {
//                    xtype: 'button',
//                    text: 'Buscar',
//                    iconCls: 'search-icon',
//                    
//                    handler: function(btn) {
//                        me.fireEvent("findConvertidor", Ext.getCmp('cboConvertidor').getValue());
//                    }
//                },
//                '->',
//           
//               
//                {
//                    iconCls: 'add-icon',
//                    text: 'Agregar Convertidor',
//                    itemId: 'btnAddConvertidor',
//                    id: 'btnAddConvertidor',
//                    name: 'btnAddConvertidor',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("addConvertidor", btn);
//                    }
//                },
//                 {
//                    iconCls: 'delete-icon',
//                    text: 'Eliminar Convertidor',
//                    itemId: 'btnDeleteConvertidor',
//                    id: 'btnDeleteConvertidor',
//                    name: 'btnDeleteConvertidor',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("deleteConvertidor", btn);
//                    }
//                }
//   
//               
//            ],
            columns: [
                {
                    dataIndex: 'COMPANIA',
                    name: 'colCOMPANIA',
                    id: 'colCOMPANIA',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    width: 100
                },
                 {
                    dataIndex: 'ORIGEN',
                    name: 'colORIGEN',
                    id: 'colORIGEN',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    width: 100
                }

            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreErpCatConvertidor'
                })
            ]

        });


        this.callParent(arguments);
    }



});


