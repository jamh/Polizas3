Ext.define('AppTransaccionSAT.view.GridTransaccion', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridtransaccion',
    itemId: 'gridtransaccion',
    xtype: 'gridtransaccion',
    store: 'StoreTransaccion',
    autoScroll: true,
    flex:1,
    //height:370,
    
    initComponent: function() {
        var me = this;
        
         var encode = true;
        var local = false;

        var filters = {
            ftype: 'filters',
            encode: encode,
            local: local,
            filters: [{
                    type: 'boolean',
                    dataIndex: 'visible'
                }]
        };
        
         var cellEditing2 = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        });
     
        Ext.apply(me, {
             features: [
               filters
            ],
            plugins: [
                cellEditing2
            ],
           
         
            tbar: [

                
                 {
                            iconCls: 'clean-filter-icon',
                            text: 'Limpiar Filtros',
                            handler: function(btn) {
                                // msgOut('Excel');
                                me.fireEvent("cleanFiltersTr", btn);
                            }
                  },

                 
                '->',
                 
                        {
                    iconCls: 'icon-relacion',
                    text: 'Relacionar con Poliza',
                    itemId: 'btnrelacionarDetPol',
                    id: 'btnrelacionarDetPol',
                    name: 'btnrelacionarDetPol',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("relacionarDetPol", btn);
                    }

                },
                         {
                    iconCls: 'icon-quitarrelacion',
                    text: 'Quitar relacion',
                    itemId: 'btnquitarRelacionarDetPol',
                    id: 'btnquitarRelacionarDetPol',
                    name: 'btnquitarRelacionarDetPol',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("quitarRelacionarDetPol", btn);
                    }

                },
                {
                    iconCls: 'add-icon',
                    text: 'Agregar Transaccion',
                    itemId: 'btnAddTransaccion',
                    id: 'btnAddTransaccion',
                    name: 'btnAddTransaccion',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("addTransaccion", btn);
                    }

                },
                
                {
                    iconCls: 'delete-icon',
                    text: 'Quitar Transaccion',
                    itemId: 'btnQuitarTransaccion',
                    id: 'btnQuitarTransaccion',
                    name: 'btnQuitarTransaccion',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("borrarTransaccion", btn);
                    }

                }
               
               

            ],
            columns: [
                {
                    dataIndex: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'trCOMPANIA',
                    sortable: true,
                    hidden: true,
                    header: 'compania',
                    width: 100
                },
                        
              {
                    dataIndex: 'ID',
                    name: 'ID',
                    id: 'trID',
                    sortable: true,
                    hidden: false,
                    filterable: true,
                    filter: {
                        type: 'numeric'
                    },
                    header: 'id',
                    width: 100,
                        renderer: function(val, meta, record) {
    
                        var idTransaccion = record.data.ID_TRANSACCION;
                        
                        
                            
                             if (!Ext.isEmpty(idTransaccion)) {
                                 
                                // return '<span style="color:orange;font-weight: bold">'+val+'</span>';
                                 meta.tdAttr = 'style="background-color:#8181F7;color:black;"';
                                // return '<span style="color:red;font-weight: bold">' + val + '</span>';;
                                 return val;
                             }else{
                            
                          
                                return val;
                             }
                        }
                },
                 {
                    dataIndex: 'TIPO',
                    name: 'TIPO',
                    id: 'trTIPO',
                    sortable: true,
                    hidden: false,
                    filterable: true,
                    
                    header: 'Tipo',
                    width: 100,
                         renderer: function(val, meta, record) {
    
                        var idTransaccion = record.data.ID_TRANSACCION;
                        
                        
                            
                             if (!Ext.isEmpty(idTransaccion)) {
                                 
                                // return '<span style="color:orange;font-weight: bold">'+val+'</span>';
                                 meta.tdAttr = 'style="background-color:#8181F7;color:black;"';
                                // return '<span style="color:red;font-weight: bold">' + val + '</span>';;
                                 return val;
                             }else{
                            
                          
                                return val;
                             }
                        }
                },
                 {
                    dataIndex: 'FOLIO_CFDI',
                    name: 'FOLIO_CFDI',
                    id: 'trFOLIO_CFDI',
                    sortable: true,
                    filterable: true,
                    hidden: false,
                    header: 'Folio CFDI',
                    width: 100
                },
                 {
                    dataIndex: 'FECHA_CFDI',
                    name: 'FECHA_CFDI',
                    id: 'trFECHA_CFDI',
                    filterable: true,
                    sortable: true,
                    hidden: false,
                    header: 'Fecha CFDI',
                    width: 100
                },
                 {
                    dataIndex: 'EMISOR_CFDI',
                    name: 'EMISOR_CFDI',
                    id: 'trEMISOR_CFDI',
                    sortable: true,
                    filterable: true,
                    hidden: false,
                    header: 'Nombre Emisor',
                    width: 100
                },
               
                {
                    dataIndex: 'UUID_CFDI',
                    name: 'UUID_CFDI',
                    id: 'trUUID_CFDI',
                    sortable: true,
                    
                    hidden: false,
                    header: 'UUID',
                    filterable: true,
                    
                    width: 100
                },
                {
                    dataIndex: 'RFC',
                    name: 'RFC',
                    id: 'trRFC',
                    filterable: true,
                  
                    sortable: true,
                    hidden: false,
                    header: 'Rfc',
                    width: 100
                },
                
                {
                    dataIndex: 'CFD_CBB_SERIE',
                    name: 'CFD_CBB_SERIE',
                    id: 'trCFD_CBB_SERIE',
                    sortable: true,
                    hidden: false,
                    header: 'CFD_CBB_SERIE',
                    width: 100
                },
                {
                    dataIndex: 'CFD_CBB_NUMFOL',
                    name: 'CFD_CBB_NUMFOL',
                    id: 'trCFD_CBB_NUMFOL',
                    sortable: true,
                    hidden: false,
                    header: 'CFD_CBB_NUMFOL',
                    width: 100
                },
                {
                    dataIndex: 'NUM_FACT_EXT',
                    name: 'NUM_FACT_EXT',
                    id: 'trNUM_FACT_EXT',
                    sortable: true,
                    hidden: false,
                    header: 'NUM_FACT_EXT',
                    width: 100
                },
               {
                    dataIndex: 'TAX_ID',
                    name: 'TAX_ID',
                    id: 'trTAX_ID',
                    sortable: true,
                    hidden: false,
                    header: 'TAX_ID',
                    width: 100
                },
                {
                    dataIndex: 'NUM',
                    name: 'NUM',
                    id: 'trNUM',
                    sortable: true,
                    hidden: false,
                    header: 'NUM',
                    width: 100
                },
                {
                    dataIndex: 'BAN_EMIS_NAL',
                    name: 'BAN_EMIS_NAL',
                    id: 'trBAN_EMIS_NAL',
                    sortable: true,
                    hidden: true,
                    header: 'BAN_EMIS_NAL',
                    width: 100
                },
                        {
                    dataIndex: 'NOMBRE_BAN_EMIS_NAL',
                    name: 'NOMBRE_BAN_EMIS_NAL',
                    id: 'trNOMBRE_BAN_EMIS_NAL',
                    sortable: true,
                    hidden: false,
                    header: 'BAN_EMIS_NAL',
                    width: 100
                },
                {
                    dataIndex: 'BAN_EMIS_EXT',
                    name: 'BAN_EMIS_EXT',
                    id: 'trBAN_EMIS_EXT',
                    sortable: true,
                    hidden: false,
                    header: 'BAN_EMIS_EXT',
                    width: 100
                },
                {
                    dataIndex: 'FECHA',
                    name: 'FECHA',
                    id: 'trFECHA',
                    sortable: true,
                    hidden: false,
                    header: 'FECHA',
                    width: 100
                },
                {
                    dataIndex: 'BENEF',
                    name: 'BENEF',
                    id: 'trBENEF',
                    sortable: true,
                    hidden: false,
                    header: 'BENEF',
                    width: 100
                },
                {
                    dataIndex: 'CTA_ORI',
                    name: 'CTA_ORI',
                    id: 'trCTA_ORI',
                    sortable: true,
                    hidden: false,
                    header: 'CTA_ORI',
                    width: 100
                },
                 {
                    dataIndex: 'BANCO_ORI_NAL',
                    name: 'BANCO_ORI_NAL',
                    id: 'trBANCO_ORI_NAL',
                    sortable: true,
                    hidden: true,
                    header: 'BANCO_ORI_NAL',
                    width: 100
                },
                        {
                    dataIndex: 'NOMBRE_BANCO_ORI_NAL',
                    name: 'NOMBRE_BANCO_ORI_NAL',
                    id: 'trNOMBRE_BANCO_ORI_NAL',
                    sortable: true,
                    hidden: false,
                    header: 'BANCO_ORI_NAL',
                    width: 100
                },
                {
                    dataIndex: 'BANCO_ORI_EXT',
                    name: 'BANCO_ORI_EXT',
                    id: 'trBANCO_ORI_EXT',
                    sortable: true,
                    hidden: false,
                    header: 'BANCO_ORI_EXT',
                    width: 100
                },
                {
                    dataIndex: 'CTA_DEST',
                    name: 'CTA_DEST',
                    id: 'trCTA_DEST',
                    sortable: true,
                    hidden: false,
                    header: 'CTA_DEST',
                    width: 100
                },
                {
                    dataIndex: 'BANCO_DEST_NAL',
                    name: 'BANCO_DEST_NAL',
                    id: 'trBANCO_DEST_NAL',
                    sortable: true,
                    hidden: true,
                    header: 'BANCO_DEST_NAL',
                    width: 100
                },
                 {
                    dataIndex: 'NOMBRE_BANCO_DEST_NAL',
                    name: 'NOMBRE_BANCO_DEST_NAL',
                    id: 'trNOMBRE_BANCO_DEST_NAL',
                    sortable: true,
                    hidden: false,
                    header: 'BANCO_DEST_NAL',
                    width: 100
                },
               {
                    dataIndex: 'BANCO_DEST_EXT',
                    name: 'BANCO_DEST_EXT',
                    id: 'trBANCO_DEST_EXT',
                    sortable: true,
                    hidden: false,
                    header: 'BANCO_DEST_EXT',
                    width: 100
                },
                 {
                    dataIndex: 'MET_PAGO_POL',
                    name: 'MET_PAGO_POL',
                    id: 'trMET_PAGO_POL',
                    sortable: true,
                    hidden: true,
                    header: 'MET_PAGO_POL',
                    width: 100
                },
                 {
                    dataIndex: 'NOMBRE_MET_PAGO_POL',
                    name: 'NOMBRE_MET_PAGO_POL',
                    id: 'trNOMBRE_MET_PAGO_POL',
                    sortable: true,
                    hidden: false,
                    header: 'MET_PAGO_POL',
                    width: 100
                },
                        {
                    dataIndex: 'MET_PAGO_AUX',
                    name: 'MET_PAGO_AUX',
                    id: 'trMET_PAGO_AUX',
                    sortable: true,
                    hidden: true,
                    header: 'MET_PAGO_AUX',
                    width: 100
                },
                       {
                    dataIndex: 'NOMBRE_MET_PAGO_AUX',
                    name: 'NOMBRE_MET_PAGO_AUX',
                    id: 'trNOMBRE_MET_PAGO_AUX',
                    sortable: true,
                    hidden: false,
                    header: 'MET_PAGO_AUX',
                    width: 100
                },
               {
                    dataIndex: 'MONTO_TOTAL',
                    name: 'MONTO_TOTAL',
                    id: 'trMONTO_TOTAL',
                    sortable: true,
                    hidden: false,
                    header: 'MONTO_TOTAL',
                    width: 100
                },
                {
                    dataIndex: 'MONEDA',
                    name: 'MONEDA',
                    id: 'trMONEDA',
                    sortable: true,
                    hidden: true,
                    header: 'MONEDA',
                    width: 100
                },
                 {
                    dataIndex: 'NOMBRE_MONEDA',
                    name: 'NOMBRE_MONEDA',
                    id: 'trNOMBRE_MONEDA',
                    sortable: true,
                    hidden: false,
                    header: 'MONEDA',
                    width: 100
                },
                        
                {
                    dataIndex: 'TIP_CAMB',
                    name: 'TIP_CAMB',
                    id: 'trTIP_CAMB',
                    sortable: true,
                    hidden: false,
                    header: 'TIP_CAMB',
                    width: 100
                }
                
            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreTransaccion'
                })
            ]
            


        });


        this.callParent(arguments);
    }



});




