Ext.define('AppPolizas3.view.detalle.GridDetalle', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.griddetalle',
    itemId: 'griddetalle',
    xtype: 'griddetalle',
    flex: 1,
    title: 'Detalle Polizas',
    // multiSelect: true,
    store: 'StoreDetalle',
    split: true,
    collapsible: true,
    autoScroll: true,
    initComponent: function() {
        var me = this;
        Ext.util.Format.thousandSeparator = ',';
        var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1,
            onSpecialKey: function(ed, field, e) {
                me.fireEvent("keydetalle", ed, field, e, this);

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


        var bandera = Ext.create('Ext.toolbar.TextItem', {id: 'idBandera', text: ''});

        var storeCuenta = Ext.create('AppPolizas3.store.StoreCuentas');
        var storeCC = Ext.create('AppPolizas3.store.StoreCboCC');
        var storeCT = Ext.create('AppPolizas3.store.StoreCboCT');
        var rfc_cbo = Ext.create('AppPolizas3.store.StoreRfc');
         var storeDet = Ext.create('AppPolizas3.store.StoreDetalle');
         
        var dtFechaDocumento = new Ext.form.field.Date({
            name: 'dtFechaDocumento',
            submitFormat: 'd/m/Y',
            format: 'd/m/Y',
            allowBlank: true
        });





        Ext.apply(this, {
            features: [
                filters
              
            ],
            plugins: [cellEditing],
            multiSelect: true,

            listeners: {
                columnresize: function(ct, column, width, eOpts) {
                    me.fireEvent("changeColumn", ct, column, width, eOpts);
                },
//                beforehide:function( this, eOpts ){
//                    
//                },
                columnhide:function( ct, column, eOpts ){
                    
                    me.fireEvent("hideColumn", ct, column, eOpts);
                    
                },
                columnshow: function( ct, column, eOpts ){
                    
                    me.fireEvent("showColumn", ct, column, eOpts);
                    
                },
                viewready: function(grid) {
                    var map = new Ext.KeyMap(grid.getEl(),
                            [{
                                    key: "c",
                                    ctrl: true,
                                    fn: function(keyCode, e) {

                                        if (Ext.getCmp('copi1Det').getValue())
                                            me.fireEvent("copyDetalleExcel");
                                    }
                                },
                                {
                                    key: "v",
                                    ctrl: true,
                                    fn: function() {
                                        if (Ext.getCmp('copi1Det').getValue())
                                            me.fireEvent("pasteDetalleExcel");

                                    }
                                }
                            ]
                            );

                }
            },
            tbar: [
                {
                    xtype: 'checkboxfield',
                    boxLabel: 'Copiar',
                    name: 'copi',
                    inputValue: '0',
                    id: 'copi1',
                    itemId: 'copi1'

                },
                {
                    xtype: 'checkboxfield',
                    boxLabel: 'Copiar Excel',
                    name: 'copiDet',
                    inputValue: '0',
                    id: 'copi1Det',
                    itemId: 'copi1Det'


                },
                {
                    iconCls: 'clean-filter-icon',
                    text: 'Limpiar Filtros',
                    handler: function(btn) {
                        // msgOut('Excel');
                        me.fireEvent("cleanFiltersDet", btn);
                    }
                },
                '->',
                 {
                    iconCls: 'diot-icon',
                    text: 'DIOT',
                    itemId: 'btnDiot',
                    id: 'btnDiot',
                    name: 'btnDiot',
                    scope: this,
                    handler: function(btn) {

                        this.fireEvent("addDiot", btn);
                    }


                },
                {
                    xtype: 'splitbutton',
                    text: 'SAT...',
                    hidden:false,
                    //icon: 'http://sencha.com/favicon.ico',
                    // iconCls: 'add16',
                    menu: [
                        {
                            iconCls: 'icon-sat',
                            text: ' Transaccion SAT',
                            itemId: 'btnTrSAT',
                            id: 'btnTrSAT',
                            name: 'btnTrSAT',
                            scope: this,
                            handler: function(btn) {

                                this.fireEvent("addTrSAT", btn);
                            }


                        },
                        {
                            iconCls: 'delete-icon',
                            text: 'Borrar Transacciones',
                            itemId: 'btnTrdelSAT',
                            id: 'btnTrdelSAT',
                            name: 'btnTrdelSAT',
                            scope: this,
                            handler: function(btn) {

                                this.fireEvent("deleteTrSAT", btn);
                            }


                        }
                        
                    ]
                },
                
                {
                    xtype: 'splitbutton',
                    text: 'Exportar...',
                    hidden:true,
                    //icon: 'http://sencha.com/favicon.ico',
                    // iconCls: 'add16',
                    menu: [{
                            iconCls: 'csv-icon',
                            text: 'Excel',
                            handler: function(btn) {


                                me.fireEvent("downloadExcel", btn);
                            }
                        },
                        {
                            iconCls: 'word-icon',
                            text: 'Word',
                            handler: function(btn) {
                                // msgOut('Excel');
                                me.fireEvent("downloadDocx", btn);
                            }
                        },
                        {
                            iconCls: 'pdf-icon',
                            text: 'Pdf',
                            handler: function(btn) {
                                // msgOut('Excel');
                                me.fireEvent("downloadPdf", btn);
                            }
                        }

                    ]
                },
//                {
//                    iconCls: 'csv-icon',
//                    text: 'Excel',
//                    itemId: 'btnExcelDet',
//                    id: 'btnExcelDet',
//                    name: 'btnExcelDet',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("downloadExcel", btn);
//                    }
//
//
//                },
                {
                    iconCls: 'add-icon',
                    text: 'Agregar',
                    itemId: 'btnAgregarDet',
                    id: 'btnAgregarDet',
                    name: 'btnAgregarDet',
                    scope: this,
                    handler: function(btn) {

                        this.fireEvent("addDet", btn, cellEditing);
                    }


                }, {
                    iconCls: 'save-icon',
                    text: 'Guardar',
                    itemId: 'btnGuardarDet',
                    id: 'btnGuardarDet',
                    name: 'btnGuardarDet',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("saveDet", btn);
                    }

                },
                '-',
                {
                    iconCls: 'delete-icon',
                    text: 'Borrar',
                    itemId: 'btnBorrarDet',
                    id: 'btnBorrarDet',
                    name: 'btnBorrarDet',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("cancelaPolizaDet", btn);
                    }
                }
            ],
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 40,
                    sortable: false//,
//                      renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
//                
//                        var idTransaccion = record.data.ID_TRANSACCION;
//                        
//                      
//                            
//                             if (!Ext.isEmpty(idTransaccion)) {
//                                 
//                                // return '<span style="color:orange;font-weight: bold">'+val+'</span>';
//                                 metaData.tdAttr = 'style="background-color:##8181F7;color:black;"';
//                                  return value;
//                                 
//                             }else{
//                            
//                          
//                                return value;
//                             }
//
//                        
//
//                      }
                },
                {
                    xtype: 'gridcolumn',
                    header: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'detCOMPANIA',
                    dataIndex: 'COMPANIA',
                    sortable: true,
                    hidden: true,
                    width: 100
                },
                {
                    xtype: 'gridcolumn',
                    header: 'TIPO_POLIZA',
                    name: 'TIPO_POLIZA',
                    id: 'detTIPO_POLIZA',
                    dataIndex: 'TIPO_POLIZA',
                    sortable: true,
                    hidden: true,
                    width: 100
                },
                {
                    xtype: 'gridcolumn',
                    header: 'FECHA',
                    name: 'FECHA',
                    id: 'detFECHA',
                    dataIndex: 'FECHA',
                    sortable: true,
                    hidden: true,
                    width: 100
                },
                {
                    xtype: 'gridcolumn',
                    header: 'NUMERO',
                    name: 'NUMERO',
                    id: 'detNUMERO',
                    dataIndex: 'NUMERO',
                    sortable: true,
                    hidden: true,
                    width: 100
                },
                {
                    xtype: 'gridcolumn',
                    header: 'SEC',
                    name: 'SEC',
                    id: 'detSEC',
                    dataIndex: 'SEC',
                    sortable: true,
                    hidden: true,
                    width: 100
                },
           
                {
                    xtype: 'gridcolumn',
                    header: 'ID',
                    id: 'detID',
                    dataIndex: 'ID',
                    sortable: true,
                    hidden: true,
                    width: 100
                },
//                {
//                    xtype: 'gridcolumn',
//                    dataIndex: 'CC',
//                    name: 'CC',
//                    filterable: true,
//                    id: 'detCC',
//                    sortable: true,
//                    header: 'CC',
//                    width: 100,
//                    field: {
//                        xtype: 'textfield',
//                        name: 'txtCCDet',
//                        id: 'txtCCDet',
//                        maxLength: 10
//                    }
//                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CC',
                    name: 'CC',
                    filterable: true,
                    id: 'detCC',
                    sortable: true,
                    header: 'CC',
                    width: 300,
                    field: {
                        xtype: 'combobox',
                        name: 'txtCCDet',
                        id: 'txtCCDet',
                        store: storeCC,
                        minChars: 1,
                        displayField: 'NOMBRE_CTO',
                        valueField: 'CTO',
                        typeAhead: false,
                        validateOnChange: true,
                        allowBlank: false,
//                        hideTrigger: true,
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro Centro de Costo.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{CTO}</span><h3>{NOMBRE_CTO}</h3>';
                            }
                        },
                        listeners: {
                            scope: this,
                            select: function(value) {
                               // this.fireEvent("nombreCuenta", value.valueModels[0].data.NOMBRE, value.valueModels[0].data.CUENTA);
                            }
                        },
                        pageSize: 10
                    }
                      
               


                },
                                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CT',
                    name: 'CT',
                    filterable: true,
                    id: 'detCT',
                    sortable: true,
                    header: 'CC',
                    width: 300,
                    field: {
                        xtype: 'combobox',
                        name: 'txtCTDet',
                        id: 'txtCTDet',
                        store: storeCT,
                        minChars: 1,
                        displayField: 'NOMBRE_CT',
                        valueField: 'CTO_TRABAJO',
                        typeAhead: false,
                        validateOnChange: true,
                        allowBlank: false,
//                        hideTrigger: true,
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro Centro de Costo.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{CTO_TRABAJO}</span><h3>{NOMBRE_CT}</h3>';
                            }
                        },
                        listeners: {
                            scope: this,
                            select: function(value) {
                               // this.fireEvent("nombreCuenta", value.valueModels[0].data.NOMBRE, value.valueModels[0].data.CUENTA);
                            }
                        },
                        pageSize: 10
                    }
                      
               


                },
