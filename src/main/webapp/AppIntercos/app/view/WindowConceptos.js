Ext.define('AppIntercos.view.WindowConceptos', {
    extend: 'Ext.window.Window',
    alias: 'widget.windowconceptos',
    title: 'Agregar Concepto',
    fieldLabel: 'Agregar Concepto',
     width: 440,
    height: 350,
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    
    
    initComponent: function() {
        
        var me = this;
        
        Ext.apply(me, {
        
        
            items : [
                Ext.widget('formconceptos')
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

