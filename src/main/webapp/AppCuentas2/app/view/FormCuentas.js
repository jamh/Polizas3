Ext.define('AppCuentas2.view.FormCuentas', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formcuentas',
    itemId: 'formcuentas',
    xtype: 'formcuentas',
    bodyPadding: 5,
    width: 600,
    defaultType: 'textfield',
    autoScroll: true,
    layout: 'form',
    url: 'CrearCuenta2/save',
    initComponent: function() {
        
        var storeCuentaPadre = Ext.create('AppCuentas2.store.StoreCuentaPadre');
        var storeCuentaSat = Ext.create('AppCuentas2.store.StoreCtaSat');
        var storeMonedaSat = Ext.create('AppCuentas2.store.StoreMonedaSat');
        var storeBancosSat = Ext.create('AppCuentas2.store.StoreBancosSat');
        var storeCuentaComple =Ext.create('AppCuentas2.store.StoreCtaComplementaria');
        
        
        
         var afectable = Ext.create('Ext.data.Store', {
            fields: ['clave', 'nombre'],
                data : [
                    {"clave":"S", "nombre":"S-Afectable"},
                    {"clave":"N", "nombre":"N-No Afectable"}
                 
                ]
            });
          
          var cierre = Ext.create('Ext.data.Store', {
            fields: ['claveC', 'nombreC'],
                data : [
                    {"claveC":"S", "nombreC":"S-Si es de Cierre"},
                    {"claveC":"R", "nombreC":"R-Resultados"},
                    {"claveC":"N", "nombreC":"N-No es de Cierre"}
                 
                ]
            });
            
            var estatus = Ext.create('Ext.data.Store', {
            fields: ['claveE', 'nombreE'],
                data : [
                    {"claveE":"A", "nombreE":"A-Activa"},
                    {"claveE":"I", "nombreE":"I-Inactiva"}
                   
                 
                ]
            });
            
             var naturaleza = Ext.create('Ext.data.Store', {
            fields: ['claveN', 'nombreN'],
                data : [
                    {"claveN":"A", "nombreN":"A-Acreedora"},
                    {"claveN":"D", "nombreN":"D-Deudora"}
                   
                 
                ]
            });
            
             var tipo = Ext.create('Ext.data.Store', {
            fields: ['claveT', 'nombreT'],
                data : [
                    {"claveT":"R", "nombreT":"R-Resultados"},
                    {"claveT":"O", "nombreT":"O-Orden"},
                    {"claveT":"A", "nombreT":"A-Activo"},
                    {"claveT":"P", "nombreT":"P-Pasivo"},
                    {"claveT":"C", "nombreT":"C-Capital"}
                   
                 
                ]
            });
            
             var mayor = Ext.create('Ext.data.Store', {
            fields: ['claveM', 'nombreM'],
                data : [
                    {"claveM":"T", "nombreM":"T-Titulo"},
                    {"claveM":"S", "nombreM":"S-Subtitulo"},
                    {"claveM":"0", "nombreM":"N-No"},
                    {"claveM":"1", "nombreM":"S-Si"}
                    
                   
                 
                ]
            });

          
      
        Ext.apply(this, {
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Estructura',
                    name: 'estructuraCuenta',
                    id: 'estructuraCuenta',
                    allowBlank: false,
                    readOnly:true
                 
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Cuenta',
                    name: 'txtCuenta',
                    id: 'txtCuenta',
                    allowBlank: false,
                    readOnly:false,
                     listeners: {
            
                        }
               
                },
                        
                {
                    xtype: 'textfield',
                    fieldLabel: 'Cuenta',
                    name: 'txtCuentaEstr',
                    id: 'txtCuentaEstr',
                    allowBlank: true,
                    readOnly:false,
                    hidden:true
                    //vtype: 'numeroId'
                },        
                {
                    xtype: 'textfield',
                    fieldLabel: 'Nombre',
                    name: 'txtNombreCta',
                    id: 'txtNombreCta',
                    allowBlank: false,
                    readOnly:false
                    //vtype: 'numeroId'
                },
                 {
                   
                        xtype: 'combobox',
                        name: 'cboCuentaPadre',
                        fieldLabel: 'Cuenta Acumuladora',
                        id: 'cboCuentaPadre',
                        store: storeCuentaPadre,
                        minChars: 4,
                        displayField: 'NOMBRE',
                        valueField: 'CUENTA',
                        typeAhead: false,
                        validateOnChange: true,
                        allowBlank: true,
                        hideTrigger: false,
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
                        
                              var afectable = value.valueModels[0].data.AFECTABLE;
                              var cierre = value.valueModels[0].data.CIERRE;
                              var estatus = value.valueModels[0].data.ESTATUS;
                              var naturaleza = value.valueModels[0].data.NATURALEZA;
                              var tipo = value.valueModels[0].data.TIPO;
                              var mayor = value.valueModels[0].data.MAYOR;
                              
                         
                              if (mayor === 'T'){
                                   mayor = 'S';
                              }else if(mayor === 'S'){
                                   mayor = '1';
                              }else if(mayor === '1'){
                                   mayor = '0';
                                  
                              }else{
                                   mayor = '';
                              }
                             
                              
                              Ext.getCmp('cboAfectable').setValue(afectable);
                              Ext.getCmp('cboCierre').setValue(cierre);
                              Ext.getCmp('cboEstatus').setValue(estatus);
                              Ext.getCmp('cboNaturaleza').setValue(naturaleza);
                              Ext.getCmp('cboTipoCta').setValue(tipo);
                              Ext.getCmp('cboMayor').setValue(mayor);
                              
                              
                               this.fireEvent("validaCambioCuentaPadre");
                             
                        
                            }
                           
                        }//,
                        
                       // pageSize: 10
                    },
//                 {
//                    xtype: 'textfield',
//                    fieldLabel: 'Nombre',
//                    name: 'txtNombreCta',
//                    id: 'txtNombreCta',
//                    allowBlank: false,
//                    readOnly:false
//                    //vtype: 'numeroId'
//                },
                 {
                    xtype: 'combobox',
                    fieldLabel: 'Afectable',
                    name: 'cboAfectable',
                    id: 'cboAfectable',     
                    store: afectable,
                    queryMode: 'local',
                    readOnly: false,
                    hidden:false,
                    displayField: 'nombre',
                    valueField: 'clave',
                    allowBlank: false
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Cierre',
                    name: 'cboCierre',
                    id: 'cboCierre',     
                    store: cierre,
                    queryMode: 'local',
                    readOnly: false,
                    hidden:false,
                    displayField: 'nombreC',
                    valueField: 'claveC',
                    allowBlank: false
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Estatus',
                    name: 'cboEstatus',
                    id: 'cboEstatus',     
                    store: estatus,
                    queryMode: 'local',
                    readOnly: false,
                    hidden:false,
                    displayField: 'nombreE',
                    valueField: 'claveE',
                    allowBlank: false
                },
                 {
                    xtype: 'combobox',
                    fieldLabel: 'Naturaleza',
                    name: 'cboNaturaleza',
                    id: 'cboNaturaleza',     
                    store: naturaleza,
                    queryMode: 'local',
                    readOnly: false,
                    hidden:false,
                    displayField: 'nombreN',
                    valueField: 'claveN',
                    allowBlank: false
                },
                 {
                    xtype: 'combobox',
                    fieldLabel: 'Tipo',
                    name: 'cboTipoCta',
                    id: 'cboTipoCta',     
                    store: tipo,
                    queryMode: 'local',
                    readOnly: false,
                    hidden:false,
                    displayField: 'nombreT',
                    valueField: 'claveT',
                    allowBlank: false,
                    listeners: {
                            scope: this,
                            select: function(value) {
                        
                              var clave = value.valueModels[0].data.claveT;
                            
                              
                         
//                              if (clave === 'R'){
//                                   Ext.getCmp('cboCierre').setValue('S');
//                             
//                              }else{
//                                   Ext.getCmp('cboCierre').setValue('N');
//                              }
                             
                              
     
                              
                        
                            }
                           
                        }//,
                    
                    
                },
                 {
                    xtype: 'combobox',
                    fieldLabel: 'Mayor',
                    name: 'cboMayor',
                    id: 'cboMayor',     
                    store: mayor,
                    queryMode: 'local',
                    readOnly: false,
                    hidden:false,
                    displayField: 'nombreM',
                    valueField: 'claveM',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Clave Presup.',
                    name: 'txtClavePres',
                    id: 'txtClavePres',
                    hidden:true,
                    allowBlank: true,
                    readOnly:false
                    //vtype: 'numeroId'
                },
//                {
//                    xtype: 'textfield',
//                    fieldLabel: 'Cuenta SAT',
//                    name: 'txtCtaSat',
//                    id: 'txtCtaSat',
//                    allowBlank: true,
//                    readOnly:false
//                    //vtype: 'numeroId'
//                },
                   {
                   
                        xtype: 'combobox',
                        name: 'cboCtaComplementaria',
                        fieldLabel: 'Cta. Comple.',
                        id: 'cboCtaComplementaria',
                        store: storeCuentaComple,
                        minChars: 3,
                        displayField: 'NOMBRE',
                        valueField: 'CUENTA',
                        typeAhead: false,
                        validateOnChange: true,
                        allowBlank: true,
                        hideTrigger: false,
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro la cuenta.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{CUENTA_ALIAS}</span><h3>{NOMBRE}</h3>';
                            }
                        },
                        listeners: {
                            scope: this,
                            select: function(value) {
                        
                            
                            }
                           
                        
                        
                       
                           
                        }//,
                        
                       // pageSize: 10
                    },

                  {
                   
                        xtype: 'combobox',
                        name: 'cboMoneda',
                        fieldLabel: 'Moneda',
                        id: 'cboMoneda',
                        store: storeMonedaSat,
                        minChars: 3,
                        displayField: 'NOMBRE',
                        valueField: 'CODIGO',
                        typeAhead: false,
                        validateOnChange: true,
                        allowBlank: true,
                        hideTrigger: false,
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro la moneda.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{CODIGO}</span><h3>{MONEDA}</h3>';
                            }
                        },
                        listeners: {
                            scope: this,
                            select: function(value) {
                        
                            
                            }
                           
                        
                        
                       
                           
                        }//,
                        
                       // pageSize: 10
                    },
                    {
                   
                        xtype: 'combobox',
                        name: 'cboBanco',
                        fieldLabel: 'Banco',
                        id: 'cboBanco',
                        store: storeBancosSat,
                        minChars: 3,
                        displayField: 'NOMBRE1',
                        valueField: 'BANCO',
                        typeAhead: false,
                        validateOnChange: true,
                        allowBlank: true,
                        hideTrigger: false,
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro el banco.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{BANCO}</span><h3>{NOMBRE}</h3>';
                            }
                        },
                        listeners: {
                            scope: this,
                            select: function(value) {
                        
                            
                            }
                           
                        
                        
                       
                           
                        }//,
                        
                       // pageSize: 10
                    },
                
                {
                   
                        xtype: 'combobox',
                        name: 'txtCtaSat',
                        fieldLabel: 'Cuenta SAT',
                        id: 'txtCtaSat',
                        store: storeCuentaSat,
                        minChars: 3,
                        displayField: 'NOMBRE1',
                        valueField: 'CODIGO_AGRUPADOR',
                        typeAhead: false,
                        validateOnChange: true,
                        allowBlank: true,
                        hideTrigger: false,
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro cuenta.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{CODIGO_AGRUPADOR}</span><h3>{NOMBRE}</h3>';
                            }
                        },
                        listeners: {
                            scope: this,
                            select: function(value) {
                        
                            
                            }
                           
                        
                        
                       
                           
                        }//,
                        
                       // pageSize: 10
                    },
               
              
                            
                   {
                    xtype: 'textfield',
                    fieldLabel: 'Accion',
                    name: 'txtAccion',
                    id: 'txtAccion',
                    allowBlank: true,
                    readOnly:true,
                    hidden:true
                    //vtype: 'numeroId'
                },
                
                {
                    xtype: 'textfield',
                    fieldLabel: 'Id',
                    name: 'txtID',
                    id: 'txtID',
                    allowBlank: true,
                    readOnly:true,
                    hidden:true
                    //vtype: 'numeroId'
                },
                  {
                    xtype: 'textfield',
                    fieldLabel: 'Saldo',
                    name: 'txtSaldo',
                    id: 'txtSaldo',
                    allowBlank: true,
                    readOnly:true,
                    hidden:true
                    //vtype: 'numeroId'
                },
                  {
                    xtype: 'textfield',
                    fieldLabel: 'Poliza',
                    name: 'txtPoliza',
                    id: 'txtPoliza',
                    allowBlank: true,
                    readOnly:true,
                    hidden:true
                    //vtype: 'numeroId'
                },
                         {
                    xtype: 'textfield',
                    fieldLabel: 'Transapaso Saldos',
                    name: 'txtTranspasoSaldos',
                    id: 'txtTranspasoSaldos',
                    allowBlank: true,
                    readOnly:true,
                    hidden:true
                    //vtype: 'numeroId'
                },
                 {
                    xtype: 'textfield',
                    fieldLabel: 'CtaAcumuladoraTranSaldos',
                    name: 'txtCtaAcumuladoraTranSaldos',
                    id: 'txtCtaAcumuladoraTranSaldos',
                    allowBlank: true,
                    readOnly:true,
                    hidden:true
                    //vtype: 'numeroId'
                },
                 {
                    xtype: 'textfield',
                    fieldLabel: 'Orden',
                    name: 'txtOrdenBalanza',
                    id: 'txtOrdenBalanza',
                    allowBlank: true,
                    readOnly:false,
                    hidden:false
                    //vtype: 'numeroId'
                }
                
               
             
            ], //fin if item

            buttons: [
                {
                    text: 'Guardar',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("saveCuenta", btn);
                    }
                },
                {
                    text: 'Cancelar',
                    scope: this,
                    handler: function() {
                        this.up('window').close();
                    }
                }
            ]//fin if button

        });
        this.callParent(arguments);
    }

});