//                {
//                    xtype: 'gridcolumn',
//                    dataIndex: 'CT',
//                    name: 'CT',
//                    id: 'detCT',
//                    filterable: true,
//                    sortable: true,
//                    header: 'CT',
//                    width: 100,
//                    field: {
//                        xtype: 'textfield',
//                        name: 'txtCTDet',
//                        id: 'txtCTDet',
//                        maxLength: 5
//                    }
//                  
//                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CUENTA_ALIAS',
                    name: 'CUENTA',
                    filterable: true,
                    id: 'detCUENTA',
                    sortable: true,
                    header: 'Cuenta',
                    width: 300,
                    field: {
                        xtype: 'combobox',
                        name: 'cboCuentaDet',
                        id: 'cboCuentaDet',
                        store: storeCuenta,
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
                        listeners: {
                            scope: this,
                            select: function(value) {
                                this.fireEvent("nombreCuenta", value.valueModels[0].data.NOMBRE, value.valueModels[0].data.CUENTA);
                            }
                        },
                        pageSize: 10
                    },
//                    renderer: function(value) {
//                        return value;
//                    }
                    renderer: function(val, meta, record) {
                        var existeCuenta = record.data.EXISTE_CUENTA;
                        var cuentaAlias = record.data.CUENTA_ALIAS;
                        var numerDiot = record.data.NUM_DIOT;
                        
                       // msgOut('numerDiotDet'+numerDiot);
                      
                
                        var idTransaccion = record.data.ID_TRANSACCION;
                        
                        
                            
                             if (!Ext.isEmpty(idTransaccion)) {
                                 
                                // return '<span style="color:orange;font-weight: bold">'+val+'</span>';
                               //  meta.tdAttr = 'style="background-color:#8181F7;color:black;"';
                                return '<span style="color:blue;font-weight: bold">' + val + '</span>';
                                // return '<span style="color:red;font-weight: bold">' + val + '</span>';;
                                // return val;
                          //   }else{
                            
                          
                               // return val;
                             }

                     
                        

                        if (Ext.isEmpty(existeCuenta)) {
                            
                             if (Ext.isEmpty(cuentaAlias)) {
                                 
                                 return '<span style="color:red;font-weight: bold">No Existe Cuenta en Cat&aacute;logo</span>';
                                 
                             }
                            
                            return '<span style="color:red;font-weight: bold">' + val + '</span>';
                        } else {
                           
                           if (Ext.isEmpty(numerDiot) || numerDiot === null){
                               
                               return '<span style="color:black;font-weight: bold">' + val + '</span>';
                               
                               
                           }else{ 
                               
                               var importe =  parseInt(numerDiot);
                               msgOut('importe'+importe);
                               if (importe > 0){
                            
                                  return '<span style="color:green;font-weight: bold">' + val + '</span>';
                               }else{
                                   
                                  return '<span style="color:black;font-weight: bold">' + val + '</span>';
                                 
                               }
                           }
                        }
                        return val;
                    }


                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'NOMCUENTA',
                    name: 'NOMCUENTA',
                    filterable: true,
                    id: 'detNOMCUENTA',
                    sortable: true,
                    header: 'Nombre Cuenta',
                    width: 200,
                    disable: true
                            ////,
