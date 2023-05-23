
           Ext.tip.QuickTipManager.init();
          Ext.Loader.setConfig({
                enabled: true,
                paths   : {  
                    AppFEPolizas: "AppFEPolizas/app" 
                   
                }
            });
            
            Ext.Loader.setConfig({
                              enabled: true,
                              paths   : {  
                                  AppTransaccionSAT: "AppTransaccionSAT/app" 

                              }
                          });

             Ext.application({

                    appFolder:'AppPolizas3/app',
                    name: 'AppPolizas3',
                    autoCreateViewport: true,
                    controllers: [ 'Main'],
                    splashscreen: {},
                    launch: function() {
                       Ext.grid.RowEditor.prototype.cancelBtnText = "Cancelar";
                       Ext.grid.RowEditor.prototype.saveBtnText = "Actualizar";
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
                                    }
                                }
                            });
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
    