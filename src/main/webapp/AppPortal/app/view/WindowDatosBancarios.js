Ext.define('AppPortal.view.WindowDatosBancarios', {
	extend: 'Ext.window.Window',
	alias: 'widget.windowdatosbancarios',
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
				Ext.widget('formdatosbancarios')
			]
		});
		this.callParent(arguments);

	}
});