//                    field:{
//                    xtype:'textfield'
//                    }

                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'DESCRIPCION',
                    name: 'DESCRIPCION',
                    filterable: true,
                    id: 'detDESCRIPCION',
                    sortable: true,
                    header: 'Concepto',
                    width: 300,
                    field: {
                        xtype: 'textfield',
                        name: 'txtDescripcionDet',
                        id: 'txtDescripcionDet',
                        maxLength: 200
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'REFERENCIA',
                    name: 'REFERENCIA',
                    filterable: true,
                    id: 'detREFERENCIA',
                    sortable: true,
                    header: 'Referencia',
                    width: 100,
                    field: {
                        xtype: 'textfield',
                        allowBlank: true,
                        name: 'txtReferenciaDet',
                        id: 'txtReferenciaDet',
                        maxLength: 30
                    }
                },
                {
                    dataIndex: 'REFERENCIA2',
                    name : 'REFERENCIA2',
                    sortable: true,
                    filterable: true,
                    header: 'Referencia 2',
                    id: 'detREFERENCIA2',
                    field: {
                        xtype: 'textfield',
                        //allowBlank: true,
                        name: 'txtReferenciaDet2',
                        id: 'txtReferenciaDet2'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CHEQUE',
                    name: 'CHEQUE',
                    id: 'detCHEQUE',
                    sortable: true,
                    filterable: true,
                    header: 'Pago',
                    width: 100,
                    field: {
                        xtype: 'textfield',
                        name: 'txtChequeDet',
                        id: 'txtChequeDet',
                        allowBlank: true,
                        maxLength: 30

                    }

                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'RFC',
                    name: 'RFC',
                    filterable: true,
                    id: 'detRFC',
                    sortable: true,
//                name:'txtRfcDet',
//                id:'txtRfcDet',
                    header: 'R.F.C.',
                    width: 100,
                    field: {
                        xtype: 'combobox',
                        name: 'txtRfcDet',
                        id: 'txtRfcDet',
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
                    dataIndex: 'CARGOS',
                    sortable: true,
                    header: 'Cargos',
                    name: 'txtCargosDet',
                    id: 'txtCargosDet',
                    stopSelection: false,
                    summaryType: 'sum',
                    summaryRenderer: Ext.util.Format.usMoney,
                    width: 100,
                    field: {
                        xtype: 'numberfield',
                        allowNegative: true,
                        allowDecimals: true,
                        decimalSeparator: '.'
                    },
                    align: 'right',
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    renderer: this.money
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ABONOS',
                    header: 'Abonos',
                    name: 'txtAbonosDet',
                    id: 'txtAbonosDet',
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
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    }

                    ,
                    renderer: this.money
                },
                {
                    dataIndex: 'FECHA_DOCUMENTO',
                    sortable: true,
                    header: 'Fecha Documento',
                    //renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                    renderer:// Ext.util.Format.dateRenderer('d/m/Y'),
                            function(value) {
                                if(Ext.isDate(value)){
                                    return   Ext.Date.format(value, 'd/m/Y');
                                }else {
                            return  value;
                        }
//                        if (Ext.isEmpty(value.length)) {
//                            return   Ext.Date.format(value, 'd/m/Y');
//                        } else {
//                            return  value;
//                        }
                    },
                    field: dtFechaDocumento,
                    format: 'd/m/Y',
                    altFormats: 'd/m/Y',
                    name: 'dtFechaDet',
                    itemId: 'dtFechaDet',
                    id: 'dtFechaDet',
                    width: 100
                }

            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreDetalle',
                    id: 'statusDetalle',
                    items: [
                        '->',
                        bandera

                    ]
                })

            ]//,



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


}
);



