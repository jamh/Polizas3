Ext.define('AppCuentas2.model.ModeloCuentaPadre', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'CUENTA_ALIAS',
            mapping: 'CUENTA_ALIAS'
        },
        {
            name: 'CUENTA',
            mapping: 'CUENTA'
        },
        {
            name: 'NOMBRE',
            mapping: 'NOMBRE'
        },
        {
            name: 'AFECTABLE',
            mapping: 'AFECTABLE'
        },
        {
            name: 'CIERRE',
            mapping: 'CIERRE'
        },
        {
            name: 'ESTATUS',
            mapping: 'ESTATUS'
        },
        {
            name: 'NATURALEZA',
            mapping: 'NATURALEZA'
        },
        {
            name: 'TIPO',
            mapping: 'TIPO'
        },
        {
            name: 'MAYOR',
            mapping: 'MAYOR'
        }
    ]

});
