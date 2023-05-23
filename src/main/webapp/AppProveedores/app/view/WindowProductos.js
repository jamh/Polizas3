Ext.define('AppProveedores.view.WindowProductos', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowproductos',
    title: 'Agregar Producto',
    fieldLabel: 'Agregar Producto',
     width: 440,
    height: 350,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    
    
    initComponent: function() {
        
        var me = this;
        
        Ext.apply(me, {
        
        
            items : [
                Ext.widget('formproductos')
            ],
             listeners:{
                            beforeclose:function(win) {
                                
                                this.fireEvent("recargaGridConceptos");
                                
                          

                            }
                        }
        
         });
        this.callParent(arguments);
        
          

    }
      
});

