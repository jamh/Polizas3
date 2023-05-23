Ext.define('AppIntercos.view.FormProrrateo', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formprorrateo',
    itemId: 'formprorrateo',
    xtype: 'formprorrateo',
//    title:'Convertidor',
    flex:1,
//    bodyPadding: 5,
//    width: 600,
    defaultType: 'textfield',
    autoScroll: true,
    //layout: 'form',
    layout: 'anchor',
    defaults: {
        anchor: '50%'
    },
   // url: 'Convertidor/save',
    initComponent: function() {
        var me = this;
        
       // var storeTipoPolizaConvertidor = Ext.create('AppConvertidor.store.StoreTipoPoliza');
        
//        var estatus = Ext.create('Ext.data.Store', {
//            fields: ['estatus', 'name'],
//                data : [
//                    {"estatus":"1", "name":"1-Activo"},
//                    {"estatus":"0", "name":"0-Inactivo"}
//                 
//                ]
//            });
//            
//         var origen = Ext.create('Ext.data.Store', {
//            fields: ['origen', 'name'],
//                data : [
//                    {"origen":"P", "name":"Cuentas por Pagar"},
//                    {"origen":"C", "name":"Cuentas por Cobrar"}
//                 
//                ]
//            });
//            

           

        Ext.apply(me, {
              tools: [

           
            ],
            items: [
                {
                    xtype: 'textfield',
                    fieldLabel: 'Tipo de Distribucion',
                    name: 'T_DISTRIBUCION',
                    id: 'cboT_DISTRIBUCION',
                   
                    allowBlank: false,
                    readOnly: false,
                    hidden:false
                },
               
                 {
                    //xtype: 'combobox',
                    xtype: 'numberfield',
                    fieldLabel: 'Tipo de Prorrateo',
                    name: 'T_PRORRATEO',
                    id: 'nubT_PRORRATEO',
                    hidden:false,
                    //store: origen,
                    //queryMode: 'local',
                   // displayField: 'name',
                   // valueField: 'origen',
                    allowBlank: false,
                    readOnly: false
                }




            ], //fin if item

            tbar: [
              
//                '->',
//                {
//                    text: 'Agregar',
//                    iconCls: 'add-icon',
//                    id:'agregarConvertidorM',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("agregarRegistro", btn);
//                    }
//                },
//                {
//                    text: 'Guardar',
//                    iconCls: 'save-icon',
//                    id:'guardarConvertidorM',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("saveConvertidorMaestro", btn);
//                    }
//                },
//                {
//                    text: 'Borrar',
//                    iconCls: 'delete-icon',
//                    id:'borrarConvertidorM',
//                    scope: this,
//                    handler: function() {
//                
//                        this.fireEvent("deleteConvertidor");
//                    }
//                },
//                {
//                    text: 'Copiar',
//                    iconCls: 'copy-icon',
//                    id:'copiarConvertidorM',
//                    scope: this,
//                    handler: function(btn) {
//                        this.fireEvent("copiarRegistro", btn);
//                    }
//                }
            ]
          
            //fin if button

        });
        this.callParent(arguments);
    }
    

});







