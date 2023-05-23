Ext.define('AppPortalInsurgentes.view.Viewport', {
	extend: 'Ext.container.Viewport',

	layout:'fit',

	items: [
		{
			xtype: 'panel',
		layout:'fit',

			items:[
			{
				xtype: 'app-main',
				title:'Usuarios'
			}
			]
		}
	]
});