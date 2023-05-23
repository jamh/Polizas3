Ext.define('AppProveedores.view.FormProductos', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formproductos',
    itemId: 'formproductos',
    xtype: 'formproductos',
    bodyPadding: 5,
    width: 600,
    defaultType: 'textfield',
    autoScroll: true,
    layout: 'form',
    url: 'CrearProveedor/saveProduct',
    initComponent: function() {

     
        Ext.apply(this, {
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Proveedor',
                    name: 'PROVEEDOR_FORM',
                    id: 'txtProveedorProduct',
                    allowBlank: false,
                    readOnly: true
                  //  disabled:true
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Id Producto',
                    name: 'ID_PRODUCTO_FORM',
                    id: 'txtIdProductoProduct',
                    allowBlank: true,
                    readOnly: true,
                    hidden:true
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Nombre',
                    name: 'NOMBRE_FORM',
                    id: 'txtNombreProduct',
                    allowBlank: true,
                    hidden:false,
                    readOnly: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Codigo',
                    name: 'CODIGO_FORM',
                    id: 'txtCodigoProduct',
                    allowBlank: true,
                    hidden:false,
                    readOnly: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Codigo Proveedor',
                    name: 'CODIGO_PROVEEDOR_FORM',
                    id: 'txtCodigoProveedor',
                    allowBlank: true,
                    hidden:false,
                    readOnly: false
                },
                
                {
                    xtype: 'textfield',
                    fieldLabel: 'Unidad Medida',
                    name: 'UNIDAD_MEDIDA_FORM',
                    id: 'txtUnidadMedidaProduct',
                    allowBlank: true,
                    hidden:false,
                    readOnly: false
                },
                {
                    xtype: 'numberfield',
                    fieldLabel: 'Precio Sin Iva',
                    name: 'PRECIO_SIN_IVA_FORM',
                    id: 'txtPrecioSinIvaProduct',
                    allowNegative: true,
                    allowDecimals: true,
                    decimalSeparator: '.',
                    allowBlank: false,
                    hidden:false,
                    readOnly: false
                }
               

            ], //fin if item

            buttons: [
                {
                    text: 'Guardar',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("guardaProductos", btn);
                    }
                },
                {
                    text: 'Cancelar',
                    scope: this,
                    handler: function() {
                        this.up('window').close();
                        // this.fireEvent("recargaGridConceptos");
                    }
                }
            ]//fin if button

        });
        this.callParent(arguments);
    }

});







