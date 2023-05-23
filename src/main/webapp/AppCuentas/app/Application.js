Ext.define('AppCuentas.Application', {
    name: 'AppCuentas',
    extend: 'Ext.app.Application',
    appFolder: 'AppCuentas/app',
    
    views: [
        'Main',
        'FormArchivos',
        'GridArchivos',
        'WindowArchivos'
//        ,
//        'Viewport'
    ],
    

    controllers: [
        'Main'
    ],

    stores: [
        'StoreArchivos'
    ],
    
    models:[
        'ModeloArchivos'
    ]
});
