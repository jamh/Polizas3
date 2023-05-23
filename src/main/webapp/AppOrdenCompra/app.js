//
//Ext.Ajax.request({
//    url: 'inicio/sesion',
//    params: {
//        compania: ppCompa,
//        user:ppUsr
//    },
//    success: function(response){
//        var text = response.responseText;
//        
//    },
//    callback:function(a,b,c){
//       
//       var data = Ext.decode(c.responseText);
//       
//       if(data.success){
//         
           
                Ext.tip.QuickTipManager.init();
                Ext.Loader.setConfig({
                              enabled: true,
                              paths   : {  
                                  AppOrdenCompra: "AppOrdenCompra/app" 

                              }
                          });


                Ext.application({
                    appFolder: 'AppOrdenCompra/app',
                    name: 'AppOrdenCompra',
                  //  extend: 'AppCXPFacturas.Application',
                    autoCreateViewport: true,
                    controllers: ['Main'],
                    splashscreen: {},
                    launch: function() {

                        var task = new Ext.util.DelayedTask(function() {
                            splashscreen.fadeOut({
                                duration: 500,
                                remove: true

                            });
                            splashscreen.next().fadeOut({
                                duration: 500,
                                remove: true,
                                listeners: {
                                    afteranimate: function(el, startTime, eOpts) {
                                        // msgOut('launch'); // #1
                                        // Ext.widget('app-main'); 
                                    }
                                }
                            });
                            //msgOut('launch'); 
                        });
                        task.delay(1000);


                    },
                    init: function() {
                        splashscreen = Ext.getBody().mask('Iniciando...!', 'splashscreen');

                        splashscreen.addCls('splashscreen');
                        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
                            cls: 'x-splash-icon'
                        });
                    }

                });
//
//   }else{
//           msgBoxErr('Error Acceso','Error de acceso al sistema');
//       }
//    }
//});
//
//
