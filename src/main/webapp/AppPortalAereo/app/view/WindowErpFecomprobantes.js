Ext.define('AppPortalAereo.view.WindowErpFecomprobantes', {
	extend: 'Ext.window.Window',
	alias: 'widget.windowerpfecomprobantes',
	title: 'Agregar',
	width: 440,
	height: 350,
	layout: 'fit',
	autoShow: true,
	modal: true,

	initComponent: function() {

		var me = this;

		Ext.apply(me, {

			items : [
				Ext.widget('formerpfecomprobantes')
			]
		});
		this.callParent(arguments);

	}
});