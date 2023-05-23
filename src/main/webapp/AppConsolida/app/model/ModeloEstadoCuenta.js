Ext.define('AppConsolida.model.ModeloEstadoCuenta', {
    extend: 'Ext.data.Model',
    fields: [
        'COMPANIA',
        'SEC',
        'ARCHIVO',
        {
            name: 'FECHA',
            mapping: 'FECHA_OPERACION'
        },
        {
            name: 'REFERENCIA',
            mapping: 'REFERENCIA_AMPLIADA'
        },
        'SALDO',
        'CARGOS',
        'ABONOS',
        'ESTATUS'
    ]


});

