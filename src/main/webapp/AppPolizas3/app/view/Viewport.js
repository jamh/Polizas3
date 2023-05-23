Ext.Loader.setPath('Ext.ux', 'resources/js/ux');
Ext.require([

    'Ext.ux.grid.FiltersFeature'

]);

Ext.define('AppPolizas3.view.Viewport', {
    extend: 'Ext.container.Viewport',
    layout: 'border',
    items:[
        
        {
            xtype:'pespanel' 
        }
        ,
        {
            xtype:'panelsur'
        },
        {
            xtype:'menugeneral'
        }

    ]//,

//    initComponent: function() {
////        var myMask = new Ext.LoadMask(Ext.getBody(),
////        {
////            msg:"Iniciando..."
////        });
////              
////         myMask.show();
////        
////        this.on('afterrender',function(el,el){
////            myMask.hide();
////        },this);
////
//        this.callParent(arguments);
//    }

});