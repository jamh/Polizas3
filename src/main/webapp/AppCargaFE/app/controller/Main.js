Ext.define('AppCargaFE.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: [
        'StoreArchivos',
        'StoreDirectorios',
        'StoreBuscaFactura',
        'StorePolRel'
    ],
    models: [
        'ModeloArchivos',
        'ModeloDirectorios',
        'ModeloBuscaFactura',
        'ModeloPolRel'
    ],
    refs: [
        {
            ref: 'gridArchivos',
            selector: 'gridarchivos'
        },
        {
            ref: 'gridDirectorios',
            selector: 'griddirectorios'
        },
        {
            ref: 'formArchivos',
            selector: 'formarchivos'
        },
        {
            ref: 'appMain',
            selector: 'app-main'
        },
        {
            ref: 'formSat',
            selector: 'formsat'
        },
        {
            ref: 'formRelacionPol',
            selector: 'formrelacionpol'
        },
        {
            ref: 'gridPolRel',
            selector: 'gridpolrel'
        },
        {
            ref:'formPolMult',
            selector:'formpolmult'
        }

    ],
    views: [
        'GridArchivos',
        'GridDirectorios',
        'Main',
        'FormArchivos',
        'WindowArchivos',
        'FormRelacionPol',
        'WindowRelacionPol',
        'FormSat',
        'WindowSat',
        'GridPolRel',
        'FormPolMult',
        'WindowPolMult'

    ],
    paginaAnt: 1,
    calendarioSys: '',
    periodoSys: '',
    init: function() {
        Ext.Ajax.timeout = 240000;
        Ext.override(Ext.data.proxy.Ajax, {timeout: 240000});
        var me = this;
        me.control({
            formpolmult:{
                
                savePolMult: function(){
                    
                    me.guardarArchivosMult();
                    
                }                
            },
            
            gridpolrel: {
                
                 afterrender: function() {
                  
                   me.findPolRel();

                },
                borraFERelacionPol: function(){
                    me.borraFERelacionPol();
                },
                verPoliza2: function() {
                    me.imprimirPoliza2();
                }
                
            },
            gridarchivos: {
                relacionaPolExistente:function(){
                    
                    me.relacionaPolExistente();
                    
                },
                afterrender: function() {
                    me.findCompania();
                    me.buscaFechaSistema();
                    //  me.findArchivos();

                },
                buscaPorFecha: function(calendario, periodo) {

                    msgOut(calendario + periodo);

                    me.buscaPorFecha(calendario, periodo);


                },
                select: function(view, model, index) {
                    var me = this,
                            grid = me.getGridArchivos();

                    var selection = grid.getSelectionModel().getSelection();

                    var record = selection[0];

                    if (Ext.isEmpty(record.data.IVA)) {

                        record.data.IVA = 0;

                    }
                    if (Ext.isEmpty(record.data.SERIE)) {

                        record.data.SERIE = 'N/A';

                    }
                    if (Ext.isEmpty(record.data.TIPO_CAMBIO)) {

                        record.data.TIPO_CAMBIO = 'N/A';

                    }
                    if (Ext.isEmpty(record.data.MONEDA)) {

                        record.data.MONEDA = 'N/A';

                    }


                    var bookTplMarkup = [
                        '<div class="feDetails">',
                        '<ul>',
                        '<li><b>Compa&ntilde;ia:</b> {COMPANIA}</li>',
                        '<li><b>Serie:</b> {SERIE}</li>',
                        '<li><b>Numero:</b> {NUMERO}</li>',
                        '<li><b>Fecha:</b> {FECHA}</li>',
                        '<li><b>UUID:</b> {UUID}</li>',
                        '<li><b>RFC emisor:</b> {RFC_EMISOR}</li>',
                        '<li><b>Nombre Emisor:</b> {NOMBRE_EMISOR}</li>',
                        '<li><b>Pdf:</b> {PDF}</li>',
                        '<li><b> Xml:</b> {XML}</li>',
                        '</ul>',
                        '</div>',
                        '<div class="feDetails2">',
                        '<ul>',
                        '<li><b>RFC receptor:</b>  {RFC_RECEPTOR}</li>',
                        '<li><b>Nombre receptor:</b>  {NOMBRE_RECEPTOR}</li>',
                        '<li><b>Descripci&oacute;n:</b>  {DESCRIPCION}</li>',
                        '<li><b>Subtotal:</b>  {SUBTOTAL}</li>',
                        '<li><b>Total:</b>  {TOTAL}</li>',
                        '<li><b>Iva:</b>  {IVA}</li>',
                        '<li><b>Tipo de Cambio:</b>  {TIPO_CAMBIO}</li>',
                        '<li><b>Moneda:</b>  {MONEDA}</li>',
                        '</ul>',
                        '</div>'





                    ];
                    var bookTpl = Ext.create('Ext.Template', bookTplMarkup);
                    var detailPanel = Ext.getCmp('detailPanel');
                    detailPanel.update(bookTpl.apply(record.data));


                },
                actIdConGasto: function(val, col) {
                    msgOut(val.valueModels[0].data.NO_CASO);
                    me.actIdConGasto(val.valueModels[0].data.NO_CASO, col);
                },
                beforecheckPoliza: function(index, checked) {


                    me.beforecheckPoliza(index, checked);

                },
                actFechaPol: function(val, col) {

                    msgOut(val);

                    me.actFechaPol(val, col);

                },
                selectAll: function(widget, col) {
                    this.selTodos(col);
                },
                deSelectAll: function(widget, col) {
                    this.desSelTodos(col);
                },
                relacionarPoliza: function() {
//                        msgOut("relacionarPoliza");
                    this.relacionarPoliza();
                },
                quitarRelacionPoliza: function() {
                    me.preguntaQuitarRelacion();
                },
                validaSat: function(val, col) {

                    me.validaSat(val, col);
                },
                addArchivo: function(btn) {
                    me.addArchivo(btn);
                },
                deleteArchivo: function(btn) {
                    me.deleteArchivo(btn);
                },
                guardarArchivos: function() {
                    me.guardarArchivos();
                },
                guardarArchivosMult:function(){
                    
                    me.selectDatosPol();
                    
                    //me.guardarArchivosMult();
                },
                recargarArchivo: function() {
                    me.findArchivos();
                },
                setConcGasto: function(conc) {
                    me.setConcGasto(conc);
                },
                verPoliza: function() {
                    me.imprimirPoliza();
                },
                verPDF: function() {
                    me.imprimirPDF();
                },
                verXML: function() {

                    me.imprimirXML();

                },
                descargaSat: function(btn) {
                    me.descargaSat(btn);
                },
                findFactura: function(fact) {
                    me.findArchivos(fact);
                },
                cleanFiltersArch: function() {
                    me.cleanFiltersArch();

                },
                verConvertidor: function() {
                    me.verConvertidor();
                },
                recargaPagina: function(pagina) {
                    if (this.paginaAnt === pagina) {
                        this.paginaAnt = pagina;
                    } else {
                        this.paginaAnt = pagina;
                        me.recargaPagina(pagina);
                    }
                }
            },
            formsat: {
                guardaDatosSat: function(btn) {
                    me.guardaDatosSat(btn);
                }//,

            },
            griddirectorios: {
                afterrender: function() {
                    me.loadDirectorio();

                },
                selectAllDir: function(widget, col) {
                    this.selTodosDir(col);
                },
                deSelectAllDir: function(widget, col) {
                    this.desSelTodosDir(col);
                },
                procesarArchivo: function() {
                    me.procesaDirectorio();
                },
                recargarDirectory: function() {
                    me.loadDirectorio();
                },
                cleanFiltersDir: function() {
                    me.cleanFiltersDir();
                }
            },
            formarchivos: {
                saveArchivo: function(btn) {
                    me.saveArchivo(btn);
                },
                recargarArchivo: function() {
                    me.findArchivos();
                }
            },
            formrelacionpol: {
                saveRelacionPoliza: function(btn) {
                    me.saveRelacionPoliza(btn);
                }

            }


        });
    },
    borraFERelacionPol:function(){
        var me = this,
         grid = me.getGridArchivos(),
         gridPol = me.getGridPolRel(),
              records = grid.getSelectionModel().getSelection(),
              records2 = gridPol.getSelectionModel().getSelection(),
             store=grid.getStore();
          
           var record = records2[0];
           
            if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado polizas");
            return;
           
        }
           
          
          gridPol.setLoading('Eliminando...'); 
            var selection = grid.getSelectionModel().getSelection();
            var data = [];
                
        
            data.push(selection[0].data);
                      
        
            if (Ext.isEmpty(data)) {
                msgBoxErr('Error', 'No existen equipos seleccionados');
                return;
            }
        
            var jsonData = Ext.encode(data);
            
             var selection2 = gridPol.getSelectionModel().getSelection();
              var data2 = [];
                for (var i=0; i < selection2.length; i++) {
                  
                      data2.push(selection2[i].data);
                    
                    
                }
             
             var jsonData2 = Ext.encode(data2);
             
             
        Ext.Ajax.request({
            url: 'relacionpoliza/deletefacturasxpoliza2',
            timeout: 60000,
            scope: this,
            params: {
                data: jsonData,
                data2: jsonData2


            },
            success: function(response) {
                var text = response.responseText;
                 gridPol.setLoading(false); 
                msgOut("text" + text);



            },
            callback: function(a, b, c) {
                gridPol.setLoading(false); 


                if (Ext.isEmpty(c.responseText)) {
                    msgBoxErr('Error', 'Error de comunicacion al Guardar');
                    return;
                }
                var res = Ext.decode(c.responseText);
                msgOut("res" + res);
                if (res.success) {

                    msgBox('Eliminar', res.msg);

                    me.findPolRel();
                } else {
                    msgBoxErr('Error', res.msg);
                }
            }
        });


        
        
    },
    relacionaPolExistente: function(){
    
      var me = this,
              
              
              grid = me.getGridArchivos(),
              store=grid.getStore(),
                 records = grid.getSelectionModel().getSelection();
        var record = records[0];

    
        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado la poliza");
            return;
           // msgOut('record existente'+record);
        }
        msgOut('record existente'+record);
       var window=  Ext.create('Ext.window.Window', {
            title: 'Relacion Polizas',
            height: 480,
            width: 800,
             modal: true,
            layout: 'fit',
            items: [
                {
                xtype:'gridpolrel'
            }
            ],
               listeners:{
                beforeclose:function(win) {
                    
                   me.findArchivos();

                }
            }
               
            
        }).show();
    },
    findPolRel: function(){
         var me = this,
                 
                grid = me.getGridPolRel(),
                store = grid.getStore(),
                gridArch = me.getGridArchivos(),
               
                records = gridArch.getSelectionModel().getSelection();
                var record = records[0];
                
                var numero = record.get('NUMERO');
        
        store.proxy.extraParams.numero_fe = numero;
      
        grid.setLoading('Buscando...');
        store.loadData([], false);
        store.currentPage = 1;
        store.load({
            callback: function() {
                grid.setLoading(false);
            }
        });  
        
    },
    
    buscaFechaSistema: function() {

        Ext.Ajax.request({
            url: 'process/data/BuscaFechaSystema',
            method: 'GET',
            params: {
                origen: 'P'
            },
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    this.calendarioSys = val.data[0].CALENDARIO;

                    this.periodoSys = val.data[0].PERIODO;

                    msgOut('this.calendarioSys' + this.calendarioSys);

                    this.findArchivos();


                } else if (!val.success) {
                }
            },
            timeout: 30000

        });


    },
    buscaPorFecha: function(calendario, periodo) {

        this.calendarioSys = calendario;

        this.periodoSys = periodo;


        this.findArchivos2('', calendario, periodo);





    },
    findArchivos2: function(factura, calendario, periodo) {

        var me = this,
                gridArch = me.getGridArchivos(),
                storeArch = gridArch.getStore();
        if (Ext.isEmpty(factura))
            factura = '';
        if (Ext.isEmpty(calendario)) {
            calendario = this.calendarioSys;
            Ext.getCmp('cboCalendarioFeCxp').setValue(calendario);
        }
        if (Ext.isEmpty(periodo)) {
            periodo = this.periodoSys;

            Ext.getCmp('cboPeriodoFeCxp').setValue(periodo);

        }

        storeArch.proxy.extraParams.FACTURA = factura;
        storeArch.proxy.extraParams.calendario = calendario;
        storeArch.proxy.extraParams.periodo = periodo;

        msgOut("show 6");
        gridArch.setLoading('Buscando...');
        storeArch.loadData([], false);
        storeArch.currentPage = 1;
        storeArch.load({
            callback: function() {
                gridArch.setLoading(false);
            }
        });
    },
    recargaPagina: function(pagina, factura) {

        msgOut("pagina" + pagina);

        var me = this,
                gridArch = me.getGridArchivos(),
                storeArch = gridArch.getStore();
        if (Ext.isEmpty(factura))
            factura = '';
        storeArch.proxy.extraParams.FACTURA = factura;

        gridArch.setLoading('Buscando...');
        storeArch.loadData([], false);
        storeArch.currentPage = pagina;
        storeArch.load({
            callback: function() {
                gridArch.setLoading(false);
            }
        });


    },
    validaSat: function(val, col) {

        var me = this,
                grid = me.getGridArchivos();

        //   store = grid.getStore();

        // store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {
            var data = [];
            for (var i = 0; i < selection.length; i++) {

                var record = selection[i];

                data.push(record.data);

                // msgOut("data"+data);

                var jsonData = Ext.encode(data);
                if (Ext.isEmpty(data)) {
                    msgBoxErr('Error', 'No existen equipos seleccionados');
                    return;
                }

            }
        } else {

            var record = selection[0];

            var data = [];

            data.push(record.data);

            msgOut("data" + data);

            var jsonData = Ext.encode(data);

            msgOut("jsonData" + jsonData);
            if (Ext.isEmpty(data)) {
                msgBoxErr('Error', 'No existen equipos seleccionados');
                return;
            }



        }


        grid.setLoading('Buscando...');
        Ext.Ajax.request({
            url: 'validaSAT/valida',
            timeout: 60000,
            scope: this,
            params: {
                data: jsonData


            },
            success: function(response) {
                var text = response.responseText;
                grid.setLoading(false);
                //  msgOut("text"+text);



            },
            callback: function(a, b, c) {
                grid.setLoading(false);


                if (Ext.isEmpty(c.responseText)) {
                    msgBoxErr('Error', 'Error de comunicacion al Guardar');
                    return;
                } else
                    me.findArchivos();

            }
        });





    },
    
   
    processDescargaSAT:function() {
        var me = this;
        Ext.Ajax.request({
            url: "ABC.action",
            form: 'formname',
            params: {
                method: "Serversidehandler"
            },
            success: me.processSuccessDescargaSAT,
            failure: processFail
        });
   },

   processSuccessDescargaSAT:function(request) {
        var elapsedTime = 0;
        if (request.responseText != null) {
            var responseJSON = Ext.decode(request.responseText);
            var response = responseJSON.response;
            if (response != null) {
                if (response == "A") {
                    // do something
                }
                else if (response == "B") {
                    elapsedTime = (new Date().getTime()) - startTime;
                    if (elapsedTime <= 2000) {
                        process() // main method called again
                    };
                }
            }
        }
    },
    
    guardaDatosSat: function(btn) {

        var me = this,
                form1 = btn.up('formsat'),
                win = form1.up('window'),
                basicForm = form1.getForm();

        var bandera = basicForm.findField('txtSaveDat').getValue();
        var secuencia = basicForm.findField('txtSecuencia').getValue();




        // if (bandera === true) {

        if (basicForm.isValid()) {
            form1.setLoading("Guardando Datos...");
            basicForm.submit({
                params: {
                    txtSaveDat: bandera
                },
                success: function(form, action) {

                    win.close();
                    Ext.Msg.alert('Guardado', action.result.msg);


                    Ext.Ajax.request({
                        url: 'process/data/BuscaRfcCfdi',
                        method: 'GET',
                        scope: this,
                        callback: function(records, operation, success) {
                            if (Ext.isEmpty(success.responseText))
                                return;
                            var val = Ext.decode(success.responseText);
                            if (Ext.isEmpty(val))
                                return;
                            if (val.success) {
                                var secuencia = val.data[0].ID;
                                var rfc = val.data[0].RFC;
                                var password = val.data[0].PASSWORD;


                                basicForm.findField('txt_RFC').setValue(rfc);
                                basicForm.findField('txtPassword').setValue(password);
                                basicForm.findField('txtSecuencia').setValue(secuencia);
                                basicForm.findField('txtSaveDat').setValue(true);

                            } else if (!val.success) {
                            }
                        },
                        timeout: 30000

                    });

                    form1.setLoading(false);



                },
                failure: function(form, action) {
                    form1.setLoading(false);
                    Ext.Msg.alert('Error', 'Error en la lectura de las facturas');
                }
            });


        } else {

            basicForm.getFields().each(function(item) {
                if (!item.isValid()) {
                    msgBoxErr("Error falta un campo", item.name);
                    return;
                }

            });
        }

//
//        } else {
//
//            if (Ext.isEmpty(secuencia)) {
//
//                form1.setLoading("Leyendo xml...");
//                basicForm.submit({
//                    url: 'CfdiSat/readXml',
//                    success: function(form, action) {
//
//                        Ext.Msg.alert('Xml', action.result.msg);
//
//                        basicForm.reset();
//                        form1.setLoading(false);
//
//
//
//                    },
//                    failure: function(form, action) {
//                        form1.setLoading(false);
//                        Ext.Msg.alert('Error', action.result.msg);
//                    }
//                });
//
//
//            } else {
//
//
//                form1.setLoading("Borrando Datos...");
//                basicForm.submit({
//                    url: 'CfdiSat/deleteDatos',
//                    success: function(form, action) {
//
//                        Ext.Msg.alert('Borrado', action.result.msg);
//
//                        basicForm.reset();
//                        form1.setLoading(false);
//
//
//
//                    },
//                    failure: function(form, action) {
//                        form1.setLoading(false);
//                        Ext.Msg.alert('Error', action.result.msg);
//                    }
//                });
//
//
//
//
//
//
//            }
//
//
//
//
//        }
//
//



    },
    descargaSat: function(btn) {
        var view = Ext.widget('windowsat');
        view.setTitle('Descarga Sat');
        //   me.findRfcCfdi(btn);
        var basicForm = view.down('formsat').getForm();


        Ext.Ajax.request({
            url: 'process/data/BuscaRfcCfdi',
            method: 'GET',
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var secuencia = val.data[0].ID;
                    var rfc = val.data[0].RFC;
                    var password = val.data[0].PASSWORD;


                    basicForm.findField('txt_RFC').setValue(rfc);
                    basicForm.findField('txtPassword').setValue(password);
                    basicForm.findField('txtSecuencia').setValue(secuencia);
                    basicForm.findField('txtSaveDat').setValue(true);

                } else if (!val.success) {
                }
            },
            timeout: 30000

        });

    },
    verConvertidor: function() {

        var me = this,
                grid = me.getGridArchivos(),
                store = grid.getStore();

        var controllerFE = me.getController('AppConvertidor.controller.Main');


        controllerFE.idconcgastoFiltro = "and idconcgasto not in ('CPP','PFC','PFS','PFP')";


        var vista = controllerFE.getView(controllerFE.views[0]).create();

        var window = Ext.create('Ext.window.Window', {
            title: 'Convertidor',
            height: 600,
            maximizable: true,
            width: 800,
            modal: true,
            layout: 'fit'
                    // items: [vista]


        }).show();
        //  controllerFE.windowParent = window;

        window.add(vista);
        window.show();

    },
    beforecheckPoliza: function(index, checked) {

        var me = this,
                grid = me.getGridArchivos(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        msgOut("index" + index);
        var record = records[index];


        var record = store.getAt(index);
        msgOut(record.data);

        msgOut(record.get('FLAG_POLIZA'));
        //msgOut("numero1111"+record.get('NUMERO_POL'));


        if (checked === true) {
            if (!Ext.isEmpty(record.get('NUMERO_POL'))) {

//                  store.each(function(rec) {
//            
//           
//                msgOut(rec);
//                rec.set('FLAG_POLIZA', false);
//            
//                    
//                  
//        });

                msgOut(record.get('FLAG_POLIZA'));
                record.set('FLAG_POLIZA', false);
                msgOut(record.get('FLAG_POLIZA'));
                msgBoxErr("Error", "Este registro ya tiene una poliza generada");

                return;
            }


        }


//        if (!Ext.isEmpty(record.get('NUMERO_POL'))) {
//            
//            record.set('FLAG_POLIZA',false);
//            msgBoxErr("Error", "Este registro ya tiene una poliza generada");
//            
//            return;
//        }


    },
    deleteArchivo: function() {

        var me = this,
                grid = me.getGridArchivos(),
                records = grid.getSelectionModel().getSelection(),
                storeArch = grid.getStore();

        var selection = grid.getSelectionModel().getSelection();

        // var record = selection[0];

        if (Ext.isEmpty(selection)) {
            msgBoxErr("Error", "No ha seleccionado ningun registro");
            return;
        }

        Ext.MessageBox.show({
            title: 'Cancelar Factura',
            msg: 'Esta seguro que desea borrar la Factura?\n\
                  Este proceso borrara el archivo del servidor.',
            icon: Ext.MessageBox.WARNING,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {


                    var data = [];

                    for (var i = 0; i < selection.length; i++) {

                        var record = selection[i];

                        data.push(record.data);

                        msgOut('data', data);


                    }




                    //      msgOut('data',data);






                    var jsonData = Ext.encode(data);
                    if (Ext.isEmpty(data)) {
                        msgBoxErr('Error', 'No existen equipos seleccionados');
                        return;
                    }




                    grid.setLoading("Borrando Factura...");
                    Ext.Ajax.request({
                        url: 'processFactura/deleteFact',
                        timeout: 120000,
                        scope: this,
                        params: {
                            data: jsonData


                        },
                        success: function(response) {


                            storeArch.proxy.extraParams.query = "";

                            grid.setLoading(false);
                            grid.setLoading('Buscando...');
                            storeArch.loadData([], false);
                            storeArch.load({
                                callback: function() {
                                    grid.setLoading(false);

                                    //var bookTpl = Ext.create('Ext.Template', bookTplMarkup);
                                    var detailPanel = Ext.getCmp('detailPanel');
                                    detailPanel.update('Seleccione un registro para ver sus detalles.');

                                }
                            });

                        },
                        callback: function(a, b, c) {
                            grid.setLoading(false);
                            if (Ext.isEmpty(c.responseText)) {
                                msgBoxErr('Error', 'Error al Eliminar');
                                return;

                            }
                            var res = Ext.decode(c.responseText);
                            if (res.success) {

                                msgBox('Borrado', res.msg);

                            } else {

                                msgBoxErr('Error en el Borrado', res.msg);

                            }
                        }
                    });


                }

            }

        });

    },
    cleanFiltersDir: function() {

        var me = this,
                grid = me.getGridDirectorios();
        grid.filters.clearFilters();

    },
    cleanFiltersArch: function() {
        var me = this,
                grid = me.getGridArchivos();
        grid.filters.clearFilters();
    },
    relacionarPoliza: function() {

        var me = this,
                grid = me.getGridArchivos();

        // form = me.getFormRelacionPol().getForm(),



        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {

            for (var i = 0; i < selection.length; i++) {

                var record = selection[i];

//                   msgOut(record.get('FOLIO'));
                var folio = record.get('FOLIO');
                var numePol = record.get('NUMERO_POL');
                if (!Ext.isEmpty(numePol)) {
                    msgBoxErr('Error', 'La factura con folio: ' + folio + ' ya tiene una poliza relacionada');
                    return;
                }




            }
        } else {

            var record = selection[0];

            var folio = record.get('FOLIO');
            var numePol = record.get('NUMERO_POL');
            if (!Ext.isEmpty(numePol)) {
                msgBoxErr('Error', 'La factura con folio: ' + folio + ' ya tiene una poliza relacionada');
                return;
            }



        }


        me.datosPoliza();



    },
    datosPoliza: function() {



        var view = Ext.widget('windowrelacionpol');
        view.setTitle('Relacionar Poliza');
//           var form = view.down('formrelacionpol').getForm();
    },
    preguntaQuitarRelacion: function() {

        var me = this;


        Ext.MessageBox.show({
            title: 'Quitar Relacion',
            msg: 'Esta seguro que desea quitar la Relacion?',
            icon: Ext.MessageBox.QUESTION,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {

                    me.quitarRelacionPolizaFE();

                }
            }
        });

    },
    quitarRelacionPolizaFE: function() {



        var me = this,
                grid = me.getGridArchivos(),
                store = grid.getStore();

        // store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {
            var data = [];
            for (var i = 0; i < selection.length; i++) {

                var record = selection[i];

                msgOut(record.get('FOLIO'));
                var folio = record.get('FOLIO');
                var numePol = record.get('NUMERO_POL');
                if (Ext.isEmpty(numePol)) {
                    msgBoxErr('Error', 'Esta factura no esta Relacionada');
                    return;
                }
                var fecha = record.data.FECHA_POL;
                if (Ext.isDate(fecha)) {
                    var fechaNV = Ext.Date.format(fecha, 'd/m/Y');
                    record.data.FECHA_POL = fechaNV;
                }
                data.push(record.data);

                msgOut("data" + data);

                var jsonData = Ext.encode(data);
                if (Ext.isEmpty(data)) {
                    msgBoxErr('Error', 'No existen equipos seleccionados');
                    return;
                }



            }
        } else {

            var record = selection[0];

            var folio = record.get('FOLIO');
            var numePol = record.get('NUMERO_POL');
            if (Ext.isEmpty(numePol)) {
                msgBoxErr('Error', 'Esta factura no esta Relacionada');
                return;
            }

            var data = [];
            var fecha = record.data.FECHA_POL;
            msgOut("fecha_pol" + fecha);
            if (Ext.isDate(fecha)) {
                var fechaNV = Ext.Date.format(fecha, 'd/m/Y');
                record.data.FECHA_POL = fechaNV;
            }
            data.push(record.data);

            msgOut("data" + data);

            var jsonData = Ext.encode(data);
            if (Ext.isEmpty(data)) {
                msgBoxErr('Error', 'No existen equipos seleccionados');
                return;
            }



        }




        Ext.Ajax.request({
            url: 'relacionpoliza/deletefacturasxpoliza',
            timeout: 60000,
            scope: this,
            params: {
                data: jsonData


            },
            success: function(response) {
                var text = response.responseText;
                grid.setLoading(false);
                msgOut("text" + text);



            },
            callback: function(a, b, c) {
                grid.setLoading(false);


                if (Ext.isEmpty(c.responseText)) {
                    msgBoxErr('Error', 'Error de comunicacion al Guardar');
                    return;
                }
                var res = Ext.decode(c.responseText);
                msgOut("res" + res);
                if (res.success) {

                    msgBox('Eliminar', res.msg);

                    store.load();
                } else {
                    msgBoxErr('Error', res.msg);
                }
            }
        });






    },
    saveRelacionPoliza: function(btn) {

        var me = this,
                // form = me.getFormRelacionPol().getForm(),
                grid = me.getGridArchivos(),
                form1 = btn.up('formrelacionpol'),
                win = form1.up('window'),
                form = form1.getForm(),
                store = grid.getStore();

        // store.suspendEvents();
        var jsonData;
        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {
            var data = [];
            for (var i = 0; i < selection.length; i++) {

                var record = selection[i];

//                   msgOut(record.get('FOLIO'));
                var folio = record.get('FOLIO');
                var numePol = record.get('NUMERO_POL');
                if (!Ext.isEmpty(numePol)) {
                    msgBoxErr('Error', 'La factura con folio: ' + folio + ' ya tiene una poliza relacionada');
                    return;
                }
                data.push(record.data);

//                   msgOut("data"+data);

                jsonData = Ext.encode(data);
                if (Ext.isEmpty(data)) {
                    msgBoxErr('Error', 'No existen equipos seleccionados');
                    return;
                }

//                    me.datosPoliza(jsonData);

            }
        } else {

            var record = selection[0];

            var folio = record.get('FOLIO');
            var numePol = record.get('NUMERO_POL');
            if (!Ext.isEmpty(numePol)) {
                msgBoxErr('Error', 'La factura con folio: ' + folio + ' ya tiene una poliza relacionada');
                return;
            }

            var data = [];

            data.push(record.data);

//                   msgOut("data"+data);

            jsonData = Ext.encode(data);
            if (Ext.isEmpty(data)) {
                msgBoxErr('Error', 'No existen equipos seleccionados');
                return;
            }

//                    me.datosPoliza(jsonData);

        }
        //store.resumeEvents();
        //grid.getView().refresh();

        //msgOut("numero"+form.findField('cboNumeroPol').getValue());

        var tipo_pol = form.findField('cboTipoPolizaFE').getValue();
        var numero = form.findField('cboNumeroPol').getValue();
        var fecha = form.findField('dtFechaPol').getRawValue();



        if (form.isValid()) {
            form1.setLoading("Generando Relacion...");

//            grid.setLoading("Generando Relacion...");
//            
//              form1.setLoading("Relacionando FE...");
//                form.submit({
//                     params :{
//                        data: jsonData, 
//                        tipo_pol: tipo_pol,
//                        numero:numero,
//                        fecha : fecha
//                     },
//                     url: 'relacionpoliza/facturasxpoliza',
//                    success: function(form2, action) {
////                        msgOut("success");
////                        msgOut(action);
//                        //var sec = action.result.msg;
//                        Ext.Msg.alert('Relacion', 'El Archivo se relaciono Correctamente:' + action.result.msg);
//
//                     store.load();    
//                  grid.setLoading(false);
//                        form1.setLoading(false);
//                   win.close();
//
//                    },
//                    failure: function(form2, action) {
//
//                        
//                            Ext.Msg.alert('Error', action.result.msg);
//                       
//                        store.load();
//                       grid.setLoading(false);
//                        form1.setLoading(false);
//                        win.close();
//                    }
//                });

            Ext.Ajax.request({
                url: 'relacionpoliza/facturasxpoliza',
                timeout: 60000,
                scope: this,
                params: {
                    data: jsonData,
                    tipo_pol: tipo_pol,
                    numero: numero,
                    fecha: fecha

                },
                success: function(response) {
                    var text = response.responseText;
                    grid.setLoading(false);
                    msgOut("text" + text);
                    form1.setLoading(false);
                    win.close();


                },
                callback: function(a, b, c) {
                    grid.setLoading(false);
                    win.close();
                    form1.setLoading(false);
                    if (Ext.isEmpty(c.responseText)) {
                        msgBoxErr('Error', 'Error de comunicacion al Guardar');
                        return;
                    }
                    var res = Ext.decode(c.responseText);
                    msgOut("res" + res);
                    if (res.success) {

                        msgBox('Guardar', res.msg);
                        win.close();
                        store.load();
                    } else {

                        msgBoxErr('Error', res.msg);

                    }
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



    },
    selTodos: function(col) {
        var me = this,
                grid = me.getGridArchivos(),
                store = grid.getStore();
        store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {
            for (var i = 0; i < selection.length; i++) {
                msgOut("dentro de select: " + selection[i].data.FLAG_POLIZA);

                var record = selection[i];
                if (Ext.isEmpty(record.get('NUMERO_POL'))) {
                    record.set('FLAG_POLIZA', true);
                } else {

                    record.set('FLAG_POLIZA', false);
                }
            }
        } else {
            
            


            store.each(function(rec) {
                //rec.set(col, true);

                if (Ext.isEmpty(rec.get('NUMERO_POL'))) {

                    rec.set('FLAG_POLIZA', true);

                } else {

                    rec.set('FLAG_POLIZA', false);
                }


            });
        }
        store.resumeEvents();
        grid.getView().refresh();
    },
    selTodosDir: function(col) {
        var me = this,
                grid = me.getGridDirectorios(),
                store = grid.getStore();
        store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {
            for (var i = 0; i < selection.length; i++) {
                msgOut("dentro de select: " + selection[i].data.FLAG_CARGA);

                var record = selection[i];
                record.set('FLAG_CARGA', true);
            }
        } else {

            store.each(function(rec) {
                //rec.set(col, true);

                //  if(col==='FLAG_CARGA'){

                rec.set('FLAG_CARGA', true);

                //  }


            });
        }
        store.resumeEvents();
        grid.getView().refresh();
    },
    actIdConGasto: function(val, col) {

        var me = this,
                grid = me.getGridArchivos(),
                store = grid.getStore();
        store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {
            for (var i = 0; i < selection.length; i++) {
                msgOut("dentro de select: " + selection[i].data.NOMIDCONCGASTO);

                var record = selection[i];
                if (Ext.isEmpty(record.get('NUMERO_POL'))) {
                    record.set('NOMIDCONCGASTO', val);
                    record.set('NO_CASO', val);
                }

            }
        } else {
            
                  var selectGrid = grid.getSelectionModel().getSelection()[0];
            
                  selectGrid.set('NOMIDCONCGASTO', val);
                  selectGrid.set('NO_CASO', val);
//            store.each(function(rec) {
//                //rec.set(col, true);
//
//
//                if (col === 'NOMIDCONCGASTO') {
//
//                    if (Ext.isEmpty(rec.get('NUMERO_POL'))) {
//                        rec.set('NOMIDCONCGASTO', val);
//                        rec.set('NO_CASO', val);
//                    }
//
//                }
//
//
//            });
        }
        store.resumeEvents();
        grid.getView().refresh();

    },
    actFechaPol: function(val, col) {

        var me = this,
                grid = me.getGridArchivos(),
                store = grid.getStore();
        store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {
            for (var i = 0; i < selection.length; i++) {
                msgOut("dentro de select: " + selection[i].data.FECHA_POL);

                var record = selection[i];
                if (Ext.isEmpty(record.get('NUMERO_POL'))) {

                    record.set('FECHA_POL', val);
                }
            }
        } else {
            
            var selectGrid = grid.getSelectionModel().getSelection()[0];
            
                  selectGrid.set('FECHA_POL', val);
//            store.each(function(rec) {
//                //rec.set(col, true);
//
//                msgOut('col' + col);
//                if (col === 'FECHA_POL') {
//                    if (Ext.isEmpty(rec.get('NUMERO_POL'))) {
//
//                        rec.set('FECHA_POL', val);
//                    }
//
//
//                }
//
//
//            });
        }
        store.resumeEvents();
        grid.getView().refresh();

    },
    desSelTodos: function(col) {
        var me = this,
                grid = me.getGridArchivos(),
                store = grid.getStore();
        store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {
            for (var i = 0; i < selection.length; i++) {
                msgOut("dentro de select: " + selection[i].data.FLAG_POLIZA);

                var record = selection[i];
                record.set('FLAG_POLIZA', false);
            }
        } else {

            store.each(function(rec) {

                //  if(col==='FLAG_POLIZA'){

                rec.set('FLAG_POLIZA', false);

                //}
                //rec.set(col, false);

            });
        }
        store.resumeEvents();
        grid.getView().refresh();
    },
    desSelTodosDir: function(col) {
        var me = this,
                grid = me.getGridDirectorios(),
                store = grid.getStore();
        store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {
            for (var i = 0; i < selection.length; i++) {
                msgOut("dentro de select: " + selection[i].data.FLAG_CARGA);

                var record = selection[i];
                record.set('FLAG_CARGA', false);
            }
        } else {

            store.each(function(rec) {

                //    if(col==='FLAG_CARGA'){

                rec.set('FLAG_CARGA', false);

                //  }
                //rec.set(col, false);

            });
        }
        store.resumeEvents();
        grid.getView().refresh();
    },
    imprimirXML: function() {
        var me = this,
                grid = me.getGridArchivos(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado XML");
            return;
        }
        var compania = record.get('COMPANIA');
        var fecha = record.get('FECHA');
        // xml = xml.replace('.xml', '.pdf');
        // xml = xml.replace('.XML', '.pdf');
        var fechaM = Ext.Date.parse(fecha, 'd/m/Y');
        var mes = (fechaM.getMonth() + 1).toString();
        
        if (mes < 10 && ano < 2018){
            
            mes = '0' + mes;
            
        }
        
        var ano = fechaM.getFullYear().toString();

        var xml = record.get('XML');
        var string;
        if (ano > '2015') {
            string = Ext.String.format(
                    'http://' + window.location.host + '/carga_erp/xml/{0}/{1}/{2}/{3}',
                    //'/empres/XML/{0}/{1}',
                    compania,
                    ano,
                    mes,
                    xml
                    );
        } else {
            string = Ext.String.format(
                    'http://' + window.location.host + '/carga_erp/xml/{0}/{1}',
                    //'/empres/XML/{0}/{1}',
                    compania,
                    xml
                    );
        }

        Ext.create('Ext.window.Window', {
            title: 'XML',
            height: 500,
            width: 500,
            minimizable: true,
            maximizable: true,
            layout: 'fit',
            items: {// Let's put an empty grid in just to illustrate fit layout
                xtype: 'panel',
                //title: 'My PDF',
                width: 600,
                height: 400,
                items: [{
                        xtype: 'component',
                        autoEl: {
                            tag: 'iframe',
                            style: 'height: 100%; width: 100%; border: none',
                            src: string
                        }
                    }

                ],
                buttons: [
                    {
                        text: 'Ver xml en una nueva ventana',
                        scope: this,
                        handler: function(btn) {
//                       var string = Ext.String.format(
//                    'http://' + window.location.host + '/carga_erp/xml/{0}/{1}',
//                    //'/empres/XML/{0}/{1}',
//                    compania,
//                    xml
                            //  );
                            window.open(string);

                            return string;
                        }
                    }
                ]//fin if 

            }

        }).show();

    },
    imprimirPDF: function() {
        var me = this,
                grid = me.getGridArchivos(),
                records = grid.getSelectionModel().getSelection();


        var selection = grid.getSelectionModel().getSelection();


        var dataNum = '';

        for (var i = 0; i < selection.length; i++) {

            var record = selection[i];



            if (i === selection.length - 1) {

                dataNum = dataNum + record.get('NUMERO');

            } else {

                dataNum = dataNum + record.get('NUMERO') + ',';
            }

        }


        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado XML");
            return;
        }
        var compania = record.get('COMPANIA');
        // var xml = record.get('XML');
        var numero = record.get('NUMERO');
        // xml = xml.replace('.XML', '.pdf');

        var string = Ext.String.format(
                'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=REP_COMPROBANTE_CFDI&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&numero={1}&reporte=REP_COMPROBANTE_CFDI',
                compania,
                dataNum
                );




        Ext.create('Ext.window.Window', {
            title: 'PDF',
            height: 500,
            width: 500,
            minimizable: true,
            maximizable: true,
            layout: 'fit',
            items: {// Let's put an empty grid in just to illustrate fit layout
                xtype: 'panel',
                //title: 'My PDF',
                width: 600,
                height: 400,
                items: {
                    xtype: 'component',
                    autoEl: {
                        tag: 'iframe',
                        style: 'height: 100%; width: 100%; border: none',
                        src: string
                    }
                }
            }
        }).show();

        // window.open(string);

    },
    imprimirPoliza: function(value) {
        var me = this,
                grid = me.getGridArchivos(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado la poliza");
            return;
        }
        var compania = record.get('COMPANIA');
        var numero = record.get('NUMERO_POL');
        var tipoPoliza = record.get('TIPO_POLIZA');
        var fecha = record.get('FECHA_POL');

        var fechaM = Ext.Date.parse(fecha, 'd/m/Y');

        var fechaNueva = Ext.Date.format(fechaM, 'dmY');

        fecha = fechaNueva;



        var string = Ext.String.format(
                //'<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
                'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={1}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con&orden=1',
                numero,
                compania,
                tipoPoliza,
                fecha

                );
        Ext.create('Ext.window.Window', {
            title: 'Poliza',
            height: 500,
            width: 500,
            minimizable: true,
            maximizable: true,
            layout: 'fit',
            items: {// Let's put an empty grid in just to illustrate fit layout
                xtype: 'panel',
                //title: 'My PDF',
                width: 600,
                height: 400,
                items: {
                    xtype: 'component',
                    autoEl: {
                        tag: 'iframe',
                        style: 'height: 100%; width: 100%; border: none',
                        src: string
                    }
                }
            }
        }).show();
        //window.open(string);


    },
    
     imprimirPoliza2: function(value) {
        var me = this,
                grid = me.getGridPolRel(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado la poliza");
            return;
        }
        var compania = record.get('COMPANIA_REL');
        var numero = record.get('NUM_POL_REL');
        var tipoPoliza = record.get('TIPO_POL_REL');
        var fecha = record.get('FECHA_POL_REL');

        var fechaM = Ext.Date.parse(fecha, 'd/m/Y');

        var fechaNueva = Ext.Date.format(fechaM, 'dmY');

        fecha = fechaNueva;



        var string = Ext.String.format(
                //'<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
                'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={1}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con',
                numero,
                compania,
                tipoPoliza,
                fecha

                );
        Ext.create('Ext.window.Window', {
            title: 'Poliza',
            height: 500,
            width: 500,
            minimizable: true,
            maximizable: true,
            layout: 'fit',
            items: {// Let's put an empty grid in just to illustrate fit layout
                xtype: 'panel',
                //title: 'My PDF',
                width: 600,
                height: 400,
                items: {
                    xtype: 'component',
                    autoEl: {
                        tag: 'iframe',
                        style: 'height: 100%; width: 100%; border: none',
                        src: string
                    }
                }
            }
        }).show();
        //window.open(string);


    },
    
    setConcGasto: function(conc) {
        msgOut(conc);
        var me = this,
                grid = me.getGridArchivos(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        record.set('NO_CASO', conc);


    },
    selectDatosPol: function(){
        
        var view = Ext.widget('windowpolmult');
        view.setTitle('Poliza por Multiples Facturas');
        var form = view.down('formpolmult').getForm();
       
        
    },
    guardarArchivosMult:function(){
        
         var me = this,
                grid = me.getGridArchivos(),
                records = grid.getSelectionModel().getSelection(),
                  form = me.getFormPolMult(),
                basicForm = form.getForm(),
                win = form.up('window'),
                store = grid.getStore();
        //  var record = records[0];

        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

        if (!Ext.isEmpty(news) || !Ext.isEmpty(modified)) {

            var fechaCam;
            var i = 0;
            if (!Ext.isEmpty(modified)) {

                for (i = 0; i < modified.length; i++) {

                   // fechaCam = Ext.Date.format(modified[i].data.FECHA_POL, 'd/m/Y');
                    modified[i].data.FECHA_POL = basicForm.findField('fechaFeMult').getRawValue();

                }
            }
            if (!Ext.isEmpty(news)) {

                for (i = 0; i < news.length; i++) {

                    //fechaCam = Ext.Date.format(news[i].data.FECHA_POL, 'd/m/Y');
                    news[i].data.FECHA_POL = basicForm.findField('fechaFeMult').getRawValue();

                }
            }


            form.setLoading("Guardando...");
            grid.setLoading("Guardando...");
            grid.store.getProxy().setExtraParam('tipoGenPoliza','2'); 
            grid.store.getProxy().setExtraParam('tipoPolMult',basicForm.findField('cboTipoPolizaFEMult').getValue()); 
            grid.store.getProxy().setExtraParam('tipoProceso','F'); 
            
            store.sync({
                scope: this,
                success: function(resp, dos) {
                    grid.setLoading(false);
                    form.setLoading(false);
                    win.close();
                    
                    if(resp.operations[0].resultSet.records.length > 0){
                    
                      var mensaje = "";
                      
                    
                    for(var i = 0;resp.operations[0].resultSet.records.length > i;i++){
                        
                       
                        mensaje = mensaje + '<p><b>'+resp.operations[0].resultSet.records[i].raw+'</b></p>' ;
                        
                    }
                    
                     Ext.create('Ext.window.Window', {
                                title: 'Paridad',
                                height: 500,
                                width: 500,
                                minimizable: true,
                                maximizable: true,
                                layout: 'fit',
                                items: {// Let's put an empty grid in just to illustrate fit layout
                                    xtype: 'panel',
                                    //title: 'My PDF',
                                    width: 600,
                                    height: 400,
                                    html: mensaje
                                }
                            }).show();
                    
                    } 
                },
                failure: function(resp, dos) {
                    msgBoxErr('Error', 'Error al guardar:' + store.getProxy( ).getReader().rawData.msg);
                    grid.setLoading(false);
                    form.setLoading(false);
                },
                callback: function(records, operation, val3) {
                    grid.setLoading(false);
                    form.setLoading(false);
                    me.findArchivos();
//                    me.procesarPolizas(modified, 0, me, grid);

                }

            });

        }
        
    },
    guardarArchivos: function() {
        var me = this,
                grid = me.getGridArchivos(),
                records = grid.getSelectionModel().getSelection(),
              
                store = grid.getStore();
        //  var record = records[0];

        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

        if (!Ext.isEmpty(news) || !Ext.isEmpty(modified)) {

            console.log('records modificados');






            var fechaCam;
            var i = 0;
            if (!Ext.isEmpty(modified)) {

                for (i = 0; i < modified.length; i++) {

                    fechaCam = Ext.Date.format(modified[i].data.FECHA_POL, 'd/m/Y');
                    modified[i].data.FECHA_POL = fechaCam;

                }
            }
            if (!Ext.isEmpty(news)) {

                for (i = 0; i < news.length; i++) {

                    fechaCam = Ext.Date.format(news[i].data.FECHA_POL, 'd/m/Y');
                    news[i].data.FECHA_POL = fechaCam;

                }
            }



            grid.setLoading("Guardando...");
            
            grid.store.getProxy().setExtraParam('tipoGenPoliza','1'); 
             grid.store.getProxy().setExtraParam('tipoPolMult','');
             grid.store.getProxy().setExtraParam('tipoProceso','F'); 
            
            store.sync({
                scope: this,
                success: function(resp, dos) {
                    grid.setLoading(false);
                    
                    var mensaje;
                    
                    
                    if(resp.operations[0].resultSet.records.length > 0){
                    
                    for(var i = 0;resp.operations[0].resultSet.records.length > i;i++){
                        
                        mensaje = '<p><b>'+resp.operations[0].resultSet.records[i].raw+'</b></p>' ;
                        
                    }
                    
                     Ext.create('Ext.window.Window', {
                                title: 'Paridad',
                                height: 500,
                                width: 500,
                                minimizable: true,
                                maximizable: true,
                                layout: 'fit',
                                items: {// Let's put an empty grid in just to illustrate fit layout
                                    xtype: 'panel',
                                    //title: 'My PDF',
                                    width: 600,
                                    height: 400,
                                    html: mensaje
                                }
                            }).show();
                    
        
                    //console.log(resp.operations[0].resultSet.records[0].raw);
                    
                    } 
                },
                failure: function(resp, dos) {
                    msgBoxErr('Error', 'Error al guardar:' + store.getProxy( ).getReader().rawData.msg);
                    grid.setLoading(false);
                },
                callback: function(records, operation, val3) {
                   
                    
                    grid.setLoading(false);
                    me.findArchivos();
//                    me.procesarPolizas(modified, 0, me, grid);

                }

            });

        }
    },
    procesarPolizas: function(modified, j, me, grid) {

        if (j === (modified.length)) {
            grid.setLoading(false);
            me.findArchivos();
            return;
        }
        Ext.Ajax.request({
            url: '/fenius/servlet/ada_ServAppletSqr?catalogo=Pro_GPoliza&dic_sistema=empres&dic_estado=66&reporte=Pro_GPoliza&ck_htm=on',
            method: 'GET',
            scope: this,
            params: {
                compania: modified[j].data.COMPANIA,
                factura: modified[j].data.NUMERO
            },
            callback: function(records, operation, success) {

                var pos = success.responseText.indexOf("<title>");

                var pos2 = success.responseText.indexOf("</title>", pos + 1);



                var reporte = success.responseText.substring(pos + 7, pos2);

                me.pageGetLogs(reporte + '.htm');
                me.procesarPolizas(modified, j + 1, me, grid);

            },
            timeout: 30000

        });


//        }
//        
//        task.delay(1000);





    },
    pageGetLogs: function(program) {
        Ext.Ajax.request({
            url: '/sqr_empres/Pro_GPoliza/' + program,
            method: 'GET',
            callback: function(records, operation, success) {
                msgOut(records);
                msgOut(operation);
                msgOut(success);
                msgOut(success.responseText);

                //  me.procesarPolizas(modified, j + 1, me, grid);

            },
            timeout: 30000

        });
    },
    findArchivos: function(factura, calendario, periodo) {

        var me = this,
                gridArch = me.getGridArchivos(),
                storeArch = gridArch.getStore();

        //var currentdate = new Date();

        // var mes = currentdate.getMonth()+1;
        // var calen = currentdate.getFullYear();

        if (Ext.isEmpty(factura))
            factura = '';
        if (Ext.isEmpty(calendario)) {
            calendario = this.calendarioSys;
            Ext.getCmp('cboCalendarioFe').setValue(calendario);
        }
        if (Ext.isEmpty(periodo)) {
            periodo = this.periodoSys;

            Ext.getCmp('cboPeriodoFe').setValue(periodo);

        }

        storeArch.proxy.extraParams.FACTURA = factura;
        storeArch.proxy.extraParams.calendario = calendario;
        storeArch.proxy.extraParams.periodo = periodo;


        gridArch.setLoading('Buscando...');
        storeArch.loadData([], false);
        storeArch.load({
            callback: function() {
                gridArch.setLoading(false);
            }
        });
    },
    addArchivo: function(btn) {

        var me = this;
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
                    var nombre = val.data[0].COMPANIA;

                    var view = Ext.widget('windowarchivos');
                    view.setTitle('Agregar Archivo');
                    var form = view.down('formarchivos').getForm();
                    form.findField('archCOMPANIA').setValue(nombre);

                } else if (!val.success) {
                    msgBoxErr('Compania', 'Error compañia no encontrada');
                }
            },
            timeout: 30000

        });



    },
    findCompania: function() {
        var me = this;

        Ext.getBody().on("contextmenu", Ext.emptyFn, null, {preventDefault: true});
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
                    var nombre = val.data[0].NOMBRE1;

                    var me = this,
                            grid = me.getAppMain();
                    grid.setTitle(val.data[0].NOMBRE1);

                } else if (!val.success) {
                    msgBoxErr('Compania', 'Error compañia no encontrada');
                }
            },
            timeout: 30000

        });
    },
    getCompania: function() {
        var grid = this.getAppMain();
        var title = grid.title;
        var n = title.indexOf("-");
        var compania = title.substr(0, n);
        return compania;
    },
    procesaDirectorio: function() {
        var me = this,
                grid = me.getGridDirectorios(),
                store = grid.getStore();

        //var records = store.getRange(0,store.getTotalCount( ));

//      for(var i=0;i<records.length;i++){
//          msgOut(records.get('FLAG_CARGA'));
//      }
        grid.setLoading('Procesando...');
        var data = [];
        store.each(function(r) {
            if (r.data.FLAG_CARGA && Ext.isEmpty(r.data.CARGA))
                data.push(r.data);
        });

        if (Ext.isEmpty(data)) {

            grid.setLoading(false);
            msgBoxErr('Error', 'Todos los archivos han sido cargados');
            return;
        }

        var jsonData = Ext.encode(data);

        Ext.Ajax.request({
            url: 'dirdata/process',
            timeout: 60000,
            scope: this,
            params: {
                data: jsonData



            },
            success: function(response) {
                var text = response.responseText;

                grid.setLoading(false);


            },
            callback: function(a, b, c) {
                grid.setLoading(false);
                var val = Ext.decode(c.responseText);
                //msgOut(val.msg);

                Ext.Ajax.request({
                    url: 'process/data/BuscaErr',
                    params: {
                        id: val.msg
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
//                                msgOut("arreglo"+val.data.length);
                            var mensaje = '';
                            for (var i = 0, len = val.data.length; i < len; i++) {

                                mensaje += val.data[i].MENSAJE + '  <br>    ';
//                                   msgOut("mensaje"+mensaje+"   "+i);

                            }
                            ;
//                                msgOut("mensaje2"+mensaje);

                            Ext.create('Ext.window.Window', {
                                title: 'ESTATUS',
                                height: 500,
                                width: 500,
                                minimizable: true,
                                maximizable: true,
                                layout: 'fit',
                                items: {// Let's put an empty grid in just to illustrate fit layout
                                    xtype: 'panel',
                                    //title: 'My PDF',
                                    width: 600,
                                    height: 400,
                                    html: mensaje
                                }
                            }).show();


                        } else if (!val.success) {
                            msgBoxErr('mensaje', 'Error mensaje no encontrado');
                        }
                    },
                    timeout: 30000

                });
                if (Ext.isEmpty(c.responseText)) {
                    msgBoxErr('Error', 'Error al Porcesar XML');
                    return;

                }
                me.loadDirectorio();
                me.findArchivos();
                var res = Ext.decode(c.responseText);

            }
        });


    },
    loadDirectorio: function() {
        var me = this,
                gridDir = me.getGridDirectorios(),
                storeDir = gridDir.getStore();


        gridDir.setLoading('Buscando...');
        storeDir.loadData([], false);
        storeDir.proxy.extraParams.sql = 'BuscaArchivosDirectorio';
        storeDir.load({
            callback: function() {
                gridDir.setLoading(false);
            }
        });

    },
    saveArchivo: function(btn) {

        var me = this,
                grid = me.getGridArchivos(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore(),
                form = btn.up('formarchivos'),
                win = form.up('window'),
                basicForm = form.getForm();

        var compania = basicForm.findField('archCOMPANIA').getValue();

        store.proxy.extraParams.compania = compania;


        if (basicForm.isValid()) {
            grid.setLoading("Guardando Archivo...");
            //form.setLoading("Guardando Archivo...");
            basicForm.submit({
                success: function(form, action) {
                    win.close();
                    Ext.Msg.alert('Guardado', 'El Archivo se guardo Correctamente');
                    //store.loadData([], false);
//                    store.load({
//                        callback: function() {
                    grid.setLoading(false);
                    store.load();
                    win.close();
//                            // me.loadSumaDetalle(tipoPol,numeroPol,fechaPol);
//                        }
//                    });
                    //me.setSession(action.result.data[0].UC_COMPANIA, action.result.data[0].US_USUARIO);

                },
                failure: function(form, action) {

                    Ext.Ajax.request({
                        url: 'process/data/BuscaErr',
                        params: {
                            id: action.result.msg
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
                                msgOut("arreglo" + val.data);
                                var mensaje = val.data[0].MENSAJE;
                                Ext.create('Ext.window.Window', {
                                    title: 'ESTATUS',
                                    height: 500,
                                    width: 500,
                                    minimizable: true,
                                    maximizable: true,
                                    layout: 'fit',
                                    items: {// Let's put an empty grid in just to illustrate fit layout
                                        xtype: 'panel',
                                        //title: 'My PDF',
                                        width: 600,
                                        height: 400,
                                        html: mensaje
                                    }
                                }).show();


                            } else if (!val.success) {
                                msgBoxErr('mensaje', 'Error mensaje no encontrado');
                            }
                        },
                        timeout: 30000

                    });
                    //Ext.Msg.alert('Error', action.result.msg);
                    grid.setLoading(false);
                    //  form.setLoading(false);
                }
            });


        } else {

            basicForm.getFields().each(function(item) {
                if (!item.isValid()) {
                    msgBoxErr("Error falta un campo", item.name);
                    return;
                }

            });
        }

    }

});