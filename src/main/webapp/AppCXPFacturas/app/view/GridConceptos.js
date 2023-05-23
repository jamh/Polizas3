Ext.define('AppCXPFacturas.view.GridConceptos', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridconceptos',
    itemId: 'gridconceptos',
    xtype: 'gridconceptos',
    store: 'StoreGridConceptosCxp',
    autoScroll: true,
    region: 'center',
   // flex:7,

    height:420,
    
    initComponent: function() {
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
        

            
       var storecboFolioGe = Ext.create('AppCXPFacturas.store.StoreCboFolioGe'); 
              
        
         var cellEditing2 = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        });
     
        Ext.apply(me, {
             features: [
               filters
            ],
            plugins: [
                cellEditing2
            ],
           
             multiSelect:true,
            tbar: [
                    {
                 xtype: 'textfield',
                 name: 'searchField',
                 hideLabel: true,
                 width: 200,
                 listeners: {
                     change: function( et, newValue, oldValue, eOpts) {
                         
                         var store = me.getStore();
                         
                       
                         
                         if(!Ext.isEmpty(newValue)){
                             
                             if(newValue.length === 3){
                                 
                                 me.getStore().proxy.extraParams.query = newValue;
                         
                                    me.setLoading('Buscando...');

                                          store.load({
                                              callback: function() {
                                                  me.setLoading(false);
                                              }
                                          }); 
                                 
                             }
                             if(newValue.length === 5){
                                 
                                 me.getStore().proxy.extraParams.query = newValue;
                         
                                    me.setLoading('Buscando...');

                                          store.load({
                                              callback: function() {
                                                  me.setLoading(false);
                                              }
                                          }); 
                                 
                             }
                             
                             if(newValue.length === 7){
                                 
                                 me.getStore().proxy.extraParams.query = newValue;
                         
                                    me.setLoading('Buscando...');

                                          store.load({
                                              callback: function() {
                                                  me.setLoading(false);
                                              }
                                          }); 
                                 
                             }
                             
                             if(newValue.length === 9){
                                 
                                 me.getStore().proxy.extraParams.query = newValue;
                         
                                    me.setLoading('Buscando...');

                                          store.load({
                                              callback: function() {
                                                  me.setLoading(false);
                                              }
                                          }); 
                                 
                             }
                             if(newValue.length === 11){
                                 
                                 me.getStore().proxy.extraParams.query = newValue;
                         
                                    me.setLoading('Buscando...');

                                          store.load({
                                              callback: function() {
                                                  me.setLoading(false);
                                              }
                                          }); 
                                 
                             }
                             if(newValue.length === 13){
                                 
                                 me.getStore().proxy.extraParams.query = newValue;
                         
                                    me.setLoading('Buscando...');

                                          store.load({
                                              callback: function() {
                                                  me.setLoading(false);
                                              }
                                          }); 
                                 
                             }
                             
                             if(newValue.length === 15){
                                 
                                 me.getStore().proxy.extraParams.query = newValue;
                         
                                    me.setLoading('Buscando...');

                                          store.load({
                                              callback: function() {
                                                  me.setLoading(false);
                                              }
                                          }); 
                                 
                             }
                             
                         }else{
                             
                             if (oldValue.length === 1){
                                 
                                  me.getStore().proxy.extraParams.query = '';
                         
                                    me.setLoading('Buscando...');

                                          store.load({
                                              callback: function() {
                                                  me.setLoading(false);
                                              }
                                          }); 
                                 
                                 
                             }
                             
                         }
                         
//                    
        
                     }
                 }
            },
//                     {
//                    width: 300,
//                    fieldLabel: 'Buscar',
//                    xtype: 'combobox',
//                    store:me.getStore(),
//                  //  displayField: 'NOMBRE_CONC',
//                  //  valueField: 'CONCEPTO_CONC',
//                  //  emptyText: 'Concepto no encotrado',
//                    id: 'cboGridConcepto',
//                    name: 'cboGridConcepto',
//                    hideTrigger:true,
//                    minChars : 0,
//                    typeAhead: false,
//                    forceSelection :false,
//                    anchor: '100%',
//                    listConfig: {
//                       // loadingText: 'Buscando...',
//                       // emptyText: 'No se encontraron datos.',
////                        getInnerTpl: function() {
////                            return '';
////                        }
//                    },
//                    listeners: {
//                        scope:this,
//                                
//                    beforequery: function(queryEvent, eOpts) {
//                        
//                       // me.getStore().proxy.extraParams.query = '';
//                        
//                      //  console.log(me.getStore());
//                        
//                       // console.log('hola hola');
//                
//                      // storeBuscaConvertidor.proxy.extraParams.condicion = Ext.getCmp('txtPARAMETROConv').getValue();
////                      queryEvent.combo.store.proxy.extraParams = {
////                        param1: 'value1',
////                        param2: 'value2'
////                      }
//                       //msgOut('valor antes del query'+Ext.getCmp('txtPARAMETROConv').getValue());
//                    }//,
//      
////                        select: function(value){
////                                    msgOut("nombre1:"+value.valueModels[0].data.NOMBRE);
////                              this.fireEvent("findConvertidor", value.valueModels[0].data.COMPANIA,value.valueModels[0].data.ORIGEN,value.valueModels[0].data.IDCONCGASTO,value.valueModels[0].data.T_POLIZA,value.valueModels[0].data.DESCRIPCION,value.valueModels[0].data.ACTIVO,Ext.getCmp('cboConvertidor').getValue(),value.valueModels[0].data.NOMBRE);
////                             //}
////                        }
//                    }//,
//                  //  pageSize: 10
//
//
//                },
                
//                {
//                        iconCls: 'converter-icon',
//                            text: 'Convertidor...',
//                            handler: function(btn) {
//                                // msgOut('Excel');
//                                me.fireEvent("verConvertidor", btn);
//                            }   
//                },
                 '->',
//                 {
//                            iconCls: 'clean-filter-icon',
//                            text: 'Limpiar Filtros',
//                            handler: function(btn) {
//                                // msgOut('Excel');
//                                me.fireEvent("cleanFiltersTesoreria", btn);
//                            }
//                  },
//
//                 
//                '-',
                {
                    iconCls: 'delete-icon',
                    text: 'Eliminar',
                    itemId: 'btnBorrarConc',
                    id: 'btnBorrarConc',
                    name: 'btnBorrarConc',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("eliminaConceptos", btn);
                    }

                },
                '-',
                 {
                    iconCls: 'add-icon',
                    text: 'Agregar',
                    itemId: 'btnAgregarDetConv',
                    id: 'btnAgregarDetConv',
                    name: 'btnAgregarDetConv',
                    scope: this,
                    handler: function(btn) {

                        this.fireEvent("addConcepto", btn, cellEditing2);
                    }

                 },
                 
//                {
//                    iconCls: 'save-icon',
//                    text: 'Guardar',
//                    itemId: 'btnGuardaConc',
//                    id: 'btnGuardaConc',
//                    name: 'btnGuardaConc',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("guardaConceptos", btn);
//                    }
//
//                },
                {
                    iconCls: 'icon-relacion',
                    text: 'Relacionar Facturas',
                    itemId: 'btnRelacionConc',
                    id: 'btnRelacionConc',
                    name: 'btnRelacionConc',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("relacionaConcepto", btn);
                    }

                }
                
                ////,
//                {
//                    iconCls: 'delete-icon',
//                    text: 'Quitar',
//                    itemId: 'btnQuitarTesoreria',
//                    id: 'btnQuitarTesoreria',
//                    name: 'btnQuitarTesoreria',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("borraTesoreia", btn);
//                    }
//
//                }
               
               

            ],
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 40,
                    sortable: false//,

                },
                {
                    dataIndex: 'COMPANIA_CONC',
                    name: 'COMPANIA_CONC',
                    id: 'cxpCOMPANIA_CONC',
                    sortable: true,
                    hidden: true,
                    header: 'Compania',
                    width: 100
                },
                {
                    dataIndex: 'CONCEPTO_CONC',
                    name: 'CONCEPTO_CONC',
                    id: 'cxpCONCEPTO_CONC',
                    sortable: true,
                    hidden: false,
                    header: 'Concepto',
                    width: 150
                },
                {
                    dataIndex: 'NOMBRE_CONC',
                    name: 'NOMBRE_CONC',
                    id: 'cxpNOMBRE_CONC',
                    sortable: true,
                    hidden: false,
                    header: 'Nombre',
                    width: 450
                  
                }//,
//                 
//                
//                {
//                    dataIndex: 'CUENTA_CONC',
//                    name: 'CUENTA_CONC',
//                    id: 'cxpCUENTA_CONC',
//                    sortable: true,
//                    hidden: false,
//                    header: 'Cuenta',
//                    width: 270
//                }
//                
                
                

            ],
            dockedItems: [
//                Ext.create('Ext.toolbar.Paging', {
//                    dock: 'bottom',
//                 //   store: 'StoreGridConceptosCxp',
//                     id: 'statusFolioGE',
//                    items: [
//                      
//                    ]
//                })
            ],
            
              viewConfig: {
                  getRowClass: function(record) {
//                    var c = record.get('ESTATUSV');
                    msgOut("cell:");
//                    if (c === '2') {
                         // msgOut("ENTRO"+c);
                    //    return 'price-fall';
//                    } 
//                    if (c === '1') {
//                        return 'price-rise';
//                    }
//                    if(c === '0'){
//                         return 'price-fall';
//                    }
                },
                
                stripeRows: true
              }

        });


        this.callParent(arguments);
    }



});


