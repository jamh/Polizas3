Ext.define('AppFormulas.view.FormCopiaFormula', {
    extend: 'Ext.form.Panel',
     alias: 'widget.formcopiaformula',
    itemId:'formcopiaformula',
    xtype: 'formcopiaformula',
    bodyPadding: 5,
    width: 600,
    defaultType: 'textfield',
    autoScroll: true,
    layout: 'form',
    // bodyPadding: 5,
            
        initComponent: function() {
        
    

        Ext.apply(this, {
            items: [
                
                 {
                 
                    fieldLabel: 'Cedula',
                    name: 'CEDULAcopy',
                    id: 'txtCEDULAcopy',
                    hidden: false,
                    allowBlank: false,
                    readOnly: false
                }
               
            ], //fin if item

            buttons: [
                {
                    text: 'Copiar',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("copiarRegistro",btn);
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





