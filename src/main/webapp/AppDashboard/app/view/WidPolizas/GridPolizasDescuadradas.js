Ext.define('AppDashboard.view.WidPolizas.GridPolizasDescuadradas', {
    extend:'Ext.grid.Panel',
    alias: 'widget.gridpolizasdescuadradas',
    itemId:'gridpolizasdescuadradas',
    xtype: 'gridpolizasdescuadradas',
    store: 'StorePolizasDescuadradas',
//    title: 'Polizas Descuadradas',
 //   frame:true,        
//     flex: 1,
//    split: true,
//    collapsible: true,

    initComponent:function(){
       

        Ext.apply(this,{

            tbar:[
                 '->',
                
                {
                    iconCls: 'search-icon',
                    text: 'Ver Poliza',
                    itemId: 'btnVerPoliza',
                    id: 'btnVerPoliza',
                    name: 'btnVerPoliza',
                      scope: this,
                            handler: function(btn) {
                                this.fireEvent("imprimirDashPoliza", btn);
                     }

                }

            ],

            columns: [
                
               {
                    dataIndex: 'COMPANIA',
                    name:'COMPANIA',
                    id:'polCOMPANIA',
                    sortable: true,
                    hidden:true,
                    header: 'Compania',
                    flex: 1
                },
               {
                    dataIndex: 'FECHA',
                      name:'FECHA',
                      hidden:false,
                    id:'polFECHA',        
                    sortable: true,
                    header: 'Fecha',
                    flex: 1
                },
               {
                    dataIndex: 'NUMERO',
                     hidden:false,
                     name:'NUMERO',
                    id:'polNUMERO',
                    sortable: true,
                    header: 'Numero',
                    flex: 1
                },
               {
                    dataIndex: 'TIPO_POLIZA',
                      name:'TIPO_POLIZA',
                     hidden:false,
                    id:'polTIPO_POLIZA',
                    sortable: true,
                    header: 'Tipo Poliza',
                    flex: 1
                },
                                  
              {
                    dataIndex: 'CARGOS',
                    name:'CARGOS',
                    id:'polCARGOS',
                    sortable: true,
                    hidden:false,
                    header: 'Cargos',
                    align: 'right',
                    flex: 1,
                    renderer: this.money
                },
                {
                    dataIndex: 'ABONOS',
                    name:'ABONOS',
                    id:'polABONOS',
                    align: 'right',
                    sortable: true,
                    hidden:false,
                    header: 'Abonos',
                    flex: 1,
                    renderer: this.money
                }


            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store:'StorePolizasDescuadradas'
                })
            ]

        });


        this.callParent(arguments);
    },
     money: function(val) {
        if (val > 0) {
            return '<span style="color:green;font-weight: bold">' + formatCurrency(Math.round(val * 1000) / 1000) + '</span>';
        } else if (val < 0) {
            return '<span style="color:red;font-weight: bold">' + formatCurrency(Math.round(val * 1000) / 1000) + '</span>';
        }
        return val;
    }
    

 
});



