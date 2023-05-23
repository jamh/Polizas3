Ext.define('AppDashboard.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: [
        'Pie',
        'StoreTiposCambio',
        'StoreVideos',
        'StorePolizasDescuadradas',
        'StoreSaldos',
        'StoreFe'
        
    ],
    models: [
        'Pie',
        'ModeloTiposCambio',
        'ModeloVideos',
        'ModeloPolizasDescuadradas',
        'ModeloSaldos',
        'ModeloFe'
    ],
    refs: [
        {
            ref: 'panelVideos',
            selector: 'panelvideos'
        },
        {
            ref: 'gridFeFeraz',
            selector: 'gridfeferaz'
        },
        {
            ref:'gridPolizasDescuadradas',
            selector:'gridpolizasdescuadradas'
        },
        {
            ref:'gridSaldos',
            selector:'gridsaldos'
        }
    ],
    views: [
        'Main',
        'WidTiposCambio.ChartTiposCambio',
        'WidTiposCambio.WindowTiposCambio',
        'Dashboard',
        'WidAyuda.PanelVideos',
        'WidPolizas.GridPolizasDescuadradas',
        'WidSaldos.GridSaldos',
        'WidFeFeraz.GridFeFeraz'
    ],
    companiaSesion: null,
    init: function() {

        var me = this;
        me.control({
            appmain: {
                afterrender: function() {
                    me.findCompania();


                }
            },
            panelvideos: {
                selectAyuda: function(view, model) {
                    me.muestraVideo(view, model);

                }
            },
            gridfeferaz: {
                   verDashXML: function(btn){
                       
                       me.verDashXML(btn);
                       
                   },
                   verDashPDF: function(btn){
                        me.verDashPDF(btn);
                   }
            },
           gridpolizasdescuadradas: {
                 imprimirDashPoliza:function(btn){
                     
                       me.imprimirDashPoliza(btn);
                     
                 }
       
           },
                   
              gridsaldos:{
          
                    imprimirDashSaldo: function(btn){
                        
                        me.imprimirDashSaldo(btn);
                    }
          
              }
               
//            panelvideos: {
////                afterrender: function() {
////                    me.loadAyuda();
////                }
//            }

        });
    },
    verDashPDF: function(btn){
        
        
       var me = this,
                grid = me.getGridFeFeraz(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado Factura");
            return;
        }
        var compania = record.get('COMPANIA_CFDI');
       // var xml = record.get('XML');
       // xml = xml.replace('.xml', '.pdf');
       // xml = xml.replace('.XML', '.pdf');
        
        var factura = record.get('ID_FACTURA');
        var tipo_comprobante = record.get('ID_TIPO_COMPROBANTE');
         var id_cliente = record.get('ID_CLIENTE');



            var string = Ext.String.format(
                   // 'http://www.appferaz3.com/cfdis/Comprobante_{0}_{1}.xml',
                      'http://www.appferaz3.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=cfdi&catalogo=Rep_ImprimeFactura&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&id_cliente={3}&id_tipo_comprobante={2}&id_factura={1}&reporte=Rep_ImprimeFactura',
                    //'http://' + window.location.host + '/carga_erp/xml/{0}/{1}'//,
                    //'/empres/XML/{0}/{1}',
                    compania,
                    factura,
                    tipo_comprobante,
                    id_cliente
                    //xml
                );
        
        Ext.create('Ext.window.Window', {
            title: 'PDF',
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
        
    },
    imprimirDashSaldo: function(value){
        
          var me = this,
                grid = me.getGridSaldos(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado la poliza");
        }
        var compania = record.get('COMPANIA');
        var calendario = record.get('CALENDARIO');
        var periodo = record.get('PERIODO');
        var cuenta = record.get('CUENTA_ALIAS');

     

     
        var string = Ext.String.format(
                //'<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
                //'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con  v',
               // 'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_balanza&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={1}&usu=a&estructura={1}&divisa=PES&paridad=1&tipo=CON&calendario={2}&periodo={3}&cuentas_cero=0&acumulado=0&c_costos=TODOS&cuenta={4}&col_deu_acr=N&cuenta_sat=0&reporte=REP_balanza',
                'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_balanza&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&usu=admin_TEMP&estructura={0}&divisa=PES&paridad=1&tipo=CON&calendario={1}&periodo={2}&cuentas_cero=0&acumulado=0&c_costos=TODOS&cuenta={3}&col_deu_acr=N&cuenta_sat=0&reporte=REP_balanza',
                compania,
                calendario,
                periodo,
                cuenta
                );
        window.open(string);

        return string;
    
        
        
    },
    
      imprimirDashPoliza: function(value) {
        var me = this,
                grid = me.getGridPolizasDescuadradas(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado la poliza");
        }
        var compania = record.get('COMPANIA');
        var numero = record.get('NUMERO');
        var tipoPoliza = record.get('TIPO_POLIZA');
        var fecha = record.get('FECHA');

        var fechaM;
        if (Ext.isDate(fecha)) {
            fechaM = Ext.Date.format(fecha, 'dmY');
            fecha = fechaM;
        } else {

            fechaM = Ext.Date.parse(fecha, 'd/m/Y');
            msgOut(fechaM);
            var fechaNueva = Ext.Date.format(fechaM, 'dmY');
            msgOut(fechaNueva);
            fecha = fechaNueva;
        }

        //var fecha = Ext.Date.format(record.get('FECHA'), 'dmY');

        var string = Ext.String.format(
                //'<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
                'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con  v',
                numero,
                compania,
                tipoPoliza,
                fecha,
                compania
                );
        window.open(string);

        return string;
    },
    
      verDashXML:function(){
         var me = this,
                grid = me.getGridFeFeraz(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado XML");
            return;
        }
        var compania = record.get('COMPANIA_CFDI');
       // var xml = record.get('XML');
       // xml = xml.replace('.xml', '.pdf');
       // xml = xml.replace('.XML', '.pdf');
        
        var xml = record.get('ID_FACTURA');


            var string = Ext.String.format(
                    'http://www.appferaz3.com/cfdis/Comprobante_{0}_{1}.xml',
                    //'http://' + window.location.host + '/carga_erp/xml/{0}/{1}'//,
                    //'/empres/XML/{0}/{1}',
                    compania,
                    xml
                );
        
        Ext.create('Ext.window.Window', {
            title: 'XML',
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
        
    },
    muestraVideo: function(view, model) {
//        msgOut(model[0].data.URL);
        Ext.create('Ext.window.Window', {
            title: model[0].data.NOMBRE,
            height: 500,
            width: 500,
//            minimizable: true,
//            maximizable : true,
            modal: true,
            layout: 'fit',
            items: {// Let's put an empty grid in just to illustrate fit layout
                xtype: 'container',
//                                cls: 'fondoPregunta',
                flex: 1,
                html: '<video id="example_video_1" class="video-js vjs-default-skin" controls preload="auto" width="489" height="450" poster="' + model[0].data.URL_IMAGEN + '" ><source src="' + model[0].data.URL + '" type="video/mp4" /></video>'

            }
        }).show();


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
                    var nombre = val.data[0].NOMBRE1;
                    me.companiaSesion = nombre;
//                       me.widTiposCambio();  
//                      me.widAyuda();
//                    var me = this,
//                            grid = me.getGridMaestro();
//                    grid.setTitle(val.data[0].NOMBRE1);
//                    me.loadCookie();
                } else if (!val.success) {
                    msgBoxErr('Compania', 'Error compañia no encontrada');
                }
            },
            timeout: 30000

        });
    },
    loadAyuda: function() {
        var me = this,
                panelAyuda = me.getPanelAyuda();

        var controllerFE = me.getController('AppAyuda.controller.Main');

        var vista = controllerFE.getView(controllerFE.views[0]).create();
        panelAyuda.add(vista);
    },
    widTiposCambio: function() {
        Ext.widget('windowtiposcambio');
    },
    getCompania: function() {
        var me = this;
        return me.companiaSesion;
    },
    widAyuda: function() {
        var me = this;
        var controllerFE = me.getController('AppAyuda.controller.Main');

        var vista = controllerFE.getView(controllerFE.views[0]).create();


        var window = Ext.create('Ext.window.Window', {
            title: 'Ayuda Sistema',
            height: '100%',
            x: 650,
            y: 1,
            width: '50',
//             modal: true,
            layout: 'fit'

        }).show();


        window.add(vista);
        window.show();
    }




});
