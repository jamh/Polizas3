
Ext.define('AppPortalAereo.model.ModelErpFecomprobantes', {
    extend: 'Ext.data.Model',
    fields: [
	{
            name: 'COMPANIA',
            mapping: 'COMPANIA'
	},
        {
            name: 'DESCRIPCION_CANCELACION',
            mapping: 'DESCRIPCION_CANCELACION'
	},
        {
            name: 'FECHA_PAGO_CXP_FE',
            mapping: 'FECHA_PAGO_CXP_FE'
	},
        {
            name: 'DESCRIPCION_PAGOS',
            mapping: 'DESCRIPCION_PAGOS'
	},
	{
            name: 'NUMERO',
            mapping: 'NUMERO'
	},
	{
            name: 'FOLIO',
            mapping: 'FOLIO'
	},
	{
            name: 'FECHA',
            mapping: 'FECHA'
	},
	{
            name: 'SERIE',
            mapping: 'SERIE'
	},
	{
            name: 'SUBTOTAL',
            mapping: 'SUBTOTAL'
	},
	{
            name: 'TOTAL',
            mapping: 'TOTAL'
	},
	{
            name: 'TIPO_CAMBIO',
            mapping: 'TIPO_CAMBIO'
	},
	{
            name: 'TIPO_DE_COMPROBANTE',
            mapping: 'TIPO_DE_COMPROBANTE'
	},
	{
            name: 'CONDICIONES_DE_PAGO',
            mapping: 'CONDICIONES_DE_PAGO'
	},
	{
            name: 'DESCUENTO',
            mapping: 'DESCUENTO'
	},
	{
            name: 'MONEDA',
            mapping: 'MONEDA'
	},
	{
            name: 'MOTIVO_DESCUENTO',
            mapping: 'MOTIVO_DESCUENTO'
	},
	{
            name: 'TIPO_POLIZA',
            mapping: 'TIPO_POLIZA'
	},
	{
            name: 'NUMERO_POL',
            mapping: 'NUMERO_POL'
	},
	{
            name: 'FECHA_POL',
            mapping: 'FECHA_POL'
	},
	{
            name: 'XML',
            mapping: 'XML'
	},
	{
            name: 'FECHA_CAP',
            mapping: 'FECHA_CAP'
	},
	{
            name: 'PDF',
            mapping: 'PDF'
	},
	{
            name: 'DIR_PDF',
            mapping: 'DIR_PDF'
	},
	{
            name: 'DIR_XML',
            mapping: 'DIR_XML'
	},
	{
            name: 'RFC',
            mapping: 'RFC'
	},
	{
            name: 'UUID',
            mapping: 'UUID'
	},
	{
            name: 'FECHA_VENC_CXP',
            mapping: 'FECHA_VENC_CXP'
	},
	{
            name: 'MONEDA_PAGO',
            mapping: 'MONEDA_PAGO'
	},
	{
            name: 'TOTAL_LETRA',
            mapping: 'TOTAL_LETRA'
	},
        {
            name:'ESTATUS_CXP',
            mapping: 'ESTATUS_CXP'
        },
        {
            name:'RFC_EMPRESA',
            mapping: 'RFC_EMPRESA'
        },
        {
            name:'BANCO',
            mapping: 'BANCO'
        },
        {
            name:'CUENTA_CLABE',
            mapping: 'CUENTA_CLABE'
        },
        {
            name:'NUMERO_CUENTA',
            mapping: 'NUMERO_CUENTA'
        },
         {
            name:'RAZON_SOCIAL',
            mapping: 'RAZON_SOCIAL'
        }
        
        
]   

});