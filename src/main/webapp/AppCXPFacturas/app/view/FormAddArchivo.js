Ext.define('AppCXPFacturas.view.FormAddArchivo', {
    extend: 'Ext.form.Panel',
     alias: 'widget.formaddarchivo',
    itemId:'formaddarchivo',
    xtype: 'formaddarchivo',
    bodyPadding: 5,
    width: 600,
    defaultType: 'textfield',
    autoScroll: true,
    layout: 'form',
     url:'UploadDocument/saveOtras',
            
        initComponent: function() {
     
     

        Ext.apply(this, {
            items: [
           
                  
                   {
                    xtype: 'textfield',
                    fieldLabel: 'Compania',
                    name: 'archCOMPANIAOtras',
                    id: 'archCOMPANIAOtras',
                    allowBlank: false,
                    readOnly:true
                    //vtype: 'numeroId'
                },
                
                 {
                    xtype: 'textfield',
                    fieldLabel: 'Id',
                    name: 'archIDOtras',
                    id: 'archIDOtras',
                    allowBlank: false,
                    readOnly:true
                    //vtype: 'numeroId'
                },
                
//                {
//                    xtype: 'textfield',
//                    fieldLabel: 'Sec',
//                    name: 'archSecOtras',
//                    id: 'archSecOtras',
//                    allowBlank: false,
//                    readOnly:true
//                    //vtype: 'numeroId'
//                },
                   
                     {
                    xtype: 'textfield',
                    fieldLabel: 'PATH',
                    name: 'archPATHOtras',
                    id: 'archPATHOtras',
                    allowBlank: true,
                    hidden:true,
                    readOnly:false
                    //vtype: 'numeroId'
                },
                      {
                    xtype: 'textfield',
                    fieldLabel: 'URL',
                    name: 'archURLOtras',
                    id: 'archURLOtras',
                    allowBlank: true,
                    hidden:true,
                    readOnly:false
                    //vtype: 'numeroId'
                },
                {
                    xtype: 'filefield',
                    name: 'file',
                    id:'uploadItem',
                    fieldLabel: 'Archivo',
                    labelWidth: 50,
                    msgTarget: 'side',
                    allowBlank: false,
                    anchor: '100%',
                    buttonText: 'Buscar...'
                },
                       {
                    xtype: 'textfield',
                    fieldLabel: 'NOMBRE',
                    name: 'archNOMBREOtras',
                    id: 'archNOMBREOtras',
                    allowBlank: true,
                    readOnly:false,
                    enforceMaxLength: true,
                    maxLength:20
                    //vtype: 'numeroId'
                },
                       {
                    xtype: 'textfield',
                    fieldLabel: 'DESCRIPCION',
                    name: 'archDESCRIPCIONOtras',
                    id: 'archDESCRIPCIONOtras',
                    allowBlank: true,
                    readOnly:false,
                    enforceMaxLength: true,
                    maxLength:200
                    //vtype: 'numeroId'
                }
       
            ], //fin if item

            buttons: [
                {
                    text: 'Guardar',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("saveArchivoOtras",btn);
                    }
                },
                {
                    text: 'Cancelar',
                    scope: this,
                    handler: function() {
                        this.up('window').close();
                    }
                }
            ]//fin if button

        });
        this.callParent(arguments);
    } 
     
});







