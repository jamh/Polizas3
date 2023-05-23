Ext.define('AppCuentas2.Application', {
    name: 'AppCuentas2',
    extend: 'Ext.app.Application',
    appFolder: 'AppCuentas2/app',
    
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
