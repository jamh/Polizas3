Ext.define('AppClientes.Application', {
    name: 'AppClientes',
    extend: 'Ext.app.Application',
    appFolder: 'AppClientes/app',
    
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
