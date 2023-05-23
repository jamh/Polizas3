Ext.define('AppProveedores.view.WindowProveedores', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowproveedores',
    title: 'Crear Proveedores',
    //fieldLabel: 'Fecha Poliza',
     width: 600,
    height: 500,
    minHeight: 200,
     maximizable : true,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    initComponent: function() {
        
        var me = this;
        
        Ext.apply(me, {
        
        
            items : [
                Ext.widget('formproveedores')
            ],
             listeners:{
                            beforeclose:function(win) {
                                
                                //this.fireEvent("recargaProveedor");
                                
                          

                            }
                        }
        
         });
        this.callParent(arguments);
        
          

    }
    
});




