Ext.define('AppFEPolizas.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: [
        'StoreDetalleFacturas'
    ],
    models: [
        'ModeloTipoPoliza',
        'ModeloDetFe',
        'ModeloCuentas',
        'ModeloRfc'
    ],
    refs: [
        {
            ref: 'containerContenido',
            selector: 'containercontenido'
        }
        ,
        {
            ref: 'formArchivos',
            selector: 'formarchivos'
        },
        {
            ref: 'gridDetFe',
            selector: 'griddetfe'
        },
        {
            ref: 'formFe',
            selector: 'formfe'
        },
        {
            ref: 'containerFe',
            selector: 'containerfe'
        },
        {
            ref: 'panelFe',
            selector: 'panelfe'
        }

    ],
    views: [
        'Main',
        'ContainerContenido',
        'FormArchivos',
        'ContainerFe',
        'PanelFe',
        'GridDetFe',
        'FormFe'
    ],
    windowParent: null,
    storePolizas: null,
    isRelacion: null,
    polizaNumero: null,
    polizaTipo: null,
    polizaFecha: null,
    init: function() {

        var me = this;
        me.control({
            containercontenido: {
                afterrender: function() {
                    me.loadPage('AppFEPolizas.view.FormArchivos');
                    me.findCompania();

                }

            },
            formarchivos: {
                procesarArchivo: function() {


                },
                saveArchivoFE: function(btn) {
                    me.saveArchivo(btn);

                }

            },
            griddetfe: {
                addDetFe: function(btn, cellEditing) {
                    me.addDetFe(btn, cellEditing);
                },
                saveDet: function() {

                },
                cancelFe: function() {
                    me.cancelFe();
                }

            },
            formfe: {
                savePolizaFe: function() {
                    me.generarPolizas();
                },
                tipoOrigen: function(tipoOrigen) {
                    //msgOut(tipoOrigen);
                    me.tipoOrigen(tipoOrigen);

                }
            }

        });
    },
    cancelFe: function() {
        var me = this,
                grid = me.getGridDetFe(),
                store = grid.getStore();

        var records = grid.getSelectionModel().getSelection();


        if (Ext.isEmpty(records))
            return;
        //     msgOut(records.length);


        var selection = records[0];




        if (selection.phantom) {
            store.remove(selection);
            return;
            //continue;
        }
    },
    findCompania: function() {
        var me = this,
                form = me.getFormArchivos().getForm();

        Ext.Ajax.request({
            url: 'process/data/BuscaCompania',
            method: 'GET',
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var compania = val.data[0].COMPANIA;
                    var nombre = val.data[0].NOMBRE1;
                    form.findField('archCOMPANIA').setValue(nombre);


                } else if (!val.success) {
                    msgBoxErr('Compania', 'Error compañia no encontrada');
                }
            },
            timeout: 30000

        });
    },
    findRfc: function(rfcR, rfcE) {
        
        msgOut('buscando rfc'+rfcR+'-'+ rfcE);
        var me = this,
                form = me.getFormFe().getForm();

        Ext.Ajax.request({
            url: 'process/data/BuscaRfcCompania',
            method: 'GET',
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var rfc = val.data[0].RFC;
                    msgOut('rfc base'+ rfc);

                    if (rfc === rfcR) {

                        var origen = 'pp';

                        form.findField('radioTipoOrigenGrp').items.items[0].setValue(true);
                        form.findField('radioTipoOrigenGrp').items.items[1].setValue(false);
                        me.tipoOrigen(origen);



                    } else if (rfc === rfcE) {

                        var origen = 'pc';
                        form.findField('radioTipoOrigenGrp').items.items[0].setValue(false);
                        form.findField('radioTipoOrigenGrp').items.items[1].setValue(true);
                        me.tipoOrigen(origen);

                    } else {
                        msgOut('sin parentesco');
                        var origen = 'pp';
                        form.findField('radioTipoOrigenGrp').items.items[0].setValue(true);
                        form.findField('radioTipoOrigenGrp').items.items[1].setValue(false);
                        me.tipoOrigen(origen);
                      
                    }




                } else if (!val.success) {
                    msgBoxErr('Error', 'Error rfc de compañia no encontrado');
                }

                me.buscaDatosConvertidor(rfcE, rfcR);
            },
            timeout: 30000

        });
    },
    tipoOrigen: function(tipoOrigen) {
        var me = this,
                grid = me.getGridDetFe(),
                form = me.getFormFe().getForm(),
                store = grid.getStore(),
                records = grid.getSelectionModel().getSelection();


        var record = records[0];

        if (tipoOrigen === 'pp') {

            grid.getStore().each(function(record) {
                var nomImporte = record.get('NOMIMPORTE');

                msgOut("importe nombre:" + nomImporte);

                if (nomImporte === 'ISR') {

                    record.set('TIPO_IMPORTE', 'A');

                }
                if (nomImporte === 'IVA_RET') {

                    record.set('TIPO_IMPORTE', 'A');

                }

                if (nomImporte === 'IVA') {

                    record.set('TIPO_IMPORTE', 'C');

                }
                if (nomImporte === 'SUBTOTAL') {

                    record.set('TIPO_IMPORTE', 'C');

                }
                if (nomImporte === 'TOTAL') {

                    record.set('TIPO_IMPORTE', 'A');

                }


            });


        } else {

            grid.getStore().each(function(record) {
                var nomImporte = record.get('NOMIMPORTE');

                if (nomImporte === 'ISR') {

                    msgBoxErr('Error', 'No existe retencion en Facturas por Pagar');
                    form = me.getFormFe().getForm();
                    form.findField('radioTipoOrigenGrp').items.items[0].setValue(true);
                    form.findField('radioTipoOrigenGrp').items.items[1].setValue(false);

                    record.set('TIPO_IMPORTE', '');

                }
                if (nomImporte === 'IVA_RET') {

                    msgBoxErr('Error', 'No existe retencion en Facturas por Pagar');
                    form = me.getFormFe().getForm();
                    form.findField('radioTipoOrigenGrp').items.items[0].setValue(true);
                    form.findField('radioTipoOrigenGrp').items.items[1].setValue(false);


                    record.set('TIPO_IMPORTE', '');

                }

                if (nomImporte === 'IVA') {

                    record.set('TIPO_IMPORTE', 'A');

                }
                if (nomImporte === 'SUBTOTAL') {

                    record.set('TIPO_IMPORTE', 'A');

                }
                if (nomImporte === 'TOTAL') {

                    record.set('TIPO_IMPORTE', 'C');

                }

            });


        }

    },
    datosFacturas: function(numero) {



        var me = this,
                form = me.getFormFe().getForm();
        msgOut('datos facturas');

        var coantai = me.getPanelFe();
        coantai.setLoading("Procesando Factura");
        Ext.Ajax.request({
            url: 'process/data/BuscaDatosFactura',
            params: {
                numero: numero



            },
            method: 'GET',
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var nombre = val.data[0].COMPANIA;
                    var uuid = val.data[0].UUID;
                    var rfcR = val.data[0].RFC_R;
                    var rfcE = val.data[0].RFC_E;
                    var folio = val.data[0].FOLIO;
                    var moneda = val.data[0].MONEDA;
                    var tipoCambio = val.data[0].TIPO_CAMBIO;

                    form.findField('feREFERENCIA').setValue('F-' + folio);
                    form.findField('rfcEmisor').setValue(rfcE);
                    form.findField('rfcReceptor').setValue(rfcR);
                    form.findField('txtFOLIOFE').setValue(folio);
                    form.findField('feUUID').setValue(uuid);
                    form.findField('feMONEDA').setValue(moneda);
                    form.findField('feTIPO_CAMBIO').setValue(tipoCambio);
                    form.findField('cbofeTIPO_POLIZA').getStore().load();

                    me.findRfc(rfcR, rfcE);


                } else if (!val.success) {
                    msgBoxErr('Datos', 'Error datos no encontrados');
                }
                coantai.setLoading(false);
                // me.tipoOrigen('pp');

            },
            timeout: 30000

        });
    },
    buscaDatosConvertidor: function(rfcEmisor, rfcReceptor) {
        var me = this,
                grid = me.getGridDetFe(),
                form = me.getFormFe().getForm(),
                store = grid.getStore();
        Ext.Ajax.request({
            url: 'process/data/BuscaDatosRecordar',
            params: {
                rfcEmisor: rfcEmisor,
                rfcReceptor: rfcReceptor
            },
            method: 'POST',
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var rfcEm = val.data[0].RFC_EMISOR;
                    var rfcRc = val.data[0].RFC_RECEPTOR;
                    var tipo = val.data[0].T_POLIZA;
                    msgOut('tipo' + tipo);
                    form.findField('cbofeTIPO_POLIZA').setValue(tipo);
                    form.findField('cbofeTIPO_POLIZA').getStore().load();

                    for (var i = 0; i < val.data.length; i++) {

                        var model = store.findRecord('NOMIMPORTE', val.data[i].IDCAMPO, 0, false, true, true);

                        model.set('CUENTA_ALIAS', val.data[i].CUENTA);
                        model.set('TIPO_IMPORTE', val.data[i].T_APLICACION);

                    }

                }

            }
        });


    },
    generarPolizas: function(celleditor) {
        var me = this,
                grid = me.getGridDetFe(),
                form = me.getFormFe().getForm(),
                store = grid.getStore(),
                records = grid.getSelectionModel().getSelection();


        var record = records[0];


        var tipo = form.findField('cbofeTIPO_POLIZA').getValue();
        var fecha = form.findField('feFECHA').getRawValue();
        var ref = form.findField('feREFERENCIA').getValue();
        var emisor = form.findField('rfcEmisor').getValue();
        var receptor = form.findField('rfcReceptor').getValue();
        var numeroFE = form.findField('txtNUMEROFE').getValue();
        var folioFE = form.findField('txtFOLIOFE').getValue();
        var uuid = form.findField('feUUID').getValue();


        var datar = new Array();
        var json = "";
        var rec = store.getRange();
        for (var i = 0; i < rec.length; i++) {
            datar.push(rec[i].data);
        }
        json = Ext.encode(datar);
        var coantai = me.getPanelFe();
        coantai.setLoading("Generando Poliza");


        Ext.Ajax.request({
            url: 'facturas/electronica/poliza',
            timeout: 60000,
            scope: this,
            params: {
                tipo: tipo,
                fecha: fecha,
                referencia: ref,
                data: json,
                emisor: emisor,
                receptor: receptor,
                numeroFE: numeroFE,
                folio: folioFE,
                uuid: uuid
            },
            success: function(response) {
                var text = response.responseText;
                //   coantai.setLoading(false);
                //   me.cierraWindow();


            },
            callback: function(a, b, success) {
//                msgOut(a);
//                msgOut(b);
//                msgOut(success);


                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    msgBox("Poliza generada");

                    me.cierraWindow();
//                        msgOut(val.msg);
                    Ext.MessageBox.show({
                        title: 'Poliza, Generada!',
                        msg: val.msg,
                        buttons: Ext.MessageBox.YESNO,
                        buttonText: {
                            yes: "Ver poliza",
                            no: "No"
                        },
                        fn: function(btn) {
                            if (btn === 'yes') {


                                me.buscaPolizaStore(val.numero, val.tipoPoliza, val.fecha);

                            }
                        }
                    });

                }
                if (!val.success) {
                    msgBoxErr("Error al general la poliza", val.msg);
                }

                coantai.setLoading(false);

            }});


    },
    buscaPolizaStore: function(numero, tipoPoliza, fecha) {
        var me = this;
        if (!Ext.isEmpty(me.storePolizas)) {
            me.storePolizas.proxy.extraParams.tipoDat = "1";
            //  me.storePolizas.proxy.extraParams.calendario = '2014';
            me.storePolizas.proxy.extraParams.ccostos = "00";
            me.storePolizas.proxy.extraParams.tipo_poliza = tipoPoliza;
            me.storePolizas.proxy.extraParams.fec_ini = fecha;
            me.storePolizas.proxy.extraParams.fec_fin = fecha;
            me.storePolizas.proxy.extraParams.num_ini = numero;
            me.storePolizas.proxy.extraParams.num_fin = numero;
            var dirBus = 'process/data3/PolizasFovi_datos_busfecnum_sinCC';
            me.storePolizas.proxy.api.read = dirBus;
            me.storePolizas.loadData([], false);

            me.storePolizas.load({
                //url: dirBus,
                callback: function(val1, val2, val3) {
                    //grid.setLoading(false);
                }
            });

        }
    },
    cierraWindow: function() {
//        msgOut("Cierra window");
        var me = this;
        if (me.windowParent) {
            me.windowParent.close();
        }
    },
    saveArchivo: function(btn) {

        var me = this,
                form = btn.up('formarchivos'),
                basicForm = form.getForm();

        if (me.isRelacion)
        {
//            msgOut('entro1');
            
             if (basicForm.isValid()) {
                form.setLoading("Relacionando FE...");
                basicForm.submit({
                     params :{
                         archNUMERO: me.polizaNumero, 
                         archTIPO_POLIZA:  me.polizaTipo,
                         archFECHA: me.polizaFecha
                     },
                     url:'UploadDocumentFE/relacion',
                    success: function(form2, action) {
//                        msgOut("success");
//                        msgOut(action);
                        //var sec = action.result.msg;
                        Ext.Msg.alert('Relacion', 'El Archivo se relaciono Correctamente:' + action.result.msg);

                        var numero = action.result.msg;

                    //    me.loadPage('AppFEPolizas.view.ContainerFe');
                 //       me.buscaImportes(numero);
                         me.cierraWindow();
                        form.setLoading(false);
                         me.storePolizas.loadData([], false);

            me.storePolizas.load({
                //url: dirBus,
                callback: function(val1, val2, val3) {
                    //grid.setLoading(false);
                }
            });

                    },
                    failure: function(form2, action) {

                        if (Ext.isEmpty(action.result.numero)) {
                            Ext.Msg.alert('Error', action.result.msg);
                        } else {
                            Ext.MessageBox.show({
                                title: 'Factura',
                                msg: action.result.msg,
                                buttons: Ext.MessageBox.YESNO,
                                buttonText: {
                                    yes: "Ver poliza",
                                    no: "No"
                                },
                                fn: function(btn) {
                                    if (btn === 'yes') {


                                        me.buscaPolizaStore(action.result.numero, action.result.tipoPoliza, action.result.fecha);
                                        me.cierraWindow();

                                    } else {
                                        me.cierraWindow();
                                    }
                                }
                            });
                        }


                        form.setLoading(false);
                    }
                });


            } else {

                form.getFields().each(function(item) {
                    if (!item.isValid()) {
                        msgBoxErr("Error falta un campo", item.name);
                        return;
                    }

                });
            }


        } else {
            if (basicForm.isValid()) {
                form.setLoading("Procesando FE...");
                basicForm.submit({
                    success: function(form2, action) {
//                        msgOut("success");
//                        msgOut(action);
                        //var sec = action.result.msg;
                        Ext.Msg.alert('Guardado', 'El Archivo se guardo Correctamente:' + action.result.msg);

                        var numero = action.result.msg;
                        if(!Ext.isEmpty( action.result.numeroFe)){
                            numero =  action.result.numeroFe;
                        }
                        me.loadPage('AppFEPolizas.view.ContainerFe');
                        me.buscaImportes(numero);
                        form.setLoading(false);

                    },
                    failure: function(form2, action) {

                        if (Ext.isEmpty(action.result.numero)) {
                           
                            Ext.Msg.alert('Error', action.result.msg);
                        } else {
                            Ext.MessageBox.show({
                                title: 'Factura',
                                msg: action.result.msg,
                                buttons: Ext.MessageBox.YESNO,
                                buttonText: {
                                    yes: "Ver poliza",
                                    no: "No"
                                },
                                fn: function(btn) {
                                    if (btn === 'yes') {


                                        me.buscaPolizaStore(action.result.numero, action.result.tipoPoliza, action.result.fecha);
                                        me.cierraWindow();

                                    } else {
                                        me.cierraWindow();
                                    }
                                }
                            });
                        }


                        form.setLoading(false);
                    }
                });


            } else {

                form.getFields().each(function(item) {
                    if (!item.isValid()) {
                        msgBoxErr("Error falta un campo", item.name);
                        return;
                    }

                });
            }
        }//Fin else si es relacion  o no
    },
    buscaImportes: function(numero) {
        var me = this,
                gridFeDet = me.getGridDetFe(),
                form = me.getFormFe().getForm(),
                records = gridFeDet.getSelectionModel().getSelection(),
                store = gridFeDet.getStore();

        form.findField('txtNUMEROFE').setValue(numero);
        form.findField('feFECHA').setValue(Ext.Date.dateFormat(new Date(), 'd/m/Y'));

        form.findField('cbofeTIPO_POLIZA').setValue('D');

        var radio1 = form.findField('radioTipoOrigenGrp').items.get(0).getGroupValue();
        var radio2 = form.findField('radioTipoOrigenGrp').items.get(1).getGroupValue();


        var origen = 'pp';

        me.datosFacturas(numero);

        store.proxy.extraParams.numero = numero;

        gridFeDet.setLoading('Buscando...');
        store.loadData([], false);
        store.currentPage = 1;
        store.load({
            callback: function() {
                gridFeDet.setLoading(false);


            }
        });



    },
    addDetFe: function(cellEditing) {
        var me = this,
                gridFeDet = me.getGridDetFe(),
                records = gridFeDet.getSelectionModel().getSelection(),
                storeFeDet = gridFeDet.getStore();

        var record = records[0];




        var model = new AppFEPolizas.model.ModeloDetFe({
            CUENTA: "",
            NOMCUENTA: "",
            RFC: "",
            IMPORTE: "0.0",
            TIPO_IMPORTE: ""


        });


        storeFeDet.insert(0, model);
        cellEditing.startEditByPosition({
            row: 0,
            column: 4
        });
    },
    loadPage: function(aplication) {
        var me = this,
                panelContenido = me.getContainerContenido();


        panelContenido.setLoading("Cargando...");
        panelContenido.removeAll(true);

        var panelGenerico = Ext.create(aplication);

        panelContenido.add(panelGenerico);

//        panelGenerico.on('Add', function(value) {
//            panelContenido.removeAll(true);
//            me.loadPage(value);
//
//
//        });


        panelContenido.setLoading(false);
    }







});
