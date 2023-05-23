Ext.define('AppFormulas.view.GridCedulaDet', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridceduladet',
    itemId: 'gridceduladet',
    xtype: 'gridceduladet',
    flex:2,
     store: 'StoreCedulaDet',
    title: 'Detalle Cedula',
    habilitaMenu: false,
    column: null,
    column2: null,
    rowLines:true,
    columnLines:true,
    sortableColumns:false,
   // bodyBorder:true,
//   border: 5,
//    style: {
//        borderColor: 'red',
//        borderStyle: 'solid'
//    },
    initComponent: function() {
        var me = this;
        
        var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 2,
            onSpecialKey: function(ed, field, e) {
                me.fireEvent("keydetalle", ed, field, e, this);

            }

        });
        var encode = true;
        var local = false;

         var addRenglon = Ext.create('Ext.Action', {
            iconCls: 'poliza-icon',
            text: 'Agregar renglon',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                
                
                
                me.fireEvent("agregarDetPos", widget, cellEditing,me.poscol);
            }
        });
       
          var contextMenu = Ext.create('Ext.menu.Menu', {
            items: [
              addRenglon
                , '-'    
                
            ]
        });
        
         
     

        Ext.apply(me, {
            
            plugins: [cellEditing],
            multiSelect: true,
            tbar: [
            //     {
            //        xtype: 'checkboxfield',
            //        boxLabel: 'Copiar Excel',
            //        name: 'copiDetF',
            //        inputValue: '0',
            //        id: 'copi1DetF',
            //        itemId: 'copi1DetF'


              //  }//,
       
//                '->',
//             
//                {
//                    iconCls: 'add-icon',
//                    text: 'Agregar',
//                    itemId: 'btnAgregarDetFormula',
//                    id: 'btnAgregarDetFormula',
//                    name: 'btnAgregarDetFormula',
//                    scope: this,
//                    handler: function(btn) {
//
//                        this.fireEvent("addDetFormula", btn, cellEditing);
//                    }
//
//
//                },
//                '-',
//                {
//                    iconCls: 'delete-icon',
//                    text: 'Borrar',
//                    itemId: 'btnBorrarDetFormula',
//                    id: 'btnBorrarDetFormula',
//                    name: 'btnBorrarDetFormula',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("deteleDetFormula", btn);
//                    }
//                }
            ],
            columns: [
                {
                    dataIndex: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'detCOMPANIAConv',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    flex: 1
                },
                {
                    dataIndex: 'CEDULA',
                    hidden: true,
                    name: 'CEDULA',
                    id: 'detCEDULA',
                    sortable: true,
                    header: 'Cedula',
                    flex: 1
                },
                {
                    dataIndex: 'COL1',                    
                    name: 'COL1',
                    id: 'colCOL1',
                    sortable: true,
                    header: 'A',
                    flex: 1,
                    field: {
                        xtype: 'textfield',
                        name: 'txtCOL1',
                        id: 'txtCOL1',
                        maxLength: 50
                    }
                },
                {
                    dataIndex: 'COL2',                    
                    name: 'COL2',
                    id: 'colCOL2',
                    sortable: true,
                    header: 'B',
                    flex: 1,
                    field: {
                        xtype: 'textfield',
                        name: 'txtCOL2',
                        id: 'txtCOL2',
                        maxLength: 50
                    }
                },
                {
                    dataIndex: 'COL3',                    
                    name: 'COL3',
                    id: 'colCOL3',
                    sortable: true,
                    header: 'C',
                    flex: 1,
                    field: {
                        xtype: 'textfield',
                        name: 'txtCOL3',
                        id: 'txtCOL3',
                        maxLength: 50
                    }
                },
                {
                    dataIndex: 'COL4',                    
                    name: 'COL4',
                    id: 'colCOL4',
                    sortable: true,
                    header: 'D',
                    flex: 1,
                    field: {
                        xtype: 'textfield',
                        name: 'txtCOL4',
                        id: 'txtCOL4',
                        maxLength: 50
                    }
                },
                {
                    dataIndex: 'COL5',                    
                    name: 'COL5',
                    id: 'colCOL5',
                    sortable: true,
                    header: 'E',
                    flex: 1,
                    field: {
                        xtype: 'textfield',
                        name: 'txtCOL5',
                        id: 'txtCOL5',
                        maxLength: 50
                    }
                },
                {
                    dataIndex: 'COL6',                    
                    name: 'COL6',
                    id: 'colCOL6',
                    sortable: true,
                    header: 'F',
                    flex: 1,
                    field: {
                        xtype: 'textfield',
                        name: 'txtCOL6',
                        id: 'txtCOL6',
                        maxLength: 50
                    }
                },
                {
                    dataIndex: 'COL7',                    
                    name: 'COL7',
                    id: 'colCOL7',
                    sortable: true,
                    header: 'G',
                    flex: 1,
                    field: {
                        xtype: 'textfield',
                        name: 'txtCOL7',
                        id: 'txtCOL47',
                        maxLength: 50
                    }
                },
                {
                    dataIndex: 'COL8',                    
                    name: 'COL8',
                    id: 'colCOL8',
                    sortable: true,
                    header: 'H',
                    flex: 1,
                    field: {
                        xtype: 'textfield',
                        name: 'txtCOL8',
                        id: 'txtCOL8',
                        maxLength: 50
                    }
                },
                {
                    dataIndex: 'COL9',                    
                    name: 'COL9',
                    id: 'colCOL9',
                    sortable: true,
                    header: 'I',
                    flex: 1,
                    field: {
                        xtype: 'textfield',
                        name: 'txtCOL9',
                        id: 'txtCOL9',
                        maxLength: 50
                    }
                },
                {
                    dataIndex: 'COL10',                    
                    name: 'COL10',
                    id: 'colCOL10',
                    sortable: true,
                    header: 'J',
                    flex: 1,
                    field: {
                        xtype: 'textfield',
                        name: 'txtCOL10',
                        id: 'txtCOL10',
                        maxLength: 50
                    }
                }
                
                

            ],
            viewConfig: {
                
                 plugins: {
                    ptype: 'gridviewdragdrop',
                    dragText: 'Moviendo registro...'
                },
                
                
                stripeRows: true,
                listeners: {
                    viewready: function(grid) {
                    var map = new Ext.KeyMap(grid.getEl(),
                            [{
                                    key: "c",
                                    ctrl: true,
                                    fn: function(keyCode, e) {

                                //        if (Ext.getCmp('copi1DetF').getValue())
                                            me.fireEvent("copyDetalleExcel");
                                    }
                                },
                                {
                                    key: "v",
                                    ctrl: true,
                                    fn: function() {
                                  //      if (Ext.getCmp('copi1DetF').getValue())
                                            me.fireEvent("pasteDetalleExcel");

                                    }
                                },
                                {
                                    key: "z",
                                    ctrl: true,
                                    fn: function() {
                                       // if (Ext.getCmp('retDetF').getValue())
                                       
                                       console.log('comando z');
                                       
                                            me.fireEvent("returnDetCed");

                                    }
                                }
                            ]
                            );

                },
                    itemcontextmenu: function(view, rec, node, index, e) {
                    //    console.log('en listener');
                    //    e.stopEvent();
                    //    if (me.habilitaMenu) {
                    //        contextMenu.showAt(e.getXY());
                    //    }
                    //    return false;
                    },
                    cellcontextmenu: function(view, cell, cellIndex, record, row, rowIndex, e) {
                        var column = view.getHeaderByCell(cell);
                        var position = view.getPositionByEvent(e);
                        var columnIndex = position.column;
                        var dataIndex = column.dataIndex;
                        me.poscol = rowIndex;
                        
                       // console.log(view);
                       // console.log(cell);
                        //console.log(cellIndex);
                        console.log(record);
                         //console.log(row);
                          console.log(rowIndex);
                         // console.log(e);
                         // console.log(column);
                        
                       
                      //      me.habilitaMenu = true;
 
                          //    me.column = 'NOMIDCONCGASTO';
                          //    me.column2 = 'FECHA_POL';
                                           
                        e.preventDefault();

                    },
                    drop:function( node, data, overModel, dropPosition, eOpts ){
                        
                        console.log('drop');
                        me.fireEvent("dropData", dropPosition);
                        
                    }
                }
            }


        });


        this.callParent(arguments);
    }



});


