Ext.define('AppTransaccionSAT.model.ModeloCFDI', {
    extend: 'Ext.data.Model',

    fields: [
             'UUID', 
             'TOTAL', 
             'TIPO_CAMBIO', 
             'MONEDA',
             'COUNT_RFC_E',
             'COUNT_RFC_R',
             'RFC_EMISOR',
             'RFC_RECEPTOR',
             'NOMBRE_EMISOR',
             'FOLIO'
             

            ]

});

