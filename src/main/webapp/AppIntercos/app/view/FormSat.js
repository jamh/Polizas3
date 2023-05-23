Ext.define('AppIntercos.view.FormSat', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formsat',
    itemId: 'formsat',
    xtype: 'formsat',
    //title:'SAT',
    //flex:1,
    bodyPadding: 5,
//    width: 600,
    defaultType: 'textfield',
  //  autoScroll: true,
  //  layout: 'center',
  //  layout: 'fit',
  layout:{
        type: 'vbox',
                align: 'center',
                pack: 'center'
      //  type:'vbox',
      //  align:'center'
    },
   height: 480,
            width: 400,
   url: 'CfdiSat/saveDatos',
   // url: 'Convertidor/save',
    initComponent: function() {
        var me = this;
        
         var storePeriodo = Ext.create('AppIntercos.store.StorePeriodo');
            var storeCalendario = Ext.create('AppIntercos.store.StoreCalendario');
        
       // var storeTipoPolizaConvertidor = Ext.create('AppConvertidor.store.StoreTipoPoliza');
        
//        var estatus = Ext.create('Ext.data.Store', {
//            fields: ['estatus', 'name'],
//                data : [
//                    {"estatus":"1", "name":"1-Activo"},
//                    {"estatus":"0", "name":"0-Inactivo"}
//                 
//                ]
//            });
//            
//         var origen = Ext.create('Ext.data.Store', {
//            fields: ['origen', 'name'],
//                data : [
//                    {"origen":"P", "name":"Cuentas por Pagar"},
//                    {"origen":"C", "name":"Cuentas por Cobrar"}
//                 
//                ]
//            });
//            

           

        Ext.apply(me, {
              tools: [

           
            ],
            items: [
                {
                    xtype: 'container',
                   // flex: 1,
                    height: 50
                    //width: 305
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'RFC',
                    name: 'txt_RFC',
                    id: 'txt_RFC',
                   
                    allowBlank: false,
                    readOnly: false,
                    hidden:false,
                    listeners:{
                        change: function(field, newValue, oldValue){
                            field.setValue(newValue.toUpperCase());
                        }
                     }
                },
                
                {
                    xtype: 'textfield',
                    fieldLabel: 'SEC',
                    name: 'txtSecuencia',
                    id: 'txtSecuencia',
                   
                    allowBlank: true,
                    readOnly: true,
                    hidden:true
                    
                },
                    
                        
               {
                    xtype: 'container',
                   // flex: 1,
                    height: 10
                    //width: 305
                },
                 {
                    //xtype: 'combobox',
                   inputType: 'password',
                    fieldLabel: 'Password',
                    name: 'txtPassword',
                    id: 'txtPassword',
                    hidden:false,
                    //store: origen,
                    //queryMode: 'local',
                   // displayField: 'name',
                   // valueField: 'origen',
                    allowBlank: false,
                    readOnly: false
                },
                 {
                    xtype: 'container',
                   // flex: 1,
                    height: 10
                   
                },
                  {
                    xtype: 'combobox',
                    id: 'cboCxpCalendario',
                    fieldLabel: 'Calendario',
                    name: 'cboCxpCalendario',
                    itemId: 'cboCxpCalendario',
                    displayField: 'CALENDARIO',
                    valueField: 'CALENDARIO',              
                    typeAhead: true,
                    minChars: 0,
                    editable:false,
                    store: storeCalendario,
                    allowBlank: false,
                     listeners: {
                        scope: this,
                        'select': function(valor) {
                            if (Ext.isEmpty(valor.value))
                                return;
                            Ext.getCmp('cboCxpPeriodo').clearValue();
                            Ext.getCmp('cboCxpPeriodo').setReadOnly(false);
                            storePeriodo.removeAll();
                            storePeriodo.proxy.extraParams.calendario = valor.value;
                            
                            storePeriodo.load({
                                callback: function(val, val2) {

                                }
                            });
                        }
                     }
                },
                 {
                    xtype: 'combobox',
                    id: 'cboCxpPeriodo',
                    fieldLabel: 'Periodo',
                    name: 'cboCxpPeriodo',
                    itemId: 'cboCxpPeriodo',
                    displayField: 'PERIODO',
                    valueField: 'PERIODO',              
                    typeAhead: true,
                    minChars: 0,
                    editable:false,
                    store: storePeriodo,
                    allowBlank: false,
                    readOnly:true,
                     listeners: {
                        scope: this,
                        'select': function(valor) {
                          
                        }
                     }
                },
                 {
                    xtype: 'container',
                   // flex: 1,
                    height: 30
                   
                },
                
                 {
                    xtype: 'checkbox',
                    boxLabel: 'Guardar Informacion',
                    name: 'txtSaveDat',
                    id: 'txtSaveDat',                
                    inputValue: '1'
                
                   
                  
                },
//                {
//                    xtype: 'container',
//                    flex: 2,
//                    height: 100,
//                    width: 305,
//                    layout: {
//                        align: 'center',
//                       // pack: 'center',
//                        type: 'vbox'
//                    },
//                    items: [
//                        
//                         {
//                            xtype: 'textfield',
//                            fieldLabel: 'RFC',
//                            name: 'txt_RFC',
//                            id: 'txt_RFC',
//
//                            allowBlank: false,
//                            readOnly: false,
//                            hidden:false
//                        },
//
//                         {
//                            //xtype: 'combobox',
//                           inputType: 'password',
//                            fieldLabel: 'Password',
//                            name: 'txtPassword',
//                            id: 'txtPassword',
//                            hidden:false,
//                            //store: origen,
//                            //queryMode: 'local',
//                           // displayField: 'name',
//                           // valueField: 'origen',
//                            allowBlank: false,
//                            readOnly: false
//                        }
//                    ]
//                },
                {
                    xtype: 'container',
                   // flex: 1,
                    height: 30
                   
                },
                {
                    xtype: 'label',
                    name: 'acceptTerms',
                    id: 'acceptTerms',
                    //text: 'Terminos de Uso',
                    
                    html: '<a href="/Polizas3/resources/politica/aviso privacidad.pdf" class="terms" target="_blank">Termino de Uso</a>.',
                    // Listener to open the Terms of Use page link in a modal window
                    listeners: {
                        click: {
                            element: 'boxLabelEl',
                            fn: function(e) {
                                var target = e.getTarget('.terms'),
                                        win;
                                if (target) {
                                    
                                      var string = Ext.String.format(
                                        'http://' + window.location.host + '/Polizas3/resources/politica/aviso privacidad.pdf'
                                        
                                    );

                            Ext.create('Ext.window.Window', {
                                title: 'XML',
                                height: 500,
                                width: 500,
                                minimizable: true,
                                maximizable : true,
                                layout: 'fit',
                                items: {  // Let's put an empty grid in just to illustrate fit layout
                                    xtype: 'panel',
                                    //title: 'My PDF',
                                    width: 600,
                                    height: 400,
                                    items: {
                                        xtype: 'component',
                                        autoEl: {
                                            tag: 'iframe',
                                            style: 'height: 100%; width: 100%; border: none',
                                            src: string
                                        }
                                    },
                                     buttons: [{
                                                text: 'Cancelar',
                                                handler: function() {
                                                    this.up('window').close();
                                                    
                                                }
                                            }, {
                                                text: 'Aceptar',
                                                handler: function() {
                                                    this.up('window').close();
                                                    
                                                }
                                            }]
                                }
                            }).show();
                                    
//                                    win = Ext.widget('window', {
//                                        title: 'Termino de Uso',
//                                        modal: true,
//                                        html: '<iframe src="' + target.href + '" width="950" height="500" style="border:0"></iframe>',
//                                        buttons: [{
//                                                text: 'Cancelar',
//                                                handler: function() {
//                                                    this.up('window').close();
//                                                    
//                                                }
//                                            }, {
//                                                text: 'Aceptar',
//                                                handler: function() {
//                                                    this.up('window').close();
//                                                    
//                                                }
//                                            }]
//                                    });
//                                    win.show();
//                                    e.preventDefault();
                                }
                            }
                        }
                    }
                }, 
//                {
//                    xtype: 'checkboxfield',
//                    name: 'acceptTerms',
//                    id: 'acceptTerms',
//                    fieldLabel: 'Terminos de Uso',
//                    hideLabel: true,
//                    style: 'margin-top:15px',
//                    boxLabel: 'He leído y acepto el <a href="/Polizas3/resources/politica/aviso privacidad.pdf" class="terms">Termino de Uso</a>.',
//                    // Listener to open the Terms of Use page link in a modal window
//                    listeners: {
//                        click: {
//                            element: 'boxLabelEl',
//                            fn: function(e) {
//                                var target = e.getTarget('.terms'),
//                                        win;
//                                if (target) {
//                                    win = Ext.widget('window', {
//                                        title: 'Termino de Uso',
//                                        modal: true,
//                                        html: '<iframe src="' + target.href + '" width="950" height="500" style="border:0"></iframe>',
//                                        buttons: [{
//                                                text: 'Cancelar',
//                                                handler: function() {
//                                                    this.up('window').close();
//                                                    Ext.getCmp('acceptTerms').setValue(false);
//                                                    //formPanel.down('[name=acceptTerms]').setValue(false);
//                                                }
//                                            }, {
//                                                text: 'Aceptar',
//                                                handler: function() {
//                                                    this.up('window').close();
//                                                    Ext.getCmp('acceptTerms').setValue(true);
//                                                    //formPanel.down('[name=acceptTerms]').setValue(true);
//                                                }
//                                            }]
//                                    });
//                                    win.show();
//                                    e.preventDefault();
//                                }
//                            }
//                        }
//                    }
//                },        
             /*   {
                    xtype: 'container',
                   // flex: 1,
                    height: 50,
                    html:'<a href="http://www.w3schools.com/html/" target="_blank">Link de prueba Container</a>'
                    //width: 305
                },*/
                {
                    xtype: 'container',
                    //flex: 1,
                    height: 150,
                    width: 305,
                    layout: {
                        align: 'middle',
                        pack: 'end',
                        type: 'hbox'
                    },
                    items: [
                        
//                        {
//                            xtype: 'button',
//                            width: 94,
//                            text: 'Inicar',
//                            id:'btnSaveDatosSat',
//                            scope: this,
//                            handler: function() {
//
//                                this.fireEvent("guardaDatosSat");
//                            }
//                        }
                    ]
                }




            ], //fin if item
                       buttons: [
                           
                            {
                           // xtype: 'button',
                            width: 94,
                            text: 'Inicar',
                            id:'btnSaveDatosSat',
                            scope: this,
                            handler: function(btn) {

                                this.fireEvent("guardaDatosSat",btn);
                            }
                        }
//                {
//                    text: 'save',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("saveRelacionPoliza", btn);
//                    }
//                }
              
            ]
     //       tbar: [
              
//                '->',
//                {
//                    text: 'Agregar',
//                    iconCls: 'add-icon',
//                    id:'agregarConvertidorM',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("agregarRegistro", btn);
//                    }
//                },
//                {
//                    text: 'Guardar',
//                    iconCls: 'save-icon',
//                    id:'guardarConvertidorM',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("saveConvertidorMaestro", btn);
//                    }
//                },
//                {
//                    text: 'Borrar',
//                    iconCls: 'delete-icon',
//                    id:'borrarConvertidorM',
//                    scope: this,
//                    handler: function() {
//                
//                        this.fireEvent("deleteConvertidor");
//                    }
//                },
//                {
//                    text: 'Copiar',
//                    iconCls: 'copy-icon',
//                    id:'copiarConvertidorM',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("copiarRegistro", btn);
//                    }
//                }
       //     ]
          
            //fin if button

        });
        this.callParent(arguments);
    }
    

});







