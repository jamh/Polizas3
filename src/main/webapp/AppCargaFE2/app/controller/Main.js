Ext.define('AppCargaFE2.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: [
        'StoreArchivos',
        'StoreCXC',
        'StoreCXP',
        'StoreDirectorios',
        'StoreBuscaFactura',
        'StorePagos',
        'StorePagosDet',
        'StorePagosCXC',
        'StorePagosDetCXC',
        'StorePolRelCXC',
        'StorePolRelCXP',
        'StorePolRelPagosCXP',
        'StoreComplPagos',
        'StoreComplPagosDet',
        'StorePagosOtras',
        'StorePagosOtrasDet'
    ],
    models: [
        'ModeloArchivos',
        'ModeloCXC',
        'ModeloCXP',
        'ModeloDirectorios',
        'ModeloBuscaFactura',
        'ModeloPagos',
        'ModeloPagosDet',
        'ModeloPagosCXC',
        'ModeloPagosDetCXC',
         'ModeloPolRelCXC',
         'ModeloPolRelCXP',
         'ModeloPolRelPagosCXP',
         'ModeloComplPagos',
         'ModeloComplPagosDet',
         'ModeloPagosOtras',
         'ModeloPagosOtrasDet'
    ],
    refs: [
        {
            ref: 'gridArchivos',
            selector: 'gridarchivos'
        },
        {
            ref: 'gridCXC',
            selector: 'gridcxc'
        },
        {
            ref: 'gridCXP',
            selector: 'gridcxp'
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
            ref: 'formSatCXC',
            selector: 'formsatcxc'
        },
        {
            ref: 'formRelacionPol',
            selector: 'formrelacionpol'
        },
        {
            ref: 'gridPagos',
            selector: 'gridpagos'
        },
        {
            ref: 'gridPagosDet',
            selector: 'gridpagosdet'
        },
        {
            ref: 'panelSur',
            selector: 'panelsur'

        },
        {
            ref: 'gridPagosCXC',
            selector: 'gridpagoscxc'

        },
        {
            ref: 'gridPagosDetCXC',
            selector: 'gridpagosdetcxc'
        },
        {
            ref: 'panelSurCXC',
            selector: 'panelsurcxc'

        },
        {
            ref: 'formDatosPago',
            selector: 'formdatospago'

        },
        {
            ref: 'formDatosPagoCXC',
            selector: 'formdatospagocxc'

        },
        {
            ref: 'gridPolRelCXC',
            selector: 'gridpolrelcxc'
        },
        {
            ref: 'gridPolRelCXP',
            selector: 'gridpolrelcxp'
        },
        {
            ref:'formPolMult',
            selector:'formpolmult'
        },
        {
            ref:'formPolMultCXP',
            selector:'formpolmultcxp'
        },
        {
            ref:'gridPolRelPagosCXP',
            selector:'gridpolrelpagoscxp'
            
        },
        {
            ref:'gridComplPagos',
            selector:'gridcomplpagos'
            
        },
        {
            ref:'gridComplPagosDet',
            selector:'gridcomplpagosdet'
            
        },
        {
            ref:'gridPagosOtras',
            selector:'gridpagosotras'
            
        },
         {
            ref:'gridPagosOtrasDet',
            selector:'gridpagosotrasdet'
            
        },
        {
            ref:'panelSurOtras',
            selector:'panelsurotras'
            
        }
        
        


    ],
    views: [
        'GridArchivos',
        'GridCXC',
        'GridCXP',
        'GridDirectorios',
        'Main',
        'FormArchivos',
        'WindowArchivos',
        'FormRelacionPol',
        'WindowRelacionPol',
        'FormSat',
        'FormSatCXC',
        'WindowSat',
        'WindowSatCXC',
        'GridPagos',
        'GridPagosDet',
        'PanelSur',
        'GridPagosCXC',
        'GridPagosDetCXC',
        'PanelSurCXC',
        'FormDatosPago',
        'WindowDatosPagos',
        'FormDatosPagoCXC',
        'WindowDatosPagosCXC',
        'GridPolRelCXC',
        'GridPolRelCXP',
        'FormPolMult',
        'WindowPolMult',
        'FormPolMultCXP',
        'WindowPolMultCXP',
        'GridPolRelPagosCXP',
        'GridComplPagos',
        'GridComplPagosDet',
        'GridPagosOtras',
        'GridPagosOtrasDet',
        'PanelSurOtras'
                

    ],
    paginaAnt: 1,
    calendarioSys: '',
    periodoSys: '',
    periodoSysFin: '',
    paginaAntCXP: 1,
    paginaAntCompl:1,
    companiaSession: '',
    calendarioSysPag: '',
    periodoSysPag: '',
    periodoSysFinPag: '',
    calendarioSysPagCXC: '',
    periodoSysPagCXC: '',
    periodoSysFinPagCXC: '',
    calendarioSysCompl:'',
    periodoSysCompl:'',
    periodoSysFinCompl:'',
    calendarioSysPagOtras :'',
    periodoSysPagOtras :'',
    periodoSysFinPagOtras :'',
    init: function() {

        var me = this;
        Ext.Ajax.timeout = 600000;
        Ext.override(Ext.data.proxy.Ajax, {timeout: 600000});


        me.control({
            
            panelsurotras:{
                
                
            },
            
            gridpagosotrasdet:{
                
             
                addPagosDetOtras: function(btn, cellEditing) {

                    msgOut('agrega pagos det');

                    me.addPagosDetOtras(btn, cellEditing);

                },
                cuentaBancoOtras: function(cuentaBanco, nombreBanco) {

                    msgOut('encuenta banco' + cuentaBanco);

                    me.cuentaBancoOtras(cuentaBanco, nombreBanco);


                },
                
                sumaImporteOtras: function(value) {


                    me.sumaImporteOtras(value);



                },
                sumaImporte2Otras: function(value) {


                    me.sumaImporte2Otras(value);



                },
                
                guardarDetPagosOtras: function() {

                    me.guardarDetPagosOtras();
                },
                
                deteleDetPagoOtras: function() {

                    me.deteleDetPagoOtras();
                }
                
                
            },
            
            
            gridpagosotras:{
                
                cleanFiltersPagosOtras:function(){
                    
                    me.cleanFiltersPagosOtras();
                },
                
                buscaPorFechaPagosOtras:function(calendario, periodo, periodoFin){
                    
                    me.buscaPorFechaPagosOtras(calendario, periodo, periodoFin);
                    
                    
                },
                
                afterrender: function() {
                  //  me.actualizaEstatusPagos();
                    me.buscaFechaSistemaPagosOtras();
                    //   me.findPagos();


                },
                
                select: function(view, model, index) {

                    msgOut('en select otras');

                    me.loadSumaImportesOtras();
                    me.buscaDetPagosOtras();
                    
                    me.actualizaEstatusOtras();
                    

                }
                
                
            },
            
            gridcomplpagosdet:{
                
                  verPDFCompl: function() {
                    me.imprimirPDFCompl();
                    },
                    verXMLCompl: function() {

                        me.imprimirXMLCompl();

                    },
                    
                    cleanFiltersArchComplDet:function(){
                        
                        me.cleanFiltersArchComplDet();
                    }
                    
                
                
                
                
            },
            
            gridcomplpagos:{
                
                cleanFiltersArchCompl:function(){
                    
                    me.cleanFiltersArchCompl();
                },
                
                
                  verXMLPagCompl: function() {

                        me.imprimirXMLPagCompl();

                    },
                  
                
                recargaPaginaCompl:function(pagina){
                    
                    
                  
                    
                    if (this.paginaAntCompl === pagina) {
                        this.paginaAntCompl = pagina;
                    } else {
                        this.paginaAntCompl = pagina;
                        me.recargaPaginaCompl(pagina);
                    }
                },
                
                afterrender: function() {
                    
                   
                    
                       
                        me.findCompania();
                        me.buscaFechaSistemaCompl();
                    

                },
                
                buscaPorFechaCompl: function(calendario, periodo, periodoFin) {

                    msgOut(calendario + periodo);

                    me.buscaPorFechaCompl(calendario, periodo, periodoFin);


                },
                select: function(view, model, index) {

                     console.log(view);  
                     console.log(model);
                     console.log(index);
                     
                     me.buscaDetCompl(model);

                }
                
                
            },
            
            gridpolrelpagoscxp: {
                
                 afterrender: function() {
                  
                   me.findPolRelPagosCXP();

                },
                borraFERelacionPolPagosCXP: function(){
                    me.borraFERelacionPolPagosCXP();
                },
                verPolizaPagosCXP: function() {
                    me.imprimirPolizaPagosCXP();
                }
//                
            },
            
              formpolmult:{
                
                savePolMult: function(){
                    
                    me.guardarArchivosMult();
                    
                }                
            },
            formpolmultcxp:{
                
                savePolMultCXP: function(){
                    
                    me.guardarArchivosMultCXP();
                    
                }                
            },
            
            
             gridpolrelcxc: {
                
                 afterrender: function() {
                  
                   me.findPolRelCXC();

                },
                borraFERelacionPolCXC: function(){
                    me.borraFERelacionPolCXC();
                },
                verPoliza2CXC: function() {
                    me.imprimirPoliza2CXC();
                }
                
            },
             gridpolrelcxp: {
                
                 afterrender: function() {
                  
                   me.findPolRelCXP();

                },
                borraFERelacionPolCXP: function(){
                    me.borraFERelacionPolCXP();
                },
                verPoliza2CXP: function() {
                    me.imprimirPoliza2CXP();
                }
                
            },
            formdatospago: {
                guardaPagoTotal: function(btn) {

                    me.guardaPagoTotal(btn);


                }


            },
            formdatospagocxc: {
                guardaPagoTotalCXC: function(btn) {

                    me.guardaPagoTotalCXC(btn);


                }


            },
            gridpagosdetcxc: {
                select: function(view, model, index) {


                },
                deteleDetPagoCXC: function() {

                    me.deteleDetPagoCXC();
                },
                cuentaBancoCXC: function(cuentaBanco, nombreBanco) {

                    msgOut('encuenta banco' + cuentaBanco);

                    me.cuentaBancoCXC(cuentaBanco, nombreBanco);


                },
                addPagosDetCXC: function(btn, cellEditing) {

                    msgOut('agrega pagos det');

                    me.addPagosDetCXC(btn, cellEditing);

                },
                guardarDetPagosCXC: function() {

                    me.guardarDetPagosCXC();
                },
                sumaImporteCXC: function(value) {


                    me.sumaImporteCXC(value);



                },
                sumaImporte2CXC: function(value) {


                    me.sumaImporte2CXC(value);



                }



            },
            gridpagoscxc: {
                
                guardarArchivosPagosCXC:function(){
                    
                    me.guardarArchivosPagosCXC();
                    
                },
                
                
                verConvertidorPagoCXC:function(){
                    
                    me.verConvertidorPagoCXC();
                },
                
                decargaPagosCXC: function() {
                    me.decargaPagosCXC();
                },
                buscaPorFechaPagosCXC: function(calendario, periodo, periodoFin) {

                    msgOut(calendario + periodo);

                    me.buscaPorFechaPagosCXC(calendario, periodo, periodoFin);


                },
                decargaPagosCXCpag: function() {
                    me.decargaPagosCXCpag();
                },
                select: function(view, model, index) {

                    msgOut('en select');


                    me.buscaDetPagosCXC();
                    me.actualizaEstatusCXC();
                    me.loadSumaImportesCXC();

                },
                cleanFiltersPagosCXC: function() {

                    me.cleanFiltersPagosCXC();
                },
                afterrender: function() {
                   // me.actualizaEstatusPagosCXC();
                    me.buscaFechaSistemaPagosCxC();
                    //   me.findPagos();


                },
                pagoAllCXC: function(widget, col) {

                    me.datosPagosTotalCXC("T");

                    // this.saveAll(col);


                },
                pagoAllParCXC: function(widget, col) {

                    me.datosPagosTotalCXC("P");


                },
                cancelPagoAllCXC: function(widget, col) {

                    me.cancelPagoAllCXC();

                }

            },
            gridpagos: {
                
                relacionaPolExistentePagosCXP:function(){
                    
                    me.relacionaPolExistentePagosCXP();
                },
                
                verConvertidorPagoCXP:function(){
                    
                    me.verConvertidorPagoCXP();
                },
                
                 guardarArchivosPagosCXP:function(){
                    
                    me.guardarArchivosPagosCXP();
                },
                
                
                setConcGastoPago:function(caso){
                    
                   me.setConcGastoPago(caso);  
                },
                
                decargaPagosCXP: function() {
                    me.decargaPagosCXP();
                },
                buscaPorFechaPagosCXP: function(calendario, periodo, periodoFin) {

                    msgOut(calendario + periodo);

                    me.buscaPorFechaPagosCXP(calendario, periodo, periodoFin);


                },
                decargaPagosPgCXP: function() {
                    me.decargaPagosPgCXP();
                },
                
                
               
                select: function(view, model, index) {

                  //  msgOut('en select');

                    me.loadSumaImportes();
                    me.buscaDetPagos();
                    
                    me.actualizaEstatus();
                    

                },
                pagoAll: function(widget, col) {

                    me.datosPagosTotal("T");

                    // this.saveAll(col);


                },
                pagoAllPar: function(widget, col) {

                    me.datosPagosTotal("P");


                },
                cancelPagoAll: function(widget, col) {

                    me.cancelaPagosAll();
                },
                cleanFiltersPagos: function() {

                    me.cleanFiltersPagos();
                },
                afterrender: function() {
                  //  me.actualizaEstatusPagos();
                    me.buscaFechaSistemaPagosCxp();
                    //   me.findPagos();


                }


            },
            gridpagosdet: {
                select: function(view, model, index) {


                },
                deteleDetPago: function() {

                    me.deteleDetPago();
                },
                cuentaBanco: function(cuentaBanco, nombreBanco) {

                    msgOut('encuenta banco' + cuentaBanco);

                    me.cuentaBanco(cuentaBanco, nombreBanco);


                },
                addPagosDet: function(btn, cellEditing) {

                    msgOut('agrega pagos det');

                    me.addPagosDet(btn, cellEditing);

                },
                guardarDetPagos: function() {

                    me.guardarDetPagos();
                },
                sumaImporte: function(value) {


                    me.sumaImporte(value);



                },
                sumaImporte2: function(value) {


                    me.sumaImporte2(value);



                }



            },
            gridcxc: {
                afterrender: function() {
                    
                    console.log(ppPago);
                    
                    if(ppPago === '1'){
                    
                     me.loadPermisosInterfazPagos();
                    
                    }else{
                    
                        me.loadPermisosInterfaz();
                        me.findCompania();
                        me.buscaFechaSistema();
                    }
                    //  me.findArchivos();

                },
                relacionaPolExistenteCXC:function(){
                    
                    me.relacionaPolExistenteCXC();
                },
                buscaPorFecha: function(calendario, periodo, periodoFin) {

                    msgOut(calendario + periodo);

                    me.buscaPorFecha(calendario, periodo, periodoFin);


                },
                select: function(view, model, index) {
                    var me = this,
                            grid = me.getGridCXC();

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
                    var detailPanel = Ext.getCmp('detailPanelCXC');
                    detailPanel.update(bookTpl.apply(record.data));
                    
                    
                    var bookTplMarkup2 = [
                        '<div class="feDetails">',
                        '<ul>',
                        '<li><b>Num. Empleado:</b> {NUM_EMPLEADO}</li>',
                        '<li><b>Total Percepciones:</b> {TOTAL_PERCEPCIONES}</li>',
                        '<li><b>Total Deducciones:</b> {TOTAL_DEDUCCIONES}</li>',
                        '<li><b>Num. D&iacute;as Pagados:</b> {NUM_DIAS_PAGADOS}</li>',
                        '<li><b>Fecha Pago:</b> {FECHA_PAGO}</li>',
                        '<li><b>R. Patronal:</b> {REGISTRO_PATRONAL}</li>',
                        '<li><b>Salario Diario Int.:</b> {SALARIO_DIARIO_INT}</li>',
                       
                        '</ul>',
                        '</div>',
                        '<div class="feDetails2">',
                        '<ul>',
                        '<li><b>Cuenta Bancaria:</b>  {CUENTA_BANCARIA}</li>',
                        '<li><b>Periocidad Pago:</b>  {PERIODICIDAD_PAGO}</li>',
                        '<li><b>Puesto:</b>  {PUESTO}</li>',
                        '<li><b>Departamento:</b>  {DEPARTAMENTO}</li>',
                        '<li><b>Fecha Ini. Rel. Laboral:</b>  {FECHA_INI_REL_LABORAL}</li>',
                        '<li><b>Num. Seg. Social:</b>  {NUM_SEG_SOCIAL}</li>',
                        '<li><b>Curp:</b>  {CURP}</li>',
                        '</ul>',
                        '</div>'





                    ];
                    
                    var bookTplNomina = Ext.create('Ext.Template', bookTplMarkup2);
                    var detailPanelNomina = Ext.getCmp('detailPanelCXCNomina');
                    detailPanelNomina.update(bookTplNomina.apply(record.data));
                    
                    


                },
                actIdConGasto: function(val, col) {
                    msgOut(val.valueModels[0].data.NO_CASO);
                    me.actIdConGasto(val.valueModels[0].data.NO_CASO, col);
                },
                decargaCXC: function() {

                    me.decargaCXC();
                },
                decargaCXCpag: function() {

                    me.decargaCXCpag();
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
                guardarArchivosPagos:function(){
                    
                    me.guardarArchivosPagos();
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
                
                verConvertidorPago:function(){
                    
                     me.verConvertidorPago();
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
            gridcxp: {
                
                
                
               
                afterrender: function() {
                    me.findCompania();
                    me.buscaFechaSistemaCXP();
                    //  me.findArchivos();

                },
                relacionaPolExistenteCXP:function(){
                    
                    console.log('en relacion cxp');
                    
                    me.relacionaPolExistenteCXP();
                },
                decargaCXP: function() {

                    me.decargaCXP();
                },
                decargaCXPpag: function() {

                    me.decargaCXPpag();
                },
                buscaPorFechaCXP: function(calendario, periodo, periodoFin) {

                    msgOut(calendario + periodo);

                    me.buscaPorFechaCXP(calendario, periodo, periodoFin);


                },
                select: function(view, model, index) {
                    var me = this,
                            grid = me.getGridCXP();

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
                    var detailPanel = Ext.getCmp('detailPanelCXP');
                    detailPanel.update(bookTpl.apply(record.data));
                    
                    
                    var bookTplMarkup2 = [
                        '<div class="feDetails">',
                        '<ul>',
                        '<li><b>Num. Empleado:</b> {NUM_EMPLEADO}</li>',
                        '<li><b>Total Percepciones:</b> {TOTAL_PERCEPCIONES}</li>',
                        '<li><b>Total Deducciones:</b> {TOTAL_DEDUCCIONES}</li>',
                        '<li><b>Num. D&iacute;as Pagados:</b> {NUM_DIAS_PAGADOS}</li>',
                        '<li><b>Fecha Pago:</b> {FECHA_PAGO}</li>',
                        '<li><b>R. Patronal:</b> {REGISTRO_PATRONAL}</li>',
                        '<li><b>Salario Diario Int.:</b> {SALARIO_DIARIO_INT}</li>',
                       
                        '</ul>',
                        '</div>',
                        '<div class="feDetails2">',
                        '<ul>',
                        '<li><b>Cuenta Bancaria:</b>  {CUENTA_BANCARIA}</li>',
                        '<li><b>Periocidad Pago:</b>  {PERIODICIDAD_PAGO}</li>',
                        '<li><b>Puesto:</b>  {PUESTO}</li>',
                        '<li><b>Departamento:</b>  {DEPARTAMENTO}</li>',
                        '<li><b>Fecha Ini. Rel. Laboral:</b>  {FECHA_INI_REL_LABORAL}</li>',
                        '<li><b>Num. Seg. Social:</b>  {NUM_SEG_SOCIAL}</li>',
                        '<li><b>Curp:</b>  {CURP}</li>',
                        '</ul>',
                        '</div>'





                    ];
                    
                    var bookTplNomina = Ext.create('Ext.Template', bookTplMarkup2);
                    var detailPanelNomina = Ext.getCmp('detailPanelCXPNomina');
                    detailPanelNomina.update(bookTplNomina.apply(record.data));
                    
                    
                    


                },
                actIdConGastoCXP: function(val, col) {
                    msgOut(val.valueModels[0].data.NO_CASO);
                    me.actIdConGastoCXP(val.valueModels[0].data.NO_CASO, col);
                },
                beforecheckPolizaCXP: function(index, checked) {


                    me.beforecheckPolizaCXP(index, checked);

                },
                actFechaPolCXP: function(val, col) {

                    msgOut(val);

                    me.actFechaPolCXP(val, col);

                },
                selectAllCXP: function(widget, col) {
                    this.selTodosCXP(col);
                },
                deSelectAllCXP: function(widget, col) {
                    this.desSelTodosCXP(col);
                },
                relacionarPolizaCXP: function() {
//                        msgOut("relacionarPoliza");
                    this.relacionarPolizaCXP();
                },
                quitarRelacionPolizaCXP: function() {
                    me.preguntaQuitarRelacionCXP();
                },
                validaSatCXP: function(val, col) {

                    me.validaSatCXP(val, col);
                },
                addArchivoCXP: function(btn) {
                    me.addArchivoCXP(btn);
                },
                deleteArchivoCXP: function(btn) {
                    me.deleteArchivoCXP(btn);
                },
                guardarArchivosCXP: function() {
                    me.guardarArchivosCXP();
                },
                 guardarArchivosMultCXP:function(){
                    
                    me.selectDatosPolCXP();
                    
                    //me.guardarArchivosMult();
                },
                
                recargarArchivoCXP: function() {
                    me.findArchivosCXP();
                },
                setConcGastoCXP: function(conc) {
                    me.setConcGastoCXP(conc);
                },
                verPolizaCXP: function() {
                    me.imprimirPolizaCXP();
                },
                verPDFCXP: function() {
                    me.imprimirPDFCXP();
                },
                verXMLCXP: function() {

                    me.imprimirXMLCXP();

                },
                descargaSatCXP: function(btn) {
                    me.descargaSatCXP(btn);
                },
                findFacturaCXP: function(fact) {
                    me.findArchivosCXP(fact);
                },
                cleanFiltersArchCXP: function() {
                    me.cleanFiltersArchCXP();

                },
                verConvertidorCXP: function() {
                    me.verConvertidorCXP();
                },
                recargaPaginaCXP: function(pagina) {
                    if (this.paginaAntCXP === pagina) {
                        this.paginaAntCXP = pagina;
                    } else {
                        this.paginaAntCXP = pagina;
                        me.recargaPaginaCXP(pagina);
                    }
                }
            },
            formsat: {
                guardaDatosSat: function(btn) {
                    me.guardaDatosSat(btn);
                }//,

            },
            formsatcxc: {
                guardaDatosSat: function(btn) {
                    me.guardaDatosSatCXC(btn);
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
                    me.findArchivosCXP();
                }
            },
            formrelacionpol: {
                saveRelacionPoliza: function(btn) {
                    me.saveRelacionPoliza(btn);
                }

            }


        });
    },
    
    buscaDetCompl:function(model){
        
           var me = this,
                 
                grid = me.getGridComplPagosDet(),
                store = grid.getStore();
              
        
        store.proxy.extraParams.idPago = model.data.ID_PAGO;
        store.proxy.extraParams.numero = model.data.NUMERO;
      
        grid.setLoading('Buscando...');
        store.loadData([], false);
        store.currentPage = 1;
        store.load({
            callback: function() {
                grid.setLoading(false);
            }
        });
        
        
    },
    
    loadPermisosInterfazPagos:function(){
      
        var me = this,
                        tab = me.getAppMain();
                                   tab.items.items[0].tab.hide();//.tab.hide();
                                  
                                  
                              
                                  tab.items.items[1].tab.hide();//.tab.hide();
                     
                                  tab.items.items[2].tab.hide();//.tab.hide();
                                  tab.items.items[4].tab.hide();//.tab.hide();
                                  tab.setActiveTab(5);
                                  tab.setActiveTab(3);
                                
        
        
    },
    
        loadPermisosInterfaz: function() {
//
//
        Ext.Ajax.request({
            url: 'process/data/PermisosCfdi',
            method: 'POST',
            scope: this,
            callback: function(records, operation, success) {
              
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
            
                var me = this,
                        tab = me.getAppMain();
                        
                        
                        
                        
                      
                        
                if (val.success) {

                    if (Ext.isEmpty(val.data))
                        return;
                    var i =0;
                     for(i=0;i<val.data.length;i++){
                         
                     if (val.data[i].COMPONENTE === "AppClientes") {
                            if(val.data[i].HIDDEN==="1"){
                              var controllerCl = me.getController('AppClientes.controller.Main');
                          
                             tab.add(controllerCl.getView(controllerCl.views[0]).create());
                             
                             
                             
                           }
                           
                    }
                    
                    if (val.data[i].COMPONENTE === "AppProveedores") {
                            if(val.data[i].HIDDEN==="1"){
                              var controllerPr = me.getController('AppProveedores.controller.Main');
                              tab.add(controllerPr.getView(controllerPr.views[0]).create());
                            
                             
                             
                             
                           }
                           
                    }

                  }
                
                } else {

                }
            },
            timeout: 30000

        });
        },
     selectDatosPol: function(){
        
        var view = Ext.widget('windowpolmult');
        view.setTitle('Poliza por Multiples Facturas');
        var form = view.down('formpolmult').getForm();
       
        
    },
      selectDatosPolCXP: function(){
        
        var view = Ext.widget('windowpolmultcxp');
        view.setTitle('Poliza por Multiples Facturas');
        var form = view.down('formpolmultcxp').getForm();
       
        
    },
     imprimirPoliza2CXC: function(value) {
        var me = this,
                grid = me.getGridPolRelCXC(),
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
                'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={1}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con&sat=0&orden=1',
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
       borraFERelacionPolCXC:function(){
        var me = this,
         grid = me.getGridCXC(),
         gridPol = me.getGridPolRelCXC(),
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

                    me.findPolRelCXC();
                } else {
                    msgBoxErr('Error', res.msg);
                }
            }
        });


        
        
    },
    relacionaPolExistenteCXC: function(){
    
      var me = this,
              
              
              grid = me.getGridCXC(),
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
                xtype:'gridpolrelcxc'
            }
            ],
               listeners:{
                beforeclose:function(win) {
                    
                   me.findArchivos();

                }
            }
               
            
        }).show();
    },
    findPolRelCXC: function(){
         var me = this,
                 
                grid = me.getGridPolRelCXC(),
                store = grid.getStore(),
                gridArch = me.getGridCXC(),
               
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
    
    imprimirPolizaPagosCXP:function(){
        
        var me = this,
                grid = me.getGridPolRelPagosCXP(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado la poliza");
            return;
        }
        var compania = record.get('COMPANIA_REL_PAGOS');
        var numero = record.get('NUM_POL_REL_PAGOS');
        var tipoPoliza = record.get('TIPO_POL_REL_PAGOS');
        var fecha = record.get('FECHA_POL_REL_PAGOS');

        var fechaM = Ext.Date.parse(fecha, 'd/m/Y');

        var fechaNueva = Ext.Date.format(fechaM, 'dmY');

        fecha = fechaNueva;



        var string = Ext.String.format(
                //'<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
                'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={1}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con&sat=0&orden=1',
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
        
        
    },
    
     imprimirPoliza2CXP: function(value) {
        var me = this,
                grid = me.getGridPolRelCXP(),
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
                'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={1}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con&sat=0&orden=1',
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
    
    borraFERelacionPolPagosCXP:function(){
        
         var me = this,
         grid = me.getGridPagos(),
         gridPol = me.getGridPolRelPagosCXP(),
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
            url: 'relacionpoliza/deletefacturasxpagos',
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

                    me.findPolRelPagosCXP();
                } else {
                    msgBoxErr('Error', res.msg);
                }
            }
        });


    },
    
       borraFERelacionPolCXP:function(){
        var me = this,
         grid = me.getGridCXP(),
         gridPol = me.getGridPolRelCXP(),
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

                    me.findPolRelCXP();
                } else {
                    msgBoxErr('Error', res.msg);
                }
            }
        });


        
        
    },
    
      relacionaPolExistentePagosCXP: function(){
    
      var me = this,
              
              
              grid = me.getGridPagos(),
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
                xtype:'gridpolrelpagoscxp'
            }
            ],
               listeners:{
                beforeclose:function(win) {
                    
                   me.findPagos();

                }
            }
               
            
        }).show();
    },
    
    relacionaPolExistenteCXP: function(){
    
      var me = this,
              
              
              grid = me.getGridCXP(),
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
                xtype:'gridpolrelcxp'
            }
            ],
               listeners:{
                beforeclose:function(win) {
                    
                   me.findArchivosCXP();

                }
            }
               
            
        }).show();
    },
    
    findPolRelPagosCXP:function(){
        
          var me = this,
                 
                grid = me.getGridPolRelPagosCXP(),
                store = grid.getStore(),
                gridArch = me.getGridPagos(),
               
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
    
    findPolRelCXP: function(){
         var me = this,
                 
                grid = me.getGridPolRelCXP(),
                store = grid.getStore(),
                gridArch = me.getGridCXP(),
               
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
    
    cancelPagoAllCXC: function(btn) {

        var me = this,
                grid = me.getGridPagosCXC(),
                store = grid.getStore();

        // store.suspendEvents();
        var jsonData;
        var selection = grid.getSelectionModel().getSelection();

        var data = [];
        for (var i = 0; i < selection.length; i++) {

            var record = selection[i];
//                    
////                   msgOut(record.get('FOLIO'));
            var estatus = record.get('ESTATUS_CXP');
            var numFe = record.get('NUMERO');
            var numePol = record.get('POLIZA');
            if (!Ext.isEmpty(numePol)) {
                msgBoxErr('Error', 'La factura con numero: ' + numFe + ' tiene una poliza relacionada');
                return;
            }

            data.push(record.data);

//                   msgOut("data"+data);



        }



        jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }


        grid.setLoading("Guardando...");

        Ext.Ajax.request({
            url: 'Pagos/cancelPagoAll',
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

                    msgBox('Borradas', res.msg);

                    this.findPagosCxC();

                } else {

                    msgBoxErr('Error', res.msg);

                }
            }
        });






    },
    cancelaPagosAll: function(btn) {

        var me = this,
                grid = me.getGridPagos(),
                store = grid.getStore();

        // store.suspendEvents();
        var jsonData;
        var selection = grid.getSelectionModel().getSelection();

        var data = [];
        for (var i = 0; i < selection.length; i++) {

            var record = selection[i];
//                    
////                   msgOut(record.get('FOLIO'));
            var estatus = record.get('ESTATUS_CXP');
            var numFe = record.get('NUMERO');
            var numePol = record.get('POLIZA');
            if (!Ext.isEmpty(numePol)) {
                msgBoxErr('Error', 'La factura con numero: ' + numFe + ' tiene una poliza relacionada');
                return;
            }

            data.push(record.data);

//                   msgOut("data"+data);



        }



        jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }


        grid.setLoading("Guardando...");

        Ext.Ajax.request({
            url: 'Pagos/cancelPagoAll',
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

                    msgBox('Borradas', res.msg);

                    this.findPagosCxp();

                } else {

                    msgBoxErr('Error', res.msg);

                }
            }
        });






    },
    guardaPagoTotalCXC: function(btn) {

        var me = this,
                grid = me.getGridPagosCXC(),
                gridDet = me.getGridPagosDetCXC(),
                form1 = btn.up('formdatospagocxc'),
                win = form1.up('window'),
                form = form1.getForm(),
                store = grid.getStore(),
                storeDet = gridDet.getStore();

        // store.suspendEvents();
        var jsonData;
        var selection = grid.getSelectionModel().getSelection();

        var data = [];
        for (var i = 0; i < selection.length; i++) {

            var record = selection[i];
//                    
////                   msgOut(record.get('FOLIO'));
            var estatus = record.get('ESTATUS_CXP');
            var numFe = record.get('NUMERO');
            var numePol = record.get('POLIZA');
            if (!Ext.isEmpty(numePol)) {
                msgBoxErr('Error', 'La factura con numero: ' + numFe + ' ya tiene una poliza relacionada');
                return;
            }
            if (!Ext.isEmpty(estatus)) {
                msgBoxErr('Error', 'La factura con numero: ' + numFe + ' ya tiene un pago realizado');
                return;
            }
            data.push(record.data);

//                   msgOut("data"+data);



        }



        jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }



        var met_pago = form.findField('cboMetPagoTotCXC').getValue();
        var banco = form.findField('cboBancoDetTotCXC').getValue();
        var cuenta_banco = form.findField('txtCuentaBancoTotCXC').getValue();
        var observaciones = form.findField('txtObservacionesTotCXC').getValue();
        var fechaPago = form.findField('dtFechaPagoTotCXC').getRawValue();
        var moneda = form.findField('cboMonedaDetTotCXC').getValue();
        var tipo_cambio = form.findField('numTipoCambioTotCXC').getValue();
        var importeApli = form.findField('numImporteApliTotCXC').getValue();
        var accion = form.findField('txtAccionTotCXC').getValue();



        if (form.isValid()) {
            form1.setLoading("Generando Pagos...");


            Ext.Ajax.request({
                url: 'Pagos/savePagoAll',
                timeout: 60000,
                scope: this,
                params: {
                    data: jsonData,
                    met_pago: met_pago,
                    banco: banco,
                    cuenta_banco: cuenta_banco,
                    observaciones: observaciones,
                    fechaPago: fechaPago,
                    moneda: moneda,
                    tipo_cambio: tipo_cambio,
                    importeApli: importeApli,
                    accion: accion


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
                        this.findPagosCxC2();
                        storeDet.loadData([], false);
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
    guardaPagoTotal: function(btn) {

        var me = this,
                grid = me.getGridPagos(),
                gridDet = me.getGridPagosDet(),
                form1 = btn.up('formdatospago'),
                win = form1.up('window'),
                form = form1.getForm(),
                store = grid.getStore(),
                storeDet = gridDet.getStore();

        // store.suspendEvents();
        var jsonData;
        var selection = grid.getSelectionModel().getSelection();

        var data = [];
        for (var i = 0; i < selection.length; i++) {

            var record = selection[i];
//                    
////                   msgOut(record.get('FOLIO'));
            var estatus = record.get('ESTATUS_CXP');
            var numFe = record.get('NUMERO');
            var numePol = record.get('POLIZA');
            if (!Ext.isEmpty(numePol)) {
                msgBoxErr('Error', 'La factura con numero: ' + numFe + ' ya tiene una poliza relacionada');
                return;
            }
            if (!Ext.isEmpty(estatus)) {
                msgBoxErr('Error', 'La factura con numero: ' + numFe + ' ya tiene un pago realizado');
                return;
            }
            data.push(record.data);

//                   msgOut("data"+data);



        }



        jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }



        var met_pago = form.findField('cboMetPagoTot').getValue();
        var banco = form.findField('cboBancoDetTot').getValue();
        var cuenta_banco = form.findField('txtCuentaBancoTot').getValue();
        var observaciones = form.findField('txtObservacionesTot').getValue();
        var fechaPago = form.findField('dtFechaPagoTot').getRawValue();
        var moneda = form.findField('cboMonedaDetTot').getValue();
        var tipo_cambio = form.findField('numTipoCambioTot').getValue();
        var importeApli = form.findField('numImporteApliTot').getValue();
        var accion = form.findField('txtAccionTot').getValue();



        if (form.isValid()) {
            form1.setLoading("Generando Pagos...");


            Ext.Ajax.request({
                url: 'Pagos/savePagoAll',
                timeout: 60000,
                scope: this,
                params: {
                    data: jsonData,
                    met_pago: met_pago,
                    banco: banco,
                    cuenta_banco: cuenta_banco,
                    observaciones: observaciones,
                    fechaPago: fechaPago,
                    moneda: moneda,
                    tipo_cambio: tipo_cambio,
                    importeApli: importeApli,
                    accion: accion


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
                        this.findPagosCxp2();
                        storeDet.loadData([], false);
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
    actualizaEstatusPagosCXC: function() {

        var me = this;

        Ext.Ajax.request({
            url: 'Pagos/actualizaEstatus',
            method: 'POST',
            scope: this,
            callback: function(records, operation, success) {

                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {



                } else if (!val.success) {


                }



            },
            timeout: 30000

        });
    },
    datosPagosTotalCXC: function(origen) {

        var view = Ext.widget('windowdatospagoscxc');
        view.setTitle('DatosPagos');
        var form = view.down('formdatospagocxc').getForm();

        form.findField('txtAccionTotCXC').setValue(origen);
        if (origen === 'T') {
            Ext.getCmp('numImporteApliTotCXC').setVisible(false);
            Ext.getCmp('numImporteApliTotCXC').allowBlank = true;
        }

        if (origen === 'P') {
            Ext.getCmp('numImporteApliTotCXC').setVisible(true);
            Ext.getCmp('numImporteApliTotCXC').allowBlank = false;
        }




    },
    datosPagosTotal: function(origen) {

        var view = Ext.widget('windowdatospagos');
        view.setTitle('DatosPagos');
        var form = view.down('formdatospago').getForm();

        form.findField('txtAccionTot').setValue(origen);
        if (origen === 'T') {
            Ext.getCmp('numImporteApliTot').setVisible(false);
            Ext.getCmp('numImporteApliTot').allowBlank = true;
        }

        if (origen === 'P') {
            Ext.getCmp('numImporteApliTot').setVisible(true);
            Ext.getCmp('numImporteApliTot').allowBlank = false;
        }




    },
    actualizaEstatusPagos: function() {

        var me = this;

        Ext.Ajax.request({
            url: 'Pagos/actualizaEstatus',
            method: 'POST',
            scope: this,
            callback: function(records, operation, success) {

                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {



                } else if (!val.success) {


                }



            },
            timeout: 30000

        });
    },
    decargaCXP: function() {
        var me = this,
                grid = me.getGridCXP(),
                store = grid.getStore();
        var data = Ext.encode(grid.filters.getFilterData());
        var data = [];

        for (var i = 0; i < (grid.filters.getFilterData().length); i++) {
            data.push({"type": grid.filters.getFilterData()[i].data.type, "value": grid.filters.getFilterData()[i].data.value, "field": grid.filters.getFilterData()[i].field});
        }

        var jsonData = Ext.encode(data);

        var date = new Date();
        var systemtime = date.getFullYear() + "" + date.getMonth() + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds() + "" + date.getMilliseconds();



        var result = Ext.encode(jsonData);
        var encodedFilename = Ext.urlEncode(result);
        var filter = encodeURIComponent(jsonData);
        var page = store.currentPage;
        var start = 0;
        var limit = store.pageSize;

        var string = Ext.String.format(
                //'<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
                //   'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con',
                //   'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=JREP_descarga_Pagos&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&filter={1}&page={2}&start={3}&limit={4}&reporte=JREP_descarga_Pagos',
                'http://appferaz1.com/JWEBR/R3/REP_descarga_CXP/' + systemtime + '/BuscaCFDICXP?compania={0}&calendario={1}&periodo_inicial={2}&periodo_final={3}&filter={4}&page={5}&start={6}&limit={7}',
                me.companiaSession,
                Ext.getCmp('cboCalendarioFeCXP').getValue(),
                Ext.getCmp('cboPeriodoFeCXP').getValue(),
                Ext.getCmp('cboPeriodoCxpFin').getValue(),
                filter,
                page,
                start,
                limit
                );

        Ext.create('Ext.window.Window', {
            title: 'Descarga Pagos CXP',
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

        return string;


    },
    decargaCXPpag: function() {
        var me = this,
                grid = me.getGridCXP(),
                store = grid.getStore();
        var data = Ext.encode(grid.filters.getFilterData());
        var data = [];

        for (var i = 0; i < (grid.filters.getFilterData().length); i++) {
            data.push({"type": grid.filters.getFilterData()[i].data.type, "value": grid.filters.getFilterData()[i].data.value, "field": grid.filters.getFilterData()[i].field});
        }

        var jsonData = Ext.encode(data);

        var date = new Date();
        var systemtime = date.getFullYear() + "" + date.getMonth() + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds() + "" + date.getMilliseconds();



        var result = Ext.encode(jsonData);
        var encodedFilename = Ext.urlEncode(result);
        var filter = encodeURIComponent(jsonData);
        var page = store.currentPage;
        var start = 0;
        var limit = store.pageSize;

        var string = Ext.String.format(
                //'<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
                //   'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con',
                //   'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=JREP_descarga_Pagos&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&filter={1}&page={2}&start={3}&limit={4}&reporte=JREP_descarga_Pagos',
                'http://appferaz1.com/JWEBR/R3/REP_descarga_CXP_pag/' + systemtime + '/BuscaCFDICXP?compania={0}&calendario={1}&periodo_inicial={2}&periodo_final={3}&filter={4}&page={5}&start={6}&limit={7}',
                me.companiaSession,
                Ext.getCmp('cboCalendarioFeCXP').getValue(),
                Ext.getCmp('cboPeriodoFeCXP').getValue(),
                Ext.getCmp('cboPeriodoCxpFin').getValue(),
                filter,
                page,
                start,
                limit
                );

        Ext.create('Ext.window.Window', {
            title: 'Descarga Pagos CXP',
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

        return string;


    },
    decargaPagosPgCXP: function() {
        var me = this,
                grid = me.getGridPagos(),
                store = grid.getStore();
        var data = Ext.encode(grid.filters.getFilterData());
        var data = [];

        for (var i = 0; i < (grid.filters.getFilterData().length); i++) {
            data.push({"type": grid.filters.getFilterData()[i].data.type, "value": grid.filters.getFilterData()[i].data.value, "field": grid.filters.getFilterData()[i].field});
        }

        var jsonData = Ext.encode(data);

        var date = new Date();
        var systemtime = date.getFullYear() + "" + date.getMonth() + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds() + "" + date.getMilliseconds();


        var result = Ext.encode(jsonData);
        var encodedFilename = Ext.urlEncode(result);
        var filter = encodeURIComponent(jsonData);
        var page = store.currentPage;
        var start = 0;
        var limit = store.pageSize;

        var string = Ext.String.format(
                //'<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
                //   'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con',
                //   'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=JREP_descarga_Pagos&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&filter={1}&page={2}&start={3}&limit={4}&reporte=JREP_descarga_Pagos',
                'http://appferaz1.com/JWEBR/R3/JREP_descarga_Pagos_pag/' + systemtime + '/BuscaPagosCXP?compania={0}&filter={1}&page={2}&start={3}&limit={4}&calendario={5}&periodo_ini={6}&periodo_fin={7}',
                me.companiaSession,
                filter,
                page,
                start,
                limit,
                this.calendarioSysPag,
                this.periodoSysPag,
                this.periodoSysFinPag
                );

        Ext.create('Ext.window.Window', {
            title: 'Descarga Pagos CXP',
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

        return string;
    },
    decargaPagosCXC: function() {
        var me = this,
                grid = me.getGridPagosCXC(),
                store = grid.getStore();
        var data = Ext.encode(grid.filters.getFilterData());
        var data = [];

        for (var i = 0; i < (grid.filters.getFilterData().length); i++) {
            data.push({"type": grid.filters.getFilterData()[i].data.type, "value": grid.filters.getFilterData()[i].data.value, "field": grid.filters.getFilterData()[i].field});
        }

        var jsonData = Ext.encode(data);

        var date = new Date();
        var systemtime = date.getFullYear() + "" + date.getMonth() + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds() + "" + date.getMilliseconds();


        var result = Ext.encode(jsonData);
        var encodedFilename = Ext.urlEncode(result);
        var filter = encodeURIComponent(jsonData);
        var page = store.currentPage;
        var start = 0;
        var limit = store.pageSize;
        console.log('--------------reporte descarga pagos------------------');
        console.log(me.companiaSession);
        console.log(filter);
        console.log(page);
        console.log(start);
        console.log(limit);
        console.log(this.calendarioSysPagCXC);
        console.log(this.periodoSysPagCXC);
        console.log(this.periodoSysFinPagCXC);
        console.log('------------------------------------------------------');
        

        var string = Ext.String.format(
                //'<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
                //   'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con',
                //   'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=JREP_descarga_Pagos&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&filter={1}&page={2}&start={3}&limit={4}&reporte=JREP_descarga_Pagos',
                'http://appferaz1.com/JWEBR/R3/JREP_descarga_Pagos_CXC/' + systemtime + '/BuscaPagosCXC?compania={0}&filter={1}&page={2}&start={3}&limit={4}&calendario={5}&periodo_ini={6}&periodo_fin={7}',
                me.companiaSession,
                filter,
                page,
                start,
                limit,
                this.calendarioSysPagCXC,
                this.periodoSysPagCXC,
                this.periodoSysFinPagCXC
                );

        Ext.create('Ext.window.Window', {
            title: 'Descarga Pagos CXC',
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

        return string;
    },
    decargaPagosCXCpag: function() {
        var me = this,
                grid = me.getGridPagosCXC(),
                store = grid.getStore();
        var data = Ext.encode(grid.filters.getFilterData());
        var data = [];

        for (var i = 0; i < (grid.filters.getFilterData().length); i++) {
            data.push({"type": grid.filters.getFilterData()[i].data.type, "value": grid.filters.getFilterData()[i].data.value, "field": grid.filters.getFilterData()[i].field});
        }

        var jsonData = Ext.encode(data);

        var date = new Date();
        var systemtime = date.getFullYear() + "" + date.getMonth() + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds() + "" + date.getMilliseconds();


        var result = Ext.encode(jsonData);
        var encodedFilename = Ext.urlEncode(result);
        var filter = encodeURIComponent(jsonData);
        var page = store.currentPage;
        var start = 0;
        var limit = store.pageSize;

        var string = Ext.String.format(
                //'<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
                //   'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con',
                //   'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=JREP_descarga_Pagos&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&filter={1}&page={2}&start={3}&limit={4}&reporte=JREP_descarga_Pagos',
                'http://appferaz1.com/JWEBR/R3/JREP_descarga_Pagos_CXC_pag/' + systemtime + '/BuscaPagosCXC?compania={0}&filter={1}&page={2}&start={3}&limit={4}&calendario={5}&periodo_ini={6}&periodo_fin={7}',
                me.companiaSession,
                filter,
                page,
                start,
                limit,
                this.calendarioSysPagCXC,
                this.periodoSysPagCXC,
                this.periodoSysFinPagCXC
                );

        Ext.create('Ext.window.Window', {
            title: 'Descarga Pagos CXC',
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

        return string;
    },
    decargaPagosCXP: function() {
        var me = this,
                grid = me.getGridPagos(),
                store = grid.getStore();
        var data = Ext.encode(grid.filters.getFilterData());
        var data = [];

        for (var i = 0; i < (grid.filters.getFilterData().length); i++) {
            data.push({"type": grid.filters.getFilterData()[i].data.type, "value": grid.filters.getFilterData()[i].data.value, "field": grid.filters.getFilterData()[i].field});
        }

        var jsonData = Ext.encode(data);

        var date = new Date();
        var systemtime = date.getFullYear() + "" + date.getMonth() + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds() + "" + date.getMilliseconds();


        var result = Ext.encode(jsonData);
        var encodedFilename = Ext.urlEncode(result);
        var filter = encodeURIComponent(jsonData);
        var page = store.currentPage;
        var start = 0;
        var limit = store.pageSize;

        var string = Ext.String.format(
                //'<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
                //   'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con',
                //   'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=JREP_descarga_Pagos&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&filter={1}&page={2}&start={3}&limit={4}&reporte=JREP_descarga_Pagos',
                'http://appferaz1.com/JWEBR/R3/JREP_descarga_Pagos/' + systemtime + '/BuscaPagosCXP?compania={0}&filter={1}&page={2}&start={3}&limit={4}&calendario={5}&periodo_ini={6}&periodo_fin={7}',
                me.companiaSession,
                filter,
                page,
                start,
                limit,
                this.calendarioSysPag,
                this.periodoSysPag,
                this.periodoSysFinPag
                );

        Ext.create('Ext.window.Window', {
            title: 'Descarga Pagos CXP',
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

        return string;
    },
    decargaCXC: function() {
        var me = this,
                grid = me.getGridCXC(),
                store = grid.getStore();
        var data = Ext.encode(grid.filters.getFilterData());
        var data = [];

        for (var i = 0; i < (grid.filters.getFilterData().length); i++) {
            data.push({"type": grid.filters.getFilterData()[i].data.type, "value": grid.filters.getFilterData()[i].data.value, "field": grid.filters.getFilterData()[i].field});
        }

        var jsonData = Ext.encode(data);

        var date = new Date();
        var systemtime = date.getFullYear() + "" + date.getMonth() + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds() + "" + date.getMilliseconds();


        var result = Ext.encode(jsonData);
        var encodedFilename = Ext.urlEncode(result);
        var filter = encodeURIComponent(jsonData);
        var page = store.currentPage;
        var start = 0;
        var limit = store.pageSize;

        var string = Ext.String.format(
                //'<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
                //   'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con',
                //   'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=JREP_descarga_Pagos&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&filter={1}&page={2}&start={3}&limit={4}&reporte=JREP_descarga_Pagos',
                'http://appferaz1.com/JWEBR/R3/REP_descarga_CXC/' + systemtime + '/BuscaCFDICXC?compania={0}&calendario={1}&periodo_ini={2}&periodo_fin={3}&filter={4}&page={5}&start={6}&limit={7}',
                me.companiaSession,
                Ext.getCmp('cboCalendarioFe').getValue(),
                Ext.getCmp('cboPeriodoFe').getValue(),
                Ext.getCmp('cboPeriodoFeFin').getValue(),
                filter,
                page,
                start,
                limit
                );

        Ext.create('Ext.window.Window', {
            title: 'Descarga Pagos CXC',
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

        return string;
    },
    decargaCXCpag: function() {
        var me = this,
                grid = me.getGridCXC(),
                store = grid.getStore();
        var data = Ext.encode(grid.filters.getFilterData());
        var data = [];

        for (var i = 0; i < (grid.filters.getFilterData().length); i++) {
            data.push({"type": grid.filters.getFilterData()[i].data.type, "value": grid.filters.getFilterData()[i].data.value, "field": grid.filters.getFilterData()[i].field});
        }

        var jsonData = Ext.encode(data);

        var date = new Date();
        var systemtime = date.getFullYear() + "" + date.getMonth() + "" + date.getDate() + "" + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds() + "" + date.getMilliseconds();


        var result = Ext.encode(jsonData);
        var encodedFilename = Ext.urlEncode(result);
        var filter = encodeURIComponent(jsonData);
        var page = store.currentPage;
        var start = 0;
        var limit = store.pageSize;

        var string = Ext.String.format(
                //'<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
                //   'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con',
                //   'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=JREP_descarga_Pagos&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&filter={1}&page={2}&start={3}&limit={4}&reporte=JREP_descarga_Pagos',
                'http://appferaz1.com/JWEBR/R3/REP_descarga_CXC_pag/' + systemtime + '/BuscaCFDICXC?compania={0}&calendario={1}&periodo_ini={2}&periodo_fin={3}&filter={4}&page={5}&start={6}&limit={7}',
                me.companiaSession,
                Ext.getCmp('cboCalendarioFe').getValue(),
                Ext.getCmp('cboPeriodoFe').getValue(),
                Ext.getCmp('cboPeriodoFeFin').getValue(),
                filter,
                page,
                start,
                limit
                );

        Ext.create('Ext.window.Window', {
            title: 'Descarga Pagos CXC',
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

        return string;
    },
    loadSumaImportesCXC: function() {
        var me = this,
                text = '',
                grid = me.getGridPagosCXC(),
                records = grid.getSelectionModel().getSelection(),
                detalle = me.getGridPagosDetCXC(),
                containerStatus = me.getPanelSurCXC();



        var record = records[0];
        if (Ext.isEmpty(record)) {


            return;
        }

        var compania = record.get('COMPANIA');
        var numero = record.get('NUMERO');
        var total = record.get('TOTAL');



        var sb = containerStatus.getComponent('statusbarTotalescxc');
        //var det = detalle.getComponent('statusDetalle');
        // var banDet = det.getComponent('idBandera');
        var tot = sb.getComponent('totalcxc');
        var totPes = sb.getComponent('totalPesoscxc');
        var totPag = sb.getComponent('totalPagarcxc');

        // sb.showBusy();


//        var  llave =  me.getllaveMaestro();
        Ext.Ajax.request({
            url: 'process/data/EstatusPago',
            method: 'POST',
            scope: this,
            params: {
                compania: compania,
                numero: numero

            },
            callback: function(records, operation, success) {

                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var sumImporte = val.data[0].IMPORTE;
                    var sumPesos = val.data[0].IMPORTE_PESOS;
                    var totalaPagar = val.data[0].TOTAL_A_PAGAR;

                    if (totalaPagar < 0) {

                        var totalaPagar = 0;


                    }
                    
                 if (Ext.isEmpty(sumImporte)){
                     
                     sumImporte = 0;
                     
                 } 
                 if (Ext.isEmpty(sumPesos)){
                     
                     sumPesos = 0;
                     
                 } 
                 if (Ext.isEmpty(totalaPagar)){
                     
                     totalaPagar = 0;
                     
                 } 




//                    var icon = 'x-status-valid';
//                    if (sumCargos === sumAbonos) {
//                        text = 'Cuadrados';
//                        icon = 'x-status-valid';
//                    } else {
//                        text = 'Descuadrados';
//                        icon = 'x-status-error';
//                    }
//                    sb.setStatus({
//                        iconCls: icon,
//                        text: text
//                    });



                } else if (!val.success) {

                    totalaPagar = total;
                    sumImporte = 0;
                    sumPesos = 0;
                    // msgBoxErr('Error', 'Cargos y Abonos no encontrados');
                }

                tot.update('Total Pagado:' + Ext.util.Format.currency(sumImporte, '$', 4));
                totPes.update('Total en Pesos:' + Ext.util.Format.currency(sumPesos, '$', 4));
                totPag.update('Total a Pagar:' + Ext.util.Format.currency(totalaPagar, '$', 4));

            },
            timeout: 30000

        });
        grid.doLayout( );

    },
    
    loadSumaImportesOtras:function(){
        
        var me = this,
               
                grid = me.getGridPagosOtras(),
                records = grid.getSelectionModel().getSelection(),
            
                containerStatus = me.getPanelSurOtras();


         console.log("importe"); 
        var record = records[0];
        if (Ext.isEmpty(record)) {


            return;
        }

        var compania = record.get('COMPANIA');
        var numero = record.get('NUMERO');
        var total = record.get('TOTAL');



        var sb = containerStatus.getComponent('statusbarTotalesOtras');
        //var det = detalle.getComponent('statusDetalle');
        // var banDet = det.getComponent('idBandera');
        var tot = sb.getComponent('totalOtras');
        var totPes = sb.getComponent('totalPesosOtras');
        var totPag = sb.getComponent('totalPagarOtras');

        // sb.showBusy();


//        var  llave =  me.getllaveMaestro();
        Ext.Ajax.request({
            url: 'process/data/EstatusPagoOtras',
            method: 'POST',
            scope: this,
            params: {
                compania: compania,
                numero: numero

            },
            callback: function(records, operation, success) {

                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var sumImporte = val.data[0].IMPORTE;
                    var sumPesos = val.data[0].IMPORTE_PESOS;
                    var totalaPagar = val.data[0].TOTAL_A_PAGAR;

                    if (totalaPagar < 0) {

                        var totalaPagar = 0;


                    }
                    
                    
                 if (Ext.isEmpty(sumImporte)){
                     
                     sumImporte = 0;
                     
                 } 
                 if (Ext.isEmpty(sumPesos)){
                     
                     sumPesos = 0;
                     
                 } 
                 if (Ext.isEmpty(totalaPagar)){
                     
                     totalaPagar = 0;
                     
                 } 



                } else if (!val.success) {

                    totalaPagar = total;
                    sumImporte = 0;
                    sumPesos = 0;
                   
                }

                tot.update('Total Pagado:' + Ext.util.Format.currency(sumImporte, '$', 4));
                totPes.update('Total en Pesos:' + Ext.util.Format.currency(sumPesos, '$', 4));
                totPag.update('Total a Pagar:' + Ext.util.Format.currency(totalaPagar, '$', 4));

            },
            timeout: 30000

        });
        
        
        
    },
    
    loadSumaImportes: function() {
        var me = this,
               
                grid = me.getGridPagos(),
                records = grid.getSelectionModel().getSelection(),
            
                containerStatus = me.getPanelSur();


         console.log("importe"); 
        var record = records[0];
        if (Ext.isEmpty(record)) {


            return;
        }

        var compania = record.get('COMPANIA');
        var numero = record.get('NUMERO');
        var total = record.get('TOTAL');



        var sb = containerStatus.getComponent('statusbarTotalesCXP');
        //var det = detalle.getComponent('statusDetalle');
        // var banDet = det.getComponent('idBandera');
        var tot = sb.getComponent('totalCXP');
        var totPes = sb.getComponent('totalPesosCXP');
        var totPag = sb.getComponent('totalPagarCXP');

        // sb.showBusy();


//        var  llave =  me.getllaveMaestro();
        Ext.Ajax.request({
            url: 'process/data/EstatusPago',
            method: 'POST',
            scope: this,
            params: {
                compania: compania,
                numero: numero

            },
            callback: function(records, operation, success) {

                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var sumImporte = val.data[0].IMPORTE;
                    var sumPesos = val.data[0].IMPORTE_PESOS;
                    var totalaPagar = val.data[0].TOTAL_A_PAGAR;

                    if (totalaPagar < 0) {

                        var totalaPagar = 0;


                    }
                    
                    
                 if (Ext.isEmpty(sumImporte)){
                     
                     sumImporte = 0;
                     
                 } 
                 if (Ext.isEmpty(sumPesos)){
                     
                     sumPesos = 0;
                     
                 } 
                 if (Ext.isEmpty(totalaPagar)){
                     
                     totalaPagar = 0;
                     
                 } 



                } else if (!val.success) {

                    totalaPagar = total;
                    sumImporte = 0;
                    sumPesos = 0;
                   
                }

                tot.update('Total Pagado:' + Ext.util.Format.currency(sumImporte, '$', 4));
                totPes.update('Total en Pesos:' + Ext.util.Format.currency(sumPesos, '$', 4));
                totPag.update('Total a Pagar:' + Ext.util.Format.currency(totalaPagar, '$', 4));

            },
            timeout: 30000

        });
       // grid.doLayout( );

    },
    actualizaEstatusCXC: function(compania, numero) {
        var me = this,
                grid = me.getGridPagosCXC(),
                records = grid.getSelectionModel().getSelection();




        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado la Factura");
        }
        var compania = record.get('COMPANIA');
        var numero = record.get('NUMERO');



        var labelEst = grid.getChildByElement('lblEstatusPagoCXC', true);

        Ext.Ajax.request({
            url: 'process/data/ActualizaEstatusPago',
            method: 'GET',
            scope: this,
            params: {
                compania: compania,
                numero: numero
            },
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var estat = val.data[0].ESTATUS_CXP;


                    if ((Ext.isEmpty(estat))) {

                        labelEst.setValue('<span style="color:white;background-color:red;font-weight: bold;">Sin Pagar</span>');
                        record.set('ESTATUS_CXP', '');


                    }
                    if (estat === 'PAR') {

                        labelEst.setValue('<span style="color:blue;font-weight: bold;">Pago Parcial</span>');
                        record.set('ESTATUS_CXP', 'PAR');


                    }
                    if (estat === 'PAG') {

                        labelEst.setValue('<span style="color:green;font-weight: bold;">Pago Total</span>');
                        record.set('ESTATUS_CXP', 'PAG');

                    }
                } else if (!val.success) {

                    labelEst.setValue('<span style="color:white;background-color:red;font-weight: bold;">Sin Pagar</span>');


                }
            },
            timeout: 30000

        });

    },
    
    actualizaEstatusOtras:function(){
        
        var me = this,
                grid = me.getGridPagosOtras(),
                records = grid.getSelectionModel().getSelection();




        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado la Factura");
        }
        var compania = record.get('COMPANIA');
        var numero = record.get('NUMERO');

        // var index = store.find('NUMERO', numero);

        var labelEst = grid.getChildByElement('lblEstatusPagoOtras', true);

        Ext.Ajax.request({
            url: 'process/data/ActualizaEstatusPagoOtras',
            method: 'GET',
            scope: this,
            params: {
                compania: compania,
                numero: numero
            },
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var estat = val.data[0].ESTATUS_CXP;


                    if ((Ext.isEmpty(estat))) {

                        labelEst.setValue('<span style="color:white;background-color:red;font-weight: bold;">Sin Pagar</span>');
                        record.set('ESTATUS_CXP', '');


                    }
                    if (estat === 'PAR') {

                        labelEst.setValue('<span style="color:blue;font-weight: bold;">Pago Parcial</span>');
                        record.set('ESTATUS_CXP', 'PAR');


                    }
                    if (estat === 'PAG') {

                        labelEst.setValue('<span style="color:green;font-weight: bold;">Pago Total</span>');
                        record.set('ESTATUS_CXP', 'PAG');

                    }

                } else if (!val.success) {

                    labelEst.setValue('<span style="color:white;background-color:red;font-weight: bold;">Sin Pagar</span>');


                }
            },
            timeout: 30000

        });
        
        
    },
    
    actualizaEstatus: function(compania, numero) {
        var me = this,
                grid = me.getGridPagos(),
                records = grid.getSelectionModel().getSelection();




        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado la Factura");
        }
        var compania = record.get('COMPANIA');
        var numero = record.get('NUMERO');

        // var index = store.find('NUMERO', numero);

        var labelEst = grid.getChildByElement('lblEstatusPago', true);

        Ext.Ajax.request({
            url: 'process/data/ActualizaEstatusPago',
            method: 'GET',
            scope: this,
            params: {
                compania: compania,
                numero: numero
            },
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    var estat = val.data[0].ESTATUS_CXP;


                    if ((Ext.isEmpty(estat))) {

                        labelEst.setValue('<span style="color:white;background-color:red;font-weight: bold;">Sin Pagar</span>');
                        record.set('ESTATUS_CXP', '');


                    }
                    if (estat === 'PAR') {

                        labelEst.setValue('<span style="color:blue;font-weight: bold;">Pago Parcial</span>');
                        record.set('ESTATUS_CXP', 'PAR');


                    }
                    if (estat === 'PAG') {

                        labelEst.setValue('<span style="color:green;font-weight: bold;">Pago Total</span>');
                        record.set('ESTATUS_CXP', 'PAG');

                    }

                } else if (!val.success) {

                    labelEst.setValue('<span style="color:white;background-color:red;font-weight: bold;">Sin Pagar</span>');


                }
            },
            timeout: 30000

        });

    },
    deteleDetPagoCXC: function() {

        var me = this,
                grid = me.getGridPagosDetCXC(),
                gridP = me.getGridPagosCXC(),
                store = grid.getStore();

        var records = grid.getSelectionModel().getSelection();
        var recordsP = gridP.getSelectionModel().getSelection();


        if (Ext.isEmpty(records))
            return;
        //     msgOut(records.length);


        var selection = records[0];
        var selectionP = recordsP[0];

      //  if (!Ext.isEmpty(selectionP.get('POLIZA'))) {

      //      msgBoxErr('Error', 'Esta Factura tiene poliza generada. No puede realizar movimientos');

      //      return;
      //  }



        if (selection.phantom) {
            store.remove(selection);
            return;
            //continue;
        }


        store.remove(selection);

        grid.setLoading("Borrando detalle de pago...");
        store.sync({
            scope: this,
            success: function(resp, dos) {
                msgBox("Borrar Pago", 'Pago Borrado');

                //this.loadSueldo();

            },
            failure: function(resp, dos) {
                msgBoxErr('Error', 'Error al borrar Pago:' + store.getProxy( ).getReader().rawData.msg);
                //this.loadSueldo();
                grid.setLoading(false);
            },
            callback: function(records, operation) {

                grid.setLoading(false);

                // me.findPagos();
                // store.loadData([], false);
                me.actualizaEstatusCXC();
                me.loadSumaImportesCXC();
            }

        });



    },
    
    deteleDetPagoOtras: function() {

        var me = this,
                grid = me.getGridPagosOtrasDet(),
                gridP = me.getGridPagosOtras(),
                store = grid.getStore();

        var records = grid.getSelectionModel().getSelection();
        var recordsP = gridP.getSelectionModel().getSelection();


        if (Ext.isEmpty(records))
            return;
        //     msgOut(records.length);


        var selection = records[0];
        var selectionP = recordsP[0];

  


        if (selection.phantom) {
            store.remove(selection);
            return;
            //continue;
        }


        store.remove(selection);

        grid.setLoading("Borrando detalle de pago...");
        store.sync({
            scope: this,
            success: function(resp, dos) {
                msgBox("Borrar Pago", 'Pago Borrado');

                //this.loadSueldo();

            },
            failure: function(resp, dos) {
                msgBoxErr('Error', 'Error al borrar Pago:' + store.getProxy( ).getReader().rawData.msg);
                //this.loadSueldo();
                grid.setLoading(false);
            },
            callback: function(records, operation) {

                grid.setLoading(false);

                // me.findPagos();
                // store.loadData([], false);
                me.actualizaEstatusOtras();
                me.loadSumaImportesOtras();
            }

        });



    },
    deteleDetPago: function() {

        var me = this,
                grid = me.getGridPagosDet(),
                gridP = me.getGridPagos(),
                store = grid.getStore();

        var records = grid.getSelectionModel().getSelection();
        var recordsP = gridP.getSelectionModel().getSelection();


        if (Ext.isEmpty(records))
            return;
        //     msgOut(records.length);


        var selection = records[0];
        var selectionP = recordsP[0];

        //if (!Ext.isEmpty(selectionP.get('POLIZA'))) {

        //    msgBoxErr('Error', 'Esta Factura tiene poliza generada. No puede realizar movimientos');

        //    return;
        //}



        if (selection.phantom) {
            store.remove(selection);
            return;
            //continue;
        }


        store.remove(selection);

        grid.setLoading("Borrando detalle de pago...");
        store.sync({
            scope: this,
            success: function(resp, dos) {
                msgBox("Borrar Pago", 'Pago Borrado');

                //this.loadSueldo();

            },
            failure: function(resp, dos) {
                msgBoxErr('Error', 'Error al borrar Pago:' + store.getProxy( ).getReader().rawData.msg);
                //this.loadSueldo();
                grid.setLoading(false);
            },
            callback: function(records, operation) {

                grid.setLoading(false);

                // me.findPagos();
                // store.loadData([], false);
                me.actualizaEstatus();
                me.loadSumaImportes();
            }

        });



    },
    sumaImporteCXC: function(value) {



        var me = this,
                grid = me.getGridPagosDetCXC(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];
        msgOut('sumando importe');
        //  var tipo_cambio = record.get('PARIDAD_DET');
        var importe = record.get('IMPORTE_OPERACION_DET');

        var pago = Number(importe) * value;

        msgOut('sumando importe' + pago);

        record.set('TOT_PESOS_DET', pago);


    },
    sumaImporte: function(value) {



        var me = this,
                grid = me.getGridPagosDet(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];
        msgOut('sumando importe');
        //  var tipo_cambio = record.get('PARIDAD_DET');
        var importe = record.get('IMPORTE_OPERACION_DET');

        var pago = Number(importe) * value;

        msgOut('sumando importe' + pago);

        record.set('TOT_PESOS_DET', pago);


    },
    
    sumaImporteOtras: function(value) {



        var me = this,
                grid = me.getGridPagosOtrasDet(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];
        msgOut('sumando importe');
        //  var tipo_cambio = record.get('PARIDAD_DET');
        var importe = record.get('IMPORTE_OPERACION_DET');

        var pago = Number(importe) * value;

        msgOut('sumando importe' + pago);

        record.set('TOT_PESOS_DET', pago);


    },
    sumaImporte2CXC: function(value) {



        var me = this,
                grid = me.getGridPagosDetCXC(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];
        msgOut('sumando importe');
        var tipo_cambio = record.get('PARIDAD_DET');
        // var importe = record.get('IMPORTE_OPERACION_DET');

        var pago = value * Number(tipo_cambio);

        msgOut('sumando importe' + pago);

        record.set('TOT_PESOS_DET', pago);


    },
    sumaImporte2: function(value) {



        var me = this,
                grid = me.getGridPagosDet(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];
        msgOut('sumando importe');
        var tipo_cambio = record.get('PARIDAD_DET');
        // var importe = record.get('IMPORTE_OPERACION_DET');

        var pago = value * Number(tipo_cambio);

        msgOut('sumando importe' + pago);

        record.set('TOT_PESOS_DET', pago);


    },
    sumaImporte2Otras: function(value) {



        var me = this,
                grid = me.getGridPagosOtrasDet(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];
        msgOut('sumando importe');
        var tipo_cambio = record.get('PARIDAD_DET');
        // var importe = record.get('IMPORTE_OPERACION_DET');

        var pago = value * Number(tipo_cambio);

        msgOut('sumando importe' + pago);

        record.set('TOT_PESOS_DET', pago);


    },
    guardarDetPagosCXC: function() {
        var me = this,
                grid = me.getGridPagosDetCXC(),
                gridP = me.getGridPagosCXC(),
                records = grid.getSelectionModel().getSelection(),
                recordsP = gridP.getSelectionModel().getSelection(),
                store = grid.getStore();
        var recordP = recordsP[0];

        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

       // if (!Ext.isEmpty(recordP.get('POLIZA'))) {

        //    msgBoxErr('Error', 'Esta Factura tiene poliza generada. No puede realizar movimientos');

        //    return;
        //}


        if (!Ext.isEmpty(news) || !Ext.isEmpty(modified)) {




            var fechaPago;
            var i = 0;

            if (!Ext.isEmpty(news)) {

                for (i = 0; i < news.length; i++) {


                    if (Ext.isEmpty(news[i].data.FECHA_PAGO_CXP_FE_DET)) {

                        msgBoxErr('Error', 'La fecha de pago no puede ser nula');
                        return;
                    } else {

                        fechaPago = Ext.Date.format(news[i].data.FECHA_PAGO_CXP_FE_DET, 'd/m/Y');
                        news[i].data.FECHA_PAGO_CXP_FE_DET = fechaPago;

                    }



                    if (Ext.isEmpty(news[i].data.PARIDAD_DET)) {

                        msgBoxErr('Error', 'El tipo de cambio no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(news[i].data.IMPORTE_OPERACION_DET)) {

                        msgBoxErr('Error', 'El pago no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(news[i].data.TOT_PESOS_DET)) {

                        msgBoxErr('Error', 'El pago en pesos no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(news[i].data.T_OPERACION_DET)) {

                        msgBoxErr('Error', 'El tipo de pago  no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(news[i].data.BANCO_DET)) {

                        msgBoxErr('Error', 'El Banco no puede ser nulo');
                        return;
                    }

                    if (Ext.isEmpty(news[i].data.IMPORTE_OPERACION_DET)) {

                        msgBoxErr('Error', 'El importe esta vacio');
                        return;
                    }

                    if (news[i].data.IMPORTE_OPERACION_DET === 0) {

                        msgBoxErr('Error', 'El importe del pago esta en cero');
                        return;
                    }

                }
            }

            if (!Ext.isEmpty(modified)) {

                for (i = 0; i < modified.length; i++) {

                    if (Ext.isEmpty(modified[i].data.FECHA_PAGO_CXP_FE_DET)) {

                        msgBoxErr('Error', 'La fecha de pago no puede ser nula');
                        return;
                    } else {



                        if (Ext.isDate(modified[i].data.FECHA_PAGO_CXP_FE_DET)) {
                            fechaPago = Ext.Date.format(modified[i].data.FECHA_PAGO_CXP_FE_DET, 'd/m/Y');
                            modified[i].data.FECHA_PAGO_CXP_FE_DET = fechaPago;
                        }


                    }



                    if (Ext.isEmpty(modified[i].data.PARIDAD_DET)) {

                        msgBoxErr('Error', 'El tipo de cambio no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(modified[i].data.IMPORTE_OPERACION_DET)) {

                        msgBoxErr('Error', 'El pago no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(modified[i].data.TOT_PESOS_DET)) {

                        msgBoxErr('Error', 'El pago en pesos no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(modified[i].data.T_OPERACION_DET)) {

                        msgBoxErr('Error', 'El tipo de pago  no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(modified[i].data.BANCO_DET)) {

                        msgBoxErr('Error', 'El Banco no puede ser nulo');
                        return;
                    }

                    if (Ext.isEmpty(modified[i].data.IMPORTE_OPERACION_DET)) {

                        msgBoxErr('Error', 'El importe esta vacio');
                        return;
                    }

                    console.log('modified[i].data.IMPORTE_OPERACION_DET' + modified[i].data.IMPORTE_OPERACION_DET);

                    if (modified[i].data.IMPORTE_OPERACION_DET === 0) {

                        msgBoxErr('Error', 'El importe del pago esta en cero');
                        return;
                    }

                }
            }



            grid.setLoading("Guardando...");
            store.sync({
                scope: this,
                success: function(resp, dos) {
                    grid.setLoading(false);
                },
                failure: function(resp, dos) {
                    msgBoxErr('Error', 'Error al guardar:' + store.getProxy( ).getReader().rawData.msg);
                    grid.setLoading(false);
                },
                callback: function(records, operation, val3) {
                    grid.setLoading(false);





                    // me.findPagos();
                    //  store.loadData([], false);
                    me.buscaDetPagosCXC();
                    me.actualizaEstatusCXC();
                    me.loadSumaImportesCXC();
//                    me.procesarPolizas(modified, 0, me, grid);

                }

            });

        }
    },
    
    guardarDetPagosOtras:function(){
        
              var me = this,
                grid = me.getGridPagosOtrasDet(),
                gridP = me.getGridPagosOtras(),
                records = grid.getSelectionModel().getSelection(),
                recordsP = gridP.getSelectionModel().getSelection(),
                store = grid.getStore();
        var recordP = recordsP[0];

        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

   


        if (!Ext.isEmpty(news) || !Ext.isEmpty(modified)) {




            var fechaPago;
            var i = 0;

            if (!Ext.isEmpty(news)) {

                for (i = 0; i < news.length; i++) {


                    if (Ext.isEmpty(news[i].data.FECHA_PAGO_CXP_FE_DET)) {

                        msgBoxErr('Error', 'La fecha de pago no puede ser nula');
                        return;
                    } else {

                        fechaPago = Ext.Date.format(news[i].data.FECHA_PAGO_CXP_FE_DET, 'd/m/Y');
                        news[i].data.FECHA_PAGO_CXP_FE_DET = fechaPago;

                    }



                    if (Ext.isEmpty(news[i].data.PARIDAD_DET)) {

                        msgBoxErr('Error', 'El tipo de cambio no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(news[i].data.IMPORTE_OPERACION_DET)) {

                        msgBoxErr('Error', 'El pago no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(news[i].data.TOT_PESOS_DET)) {

                        msgBoxErr('Error', 'El pago en pesos no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(news[i].data.T_OPERACION_DET)) {

                        msgBoxErr('Error', 'El tipo de pago  no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(news[i].data.BANCO_DET)) {

                        msgBoxErr('Error', 'El Banco no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(news[i].data.IMPORTE_OPERACION_DET)) {

                        msgBoxErr('Error', 'El importe esta vacio');
                        return;
                    }

                    if (news[i].data.IMPORTE_OPERACION_DET === 0) {

                        msgBoxErr('Error', 'El importe del pago esta en cero');
                        return;
                    }

                }
            }

            if (!Ext.isEmpty(modified)) {

                for (i = 0; i < modified.length; i++) {

                    if (Ext.isEmpty(modified[i].data.FECHA_PAGO_CXP_FE_DET)) {

                        msgBoxErr('Error', 'La fecha de pago no puede ser nula');
                        return;
                    } else {

                        if (Ext.isDate(modified[i].data.FECHA_PAGO_CXP_FE_DET)) {
                            fechaPago = Ext.Date.format(modified[i].data.FECHA_PAGO_CXP_FE_DET, 'd/m/Y');
                            modified[i].data.FECHA_PAGO_CXP_FE_DET = fechaPago;
                        }

                        //   fechaPago = Ext.Date.format(modified[i].data.FECHA_PAGO_CXP_FE_DET, 'd/m/Y');
                        //   modified[i].data.FECHA_PAGO_CXP_FE_DET = fechaPago;

                    }



                    if (Ext.isEmpty(modified[i].data.PARIDAD_DET)) {

                        msgBoxErr('Error', 'El tipo de cambio no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(modified[i].data.IMPORTE_OPERACION_DET)) {

                        msgBoxErr('Error', 'El pago no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(modified[i].data.TOT_PESOS_DET)) {

                        msgBoxErr('Error', 'El pago en pesos no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(modified[i].data.T_OPERACION_DET)) {

                        msgBoxErr('Error', 'El tipo de pago  no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(modified[i].data.BANCO_DET)) {

                        msgBoxErr('Error', 'El Banco no puede ser nulo');
                        return;
                    }

                    if (Ext.isEmpty(modified[i].data.IMPORTE_OPERACION_DET)) {

                        msgBoxErr('Error', 'El importe esta vacio');
                        return;
                    }

                    if (modified[i].data.IMPORTE_OPERACION_DET === 0) {

                        msgBoxErr('Error', 'El importe del pago esta en cero');
                        return;
                    }

                }
            }



            grid.setLoading("Guardando...");
            store.sync({
                scope: this,
                success: function(resp, dos) {
                    grid.setLoading(false);
                },
                failure: function(resp, dos) {
                    msgBoxErr('Error', 'Error al guardar:' + store.getProxy( ).getReader().rawData.msg);
                    grid.setLoading(false);
                },
                callback: function(records, operation, val3) {
                    grid.setLoading(false);





                    // me.findPagos();
                    //  store.loadData([], false);
                    me.buscaDetPagosOtras();
                    me.actualizaEstatusOtras();
                    me.loadSumaImportesOtras();
//                    me.procesarPolizas(modified, 0, me, grid);

                }

            });

        }
        
        
    },
    
    guardarDetPagos: function() {
        var me = this,
                grid = me.getGridPagosDet(),
                gridP = me.getGridPagos(),
                records = grid.getSelectionModel().getSelection(),
                recordsP = gridP.getSelectionModel().getSelection(),
                store = grid.getStore();
        var recordP = recordsP[0];

        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

        //if (!Ext.isEmpty(recordP.get('POLIZA'))) {

        //    msgBoxErr('Error', 'Esta Factura tiene poliza generada. No puede realizar movimientos');

        //    return;
        //}


        if (!Ext.isEmpty(news) || !Ext.isEmpty(modified)) {




            var fechaPago;
            var i = 0;

            if (!Ext.isEmpty(news)) {

                for (i = 0; i < news.length; i++) {


                    if (Ext.isEmpty(news[i].data.FECHA_PAGO_CXP_FE_DET)) {

                        msgBoxErr('Error', 'La fecha de pago no puede ser nula');
                        return;
                    } else {

                        fechaPago = Ext.Date.format(news[i].data.FECHA_PAGO_CXP_FE_DET, 'd/m/Y');
                        news[i].data.FECHA_PAGO_CXP_FE_DET = fechaPago;

                    }



                    if (Ext.isEmpty(news[i].data.PARIDAD_DET)) {

                        msgBoxErr('Error', 'El tipo de cambio no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(news[i].data.IMPORTE_OPERACION_DET)) {

                        msgBoxErr('Error', 'El pago no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(news[i].data.TOT_PESOS_DET)) {

                        msgBoxErr('Error', 'El pago en pesos no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(news[i].data.T_OPERACION_DET)) {

                        msgBoxErr('Error', 'El tipo de pago  no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(news[i].data.BANCO_DET)) {

                        msgBoxErr('Error', 'El Banco no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(news[i].data.IMPORTE_OPERACION_DET)) {

                        msgBoxErr('Error', 'El importe esta vacio');
                        return;
                    }

                    if (news[i].data.IMPORTE_OPERACION_DET === 0) {

                        msgBoxErr('Error', 'El importe del pago esta en cero');
                        return;
                    }

                }
            }

            if (!Ext.isEmpty(modified)) {

                for (i = 0; i < modified.length; i++) {

                    if (Ext.isEmpty(modified[i].data.FECHA_PAGO_CXP_FE_DET)) {

                        msgBoxErr('Error', 'La fecha de pago no puede ser nula');
                        return;
                    } else {

                        if (Ext.isDate(modified[i].data.FECHA_PAGO_CXP_FE_DET)) {
                            fechaPago = Ext.Date.format(modified[i].data.FECHA_PAGO_CXP_FE_DET, 'd/m/Y');
                            modified[i].data.FECHA_PAGO_CXP_FE_DET = fechaPago;
                        }

                        //   fechaPago = Ext.Date.format(modified[i].data.FECHA_PAGO_CXP_FE_DET, 'd/m/Y');
                        //   modified[i].data.FECHA_PAGO_CXP_FE_DET = fechaPago;

                    }



                    if (Ext.isEmpty(modified[i].data.PARIDAD_DET)) {

                        msgBoxErr('Error', 'El tipo de cambio no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(modified[i].data.IMPORTE_OPERACION_DET)) {

                        msgBoxErr('Error', 'El pago no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(modified[i].data.TOT_PESOS_DET)) {

                        msgBoxErr('Error', 'El pago en pesos no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(modified[i].data.T_OPERACION_DET)) {

                        msgBoxErr('Error', 'El tipo de pago  no puede ser nulo');
                        return;
                    }
                    if (Ext.isEmpty(modified[i].data.BANCO_DET)) {

                        msgBoxErr('Error', 'El Banco no puede ser nulo');
                        return;
                    }

                    if (Ext.isEmpty(modified[i].data.IMPORTE_OPERACION_DET)) {

                        msgBoxErr('Error', 'El importe esta vacio');
                        return;
                    }

                    if (modified[i].data.IMPORTE_OPERACION_DET === 0) {

                        msgBoxErr('Error', 'El importe del pago esta en cero');
                        return;
                    }

                }
            }



            grid.setLoading("Guardando...");
            store.sync({
                scope: this,
                success: function(resp, dos) {
                    grid.setLoading(false);
                },
                failure: function(resp, dos) {
                    msgBoxErr('Error', 'Error al guardar:' + store.getProxy( ).getReader().rawData.msg);
                    grid.setLoading(false);
                },
                callback: function(records, operation, val3) {
                    grid.setLoading(false);





                    // me.findPagos();
                    //  store.loadData([], false);
                    me.buscaDetPagos();
                    me.actualizaEstatus();
                    me.loadSumaImportes();
//                    me.procesarPolizas(modified, 0, me, grid);

                }

            });

        }
    },
    addPagosDetCXC: function(btn, cellEditing) {
        var me = this,
                gridPagosDet = me.getGridPagosDetCXC(),
                gridPagos = me.getGridPagosCXC(),
                storePagosDet = gridPagosDet.getStore(),
                records = gridPagos.getSelectionModel().getSelection();



        var record = records[0];

        if (Ext.isEmpty(record)) {

            msgBoxErr('Error', 'Debe seleccionar la factura antes de agregar el pago');
        }


        msgOut('agrega pagos det2');

        var model = new AppCargaFE2.model.ModeloPagosDetCXC({
            COMPANIA_DET: record.get('COMPANIA'),
            NUMERO_FE_DET: record.get('NUMERO'),
            FOLIO_DET: record.get('FOLIO'),
            SEC_DET: '',
            USUARIO_DET: '',
            T_OPERACION_DET: '',
            IMPORTE_OPERACION_DET: 0,
            BANCO_DET: '',
            FECHA_PAGO_CXP_FE_DET: '',
            TOT_PESOS_DET: 0,
            OBSERVACIONES_DET: '',
            PARIDAD_DET: 0,
            CUENTA_BANCO: ''

        });


        storePagosDet.insert(0, model);
        cellEditing.startEditByPosition({
            row: 0,
            column: 1
        });

    },
    
    addPagosDetOtras:function(btn, cellEditing){
        
        var me = this,
                gridPagosDet = me.getGridPagosOtrasDet(),
                gridPagos = me.getGridPagosOtras(),
                storePagosDet = gridPagosDet.getStore(),
                records = gridPagos.getSelectionModel().getSelection();



        var record = records[0];

        if (Ext.isEmpty(record)) {

            msgBoxErr('Error', 'Debe seleccionar el gasto antes de agregar el pago');
        }

        var model = new AppCargaFE2.model.ModeloPagosOtrasDet({
            COMPANIA_DET: record.get('COMPANIA'),
            NUMERO_FE_DET: record.get('NUMERO'),
            FOLIO_DET: record.get('FOLIO'),
            SEC_DET: '',
            USUARIO_DET: '',
            T_OPERACION_DET: '',
            IMPORTE_OPERACION_DET: 0,
            BANCO_DET: '',
            FECHA_PAGO_CXP_FE_DET: '',
            TOT_PESOS_DET: 0,
            OBSERVACIONES_DET: '',
            PARIDAD_DET: 0,
            CUENTA_BANCO: ''

        });


        storePagosDet.insert(0, model);
        cellEditing.startEditByPosition({
            row: 0,
            column: 1
        });
        
        
    },
    
    addPagosDet: function(btn, cellEditing) {
        var me = this,
                gridPagosDet = me.getGridPagosDet(),
                gridPagos = me.getGridPagos(),
                storePagosDet = gridPagosDet.getStore(),
                records = gridPagos.getSelectionModel().getSelection();



        var record = records[0];

        if (Ext.isEmpty(record)) {

            msgBoxErr('Error', 'Debe seleccionar la factura antes de agregar el pago');
        }


        msgOut('agrega pagos det2');

        var model = new AppCargaFE2.model.ModeloPagosDet({
            COMPANIA_DET: record.get('COMPANIA'),
            NUMERO_FE_DET: record.get('NUMERO'),
            FOLIO_DET: record.get('FOLIO'),
            SEC_DET: '',
            USUARIO_DET: '',
            T_OPERACION_DET: '',
            IMPORTE_OPERACION_DET: 0,
            BANCO_DET: '',
            FECHA_PAGO_CXP_FE_DET: '',
            TOT_PESOS_DET: 0,
            OBSERVACIONES_DET: '',
            PARIDAD_DET: 0,
            CUENTA_BANCO: ''

        });


        storePagosDet.insert(0, model);
        cellEditing.startEditByPosition({
            row: 0,
            column: 1
        });

    },
    cuentaBancoCXC: function(cuentaBanco, nombreBanco) {

        var me = this,
                gridPagosDet = me.getGridPagosDetCXC(),
                storePagosDet = gridPagosDet.getStore();


        var selection = gridPagosDet.getSelectionModel().getSelection();

        var record = selection[0];

        record.set('CUENTA_BANCO', cuentaBanco);
        record.set('NOM_BANCO', nombreBanco);



    },
    
    cuentaBancoOtras: function(cuentaBanco, nombreBanco) {

        var me = this,
                gridPagosDet = me.getGridPagosOtrasDet(),
                storePagosDet = gridPagosDet.getStore();


        var selection = gridPagosDet.getSelectionModel().getSelection();

        var record = selection[0];

        record.set('CUENTA_BANCO', cuentaBanco);
        record.set('NOM_BANCO', nombreBanco);



    },
    cuentaBanco: function(cuentaBanco, nombreBanco) {

        var me = this,
                gridPagosDet = me.getGridPagosDet(),
                storePagosDet = gridPagosDet.getStore();


        var selection = gridPagosDet.getSelectionModel().getSelection();

        var record = selection[0];

        record.set('CUENTA_BANCO', cuentaBanco);
        record.set('NOM_BANCO', nombreBanco);



    },
    findPagos: function() {

        var me = this,
                gridArch = me.getGridPagos(),
                storeArch = gridArch.getStore();

        gridArch.setLoading('Buscando...');
        storeArch.loadData([], false);
        storeArch.currentPage = 1;
        storeArch.load({
            callback: function() {
                gridArch.setLoading(false);
            }
        });
    },
    buscaDetPagosCXC: function() {


        var me = this,
                grid = me.getGridPagosCXC(),
                gridPagosDet = me.getGridPagosDetCXC(),
                storePagosDet = gridPagosDet.getStore();


        var selection = grid.getSelectionModel().getSelection();

        var record = selection[0];



        storePagosDet.proxy.extraParams.numero_fact = record.get('NUMERO');


        gridPagosDet.setLoading('Buscando...');
        storePagosDet.loadData([], false);
        //  storePagosDet.currentPage = 1;
        storePagosDet.load({
            callback: function() {
                gridPagosDet.setLoading(false);
            }
        });





    },
    
    buscaDetPagosOtras:function(){
        
         var me = this,
                grid = me.getGridPagosOtras(),
                gridPagosDet = me.getGridPagosOtrasDet(),
                
                
                storePagosDet = gridPagosDet.getStore();


        var selection = grid.getSelectionModel().getSelection();

        var record = selection[0];



        storePagosDet.proxy.extraParams.numero_fact = record.get('NUMERO');


        gridPagosDet.setLoading('Buscando...');
        storePagosDet.loadData([], false);
        //  storePagosDet.currentPage = 1;
        storePagosDet.load({
            callback: function() {
                gridPagosDet.setLoading(false);
                
                
                
            }
        });


        
    },
    
    buscaDetPagos: function() {


        var me = this,
                grid = me.getGridPagos(),
                gridPagosDet = me.getGridPagosDet(),
                storePagosDet = gridPagosDet.getStore();


        var selection = grid.getSelectionModel().getSelection();

        var record = selection[0];



        storePagosDet.proxy.extraParams.numero_fact = record.get('NUMERO');


        gridPagosDet.setLoading('Buscando...');
        storePagosDet.loadData([], false);
        //  storePagosDet.currentPage = 1;
        storePagosDet.load({
            callback: function() {
                gridPagosDet.setLoading(false);
                
                
                
            }
        });





    },
    
    buscaFechaSistemaPagosOtras:function(){
        
         Ext.Ajax.request({
            url: 'process/data/BuscaFechaSystema2Otras',
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
                    this.calendarioSysPagOtras = val.data[0].CALENDARIO;

                    this.periodoSysPagOtras = val.data[0].PERIODO;

                    this.periodoSysFinPagOtras = val.data[0].PERIODO;

                    this.findPagosOtras();
                    //this.findArchivosCXP();


                } else if (!val.success) {
                }
            },
            timeout: 30000

        });
        
        
    },
    
    buscaFechaSistemaPagosCxC: function() {

        Ext.Ajax.request({
            url: 'process/data/BuscaFechaSystema2CXC',
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
                    this.calendarioSysPagCXC = val.data[0].CALENDARIO;

                    this.periodoSysPagCXC = val.data[0].PERIODO;

                    this.periodoSysFinPagCXC = val.data[0].PERIODO;

                    msgOut('this.calendarioSys' + this.calendarioSys);

                    this.findPagosCxC();
                    //this.findArchivosCXP();


                } else if (!val.success) {
                }
            },
            timeout: 30000

        });


    },
    buscaFechaSistemaPagosCxp: function() {

        Ext.Ajax.request({
            url: 'process/data/BuscaFechaSystema2CXP',
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
                    this.calendarioSysPag = val.data[0].CALENDARIO;

                    this.periodoSysPag = val.data[0].PERIODO;

                    this.periodoSysFinPag = val.data[0].PERIODO;

                    msgOut('this.calendarioSys' + this.calendarioSys);

                    this.findPagosCxp();
                    //this.findArchivosCXP();


                } else if (!val.success) {
                }
            },
            timeout: 30000

        });


    },
    
    
        buscaFechaSistemaCompl: function() {

        Ext.Ajax.request({
            url: 'process/data/BuscaFechaSystemaCompl',
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
                    this.calendarioSysCompl = val.data[0].CALENDARIO;

                    this.periodoSysCompl = val.data[0].PERIODO;

                    this.periodoSysFinCompl = val.data[0].PERIODO;

                    msgOut('this.calendarioSys' + this.calendarioSys);

                    this.findArchivosCompl();
                    //this.findArchivosCXP();


                } else if (!val.success) {
                }
            },
            timeout: 30000

        });


    },
    
    buscaFechaSistema: function() {

        Ext.Ajax.request({
            url: 'process/data/BuscaFechaSystema2CXC',
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

                    this.periodoSysFin = val.data[0].PERIODO;

                    msgOut('this.calendarioSys' + this.calendarioSys);

                    this.findArchivos();
                    //this.findArchivosCXP();


                } else if (!val.success) {
                }
            },
            timeout: 30000

        });


    },
    buscaFechaSistemaCXP: function() {

        Ext.Ajax.request({
            url: 'process/data/BuscaFechaSystema2CXP',
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

                    this.periodoSysFin = val.data[0].PERIODO;

                    msgOut('this.calendarioSys' + this.calendarioSys);

                    //this.findArchivos();
                    this.findArchivosCXP();


                } else if (!val.success) {
                }
            },
            timeout: 30000

        });


    },
    buscaPorFechaPagosCXC: function(calendario, periodo, periodoFin) {

        this.calendarioSysPagCXC = calendario;

        this.periodoSysPagCXC = periodo;
        this.periodoSysFinPagCXC = periodoFin;




        this.findPagosCxC2(calendario, periodo, periodoFin);





    },
    buscaPorFechaPagosOtras: function(calendario, periodo, periodoFin) {

        this.calendarioSysPagOtras = calendario;

        this.periodoSysPagOtras = periodo;
        this.periodoSysFinPagOtras = periodoFin;




        this.findPagosOtras2(calendario, periodo, periodoFin);





    },
    buscaPorFechaPagosCXP: function(calendario, periodo, periodoFin) {

        this.calendarioSysPag = calendario;

        this.periodoSysPag = periodo;
        this.periodoSysFinPag = periodoFin;




        this.findPagosCxp2(calendario, periodo, periodoFin);





    },
    buscaPorFecha: function(calendario, periodo, periodoFin) {

        this.calendarioSys = calendario;

        this.periodoSys = periodo;
        this.periodoSysFin = periodo;




        this.findArchivos2('', calendario, periodo, periodoFin);





    },
    
    buscaPorFechaCompl: function(calendario, periodo, periodoFin) {

        this.calendarioSysCompl = calendario;

        this.periodoSysCompl = periodo;
        this.periodoSysFinCompl = periodoFin;



        this.findArchivosCompl2('', calendario, periodo, periodoFin);





    },
    buscaPorFechaCXP: function(calendario, periodo, periodoFin) {

        this.calendarioSys = calendario;

        this.periodoSys = periodo;

        this.periodoSysFin = periodoFin;


        this.findArchivos2CXP('', calendario, periodo, periodoFin);





    },
    
    findArchivosCompl2: function(factura, calendario, periodo, periodoFin) {

        var me = this,
                gridArch = me.getGridComplPagos(),
                storeArch = gridArch.getStore();
        if (Ext.isEmpty(factura))
            factura = '';
        if (Ext.isEmpty(calendario)) {
            calendario = this.calendarioSys;
            Ext.getCmp('cboCalendarioFeCompl').setValue(calendario);
        }
        if (Ext.isEmpty(periodo)) {
            periodo = this.periodoSys;

            Ext.getCmp('cboPeriodoFeCompl').setValue(periodo);

        }
        if (Ext.isEmpty(periodoFin)) {
            periodoFin = this.periodoSysFin;

            Ext.getCmp('cboPeriodoFeFinCompl').setValue(periodoFin);

        }

        storeArch.proxy.extraParams.FACTURA = factura;
        storeArch.proxy.extraParams.calendario = calendario;
        storeArch.proxy.extraParams.periodo = periodo;
        storeArch.proxy.extraParams.periodo_fin = periodoFin;

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
    
    findArchivos2: function(factura, calendario, periodo, periodoFin) {

        var me = this,
                gridArch = me.getGridCXC(),
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
        if (Ext.isEmpty(periodoFin)) {
            periodoFin = this.periodoSysFin;

            Ext.getCmp('cboPeriodoCxpFin').setValue(periodoFin);

        }

        storeArch.proxy.extraParams.FACTURA = factura;
        storeArch.proxy.extraParams.calendario = calendario;
        storeArch.proxy.extraParams.periodo = periodo;
        storeArch.proxy.extraParams.periodo_fin = periodoFin;

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
    findArchivos2CXP: function(factura, calendario, periodo, periodoFin) {

        var me = this,
                gridArch = me.getGridCXP(),
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
        if (Ext.isEmpty(periodoFin)) {
            periodoFin = this.periodoSysFin;

            Ext.getCmp('cboPeriodoCxpFin').setValue(periodoFin);

        }

        storeArch.proxy.extraParams.FACTURA = factura;
        storeArch.proxy.extraParams.calendario = calendario;
        storeArch.proxy.extraParams.periodo = periodo;
        storeArch.proxy.extraParams.periodo_fin = periodoFin;

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
    
    recargaPaginaCompl:function(pagina){
        
            msgOut("pagina" + pagina);

        var me = this,
                gridArch = me.getGridComplPagos(),
                storeArch = gridArch.getStore();
    
        gridArch.setLoading('Buscando...');
        storeArch.loadData([], false);
        storeArch.currentPage = pagina;
        storeArch.load({
            callback: function() {
                gridArch.setLoading(false);
            }
        });
        
    },
    
    recargaPaginaCXP: function(pagina, factura) {

        msgOut("pagina" + pagina);

        var me = this,
                gridArch = me.getGridCXP(),
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
    recargaPagina: function(pagina, factura) {

        msgOut("pagina" + pagina);

        var me = this,
                gridArch = me.getGridCXC(),
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
                grid = me.getGridCXC();

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
    validaSatCXP: function(val, col) {

        var me = this,
                grid = me.getGridCXP();

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
                    me.findArchivosCXP();

            }
        });





    },
    guardaDatosSat: function(btn) {

        var me = this,
                form1 = btn.up('formsat'),
                win = form1.up('window'),
                basicForm = form1.getForm();

        var bandera = basicForm.findField('txtSaveDat').getValue();
        var secuencia = basicForm.findField('txtSecuencia').getValue();




//        if (bandera === true) {

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


//        } else {
//
//            if (Ext.isEmpty(secuencia)) {
//
//                form1.setLoading("Leyendo xml...");
//                basicForm.submit({
//                    url: 'CfdiSat/readXml',
//                    success: function(form, action) {
//
//                         win.close();
//                        Ext.Msg.alert('Guardado', action.result.msg);
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





    },
    guardaDatosSatCXC: function(btn) {

        var me = this,
                form1 = btn.up('formsatcxc'),
                win = form1.up('window'),
                basicForm = form1.getForm();

        var bandera = basicForm.findField('txtSaveDatcxc').getValue();
        var secuencia = basicForm.findField('txtSecuenciacxc').getValue();




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


                                basicForm.findField('txt_RFCcxc').setValue(rfc);
                                basicForm.findField('txtPasswordcxc').setValue(password);
                                basicForm.findField('txtSecuenciacxc').setValue(secuencia);
                                basicForm.findField('txtSaveDatcxc').setValue(true);

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





    },
    descargaSat: function(btn) {
        var view = Ext.widget('windowsatcxc');
        view.setTitle('Descarga Sat CXC');
        //   me.findRfcCfdi(btn);
        var basicForm = view.down('formsatcxc').getForm();


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


                    basicForm.findField('txt_RFCcxc').setValue(rfc);
                    basicForm.findField('txtPasswordcxc').setValue(password);
                    basicForm.findField('txtSecuenciacxc').setValue(secuencia);
                    basicForm.findField('txtSaveDatcxc').setValue(true);

                } else if (!val.success) {
                }
            },
            timeout: 30000

        });

    },
    descargaSatCXP: function(btn) {
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
                grid = me.getGridCXC(),
                store = grid.getStore();

        var controllerFE = me.getController('AppConvertidor.controller.Main');


        controllerFE.idconcgastoFiltro = "and idconcgasto not in ('CPP','PFC','PFS','PFP')";
        controllerFE.origen = "F"; 

        var vista = controllerFE.getView(controllerFE.views[0]).create();

        var window = Ext.create('Ext.window.Window', {
            title: 'Convertidor',
            height: 600,
            width: 800,
            maximizable: true,
            modal: true,
            layout: 'fit'
                    // items: [vista]


        }).show();
        //  controllerFE.windowParent = window;

        window.add(vista);
        window.show();

    },
    
    verConvertidorPagoCXC:function(){
        
          var me = this,
                grid = me.getGridPagosCXC(),
                store = grid.getStore();

        var controllerFE = me.getController('AppConvertidor.controller.Main');


        controllerFE.idconcgastoFiltro = "and idconcgasto not in ('CPP','PFC','PFS','PFP')";
        controllerFE.origen = "P"; 

        var vista = controllerFE.getView(controllerFE.views[0]).create();

        var window = Ext.create('Ext.window.Window', {
            title: 'Convertidor',
            height: 600,
            width: 800,
            maximizable: true,
            modal: true,
            layout: 'fit'
                    // items: [vista]


        }).show();
        //  controllerFE.windowParent = window;

        window.add(vista);
        window.show();
        
        
    },
    
    verConvertidorPagoCXP:function(){
        
         var me = this,
                grid = me.getGridPagos(),
                store = grid.getStore();

        var controllerFE = me.getController('AppConvertidor.controller.Main');


        controllerFE.idconcgastoFiltro = "and idconcgasto not in ('CPP','PFC','PFS','PFP')";
        controllerFE.origen = "P"; 

        var vista = controllerFE.getView(controllerFE.views[0]).create();

        var window = Ext.create('Ext.window.Window', {
            title: 'Convertidor',
            height: 600,
            width: 800,
            maximizable: true,
            modal: true,
            layout: 'fit'
                    // items: [vista]


        }).show();
        //  controllerFE.windowParent = window;

        window.add(vista);
        window.show();
        
    },
     verConvertidorPago: function() {

        var me = this,
                grid = me.getGridCXC(),
                store = grid.getStore();

        var controllerFE = me.getController('AppConvertidor.controller.Main');


        controllerFE.idconcgastoFiltro = "and idconcgasto not in ('CPP','PFC','PFS','PFP')";
        controllerFE.origen = "P"; 

        var vista = controllerFE.getView(controllerFE.views[0]).create();

        var window = Ext.create('Ext.window.Window', {
            title: 'Convertidor',
            height: 600,
            width: 800,
            maximizable: true,
            modal: true,
            layout: 'fit'
                    // items: [vista]


        }).show();
        //  controllerFE.windowParent = window;

        window.add(vista);
        window.show();

    },
    
    verConvertidorCXP: function() {

        var me = this,
                grid = me.getGridCXP(),
                store = grid.getStore();

        var controllerFE = me.getController('AppConvertidor.controller.Main');


        controllerFE.idconcgastoFiltro = "and idconcgasto not in ('CPP','PFC','PFS','PFP')";
        controllerFE.origen = "F"; 

        var vista = controllerFE.getView(controllerFE.views[0]).create();

        var window = Ext.create('Ext.window.Window', {
            title: 'Convertidor',
            height: 600,
            width: 800,
            maximizable: true,
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
                grid = me.getGridCXC(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
//            msgOut("index"+index);
        var record = records[index];


        var record = store.getAt(index);

        if (checked === true) {
            if (!Ext.isEmpty(record.get('NUMERO_POL'))) {


                record.set('FLAG_POLIZA', false);
//            msgOut(record.get('FLAG_POLIZA'));
                msgBoxErr("Error", "Este registro ya tiene una poliza generada");

                return;
            }


        }




    },
    beforecheckPolizaCXP: function(index, checked) {

        var me = this,
                grid = me.getGridCXP(),
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
                grid = me.getGridCXC(),
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
                        timeout: 60000,
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
    deleteArchivoCXP: function() {

        var me = this,
                grid = me.getGridCXP(),
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
                        timeout: 60000,
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
                                    var detailPanel = Ext.getCmp('detailPanelCXP');
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
    
    cleanFiltersPagosOtras: function(){
        var me = this,
                grid = me.getGridPagosOtras();
        grid.filters.clearFilters();
        
    },
    cleanFiltersPagosCXC: function() {
        var me = this,
                grid = me.getGridPagosCXC();
        grid.filters.clearFilters();
    },
    cleanFiltersPagos: function() {
        var me = this,
                grid = me.getGridPagos();
        grid.filters.clearFilters();
    },
    
    cleanFiltersArchCompl:function(){
        
        var me = this,
                grid = me.getGridComplPagos();
        grid.filters.clearFilters();
        
        
    },
    cleanFiltersArchComplDet:function(){
        
        var me = this,
                grid = me.getGridComplPagosDet();
        grid.filters.clearFilters();
        
        
    },
    cleanFiltersArch: function() {
        var me = this,
                grid = me.getGridCXC();
        grid.filters.clearFilters();
    },
    cleanFiltersArchCXP: function() {
        var me = this,
                grid = me.getGridCXP();
        grid.filters.clearFilters();
    },
    relacionarPoliza: function() {

        var me = this,
                grid = me.getGridCXC();

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
    relacionarPolizaCXP: function() {

        var me = this,
                grid = me.getGridCXP();

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


        me.datosPolizaCXP();



    },
    datosPoliza: function() {



        var view = Ext.widget('windowrelacionpol');
        view.setTitle('Relacionar Poliza');
//           var form = view.down('formrelacionpol').getForm();
    },
    datosPolizaCXP: function() {



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
    preguntaQuitarRelacionCXP: function() {

        var me = this;


        Ext.MessageBox.show({
            title: 'Quitar Relacion',
            msg: 'Esta seguro que desea quitar la Relacion?',
            icon: Ext.MessageBox.QUESTION,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {

                    me.quitarRelacionPolizaFECXP();

                }
            }
        });

    },
    quitarRelacionPolizaFE: function() {



        var me = this,
                grid = me.getGridCXC(),
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
    quitarRelacionPolizaFECXP: function() {

        var me = this,
                grid = me.getGridCXP(),
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
                grid = me.getGridCXC(),
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
    saveAll: function(col) {
        var me = this,
                grid = me.getGridPagos(),
                store = grid.getStore();
        store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();

        var data = [];

        //if (selection.length >= 2){
        for (var i = 0; i < selection.length; i++) {
            msgOut("dentro de select2: ");

            var record = selection[i];

            data.push(selection[i].data);

            msgOut('data2' + data);

            // if(Ext.isEmpty(record.get('NUMERO_POL'))){
            // record.set('FLAG_POLIZA', true);
            // }else{

            //     record.set('FLAG_POLIZA', false);
            // }
        }

        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }

        //msgOut('jsonData' + jsonData);
        //  }else{


        //  }
        store.resumeEvents();
        grid.getView().refresh();
    },
    selTodos: function(col) {
        var me = this,
                grid = me.getGridCXC(),
                store = grid.getStore();
        store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {
            for (var i = 0; i < selection.length; i++) {
               // msgOut("dentro de select: " + selection[i].data.FLAG_POLIZA);

                var record = selection[i];
       //         if (Ext.isEmpty(record.get('NUMERO_POL'))) {
                    record.set('FLAG_POLIZA', true);
         //       } else {

                 //   record.set('FLAG_POLIZA', false);
           //     }
            }
        } else {

            store.each(function(rec) {
                //rec.set(col, true);

              //  if (Ext.isEmpty(rec.get('NUMERO_POL'))) {

                    rec.set('FLAG_POLIZA', true);

               // } else {

                 //   rec.set('FLAG_POLIZA', false);
               // }


            });
        }
        store.resumeEvents();
        grid.getView().refresh();
    },
    selTodosCXP: function(col) {
        var me = this,
                grid = me.getGridCXP(),
                store = grid.getStore();
        store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {
            for (var i = 0; i < selection.length; i++) {
                msgOut("dentro de select: " + selection[i].data.FLAG_POLIZA);

                var record = selection[i];
                //if (Ext.isEmpty(record.get('NUMERO_POL'))) {
                    record.set('FLAG_POLIZA', true);
                //} else {

                  //  record.set('FLAG_POLIZA', false);
                //}
            }
        } else {

            store.each(function(rec) {
                //rec.set(col, true);

               // if (Ext.isEmpty(rec.get('NUMERO_POL'))) {

                    rec.set('FLAG_POLIZA', true);

                //} else {

                //    rec.set('FLAG_POLIZA', false);
               // }


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
                grid = me.getGridCXC(),
                store = grid.getStore();
        store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {
            for (var i = 0; i < selection.length; i++) {
                msgOut("dentro de select: " + selection[i].data.NOMIDCONCGASTO);

                var record = selection[i];
          //      if (Ext.isEmpty(record.get('NUMERO_POL'))) {
                    record.set('NOMIDCONCGASTO', val);
                    record.set('NO_CASO', val);
            //    }

            }
        } else {
            
            var selectGrid = grid.getSelectionModel().getSelection()[0];
            
              //    if (Ext.isEmpty(selectGrid.get('NUMERO_POL'))) {
                        selectGrid.set('NOMIDCONCGASTO', val);
                        selectGrid.set('NO_CASO', val);
                //    }
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
    actIdConGastoCXP: function(val, col) {

        var me = this,
                grid = me.getGridCXP(),
                store = grid.getStore();
        store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {
            for (var i = 0; i < selection.length; i++) {
                msgOut("dentro de select: " + selection[i].data.NOMIDCONCGASTO);

                var record = selection[i];
               // if (Ext.isEmpty(record.get('NUMERO_POL'))) {
                    record.set('NOMIDCONCGASTO', val);
                    record.set('NO_CASO', val);
               // }

            }
        } else {
            
            var selectGrid = grid.getSelectionModel().getSelection()[0];
            
                //  if (Ext.isEmpty(selectGrid.get('NUMERO_POL'))) {
                        selectGrid.set('NOMIDCONCGASTO', val);
                        selectGrid.set('NO_CASO', val);
                  //  }
            
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
                grid = me.getGridCXC(),
                store = grid.getStore();
        store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {
            for (var i = 0; i < selection.length; i++) {
                msgOut("dentro de select: " + selection[i].data.FECHA_POL);

                var record = selection[i];
            //    if (Ext.isEmpty(record.get('NUMERO_POL'))) {

                    record.set('FECHA_POL', val);
            //    }
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
    actFechaPolCXP: function(val, col) {

        var me = this,
                grid = me.getGridCXP(),
                store = grid.getStore();
        store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {
            for (var i = 0; i < selection.length; i++) {
                msgOut("dentro de select: " + selection[i].data.FECHA_POL);

                var record = selection[i];
        //        if (Ext.isEmpty(record.get('NUMERO_POL'))) {

                    record.set('FECHA_POL', val);
          //      }
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
                grid = me.getGridCXC(),
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
    desSelTodosCXP: function(col) {
        var me = this,
                grid = me.getGridCXP(),
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
    
    imprimirXMLPagCompl:function(){
        
        var me = this,
                grid = me.getGridComplPagos(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado XML");
            return;
        }
        var compania = record.get('COMPANIA');
        // var xml = record.get('XML');
        // xml = xml.replace('.xml', '.pdf');
        // xml = xml.replace('.XML', '.pdf');

        var fecha = record.get('FECHA');
        // xml = xml.replace('.xml', '.pdf');
        // xml = xml.replace('.XML', '.pdf');
        var fechaM = Ext.Date.parse(fecha, 'd/m/Y');
        var mes = (fechaM.getMonth() + 1).toString();
        var ano = fechaM.getFullYear().toString();
        if (mes < 10 && ano < 2018){
            
            mes = '0' + mes;
            
        }
        
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
//                );
                            window.open(string);

                            return string;
                        }
                    }
                ]//fin if 

            }

        }).show();
        
        
    },
    
    imprimirXMLCompl:function(){
        
         var me = this,
                grid = me.getGridComplPagosDet(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado XML");
            return;
        }
        var compania = record.get('COMPANIA');
        // var xml = record.get('XML');
        // xml = xml.replace('.xml', '.pdf');
        // xml = xml.replace('.XML', '.pdf');

        var fecha = record.get('FECHA');
        // xml = xml.replace('.xml', '.pdf');
        // xml = xml.replace('.XML', '.pdf');
        var fechaM = Ext.Date.parse(fecha, 'd/m/Y');
        var mes = (fechaM.getMonth() + 1).toString();
        var ano = fechaM.getFullYear().toString();
        if (mes < 10 && ano < 2018){
            
            mes = '0' + mes;
            
        }
        
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
//                );
                            window.open(string);

                            return string;
                        }
                    }
                ]//fin if 

            }

        }).show();
        
        
    },
    
    imprimirXML: function() {
        var me = this,
                grid = me.getGridCXC(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado XML");
            return;
        }
        var compania = record.get('COMPANIA');
        // var xml = record.get('XML');
        // xml = xml.replace('.xml', '.pdf');
        // xml = xml.replace('.XML', '.pdf');

        var fecha = record.get('FECHA');
        // xml = xml.replace('.xml', '.pdf');
        // xml = xml.replace('.XML', '.pdf');
        var fechaM = Ext.Date.parse(fecha, 'd/m/Y');
        var mes = (fechaM.getMonth() + 1).toString();
        var ano = fechaM.getFullYear().toString();
        if (mes < 10 && ano < 2018){
            
            mes = '0' + mes;
            
        }
        
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
//                );
                            window.open(string);

                            return string;
                        }
                    }
                ]//fin if 

            }

        }).show();

    },
    imprimirXMLCXP: function() {
        var me = this,
                grid = me.getGridCXP(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado XML");
            return;
        }
        var compania = record.get('COMPANIA');
        // var xml = record.get('XML');
        // xml = xml.replace('.xml', '.pdf');
        // xml = xml.replace('.XML', '.pdf');

        var fecha = record.get('FECHA');
        // xml = xml.replace('.xml', '.pdf');
        // xml = xml.replace('.XML', '.pdf');
        var fechaM = Ext.Date.parse(fecha, 'd/m/Y');
        var mes = (fechaM.getMonth() + 1).toString();
        var ano = fechaM.getFullYear().toString();
        
        if (mes < 10 && ano < 2018){
            
            mes = '0' + mes;
            
        }
        

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
//                );
                            window.open(string);

                            return string;
                        }
                    }
                ]//fin if 

            }

        }).show();

    },
    
    imprimirPDFCompl:function(){
        
        var me = this,
                grid = me.getGridComplPagosDet(),
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
    
    imprimirPDF: function() {
        var me = this,
                grid = me.getGridCXC(),
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
    imprimirPDFCXP: function() {
        var me = this,
                grid = me.getGridCXP(),
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
                grid = me.getGridCXC(),
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
                'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={1}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con&sat=0&orden=1',
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
    imprimirPolizaCXP: function(value) {
        var me = this,
                grid = me.getGridCXP(),
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
                'http://' + window.location.host + '/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=rep_polizas&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={1}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}&reporte=REP_polizas_con&sat=0&orden=1',
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
    
    setConcGastoPago:function(gasto){
        
        var me = this,
                grid = me.getGridPagos(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        record.set('NO_CASO_PAGOS', gasto);
        
        
    },
    
    setConcGasto: function(conc) {
        msgOut(conc);
        var me = this,
                grid = me.getGridCXC(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        record.set('NO_CASO', conc);


    },
    setConcGastoCXP: function(conc) {
        msgOut(conc);
        var me = this,
                grid = me.getGridCXP(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        record.set('NO_CASO', conc);


    },
       guardarArchivosMult:function(){
        
         var me = this,
                grid = me.getGridCXC(),
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
    
    guardarArchivosPagosCXC:function(){
        
           var me = this,
                grid = me.getGridPagosCXC(),
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

                    fechaCam = Ext.Date.format(modified[i].data.FECHA_POL_PAGO, 'd/m/Y');
                    modified[i].data.FECHA_POL_PAGO = fechaCam;

                }
            }
            if (!Ext.isEmpty(news)) {

                for (i = 0; i < news.length; i++) {

                    fechaCam = Ext.Date.format(news[i].data.FECHA_POL_PAGO, 'd/m/Y');
                    news[i].data.FECHA_POL_PAGO = fechaCam;

                }
            }



            grid.setLoading("Guardando...");
            grid.store.getProxy().setExtraParam('tipoGenPoliza','1'); 
            grid.store.getProxy().setExtraParam('tipoPolMult',''); 
            grid.store.getProxy().setExtraParam('tipoProceso','P');
            store.sync({
                scope: this,
                success: function(resp, dos) {
                    grid.setLoading(false);
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
                },
                callback: function(records, operation, val3) {
                    grid.setLoading(false);
                    me.findPagosCxC();
//                    me.procesarPolizas(modified, 0, me, grid);

                }

            });

        }
         
        
        
    },
    
     guardarArchivosPagosCXP:function(){
         
         var me = this,
                grid = me.getGridPagos(),
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

                    fechaCam = Ext.Date.format(modified[i].data.FECHA_POL_PAGO, 'd/m/Y');
                    modified[i].data.FECHA_POL_PAGO = fechaCam;

                }
            }
            if (!Ext.isEmpty(news)) {

                for (i = 0; i < news.length; i++) {

                    fechaCam = Ext.Date.format(news[i].data.FECHA_POL_PAGO, 'd/m/Y');
                    news[i].data.FECHA_POL_PAGO = fechaCam;

                }
            }



            grid.setLoading("Guardando...");
            grid.store.getProxy().setExtraParam('tipoGenPoliza','1'); 
            grid.store.getProxy().setExtraParam('tipoPolMult',''); 
            grid.store.getProxy().setExtraParam('tipoProceso','P');
            store.sync({
                scope: this,
                success: function(resp, dos) {
                    grid.setLoading(false);
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
                },
                callback: function(records, operation, val3) {
                    grid.setLoading(false);
                    me.findPagosCxp();
//                    me.procesarPolizas(modified, 0, me, grid);

                }

            });

        }
         
         
     },
     guardarArchivosPagos: function() {
        var me = this,
                grid = me.getGridCXC(),
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
            grid.store.getProxy().setExtraParam('tipoProceso','P'); 
            
            store.sync({
                scope: this,
                success: function(resp, dos) {
                    grid.setLoading(false);
                    
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
                },
                callback: function(records, operation, val3) {
                    grid.setLoading(false);
                    me.findArchivos();
//                    me.procesarPolizas(modified, 0, me, grid);

                }

            });

        }
    },
    
    guardarArchivos: function() {
        var me = this,
                grid = me.getGridCXC(),
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
                },
                callback: function(records, operation, val3) {
                    grid.setLoading(false);
                    me.findArchivos();
//                    me.procesarPolizas(modified, 0, me, grid);

                }

            });

        }
    },
     guardarArchivosMultCXP:function(){
        
         var me = this,
                grid = me.getGridCXP(),
                records = grid.getSelectionModel().getSelection(),
                  form = me.getFormPolMultCXP(),
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
                    modified[i].data.FECHA_POL = basicForm.findField('fechaFeMultCXP').getRawValue();

                }
            }
            if (!Ext.isEmpty(news)) {

                for (i = 0; i < news.length; i++) {

                    //fechaCam = Ext.Date.format(news[i].data.FECHA_POL, 'd/m/Y');
                    news[i].data.FECHA_POL = basicForm.findField('fechaFeMultCXP').getRawValue();

                }
            }


            form.setLoading("Guardando...");
            grid.setLoading("Guardando...");
            grid.store.getProxy().setExtraParam('tipoGenPoliza','2'); 
            grid.store.getProxy().setExtraParam('tipoPolMult',basicForm.findField('cboTipoPolizaFEMultCXP').getValue()); 
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
                    me.findArchivosCXP();
//                    me.procesarPolizas(modified, 0, me, grid);

                }

            });

        }
        
    },
    guardarArchivosCXP: function() {
        var me = this,
                grid = me.getGridCXP(),
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
                },
                callback: function(records, operation, val3) {
                    grid.setLoading(false);
                    me.findArchivosCXP();
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
    
    findPagosOtras:function(calendario, periodo, periodoFin){
        
         var me = this,
                grid = me.getGridPagosOtras(),
                store = grid.getStore();

        //var currentdate = new Date();

        // var mes = currentdate.getMonth()+1;
        // var calen = currentdate.getFullYear();


        if (Ext.isEmpty(calendario)) {
            calendario = this.calendarioSysPagOtras;
            Ext.getCmp('cboCalendarioPagosOtras').setValue(calendario);
        }
        if (Ext.isEmpty(periodo)) {
            periodo = this.periodoSysPagOtras;

            Ext.getCmp('cboPeriodoPagosOtras').setValue(periodo);

        }
        if (Ext.isEmpty(periodoFin)) {
            periodoFin = this.periodoSysFinPagOtras;

            Ext.getCmp('cboPeriodoPagosOtrasFin').setValue(periodoFin);

        }

        store.proxy.extraParams.calendario = calendario;
        store.proxy.extraParams.periodo = periodo;
        store.proxy.extraParams.periodo_fin = periodoFin;


        grid.setLoading('Buscando...');
        store.loadData([], false);
        store.load({
            callback: function() {
                grid.setLoading(false);
            }
        });
        
    },
    
    findPagosCxC: function(calendario, periodo, periodoFin) {

        var me = this,
                grid = me.getGridPagosCXC(),
                store = grid.getStore();

        //var currentdate = new Date();

        // var mes = currentdate.getMonth()+1;
        // var calen = currentdate.getFullYear();


        if (Ext.isEmpty(calendario)) {
            calendario = this.calendarioSysPagCXC;
            Ext.getCmp('cboCalendarioPagosCXC').setValue(calendario);
        }
        if (Ext.isEmpty(periodo)) {
            periodo = this.periodoSysPagCXC;

            Ext.getCmp('cboPeriodoPagosCXC').setValue(periodo);

        }
        if (Ext.isEmpty(periodoFin)) {
            periodoFin = this.periodoSysFinPagCXC;

            Ext.getCmp('cboPeriodoPagosCxCFin').setValue(periodoFin);

        }

        store.proxy.extraParams.calendario = calendario;
        store.proxy.extraParams.periodo = periodo;
        store.proxy.extraParams.periodo_fin = periodoFin;


        grid.setLoading('Buscando...');
        store.loadData([], false);
        store.load({
            callback: function() {
                grid.setLoading(false);
            }
        });
    },
    findPagosCxC2: function(calendario, periodo, periodoFin) {

        var me = this,
                grid = me.getGridPagosCXC(),
                store = grid.getStore();

        //var currentdate = new Date();

        // var mes = currentdate.getMonth()+1;
        // var calen = currentdate.getFullYear();


        if (Ext.isEmpty(calendario)) {
            calendario = this.calendarioSysPagCXC;
            Ext.getCmp('cboCalendarioPagosCXC').setValue(calendario);
        }
        if (Ext.isEmpty(periodo)) {
            periodo = this.periodoSysPagCXC;

            Ext.getCmp('cboPeriodoPagosCXC').setValue(periodo);

        }
        if (Ext.isEmpty(periodoFin)) {
            periodoFin = this.periodoSysFinPagCXC;

            Ext.getCmp('cboPeriodoPagosCxCFin').setValue(periodoFin);

        }

        store.proxy.extraParams.calendario = calendario;
        store.proxy.extraParams.periodo = periodo;
        store.proxy.extraParams.periodo_fin = periodoFin;


        grid.setLoading('Buscando...');
        store.loadData([], false);
        store.currentPage = 1;
        store.load({
            callback: function() {
                grid.setLoading(false);
            }
        });
    },
    findPagosOtras2:function(calendario, periodo, periodoFin){
        
        var me = this,
                grid = me.getGridPagosOtras(),
                store = grid.getStore();

        //var currentdate = new Date();

        // var mes = currentdate.getMonth()+1;
        // var calen = currentdate.getFullYear();


        if (Ext.isEmpty(calendario)) {
            calendario = this.calendarioSysPagOtras;
            Ext.getCmp('cboCalendarioPagosOtras').setValue(calendario);
        }
        if (Ext.isEmpty(periodo)) {
            periodo = this.periodoSysPagOtras;

            Ext.getCmp('cboPeriodoPagosOtras').setValue(periodo);

        }
        if (Ext.isEmpty(periodoFin)) {
            periodoFin = this.periodoSysFinPagOtras;

            Ext.getCmp('cboPeriodoPagosOtrasFin').setValue(periodoFin);

        }

        store.proxy.extraParams.calendario = calendario;
        store.proxy.extraParams.periodo = periodo;
        store.proxy.extraParams.periodo_fin = periodoFin;


        grid.setLoading('Buscando...');
        store.loadData([], false);
        store.currentPage = 1;
        store.load({
            callback: function() {
                grid.setLoading(false);
            }
        });
    },
    findPagosCxp2: function(calendario, periodo, periodoFin) {

        var me = this,
                grid = me.getGridPagos(),
                store = grid.getStore();

        //var currentdate = new Date();

        // var mes = currentdate.getMonth()+1;
        // var calen = currentdate.getFullYear();


        if (Ext.isEmpty(calendario)) {
            calendario = this.calendarioSysPag;
            Ext.getCmp('cboCalendarioPagosCXP').setValue(calendario);
        }
        if (Ext.isEmpty(periodo)) {
            periodo = this.periodoSysPag;

            Ext.getCmp('cboPeriodoPagosCXP').setValue(periodo);

        }
        if (Ext.isEmpty(periodoFin)) {
            periodoFin = this.periodoSysFinPag;

            Ext.getCmp('cboPeriodoPagosCxpFin').setValue(periodoFin);

        }

        store.proxy.extraParams.calendario = calendario;
        store.proxy.extraParams.periodo = periodo;
        store.proxy.extraParams.periodo_fin = periodoFin;


        grid.setLoading('Buscando...');
        store.loadData([], false);
        store.currentPage = 1;
        store.load({
            callback: function() {
                grid.setLoading(false);
            }
        });
    },
    findPagosCxp: function(calendario, periodo, periodoFin) {

        var me = this,
                grid = me.getGridPagos(),
                store = grid.getStore();

        //var currentdate = new Date();

        // var mes = currentdate.getMonth()+1;
        // var calen = currentdate.getFullYear();


        if (Ext.isEmpty(calendario)) {
            calendario = this.calendarioSysPag;
            Ext.getCmp('cboCalendarioPagosCXP').setValue(calendario);
        }
        if (Ext.isEmpty(periodo)) {
            periodo = this.periodoSysPag;

            Ext.getCmp('cboPeriodoPagosCXP').setValue(periodo);

        }
        if (Ext.isEmpty(periodoFin)) {
            periodoFin = this.periodoSysFinPag;

            Ext.getCmp('cboPeriodoPagosCxpFin').setValue(periodoFin);

        }

        store.proxy.extraParams.calendario = calendario;
        store.proxy.extraParams.periodo = periodo;
        store.proxy.extraParams.periodo_fin = periodoFin;


        grid.setLoading('Buscando...');
        store.loadData([], false);
        store.load({
            callback: function() {
                grid.setLoading(false);
            }
        });
    },
    
    findArchivosCompl:function(factura, calendario, periodo, periodoFin){
        
         var me = this,
                gridArch = me.getGridComplPagos(),
                storeArch = gridArch.getStore();

        //var currentdate = new Date();

        // var mes = currentdate.getMonth()+1;
        // var calen = currentdate.getFullYear();

        if (Ext.isEmpty(factura))
            factura = '';
        if (Ext.isEmpty(calendario)) {
            calendario = this.calendarioSysCompl;
            Ext.getCmp('cboCalendarioFeCompl').setValue(calendario);
        }
        if (Ext.isEmpty(periodo)) {
            periodo = this.periodoSysCompl;

            Ext.getCmp('cboPeriodoFeCompl').setValue(periodo);

        }
        if (Ext.isEmpty(periodoFin)) {
            periodoFin = this.periodoSysFinCompl;

            Ext.getCmp('cboPeriodoFeFinCompl').setValue(periodoFin);

        }

        storeArch.proxy.extraParams.FACTURA = factura;
        storeArch.proxy.extraParams.calendario = calendario;
        storeArch.proxy.extraParams.periodo = periodo;
        storeArch.proxy.extraParams.periodo_fin = periodoFin;


        gridArch.setLoading('Buscando...');
        storeArch.loadData([], false);
        storeArch.load({
            callback: function() {
                gridArch.setLoading(false);
            }
        });
        
    },
    
    findArchivos: function(factura, calendario, periodo, periodoFin) {

        var me = this,
                gridArch = me.getGridCXC(),
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
        if (Ext.isEmpty(periodoFin)) {
            periodoFin = this.periodoSysFin;

            Ext.getCmp('cboPeriodoFeFin').setValue(periodoFin);

        }

        storeArch.proxy.extraParams.FACTURA = factura;
        storeArch.proxy.extraParams.calendario = calendario;
        storeArch.proxy.extraParams.periodo = periodo;
        storeArch.proxy.extraParams.periodo_fin = periodoFin;


        gridArch.setLoading('Buscando...');
        storeArch.loadData([], false);
        storeArch.load({
            callback: function() {
                gridArch.setLoading(false);
            }
        });
    },
    findArchivosCXP: function(factura, calendario, periodo, periodoFin) {

        var me = this,
                gridArch = me.getGridCXP(),
                storeArch = gridArch.getStore();

        //var currentdate = new Date();

        // var mes = currentdate.getMonth()+1;
        // var calen = currentdate.getFullYear();

        if (Ext.isEmpty(factura))
            factura = '';
        if (Ext.isEmpty(calendario)) {
            calendario = this.calendarioSys;
            Ext.getCmp('cboCalendarioFeCXP').setValue(calendario);
        }
        if (Ext.isEmpty(periodo)) {
            periodo = this.periodoSys;

            Ext.getCmp('cboPeriodoFeCXP').setValue(periodo);

        }
        if (Ext.isEmpty(periodoFin)) {
            periodoFin = this.periodoSysFin;

            Ext.getCmp('cboPeriodoCxpFin').setValue(periodoFin);

        }

        storeArch.proxy.extraParams.FACTURA = factura;
        storeArch.proxy.extraParams.calendario = calendario;
        storeArch.proxy.extraParams.periodo = periodo;
        storeArch.proxy.extraParams.periodo_fin = periodoFin;


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
    addArchivoCXP: function(btn) {

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
                    this.companiaSession = val.data[0].COMPANIA;

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
            url: 'dirdata/processCCP',
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
                me.findArchivosCXP();
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
                grid = me.getGridCXC(),
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
