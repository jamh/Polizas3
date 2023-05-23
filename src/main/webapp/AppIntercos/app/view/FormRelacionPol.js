Ext.define('AppIntercos.view.FormRelacionPol', {
    extend: 'Ext.form.Panel',
    alias: 'widget.formrelacionpol',
    itemId: 'formrelacionpol',
    xtype: 'formrelacionpol',
    bodyPadding: 5,
    width: 600,
    defaultType: 'textfield',
    autoScroll: true,
    layout: 'form',
    //url: 'UploadDocumentFE/save',
    initComponent: function() {

            var storeTipoPoliza = Ext.create('AppIntercos.store.StoreTipoPoliza');
            var storePeriodo = Ext.create('AppIntercos.store.StorePeriodo');
            var storeCalendario = Ext.create('AppIntercos.store.StoreCalendario');
            var storeNumeroPol = Ext.create('AppIntercos.store.StoreNumeroPol');
      
        Ext.apply(this, {
            items: [
                {
                    xtype: 'combobox',
                    id: 'cboTipoPolizaFE',
                    fieldLabel: 'Tipo de Poliza',
                    name: 'cboTipoPolizaFE',
                    itemId: 'cboTipoPolizaFE',
                    displayField: 'NOMBRE1',
                    valueField: 'TIPO_POLIZA',              
                    typeAhead: true,
                    minChars: 0,
                    editable:false,
                    store: storeTipoPoliza,
                    allowBlank: false,
                    listeners: {
                        scope: this,
                        'select': function(valor) {
                            if (Ext.isEmpty(valor.value))
                                return;
                           
                           // storeNumeroPol.proxy.extraParams.calendario = valor.value;
                             storeNumeroPol.proxy.extraParams.tipo_poliza = valor.value;
                           
                        }
                     }
                },
                {
                    xtype: 'combobox',
                    id: 'cboCalendario',
                    fieldLabel: 'Calendario',
                    name: 'cboCalendario',
                    itemId: 'cboCalendario',
                    displayField: 'CALENDARIO',
                    valueField: 'CALENDARIO',              
                    typeAhead: true,
                    minChars: 0,
                    editable:false,
                    store: storeCalendario,
                    allowBlank: false,
                     listeners: {
                        scope: this,
                        'select': function(valor) {
                            if (Ext.isEmpty(valor.value))
                                return;
                            Ext.getCmp('cboPeriodo').clearValue();
                            Ext.getCmp('cboPeriodo').setReadOnly(false);
                            storePeriodo.removeAll();
                            storePeriodo.proxy.extraParams.calendario = valor.value;
                            storeNumeroPol.proxy.extraParams.calendario = valor.value;
                            storePeriodo.load({
                                callback: function(val, val2) {

                                }
                            });
                        }
                     }
                },
                 {
                    xtype: 'combobox',
                    id: 'cboPeriodo',
                    fieldLabel: 'Periodo',
                    name: 'cboPeriodo',
                    itemId: 'cboPeriodo',
                    displayField: 'PERIODO',
                    valueField: 'PERIODO',              
                    typeAhead: true,
                    minChars: 0,
                    editable:false,
                    store: storePeriodo,
                    allowBlank: false,
                    readOnly:true,
                     listeners: {
                        scope: this,
                        'select': function(valor) {
                            if (Ext.isEmpty(valor.value))
                                return;
                            Ext.getCmp('cboNumeroPol').clearValue();
                            Ext.getCmp('cboNumeroPol').setReadOnly(false);
                           // storeNumeroPol.removeAll();
                           // storeNumeroPol.proxy.extraParams.calendario = valor.value;
                             storeNumeroPol.proxy.extraParams.periodo = valor.value;
                             storeNumeroPol.proxy.extraParams.query = '';
                            storeNumeroPol.load({
                                callback: function(val, val2) {

                                }
                            });
                        }
                     }
                },
               {
                        xtype: 'combobox',
                        name: 'cboNumeroPol',
                        id: 'cboNumeroPol',
                        readOnly:true,
                        fieldLabel: 'Numero de Poliza',
                        store: storeNumeroPol,
                        minChars: 4,
                        displayField: 'NUMERO',
                        valueField: 'NUMERO',
                        typeAhead: false,
                        validateOnChange: true,
                        allowBlank: false,
                        //hideTrigger: true,
                        listConfig: {
                            loadingText: 'Buscando...',
                            emptyText: 'No se encontro cuenta.',
                            getInnerTpl: function() {
                                return '<span style="color:green;font-weight: bold">{NUMERO}</span><h3>{FECHA}</h3>';
                            }
                        },
                        listeners: {
                            scope: this,
                            select: function(value) {
                        
                               
                                Ext.getCmp('dtFechaPol').setValue(value.valueModels[0].data.FECHA);
                        
                               // this.fireEvent("nombreCuenta", value.valueModels[0].data.NOMBRE, value.valueModels[0].data.CUENTA);
                            }
                        },
                        pageSize: 10
                    },
                 {
                     xtype:'datefield',
                    name: 'dtFechaPol',
                    fieldLabel: 'Fecha de Poliza',
                    id: 'dtFechaPol',
                    submitFormat: 'd/m/Y',
                    format: 'd/m/Y',
                    allowBlank: false,
                     renderer:// Ext.util.Format.dateRenderer('d/m/Y'),
                            function(value) {
                                if(Ext.isDate(value)){
                                    return   Ext.Date.format(value, 'd/m/Y');
                                }else {
                            return  value;
                        }
//                        if (Ext.isEmpty(value.length)) {
//                            return   Ext.Date.format(value, 'd/m/Y');
//                        } else {
//                            return  value;
//                        }
                    }

             
                 }

            ], //fin if item

            buttons: [
                {
                    text: 'save',
                    scope: this,
                    handler: function(btn) {
                        this.fireEvent("saveRelacionPoliza", btn);
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







