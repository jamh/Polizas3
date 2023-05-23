Ext.define('AppPortal.view.FormDatosBancarios', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formdatosbancarios',
    itemId: 'formdatosbancarios',
    xtype: 'formdatosbancarios',
    bodyPadding: 5,
    width: 600,    
    autoScroll: true,
    defaultType: 'textfield',
    defaults: {
        anchor: '100%'
    },
    layout:'form',
    url: 'CrearProveedor/actDatosBan',
    initComponent: function () {
        var me = this;

       var storeBancosSat = Ext.create('AppPortal.store.StoreBanco');
       var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
			
				
        Ext.apply(me, {
            items: [
	{
	 xtype:'textfield',
	 fieldLabel: 'Cuenta Clabe',
	 name: 'CTA_CLABE',
	 id: 'txtCTAclabe',
         afterLabelTextTpl: required,
	 hidden:false,
	 allowBlank:false,
         maxLength: 18,
         enforceMaxLength: true,
         maskRe: /[0-9:]/,
         regex: /[0-9]+(:[0-9]+)?/
	},
        {
	 xtype:'textfield',
	 fieldLabel: 'Numero de Cuentas',
	 name: 'CTA_NUM',
         afterLabelTextTpl: required,
	 id: 'txtCTAnum',
	 hidden:false,
	 allowBlank:false,
         //maxLength: 18,
         //enforceMaxLength: true,
         maskRe: /[0-9:]/,
         regex: /[0-9]+(:[0-9]+)?/
	},
        {
         xtype: 'combobox',
         fieldLabel:'Banco',
         name: 'BANCO',
         afterLabelTextTpl: required,
         id: 'cboBANCO',
         store: storeBancosSat,
         minChars: 3,
         displayField: 'NOMBRE1',
         valueField: 'CLAVE',
         typeAhead: false,
         validateOnChange: true,
         allowBlank: false,
         hideTrigger: false,
         listConfig: {
                loadingText: 'Buscando...',
                emptyText: 'No se encontro el banco.',
                getInnerTpl: function() {
                       return '<span style="color:green;font-weight: bold">{CLAVE}</span><h3>{NOMBRE}</h3>';
                }
               },
             listeners: {
                       scope: this,
                          select: function(value) {

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
                            id: 'guardaDatosBanc',
                            scope: this,
                            handler: function (btn) {
                                this.fireEvent("saveDatBan", btn);
                            }
                        },
                        {
                            text: 'Cancelar',
                            id: 'cancelarDatosBan',
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
