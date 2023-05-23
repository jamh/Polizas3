Ext.define('AppConvertidor.view.FormErpCatConvertidor', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formerpcatconvertidor',
    itemId: 'formerpcatconvertidor',
    xtype: 'formerpcatconvertidor',
//    title:'Convertidor',
    flex:1,
//    bodyPadding: 5,
//    width: 600,
    defaultType: 'textfield',
    autoScroll: true,
    collapsed:false,
    split: true,
    collapsible: true,
    
    layout: 'form',
    url: 'Convertidor/save',
    initComponent: function() {
        var me = this;
        
        var storeTipoPolizaConvertidor = Ext.create('AppConvertidor.store.StoreTipoPoliza');
        var storeBuscaConvertidor = Ext.create('AppConvertidor.store.StoreBuscaConvertidor');
        
        var estatus = Ext.create('Ext.data.Store', {
            fields: ['estatus', 'name'],
                data : [
                    {"estatus":"1", "name":"1-Activo"},
                    {"estatus":"0", "name":"0-Inactivo"}
                 
                ]
            });
            
         var origen = Ext.create('Ext.data.Store', {
            fields: ['origen', 'name'],
                data : [
                    {"origen":"P", "name":"Cuentas por Pagar"},
                    {"origen":"C", "name":"Cuentas por Cobrar"}
                 
                ]
            });
            

           

        Ext.apply(me, {
              tools: [

                {
                    type: 'help',
                    id:'helpFactura',
                    name:'helpFactura',
                    
                    handler: function(){
                            Ext.create('Ext.window.Window', {
                            title: 'Opciones',
                            autoScroll:true,
                            height: 400,
                            width: 400,
                            layout: 'fit',
                            html:'<p><p ALIGN=center>OPERACIONES PARA POLIZAS</p>\n\
                                    <p><b>[FOLIO]</b> : Folio de la factura.</p>\n\
                                    <p><b>[UUID]</b> : Uuid de la factura.</p>\n\
                                    <p><b>[rfcEmisor]</b> : RFC del Emisor de la factura.</p>\n\
                                    <p><b>[rfcReceptor]</b> : RFC  del receptor de la factura.</p>\n\
                                    <p><b>[IVA]</b> : IVA de la factura.</p>\n\
                                    <p><b>[TOTAL]</b> : Total de la factura.</p>\n\
                                    <p><b>[SUBTOTAL]</b> : Subtotal de la factura.</p>\n\
                                    <p><b>[DESCUENTO]</b> : Descuento de la factura.</p>\n\
                                    <p><b>[RET_IVA]</b> : Retención de IVA por concepto.</p>\n\
                                    <p><b>[RET_ISR]</b> : Retención de ISR de la factura.</p>\n\
                                    <p><b>[ISH]</b> : Impuesto sobre Hospedaje.</p>\n\
                                    <p><b>[nombreReceptor]</b> :  Razón social del receptor.</p>\n\
                                    <p><b>[paridadUSD]</b> : Paridad en d&oacute;lares con fecha actual.</p>\n\
                                    <p><b>[paridadFacturaUSD]</b> : Paridad en d&oacute;lares con la fecha de la Factura.</p>\n\
                                    <p><b>[cuentaProveedor]</b> : Cuenta Contable asignada en el catalogo de proveedores.</p>\n\
                                    <p><b>[auxiliarProveedor]</b> : Auxiliar contable asigando en el catalogo de proveedores.</p>\n\
                                    <p><b>[cuentaCliente]</b> : Cuenta contable asignada en el catalogo de clientes.</p>\n\
                                    <p><b>[auxiliarCliente]</b> : Auxiliar contable asignado en el catalogo de clientes.</p>\n\
                                    <p><b>[nombreEmisor]</b> :  Razón social del emisor.</p>',
                            }).show();
                        },
                        
                    
                     tooltip:'<p><p ALIGN=center>OPERACIONES PARA POLIZAS</p>\n\
                       <p><b>[FOLIO]</b> : Folio de la factura.</p>\n\
                       <p><b>[UUID]</b> : Uuid de la factura.</p>\n\
                       <p><b>[rfcEmisor]</b> : RFC del Emisor de la factura.</p>\n\
                       <p><b>[rfcReceptor]</b> : RFC  del receptor de la factura.</p>\n\
                       <p><b>[IVA]</b> : IVA de la factura.</p>\n\
                       <p><b>[TOTAL]</b> : Total de la factura.</p>\n\
                       <p><b>[SUBTOTAL]</b> : Subtotal de la factura.</p>\n\
                       <p><b>[DESCUENTO]</b> : Descuento de la factura.</p>\n\
                       <p><b>[RET_IVA]</b> : Retención de IVA por concepto.</p>\n\
                       <p><b>[RET_ISR]</b> : Retención de ISR de la factura.</p>\n\
                       <p><b>[ISH]</b> : Impuesto sobre Hospedaje.</p>\n\
                       <p><b>[nombreReceptor]</b> :  Razón social del receptor.</p>\n\
                       <p><b>[paridadUSD]</b> : Paridad en d&oacute;lares con fecha actual.</p>\n\
                       <p><b>[paridadFacturaUSD]</b> : Paridad en d&oacute;lares con la fecha de la Factura.</p>\n\
                       <p><b>[cuentaProveedor]</b> : Cuenta Contable asignada en el catalogo de proveedores.</p>\n\
                       <p><b>[auxiliarProveedor]</b> : Auxiliar contable asigando en el catalogo de proveedores.</p>\n\
                       <p><b>[cuentaCliente]</b> : Cuenta contable asignada en el catalogo de clientes.</p>\n\
                       <p><b>[auxiliarCliente]</b> : Auxiliar contable asignado en el catalogo de clientes.</p>\n\
                       <p><b>[nombreEmisor]</b> :  Razón social del emisor.</p>',
                   // scope:this //this.fireEvent("helpConvertidor",btn);
                    
                },
                {
                    type: 'help',
                    
                    id:'helpPago',
                    name:'helpPago',
                    
                    handler: function(){
                            Ext.create('Ext.window.Window', {
                            title: 'Opciones',
                            autoScroll:true,
                            height: 400,
                            width: 400,
                            layout: 'fit',
                            html:'<p><p ALIGN=center>OPERACIONES PARA POLIZAS PAGOS</p>\n\
                                    <p><b>[montoPagoTotal]</b> : Monto del pago.</p>\n\
                                    <p><b>[montoParcial-(secPago)]</b> : Monto pago parcial por secuencia.</p>\n\
                                    <p><b>[banco-(secPago)]</b> : Banco.</p>\n\
                                    <p><b>[fechaPago-(secPago)]</b> : Fecha Pago.</p>\n\
                                    <p><b>[paridadPago]</b> : Paridad Pago.</p>\n\
                                    <p><b>[descripcionPago-(secPago)]</b> : Descripcion Pago.</p>\n\
                                    <p><b>[cuentaBanco-(secPago)]</b> :  Cuenta Clabe.</p>\n\
                                    <p><b>[FOLIO]</b> : Folio de la factura.</p>\n\
                                    <p><b>[UUID]</b> : Uuid de la factura.</p>\n\
                                    <p><b>[rfcEmisor]</b> : RFC del Emisor de la factura.</p>\n\
                                    <p><b>[rfcReceptor]</b> : RFC  del receptor de la factura.</p>\n\
                                    <p><b>[TOTAL]</b> : Total de la factura.</p>\n\
                                    <p><b>[nombreReceptor]</b> :  Razón social del receptor.</p>\n\
                                    <p><b>[paridadUSD]</b> : Paridad en d&oacute;lares con fecha actual.</p>\n\
                                    <p><b>[paridadFacturaUSD]</b> : Paridad en d&oacute;lares con la fecha de la Factura.</p>\n\
                                    <p><b>[nombreEmisor]</b> :  Razón social del emisor.</p>'
                                    
                                    
                            }).show();
                        },
                        
                    
                     tooltip:'<p><p ALIGN=center>OPERACIONES PARA POLIZAS PAGOS</p>\n\
                                    <p><b>[montoPagoTotal]</b> : Monto del pago.</p>\n\
                                    <p><b>[montoParcial-(secPago)]</b> : Monto pago parcial por secuencia.</p>\n\
                                    <p><b>[banco-(secPago)]</b> : Banco.</p>\n\
                                    <p><b>[fechaPago-(secPago)]</b> : Fecha Pago.</p>\n\
                                    <p><b>[paridadPago]</b> : Paridad Pago.</p>\n\
                                    <p><b>[descripcionPago-(secPago)]</b> : Descripcion Pago.</p>\n\
                                    <p><b>[cuentaBanco-(secPago)]</b> :  Cuenta Clabe.</p>\n\
                                    <p><b>[FOLIO]</b> : Folio de la factura.</p>\n\
                                    <p><b>[UUID]</b> : Uuid de la factura.</p>\n\
                                    <p><b>[rfcEmisor]</b> : RFC del Emisor de la factura.</p>\n\
                                    <p><b>[rfcReceptor]</b> : RFC  del receptor de la factura.</p>\n\
                                    <p><b>[TOTAL]</b> : Total de la factura.</p>\n\
                                    <p><b>[nombreReceptor]</b> :  Razón social del receptor.</p>\n\
                                    <p><b>[paridadUSD]</b> : Paridad en d&oacute;lares con fecha actual.</p>\n\
                                    <p><b>[paridadFacturaUSD]</b> : Paridad en d&oacute;lares con la fecha de la Factura.</p>\n\
                                    <p><b>[nombreEmisor]</b> :  Razón social del emisor.</p>'
                   // scope:this //this.fireEvent("helpConvertidor",btn);
                    
                }
            ],
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Compania',
                    name: 'COMPANIA',
                    id: 'txtCOMPANIAConv',
                    allowBlank: false,
                    readOnly: true,
                    hidden:true
                },
               
                 {
                    //xtype: 'combobox',
                    xtype: 'textfield',
                    fieldLabel: 'Origen',
                    name: 'ORIGEN',
                    id: 'txtORIGENConv',
                    hidden:true,
                    //store: origen,
                    //queryMode: 'local',
                   // displayField: 'name',
                   // valueField: 'origen',
                    allowBlank: false,
                    readOnly: true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'CONC. GASTO',
                    name: 'IDCONCGASTO',
                    id: 'txtIDCONCGASTOConv',
                    allowBlank: false,
                    readOnly: true,
                    hidden:true

                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Num. Caso',
                    name: 'NO_CASO',
                    id: 'txtNCASOConv',
                    //hidden:true,
                    readOnly: true,
                    allowBlank: true

                },
                {
                    xtype: 'combobox',
                    id: 'cboTipoPolizaConv',
                    name: 'T_POLIZA',
                    fieldLabel: 'Tipo Poliza',
                    itemId: 'cboTipoPolizaConv',
                    displayField: 'NOMBRE1',
                    valueField: 'TIPO_POLIZA',
                    typeAhead: true,
                    minChars: 0,
                    editable: false,
                    store: storeTipoPolizaConvertidor,
                    allowBlank: false,
                    listeners: {
                        scope: me,
                        'change': function(field, value, eOpts) {



                        }
                    }


                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Descripcion',
                    name: 'DESCRIPCION',
                    id: 'txtDESCRIPCIONConv'
                },
                {
                    xtype: 'combobox',
                    fieldLabel: 'Estatus',
                    name: 'ACTIVO',
                    id: 'txtACTIVOConv',     
                    store: estatus,
                    queryMode: 'local',
                    readOnly: true,
                    hidden:true,
                    displayField: 'name',
                    valueField: 'estatus',
                    allowBlank: false
                },
                 {
                    xtype: 'textfield',
                    fieldLabel: 'Nombre',
                    name: 'NOMBRE',
                    id: 'txtNOMBREConv',
                    allowBlank: false

                },
                 {
                    xtype: 'textfield',
                    fieldLabel: 'Parametro',
                    name: 'PARAMETRO',
                    id: 'txtPARAMETROConv',
                    allowBlank: true,
                    hidden:true

                }




            ], //fin if item

            tbar: [
                 {
                    width: 420,
                    fieldLabel: 'Buscar',
                    xtype: 'combobox',
                    //store: 'StoreBuscaConvertidor',
                    store:storeBuscaConvertidor,
                    displayField: 'NOMBRE1',
                    valueField: 'NO_CASO',
                    emptyText: 'Convertidor no encontrada',
                    id: 'cboConvertidor',
                    name: 'cboConvertidor',
                    minChars : 3,
                    typeAhead: false,
                    anchor: '100%',
                    listConfig: {
                        loadingText: 'Buscando...',
                        emptyText: 'No se encontraron datos.',
                        getInnerTpl: function() {
                            return '<a class="banner-title">{NOMBRE}</a>' +
                                    '<br /> <a class="banner-text">{NO_CASO}</a>' 
                                    ;
                        }
                    },
                    listeners: {
                        scope:this,
                                
                    beforequery: function(queryEvent, eOpts) {
                
                       storeBuscaConvertidor.proxy.extraParams.condicion = Ext.getCmp('txtPARAMETROConv').getValue();
                       
                       this.fireEvent("verificaQuery",storeBuscaConvertidor);
                       
//                      queryEvent.combo.store.proxy.extraParams = {
//                        param1: 'value1',
//                        param2: 'value2'
//                      }
                       //msgOut('valor antes del query'+Ext.getCmp('txtPARAMETROConv').getValue());
                    },
      
                        select: function(value){
                                    msgOut("nombre1:"+value.valueModels[0].data.NOMBRE);
                              this.fireEvent("findConvertidor", value.valueModels[0].data.COMPANIA,value.valueModels[0].data.ORIGEN,value.valueModels[0].data.IDCONCGASTO,value.valueModels[0].data.T_POLIZA,value.valueModels[0].data.DESCRIPCION,value.valueModels[0].data.ACTIVO,Ext.getCmp('cboConvertidor').getValue(),value.valueModels[0].data.NOMBRE);
                             //}
                        }
                    },
                    pageSize: 10


                },
//                 {
//                    xtype: 'button',
//                    text: 'Buscar',
//                    iconCls: 'search-icon',
//                    
//                    handler: function(btn) {
//                        me.fireEvent("findFactura", Ext.getCmp('cboFactura').getValue());
//                    }
//                },
                '->',
                {
                    text: 'Agregar',
                    iconCls: 'add-icon',
                    id:'agregarConvertidorM',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("agregarRegistro", btn);
                    }
                },
                {
                    text: 'Guardar',
                    iconCls: 'save-icon',
                    id:'guardarConvertidorM',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("saveConvertidorMaestro", btn);
                    }
                },
                {
                    text: 'Borrar',
                    iconCls: 'delete-icon',
                    id:'borrarConvertidorM',
                    scope: this,
                    handler: function() {
                
                        this.fireEvent("deleteConvertidor");
                    }
                },
                {
                    text: 'Copiar',
                    iconCls: 'copy-icon',
                    id:'copiarConvertidorM',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("copiarRegistro", btn);
                    }
                }
            ]
          
            //fin if button

        });
        this.callParent(arguments);
    }
    

});







