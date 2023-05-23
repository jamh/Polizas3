Ext.define('AppPortalAereo.view.FormDatosBancExt', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formdatosbancext',
    itemId: 'formdatosbancext',
    xtype: 'formdatosbancext',
    bodyPadding: 5,
    width: 600,    
    autoScroll: true,
    defaultType: 'textfield',
    defaults: {
        anchor: '100%'
    },
    layout:'form',
    url: 'CrearProveedor/actDatosBanExt',
    initComponent: function () {
        var me = this;

      // var storeBancosSat = Ext.create('AppPortalFolio.store.StoreBanco');
       var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
			
				
        Ext.apply(me, {
            items: [
	
        
         {
                                                    fieldLabel:"IBAN",
                                                            enforceMaxLength: true,
                                                            maxLength: 30,
                                                            afterLabelTextTpl: required,
                                                            hidden:false,
                                                            allowBlank: false,
                                                            name: 'IBAN',
                                                            id:'portalFolIBAN',
                                                            listeners:{
                                                            change: function (field, newValue, oldValue) {
                                                                field.setValue(newValue.toUpperCase());
                                                            }
                                                            }
                                                },
                                                {
                                                    fieldLabel:"SWIFT",
                                                            hidden:false,
                                                            allowBlank: false,
                                                            enforceMaxLength: true,
                                                            afterLabelTextTpl: required,
                                                            maxLength: 11,
                                                            name: 'SWIFT',
                                                            id:'portalFolSWIFT',
                                                            listeners:{
                                                            change: function (field, newValue, oldValue) {
                                                                field.setValue(newValue.toUpperCase());
                                                            }
                                                            }
                                                }
      
        
//	{
//	 xtype:'numberfield',
//	 fieldLabel: 'Cuenta Clabe',
//	 name: 'CTA_CLABE',
//	 id: 'txtCTAclabe',
//	 allowDecimal: false,
//	 forcePrecision: true, 
//	 readOnly:false, 
//	 hidden:false,
//	 allowBlank:false
//	 }//,
//	{
//	 xtype:'textfield',
//	 fieldLabel: 'Folio',
//	 name: 'FOLIO',
//	 id: 'txtFolioERP_FE_COMPROBANTES',
//	 hidden:false,
//	 allowBlank:false
//	}
	 
], //fin if item
                    buttons: [
                        {
                            text: 'Guardar',
                            id: 'guardaDatosBancExt',
                            scope: this,
                            handler: function (btn) {
                                this.fireEvent("saveDatBanExt", btn);
                            }
                        },
                        {
                            text: 'Cancelar',
                            id: 'cancelarDatosBanExt',
                           scope: this,
		                    handler: function() {
		                        this.up('window').close();
		                    }
                        }
                    ]


        });
        this.callParent(arguments);
    }
   





});
