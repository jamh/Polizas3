Ext.define('AppDashboard.view.WidAyuda.PanelVideos', {
    extend: 'Ext.panel.Panel',
//    requires: [
//        'Ext.toolbar.TextItem',
//        'Ext.view.View',
//        'Ext.ux.DataView.Animated'
//    ],
    layout: 'fit',
    xtype: 'panelvideos',
//    title: 'Videos Usuario',
//      requires: ['Ext.layout.container.Card'],

    initComponent: function() {

          var me = this;
        Ext.apply(me, {
//            border: false,
//            flex: 1,
//            id: 'test',
//
//            layout: 'card',

//            dockedItems: [
//                Ext.create('Books.view.Header', {
//                    html: 'Reviews'
//                })
//            ],

            items: [
                {
                    region: 'center',
                    xtype: 'dataview',
                    id: 'reviews',
                    border: false,
                    store:'StoreVideos',
                    cls: 'review-list',
                    autoScroll: true,
                    itemSelector: '.review',
                    listeners:{
                      'selectionchange':function(view,select){
                          me.fireEvent('selectAyuda',view,select);
//                          msgOut("Change");
                      }
                    },
                    tpl: new Ext.XTemplate(
                            '<tpl for=".">',
                          
                            '<div class="review {[xindex === 1 ? "first-review" : ""]}">',
                             ' <div class="title img">',
                           '<img width="185" height="100" src="{URL_IMAGEN}">',
                            '</div>',
                            '<div class="title">{NOMBRE} </div>',
                            '<div class="author">Creado en - {FECHA}</div>',
                            '<div class="comment">{DESCRIPCION}</div>',
                            '</div>',
                            '</tpl>',
                            {
                                stars: function(values) {
                                    var res = [],
                                            extension = Ext.isIE6 ? 'gif' : 'png',
                                            i = 0;

                                    //print out the stars for each of the ratings
                                    for (; i < values.rating; i++) {
                                        res.push('<img src="./resources/images/star.', extension, '" />');
                                    }

                                    //print out transparent stars for the rest (up to 5)
                                    while (i < 5) {
                                        res.push('<img src="./resources/images/star_no.', extension, '" />');
                                        i++;
                                    }

                                    return res.join('');
                                }
                            }
                    )
                

                }
            ]
        });

        this.callParent(arguments);
    }
});
