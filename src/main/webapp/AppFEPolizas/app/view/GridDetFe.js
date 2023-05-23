Ext.define('AppFEPolizas.view.GridDetFe', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.griddetfe',
    itemId: 'griddetfe',
    xtype: 'griddetfe',
    flex:1,
    title: 'Detalle Facturas',
    store: 'StoreDetalleFacturas',
    split: true,
    collapsible: true,
    autoScroll : true,
    initComponent: function() {
        var me = this;
        Ext.util.Format.thousandSeparator= ',';
        var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1

        });
        
         var storeCuentaFE = Ext.create('AppFEPolizas.store.StoreCuentas');
        var rfc_cbo = Ext.create('AppFEPolizas.store.StoreRfc');
        
         var importe = Ext.create('Ext.data.Store', {
            fields: ['TIPO', 'NAME'],
                data : [
                    {"TIPO":"C", "NAME":"CARGO"},
                    {"TIPO":"A", "NAME":"ABONO"}
                 
                ]
            });

        Ext.apply(me, {
           
            plugins: [cellEditing],            
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 40,
                    sortable: false
                },
                
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CUENTA_ALIAS',
                    name: 'CUENTA',
                    filterable: true,
                    id: 'detCUENTAFE',
                    sortable: true,
                    header: 'Cuenta',
                    flex:1,
                    field: {
                        xtype: 'combobox',
                        name: 'cboCuentaDetFE',
                        id: 'cboCuentaFE',
                        store: storeCuentaFE,
                        minChars: 4,
                        displayField: 'CUENTA_ALIAS',
                        valueField: 'CUENTA_ALIAS',
                        typeAhead: false,
                        validateOnChange: true,
                        allowBlank: false,
                        hideTrigger: true,
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro cuenta.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{CUENTA_ALIAS}</span><h3>{NOMBRE}</h3>';
                            }
                        },                      
                        pageSize: 10
                    }
                },
            
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'RFC',
                    name: 'RFC',
                    filterable: true,
                    id: 'detRFCFE',
                    sortable: true,
                    header: 'R.F.C.',
                    //width: 100,
                    flex:1,
                    field: {
                        xtype: 'combobox',
                        name: 'txtRfcDet',
                        id: 'txtRfcDetFE',
                        store: rfc_cbo,
                        minChars: 2,
                        displayField: 'RFC',
                        valueField: 'RFC',
                        typeAhead: false,
                        // forceSelection:true,
                        validateOnChange: true,
                        //allowBlank: false,
                        // valueNotFoundText : '',
                        hideTrigger: true,
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro rfc.',
                            // Custom rendering template for each item
                            getInnerTpl: function() {
                                //nombreCuenta='{NOMBRE}';
                                return '<span style="color:green;font-weight: bold">{RFC}</span><h3>{NOMBRE}</h3>';
                            }
                        },
                        pageSize: 10


                    }

                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'IMPORTE',
                    sortable: true,
                    header: 'Importe',
                    name: 'IMPORTE',
                    id: 'feIMPORTEFE',
                    stopSelection: false,                 
                    flex:1,
                    field: {
                        xtype: 'numberfield',
                        allowNegative: true,
                        allowDecimals: true,
                        decimalSeparator: '.'
                    },
                    renderer: Ext.util.Format.usMoney


                },
                 {
                    xtype: 'gridcolumn',
                    dataIndex: 'NOMIMPORTE',
                    name: 'NOMIMPORTE',
                      filterable: true,
                    id: 'detNOMIMPORTEFE',
                    sortable: true,
                    header: 'Nombre Importe',
                    hidden:false,
    
                    flex:1,
                    disable: true
                   

                },
                 {
                    xtype: 'gridcolumn',
                    dataIndex: 'TIPO_IMPORTE',
                    name: 'TIPO_IMPORTE',
                      filterable: true,
                    id: 'TIPO_IMPORTEFE',
                    sortable: true,
                    header: 'Tipo de Importe',
                    //width: 300,
                    flex:1,
                    field: {
                        xtype: 'combobox',
                        name: 'cboTIPO_IMPORTE',
                        id: 'cboTIPO_IMPORTEFE',
                        store: importe,
                       // minChars: 4,
                        displayField: 'NAME',
                        valueField: 'TIPO',
                        typeAhead: false,
                        //validateOnChange: true,
                        allowBlank: false
                       
                    },
                    renderer: function(value){
                        if (value === 'C') {
                            return 'CARGO';
                        }else if(value === 'A')
                        return 'ABONO';
                    }
//                

                }
            ],
            dockedItems: [
               
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom'//,
                  //  store: 'StoreDetalle',
//                    id: 'statusDetalle'
                })
                
            ]//,



        });


        this.callParent(arguments);
    }


}
);



