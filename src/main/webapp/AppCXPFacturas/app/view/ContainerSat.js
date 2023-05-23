Ext.define('AppCXPFacturas.view.ContainerSat', {
   extend: 'Ext.container.Container',
    alias: 'widget.containersat',
    itemId: 'containersat',
    xtype: 'containersat',
    title: 'Descarga SAT',
    
    //layout: 'border',
    
    initComponent: function() {
        

  
        Ext.apply(this, {
           
           items: [
               
                
                {
                   
                   
        

                    xtype: 'container',
                    
                    layout: {
                            type: 'vbox',
                            align: 'center',
                            pack: 'center'
                        },
                   
//                   flex: 1,
//                    layout: {
//                        align: 'stretch',
//                        type: 'vbox'
//                        
//                    },
                    items: [
//                    
//                         {
//                         xtype: 'container',
//                          style: 'background-color: #000000',  
//                          
//                         flex: 1
//                 
//                        
//                         } ,
//                
//                        {
//
//                            xtype: 'container',
//       
//                           flex: 2,
//                            layout: {
//                                align: 'stretch',
//                                type: 'hbox'
//
//                            },
//                            items: [
//
                            {
                              xtype: 'container',

                               flex: 1
                             } ,
                                 {

                                   xtype: 'container',

                                   flex: 1,
                                   layout: {
                                        align: 'stretch',
                                        type: 'hbox'

                                    },
                                   // layout:'fit',
                                    items: [
                                        {
//
                                        xtype: 'formsat'
//
                                     }
//
                                   ]

                             },
                             {
                              xtype: 'container',

                                   flex: 1
                             } 
//                            ]
//
//       
//                     },
//                     {
//                         xtype: 'container',
//                          style: 'background-color: #000000',       
//                         flex: 1
//                         
//                    } 
//       
                  ]

        
       }
       
    ]
                

      
        });
        this.callParent(arguments);
    }

});



