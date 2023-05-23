Ext.define('AppPortalInsurgentes.view.FormErpFecomprobantes', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formerpfecomprobantes',
    itemId: 'formerpfecomprobantes',
    xtype: 'formerpfecomprobantes',
    bodyPadding: 5,
    width: 600,    
    autoScroll: true,
    defaultType: 'textfield',
    defaults: {
        anchor: '100%'
    },
    layout:'form',
    //url: 'CXP/saveOtrosCXP',
    initComponent: function () {
        var me = this;

			
				
        Ext.apply(me, {
            items: [
	{
	 xtype:'textfield',
	 fieldLabel: 'Compania',
	 name: 'COMPANIA',
	 id: 'txtCompaniaERP_FE_COMPROBANTES',
	 hidden:false,
	 allowBlank:false
	},
	{
	 xtype:'numberfield',
	 fieldLabel: 'Numero',
	 name: 'NUMERO',
	 id: 'txtNumeroERP_FE_COMPROBANTES',
	 allowDecimal: true,
	 forcePrecision: true, 
	 decimalPrecision: 2, 
	 decimalSeparator: '.', 
	 readOnly:false, 
	 hidden:false,
	 allowBlank:false
	 },
	{
	 xtype:'textfield',
	 fieldLabel: 'Folio',
	 name: 'FOLIO',
	 id: 'txtFolioERP_FE_COMPROBANTES',
	 hidden:false,
	 allowBlank:false
	},
	 {
	 xtype:'datefield',
	 fieldLabel: 'Fecha',
	 name: 'FECHA',
	 id: 'txtFechaERP_FE_COMPROBANTES',
	format: 'd/m/Y',
	 submitFormat: 'd/m/Y',
	 hidden:false,
	 allowBlank:false
	},
	{
	 xtype:'textfield',
	 fieldLabel: 'Serie',
	 name: 'SERIE',
	 id: 'txtSerieERP_FE_COMPROBANTES',
	 hidden:false,
	 allowBlank:false
	},
	{
	 xtype:'numberfield',
	 fieldLabel: 'Subtotal',
	 name: 'SUBTOTAL',
	 id: 'txtSubtotalERP_FE_COMPROBANTES',
	 allowDecimal: true,
	 forcePrecision: true, 
	 decimalPrecision: 2, 
	 decimalSeparator: '.', 
	 readOnly:false, 
	 hidden:false,
	 allowBlank:false
	 },
	{
	 xtype:'numberfield',
	 fieldLabel: 'Total',
	 name: 'TOTAL',
	 id: 'txtTotalERP_FE_COMPROBANTES',
	 allowDecimal: true,
	 forcePrecision: true, 
	 decimalPrecision: 2, 
	 decimalSeparator: '.', 
	 readOnly:false, 
	 hidden:false,
	 allowBlank:false
	 },
	{
	 xtype:'textfield',
	 fieldLabel: 'TipoCambio',
	 name: 'TIPO_CAMBIO',
	 id: 'txtTipoCambioERP_FE_COMPROBANTES',
	 hidden:false,
	 allowBlank:false
	},
	{
	 xtype:'textfield',
	 fieldLabel: 'TipoDecomprobante',
	 name: 'TIPO_DE_COMPROBANTE',
	 id: 'txtTipoDecomprobanteERP_FE_COMPROBANTES',
	 hidden:false,
	 allowBlank:false
	},
	{
	 xtype:'textfield',
	 fieldLabel: 'CondicionesDepago',
	 name: 'CONDICIONES_DE_PAGO',
	 id: 'txtCondicionesDepagoERP_FE_COMPROBANTES',
	 hidden:false,
	 allowBlank:false
	},
	{
	 xtype:'numberfield',
	 fieldLabel: 'Descuento',
	 name: 'DESCUENTO',
	 id: 'txtDescuentoERP_FE_COMPROBANTES',
	 allowDecimal: true,
	 forcePrecision: true, 
	 decimalPrecision: 2, 
	 decimalSeparator: '.', 
	 readOnly:false, 
	 hidden:false,
	 allowBlank:false
	 },
	{
	 xtype:'textfield',
	 fieldLabel: 'Moneda',
	 name: 'MONEDA',
	 id: 'txtMonedaERP_FE_COMPROBANTES',
	 hidden:false,
	 allowBlank:false
	},
	{
	 xtype:'textfield',
	 fieldLabel: 'MotivoDescuento',
	 name: 'MOTIVO_DESCUENTO',
	 id: 'txtMotivoDescuentoERP_FE_COMPROBANTES',
	 hidden:false,
	 allowBlank:false
	},
	{
	 xtype:'textfield',
	 fieldLabel: 'TipoPoliza',
	 name: 'TIPO_POLIZA',
	 id: 'txtTipoPolizaERP_FE_COMPROBANTES',
	 hidden:false,
	 allowBlank:false
	},
	{
	 xtype:'textfield',
	 fieldLabel: 'NumeroPol',
	 name: 'NUMERO_POL',
	 id: 'txtNumeroPolERP_FE_COMPROBANTES',
	 hidden:false,
	 allowBlank:false
	},
	 {
	 xtype:'datefield',
	 fieldLabel: 'FechaPol',
	 name: 'FECHA_POL',
	 id: 'txtFechaPolERP_FE_COMPROBANTES',
	format: 'd/m/Y',
	 submitFormat: 'd/m/Y',
	 hidden:false,
	 allowBlank:false
	},
	{
	 xtype:'textfield',
	 fieldLabel: 'Xml',
	 name: 'XML',
	 id: 'txtXmlERP_FE_COMPROBANTES',
	 hidden:false,
	 allowBlank:false
	},
	 {
	 xtype:'datefield',
	 fieldLabel: 'FechaCap',
	 name: 'FECHA_CAP',
	 id: 'txtFechaCapERP_FE_COMPROBANTES',
	format: 'd/m/Y',
	 submitFormat: 'd/m/Y',
	 hidden:false,
	 allowBlank:false
	},
	{
	 xtype:'textfield',
	 fieldLabel: 'Pdf',
	 name: 'PDF',
	 id: 'txtPdfERP_FE_COMPROBANTES',
	 hidden:false,
	 allowBlank:false
	},
	{
	 xtype:'textfield',
	 fieldLabel: 'DirPdf',
	 name: 'DIR_PDF',
	 id: 'txtDirPdfERP_FE_COMPROBANTES',
	 hidden:false,
	 allowBlank:false
	},
	{
	 xtype:'textfield',
	 fieldLabel: 'DirXml',
	 name: 'DIR_XML',
	 id: 'txtDirXmlERP_FE_COMPROBANTES',
	 hidden:false,
	 allowBlank:false
	},
	{
	 xtype:'textfield',
	 fieldLabel: 'Rfc',
	 name: 'RFC',
	 id: 'txtRfcERP_FE_COMPROBANTES',
	 hidden:false,
	 allowBlank:false
	},
	{
	 xtype:'textfield',
	 fieldLabel: 'Uuid',
	 name: 'UUID',
	 id: 'txtUuidERP_FE_COMPROBANTES',
	 hidden:false,
	 allowBlank:false
	},
	 {
	 xtype:'datefield',
	 fieldLabel: 'FechaVenccxp',
	 name: 'FECHA_VENC_CXP',
	 id: 'txtFechaVenccxpERP_FE_COMPROBANTES',
	format: 'd/m/Y',
	 submitFormat: 'd/m/Y',
	 hidden:false,
	 allowBlank:false
	},
	{
	 xtype:'textfield',
	 fieldLabel: 'MonedaPago',
	 name: 'MONEDA_PAGO',
	 id: 'txtMonedaPagoERP_FE_COMPROBANTES',
	 hidden:false,
	 allowBlank:false
	},
	{
	 xtype:'textfield',
	 fieldLabel: 'TotalLetra',
	 name: 'TOTAL_LETRA',
	 id: 'txtTotalLetraERP_FE_COMPROBANTES',
	 hidden:false,
	 allowBlank:false
	}	
], //fin if item
                    buttons: [
                        {
                            text: 'Guardar',
                            id: 'guardaErpFecomprobantes',
                            scope: this,
                            handler: function (btn) {
                                this.fireEvent("saveErpFecomprobantes", btn);
                            }
                        },
                        {
                            text: 'Cancelar',
                            id: 'cancelarCXPOtros',
                           scope: this,
		                    handler: function() {
		                        this.up('window').close();
		                    }
                        }
                    ]


        });
        this.callParent(arguments);
    },
    
    
    setDisbleKey: function(action) {
       // Ext.getCmp('cboFECHA').setDisabled(action);
       		Ext.getCmp('txtCompaniaERP_FE_COMPROBANTES').setDisabled(action);
		Ext.getCmp('txtNumeroERP_FE_COMPROBANTES').setDisabled(action);

    }





});
