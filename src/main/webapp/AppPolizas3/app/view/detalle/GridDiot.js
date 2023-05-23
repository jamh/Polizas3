Ext.define('AppPolizas3.view.detalle.GridDiot', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.griddiot',
    itemId: 'griddiot',
    xtype: 'griddiot',
//    bodyPadding: 5,
//    width: 600,
    flex:1,
     store: 'StoreDiot',
    //title: 'Detalle Convertidor',
    initComponent: function() {
        var me = this;
        
         Ext.util.Format.thousandSeparator = ',';
        
        var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1,
            onSpecialKey: function(ed, field, e) {
                me.fireEvent("keyDiot", ed, field, e, this);

            }

        });
        
        

        Ext.apply(me, {
            
            plugins: [cellEditing],
//            
            tbar: [
       
                '->',
             
                {
                    iconCls: 'save-icon',
                    text: 'Guardar',
                    itemId: 'btnGuardarDiot',
                    id: 'btnGuardarDiot',
                    name: 'btnGuardarDiot',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("saveDiot", btn);
                    }

                }//,
//                '-',
//                {
//                    iconCls: 'delete-icon',
//                    text: 'Borrar',
//                    itemId: 'btnBorrarDetConv',
//                    id: 'btnBorrarDetConv',
//                    name: 'btnBorrarDetConv',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("deteleDetConvertidor", btn);
//                    }
//                }
            ],
            columns: [
               
                
                {
                    dataIndex: 'COMPANIA',
                    hidden: true,
                    name: 'COMPANIA',
                    id: 'diotCOMPANIA',
                    sortable: true,
                    header: 'COMPANIA',
                    flex: 1,
                     field: {
                        xtype: 'textfield',
                        name: 'txtCompaniaDiot',
                        id: 'txtCompaniaDiot',
                        maxLength: 50
                    }
                },
                {
                    dataIndex: 'CONCEPTO',
                    hidden: true,
                    name: 'CONCEPTO',
                    id: 'diotCONCEPTO',
                    sortable: true,
                    header: 'CONCEPTO',
                    flex: 1,
                     field: {
                        xtype: 'textfield',
                        name: 'txtConceptoDiot',
                        id: 'txtConceptoDiot',
                        maxLength: 50
                    }
                },
                 {
                    dataIndex: 'NOMBRE',
                    hidden: false,
                    name: 'NOMBRE',
                    id: 'diotNOMBRE',
                    sortable: true,
                    header: 'NOMBRE',
                    flex: 1//,
//                     field: {
//                        xtype: 'textfield',
//                        name: 'txtNombreDiot',
//                        id: 'txtNombreDiot',
//                        maxLength: 50
//                    }
                },
                
                  {
                    dataIndex: 'IMPORTE',
                    hidden: false,
                    name: 'IMPORTE',
                    id: 'diotIMPORTE',
                    sortable: true,
                    header: 'IMPORTE',
                    flex: 1,
                    summaryType: 'sum',
                    summaryRenderer: Ext.util.Format.usMoney,
                    width: 100,
                    align: 'right',
                    field: {
                        xtype: 'numberfield',
                        allowNegative: true,
                        allowDecimals: true,
                        decimalSeparator: '.'
                    },
                    
                    renderer: this.money
                }

            ]
//            ,
//            dockedItems: [
//                Ext.create('Ext.toolbar.Paging', {
//                    dock: 'bottom'//,
//                            // store: 'StoreErpDetConvertidor'
//                })
//            ]

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





