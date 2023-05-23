Ext.define('AppCuentas2.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: [
        'StoreCuentas'
      
    ],
    models: [
        'ModeloCuentas'
      
    ],
    refs: [
        {
            ref: 'gridCuentas',
            selector: 'gridcuentas'
        },
        {
            ref: 'formCuentas',
            selector: 'formcuentas'
        }

    ],
    views: [
        'GridCuentas',
        'Main',
        'FormCuentas',
        'WindowCuentas'
        
    ],
    
    companiaSession:null,
    permisosC: null,
    accion:null,
    banderaEstructura:null,
    ctaPadreCompania: null,
    afectCtaPadre:null,
    banderaTipoCompania:null,
 
    
  paginaAnt:1,
    init: function() {

        var me = this;
        me.control({
            gridcuentas: {
                
                buscaOrderCuenta:function(order){
                    
                    me.findCuentas('',order);
                    
                },
                
                decargaCuentasSAT: function(){
                    
                   me.decargaCuentasSAT();  
                },
                
                afterrender: function() {
                  me.findCompania();
                  me.permisosCta();
                    
                   
                },
                itemdblclick: function() {
                   if (me.permisosC.indexOf("M")<0 ) { 
                            
                             msgBoxErr('Permisos', 'Error no tiene permisos para modificar');
                                 
                        }else{
                            
                            this.editCuentas();
                            
                        }
                  
                    
                },
                 findCuentas: function(cuenta){
                    me.findCuentas(cuenta);
                 },
                         
                crearCuenta: function(){
            
                  me.crearCuenta();
                },
                 cancelaCuenta:function(){
                     
                     console.log('cancelaCuenta....');
             
                     me.cancelaCuenta();
                 },
                 cleanFilters:function(){
                       me.cleanFilters();
                 },
                 cambiarEstatusCta :function(val,col){
             
                      me.cambiarEstatusCta(val,col,'A');
                 
                    
                 },
                 cambiarEstatusCtaDesactiva:function(val,col){        
                 
                    me.cambiarEstatusCta(val,col,'I');
                 },
                 decargaCuentas:function(){
                    me.decargaCuentas();
                 },
                  recargaPagina:function(pagina){
                  if (this.paginaAnt === pagina){
                      this.paginaAnt = pagina;
                  }else{
                      this.paginaAnt = pagina;
                      me.recargaPagina(pagina);
                  }
                }
            },
            
            formcuentas:{
                
                saveCuenta: function(btn){
                    
                    
                    me.buscaEstructura2(btn);
                    //me.saveCuenta(btn);
                },
                validaCambioCuentaPadre:function(){
                    
                   // me.validaCambioCuentaPadre();
                    
                    
                }
                
                
            }
            
            

        });
    },
    
    validaCambioCuentaPadre:function(){
        
        var me = this,
          
          form = me.getFormCuentas(),
          basicForm = form.getForm(),        
          win = form.up('window'),
          grid = me.getGridCuentas();
        
       var accion = basicForm.findField('txtAccion').getValue();
       
       
       if (accion === 'U'){
                 
         var selection = grid.getSelectionModel().getSelection()[0];
         
               if(!Ext.isEmpty(selection.get('DET_POLIZA'))){
                 
                         msgBoxErr('Error', 'La cuenta tiene poliza y no puede ser modificada su cuenta padre');
                       // return;
                       win.close();

                    }
                    
                if(!Ext.isEmpty(selection.get('SALDO_NUM')) && selection.get('SALDO_NUM') !== 0 ){
                 
                         msgBoxErr('Error', 'La cuenta tiene saldos y no puede ser modificada su cuenta padre');
                        //return;
                        win.close();

                    }
                    
                    
              
         

     
       }
     
        
        
    },
    
     
    
     recargaPagina: function(pagina,cuenta){
        
        msgOut("pagina"+pagina);
        
       
        
        var me = this,
                grid = me.getGridCuentas(),
                store = grid.getStore();
        if (Ext.isEmpty(cuenta))
            cuenta = '';
        store.proxy.extraParams.cuenta = cuenta;

        grid.setLoading('Buscando...');
        store.loadData([], false);
        store.currentPage = pagina;
        store.load({
            callback: function() {
                grid.setLoading(false);
            }
        });
        
        
    },
    
    decargaCuentasSAT: function(){
        
        
          var me = this;
    
     

        var string = Ext.String.format(
                //'<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
             //   'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con',
               'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=REP_descarga_ctas_sat&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&reporte=REP_descarga_ctas_sat',
                   me.companiaSession
                );
                    
             Ext.create('Ext.window.Window', {
            title: 'Catalogo Cuentas SAT',
            height: 500,
            width: 500,
            minimizable: true,
            maximizable : true,
            layout: 'fit',
            items: {  // Let's put an empty grid in just to illustrate fit layout
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

        return string;
        
    },
    
      decargaCuentas: function() {
        var me = this;
    
     

        var string = Ext.String.format(
                //'<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
             //   'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con',
               'http://54.152.214.202/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=REP_descarga_cuentas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&reporte=REP_descarga_cuentas',
                   me.companiaSession
                );
                    
             Ext.create('Ext.window.Window', {
            title: 'Catalogo Cuentas',
            height: 500,
            width: 500,
            minimizable: true,
            maximizable : true,
            layout: 'fit',
            items: {  // Let's put an empty grid in just to illustrate fit layout
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

        return string;
    },
    
    cambiarEstatusCta:function(val,col,atributoEstatus){
        
         var me = this,
                
                grid = me.getGridCuentas();
                
             //   store = grid.getStore();
        
       // store.suspendEvents();
         msgOut('cambiar estatus 2');
                 
         var selection = grid.getSelectionModel().getSelection();
         
         if (Ext.isEmpty(selection)){
             
             msgBoxErr('Error','No ha seleccionado ningun registro');
             
             return;
             
         }
         if (selection.length >= 2){
             var data = [];
                for (var i=0; i < selection.length; i++) {
                    
                    var record = selection[i];
     
                    data.push(record.data);
       
                   msgOut("data"+data);
                   
                    var jsonData = Ext.encode(data);
                    
                      msgOut("jsonData"+jsonData);
                    if (Ext.isEmpty(data)) {
                        msgBoxErr('Error', 'No existen equipos seleccionados');
                        return;
                    }

                }
         }else{
        
             var record = selection[0];
     
            var data = [];
                    
                    data.push(record.data);
       
                   msgOut("data"+data);
                   
                    var jsonData = Ext.encode(data);
                    
                     msgOut("jsonData"+jsonData);
                    if (Ext.isEmpty(data)) {
                        msgBoxErr('Error', 'No existen equipos seleccionados');
                        return;
                    }
                    
                   
             
         }
         
          var resp = Ext.MessageBox.show({
            title: 'Cambiar Atributo',
            msg: 'Esta seguro que desea cambiar el estatus de estas cuentas',
            icon: Ext.MessageBox.QUESTION,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {

     
                            grid.setLoading('Buscando...');
                  Ext.Ajax.request({
                    url: 'CrearCuenta/cambiaAtributosCta',
                    timeout: 60000,
                    scope: this,
                    params: {
                        data: jsonData,
                        activa:atributoEstatus


                    },
                    success: function(response) {
                        var text = response.responseText;
                         grid.setLoading(false);
                      //  msgOut("text"+text);



                    },
                    callback: function(a, b, c) {

                        if (Ext.isEmpty(c.responseText))
                            return;
                        var val = Ext.decode(c.responseText);
                        if (Ext.isEmpty(val))
                            return;
                        if (val.success) {


                            msgBox('Guardado',val.msg);
                        }else{

                            msgBox('Error',val.msg);

                        } 

                          me.findCuentas();

                    }
                });
          
             }
            }

        });


        
        
        
    },
    permisosCta: function() {
        var me = this,
        grid = me.getGridCuentas();

//        
//
//       var columnas = grid.query('gridcolumn');
//       
//        
//         Ext.Ajax.request({
//            url: 'process/data/ActivarCuentaPadre',
//            method: 'GET',
//            scope: this,
//            callback: function(records, operation, success) {
//                if (Ext.isEmpty(success.responseText))
//                    return;
//                var val = Ext.decode(success.responseText);
//                if (Ext.isEmpty(val))
//                    return;
//                if (val.success) {
//                    var existeCtaPadre = val.data[0].TOTAL_CUENTA;
//                    
//                    if (existeCtaPadre === 0) {
//                        
//                        
//                        me.banderaTipoCompania = '1';
//                        
//                        
//                        
//          
//                    }else{
//                        
//                       //  columnas[4].setVisible(false);
//                        me.banderaTipoCompania = '2'
//                        
//                        
//                    }
//                    
//
//                    
//                       
//                } else if (!val.success) {
//                    msgBoxErr('Cuentas', 'Error cuentas no encontradas');
//                }
//            },
//            timeout: 30000
//
//        });
//        
        Ext.Ajax.request({
            url: 'process/data/BuscaPermisosCta',
            method: 'GET',
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var permisos = val.data[0].PE_PERMISOS;
                    
                    msgOut('permisos'+ permisos);
                    
                    me.permisosC = permisos;
                    
                   
                    
                     if (permisos.indexOf("A")<0 ) {   
                                 grid.down('button[itemId=btnAgregarCta]').setVisible(false); 
                     }
                     if (permisos.indexOf("B")<0 ) {   
                                 grid.down('button[itemId=btnBorrarCta]').setVisible(false); 
                     }
                     
                     me.findCuentas();
                    
                    

                } else if (!val.success) {
                    msgBoxErr('Permisos', 'Error el usuario no tiene permisos');
                    grid.down('button[itemId=btnAgregarCta]').setVisible(false); 
                    grid.down('button[itemId=btnBorrarCta]').setVisible(false); 
                }
            },
            timeout: 30000

        });
    },
    
    
    cleanFilters:function(){
        var me =this,
        grid = me.getGridCuentas();
        grid.filters.clearFilters();
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
                    this.companiaSession = val.data[0].COMPANIA;
                    var me = this,
                            grid = me.getGridCuentas();
                    grid.setTitle('Cuentas  '+val.data[0].NOMBRE1);

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
            
     findCuentas: function(cuenta,order) {

        var me = this,
                grid = me.getGridCuentas(),
                store = grid.getStore();
        if (Ext.isEmpty(cuenta)){
            cuenta = '';
        }
        if (Ext.isEmpty(order)){
            order = 'order by c.cuenta';
        }
        store.proxy.extraParams.cuenta = cuenta;
        store.proxy.extraParams.order = order;

        grid.setLoading('Buscando...');
        store.loadData([], false);
        store.currentPage = 1;
        store.load({
            callback: function() {
                grid.setLoading(false);
            }
        });
    },
    
    editCuentas: function(){
        
        var me = this;
        
        
//      var recs2 = store.getRange();
//      var rec = recs2[0];

       // var estructura = rec.get("ESTRUCTURA");
       
//            var view = Ext.widget('windowcuentas');
//        view.setTitle('Crear Cuenta');
//        var form = view.down('formcuentas').getForm();
        //form.findField('estructuraCuenta').setValue(estructura);
        
       
         me.findCuentaPadre();
        
//        Ext.Ajax.request({
//            url: 'process/data/ActivarCuentaPadre',
//            method: 'GET',
//            scope: this,
//            callback: function(records, operation, success) {
//                if (Ext.isEmpty(success.responseText))
//                    return;
//                var val = Ext.decode(success.responseText);
//                if (Ext.isEmpty(val))
//                    return;
//                if (val.success) {
//                    var existeCtaPadre = val.data[0].TOTAL_CUENTA;
//                    
//                    if (existeCtaPadre === 0) {
//                        
//                        
//                        me.findCuentaPadre('1');
//                        
//                        
//                        
//          
//                    }else{
//                        
//                         me.findCuentaPadre('2');
//                        
//                        
//                        
//                    }
//                    
//
//                    
//                       
//                } else if (!val.success) {
//                    msgBoxErr('Cuentas', 'Error cuentas no encontradas');
//                }
//            },
//            timeout: 30000
//
//        });
    },
    
    findCuentaPadre:function(){
        
        
        
        var me = this,
                  grid = me.getGridCuentas(),
                store = grid.getStore(),
                records = grid.getSelectionModel().getSelection();

        
        var record = records[0];

       var estructura = record.get('ESTRUCTURA');
       var cuenta = record.get('CUENTA');
       var cuentaAlias = record.get('CUENTA_ALIAS');
       var nombre = record.get('NOMBRE');
       var afectable = record.get('AFECTABLE'); 
       var cierre = record.get('CIERRE'); 
       var estatus = record.get('ESTATUS'); 
       var naturaleza = record.get('NATURALEZA'); 
       var tipo = record.get('TIPO'); 
       var mayor = record.get('MAYOR'); 
       var cuentaSat = record.get('CUENTA_SAT'); 
       var idCuenta = record.get('ID');
       var saldos = record.get('SALDO');
       var detPoliza = record.get('DET_POLIZA');
       var divisa = record.get('DIVISA');
       var banco = record.get('BANCO');
       var ctaComple = record.get('CTA_COMPLEMENTARIA');
       var ctaPadre = record.get('CUENTA_PADRE');
       var orden = record.get('ID_ORD_BALANZA');
       

            var view = Ext.widget('windowcuentas');
        view.setTitle('Crear Cuenta');
        var form = view.down('formcuentas').getForm();
        
        view.down('formcuentas').setLoading('Buscando...');
        
        form.findField('cboCuentaPadre').getStore().loadData([], false);

                  
   
        form.findField('estructuraCuenta').setValue(estructura);
        form.findField('txtCuenta').setValue(cuentaAlias);
        form.findField('txtCuentaEstr').setValue(cuenta);
        form.findField('txtNombreCta').setValue(nombre);
        form.findField('cboAfectable').setValue(afectable);
        form.findField('cboCierre').setValue(cierre);
        form.findField('cboEstatus').setValue(estatus);
        form.findField('cboNaturaleza').setValue(naturaleza);
        form.findField('cboTipoCta').setValue(tipo);
        form.findField('cboMayor').setValue(mayor);
        form.findField('txtSaldo').setValue(saldos);
        form.findField('txtPoliza').setValue(detPoliza);
        form.findField('txtOrdenBalanza').setValue(orden);

         //form.findField('cboCuentaPadre').setVisible(true);
                        
                       
                       
                       

                  //   storeForm.loadData([], false);
        
        
                         
           var storeBanco = form.findField('cboBanco').getStore();
        storeBanco.proxy.extraParams.query = '';
        storeBanco.load({
                             callback:function(val1){
                            
                                    form.findField('cboBanco').setValue(banco);
                             }
                         });
//        
           var storeDivisa = form.findField('cboMoneda').getStore();
        storeDivisa.proxy.extraParams.query = '';
        
         storeDivisa.load({
                             callback:function(val1){
                                  
                            
                                    form.findField('cboMoneda').setValue(divisa);
                             }
                         });
        
   
        
        
         
                        
         var storeForm = form.findField('cboCuentaPadre').getStore();
                         storeForm.proxy.extraParams.query = '';
                         
                         storeForm.load({
                             callback:function(val1){
    
                                    form.findField('cboCuentaPadre').setValue(ctaPadre);
                                    
                                    
                                     var storeFormCtaCompl = form.findField('cboCtaComplementaria').getStore();
                                    storeFormCtaCompl.proxy.extraParams.query = '';

                                    storeFormCtaCompl.load({
                                        callback:function(val1){

                                            msgOut(val1);
                                            msgOut('cuenta padre'+ctaComple);
                                               form.findField('cboCtaComplementaria').setValue(ctaComple);
                                               
                                                var storeCtaSat = form.findField('txtCtaSat').getStore();
                                                storeCtaSat.proxy.extraParams.query = '';
                                                storeCtaSat.load({
                                                                     callback:function(val1){

                                                                            form.findField('txtCtaSat').setValue(cuentaSat);
                                                                            
                                                                             view.down('formcuentas').setLoading(false);
                                                                            
                                                                     }
                                                                 });
                         
                                        }
                                    });
                                    
                                    
                             }
                         });
                        
        form.findField('txtCtaSat').setValue(cuentaSat);
        form.findField('txtAccion').setValue('U');
        form.findField('txtID').setValue(idCuenta);

        

    },
    
    crearCuenta:function(){
//           msgOut("crear cuenta");
       
       var me = this,
               
               
                grid = me.getGridCuentas(),
                store = grid.getStore();
      
            var view = Ext.widget('windowcuentas');
        view.setTitle('Crear Cuenta');
        var form = view.down('formcuentas').getForm();
        form.findField('estructuraCuenta').setValue(this.companiaSession);
        form.findField('txtAccion').setValue('I');
        
 //        var me = this;
//        Ext.Ajax.request({
//            url: 'process/data/ActivarCuentaPadre',
//            method: 'GET',
//            scope: this,
//            callback: function(records, operation, success) {
//                if (Ext.isEmpty(success.responseText))
//                    return;
//                var val = Ext.decode(success.responseText);
//                if (Ext.isEmpty(val))
//                    return;
//                if (val.success) {
//                    var existeCtaPadre = val.data[0].TOTAL_CUENTA;
//                    
//                    if (existeCtaPadre === 0) {
//                        
//                        form.findField('cboCuentaPadre').setVisible(true);
//                        me.ctaPadreCompania = '1';
//          
//                    }else{
//                        
//                         form.findField('cboCuentaPadre').setVisible(false);
//                        me.ctaPadreCompania = '0';
//                        
//                    }
//                    
//
//                    
//                       
//                } else if (!val.success) {
//                    msgBoxErr('Cuentas', 'Error cuentas no encontradas');
//                }
//            },
//            timeout: 30000
//
//        });
    },
    
    buscaEstructura2: function(btn){
      
          Ext.Ajax.request({
            url: 'process/data/buscarEstructura2',
            method: 'GET',
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var formatoAlias = val.data[0].FORMATO_ALIAS;
                    
                    msgOut('formatoAlias'+formatoAlias);
                    
                   this.evaluaCtaPadre(btn,formatoAlias);
                  
                    
                       
                } else if (!val.success) {
                     this.evaluaCtaPadre(btn,'');
                  
                }
            },
            timeout: 30000

        });

    },
    
    evaluaCtaPadre:function(btn,formatoAlias){
        
          var me = this,
               
                form = btn.up('formcuentas'),
                 form1 = btn.up('formcuentas'),
                win = form.up('window'),
                gridCta = me.getGridCuentas(),
                store = gridCta.getStore(),
                basicForm = form.getForm();
        
             var cuentaPadre = '';
              //  if(me.ctaPadreCompania === '1'){
                    
                     cuentaPadre = basicForm.findField('cboCuentaPadre').getValue();
                    
                     msgOut("cuentaPadre"+cuentaPadre);

             //   }
              
             //   if(me.ctaPadreCompania === '0'){
                    var mayor = basicForm.findField('cboMayor').getValue();
               //     var cuenta = basicForm.findField('txtCuenta').getValue();
               //       msgOut("cuenta"+cuenta);
                   
                    if(mayor === 'T'){
                        
                        var cuentaPadre = '';
                        
                    }  
//                    }else{
//
//                         var posIni = 1;
//                      
//                          var indCta = cuenta.indexOf("-",posIni);
//                            if(indCta > 0){ 
//                                  while (cuenta.indexOf("-",posIni) > 0) {
//                                      
//                                   var posIni2 = cuenta.indexOf("-",posIni);
//                                   posIni = posIni2 + 1;
//                                    
//                                      // i++;
//                                   }
//                                
//                                  cuentaPadre = cuenta.substr(0, posIni2);
//                                 
//                               }
//                          
//                          msgOut("cuentaPadre"+cuentaPadre);
//                                                   
//                        
//                    }                  

            //    }
                
                 if (!Ext.isEmpty(cuentaPadre)){
                
                      Ext.Ajax.request({
                            url: 'CrearCuenta/transSaldosMov',
                            method: 'GET',
                            params: {
                              
                                cuentaPadre: cuentaPadre

                            },
                            scope: this,
                            callback: function(records, operation, success) {
                                if (Ext.isEmpty(success.responseText))
                                    return;
                                var val = Ext.decode(success.responseText);
                                if (Ext.isEmpty(val))
                                    return;
                                if (val.success) {
                                    
                                       msgOut("succes");
                                    
                               
                     
                                       basicForm.findField('txtTranspasoSaldos').setValue('1');
                                       basicForm.findField('txtCtaAcumuladoraTranSaldos').setValue(cuentaPadre);
                                    
                   
                                      this.saveCuenta(btn, formatoAlias,'1');
                                 

                                } else if (!val.success) {
                                    msgOut("false");
                                    this.saveCuenta(btn, formatoAlias,'0');
                                   
                                }
                            },
                            timeout: 30000

                        });
                
                 }else{
                     
                     
                      this.saveCuenta(btn, formatoAlias,'0');
                     
                     
                 }

//        
        
    },
    
    saveCuenta:function(btn,formatoAlias,banderaCtaPadre){
        
        var me = this,
               
                form = btn.up('formcuentas'),
                 form1 = btn.up('formcuentas'),
                win = form.up('window'),
                gridCta = me.getGridCuentas(),
                store = gridCta.getStore(),
                basicForm = form.getForm();
        
         //var recordsCta = gridCta.getSelectionModel().getSelection();

        
        //var recordCta = recordsCta[0];
          var origen;
        
           store.findBy(function(record,id) {
           
                msgOut('recordCta.get'+ record.get('ORIGEN'));
                
                origen = record.get('ORIGEN');

           });
         
    
    
        if (Ext.isEmpty(origen)){
            
            msgBoxErr('Error','Origen de compania no encontrado');
            return;
            
            
        }
        
       
        if(!Ext.isEmpty(formatoAlias)){

         var cuenta = basicForm.findField('txtCuenta').getValue();
                    var ctaSplit = new Array();
                    var formatoSplit = new Array();
                    //var ctaSplit = cuenta.split("-");
                    ctaSplit = cuenta.split("-");
                    formatoSplit = formatoAlias.split("-");

                    msgOut('cuenta'+ctaSplit.length);
                    msgOut('ctaSplit'+ctaSplit[0]);
                   
            if(formatoSplit.length < ctaSplit.length){
                
                 me.banderaEstructura = '2';
                
            }else{
                    
                     for (var i=0; i < ctaSplit.length; i++) {
                         
                         msgOut('var i'+ i);
                          
                         msgOut('var ctaSplit.length'+ ctaSplit[i].length);
                         msgOut('var formatoSplit'+ formatoSplit[i].length);
                         
                        if(ctaSplit[i].length === formatoSplit[i].length){
                            
                            me.banderaEstructura = '1';
                            
                            
                        }else{
                            
                           
                            me.banderaEstructura = '2';
                            break;
                             
                        } 
       

                   }
                    

            }
         
        }
              
         
                 
           if(me.banderaEstructura === '2' && banderaCtaPadre === '1'){
               // msgOut('afectable'+afecCta.get('AFECTABLE'));
                  msgOut('me.banderaEstructura'+me.banderaEstructura);
                 Ext.MessageBox.show({
                            title: 'Estructura Incorrecta',
                            msg: 'La estructura de la cuenta es incorrecta desea continuar?. Los saldos y polizas de la cuenta acumuladora serán transpasados a la cuenta actual.',
                            icon: Ext.MessageBox.QUESTION,
                            buttons: Ext.Msg.YESNO,
                            fn: function(btn, text) {
                                if (btn === 'yes') {
                                    
                               
                              
                                    
                                     if (basicForm.isValid()) {
                                    form1.setLoading("Guardando Cuenta...");
                                    basicForm.submit({
                                        params : {
                                            
                                                tipoCompania : origen
                                        
                                       },
                                        success: function(form, action) {

                                            Ext.Msg.alert('Guardado', action.result.msg);

                                                    form1.setLoading(false);
                                                     win.close();
                                                    me.findCuentas();


                                        },
                                        failure: function(form, action) {
                                                form1.setLoading(false);
                                            Ext.Msg.alert('Error', action.result.msg);
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

                                
                                  

                                }else{
                                    
                                    
                                         win.close();
                                         return;
                                    
                                    
                                }
                            }
                        });
        
            }else{

            if(me.banderaEstructura === '2'){
                 Ext.MessageBox.show({
                            title: 'Estructura Incorrecta',
                            msg: 'La estructura de la cuenta es incorrecta desea continuar con el guardado?',
                            icon: Ext.MessageBox.QUESTION,
                            buttons: Ext.Msg.YESNO,
                            fn: function(btn, text) {
                                if (btn === 'yes') {
                                    
                               
                              
                                    
                                     if (basicForm.isValid()) {
                                    form1.setLoading("Guardando Cuenta...");
                                    basicForm.submit({
                                         params : {
                                            
                                                tipoCompania : origen
                                        
                                       },
                                        success: function(form, action) {

                                            Ext.Msg.alert('Guardado', action.result.msg);

                                                    form1.setLoading(false);
                                                     win.close();
                                                    me.findCuentas();


                                        },
                                        failure: function(form, action) {
                                                form1.setLoading(false);
                                            Ext.Msg.alert('Error', action.result.msg);
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

                                
                                  

                                }else{
                                    
                                    
                                         win.close();
                                         return;
                                    
                                    
                                }
                            }
                        });
        
            }else{
            
            if(banderaCtaPadre === '1'){
              Ext.MessageBox.show({
                            title: 'Transpaso de Saldos',
                            msg: 'Los saldos y polizas de la cuenta acumuladora serán transpasados a la cuenta actual desea continuar con el guardado?',
                            icon: Ext.MessageBox.QUESTION,
                            buttons: Ext.Msg.YESNO,
                            fn: function(btn, text) {
                                if (btn === 'yes') {
                                    
                                     if (basicForm.isValid()) {
                                    form1.setLoading("Guardando Cuenta...");
                                    basicForm.submit({
                                         params : {
                                            
                                                tipoCompania : origen
                                        
                                       },
                                        success: function(form, action) {

                                            Ext.Msg.alert('Guardado', action.result.msg);

                                                    form1.setLoading(false);
                                                     win.close();
                                                    me.findCuentas();


                                        },
                                        failure: function(form, action) {
                                                form1.setLoading(false);
                                            Ext.Msg.alert('Error', action.result.msg);
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

                                
                                  

                                }else{
                                    
                                    
                                         win.close();
                                         return;
                                    
                                    
                                }
                            }
                        });

            
                 }else{
                        if (basicForm.isValid()) {
                                    form1.setLoading("Guardando Cuenta...");
                                    basicForm.submit({
                                         params : {
                                            
                                                tipoCompania : origen
                                        
                                       },
                                        success: function(form, action) {
                                            
                                            Ext.Msg.alert('Guardado', action.result.msg);

                                                    form1.setLoading(false);
                                                     win.close();
                                                    me.findCuentas();


                                        },
                                        failure: function(form, action) {
                                                form1.setLoading(false);
                                            Ext.Msg.alert('Error', action.result.msg);
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
            }
            }
    },
            
      cancelaCuenta: function(btn){
  
           
        var me = this,
                 grid = me.getGridCuentas(),
                store = grid.getStore(),
                records = grid.getSelectionModel().getSelection();
                

        var selection = records[0];
        var estructura = selection.get('ESTRUCTURA');
        var cuenta = selection.get('CUENTA');
        var idCuenta = selection.get('ID');
        
       

        Ext.MessageBox.show({
            title: 'Borrando Cuenta',
            msg: 'Esta seguro que desea borrar la cuenta?',
            icon: Ext.MessageBox.QUESTION,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {
                   
                  if(!Ext.isEmpty(selection.get('SALDO'))){
                  msgOut("saldo"+selection.get('SALDO'));
                  
                       Ext.Ajax.request({
                            url: 'process/data/buscaSaldo',
                            method: 'GET',
                            params: {
                              
                                cuenta: selection.get('SALDO')

                            },
                            scope: this,
                            callback: function(records, operation, success) {
                                if (Ext.isEmpty(success.responseText))
                                    return;
                                var val = Ext.decode(success.responseText);
                                if (Ext.isEmpty(val))
                                    return;
                                if (val.success) {
                                    var saldoInicial = val.data[0].SALDO_INICIAL;
                                    var cargos = val.data[0].CARGOS;
                                    var abonos = val.data[0].ABONOS;
                                    var saldoFinal = val.data[0].SALDO_FINAL;
                                    
                                  if (saldoInicial > 0 || cargos > 0 || abonos > 0 || saldoFinal > 0){
                                      
                                      msgBoxErr('Error', 'La cuenta tiene saldos y no puede ser borrada');
                                       return;
                                      
                                  }
                                 

                                } else if (!val.success) {
                                   
                                }
                            },
                            timeout: 30000

                        });
                  
                        

                    }
                    if(!Ext.isEmpty(selection.get('DET_POLIZA'))){
                     msgOut("poliza"+selection.get('DET_POLIZA'));
                         msgBoxErr('Error', 'La cuenta tiene poliza y no puede ser borrada');
                        return;

                    }



                   

              //          if (selection.phantom) {

               //             store.remove(selection);

                 //       } else {
                           
                          //  store.destroy(selection);

                 //           store.remove(selection);

                 //       }
                   



                        grid.setLoading("Borrando cuenta ...");
                        Ext.Ajax.request({
                            url: 'CrearCuenta/cuentas/del',
                            timeout: 60000,
                            scope: this,
                            params: {
                                // data: jsonData, 
                                estructura: estructura,
                                cuenta: cuenta,
                                idCuenta: idCuenta
                     

                            },
                            success: function(response) {
                                var text = response.responseText;
                                grid.setLoading(false);
                                grid.setLoading('Buscando...');
                                store.loadData([], false);
                                store.load({
                                    callback: function() {
                                        grid.setLoading(false);

                                    }
                                });

                            },
                            failure: function(resp, dos) {
                                msgOut("en failure");
                                msgBoxErr('Error', 'Error al borrar Detalle:' + store.getProxy( ).getReader().rawData.msg);
                                //this.loadSueldo();
                                 grid.setLoading(false);
                                grid.setLoading('Buscando...');
                                store.loadData([], false);
                                store.load({
                                    callback: function() {
                                        grid.setLoading(false);

                                    }
                                });
                            },
                            callback: function(a, b, c) {
                                grid.setLoading(false);
                                grid.setLoading('Buscando...');
                                store.loadData([], false);
                                store.load({
                                    callback: function() {
                                        grid.setLoading(false);

                                    }
                                });
                                if (Ext.isEmpty(c.responseText)) {
                                    msgBoxErr('Error', 'Error al Eliminar');
                                    return;

                                }
                                var res = Ext.decode(c.responseText);
                                if (res.success) {

                                    msgBox('Borrado', 'Borrado con Exito');
                                }else
                                 {

                                    msgBoxErr('Error', 'Error al borrar la cuenta');
                                                                }
                            }
                        });
                    

                }
            }
        });

        
    
  
  
      }
    
    
});