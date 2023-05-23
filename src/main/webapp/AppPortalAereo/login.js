// JavaScript Document
Ext.onReady(function(){
	Ext.QuickTips.init();
        
    

 

     
   
	var login = new Ext.FormPanel({
		labelWidth:90,
		url:'/Polizas3/por/login3',
		method:'POST',
		width:300,
		autoHeight:true,
		bodyStyle:'padding: 10px 10px 15px 15px',
		defaultType:'textfield',
		monitorValid:true,
                    tbar: [
                                {
                                text:translations.manual,
                                //type:'submit',
                                name:'manual',
                                handler:function(btn){


                                        var string = Ext.String.format(
                                                //'<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
                                                'http://appferaz1.com/empres/media/ManualFerazMasair.docx'


                                                );
                                         window.open(string);

                                        return string;

                                }





                        },
                        '->',
                            {
                            text:translations.terminos,
                            //type:'submit',
                            name:'termino',
                            handler:function(btn){


                                    var string = Ext.String.format(
                                            //'<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
                                            'http://appferaz1.com/empres/media/Aviso de Privacidad-MAS AIR Proveedores Administrategia.docx'


                                            );
                                     window.open(string);

                                    return string;

                            }





                    }
                    ],
		items:[{
			fieldLabel:translations.usuarioAcceso,
			id:'txtUsername',
                        name:'usuario',
			allowBlank:false
		},{
			fieldLabel:translations.passwordAcceso,
			id:'txtPassword',
                        name:'password',
			allowBlank:false,
			inputType:'password'	
		}],
		bbar:[
                     
                   
        
               {
			text:translations.botonRegistro,
			//type:'submit',
			name:'registro',
			handler:function(btn){
                            
                             console.log('saludos');
                            
                          var windowReg =   Ext.create('Ext.window.Window', {
                                title: translations.winRegistro,
                                height: 550,
                                width: 500,
                                minimizable: true,
                                maximizable: true,
                                layout: 'fit',
                                items: formRegistro,
                                closeAction:'hide',
                                onEsc: function() {
                                    this.hide();
                                }
                                
                            }).show(); 
                           
			}
                        
                        
                        
                        
                        
		},
                   
                
                '->',
                 {
			text:translations.botonEntrar,
			type:'submit',
			name:'signin',
			handler:function(btn){
                            
                            // console.log('saludos');
                            
				login.getForm().submit({
					method:'POST',
					waitTitle:'Please wait...',
					waitMsg:'Accesando..,',
					success:function(){
						Ext.Msg.alert(translations.tituloAlertaAcceso, translations.mensajeAccesoExito, function(btn,text){
							if(btn == 'ok'){
								var redirect = '/Polizas3/facturasAereo';
								window.location = redirect;	
							}
						});
					},
					failure:function(response,a,b){
                                            
                                             //  console.log(a.result.total);
                                             //  console.log(a.result.msg);
                                            
						Ext.Msg.alert('Error', a.result.msg, function(btn,text){
                                                    
                                                    if(btn == 'ok'){
                                                    
                                                      if (a.result.total === 3){
                                                          
                                                          var redirect = 'http://www.feraz.com.mx/';
								window.location = redirect;
                                                      }
                                                  }
                                                    
//							if(btn == 'ok'){
//                                                          
//								var redirect = 'http://appferaz1.com/adaEmpres';
//								window.location = redirect;	
//							}
						});
						login.getForm().reset();
						var txtUser=Ext.getCmp('txtUsername');
						txtUser.focus('',10);	
					}
				});
			}
                        
                        
                        
                        
                        
		}
              
        
     
        
        ]
	});
	
	var createwindow = new Ext.Window({
		title:translations.tituloAcceso,
                x:750,
                y:200,
		widht:310,
		height:200,
		closable:false,
		items:
       
                   login.show()
               //    container.show()
                
         
	});
        
        var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';

        
        var storePais= Ext.create('Ext.data.Store', {
            
             
                fields: [
                 'PAIS', 'NOMBRE'
                ],

                proxy:{
                    url:'process/data/BuscaPaisProv',
                    type:'ajax',
                    reader:{
                        type:'json',
                        root:'data',
                        totalProperty:'total'
                    }
                }

            });
        
        var storeEstado= Ext.create('Ext.data.Store', {
            
              fields: [
                    'ESTADO', 'NOMBRE'
                   ],

                   proxy:{
                       url:'process/data/BuscaEstadoProv',
                       type:'ajax',
                       reader:{
                           type:'json',
                           root:'data',
                           totalProperty:'total'
                       }
                   }

               });
               
               
        var storeBancosSat= Ext.create('Ext.data.Store', {
                    fields: [
                     'CLAVE', 'NOMBRE', 'NOMBRE1'
                    ],

                    proxy:{
                        url:'process/data/BuscaBancoSatProv',
                        type:'ajax',
                        reader:{
                            type:'json',
                            root:'data',
                            totalProperty:'total'
                        }
                    }

            });
            
            
            var tCuenta = Ext.create('Ext.data.Store', {
            fields: ['CLAVE', 'NOMBRE'],
                data : [
                    {"CLAVE":"NAC", "NOMBRE":"NACIONAL"},
                    {"CLAVE":"EXT", "NOMBRE":"EXTRANJERO"}
                    
                   
                 
                ]
            });
            
              var tPersona = Ext.create('Ext.data.Store', {
            fields: ['CLAVE', 'NOMBRE'],
                data : [
                    {"CLAVE":"F", "NOMBRE":"F-Fisica"},
                    {"CLAVE":"M", "NOMBRE":"M-Moral"}
                    
                   
                 
                ]
            });
            
            var tPersonaExt = Ext.create('Ext.data.Store', {
            fields: ['CLAVE', 'NOMBRE'],
                data : [
                    {"CLAVE":"F", "NOMBRE":"Individual"},
                    {"CLAVE":"M", "NOMBRE":"Legal"}
                    
                   
                 
                ]
            });
            
            var tMoneda = Ext.create('Ext.data.Store', {
            fields: ['CLAVE', 'NOMBRE'],
                data : [
                    {"CLAVE":"PES", "NOMBRE":"PESOS"},
                    {"CLAVE":"USD", "NOMBRE":"DOLARES"},
                    {"CLAVE":"EUR", "NOMBRE":"EUROS"}
                    
                   
                 
                ]
            });
            
            
     
        
        var formRegistro = Ext.create('Ext.form.Panel', {
            
            alias: 'widget.formregistro',
            itemId: 'formregistro',
            xtype: 'formregistro',
            url:'CrearProveedor/registroAereo',
            method:'POST', 
            autoScroll: true,
            bodyPadding: 5,
            defaultType: 'textfield',
            layout: 'form',
            height: 480,
            width: 400,

                    items: [
                        {
                            fieldLabel: 'Compañia',
                            name: 'COMPANIA',
                            id: 'portalCompania',
                            hidden: true,
                            readOnly: true
                        },

                        {
                            fieldLabel: translations.nombreProv,
                            name: 'RAZON_SOCIAL',
                            id: 'portalRazonSocial',
                            enforceMaxLength: true,
                            maxLength: 400,
                            allowBlank: true,
                            hidden:false,
                            listeners:{
                                        change: function (field, newValue, oldValue) {
                                            field.setValue(newValue.toUpperCase());
                                        }
                                    }
                        },
                        
                        {
                                    xtype: 'combobox',
                                    fieldLabel: translations.tipoCuenta,
                                    name: 'cboTipoCuentaProv',
                                    id: 'cboTipoCuentaProv',
                                    afterLabelTextTpl: required,
                                    store: tCuenta,
                                    queryMode: 'local',
                                   // anchor: '95%',
                                    readOnly: false,
                                    hidden:false,
                                    displayField: 'NOMBRE',
                                    valueField: 'CLAVE',
                                    allowBlank: false,
                                    listeners: {
                                        'select': function(valor) {

                                        
                                            if(valor.value === 'NAC' ){
                                                 Ext.getCmp('portalRFC').setVisible(true);
                                                 Ext.getCmp('portalDIRECCION').setVisible(false);
                                                 Ext.getCmp('portalEstado').setVisible(true);
                                                 Ext.getCmp('portalDelegacion').setVisible(true);
                                                 Ext.getCmp('portalColonia').setVisible(true);
                                                 Ext.getCmp('portalCP').setVisible(true);
                                                 Ext.getCmp('portalCalle').setVisible(true);
                                                 Ext.getCmp('portalIBAN').setVisible(false);
                                                 Ext.getCmp('portalSWIFT').setVisible(false);
                                                 Ext.getCmp('portalCuentaBancario').setVisible(true);
                                                 Ext.getCmp('portalClabeProv').setVisible(true);
                                                 Ext.getCmp('portalBANCO').setVisible(true);
                                                 
                                                 Ext.getCmp('cboPersonaPortal').labelEl.update('Persona');
                                                 Ext.getCmp('cboPersonaPortal').setVisible(true);
                                                 Ext.getCmp('cboPersonaPortal').bindStore(tPersona);
                                                 
                                                 
                                                 
                                            }else{
                                                 Ext.getCmp('portalRFC').setVisible(false);
                                                 Ext.getCmp('portalDIRECCION').setVisible(true);
                                                 Ext.getCmp('portalEstado').setVisible(false);
                                                 Ext.getCmp('portalDelegacion').setVisible(false);
                                                 Ext.getCmp('portalColonia').setVisible(false);
                                                 Ext.getCmp('portalCP').setVisible(false);
                                                 Ext.getCmp('portalCalle').setVisible(false);
                                                  Ext.getCmp('portalIBAN').setVisible(true);
                                                 Ext.getCmp('portalSWIFT').setVisible(true);
                                                 Ext.getCmp('portalCuentaBancario').setVisible(false);
                                                 Ext.getCmp('portalClabeProv').setVisible(false);
                                                 Ext.getCmp('portalBANCO').setVisible(false);
                                                 
                                                 
                                                 Ext.getCmp('cboPersonaPortal').labelEl.update('Entities');
                                                 Ext.getCmp('cboPersonaPortal').setVisible(true);
                                                 Ext.getCmp('cboPersonaPortal').bindStore(tPersonaExt);
                                                 
                                                 
                                                 
                                                 
                                            }

                                        }
                                    }
                        },
                        

                        {
                            fieldLabel: translations.rfcProv,
                            name: 'RFC',
                            id: 'portalRFC',
                            allowBlank: true,
                            hidden:true
                        },
                         {
                                    xtype: 'combobox',
                                    fieldLabel: translations.tPersona,
                                    name: 'cboPersonaPortal',
                                    id: 'cboPersonaPortal', 
                                    afterLabelTextTpl: required,
                                   // store: tPersona,
                                    anchor: '95%',
                                    queryMode: 'local',
                                    readOnly: false,
                                    hidden:true,
                                    displayField: 'NOMBRE',
                                    valueField: 'CLAVE',
                                    allowBlank: false,
                                    listeners:{
                                        renderer: function(value) {
                                            
                                            console.log(value);
                                        }
                                    }
                                },
                                  {
                                    xtype: 'combobox',
                                    fieldLabel:translations.tMoneda,
                                    name: 'cboMonedaPortal',
                                    id: 'cboMonedaPortal',
                                    afterLabelTextTpl: required,
                                    store: tMoneda,
                                    queryMode: 'local',
                                    anchor: '95%',
                                    readOnly: false,
                                    hidden:false,
                                    displayField: 'NOMBRE',
                                    valueField: 'CLAVE',
                                    allowBlank: false
                                },

                        {
                            xtype: 'combobox',
                            name: 'PAIS',
                            id:'portalPais',
                            forceSelection: true,            
                            billingFieldName: 'billingState',
                            fieldLabel: translations.paisProv,
                            labelWidth: 50,
                            width: 112,
                            afterLabelTextTpl: required,
                            store: storePais,
                            valueField: 'PAIS',
                            displayField: 'NOMBRE',
                            typeAhead: true,
                            allowBlank: false,
                            listeners: {
                                    scope: this,
                                    'select': function(valor) {

                                            if (Ext.isEmpty(valor.value))
                                            return;
                                            Ext.getCmp('portalEstado').clearValue();
                                            storeEstado.removeAll();
                                            storeEstado.proxy.extraParams.pais = valor.value;
                                            storeEstado.load({
                                                callback: function(val, val2) {

                                                }
                                            });

                                    }
                            }
                        },
                        
                        {
                            labelWidth: 110,
                            xtype: 'textfield',
                            fieldLabel: translations.directProv,
                            name: 'DIRECCION',
                            id:'portalDIRECCION',
                            afterLabelTextTpl: required,
                            flex: 1,
                            allowBlank: true
                        },


                        {
                            xtype: 'combobox',
                            name: 'ESTADO',
                            id:'portalEstado',
                            forceSelection: true,
                            billingFieldName: 'billingState',
                            fieldLabel: translations.estadoProv,
                            labelWidth: 50,
                            width: 140,
                            afterLabelTextTpl: required,
                            store: storeEstado,
                            valueField: 'ESTADO',
                            displayField: 'NOMBRE',
                            typeAhead: true,
                            allowBlank: true
                        },
                        {
                            labelWidth: 110,
                            xtype: 'textfield',
                            fieldLabel: translations.delegacionProv,
                            name: 'DELEGACION',
                            id:'portalDelegacion',
                            afterLabelTextTpl: required,
                            flex: 1,
                            allowBlank: true
                        },

                        {
                            labelWidth: 110,
                            xtype: 'textfield',
                            fieldLabel: translations.coloniaProv,
                            name: 'COLONIA',
                            id:'portalColonia',
                            flex: 1,
                            allowBlank: true
                        }, 

                        {
                            xtype: 'textfield',
                            fieldLabel: translations.cpProv,
                            afterLabelTextTpl: required,
                            id:'portalCP',
                            labelWidth: 80,
                            name: 'mailingPostalCode',
                            width: 160,
                            allowBlank: true,
                            maxLength: 10,
                            enforceMaxLength: true,
                            maskRe: /[\d\-]/,
                            regex: /^\d{5}(\-\d{4})?$/,
                            regexText: 'Must be in the format xxxxx or xxxxx-xxxx'
                        },
                        {
                            labelWidth: 110,
                            fieldLabel: translations.calleProv,
                            name: 'CALLE',
                            id:'portalCalle'

                        },
                        {
                            labelWidth: 110,
                            fieldLabel: translations.contactoProv,
                            name: 'CONTACTO',
                            id:'CONTACTO'

                        },
                        
                        {
                                                xtype: 'combobox',
                                                        fieldLabel:translations.bancoProv,
                                                        name: 'BANCO',
                                                        //editable:false,
                                                        afterLabelTextTpl: required,
                                                        id: 'portalBANCO',
                                                        store: storeBancosSat,
                                                        minChars: 3,
                                                        hidden:true,
                                                        displayField: 'NOMBRE1',
                                                        valueField: 'CLAVE',
                                                        typeAhead: false,
                                                        validateOnChange: true,
                                                        allowBlank: true,
                                                        hideTrigger: false,
                                                        listConfig: {
                                                            loadingText: 'Buscando...',
                                                            emptyText: 'No se encontro el banco.',
                                                            getInnerTpl: function() {
                                                                return '<span style="color:green;font-weight: bold">{CLAVE}</span><h3>{NOMBRE}</h3>';
                                                            }
                                                        },
                                                        listeners: {
                                                            scope: this,
                                                            select: function(value) {


                                                            }





                                                        }//,
                        
                                                },
                                                {
                                                        fieldLabel: translations.cuentaBancoProv,
                                                        enforceMaxLength: true,
                                                        maxLength: 20,
                                                        name: 'CUENTA_BANCARIA',
                                                        hidden:true,
                                                        id:'portalCuentaBancario',
                                                        listeners:{
                                                        change: function (field, newValue, oldValue) {
                                                            field.setValue(newValue.toUpperCase());
                                                        }
                                                        }
                                                },
                                                {
                                                    fieldLabel:translations.clabeProv,
                                                            enforceMaxLength: true,
                                                            maxLength: 18,
                                                            name: 'CLABE',
                                                            minLength: 18,
                                                            enforceMinLength: true,
                                                            hidden:true,
                                                            id:'portalClabeProv',
                                                            listeners:{
                                                            change: function (field, newValue, oldValue) {
                                                                field.setValue(newValue.toUpperCase());
                                                            }
                                                            }
                                                },
                                                {
                                                    fieldLabel:"IBAN",
                                                            enforceMaxLength: true,
                                                            maxLength: 34,
                                                            
                                                            hidden:true,
                                                            name: 'IBAN',
                                                            id:'portalIBAN',
                                                            listeners:{
                                                            change: function (field, newValue, oldValue) {
                                                                field.setValue(newValue.toUpperCase());
                                                            }
                                                            }
                                                },
                                                {
                                                    fieldLabel:"SWIFT",
                                                            hidden:true,
                                                            enforceMaxLength: true,
                                                            maxLength: 11,
                                                            name: 'SWIFT',
                                                            id:'portalSWIFT',
                                                            listeners:{
                                                            change: function (field, newValue, oldValue) {
                                                                field.setValue(newValue.toUpperCase());
                                                            }
                                                            }
                                                },
                                                {
                                                    labelWidth: 110,
                                                    xtype: 'numberfield',
                                                    fieldLabel: translations.telProv,
                                                    name: 'TELEFONO',
                                                    id:'portalTelefono',
                                                    flex: 1,
                                                    allowBlank: true
                                                }, 
                                                {
                                                fieldLabel: translations.correoProv,
                                                name: 'CORREO',
                                                id:'portalCorreoProv',
                                                enforceMaxLength: true,
                                                //minLength: 13,
                                                maxLength: 50,
                                                afterLabelTextTpl: required,
                                                vtype: 'email',
                                                allowBlank: false,
                                                listeners:{
//                                                    change: function (field, newValue, oldValue) {
//                                                        field.setValue(newValue.toUpperCase());
//                                                    }
                                                }
                                        },
                                        
                                        {
                                                fieldLabel: translations.passProv,
                                                name: 'PASSWORD',
                                                id:'portalPassProv',
                                                afterLabelTextTpl: required,
                                                enforceMaxLength: true,
                                                //minLength: 13,
                                                maxLength: 50,
                                                inputType:'password',
                                                allowBlank: false,
                                                listeners:{
//                                                    change: function (field, newValue, oldValue) {
//                                                        field.setValue(newValue.toUpperCase());
//                                                    }
                                                }
                                        },
                                        {
                                                fieldLabel: translations.repPassProv,
                                                name: 'PASSWORD_VERIFIC',
                                                id:'portalPassProvVerf',
                                                afterLabelTextTpl: required,
                                                enforceMaxLength: true,
                                                //minLength: 13,
                                                maxLength: 50,
                                                inputType:'password',
                                                allowBlank: false,
                                                listeners:{
//                                                    change: function (field, newValue, oldValue) {
//                                                        field.setValue(newValue.toUpperCase());
//                                                    }
                                                }
                                        }



                    ], //fin if item
                    buttons: [
                        {
                            text: translations.btnGuardarReg,
                            id: 'guardaRegistro',
                            scope: this,
                            handler: function(btn) {
                                
                                formRegistro.setLoading('Validando...');
                                
                                
                                var pass = formRegistro.getForm().findField('portalPassProv').getValue();
                                var passVerf = formRegistro.getForm().findField('portalPassProvVerf').getValue();
                                var cuentaClabe = formRegistro.getForm().findField('portalClabeProv').getValue();
                                var tipoCuenta = formRegistro.getForm().findField('cboTipoCuentaProv').getValue();
                                var iban = formRegistro.getForm().findField('portalIBAN').getValue();
                                var swift = formRegistro.getForm().findField('portalSWIFT').getValue();
                                
                                
                             
                                
                               if (tipoCuenta  === 'NAC'){
                                   
                                   
                                   
                                   
                                    if(cuentaClabe.length < 18 || cuentaClabe.length > 18){

                                           Ext.Msg.alert('Error', 'La cuenta clabe es incorrecta.', function(btn,text){

                                                                    if(btn == 'ok'){

                                                                      formRegistro.setLoading(false);
                                                                  }


                                                                });



                                        return;



                                    }
                            }else{
                                
                                 
                                if(iban > 1){    
                                   if(iban.length > 34 || iban.length < 25){

                                           Ext.Msg.alert('Error', translations.ibaErrMgs, function(btn,text){

                                                                    if(btn == 'ok'){

                                                                      formRegistro.setLoading(false);
                                                                  }


                                                                });



                                        return;



                                    }
                                }
                                    
                                     if(Ext.isEmpty(swift)){

                                           Ext.Msg.alert('Error', translations.swiftErrMgs, function(btn,text){

                                                                    if(btn == 'ok'){

                                                                      formRegistro.setLoading(false);
                                                                  }


                                                                });



                                        return;



                                    }
                                    
                                    if(swift.length > 11 || swift.length < 8){

                                           Ext.Msg.alert('Error', translations.swiftErrLength, function(btn,text){

                                                                    if(btn == 'ok'){

                                                                      formRegistro.setLoading(false);
                                                                  }


                                                                });



                                        return;



                                    }
                                    
                                    
                                
                                
                                
                                
                            }
                            
                            
                               if (Ext.isEmpty(pass)){
                                    
                                     Ext.Msg.alert('Error', translations.passErr, function(btn,text){

                                                                if(btn == 'ok'){

                                                                  formRegistro.setLoading(false);
                                                              }

         
                                                            });
                                    
                                        
                                    
                                    return;
                                    
                                    
                                    
                                    
                                }
                                
                                if(pass!==passVerf){
                                    
                                     Ext.Msg.alert('Error', translations.passErr2, function(btn,text){

                                                                if(btn == 'ok'){

                                                                  formRegistro.setLoading(false);
                                                              }

         
                                                            });
                                    
                                        
                                    
                                    return;
                                    
                                }
                                
     
                                Ext.Ajax.request({
                                    url: 'process/data/verificaUsuarioPortal',
                                    method: 'GET',
                                    scope: this,
                                    params:{
                                     //   compania: 'T2O',
                                        usuarioPor:formRegistro.getForm().findField('portalCorreoProv').getValue()
                                    },
                                    callback: function(records, operation, success) {
                                        if (Ext.isEmpty(success.responseText))
                                            return;
                                        var val = Ext.decode(success.responseText);
                                        if (Ext.isEmpty(val))
                                            return;
                                        if (val.success) {
                                            var usuario = val.data[0].USUARIO;
                                            
                                            formRegistro.setLoading(false);
                                            
                                            if (!Ext.isEmpty(usuario)){
                                                
                                                Ext.Msg.alert('Error', translations.correoErr, function(btn,text){
                                                    
                                                	if(btn == 'ok'){
                                                            
                                                            
							}
						});
                                                
                                               
                                                
                                            }else{
                                                
                                                formRegistro.getForm().submit({
                                                    method:'POST',
                                                    waitTitle:'Please wait...',
                                                    waitMsg:'Registrando..,',
                                                    success:function(){
                                                            Ext.Msg.alert(translations.winRegistro, translations.successRegistro, function(btn,text){
                                                                    if(btn == 'ok'){

                                                                         formRegistro.up('window').close();
                                                                            //var redirect = '/Polizas3/facturasFolio';
                                                                            //window.location = redirect;	
                                                                    }
                                                            });
                                                    },
                                                    failure:function(response,a,b){

                                                         //  console.log(a.result.total);
                                                         //  console.log(a.result.msg);

                                                            Ext.Msg.alert('Error', translations.errorRegistro, function(btn,text){

                                                                if(btn == 'ok'){

                                                                  if (a.result.total === 3){

                                                                    //  var redirect = 'http://www.feraz.com.mx/';
                                                                    //	window.location = redirect;
                                                                  }
                                                              }

            //							if(btn == 'ok'){
            //                                                          
            //								var redirect = 'http://appferaz1.com/adaEmpres';
            //								window.location = redirect;	
            //							}
                                                            });
                                                            //login.getForm().reset();
                                                            //var txtUser=Ext.getCmp('txtUsername');
                                                            //txtUser.focus('',10);	
                                                    }
                                            });
                                                
                                            }


                                        } else if (!val.success) {
                                            
                                            formRegistro.setLoading(false);
                                            
                                                    formRegistro.getForm().submit({
                                                    method:'POST',
                                                    waitTitle:'Please wait...',
                                                    waitMsg:'Registrando..,',
                                                    success:function(){
                                                            Ext.Msg.alert(translations.winRegistro, translations.successRegistro, function(btn,text){
                                                                    if(btn == 'ok'){

                                                                         formRegistro.up('window').close();
                                                                            //var redirect = '/Polizas3/facturasFolio';
                                                                            //window.location = redirect;	
                                                                    }
                                                            });
                                                    },
                                                    failure:function(response,a,b){

                                                         //  console.log(a.result.total);
                                                         //  console.log(a.result.msg);

                                                            Ext.Msg.alert('Error', translations.errorRegistro, function(btn,text){

                                                                if(btn == 'ok'){

                                                                  if (a.result.total === 3){

                                                                    //  var redirect = 'http://www.feraz.com.mx/';
                                                                    //	window.location = redirect;
                                                                  }
                                                              }

            //							if(btn == 'ok'){
            //                                                          
            //								var redirect = 'http://appferaz1.com/adaEmpres';
            //								window.location = redirect;	
            //							}
                                                            });
                                                            //login.getForm().reset();
                                                            //var txtUser=Ext.getCmp('txtUsername');
                                                            //txtUser.focus('',10);	
                                                    }
                                            });
                                            
                                           // msgBoxErr('Compania', 'Error compañia no encontrada');
                                        }
                                    },
                                    timeout: 30000

                                });
                           
                                
                                
                            }
                        }
                    ]


                });
    

	
	
        
          
           createwindow.show();
                
        //container.show();
	
});


