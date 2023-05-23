// JavaScript Document
Ext.onReady(function(){
	Ext.QuickTips.init();
        
        
        
        var storeCompaniasUni= Ext.create('Ext.data.Store', {
            
              fields: [
                    'COMPANIA', 'NOMBRE'
                   ],

                   proxy:{
                       url:'process/data/BuscaCompaniaPortal',
                       type:'ajax',
                       reader:{
                           type:'json',
                           root:'data',
                           totalProperty:'total'
                       }
                   }

               });

     
   
	var login = new Ext.FormPanel({
		labelWidth:90,
		url:'/Polizas3/por/login4',
		method:'POST',
		width:300,
		autoHeight:true,
		bodyStyle:'padding: 10px 10px 15px 15px',
		defaultType:'textfield',
		monitorValid:true,
		items:[{
			fieldLabel:'Usuario',
			id:'txtUsername',
                        name:'usuario',
			allowBlank:false
		},{
			fieldLabel:'Password',
			id:'txtPassword',
                        name:'password',
			allowBlank:false,
			inputType:'password'	
		},
          
                {
                    xtype: 'combobox',
                    fieldLabel: 'Compania',
                    name: 'compania',
                    id: 'cboCompaniaPortal',
                    minChars: 3,
                    allowBlank: false,
                    readOnly: false,
                    hidden: false,
                    typeAhead: false,
                    validateOnChange: true,
                    hideTrigger: false,
                    displayField: 'NOMBRE',
                    valueField: 'COMPANIA',
                  
                    store:storeCompaniasUni,
                     listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro la Compania.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{COMPANIA}</span><h3>{NOMBRE}</h3>';
                            }
                        },
                    listeners: {
                        'select': function(valor) {
                            
                           
                            
                           //  Ext.getCmp('cboPeriodo').clearValue();
                           // Ext.getCmp('txtTIPO_CAMBIO').setReadOnly(false);
                           //  Ext.getCmp('cboFECHA').setVisible(true);

                        }
                    }
                }
            
                ],
		buttons:[
                   {
			text:'Manual',
			//type:'submit',
			name:'manual',
			handler:function(btn){
                            
                            
                                var string = Ext.String.format(
                                        //'<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
                                        'http://appferaz1.com/empres/media/ManualFeraz.docx'
                                     

                                        );
                                 window.open(string);

                                return string;
                            
			}
                        
                        
                        
                        
                        
		},
                '->',
                 {
			text:'Entrar',
			type:'submit',
			name:'signin',
			handler:function(btn){
                            console.log('compania');
                             console.log(Ext.getCmp('cboCompaniaPortal').getValue());
                            
                            if(Ext.isEmpty(Ext.getCmp('cboCompaniaPortal').getValue())){
                                
                                Ext.Msg.alert('Error', 'Debe seleccionar una Empresa', function(btn,text){
							if(btn == 'ok'){
							
							}
						});
                                
                               return;
                            }
                            
				login.getForm().submit({
					method:'POST',
					waitTitle:'Please wait...',
					waitMsg:'Accesando..,',
					success:function(){
						Ext.Msg.alert('Acceso', 'Acceso correcto!', function(btn,text){
							if(btn == 'ok'){
								var redirect = '/Polizas3/facturasUni';
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
		title:'Acceso Portal Proveedores',
                x:500,
                y:250,
		widht:315,
		height:190,
		closable:false,
		items:
       
                   login.show()
               //    container.show()
                
         
	});
	
	createwindow.show();
        //container.show();
	
});


