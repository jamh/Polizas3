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
                                  AppPortalAereo: "AppPortalAereo/app" 

                              }
                          });


                Ext.application({
                    appFolder: 'AppPortalAereo/app',
                    name: 'AppPortalAereo',
                  //  extend: 'AppCXPFacturas.Application',
                    autoCreateViewport: true,
                    controllers: ['Main'],
                 
                });
//
//   }else{
//           msgBoxErr('Error Acceso','Error de acceso al sistema');
//       }
//    }
//});
//
//
