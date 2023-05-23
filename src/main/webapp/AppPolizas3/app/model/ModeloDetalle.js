Ext.define('AppPolizas3.model.ModeloDetalle', {
    extend: 'Ext.data.Model',

    fields:[
        
        'COMPANIA',
        'TIPO_POLIZA',
        'FECHA',
        'NUMERO',
        'NUM_DIOT',
        'SEC',
        'INDICADOR',
        'FECHA_CAP',
        'ESTATUS',
        'HORA',
        'CTO_TRABAJO',
        'ID',
        'CC',
        'EXISTE_CUENTA',
        'CUENTA_ALIAS',
        'CT' , 
        {
            name:'CUENTA', 
            type: 'string'
        },
        {
            name:'DESCRIPCION',
            type:'string'
        },
        'REFERENCIA',
        'CHEQUE',
        'RFC',
        'CARGOS',
        'ABONOS',
        'ABONOS_BASE',
        'CARGOS_BASE',
        'NOMCUENTA',
        'REFERENCIA2',
        'FECHA_DOCUMENTO',
        'id',
        'ID_TRANSACCION'
    ]

});