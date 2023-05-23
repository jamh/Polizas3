// JavaScript Document
Ext.onReady(function(){
	Ext.QuickTips.init();
        
        

     
   
	var login = new Ext.FormPanel({
		labelWidth:90,
		url:'/Polizas3/por/login',
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
		}],
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
                            
                            // console.log('saludos');
                            
				login.getForm().submit({
					method:'POST',
					waitTitle:'Please wait...',
					waitMsg:'Accesando..,',
					success:function(){
						Ext.Msg.alert('Acceso', 'Acceso correcto!', function(btn,text){
							if(btn == 'ok'){
								var redirect = '/Polizas3/facturas';
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
                x:750,
                y:250,
		widht:315,
		height:160,
		closable:false,
		items:
       
                   login.show()
               //    container.show()
                
         
	});
	
	createwindow.show();
        //container.show();
	
});


