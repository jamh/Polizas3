Ext.define('AppFormulas.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: [
        'StoreCedulaDet',
        'StoreBuscaCedula'
 
    ],
    models: [
        'ModeloCedulaDet',
        'ModeloBuscaCedula'
        
    ],
    refs: [
        {
            ref: 'panelContenido',
            selector: 'panelcontenido'
        },
        {
            ref: 'gridCedulaDet',
            selector: 'gridceduladet'
        },
        {
            ref: 'formCedula',
            selector: 'formcedula'
        },
        {
            ref: 'appMain',
            selector: 'app-main'
        },
        {
            ref: 'formCopiaFormula',
            selector: 'formcopiaformula'
        },
        {
            ref: 'windowCopiaFormula',
            selector: 'windowcopiaformula'
        }

    ],
    views: [
        'Main',
        'GridCedulaDet',
        'FormCedula',
        'WindowErpCatConvertidor',
        'PanelContenido',
        'WindowCopiaFormula',
        'FormCopiaFormula'
    ],
    idconcgastoFiltro: null,
    init: function() {

        var me = this;
        me.control({
            gridceduladet: {
                
                returnDetCed: function(){
                    
                    me.returnDetCed();
                    
                },
                
                copyDetalleExcel: function(){
                    
                     me.copyDetalleExcel();
                },
                
                addDetFormula: function(btn, cellEditing) {

                    me.addDetFormula(btn, cellEditing);

                },
                deteleDetFormula: function() {

                    me.deteleDetFormula();
                },
                afterrender: function() {
                    me.limpiarGrid();
                    me.buttonDisableGrid();

                },
                 agregarDetPos:function(btn, cellEditing,poscol){
                   
                  
                  me.addDetFormula(btn, cellEditing,poscol);
                   
                   
               },
               
               dropData:function(){
                   
                  
                //  me.saveDetFormulaDrop();
                   
                   
               },
               pasteDetalleExcel:function(){
                   me.pasteDetalleExcel();
               }

            },
            formcopiaformula:{
                copiarRegistro: function() {

                    me.copiarRegistro();

                }
            },
            formcedula: {
                findCedula: function(value) {

                    me.findCedula(value);

                },
                agregarRegistro: function() {
                    me.agregarRegistro();
                },
                saveCedula: function() {
                    me.saveCedula();
                 //  me.saveDetFormula();
                },
                deleteCedula: function() {
                    me.deleteCedula();
                },
                
                copiarCedula: function(){
                    
                    me.copiarCedula();
                    
                },
                afterrender: function() {
                    me.buttonDisable();
                   
                },
                helpConvertidor: function(btn) {

                    me.helpConvertidor(btn);

                }
            }


        });
    },
    returnDetCed:function(){
        
        var me = this;
        
        var form = me.getFormCedula().getForm();
        
         me.GridCedulaDet(form.findField('COMPANIA').getValue(),form.findField('CEDULA').getValue());
        
    },
     pasteDetalleExcel: function() {
        var me = this,
                grid = me.getGridCedulaDet();
        var form = me.getFormCedula().getForm();
       
     
              if (Ext.isEmpty(form.findField('CEDULA').getValue())){
                  
                  msgBoxErr('Error','Debe seleccionar antes una cedula');
                  return;
              }
               
        grid.setLoading("Importando a Excel...");
        var ta = document.createElement('textarea');
        ta.id = 'cliparea';

        ta.style.position = 'absolute';
        ta.style.left = '-1000px';
        ta.style.top = '-1000px';
        ta.value = '';

        document.body.appendChild(ta);
        document.designMode = 'off';

        setTimeout(function() {
            me.getRecsFromCsv(grid, ta);
        }, 100);

        ta.focus();
        ta.select();
    },
        getRecsFromCsv: function(grid, ta) {
        var me = this,
                grid = me.getGridCedulaDet(),
               // gridM = me.getGridMaestro(),
                store = grid.getStore(),
                rows = grid.getSelectionModel().getSelection(),
                 form = me.getFormCedula().getForm();
       
              //  rowsM = gridM.getSelectionModel().getSelection(),
               // selectedM = rowsM[0],
               //   me.limpiarGrid();
                var sm = rows[0];
               
       
              
//        if (Ext.isEmpty(selectedM)) {
//            msgBoxErr('Error', 'Se necesita seleccionar una poliza');
//            grid.setLoading(false);
//            return;
//        }



        if (Ext.isEmpty(sm)) {
            var gRow = 0;
        } else
            var gRow = store.indexOf(sm);

          var compania = form.findField('COMPANIA').getValue();
          var cedula =   form.findField('CEDULA').getValue();
//        var compania = selectedM.data.COMPANIA;
//        var tipo = selectedM.data.TIPO_POLIZA;
//        var numero = selectedM.data.NUMERO;
//        var fecha = '';
//        if (Ext.isDate(selectedM.data.FECHA))
//            fecha = Ext.Date.format(selectedM.data.FECHA, 'd/m/Y');
//        else
//            fecha = selectedM.data.FECHA;
//           msgOut(numero);

        document.body.removeChild(ta);

//	    	var del = '';
//
//	    	if (ta.value.indexOf("\r\n")) {
//
//	    		del = "\r\n";
//
//	    	} else if (ta.value.indexOf("\n")) {
//
//	    		del = "\n";
//
//	    	}

        var rows = ta.value.split("\n");
                msgOut('rows:'+rows.length);
                
         me.limpiarGrid();

        for (var i = 0; i < rows.length; i++) {
            // msgOut("rows:"++"<-");

           // if (Ext.isEmpty(Ext.String.trim(rows[i])))
           //     break;

            var cols = rows[i].split("\t");
            //  msgOut("cols:"+Ext.String.trim(cols)+"<-");


            var columns = grid.columns;

            if (cols.length > columns.length)
                cols = cols.slice(0, columns.length - 1);

          //  if (gRow === -1) {
          //      Ext.Msg.alert('Select un registro para pegar');
          //      grid.setLoading(false);
          //      return;
         //   }

            var cfg = {};
            var tmpRec = store.getAt(gRow);
//		    	var existing = false;
//	                
//                        msgOut('tmpRec:'+tmpRec);
            if (tmpRec) {
                cfg = tmpRec.data;
//			    	existing = true;	
            }
//	
            var l = cols.length;

            if (cols.length > columns.length)
                l = columns.length;

         //   if (cols.length < columns.length) {
         //       grid.setLoading(false);
         //       msgBoxErr("Error", "La cantidad de columnas no coincide");
         //       return;
         //   }

            var k = 2;
            for (var j = 0; j < l; j++) {

//			    	if (cols[j] === "") {		
//			    		return;		
//			    	}

                if (cols[j] === 'undefined')
                    cfg[columns[k].dataIndex] = null;
                else if (cols[j] === 'null')
                    cfg[columns[k].dataIndex] = null;
                else if (cols[j] === "")
                    cfg[columns[k].dataIndex] = null;
                else
                    cfg[columns[k].dataIndex] = cols[j];
                
                k = k + 1;
                
            }
            //msgOut('cfg1');
            //msgOut(cfg);

            me.storeInitialCount++;

            cfg['COMPANIA'] = compania;
            cfg['CEDULA'] = cedula;
         //   cfg['id'] = null;
         //   cfg['TIPO_POLIZA'] = tipo;
         //   cfg['FECHA'] = fecha;
         //   cfg['NUMERO'] = numero;
         //   cfg['COMPANIA'] = compania;

            var tmpRow = gRow ;

            grid.getSelectionModel().clearSelections(true);
            //msgOut('tmpRow:'+tmpRow);
//                        msgOut(cfg);
            var tmpRec = Ext.create('AppFormulas.model.ModeloCedulaDet', cfg);

            //	if (existing)	
            //store.removeAt(tmpRow);	
            store.insert(tmpRow, tmpRec);
            gRow = ++tmpRow;

        }

//        if (gRow === store.getCount()) {
//
//            var RowRec = Ext.create('AppFormulas.model.ModeloCedulaDet', {});
//            store.add(RowRec);
//
//        }

        gRow = 0;
        grid.setLoading(false);

    },
    copyDetalleExcel: function() {
        var me = this,
                grid = me.getGridCedulaDet();
        var recs = grid.getSelectionModel().getSelection();

            console.log('copiando');

        if (recs && recs.length != 0) {

            var clipText = me.getCsvDataFromRecs(recs);

            var ta = document.createElement('textarea');

            ta.id = 'cliparea';
            ta.style.position = 'absolute';
            ta.style.left = '-1000px';
            ta.style.top = '-1000px';
            ta.value = clipText;
            document.body.appendChild(ta);
            document.designMode = 'off';

            ta.focus();
            ta.select();

            setTimeout(function() {

                document.body.removeChild(ta);

            }, 100);
        }
    },
    getCsvDataFromRecs: function(records) {
        var me = this,
                grid = me.getGridCedulaDet(),
                store = grid.getStore();
        var clipText = '';

      //  var currRow = store.find('SEC', records[0].data.id);
      
      var currRow = 1;

        for (var i = 0; i < records.length; i++) {

            //var index = store.find('SEC', records[i].data.id);
            var index = [i];
            var r = index;
            var rec = records[i];
            var cv = grid.columns;

            for (var j = 2; j < cv.length; j++) {
                
                
                var val = rec.data[cv[j].dataIndex];
                
              
                
                if (Ext.isEmpty(val))
                    val = '';
                if (r === currRow) {
                    clipText = clipText.concat(val, "\t");
                } else {
                    currRow = r;
                    clipText = clipText.concat("\n", val, "\t");
                }
            }

        }

        return clipText;
    },
    buscaParametroRIA: function() {
        var me = this,
                form1 = me.getFormCedula(),
                form = me.getFormCedula().getForm();

        var param = '';

        if (!Ext.isEmpty(me.idconcgastoFiltro)) {

            param = me.idconcgastoFiltro;

        }


        form.findField('PARAMETRO').setValue(param);

    },
    helpConvertidor: function(btn) {


        var mensaje = "<p><b>[rfcEmisor]</b> : RFC del Emisor de la factura.</p>\n\
                       <p><b>[rfcReceptor]</b> : RFC  del receptor de la factura.</p>\n\
                       <p><b>[IVA]</b> : IVA de la factura.</p>\n\
                       <p><b>[TOTAL]</b> : Total de la factura.</p>\n\
                       <p><b>[SUBTOTAL]</b> : Subtotal de la factura.</p>\n\
                       <p><b>[RET_IVA]</b> : Retención de IVA por concepto.</p>\n\
                       <p><b>[nombreReceptor]</b> :  Razón social del receptor.</p>\n\
                       <p><b>[nombreEmisor]</b> :  Razón social del emisor.</p>";

        Ext.create('Ext.window.Window', {
            title: 'AYUDA',
            height: 500,
            width: 500,
            layout: 'fit',
            items: {
                xtype: 'panel',
                width: 500,
                height: 400,
                html: mensaje
            }
        }).show();


    },
    findDatosCopiados: function(caso) {
        var me = this;
        Ext.Ajax.request({
            url: 'process/data/BuscaDatosCopiCedula',
            method: 'GET',
            params: {
                cedula_nueva: caso

            },
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                   
                    var me = this,
                            form = me.getFormCedula().getForm();
                    
                    form.findField('COMPANIA').setValue(val.data[0].COMPANIA);
                    form.findField('CEDULA').setValue(val.data[0].CEDULA);
                    form.findField('NOMBRE').setValue(val.data[0].NOMBRE);
                    form.findField('DESCRIPCION').setValue(val.data[0].DESCRIPCION);
                    form.findField('BANDERA').setValue('1');
                    
                    me.GridCedulaDet(val.data[0].COMPANIA,val.data[0].CEDULA);

                } else if (!val.success) {
                    msgBoxErr('Compania', 'Error compañia no encontrada');
                }
            },
            timeout: 30000

        });
    },
    buttonDisable: function() {

        var me = this,
                form = me.getFormCedula();



        form.getChildByElement('guardarCedula', true).setDisabled(true);
        form.getChildByElement('borrarCedula', true).setDisabled(true);
        form.getChildByElement('copiarCedula', true).setDisabled(true);



    },
    buttonDisableGrid: function() {

        var me = this,
                grid = me.getGridCedulaDet();

       // grid.getChildByElement('btnAgregarDetFormula', true).setDisabled(true);
       // grid.getChildByElement('btnBorrarDetFormula', true).setDisabled(true);



    },
    limpiarGrid: function() {

        var me = this,
                grid = me.getGridCedulaDet(),
                store = grid.getStore();




        store.loadData([], false);


    },
    copiarCedula: function(){

          var view = Ext.widget('windowcopiaformula');
            view.setTitle('Copia Cedula');
            view.down('formcopiaformula').getForm();


    },
    copiarRegistro: function() {

        var me = this,
                form = me.getFormCedula().getForm(),
                form2 = me.getFormCopiaFormula().getForm();
        
                var formW = me.getFormCopiaFormula();
                var win = formW.up('window');

         
        if (form2.isValid()) {
            formW.setLoading('Copiando...');
            var caso = form2.findField('CEDULAcopy').getValue();

            form.submit({
                url: 'processFormula/copiarCedula',
                params:{
                    
                    caso:caso
                    
                    
                },
                
                success: function(form, action) {
                    formW.setLoading(false);
                    var sec = action.result.msg;

                    
                    //me.copiarDetalle(sec);
                    me.findDatosCopiados(caso);
                    
                    win.close();

                    var cboCedula = Ext.getCmp('cboCedula');

                    var storeCed = cboCedula.getStore();
                    Ext.getCmp('cboCedula').clearValue();
                    storeCed.removeAll();
                    storeCed.proxy.extraParams.query = "";
                    storeCed.load();

                    msgBox('Copiado','Copiado Correcto');

                },
                failure: function(form, action) {
                    formW.setLoading(false);
                    Ext.Msg.alert('Error', action.result.msg);
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
    agregarRegistro: function() {
        var me = this,
                form = me.getFormCedula().getForm(),
                form1 = me.getFormCedula(),
                grid = me.getGridCedulaDet(),
                store = grid.getStore();

        form.reset();



        store.loadData([], false);

        me.findCompania();



        

        form1.getChildByElement('guardarCedula', true).setDisabled(false);
        form1.getChildByElement('borrarCedula', true).setDisabled(false);
        form1.getChildByElement('copiarCedula', true).setDisabled(false);


       // grid.getChildByElement('btnAgregarDetFormula', true).setDisabled(false);
       // grid.getChildByElement('btnBorrarDetFormula', true).setDisabled(false);
        
        form.findField('CEDULA').setReadOnly(false);



    },
    deleteCedula: function(btn) {

        var me = this,
                grid = me.getGridCedulaDet(),
                store = grid.getStore(),
                form = me.getFormCedula().getForm();





        Ext.MessageBox.show({
            title: 'Borrar Convertidor',
            msg: 'Esta seguro que desea borrar la cedula?',
            icon: Ext.MessageBox.QUESTION,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {




                    var compania = form.findField('COMPANIA').getValue();
                    var cedula = form.findField('CEDULA').getValue();

                    form.reset();

                    var records = grid.getSelectionModel().getSelection();




                    grid.setLoading("Cancelando Cedula ...");
                    Ext.Ajax.request({
                        url: 'processFormula/borraCedula',
                        timeout: 60000,
                        scope: this,
                        params: {
                            // data: jsonData, 
                            compania: compania,
                            cedula: cedula

                        },
                        success: function(response) {

                            var cboCedula = Ext.getCmp('cboCedula');

                            var storeCed = cboCedula.getStore();
                            Ext.getCmp('cboCedula').clearValue();
                            storeCed.removeAll();
                            storeCed.proxy.extraParams.query = "";
                            storeCed.load();

                            var text = response.responseText;
                            grid.setLoading(false);
                            grid.setLoading('Buscando...');
                            store.loadData([], false);
//                            store.load({
//                                callback: function() {
                                   grid.setLoading(false);
//
//                                }
//                            });

                        },
                        callback: function(a, b, c) {
                            grid.setLoading(false);
                            if (Ext.isEmpty(c.responseText)) {
                                msgBoxErr('Error', 'Error al Eliminar');
                                return;

                            }
                            var res = Ext.decode(c.responseText);
                            if (res.success) {

                                msgBox('Borrado', 'Borrado con Exito');
                            }
                        }
                    });
                }
            }

        });



    },
    deteleDetFormula: function() {

        var me = this,
                grid = me.getGridCedulaDet(),
                store = grid.getStore();

        var records = grid.getSelectionModel().getSelection();
       
       var rows = grid.getSelectionModel().getSelection();
       var sm = rows[0];
       var pos = store.indexOf(sm);

     
        if (Ext.isEmpty(records))
            return;


        var selection = records[0];




        if (selection.phantom) {
            store.remove(selection);
            return;
        }


        store.remove(selection);

        grid.setLoading("Borrando Poliza Detalle...");
       Ext.Ajax.request({
            url: 'processFormula/borraDetFormula',
            timeout: 60000,
            method: 'POST',
            scope: this,
            params: {
                cedula:selection.get('CEDULA'),
                renglon:pos + 1

            },
            success: function(response) {
                var text = response.responseText;

            },
            callback: function(a, b, c) {
                
                grid.setLoading(false);
                
                me.GridCedulaDet(selection.get('COMPANIA'),selection.get('CEDULA'));
               
               
               
            }
        });



    },
    saveCedula: function(btn) {

        var me = this,
                form = me.getFormCedula().getForm();
        
               var formL = me.getFormCedula();

        formL.setLoading("Guardando Cedula...");
        
        if (form.isValid()) {
            form.submit({
                success: function(form, action) {
                    formL.setLoading(false);
                    var sec = action.result.msg;

                    form.findField('BANDERA').setValue('1');
                    me.saveDetFormula();
                    form.findField('COMPANIA').setReadOnly(true);
                    form.findField('CEDULA').setReadOnly(true);
                   
                    var cboCedula = Ext.getCmp('cboCedula');

                    var storeCed = cboCedula.getStore();
                    Ext.getCmp('cboCedula').clearValue();
                    storeCed.removeAll();
                    storeCed.proxy.extraParams.query = "";
                    storeCed.load();

                    

                },
                failure: function(form, action) {
                    formL.setLoading(false);
                    Ext.Msg.alert('Error', action.result.msg);
                }
            });


        } else {
            
            formL.setLoading(false);

            form.getFields().each(function(item) {
                if (!item.isValid()) {
                    msgBoxErr("Error falta un campo", item.name);
                    return;
                }

            });
        }

    },
    addDetFormula: function(btn, cellEditing,pos) {

        var me = this,
                gridDet = me.getGridCedulaDet(),
                form = me.getFormCedula().getForm(),
                records = gridDet.getSelectionModel().getSelection(),
                storeDet = gridDet.getStore();

        var record = records[0];



        var model = new AppFormulas.model.ModeloCedulaDet({
            COMPANIA: form.findField('COMPANIA').getValue(),
            CEDULA: form.findField('CEDULA').getValue(),  
            COL1:'',
            COL2:'',
            COL3:'',
            COL4:'',
            COL5:'',
            COL6:'',
            COL7:'',
            COL8:'',
            COL9:'',
            COL10:''

        });

      
       if(Ext.isEmpty(pos)){
           
           pos = storeDet.getCount();
       }
     
        storeDet.insert(pos, model);
        // storeDet.add(model);
         
         
         
        cellEditing.startEditByPosition({
            row: pos,
            column: 1
        });
        
         gridDet.getSelectionModel().deselectAll()

         var sm = gridDet.getSelectionModel();
          
                sm.select(pos, true);
         
        

    },
    findCedula: function(value) {

        var me = this,
                form1 = me.getFormCedula(),
                form = me.getFormCedula().getForm();
        
        if(Ext.isEmpty(value)) return;
//        msgOut(value);
//        msgOut(value.value);
//        msgOut(value.displayTplData[0].DESCRIPCION);

        form.findField('COMPANIA').setValue(value.displayTplData[0].COMPANIA);
        form.findField('CEDULA').setValue(value.displayTplData[0].CEDULA);
        form.findField('NOMBRE').setValue(value.displayTplData[0].NOMBRE);
        form.findField('DESCRIPCION').setValue(value.displayTplData[0].DESCRIPCION);
        form.findField('BANDERA').setValue('1');

    
         
         
         form.findField('COMPANIA').setReadOnly(true);
         form.findField('CEDULA').setReadOnly(true);
         
         
         
         me.GridCedulaDet(value.displayTplData[0].COMPANIA,value.displayTplData[0].CEDULA);

        form1.getChildByElement('guardarCedula', true).setDisabled(false);
        form1.getChildByElement('borrarCedula', true).setDisabled(false);
        form1.getChildByElement('copiarCedula', true).setDisabled(false);









    },
    GridCedulaDet: function(compania, cedula) {

        var me = this,
                grid = me.getGridCedulaDet(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();

        var record = records[0];



      //  grid.getChildByElement('btnAgregarDetFormula', true).setDisabled(false);
      //  grid.getChildByElement('btnBorrarDetFormula', true).setDisabled(false);

       

        store.proxy.extraParams.cedula = cedula;


       // grid.setLoading('Buscando...');
        store.loadData([], false);
        store.currentPage = 1;
        store.load({
            callback: function() {
                grid.setLoading(false);

            }
        });


    },
    guardarErpCatConvertidor: function() {
        var me = this,
                grid = me.getGridErpCatConvertidor(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();

        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

        if (!Ext.isEmpty(news) || !Ext.isEmpty(modified)) {



            grid.setLoading("Guardando...");
            store.sync({
                scope: this,
                success: function(resp, dos) {
                },
                failure: function(resp, dos) {
                    msgBoxErr('Error', 'Error al guardar:' + store.getProxy( ).getReader().rawData.msg);
                },
                callback: function(records, operation, val3) {
                    me.procesarPolizas(modified, 0, me, grid);

                }

            });

        }
    },
    copiarDetalle: function(sec) {

        var me = this,
                grid = me.getGridCedulaDet(),
                store = grid.getStore();
        var form = me.getFormCedula().getForm();
        var records = grid.getSelectionModel().getSelection();

        var record = records[0];

        msgOut("sec" + sec);


        var data = [];
        store.each(function(r) {
            r.data.NO_CASO = sec;
            data.push(r.data);
        });


        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }

        msgOut(jsonData);
        grid.setLoading("Copiando Detalle Convertidor...");



        store.proxy.extraParams.origen = form.findField('ORIGEN').getValue();
        store.proxy.extraParams.idConGasto = form.findField('IDCONCGASTO').getValue();
        store.proxy.extraParams.caso = sec;

        Ext.Ajax.request({
            url: 'controlDet/copiarconvertidordet',
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


                if (Ext.isEmpty(c.responseText)) {
                    msgBoxErr('Error', 'Error de comunicacion al Guardar');
                    return;
                }
                var res = Ext.decode(c.responseText);
                msgOut("res" + res);
                if (res.success) {

                    msgBox('Guardar', res.msg);

                    store.load();
                }
            }
        });


    },
        saveDetFormulaDrop: function() {

        var me = this,
                grid = me.getGridCedulaDet(),
                store = grid.getStore();
        var form = me.getFormCedula().getForm();
        var records = grid.getSelectionModel().getSelection();

        var record = records[0];

       
        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();
        

     

          var data = [];
        store.each(function(r) {
             
            
            data.push(r.data);
        });


        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
         msgOut(jsonData);
 
          grid.setLoading('Guardando...');
        //store.commitChanges(); 
        Ext.Ajax.request({
            url: 'processFormula/uptDet',
            timeout: 60000,
            method: 'POST',
            scope: this,
            params: {
                data: jsonData//, 
                //user: usuario

            },
            success: function(response) {
                var text = response.responseText;

            },
            callback: function(a, b, c) {
                
                grid.setLoading(false);
                me.GridCedulaDet(form.findField('COMPANIA').getValue(),form.findField('CEDULA').getValue());
               
            }
        });
        


    },
    saveDetFormula: function() {

        var me = this,
                grid = me.getGridCedulaDet(),
                store = grid.getStore();
        var form = me.getFormCedula().getForm();
        var records = grid.getSelectionModel().getSelection();

        var record = records[0];

       
        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();
        

//        if (Ext.isEmpty(news) && Ext.isEmpty(modified)) {
//           
//            return;
//            
//        }


          var data = [];
        store.each(function(r) {
             
            
            data.push(r.data);
        });


        var jsonData = Ext.encode(data);
       // if (Ext.isEmpty(data)) {
       //     msgBoxErr('Error', 'No existen equipos seleccionados');
       //     return;
       // }
        
         msgOut(jsonData);
 
          grid.setLoading('Guardando...');
        //store.commitChanges(); 
        Ext.Ajax.request({
            url: 'processFormula/uptDet',
            timeout: 60000,
            method: 'POST',
            scope: this,
            params: {
                data: jsonData//, 
                //user: usuario

            },
            success: function(response) {
                var text = response.responseText;

            },
            callback: function(a, b, c) {
                
                grid.setLoading(false);
                me.GridCedulaDet(form.findField('COMPANIA').getValue(),form.findField('CEDULA').getValue());
               
            }
        });
        


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


            },
            timeout: 30000

        });
    },
    findErpCatConvertidor: function(factura) {

        var me = this,
                gridArch = me.getGridErpCatConvertidor(),
                storeArch = gridArch.getStore();
        if (Ext.isEmpty(factura))
            factura = '';
        storeArch.proxy.extraParams.FACTURA = factura;

        gridArch.setLoading('Buscando...');
        storeArch.loadData([], false);
        storeArch.load({
            callback: function() {
                gridArch.setLoading(false);
            }
        });
    },
    findCompania: function() {
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
                    var compania = val.data[0].COMPANIA;

                    var me = this,
                            form = me.getFormCedula().getForm();
                    form.findField('COMPANIA').setValue(compania);

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
                grid = me.getGridCedulaDet(),
                store = grid.getStore();


        grid.setLoading('Procesando...');
        var data = [];
        store.each(function(r) {
            if (r.data.FLAG_CARGA && Ext.isEmpty(r.data.CARGA))
                data.push(r.data);
        });

        if (Ext.isEmpty(data)) {
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
                            msgOut("arreglo" + val.data.length);
                            var mensaje = '';
                            for (var i = 0, len = val.data.length; i < len; i++) {

                                mensaje += val.data[i].MENSAJE + '      ';
                                msgOut("mensaje" + mensaje + "   " + i);

                            }
                            ;
                            msgOut("mensaje2" + mensaje);

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
                me.findErpCatConvertidor();
                var res = Ext.decode(c.responseText);

            }
        });


    }


});
