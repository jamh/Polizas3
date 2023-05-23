Ext.define('AppAyuda.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: [
        'StoreVideos'
    ],
    models: [
        'ModeloVideos'
    ],
    refs: [
    ],
    views: [
        'Main',
        'PanelVideos'
    ],
    init: function() {

        var me = this;
        me.control({
            panelvideos: {
                selectAyuda: function(view, model) {
                    me.muestraVideo(view, model);

                }
            }


        });
    },
    muestraVideo: function(view, model) {
//        msgOut(model[0].data.URL);
        Ext.create('Ext.window.Window', {
            title: model[0].data.NOMBRE,
            height: 500,
            width: 500,
//            minimizable: true,
//            maximizable : true,
            modal: true,
            layout: 'fit',
            items: {// Let's put an empty grid in just to illustrate fit layout
                xtype: 'container',
//                                cls: 'fondoPregunta',
                flex: 1,
                html: '<video id="example_video_1" class="video-js vjs-default-skin" controls preload="auto" width="489" height="450" poster="' + model[0].data.URL_IMAGEN + '" ><source src="' + model[0].data.URL + '" type="video/mp4" /></video>'

            }
        }).show();


    }


});
