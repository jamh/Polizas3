Ext.define('AppCuentas2.view.GridCuentas', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridcuentas',
    itemId: 'gridcuentas',
    xtype: 'gridcuentas',
    flex: 1,
    title: 'Cuentas',
    // multiSelect: true,
    store: 'StoreCuentas',
    habilitaMenu: false,
    split: true,
    collapsible: true,
    autoScroll: true,
     column: null,
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
          var storeCuentaSat2 = Ext.create('AppCuentas2.store.StoreCtaSat');
        var storeMonedaSat2 = Ext.create('AppCuentas2.store.StoreMonedaSat');
        var storeBancosSat2 = Ext.create('AppCuentas2.store.StoreBancosSat');
         var storeCuentaComple =Ext.create('AppCuentas2.store.StoreCtaComplementaria');
         var storeCuentaPadre = Ext.create('AppCuentas2.store.StoreCtaPadre2');
      
      storeMonedaSat2.proxy.extraParams.query = '';
       storeBancosSat2.proxy.extraParams.query = '';
       storeCuentaSat2.proxy.extraParams.query = '';
       storeCuentaComple.proxy.extraParams.query = '';
       storeCuentaPadre.proxy.extraParams.query = '';
      
       storeMonedaSat2.load();
       storeBancosSat2.load();
       storeCuentaSat2.load();
       storeCuentaComple.load();
       storeCuentaPadre.load();
       
                      
                      
                     
     
       var afectable = Ext.create('Ext.data.Store', {
            fields: ['clave', 'nombre'],
                data : [
                    {"clave":"S", "nombre":"Afectable"},
                    {"clave":"N", "nombre":"No Afectable"}
                 
                ]
            });
          
          var cierre = Ext.create('Ext.data.Store', {
            fields: ['claveC', 'nombreC'],
                data : [
                    {"claveC":"S", "nombreC":"Si es de Cierre"},
                    {"claveC":"R", "nombreC":"Resultados"},
                    {"claveC":"N", "nombreC":"No es de Cierre"}
                 
                ]
            });
            
            var estatus = Ext.create('Ext.data.Store', {
            fields: ['claveE', 'nombreE'],
                data : [
                    {"claveE":"A", "nombreE":"Activa"},
                    {"claveE":"I", "nombreE":"Inactiva"}
                   
                 
                ]
            });
            
             var naturaleza = Ext.create('Ext.data.Store', {
            fields: ['claveN', 'nombreN'],
                data : [
                    {"claveN":"A", "nombreN":"Acreedora"},
                    {"claveN":"D", "nombreN":"Deudora"}
                   
                 
                ]
            });
            
             var tipo = Ext.create('Ext.data.Store', {
            fields: ['claveT', 'nombreT'],
                data : [
                    {"claveT":"R", "nombreT":"Resultados"},
                    {"claveT":"O", "nombreT":"Orden"},
                    {"claveT":"A", "nombreT":"Activo"},
                    {"claveT":"P", "nombreT":"Pasivo"},
                    {"claveT":"C", "nombreT":"Capital"}
                   
                 
                ]
            });
            
            var verCuentas = Ext.create('Ext.data.Store', {
            fields: ['clave', 'nombre'],
                data : [
                    {"clave":"order by c.cuenta", "nombre":"Cuenta Estructura"},
                    {"clave":"order by c.cuenta_alias", "nombre":"Cuenta Empresa"},
                    {"clave":"order by c.cuenta_padre", "nombre":"Cuenta Padre"}
                 
                ]
            });
            
             var mayor = Ext.create('Ext.data.Store', {
            fields: ['claveM', 'nombreM'],
                data : [
                    {"claveM":"T", "nombreM":"Titulo"},
                    {"claveM":"S", "nombreM":"Subtitulo"},
                    {"claveM":"0", "nombreM":"No"},
                    {"claveM":"1", "nombreM":"Si"}
                    
                   
                 
                ]
            });
         
        var dtFechaDocumento = new Ext.form.field.Date({
            name: 'dtFechaDocumento',
            submitFormat: 'd/m/Y',
            format: 'd/m/Y',
            allowBlank: true
        });
         
          var cboCtaComple = Ext.create('Ext.form.field.ComboBox', {
            id: 'cboCtaCompleGrid',
            name: 'cboCtaCompleGrid',
            itemId: 'cboCtaCompleGrid',
            displayField: 'NOMBRE',
            valueField: 'CUENTA',              
            typeAhead: true,
            readOnly:true,
            minChars: 0,
            editable:false,
            store: storeCuentaComple,
            allowBlank: false,
            listeners: {
                        scope: me,
                        'change': function(field, value, eOpts) {
         


                        }
                    }

        });
         var cboCtaP = Ext.create('Ext.form.field.ComboBox', {
            id: 'cboCtaPadreGrid',
            name: 'cboCtaPadreGrid',
            itemId: 'cboCtaPadreGrid',
            displayField: 'CUENTA_ALIAS',
            valueField: 'CUENTA',              
            typeAhead: true,
            readOnly:true,
            minChars: 0,
            editable:false,
            store: storeCuentaPadre,
            allowBlank: false,
            listeners: {
                        scope: me,
                        'change': function(field, value, eOpts) {
         


                        }
                    }

        });
         
         var cboMoneda = Ext.create('Ext.form.field.ComboBox', {
            id: 'cboMonedaGrid',
            name: 'cboMonedaGrid',
            itemId: 'cboMonedaGrid',
            displayField: 'NOMBRE',
            valueField: 'CODIGO',              
            typeAhead: true,
            readOnly:true,
            minChars: 0,
            editable:false,
            store: storeMonedaSat2,
            allowBlank: false,
            listeners: {
                        scope: me,
                        'change': function(field, value, eOpts) {
         


                        }
                    }

        });
        
        var cboBanco = Ext.create('Ext.form.field.ComboBox', {
            id: 'cboBancoGrid',
            name: 'cboBancoGrid',
            itemId: 'cboBancoGrid',
            displayField: 'NOMBRE1',
            valueField: 'CLAVE',              
            typeAhead: true,
            readOnly:true,
            minChars: 0,
            editable:false,
            store: storeBancosSat2,
            allowBlank: false,
            listeners: {
                        scope: me,
                        'change': function(field, value, eOpts) {
         


                        }
                    }

        });
        
         var cboCtaSat = Ext.create('Ext.form.field.ComboBox', {
            id: 'cboCtaSatGrid',
            name: 'cboCtaSatGrid',
            itemId: 'cboCtaSatGrid',
            displayField: 'NOMBRE1',
            valueField: 'CODIGO_AGRUPADOR',              
            typeAhead: true,
            readOnly:true,
            minChars: 0,
            editable:false,
            store: storeCuentaSat2,
            allowBlank: false,
            listeners: {
                        scope: me,
                        'change': function(field, value, eOpts) {
         


                        }
                    }

        });
        
     var cambiarEstatusActiva = Ext.create('Ext.Action', {
            iconCls: 'checkall-icon',
            text: 'Activar Cuenta',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("cambiarEstatusCta", widget,me.poscol);
            }
        });
       var cambiarEstatusDesactiva = Ext.create('Ext.Action', {
            iconCls: 'cancel-icon',
            text: 'Desactivar Cuenta',
            disabled: false,
            handler: function(widget, view, rec, node, index) {
                me.fireEvent("cambiarEstatusCtaDesactiva", widget,me.poscol);
            }
        });
       var contextMenu = Ext.create('Ext.menu.Menu', {
            items: [
               
               
                cambiarEstatusActiva,
                '-',
                cambiarEstatusDesactiva
                    
                
            ]
        });


        Ext.apply(this, {
            features: [
                filters,
                {
                    ftype: 'summary',
                    dock: 'bottom'
                }
            ],
            plugins: [cellEditing],
            multiSelect: true,
//            selType: selmodel,
//            selModel: Ext.create('Ext.selection.CheckboxModel',{
//                enableKeyNav : true,
//                mode: 'MULTI',
//                 onSpecialKey: function(ed, field, e) {
//                     msgOut("dat");
//                me.fireEvent("keydetalle", ed, field, e, this);
//
//            }
//            }),
            listeners: {
                columnresize: function(ct, column, width, eOpts) {
                    me.fireEvent("changeColumn", ct, column, width, eOpts);
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
//                {
//                    xtype: 'checkboxfield',
//                    boxLabel: 'Copiar',
//                    name: 'copi',
//                    inputValue: '0',
//                    id: 'copi1',
//                    itemId: 'copi1'
//
//                },
//                {
//                    xtype: 'checkboxfield',
//                    boxLabel: 'Copiar Excel',
//                    name: 'copiDet',
//                    inputValue: '0',
//                    id: 'copi1Det',
//                    itemId: 'copi1Det'
//
//
//                },
                {
                    iconCls: 'clean-filter-icon',
                    text: 'Limpiar Filtros',
                    handler: function(btn) {
                        // msgOut('Excel');
                        me.fireEvent("cleanFilters", btn);
                    }
                },
                '-',
                 
                 {
                    xtype: 'combobox',
                    fieldLabel: 'Ver por...',
                    name: 'cboverCuentas',
                    id: 'cboverCuentas',
                    //labelWidth:50,
                    //width:200,
                    store: verCuentas,
                    queryMode: 'local',
                    readOnly: false,
                    hidden:false,
                    displayField: 'nombre',
                    valueField: 'clave',
                    allowBlank: true,
                    listeners: {
                        scope: this,
                        'select': function(valor) {
                           
                           me.fireEvent("buscaOrderCuenta",  valor.value);
                            
                        }
                         
                     }
                },
                '->',
//                 {
//                    iconCls: 'diot-icon',
//                    text: 'DIOT',
//                    itemId: 'btnDiot',
//                    id: 'btnDiot',
//                    name: 'btnDiot',
//                    scope: this,
//                    handler: function(btn) {
//
//                        this.fireEvent("addDiot", btn);
//                    }
//
//
//                },
//                {
//                    xtype: 'splitbutton',
//                    text: 'Exportar...',
//                    //icon: 'http://sencha.com/favicon.ico',
//                    // iconCls: 'add16',
//                    menu: [{
//                            iconCls: 'csv-icon',
//                            text: 'Excel',
//                            handler: function(btn) {
//
//
//                                me.fireEvent("downloadExcel", btn);
//                            }
//                        },
//                        {
//                            iconCls: 'word-icon',
//                            text: 'Word',
//                            handler: function(btn) {
//                                // msgOut('Excel');
//                                me.fireEvent("downloadDocx", btn);
//                            }
//                        },
//                        {
//                            iconCls: 'pdf-icon',
//                            text: 'Pdf',
//                            handler: function(btn) {
//                                // msgOut('Excel');
//                                me.fireEvent("downloadPdf", btn);
//                            }
//                        }
//
//                    ]
//                },
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
                    xtype: 'splitbutton',
                    text: 'Descargar...',
                    iconCls: 'see-icon',
                    menu: [
               
                {
                    iconCls: 'download-sat',
                    text: 'Descarga Catalogo de Cuentas',
                    itemId: 'btnDescargaCta',
                    id: 'btnDescargaCta',
                    name: 'btnDescargaCta',
                    scope: this,
                    handler: function(btn) {

                        this.fireEvent("decargaCuentas", btn, cellEditing);
                    }


                },
                {
                    iconCls: 'download-sat',
                    text: 'Descarga Catalogo del SAT',
                    itemId: 'btnDescargaCtaSAT',
                    id: 'btnDescargaCtaSAT',
                    name: 'btnDescargaCtaSAT',
                    scope: this,
                    handler: function(btn) {

                        this.fireEvent("decargaCuentasSAT", btn, cellEditing);
                    }


                }
            ]
            },
   
                 
                 {
                    xtype: 'splitbutton',
                    text: 'Cambiar Atributos',
                    iconCls: 'see-icon',
                    menu: [
            
                {
                    iconCls: 'checkall-icon',
                    text: 'Activar Cuenta',
                    itemId: 'btnActCuenta',
                    id: 'btnActCuenta',
                    name: 'btnActCuenta',
                    handler: function(btn) {
                        me.fireEvent("cambiarEstatusCta", btn);
                    }

                },
           
                {
                    iconCls: 'cancel-icon',
                    text: 'Desactivar Cuenta',
                    itemId: 'btnDescCuenta',
                    id: 'btnDescCuenta',
                    name: 'btnDescCuenta',
                    handler: function(btn) {
                        me.fireEvent("cambiarEstatusCtaDesactiva", btn);
                    }

                }]
            },
                {
                    iconCls: 'add-icon',
                    text: 'Agregar',
                    itemId: 'btnAgregarCta',
                    id: 'btnAgregarCta',
                    name: 'btnAgregarCta',
                    scope: this,
                    handler: function(btn) {

                        this.fireEvent("crearCuenta", btn, cellEditing);
                    }


                },//, {
//                    iconCls: 'save-icon',
//                    text: 'Guardar',
//                    itemId: 'btnGuardarDet',
//                    id: 'btnGuardarDet',
//                    name: 'btnGuardarDet',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("saveDet", btn);
//                    }
//
//                },
                '-',
                {
                    iconCls: 'delete-icon',
                    text: 'Borrar',
                    itemId: 'btnBorrarCta',
                    id: 'btnBorrarCta',
                    name: 'btnBorrarCta',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("cancelaCuenta", btn);
                    }
                }
            ],
            columns: [
//                {
//                    xtype: 'rownumberer',
//                    width: 40,
//                    sortable: false
//                },
                {
                    xtype: 'gridcolumn',
                    header: 'Estructura',
                    name: 'ESTRUCTURA',
                    id: 'ctaESTRUCTURA',
                    dataIndex: 'ESTRUCTURA',
                    sortable: true,
                    hidden: true,
                    width: 100
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Cuenta',
                    name: 'CUENTA_ALIAS',
                    id: 'ctaCUENTA_ALIAS',
                    filterable: true,
                    dataIndex: 'CUENTA_ALIAS',
                    sortable: true,
                    hidden: false,
                    width: 150,
                     renderer: function(val, meta, record) {
                        var saldo = record.data.SALDO;
                        var saldoNum = record.data.SALDO_NUM;
                        var detPoliza = record.data.DET_POLIZA;
                        
                      
                            
                             if (!Ext.isEmpty(saldo) || !Ext.isEmpty(detPoliza)) {
                                 msgOut('saldo'+ saldo);
                                 if (saldoNum !== 0 && !Ext.isEmpty(saldoNum)){
                                     msgOut('saldo2'+ saldo);
                                      return '<span style="color:green;font-weight: bold">'+val+'</span>';
                                 }else{
                                     
                                     return val;
                                     
                                 }
                             }else{
                            
                          
                                return val;
                             }
                    }
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Cuenta Estructura',
                    name: 'CUENTA',
                    id: 'ctaCUENTA',
                    dataIndex: 'CUENTA',
                    sortable: true,
                    hidden: true,
                    width: 100
                },
                 {
                    xtype: 'gridcolumn',
                    header: 'Nombre',
                    name: 'NOMBRE',
                    id: 'ctaNOMBRE',
                    filterable: true,
                    dataIndex: 'NOMBRE',
                    sortable: true,
                    hidden: false,
                    width: 350
                },
                {
                    xtype: 'gridcolumn',
                    header: 'Cuenta Acumuladora',
                    name: 'CUENTA_PADRE_NOMBRE',
                    filterable: true,
                    id: 'ctaCUENTA_PADRE_NOMBRE',
                    dataIndex: 'CUENTA_PADRE_NOMBRE',
                    sortable: true,
                    hidden: false,
                    width: 200

                    
                    
                }, 
                
                    {
                    xtype: 'gridcolumn',
                    header: 'Cuenta Acumuladora',
                    name: 'CUENTA_PADRE',
                    filterable: true,
                    id: 'ctaCUENTA_PADRE',
                    dataIndex: 'CUENTA_PADRE',
                    sortable: true,
                    hidden: true,
                    width: 200
                    
              
                    
                    
                },      
                        
                 {
                    xtype: 'gridcolumn',
                    header: 'Afectable',
                    name: 'AFECTABLE',
                    id: 'ctaAFECTABLE',
                    filterable: true,
                    dataIndex: 'AFECTABLE',
                    sortable: true,
                    hidden: false,
                    width: 120,
                    renderer: function(value) {
               
                        if(value==='S'){
                            return 'Afectable';
                        }else if(value==='N'){
                            return 'No Afectable';
                       
                        }else{
                             return value;
                        }

                    }
                },
                 {
                    xtype: 'gridcolumn',
                    header: 'Cierre',
                    name: 'CIERRE',
                    filterable: true,
                    id: 'ctaCIERRE',
                    dataIndex: 'CIERRE',
                    sortable: true,
                    hidden: false,
                    width: 150,
                     renderer: function(value) {
               
                        if(value==='S'){
                            return 'Si es de Cierre';
                        }else if(value==='N'){
                            return 'No es de Cierre';
                        }else if(value==='R'){
                            return 'Resultados';
                       
                        }else{
                             return value;
                        }

                    }
                },
                        
                 {
                    xtype: 'gridcolumn',
                    header: 'Estatus',
                    name: 'ESTATUS',
                    filterable: true,
                    id: 'ctaESTATUS',
                    dataIndex: 'ESTATUS',
                    sortable: true,
                    hidden: false,
                    width: 100,
                    renderer: function(value) {
               
               
                        if(value==='A'){
                            return 'Activa';
                        }else if(value==='I'){
                            return 'Inactiva';
                      
                        }else{
                             return value;
                        }

                    }
                },
                 {
                    xtype: 'gridcolumn',
                    header: 'Naturaleza',
                    name: 'NATURALEZA',
                    id: 'ctaNATURALEZA',
                    filterable: true,
                    dataIndex: 'NATURALEZA',
                    sortable: true,
                    hidden: false,
                    width: 120,
                   
                   renderer: function(value) {
               
               
                        if(value==='A'){
                            return 'Acreedora';
                        }else if(value==='D'){
                            return 'Deudora';
                      
                        }else{
                             return value;
                        }

                    }
                },
                  {
                    xtype: 'gridcolumn',
                    header: 'Clave Presupuestal',
                    name: 'CLAVE_PRESUP',
                    id: 'ctaCLAVE_PRESUP',
                    dataIndex: 'CLAVE_PRESUP',
                    sortable: true,
                    hidden: true,
                    width: 100
                },
                        
                  {
                    xtype: 'gridcolumn',
                    header: 'Tipo',
                    name: 'TIPO',
                    filterable: true,
                    id: 'ctaTIPO',
                    dataIndex: 'TIPO',
                    sortable: true,
                    hidden: false,
                    width: 120,
                     renderer: function(value) {
               
            
                       if(value==='R'){
                            return 'Resultados';
                        }else if(value==='O'){
                            return 'Orden';
                        }else if(value==='A'){
                            return 'Activo';
                        }else if(value==='P'){
                            return 'Pasivo';
                        }else if(value==='C'){
                            return 'Capital';
                      
                        }else{
                             return value;
                        }

                    }
                },
                        
                 {
                    xtype: 'gridcolumn',
                    header: 'Mayor',
                    name: 'MAYOR',
                    filterable: true,
                    id: 'ctaMAYOR',
                    dataIndex: 'MAYOR',
                    sortable: true,
                    hidden: false,
                    width: 120,
                    
                   
                    renderer: function(value) {
               
            
                       if(value==='T'){
                            return 'Titulo';
                        }else if(value==='S'){
                            return 'Subtitulo';
                        }else if(value==='0'){
                            return 'No';
                        }else if(value==='1'){
                            return 'Si';
                       
                        }else{
                             return value;
                        }

                    }
                  
                },
                 {
                    xtype: 'gridcolumn',
                    header: 'Cta Completaria',
                    name: 'CTA_COMPLEMENTARIA',
                    id: 'ctaCTA_COMPLEMENTARIA',
                    dataIndex: 'CTA_COMPLEMENTARIA',
                    sortable: true,
                    hidden: true,
                    width: 180
            
                },
                 {
                    xtype: 'gridcolumn',
                    header: 'Cta Completaria',
                    name: 'CTA_COMPL_NOM',
                    id: 'ctaCTA_COMPL_NOM',
                    dataIndex: 'CTA_COMPL_NOM',
                    sortable: true,
                    hidden: false,
                    width: 180
            
                },
                 {
                    xtype: 'gridcolumn',
                    header: 'Divisa',
                    name: 'DIVISA',
                    id: 'ctaDIVISA',
                    dataIndex: 'DIVISA',
                    sortable: true,
                    hidden: true,
                    width: 180
               
                },
                 {
                    xtype: 'gridcolumn',
                    header: 'Divisa',
                    name: 'NOM_DIVISA',
                    id: 'ctaDIVISA_NOM',
                    dataIndex: 'DIVISA_NOM',
                    sortable: true,
                    hidden: false,
                    width: 180
               
                },
                 {
                    xtype: 'gridcolumn',
                    header: 'Banco',
                    name: 'BANCO',
                    id: 'ctaBANCO',
                    dataIndex: 'BANCO',
                    sortable: true,
                    hidden: true,
                    width: 160
                   
                },
                 {
                    xtype: 'gridcolumn',
                    header: 'Banco',
                    name: 'BANCO_NOM',
                    id: 'ctaBANCO_NOM',
                    dataIndex: 'BANCO_NOM',
                    sortable: true,
                    hidden: false,
                    width: 160
                   
                },
                 {
                    xtype: 'gridcolumn',
                    header: 'Cuenta Sat',
                    name: 'CUENTA_SAT',
                    filterable: true,
                    id: 'ctaCUENTA_SAT',
                    dataIndex: 'CUENTA_SAT',
                    sortable: true,
                    hidden: true,
                    width: 200
           
                    
                },
                  {
                    xtype: 'gridcolumn',
                    header: 'Cuenta Sat',
                    name: 'CUENTA_SAT_NOM',
                    filterable: true,
                    id: 'ctaCUENTA_SAT_NOM',
                    dataIndex: 'CUENTA_SAT_NOM',
                    sortable: true,
                    hidden: false,
                    width: 200
           
                    
                },
                   {
                    xtype: 'gridcolumn',
                    header: 'Orden',
                    name: 'ID_ORD_BALANZA',
                    id: 'ctaID_ORD_BALANZA',
                    dataIndex: 'ID_ORD_BALANZA',
                    sortable: true,
                    hidden: false,
                    width: 100
                }
                
                

            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreCuentas',
                      listeners: {
                        scope: this,
                        change: function(col, pageData, eOpts ) {   
//                            msgOut("en cambio de pagina");
//                            msgOut("pageDate:",pageData);
                           // msgOut(pageData.currentPage);
                           if(!Ext.isEmpty(pageData)){
                          this.fireEvent("recargaPagina",pageData.currentPage) ;
                         }
                        }
                     },
                    id: 'statusDetalle',
                    items: [
                    //    '->',
                     //   bandera

                    ]
                })

            ],
            
            viewConfig: {
                  
                stripeRows: true,
                listeners: {
                    itemcontextmenu: function(view, rec, node, index, e) {                  
                        e.stopEvent();
                        if (me.habilitaMenu) {
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
                        
                       
                            me.habilitaMenu = true;
 
                              me.column = 'ESTATUS';
                            
                                           
                        e.preventDefault();

                    }
                }
            }



        });


        this.callParent(arguments);
    }



}
);



