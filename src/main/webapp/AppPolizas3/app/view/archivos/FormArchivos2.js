Ext.define('AppPolizas3.view.archivos.FormArchivos2', {
    extend: 'Ext.form.Panel',
     alias: 'widget.formarchivos2',
    itemId:'formarchivos2',
    xtype: 'formarchivos2',
    bodyPadding: 5,
    width: 600,
    defaultType: 'textfield',
    autoScroll: true,
    layout: 'form',
     url:'UploadDocument/save',
            
        initComponent: function() {
     
     

        Ext.apply(this, {
            items: [
           
                  
                   {
                    xtype: 'textfield',
                    fieldLabel: 'Compania',
                    name: 'archCOMPANIA2',
                    id: 'archCOMPANIA2',
                    allowBlank: false,
                    readOnly:true
                    //vtype: 'numeroId'
                },
                   {
                    xtype: 'textfield',
                    fieldLabel: 'Tipo Poliza',
                    name: 'archTIPO_POLIZA2',
                    id: 'archTIPO_POLIZA2',
                    allowBlank: false,
                    readOnly:true
                    //vtype: 'numeroId'
                },
                   {
                    xtype: 'textfield',
                    fieldLabel: 'Fecha',
                    name: 'archFECHA2',
                    id: 'archFECHA2',
                    allowBlank: false,
                    readOnly:true
                    //vtype: 'numeroId'
                },
                   {
                    xtype: 'textfield',
                    fieldLabel: 'Numero',
                    name: 'archNUMERO2',
                    id: 'archNUMERO2',
                    allowBlank: false,
                    readOnly:true
                    //vtype: 'numeroId'
                },
                    {
                    xtype: 'textfield',
                    fieldLabel: 'Sec',
                    name: 'archSEC2',
                    id: 'archSEC2',
                    hidden:true,
                    allowBlank: true,
                    readOnly:true
                    //vtype: 'numeroId'
                },
                     {
                    xtype: 'textfield',
                    fieldLabel: 'PATH',
                    name: 'archPATH2',
                    id: 'archPATH2',
                    allowBlank: true,
                    hidden:true,
                    readOnly:false
                    //vtype: 'numeroId'
                },
                      {
                    xtype: 'textfield',
                    fieldLabel: 'URL',
                    name: 'archURL2',
                    id: 'archURL2',
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
                    name: 'archNOMBRE2',
                    id: 'archNOMBRE2',
                    allowBlank: true,
                    readOnly:false,
                    enforceMaxLength: true,
                    maxLength:20
                    //vtype: 'numeroId'
                },
                       {
                    xtype: 'textfield',
                    fieldLabel: 'DESCRIPCION',
                    name: 'archDESCRIPCION2',
                    id: 'archDESCRIPCION2',
                    allowBlank: true,
                    readOnly:false,
                    enforceMaxLength: true,
                    maxLength:200
                    //vtype: 'numeroId'
                }
       
            ], //fin if item

            buttons: [
                {
                    text: 'save',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("saveArchivo2",btn);
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







