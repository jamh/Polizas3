Ext.define('AppPortalFolio.view.WindowDatosBancExt', {
	extend: 'Ext.window.Window',
	alias: 'widget.windowdatosbancext',
	title: 'Agregar',
	width: 440,
	height: 250,
	layout: 'fit',
	autoShow: true,
	modal: true,

	initComponent: function() {

		var me = this;

		Ext.apply(me, {

			items : [
				Ext.widget('formdatosbancext')
			]
		});
		this.callParent(arguments);

	}
});