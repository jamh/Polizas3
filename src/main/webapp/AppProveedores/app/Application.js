Ext.define('AppProveedores.Application', {
    name: 'AppProveedores',
    extend: 'Ext.app.Application',
    appFolder: 'AppProveedores/app',
    
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
