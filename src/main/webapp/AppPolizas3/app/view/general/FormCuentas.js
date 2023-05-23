Ext.define('AppPolizas3.view.general.FormCuentas', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formcuentas',
    itemId: 'formcuentas',
    xtype: 'formcuentas',
    bodyPadding: 5,
    width: 600,
    defaultType: 'textfield',
    autoScroll: true,
    layout: 'form',
    url: 'CrearCuenta/save',
    initComponent: function() {
        
        var storeCuentaPadre = Ext.create('AppPolizas3.store.StoreCuentaPadre');
        
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
            
             var mayor = Ext.create('Ext.data.Store', {
            fields: ['claveM', 'nombreM'],
                data : [
                    {"claveM":"T", "nombreM":"Titulo"},
                    {"claveM":"S", "nombreM":"Subtitulo"},
                    {"claveM":"0", "nombreM":"No"},
                    {"claveM":"1", "nombreM":"Si"}
                    
                   
                 
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
                    //vtype: 'numeroId'
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Cuenta',
                    name: 'txtCuenta',
                    id: 'txtCuenta',
                    allowBlank: false,
                    readOnly:false
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
                    allowBlank: false
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
                {
                    xtype: 'textfield',
                    fieldLabel: 'Cuenta SAT',
                    name: 'txtCtaSat',
                    id: 'txtCtaSat',
                    allowBlank: true,
                    readOnly:false
                    //vtype: 'numeroId'
                },
               
               {
                   
                        xtype: 'combobox',
                        name: 'cboCuentaPadre',
                        fieldLabel: 'Cuenta Padre',
                        id: 'cboCuentaPadre',
                        store: storeCuentaPadre,
                        minChars: 4,
                        displayField: 'CUENTA_ALIAS',
                        valueField: 'CUENTA',
                        typeAhead: false,
                        validateOnChange: true,
                        allowBlank: true,
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
                               // this.fireEvent("nombreCuenta", value.valueModels[0].data.NOMBRE, value.valueModels[0].data.CUENTA);
                            }
                        },
                        pageSize: 10
                    }
               
             
            ], //fin if item

            buttons: [
                {
                    text: 'save',
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









