Ext.define('AppConvertidor.view.GridErpDetConvertidor', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.griderpdetconvertidor',
    itemId: 'griderpdetconvertidor',
    xtype: 'griderpdetconvertidor',
//    bodyPadding: 5,
//    width: 600,
    flex:1,
     store: 'StoreErpDetConvertidor',
    title: 'Detalle Convertidor',
    initComponent: function() {
        var me = this;
        
        var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1,
            onSpecialKey: function(ed, field, e) {
                me.fireEvent("keydetalle", ed, field, e, this);

            }

        });
        
         var storeCuenta = Ext.create('AppConvertidor.store.StoreCuentas');
         var conceptoDiot = Ext.create('AppConvertidor.store.StoreConceptoDiot');
         var storeCC = Ext.create('AppConvertidor.store.StoreCboCC');
         
         
          var tAplicacion = Ext.create('Ext.data.Store', {
            fields: ['tipo', 'nombre'],
                data : [
                    {"tipo":"C", "nombre":"Cargo"},
                    {"tipo":"A", "nombre":"Abono"}
                 
                ]
            });
            
          var idCampo = Ext.create('Ext.data.Store', {
            fields: ['ID', 'NOMBRE'],
                data : [
                    {"ID":"IVA", "NOMBRE":"IVA"},
                    {"ID":"SUBTOTAL", "NOMBRE":"SUBTOTAL"},
                     {"ID":"TOTAL", "NOMBRE":"TOTAL"}
                 
                ]
            });

        Ext.apply(me, {
            
            plugins: [cellEditing],
//            
            tbar: [
       
                '->',
             
                {
                    iconCls: 'add-icon',
                    text: 'Agregar',
                    itemId: 'btnAgregarDetConv',
                    id: 'btnAgregarDetConv',
                    name: 'btnAgregarDetConv',
                    scope: this,
                    handler: function(btn) {

                        this.fireEvent("addDetConvertidor", btn, cellEditing);
                    }


                },
                '-',
                {
                    iconCls: 'delete-icon',
                    text: 'Borrar',
                    itemId: 'btnBorrarDetConv',
                    id: 'btnBorrarDetConv',
                    name: 'btnBorrarDetConv',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("deteleDetConvertidor", btn);
                    }
                }
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
                    dataIndex: 'ORIGEN',
                    hidden: true,
                    name: 'ORIGEN',
                    id: 'detORIGENConv',
                    sortable: true,
                    header: 'Origen',
                    flex: 1
                },
                {
                    dataIndex: 'IDCONCGASTO',
                    hidden: true,
                    name: 'IDCONCGASTO',
                    id: 'colIDCONCGASTOConv',
                    sortable: true,
                    header: 'IDCONCGASTO',
                    flex: 1
                },
                
                 {
                    dataIndex: 'NO_CASO',
                    hidden: true,
                    name: 'NO_CASO',
                    id: 'colNO_CASO',
                    sortable: true,
                    header: 'NO_CASO',
                    flex: 1
                },
                  {
                    dataIndex: 'SEC',
                    hidden: true,
                    name: 'SEC',
                    id: 'colSECConv',
                    sortable: true,
                    header: 'SEC',
                    flex: 1
                },
                {
                    dataIndex: 'IDCAMPO',
                    hidden: false,
                    name: 'IDCAMPO',
                    id: 'colIDCAMPOConv',
                    sortable: true,
                    header: 'ID',
                    flex: 1,
                    field: {
                        xtype: 'combobox',
                        name: 'txtDescripcionDetConv',
                        id: 'txtDescripcionDetConv',
                        
                        
                        store: idCampo,
                        queryMode: 'local',
                        displayField: 'NOMBRE',
                        valueField: 'ID'
                        
                        
                    }
//                     field: {
//                        xtype: 'textfield',
//                        name: 'txtDescripcionDetConv',
//                        id: 'txtDescripcionDetConv',
//                        maxLength: 50
//                    }
                },
                
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'CUENTA',
                    name: 'CUENTA',
                    id: 'detCUENTAConv',
                    sortable: true,
                    header: 'Cuenta',
                    flex:1,
                    field: {
                        xtype: 'combobox',
                        name: 'cboCuentaDetConv',
                        id: 'cboCuentaDetConv',
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
                                this.fireEvent("nombreCuenta", value.valueModels[0].data.NOMBRE);
                            }
                        },
                        pageSize: 10
                    }


                },
                  {
                    xtype: 'gridcolumn',
                    dataIndex: 'CC',
                    name: 'CC',
                    filterable: true,
                    id: 'convCC',
                    sortable: true,
                    header: 'CC',
                    flex:1,
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
                    dataIndex: 'T_APLICACION',
                    name: 'T_APLICACION',
                    id: 'detT_APLICACIONConv',
                    sortable: true,
                    header: 'Tipo de Importe',
                    flex:1,
                    field: {
                        xtype: 'combobox',
                        name: 'cbotipoAplicacionDetConv',
                        id: 'cbotipoAplicacionDetConv',
                        store: tAplicacion,
                        queryMode: 'local',
                        editable:false,
                        displayField: 'nombre',
                        valueField: 'tipo'
                        
                        
                    },
                    renderer: function(value) {
                        if(value==='C'){
                            return 'C-Cargo';
                        }else if(value==='A'){
                            return 'A-Abono';
                        
                        }else{
                             return value;
                        }
//             
                       
                    }


                },
                
                {
                    dataIndex: 'DESCRIPCION',
                    hidden: false,
                    name: 'DESCRIPCION',
                    id: 'detDESCRIPCIONConv',
                    sortable: true,
                    header: 'CONCEPTO',
                    flex: 1,
                     field: {
                        xtype: 'textfield',
                        name: 'txtDescripcionDet',
                        id: 'txtDescripcionDet',
                        maxLength: 50
                    }
                },
                {
                    dataIndex: 'REFERENCIA',
                    hidden: false,
                    name: 'REFERENCIA',
                    id: 'detREFERENCIAConv',
                    sortable: true,
                    header: 'REFERENCIA',
                    flex: 1,
                     field: {
                        xtype: 'textfield',
                        name: 'txtReferenciaDet',
                        id: 'txtReferenciaDet',
                        maxLength: 50
                    }
                },
                {
                    dataIndex: 'REFERENCIA2',
                    hidden: false,
                    name: 'REFERENCIA2',
                    id: 'detREFERENCIA2Conv',
                    sortable: true,
                    header: 'REFERENCIA2',
                    flex: 1,
                     field: {
                        xtype: 'textfield',
                        name: 'txtReferencia2Det',
                        id: 'txtReferencia2Det',
                        maxLength: 50
                    }
                },
                        
                  {
                    dataIndex: 'RFC',
                    hidden: false,
                    name: 'RFC',
                    id: 'detconvRFC',
                    sortable: true,
                    header: 'RFC',
                    flex: 1,
                     field: {
                        xtype: 'textfield',
                        name: 'txtConvRfc',
                        id: 'txtConvRfc',
                        maxLength: 50
                    }
                },
                        
                  {
                    dataIndex: 'OPERACIONES',
                    hidden: false,
                    name: 'OPERACIONES',
                    id: 'detOPERACIONESConv',
                    sortable: true,
                    header: 'OPERACIONES',
                    flex: 1,
                     field: {
                        xtype: 'textfield',
                        name: 'txtOperacionesDetConv',
                        id: 'txtOperacionesDetConv',
                        maxLength: 200
                    }
                },
                 {
                    dataIndex: 'CONCEPTO_DIOT',
                    hidden: false,
                    name: 'CONCEPTO_DIOT',
                    id: 'colCONCEPTO_DIOTConv',
                    sortable: true,
                    header: 'CONCEPTO DIOT',
                    flex: 1,
                    field: {
                        xtype: 'combobox',
                        name: 'txtDiotDetConv',
                        id: 'txtDiotDetConv',
                        
                        
                        store: conceptoDiot,
                      //  queryMode: 'local',
                        displayField: 'NOMBRE',
                        valueField: 'CONCEPTO'
                        
                        
                    },
                   renderer: function(value) {
                        if(value==='01'){
                            return '01-IVA 16%';
                        }else if(value==='04'){
                            return '04-IVA 0%';
                         }else if(value==='05'){
                            return '05-EXENTO%';
                         }else if(value==='06'){
                            return '06-IVA RET';
                         }else if(value==='07'){
                            return '07-IVA DESCUENTOS';
                        
                        }else{
                             return value;
                        }
//             
                       
                    }
//                     field: {
//                        xtype: 'textfield',
//                        name: 'txtDescripcionDetConv',
//                        id: 'txtDescripcionDetConv',
//                        maxLength: 50
//                    }
                },
                
                 {
                    dataIndex: 'ORDEN',
                    hidden: false,
                    name: 'ORDEN',
                    id: 'detORDENConv',
                    sortable: true,
                    header: 'ORDEN',
                    flex: 1,
                     field: {
                        xtype: 'numberfield',
                        name: 'txtOrdenDetConv',
                        id: 'txtOrdenDetConv',
                        maxLength: 200
                    }
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
    }



});


