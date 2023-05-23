Ext.define('AppCXPFacturas.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: [
        'StoreArchivos',
        'StoreDirectorios',
        'StoreBuscaFactura',
        'StoreRelFact',
        'StoreTesoreria',
        'StoreRembolsos',
        'StoreFoliosGe',
        'StoreCxpOtros',
        'StoreFacturasXOtras',
        'StoreGridConceptosCxp',
        'StoreCcostos',
        'StoreViaticos',
        'StoreInfoFactOtras',
        'StoreOtrasArchivos',
        'StorePorcentaje',
        'StoreInfoFactViat',
        'StoreFactCan',
        'StoreIntercos',
        'StoreArchivosTesor',
        'StoreRelFactInt'
    ],
    models: [
        'ModeloInfoFactOtras',
        'ModeloInfoFactViat',
        'ModeloArchivos',
        'ModeloDirectorios',
        'ModeloBuscaFactura',
        'ModeloRelFact',
        'ModeloTesoreria',
        'ModeloRembolso',
        'ModelFoliosGe',
        'ModeloCxpOtros',
        'ModeloFacturasXOtras',
        'ModelGridConceptosCxp',
        'ModelCcostos',
        'ModeloViaticos',
        'ModeloOtrasArchivos',
        'ModelFactCan',
        'ModeloIntercos',
        'ModelArchivosTesor',
        'ModeloRelFactInt'
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
            ref: 'formRelacionPol',
            selector: 'formrelacionpol'
        },
        {
            ref: 'formSat',
            selector: 'formsat'
        },
        {
            ref: 'formCXPOtros',
            selector: 'formcxpotros'
        },
        {
            ref: 'gridRelFact',
            selector: 'gridrelfact'
        },
        {
            ref: 'gridTesoreria',
            selector: 'gridtesoreria'
        },
        {
            ref:'formActFolio',
            selector: 'formactfolio'
        },
        {
            ref: 'gridRembolsos',
            selector: 'gridrembolsos'
        },
        {
            ref:'panelSurTesoreria',
            selector: 'panelsurtesoreria'
            
        },
        {
            ref:'gridFoliosGe',
            selector: 'gridfoliosge'
            
        },
        {
            ref:'gridCxpOtros',
            selector: 'gridcxpotros'
            
        },
        {
            ref:'gridFacturasXOtras',
            selector: 'gridfacturasxotras'
            
        },
        {
            ref:'menuGeneral',
            selector: 'menugeneral'
            
        },
        {
            ref:'menuGeneralOtros',
            selector: 'menugeneralotros'
            
        },
        {
            ref:'gridConceptos',
            selector: 'gridconceptos'
            
        },
        {
            ref:'gridCcostos',
            selector: 'gridccostos'
            
        },
        {
            ref:'formConceptos',
            selector: 'formconceptos'
    
        },
        {
            ref:'gridViaticos',
            selector: 'gridviaticos'
    
        },
        {
            ref:'menuGeneralViaticos',
            selector: 'menugeneralviaticos'
            
        },
        {
            ref:'formActViaticos',
            selector: 'formactviaticos'
            
        },
        {
            ref:'gridInfoFactOtras',
            selector: 'gridinfofactotras'
            
        },
        {
            ref:'formAddArchivo',
            selector: 'formaddarchivo'
            
        },
        {
            ref:'windowAddArchivo',
            selector: 'windowaddarchivo'
            
        },
        {
            ref:'gridOtrasArchivos',
            selector: 'gridotrasarchivos'
            
        },
        {
            ref:'panelSurOtrasArchivos',
            selector: 'panelsurotrasarchivos'
            
        },
        {
            ref:'panelSurFoliosGe',
            selector: 'panelsurfoliosge'
            
        },
        {
            ref:'gridInfoFactViat',
            selector: 'gridinfofactviat'
            
        },
        {
            ref:'panelSurViaticArchivos',
            selector: 'panelsurviaticarchivos'
            
        },
        {
            ref:'gridFactCan',
            selector: 'gridfactcan'
             
            
        },
        {
            ref:'gridIntercos',
            selector: 'gridintercos'
             
            
        },
        {
            ref:'menuGeneralIntercos',
            selector: 'menugeneralintercos'
             
            
        },
        {
            ref:'gridArchivosTesor',
            selector: 'gridarchivostesor'
             
            
        },
        
        {
            ref:'gridRelFactInt',
            selector: 'gridrelfactint'
             
            
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
        'FormProrrateo',
        'ContainerSat',
        'FormSat',
        'WindowSat',
        'FormCXPOtros',
        'WindowCXPOtros',
        'GridRelFact',
        'GridTesoreria',
        'FormActFolio',
        'GridRembolsos',
        'PanelSurTesoreria',
        'GridFoliosGe',
        'GridCxpOtros',
        'GridFacturasXOtras',
        'MenuGeneral',
        'MenuGeneralOtros',
        'GridConceptos',
        'GridCcostos',
        'FormConceptos',
        'WindowConceptos',
        'GridViaticos',
        'MenuGeneralViaticos',
        'FormActViaticos',
        'GridInfoFactOtras',
        'FormAddArchivo',
        'WindowAddArchivo',
        'GridOtrasArchivos',
        'PanelSurOtrasArchivos',
        'PanelSurFoliosGe',
        'GridInfoFactViat',
        'PanelSurViaticArchivos',
        'GridFactCan',
        'GridIntercos',
        'MenuGeneralIntercos',
        'GridArchivosTesor',
        'GridRelFactInt'
    ],
    paginaAnt:1,
    calendarioSys:'',
    periodoSys:'',
    calendarioSysOtros:'',
    periodoSysOtros:'',
    calendarioSysViaticos:'',
    periodoSysViaticos:'',
    companiaSession:'',
    folioActualizaTeso: '',
    verPorCXPfecha:'',
    copiafolio:'',
    folioActualizaTesoOtros:'0',
    banderaOtros:'0',
    relacionaOtrasOrigen:'',
    relacionFactOtr:'',
    periodoSysFin:'',
    periodoSysOtrosFinal:'',
    periodoSysViaticosFinal:'',
    permisosToken:'',
    separacionInt:'',
    notaCreditoOrigen:'',
    init: function() {

        var me = this;
        me.control({
           
           
           gridrelfactint:{
               
               afterrender: function() {

                    me.findRelacionCXPInt();
                    
                },
                        
                
//                cleanFiltersFE: function(){
//                    me.cleanFiltersFE();
//                },
//                
                guardarCXPRelacionInt: function(btn){
            
                    me.guardarCXPRelacionInt(btn);
                },
                borraCXPRelacionInt: function(btn){
            
                    me.borraCXPRelacionInt(btn);
                },
                cleanFiltersCXPInt:function(){
            
                     me.cleanFiltersCXPInt();
                }
                
//                borraFERelacion: function(){
//                   me.borraFERelacion();
//                }
               
               
               
           },
            
            gridarchivostesor:{
                
                verArchivoTesor:function(){
                    
                    me.verArchivoTesor();
                }
                
              
                
                
            },
            
            gridfactcan:{
                
                imprimirArchivoCan:function(){
                    
                  me.imprimirArchivoCan();  
                },
                
                buscaFoliosCan:function(folio){
                    
                    me.buscaFoliosCan(folio);
                },
                select: function(view, model, index) {
                    var me = this,
                            grid = me.getGridFactCan();

                    var selection = grid.getSelectionModel().getSelection();

                    var record = selection[0];
                    
               
                    var bookTplMarkup = [
                        '<div class="feDetails">',
                        '<ul>',
                        '<li><b>Motivo:</b> {MOT_CAN}</li>',
                        '<li><b>Compa&ntilde;ia:</b> {COMPANIA_FOL_CAN}</li>',
                        '<li><b>Folio:</b> {FOLIO_FOL_CAN}</li>',
                        '<li><b>Numero:</b> {NUMERO_FOL_CAN}</li>',
                        '<li><b>Nombre:</b> {NOMBRE_FOL_CAN}</li>',
                        '<li><b>Rfc:</b> {RFC_FOL_CAN}</li>',
                        '<li><b>Fecha:</b> {FECHA_FACT_FOL_CAN}</li>',
                        '<li><b>Total:</b> {TOTAL_FACT_FOL_CAN}</li>',
                        
                        '</ul>',
                        '</div>',
                       





                    ];
                    var bookTpl = Ext.create('Ext.Template', bookTplMarkup);
                    var detailPanel = Ext.getCmp('detailPanelCan');
                    detailPanel.update(bookTpl.apply(record.data));


                }
            },
            
            
            gridotrasarchivos:{
                 addArchivoOtras:function(){
                   
                   me.addArchivoOtras();
               },
               
               verArchivo:function(){
                   
                   me.verArchivo();
               },
               
               deleteArchivoOtras:function(){
                   
                   me.deleteArchivoOtras();
               }
               
               
                
            },
            
           formaddarchivo:{
               
               saveArchivoOtras:function(btn){
                   
                   me.saveArchivoOtras(btn);
               }
               
           },
            
           gridinfofactotras:{
               
               verArchivoOtrasInfo:function(){
                   
                   me.verArchivoOtrasInfo();
               }
               
              
               
           }, 
           
            
            formactviaticos:{
                
                actFolViatic: function(){
                    
                    me.actFolViatic();
                    
                }
                
                
                
            },
            
            menugeneralviaticos:{
                
                buscaPorFechaViaticos: function(calendario, periodo, periodoFinal){
                    
                    me.findViaticos(calendario,periodo,periodoFinal);
                    
                    
                }
                
            },
            
            gridviaticos: {
                
                select:function(){
                    
                    me.findFacturasXViaticInfo();
                    me.addPanelViaticos();
                },
                
                validaPagosViatico:function(){
                    
                    me.validaPagosViatico();
                },
                
                afterrender:function(){
                    
                    me.buscaFechaSistemaViaticos();
                },
                actualizaFolioViaticos:function(){
                    
                    me.actualizaFolioViaticos();
                },
                generaReembolso:function(){
                    
                    me.generaReembolso();
                }
                
                
            },
            
            windowconceptos:{
                recargaGridConceptos: function(){
                    
                    me.recargaGridConceptos();
                }
                
            },
            
            formconceptos:{
                
                guardaConceptos: function(btn){
                    me.guardaConceptos(btn);
                },
                recargaGridConceptos: function(){
                    
                    me.recargaGridConceptos();
                }
                
                
            },
            
            
            gridccostos:{
                actIdCCCxp:function(){
                    
                    me.actIdCCCxp();
                },
                
                afterrender: function() {
                  
                    me.findGridCC();
                }
                
            },
            
            gridconceptos:{
                
                relacionaConcepto:function(){
                    
                    me.actIdConceptoCxp();
                    
                    
                },
                
                 
                
                eliminaConceptos: function(){
                    
                    me.eliminaConceptos();
                    
                },
                addConcepto: function(btn, cellEditing) {
                    
                    me.addConcepto(btn, cellEditing);
                },
                guardaConceptos:function(){
                    
                  me.guardaConceptos();  
                },
                afterrender: function() {
                  
                    me.findGridConceptos();
                }
            },
            
            menugeneralintercos:{
                buscaPorFechaInt:function(calendario,periodo,periodoFin){
                    
                    me.buscaPorFechaInt(calendario,periodo,periodoFin);
                    
                }
           },
            
            menugeneral:{
                
                buscaPorFecha:function(calendario,periodo,periodoFin){
                    
                    me.buscaPorFecha(calendario,periodo,periodoFin);
                    
                }
                
            },
            menugeneralotros:{
                
                 buscaPorFechaOtros:function(calendario,periodo,periodoFinal){
                    
                    me.buscaPorFechaOtros(calendario,periodo,periodoFinal);
                    
                }
                
            },
            
            gridfacturasxotras: {
                
                afterrender: function() {
                    me.habilitarBotonesRelacion();
                    me.findFacturasXOtras();
                },
                guardaRelFactOtras: function(){
                    
                 if(this.relacionaOtrasOrigen === 'F') {  
                    me.guardaRelFactOtras();
                 }
                 
                 if(this.relacionaOtrasOrigen === 'O') {     
                    me.guardaRelOtrasFact();
                 }
                    
                    
                },
                
                eliminaRelFactOtras: function(){
                    
                 if(this.relacionaOtrasOrigen === 'F') {  
                    me.eliminaRelFactOtras();
                 }
                 
                 if(this.relacionaOtrasOrigen === 'O') {     
                    me.eliminaRelOtrasFact();
                 }
                    
                    
                }
                
                
            },
            
            gridcxpotros:{
                
                generaReembolsoOtras:function(){
                    
                    me.generaReembolsoOtras();  
                },
                
                 select: function(view, model, index) {
                    
                     me.findFacturasXOtrasInfo();
                     me.findOtrasArchivos();
                    
                 },
                
                imprimirReembolso: function(){
                    
                    me.imprimirReembolso();
                    
                    
                },
                
                relacionaFacturas: function(origen){
                    
                    me.relacionFactOtr = '1';
                    
                    me.relacionaFacturas(origen);
                    
                    
                },
                
                quitarRelacionaFacturas: function(origen){
                    
                    me.relacionFactOtr = '0';
                    
                    me.quitarRelacionaFacturas(origen);
                    
                },
                
                 itemdblclick: function() {
                  
                    me.editCXPOtras();
                    
                },
                
                actualizaFolioOtros: function(){
                    
                  me.actualizaFolioOtros();  
                },
                
                cleanFiltersOtro: function(){
                    
                    me.cleanFiltersOtro();
                },
                
                addCXP:function(){
                    me.addCXP();
                },
                afterrender: function() {
                  //  me.findCompania();
                    me.buscaFechaSistemaOtras();

                   // me.findArchivos();
                },
               
                deleteArchivoOtros: function(){
                    
                    me.deleteArchivoOtros();
                },
                
                guardarCXPOtros: function(){
                    
                    me.guardarCXPOtros();
                },
                recargaCXPOtros: function() {
                    me.findCxpOtros();
                },
                
                validaPagosOtros: function(){
                    
                    me.validaPagosOtros();
                }
                
                
            },
            
            gridfoliosge: {
                
                buscaFolios: function(folio){
                    
                    me.buscaFolios(folio);
                    me.buscaArchivosTesor(folio);
                    
                },
                
                enviaTesoreria: function(){
                    
                  if (me.permisosToken === '1'){  
                    
                    var mbtext = Ext.MessageBox.textField;
                    mbtext.maskRe = /[0-9:]/;
                    mbtext.regex = /[0-9]+(:[0-9]+)?/;
                    
                    Ext.Msg.prompt('Token', 'Por favor ingrese su token:', function(btn, text){
                        if (btn == 'ok'){
                            
                            if (Ext.isEmpty(text)){
                                
                                msgBoxErr('Error','Debe ingresar el token.');
                                return;
                            }
                            
//                           var n = text.length;
//                           
//                           if (n > 10){
//                               
//                               msgBoxErr('Error','El token no puede ser mayor a 10 digitos');
//                               
//                           }
                            
                            me.enviaTesoreria(text);
                        }
                        
                     
                    });

                    }else{
                        
                        me.enviaTesoreria(''); 
                    }
//                    
//                   var resp = Ext.MessageBox.show({
//                    title: 'Enviar a Pagar',
//                    msg: 'Esta seguro que desea enviar cancelar estas Facturas?',
//                    icon: Ext.MessageBox.QUESTION,
//                    multiline: true,
//                    width:200,
//                    heigth:50,
//                    buttons: Ext.Msg.YESNOCANCEL,
//                    buttonText:{ 
//                        yes: "Cancelar Factura", 
//                        no: "Cancelar y Notificar",
//                        cancel:"Salir"
//                    },
//                    fn: function(btn, text) {
//                        if (btn === 'yes') {
//
//
//                           
//
//
//                        }
//                    }
//                  });
                    
                   
                },
                eliminarFactFol: function(){
                    
                    me.eliminarFactFol();
                },
                 afterrender: function() {
                    me.permisosComponentes();
                },
                imprimirPdfFolio:function(){
                    
                    me.imprimirPdfFolio();
                }
                
                
                
                
            },
            gridrembolsos: {
                
                afterrender: function() {
                    me.findRembolso();
                },
                buscaDatosBancarios: function(cuentaClabe,banco){
                    
                    me.buscaDatosBancarios(cuentaClabe,banco);
                },
                guardaRembolso: function(){
                    
                    me.guardaRembolso();
                    
                }
                
                
            },
            
            formactfolio:{
                
                actFolTes:function(btn){
                    
                    if (me.folioActualizaTesoOtros === '1'){
                        
                         me.actFolTesOtros(btn);
                    }else{
                        
                        if (me.copiafolio === '1'){
                        
                            me.copiaFolioTes(btn);
                        }else{

                            me.actFolTes(btn);
                        }
                        
                        
                    }
                    
                    
                    
                }
                
            },
            
            gridtesoreria:{
                
                
                setValuesPagos:function(value){
                    
                    me.setValuesPagos(value);
                },
                
                edit: function(editor, context, eOpts) {
                    
                    
                     
                    
                    me.cambiarEdicion(editor, context, eOpts);
//                    msgOut('beforeedit');
                },
                
                
                calculaImportePagar:function(value){
                    
                    me.calculaImportePagar(value);
                },
                
                afterrender: function() {
                    
//                    console.log('me.copiafolio: '+ me.copiafolio);
//                    console.log('me.folioActualizaTesoOtros: '+ me.folioActualizaTesoOtros);
//                    console.log('this.folioActualizaTeso: '+ me.folioActualizaTeso);
//                    console.log('this.banderaOtros: '+me.banderaOtros);
                    
                    
                  if (this.folioActualizaTesoOtros === '1'){
                       me.hideColumnTesoreria('0');
                       me.findTesoreriaOtros();
                      
                      
                  }else{
                    
                        if (me.banderaOtros === '0'){

                           if (me.copiafolio === '1'){
                               me.hideColumnTesoreria('1');
                               me.findTesoreriaCopia();
                           }else{
                               me.hideColumnTesoreria('1');
                               if(me.separacionInt === '0'){
                                  me.findTesoreria();
                               }else{
                                   
                                   me.findTesoreriaInt();
                                   
                               }
                           }
                       }else{
                           me.hideColumnTesoreria('0');
                           me.findTesoreriaOtros();

                       }  
                   }
                },
                guardaTesoreria: function(){
                    
//                    console.log('me.copiafolio: '+ me.copiafolio);
//                    console.log('me.folioActualizaTesoOtros: '+ me.folioActualizaTesoOtros);
//                    console.log('this.folioActualizaTeso: '+ me.folioActualizaTeso);
//                    console.log('this.banderaOtros: '+me.banderaOtros);
                    
                    
                 if (this.folioActualizaTesoOtros === '1'){  
                       me.guardaTesoreriaOtros();
                 }else{ 
                        if (me.banderaOtros === '0'){
                          if(me.separacionInt === '0'){
                             me.guardaTesoreria();
                         }else{
                              
                              me.guardaTesoreriaInt();
                          }
                       }else{

                           me.guardaTesoreriaOtros();


                       }
                   }
                },
                borraFactTes: function(){
                    
                    me.borraFactTes();
                }
                
            },
            
             gridrelfact: {
                afterrender: function() {

                    me.findRelacionCXP();
                    
                },
                        
                
//                cleanFiltersFE: function(){
//                    me.cleanFiltersFE();
//                },
//                
                guardarCXPRelacion: function(btn){
            
                    me.guardarCXPRelacion(btn);
                },
                borraCXPRelacion: function(btn){
            
                    me.borraCXPRelacion(btn);
                },
                cleanFiltersCXP:function(){
            
                     me.cleanFiltersCXP();
                }
                
//                borraFERelacion: function(){
//                   me.borraFERelacion();
//                }
             },
             
             gridintercos: {
                 
                 relacionarCxpInt:function(btn){
                 
                    me.relacionarCxpInt(btn);
                 },
                
                buscaConceptos:function(){
                    
                   me.buscaConceptos();  
                },
                buscaCCostos: function(){
                    
                    me.buscaCCostos();
                },
                
                relacionaOtrasInt: function(origen){
                    
                    me.relacionFactOtr = '1';
                    
                    me.relacionaOtrasInt(origen);
                    
                    
                },
                
                quitarRelacionaOtras: function(origen){
                    
                    me.relacionFactOtr = '0';
                    
                    me.quitarRelacionaOtras(origen);
                    
                },
                
                verFoliosPagos: function(){
                    
                    me.verFoliosPagos();
                    
                },
                
                verFoliosPagosCan:function(){
                    
                    me.verFoliosPagosCan();
            
                },
                
                agregaRembolso:function(){
                    
                    me.validaRembolsos();  
                },
                beforerender: function() {
                    
                  if(ppSist === 'viatic'){
                    
                     me.permisosGrid();
                    
                    }
                  

                   // me.findArchivos();
                },
                afterrender: function() {
                    
                  
                    me.findCompania();
                    me.buscaFechaSistemaInt();

                   // me.findArchivos();
                },
//                buscaPorFecha:function(calendario,periodo){
//                    
//                    me.buscaPorFecha(calendario,periodo);
//                    
//                },
                guardarCXPInt: function() {
                    me.guardarCXPInt();
                },
                recargaCXPInt: function() {
                    me.findArchivosInt();
                },
                select: function(view, model, index) {
                    var me = this,
                            grid = me.getGridIntercos();

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
                    if (Ext.isEmpty(record.data.T_DISTRIBUCION)) {

                        record.data.T_DISTRIBUCION = 'NINGUNA';

                    }
                    if (Ext.isEmpty(record.data.PRORRATEO)) {

                        record.data.PRORRATEO = 'NINGUNO';

                    }
                    if (Ext.isEmpty(record.data.FOLIO_PAGOS)) {

                        record.data.FOLIO_PAGOS = 'N/A';

                    }
                    
                    var estatusCxp = ''; 
                            
                    
                    if (Ext.isEmpty(record.data.ESTATUS_CXP)) {
                        
                       estatusCxp = 'Sin pago';
                    }
                    if (record.data.ESTATUS_CXP === 'PAG') {
                        
                       estatusCxp = 'Pago Total';
                    }
                    if (record.data.ESTATUS_CXP === 'PAR') {
                        
                       estatusCxp = 'Pago Parcial';
                    }
                    if (record.data.ESTATUS_CXP === 'TES') {
                        
                       estatusCxp = 'Enviado a Tesoreria';
                    }
                    if (record.data.ESTATUS_CXP === 'IMP') {
                        
                       estatusCxp = 'Impreso';
                    }
                    if (record.data.ESTATUS_CXP === 'CANF') {
                        
                       estatusCxp = 'Factura Cancelada';
                    }
                    if (record.data.ESTATUS_CXP === 'CAN') {
                        
                       estatusCxp = 'Pago Cancelado';
                    }
                    
                    if (record.data.ESTATUS_CXP === 'REMB') {
                        
                       estatusCxp = 'Reembolso';
                    }
                    
                    if (record.data.ESTATUS_CXP === 'ANT') {
                        
                       estatusCxp = 'Anticipo';
                    }
                    if (record.data.ESTATUS_CXP === 'FG') {
                        
                       estatusCxp = 'Folio Generado';
                    }


                    var bookTplMarkup = [
                        '<div class="feDetails">',
                        '<ul>',
                        '<li><b>Estatus Pago: </b>'+estatusCxp+'</li>',
                        '<li><b>Compa&ntilde;ia:</b> {COMPANIA}</li>',
                        '<li><b>Serie:</b> {SERIE}</li>',
                        '<li><b>Numero:</b> {NUMERO}</li>',
                        '<li><b>Fecha:</b> {FECHA}</li>',
                        '<li><b>UUID:</b> {UUID}</li>',
                        '<li><b>RFC emisor:</b> {RFC_EMISOR}</li>',
                        '<li><b>Nombre Emisor:</b> {NOMBRE_EMISOR}</li>',
                        '<li><b>Pdf:</b> {PDF}</li>',
                        '<li><b>Xml:</b> {XML}</li>',
                        '<li><b>Folio Pagos:</b> {FOLIO_PAGOS}</li>',
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
                        '<li><b>Tipo Distribucion:</b>  {T_DISTRIBUCION}</li>',
                        '<li><b>Tipo Prorrateo:</b>  {PRORRATEO}</li>',
                        '</ul>',
                        '</div>'





                    ];
                    var bookTpl = Ext.create('Ext.Template', bookTplMarkup);
                    var detailPanel = Ext.getCmp('detailPanelIntercos');
                    detailPanel.update(bookTpl.apply(record.data));


                },
                actIdConceptoInt: function(val, col) {
//                        msgOut(val.valueModels[0].data.CONCEPTO);
                    me.actIdConceptoInt(val.valueModels[0].data.CONCEPTO, col);
                },
                actIdCCInt: function(val, col) {
                    me.actIdCCInt(val.valueModels[0].data.CTO, col);
                },
                beforecheckPoliza: function(index, checked) {


                    me.beforecheckPoliza(index, checked);

                },
                actFechaCxpInt: function(val, col) {

//                         msgOut(val);

                    me.actFechaCxpInt(val, col);

                },
               
                relacionarPoliza: function() {
//                        msgOut("relacionarPoliza");
                    this.relacionarPoliza();
                },
                quitarRelacionPoliza: function() {
                    me.preguntaQuitarRelacion();
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
                recargarArchivo: function() {
                    me.findArchivos();
                },
                setConcGasto: function(conc) {
                    me.setConcGasto(conc);
                },
                verPoliza: function() {
                    me.imprimirPoliza();
                },
                verPDFInt: function() {
                    me.imprimirPDFInt();
                },
                verXMLInt: function() {

                    me.imprimirXMLInt();

                },
                addCXP:function(){
                    me.addCXP();
                },
                findFactura: function(fact) {
                    me.findArchivos(fact);
                },
                cleanFiltersArchInt: function() {
                    me.cleanFiltersArchInt();

                },
      
                
               
                 cancelaFacturaInt: function(val, col){
                   
                   me.cancelaFacturaInt();
                     
                 },
                         
                 enviaPagosInt:function(val,col){
                   
                   me.validaPagosInt();
                     
                   //me.enviaPagos(val,col);
                 },
                 actualizaFolioInt: function(val,col){
                     
                     me.actualizaFolioInt();
                     
                 },
                 
                 copiaFolio:function(){
                     me.copiaFolio();
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
             
            gridarchivos: {
                
                buscaConceptos:function(){
                    
                   me.buscaConceptos();  
                },
                buscaCCostos: function(){
                    
                    me.buscaCCostos();
                },
                
                relacionaOtras: function(origen){
                    
                    me.relacionFactOtr = '1';
                    
                    me.relacionaOtras(origen);
                    
                    
                },
                
                quitarRelacionaOtras: function(origen){
                    
                    me.relacionFactOtr = '0';
                    
                    me.quitarRelacionaOtras(origen);
                    
                },
                
                verFoliosPagos: function(){
                    
                    me.verFoliosPagos();
                    
                },
                
                verFoliosPagosCan:function(){
                    
                    me.verFoliosPagosCan();
            
                },
                
                agregaRembolso:function(){
                    
                    me.validaRembolsos();  
                },
                beforerender: function() {
                    
                  if(ppSist === 'viatic'){
                    
                     me.permisosGrid();
                    
                    }
                  

                   // me.findArchivos();
                },
                afterrender: function() {
                    
                  
                    me.findCompania();
                    me.buscaFechaSistema();

                   // me.findArchivos();
                },
//                buscaPorFecha:function(calendario,periodo){
//                    
//                    me.buscaPorFecha(calendario,periodo);
//                    
//                },
                guardarCXP: function() {
                    me.guardarCXP();
                },
                recargaCXP: function() {
                    me.findArchivos();
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
                    if (Ext.isEmpty(record.data.T_DISTRIBUCION)) {

                        record.data.T_DISTRIBUCION = 'NINGUNA';

                    }
                    if (Ext.isEmpty(record.data.PRORRATEO)) {

                        record.data.PRORRATEO = 'NINGUNO';

                    }
                    if (Ext.isEmpty(record.data.FOLIO_PAGOS)) {

                        record.data.FOLIO_PAGOS = 'N/A';

                    }
                    
                    var estatusCxp = ''; 
                            
                    
                    if (Ext.isEmpty(record.data.ESTATUS_CXP)) {
                        
                       estatusCxp = 'Sin pago';
                    }
                    if (record.data.ESTATUS_CXP === 'PAG') {
                        
                       estatusCxp = 'Pago Total';
                    }
                    if (record.data.ESTATUS_CXP === 'PAR') {
                        
                       estatusCxp = 'Pago Parcial';
                    }
                    if (record.data.ESTATUS_CXP === 'TES') {
                        
                       estatusCxp = 'Enviado a Tesoreria';
                    }
                    if (record.data.ESTATUS_CXP === 'IMP') {
                        
                       estatusCxp = 'Impreso';
                    }
                    if (record.data.ESTATUS_CXP === 'CANF') {
                        
                       estatusCxp = 'Factura Cancelada';
                    }
                    if (record.data.ESTATUS_CXP === 'CAN') {
                        
                       estatusCxp = 'Pago Cancelado';
                    }
                    
                    if (record.data.ESTATUS_CXP === 'REMB') {
                        
                       estatusCxp = 'Reembolso';
                    }
                    
                    if (record.data.ESTATUS_CXP === 'ANT') {
                        
                       estatusCxp = 'Anticipo';
                    }
                    if (record.data.ESTATUS_CXP === 'FG') {
                        
                       estatusCxp = 'Folio Generado';
                    }


                    var bookTplMarkup = [
                        '<div class="feDetails">',
                        '<ul>',
                        '<li><b>Estatus Pago: </b>'+estatusCxp+'</li>',
                        '<li><b>Compa&ntilde;ia:</b> {COMPANIA}</li>',
                        '<li><b>Serie:</b> {SERIE}</li>',
                        '<li><b>Numero:</b> {NUMERO}</li>',
                        '<li><b>Fecha:</b> {FECHA}</li>',
                        '<li><b>UUID:</b> {UUID}</li>',
                        '<li><b>RFC emisor:</b> {RFC_EMISOR}</li>',
                        '<li><b>Nombre Emisor:</b> {NOMBRE_EMISOR}</li>',
                        '<li><b>Pdf:</b> {PDF}</li>',
                        '<li><b>Xml:</b> {XML}</li>',
                        '<li><b>Folio Pagos:</b> {FOLIO_PAGOS}</li>',
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
                        '<li><b>Tipo Distribucion:</b>  {T_DISTRIBUCION}</li>',
                        '<li><b>Tipo Prorrateo:</b>  {PRORRATEO}</li>',
                        '</ul>',
                        '</div>'





                    ];
                    var bookTpl = Ext.create('Ext.Template', bookTplMarkup);
                    var detailPanel = Ext.getCmp('detailPanel');
                    detailPanel.update(bookTpl.apply(record.data));


                },
                actIdConcepto: function(val, col) {
//                        msgOut(val.valueModels[0].data.CONCEPTO);
                    me.actIdConcepto(val.valueModels[0].data.CONCEPTO, col);
                },
                actIdCC: function(val, col) {
                    me.actIdCC(val.valueModels[0].data.CTO, col);
                },
                beforecheckPoliza: function(index, checked) {


                    me.beforecheckPoliza(index, checked);

                },
                actFechaCxp: function(val, col) {

//                         msgOut(val);

                    me.actFechaCxp(val, col);

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
                addArchivo: function(btn) {
                    me.addArchivo(btn);
                },
                deleteArchivo: function(btn) {
                    me.deleteArchivo(btn);
                },
                guardarArchivos: function() {
                    me.guardarArchivos();
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
                addCXP:function(){
                    me.addCXP();
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
                descargaSat: function(btn) {
                    me.descargaSat(btn);
                },
                
                  validaSat:function(val,col){
                 
                    me.validaSat(val,col);
                 },
                         
                 relacionarCxp:function(btn){
                 
                    me.relacionarCxp(btn);
                 },
                 
                 cancelaFactura: function(val, col){
                   
                   me.cancelaFactura();
                     
                 },
                         
                 enviaPagos:function(val,col){
                   
                   me.validaPagos();
                     
                   //me.enviaPagos(val,col);
                 },
                 actualizaFolio: function(val,col){
                     
                     me.actualizaFolio();
                     
                 },
                 
                 copiaFolio:function(){
                     me.copiaFolio();
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

            },
            formsat: {
                guardaDatosSat: function(btn) {
                    me.guardaDatosSat(btn);
                }//,

            },
            formcxpotros:{
                guardaCXPOtros:function(btn){
                    me.guardaCXPOtros(btn);
                }
            }


        });
    },
    buscaArchivosTesor:function(folio){
          var me = this,
                grid = me.getGridArchivosTesor(),
                store = grid.getStore();
        
        store.loadData([], false);

                        store.load({
                            params:{
                                folio:folio
                            },
                            callback: function(val1, val2, val3) {
                                
                              //  me.buscaArchivos(folio);
                                
                            }
                        });
        
    },
    
        verArchivoTesor:function(){
        
        var me = this,
                
                grid = me.getGridArchivosTesor(),
                selection = grid.getSelectionModel().getSelection();
        
        var record = selection[0];
        
        var url = record.get('URL_CXP');
        
         var string = Ext.String.format(
                    'http://appferaz1.com/{0}',
                    //'http://' + window.location.host + '/carga_erp/xml/{0}/{1}',
                    //'/empres/XML/{0}/{1}',
                    url
                    );

            Ext.create('Ext.window.Window', {
                title: 'Archivo',
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
    
    verArchivoOtrasInfo:function(){
        
        
             var me = this,
                grid = me.getGridInfoFactOtras(),
                records = grid.getSelectionModel().getSelection();
          
           var record = records[0];
             
              if (Ext.isEmpty(record)) {
                    msgBoxErr("Error", "No ha seleccionado registro");
                    return;
                }
              
                
          var tipo = record.get('TIPO_GASTO_REL_INFO');
                
        if(tipo === 'G'){
            
            var url = record.get('URL');
            
              
                if (Ext.isEmpty(url)) {
                    msgBoxErr("Error", "La comprobacion no cuenta con ningun archivo adjunto");
                    return;
                }
            
              var string = Ext.String.format(
                    //'http://appferaz1.com/{0}',
                 //   'http://' + window.location.host + '/empres/applets/filesComprobacion/{0}/{1}',
                 'http://appferaz1.com/empres/applets/filesComprobacion/{0}',               
                    url
                    );

            Ext.create('Ext.window.Window', {
                title: 'Archivo',
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
        }
        
        
        if(tipo === 'F'){
            
            
            
         
            //var compania = record.get('COMPANIA');
       
            var xml = record.get('URL');
            var compania = record.get('COMPANIA_REL_INFO');
            msgOut("xml" + xml);
            msgOut("compania" + compania);
           xml = xml.replace('.xml', '.pdf');
            xml = xml.replace('.XML', '.pdf');


            var string2 = Ext.String.format(
                   // 'http://' + window.location.host + '/carga_erp/xml/{0}/{1}',
                    'http://appferaz1.com/carga_erp/xml/{0}/{1}',
                    //'/empres/XML/{0}/{1}',
                    compania,
                    xml
                    );
       
            Ext.create('Ext.window.Window', {
                title: 'xml',
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
                            src: string2
                        }
                    }
                }
            }).show();
            
        }
        
    },
    
    hideColumnTesoreria:function(value){
        
       var me = this,
            
                grid = me.getGridTesoreria();


       var columnas = grid.query('gridcolumn');
      
        if (value === '1') { 
            var colTipoPHide = columnas[5];
            var colPorcHide = columnas[6];
            var colTotalPHide = columnas[8];
                        
                colTipoPHide.setVisible(true);
                colPorcHide.setVisible(true);
                colTotalPHide.setVisible(true);
           
            
        }
        if (value === '0') {
             var colTipoPHide = columnas[5];
            var colPorcHide = columnas[6];
            var colTotalPHide = columnas[8];
                        
                colTipoPHide.setVisible(false);
                colPorcHide.setVisible(false);
                colTotalPHide.setVisible(false);
            
        }
    },
    
    cambiarEdicion: function(editor, context, eOpts) {


       var me = this;
       
       console.log('editt');

        if (context.record.data.TIPO_PAGO_TES === 'PAG') {

            
            
            context.grid.columns[6].setEditor(null);
            context.grid.columns[8].setEditor(null);
            
           

        } else {
            
//             context.grid.columns[4].setEditor({
//                xtype: 'combo',
//                id: 'cboTipoPoliza2',
//                name: 'cboTipoPoliza2',
//                itemId: 'cboTipoPoliza2',
//                displayField: 'NOMBRE1',
//                valueField: 'TIPO_POLIZA',
//                store: 'StoreTipoPolizaS',
//                typeAhead: true,
//                selectOnFocus: true,
//                minChars: 0,
//                // editable:false,
//                forceSelection: true,
//                autoSelect: true,
//                allowBlank: false
//
//            });

//             var porcentaje = Ext.create('Ext.data.Store', {
//            fields: ['porcentaje', 'nombre'],
//                data : [
//                    {"porcentaje":"10", "nombre":"10%"},
//                    {"porcentaje":"20", "nombre":"20%"},
//                    {"porcentaje":"30", "nombre":"30%"},
//                    {"porcentaje":"40", "nombre":"40%"},
//                    {"porcentaje":"50", "nombre":"50%"},
//                    {"porcentaje":"60", "nombre":"60%"},
//                    {"porcentaje":"70", "nombre":"70%"},
//                    {"porcentaje":"80", "nombre":"80%"},
//                    {"porcentaje":"90", "nombre":"90%"},
//                    {"porcentaje":"100", "nombre":"100%"}
//                 
//                ]
//            });
            
            context.grid.columns[6].setEditor({
                xtype: 'combo',  
                    name: 'cboPorcentaje',
                    id: 'cboPorcentaje',     
                    store: 'StorePorcentaje',
                    queryMode: 'local',
                    readOnly: false,
                    hidden:false,
                    editable:false,
                    displayField: 'nombre',
                    valueField: 'porcentaje',
                    allowBlank: false,
                    listeners: {
                            scope: this,
                            select: function(value) {
                                
                                console.log('SElect');
                                
                               me.calculaImportePagar(value);
                                
                              
                            }
                        }
           

        });
            

            context.grid.columns[8].setEditor({
                xtype: 'numberfield',
                        allowNegative: true,
                        allowDecimals: true,
                        decimalSeparator: '.',
                        listeners: {
                            scope: this,
                            change: function(value, newValue, oldValue, eOpts) {
                                
                                console.log('SElect');
                                
                               me.calculaPorcentajePagar(newValue);
                                
                              
                            }
                        }
                        
                        
            });

            // context.cancel= true;
            
        }


    },
    
    
    calculaPorcentajePagar:function(value){
        
          var me = this,
                grid = me.getGridTesoreria(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];
        
        var totalFact = record.get('TOTAL_TES');
        
      
        
        var porcPagar = (value*100)/totalFact;
        
        console.log(porcPagar);
        
        record.set('PORCENTAJE_PAGO_TES',porcPagar);
        
      
        if(totalFact<value){
            
            msgBoxErr('Error','El total a pagar no puede superar el total de la factura. Favor de verificar.');
            
        }
        
        
    },
    
    calculaImportePagar:function(value){
        
        
        var me = this,
                grid = me.getGridTesoreria(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];
        
        var totalFact = record.get('TOTAL_TES');
        
        var importePagar = (totalFact*value.value)/100;       
        
        record.set('TOTAL_PAGAR_TES',importePagar);
       
        
        
    },
    
    setValuesPagos:function(value){
        
         var me = this,
                grid = me.getGridTesoreria(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];
        
        var totalFact = record.get('TOTAL_TES');
    
        
        record.set('TOTAL_PAGAR_TES',totalFact);
        record.set('PORCENTAJE_PAGO_TES','100');
        
        
    },
    
     verArchivo: function(btn) {

        var me = this,
                grid = me.getGridOtrasArchivos(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];
      
         
         if (Ext.isEmpty(record)) {
             
             msgBoxErr('Error','Debe seleccionar un archivo.');
             
             return;
             
             
         }
            
             var url = record.get('URL_OTR_ARC');
//           
            
       
       

            var string = Ext.String.format(
                    url
                    );

           window.open(string);

        return string;

       
            
            
        

       

    },
    
    saveArchivoOtras:function(btn){
        
        var me = this,
                grid = me.getGridCxpOtros(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore(),
                form = btn.up('formaddarchivo'),
                win = form.up('window'),
                basicForm = form.getForm();
//
//        var compania = basicForm.findField('COMPANIA_OTROS').getValue();
//        var tipoPoliza = basicForm.findField('NUMERO_OTROS').getValue();
//
//        store.proxy.extraParams.compania = compania;
//        store.proxy.extraParams.tipo_poliza = tipoPoliza;
//        store.proxy.extraParams.fecha = fecha;
//        store.proxy.extraParams.numero = numero;

        if (basicForm.isValid()) {
            form.setLoading("Guardando Archivo...");
            basicForm.submit({
                success: function(form1, action) {
                    win.close();
                    Ext.Msg.alert('Guardado', action.result.msg);
                 form.setLoading(false);
                 me.findOtrasArchivos();

                },
                failure: function(form, action) {
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
        
        
        
    },
    
    addArchivoOtras:function(){
        
        var me = this,
        grid = me.getGridCxpOtros(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        
        var record = records[0];
        
         if (Ext.isEmpty(record)) {
             
             msgBoxErr('Error','Debe seleccionar un gasto.');
             
             return;
             
             
         }
        
        var view = Ext.widget('windowaddarchivo');
        view.setTitle('Agregar Archivo');
        var form = view.down('formaddarchivo').getForm();
        
        form.findField('archCOMPANIAOtras').setValue(record.get('COMPANIA_OTROS'));
        form.findField('archIDOtras').setValue(record.get('NUMERO_OTROS'));
        
        
    },
    
    addPanelViaticos:function(){
        
                    var me = this,
                    grid = me.getGridViaticos();

                    var selection = grid.getSelectionModel().getSelection();

                    var record = selection[0];
                    
                    var value = record.data.ESTATUS_CXP_VIATIC;
                    
                     if (value === 'PAG') {
                            value = '<span style="color:green;font-weight: bold">Pago Total</span>';
                        } else if (value === 'AU') {
                            value= '<span style="color:gold;font-weight: bold">Autorizado</span>';
                        } else if (value === 'CA') {
                            value= '<span style="color:red;font-weight: bold">Cancelado</span>';
                        } else if (value === 'C') {
                            value= '<span style="color:black;font-weight: bold">Capturado</span>';
                            
                        } else if (value === 'CAN') {
                            value= '<span style="color:brown;font-weight: bold">Cancelada</span>';
                            
                        } else if (value === 'FG') {
                            value= '<span style="color:blue;font-weight: bold">Folio Generado</span>';
                            
                         } else if (value === 'TES') {
                            value= '<span style="color:blue;font-weight: bold">Enviado a Tesoreria</span>';
                        } else if (value === 'IMP') {
                            value= '<span style="color:gold;font-weight: bold">Impreso</span>';
                        } else if (value === 'PAG') {
                            value= '<span style="color:green;font-weight: bold">Pagado</span>';
                
                

                        }
                    
        
                 
                    if (Ext.isEmpty(record.data.NOMCC_VIATIC)) {

                        record.data.NOMCC_VIATIC = '';

                    }
                    



                    var bookTplMarkup = [
                        '<div class="feDetails">',
                        '<ul>',
                       
                        '<li><b>Compa&ntilde;ia:</b> {COMPANIA_VIATIC}</li>',
                        '<li><b>Numero:</b> {NUMERO_VIATIC}</li>',        
                        '<li><b>Tipo de Gasto:</b> {NOMBRE_T_GASTO_VIATIC}</li>',
                        '<li><b>Fecha:</b> {FECHA_VIATIC}</li>',
                        '<li><b>RFC Empleado:</b> {RFC_EMISOR_VIATIC}</li>',
                        '<li><b>Nombre Empleado:</b> {NOMBRE_EMISOR_VIATIC}</li>',
                        '<li><b>Descripci&oacute;n:</b> {DESCRIPCION_VIATIC}</li>',
                        '</ul>',
                        '</div>',
                        '<div class="feDetails2">',
                        '<ul>',
                        '<li><b>Subtotal:</b>  {SUBTOTAL_VIATIC}</li>',
                        '<li><b>Total:</b>  {TOTAL_VIATIC}</li>',
                        '<li><b>Centro de Costos:</b>  {NOMCC_VIATIC}</li>',
                        '<li><b>Estatus: </b>'+value+'</li>',
                        '<li><b>Clave Banco:</b>  {BANCO_VIATIC}</li>',
                        '<li><b>Nombre Banco:</b>  {NOM_BANCO_VIATIC}</li>',
                        '<li><b>Cuenta Clabe:</b>  {CUENTA_CLABE_VIATIC}</li>',
                        '</ul>',
                        '</div>'





                    ];
                    var bookTpl = Ext.create('Ext.Template', bookTplMarkup);
                    var detailPanel = Ext.getCmp('detailPanelViatic');
                    detailPanel.update(bookTpl.apply(record.data));  
        
        
        
    },
    
    deleteArchivoOtras: function(btn) {

        var me = this,
                grid = me.getGridOtrasArchivos(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        var record = records[0];


        if (Ext.isEmpty(records)){
            
            msgBoxErr('Error','No ha seleccionado ningun registro');
            
            return;
        }
            

        var resp = Ext.MessageBox.show({
            title: 'Borrara Archivo',
            msg: 'Esta seguro que desea borrar el Archivo?',
            icon: Ext.MessageBox.QUESTION,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {

                    var selection = records[0];

                    if (selection) {
                        // msgOut(selection);
                       
                        store.remove(selection);

                        grid.setLoading("Borrando Archivo...");
                        store.sync({
                            scope: this,
                            success: function(resp, dos) {
                                msgBox("Borrar Archivo", 'Archivo Borrado');
                                
                                me.findOtrasArchivos();
                                
                                //this.loadSueldo();

                            },
                            failure: function(resp, dos) {
                                msgBoxErr('Error', 'Error al borrar Archivo:' + store.getProxy( ).getReader().rawData.msg);
                                //this.loadSueldo();
                                grid.setLoading(false);
                            },
                            callback: function(records, operation) {
                                grid.setLoading(false);
                                me.findOtrasArchivos();
                            }

                        });

                    }



                }
            }

        });



    },
    
    findOtrasArchivos:function(){
        
          var me = this,

                grid = me.getGridOtrasArchivos(),
                
           
                gridO = me.getGridCxpOtros(),

                  
                 
                
                storeO = gridO.getStore(),
                
                store = grid.getStore();
        
                
        grid.setLoading('Buscando...');
        
           
                
                var selection = gridO.getSelectionModel().getSelection()[0];
                      
                   store.proxy.extraParams.numero_otras = selection.data.NUMERO_OTROS;
           
        
                    
                    // storeR.proxy.extraParams.jsonData = jsonData;
                    
                    
      
                              //  grid.setLoading('Buscando...');
                                store.loadData([], false);
                                store.currentPage = 1;
                                store.load({
                                    callback: function() {
                                        grid.setLoading(false);
                                    }
                                }); 
        
        
    },
    
    findFacturasXViaticInfo: function(){
        
           var me = this,

                grid = me.getGridInfoFactViat(),
                
           
                gridV = me.getGridViaticos(),

                  
                 
                
                storeV = gridV.getStore(),
                
                store = grid.getStore();
        
        var total = 0;
        
         var containerStatus = me.getPanelSurViaticArchivos();
         
         var sb = containerStatus.getComponent('statusbarTotalesViaticArchivos');
         
         var totFacturas = sb.getComponent('totalComprobadoV');


        sb.showBusy();
        
        
                
        grid.setLoading('Buscando...');
        
           
                
                var selection = gridV.getSelectionModel().getSelection()[0];
                      
                   store.proxy.extraParams.comision = selection.data.NUMERO_VIATIC;
           
        
                    
                    // storeR.proxy.extraParams.jsonData = jsonData;
                    
                    
      
                              //  grid.setLoading('Buscando...');
                                store.loadData([], false);
                                store.currentPage = 1;
                                store.load({
                                    callback: function() {
                                        
                                        var icon = 'x-status-valid';
                   
                                        sb.setStatus({
                                            iconCls: icon,
                                            text: 'Totales...'
                                        });
                                        
                                        
                                         store.each(function(rec) {
                                             
                                             console.log(rec.get('TOTAL_COMP_VIA'));
                                             
                                            total += rec.get('TOTAL_COMP_VIA');
                                        });
                                        
                                        console.log("totales:"+total);
                                        
                                        totFacturas.update('Total Comprobado:' + formatCurrency(Math.round(total * 1000) / 1000));
                                        
                                        
                                        grid.setLoading(false);
                                    }
                                }); 
        
        
    },
    
       findFacturasXOtrasInfo: function(){
        
           var me = this,

                grid = me.getGridInfoFactOtras(),
                
           
                gridO = me.getGridCxpOtros(),

                  
                 
                
                storeO = gridO.getStore(),
                
                store = grid.getStore();
        
        var total = 0;
        
         var containerStatus = me.getPanelSurOtrasArchivos();
         
         var sb = containerStatus.getComponent('statusbarTotalesOtrasArchivos');
         
         var totFacturas = sb.getComponent('totalComprobado');


        sb.showBusy();
        
        
                
        grid.setLoading('Buscando...');
        
           
                
                var selection = gridO.getSelectionModel().getSelection()[0];
                      
                   store.proxy.extraParams.numero_otras = selection.data.NUMERO_OTROS;
           
        
                    
                    // storeR.proxy.extraParams.jsonData = jsonData;
                    
                    
      
                              //  grid.setLoading('Buscando...');
                                store.loadData([], false);
                                store.currentPage = 1;
                                store.load({
                                    callback: function() {
                                        
                                        var icon = 'x-status-valid';
                   
                                        sb.setStatus({
                                            iconCls: icon,
                                            text: 'Totales...'
                                        });
                                        
                                        
                                         store.each(function(rec) {
                                             
                                             console.log(rec.get('TOTAL_REL_INFO'));
                                             
                                            total += rec.get('TOTAL_REL_INFO');
                                        });
                                        
                                        console.log("totales:"+total);
                                        
                                        totFacturas.update('Total Facturas:' + formatCurrency(Math.round(total * 1000) / 1000));
                                        
                                        
                                        grid.setLoading(false);
                                    }
                                }); 
        
        
    },
    
        imprimirPdfFolio: function() {


             var me = this,
                grid = me.getGridFoliosGe(),
                records = grid.getSelectionModel().getSelection();
          
           var record = records[0];
             
              if (Ext.isEmpty(record)) {
                    msgBoxErr("Error", "No ha seleccionado XML");
                    return;
                }
           if(record.get('ORIGEN_FOL') === 'F'){
           
                 
                
           
               

                
                var compania = record.get('COMPANIA_FOL');
               // var xml = record.get('XML');
                var numero = record.get('NUMERO_FOL');
               // xml = xml.replace('.XML', '.pdf');

                  var string = Ext.String.format(
                      'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=REP_COMPROBANTE_CFDI&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&numero={1}&reporte=REP_COMPROBANTE_CFDI',
                           compania,
                           numero
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
            }
                    
            if(record.get('ORIGEN_FOL') === 'O'){
                
                 var compania = record.get('COMPANIA_FOL');
               // var xml = record.get('XML');
                var numero = record.get('NUMERO_FOL');
                
                            var string = Ext.String.format(
                        'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=JREP_Impresion_Anticipos&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&id={1}&reporte=JREP_Impresion_Anticipos',
                             compania,
                             numero
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
                
                
            }
            if(record.get('ORIGEN_FOL') === 'V'){
                
                 var compania = record.get('COMPANIA_FOL');
               // var xml = record.get('XML');
                var numero = record.get('NUMERO_FOL');
                
                            var string = Ext.String.format(
                         'http://appferaz1.com/clases/servlet/ConectAc?dic_estado=66&dic_tabla=REP_Impresion_Anticipos&dic_sistema=viatic&dic_menu=m03&dic_submenu=m03e5&reporte=REP_Impresion_Anticipos&ventanaAparte=false&t_busqueda=C&comision={1}&compania={0}',
                       // 'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=JREP_Impresion_Anticipos&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&id={1}&reporte=JREP_Impresion_Anticipos',
                             compania,
                             numero
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
                
                
            }
      

        // window.open(string);

    },
    
    permisosGrid: function(){
        
           var me = this,
       // grid = me.getGridClientes(),
        tab = me.getAppMain();
      
                    
                            
                                  tab.items.items[0].tab.hide();//.tab.hide();
                                  
                                  tab.setActiveTab(2);
                                  
                               
                                  tab.items.items[3].tab.hide();//.tab.hide();
                                  tab.items.items[1].tab.hide();//.tab.hide();
                                
                                
                               
                                  tab.items.items[4].tab.hide();//.tab.hide();
                                
     
        
        
        
    },
    
          permisosComponentes: function() {
        var me = this;
        
        me.permisosToken = '0';

       // grid = me.getGridClientes(),
        //tab = me.getMainPanel();
        Ext.Ajax.request({
            url: 'process/data/BuscaPermisosComponentesCXP',
            method: 'GET',
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                   
                     
                     var i =0;
                     for(i=0;i<val.data.length;i++){
                         
                        var componente = val.data[i].COMPONENTE;
                        var readOnly = val.data[i].READ_ONLY;
                        var hidden = val.data[i].HIDDEN;
                        var allowblack = val.data[i].ALLOW_BLACK;
                        var tipo = val.data[i].TIPO;
                        
                        
                    if (tipo !== 'GRID' && tipo !== 'TOK'){    
                     
                        if (!Ext.isEmpty(allowblack)){
                        
                            if (allowblack === '1'){
                                Ext.getCmp(componente).allowBlank = true;

                            }else{

                                Ext.getCmp(componente).allowBlank = false;

                            }
                        }
                        
                        if (!Ext.isEmpty(readOnly)){
                        
                        if (readOnly === '1'){
                            Ext.getCmp(componente).setReadOnly(true);
                            
                        }else{
                            
                            Ext.getCmp(componente).setReadOnly(false);
                          
                        }
                      }
                        if (!Ext.isEmpty(hidden)){
                        if (hidden === '1'){
                            Ext.getCmp(componente).setVisible(false);
                            
                        }else{
                            
                            Ext.getCmp(componente).setVisible(true);
                          
                        }
                    }
                        
                   }
                   
                   if (tipo === 'TOK'){    
                     
                       
                        if (!Ext.isEmpty(hidden)){
                        if (hidden === '1'){
                             me.permisosToken = '0';
                            
                        }else{
                            
                             me.permisosToken = '1';
                          
                        }
                    }
                        
                   }
                   
                   
                   
                   
                         
                         
                     }
                    
                     
                    

                } else if (!val.success) {
                   
                }
            },
            timeout: 30000

        });
    },
    
    actFolViatic:function(){
        
            var me = this,
                grid = me.getGridViaticos(),
                record = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
      
        // var record = records[0];
         
         var err = '0';
         var msgErr = '';
         
     
                for (var i=0; i < record.length; i++) {

                     
                   
                      if(Ext.isEmpty(record[i].data.NOM_BANCO_VIATIC) || record[i].data.NOM_BANCO_VIATIC === 'N/A'){
                          
                          err = '1';
                          msgErr = 'Error, no se encuentro dato de banco para el viatico: ' + record[i].data.NUMERO_VIATIC;
                          
                          
                          
                      }
                      if(Ext.isEmpty(record[i].data.RFC_EMISOR_VIATIC)){
                          
                          err = '1';
                          msgErr = 'Error, no se encuentro dato de rfc para el viatico: ' + record[i].data.NUMERO_VIATIC;
                          
                          
                          
                      }
                      
                      if(Ext.isEmpty(record[i].data.BANCO_VIATIC || record[i].data.BANCO_VIATIC === 'N/A')){
                          
                          err = '1';
                          msgErr = 'Error, no se encuentro dato de banco para el viatico: ' + record[i].data.NUMERO_VIATIC;
                          
                          
                          
                      }
                      
                      if(Ext.isEmpty(record[i].data.CUENTA_CLABE_VIATIC || record[i].data.CUENTA_CLABE_VIATIC === 'N/A')){
                          
                          err = '1';
                          msgErr = 'Error, no se encuentro dato de cuenta clabe para el viatico: ' + record[i].data.NUMERO_VIATIC;
                          
                          
                          
                      }
                      
                      if(record[i].data.ESTATUS_CXP_VIATIC === 'FG' || record[i].data.ESTATUS_CXP_VIATIC === 'TES' || record[i].data.ESTATUS_CXP_VIATIC === 'C' || record[i].data.ESTATUS_CXP_VIATIC === 'PAG' || record[i].data.ESTATUS_CXP_VIATIC === 'CA' || record[i].data.ESTATUS_CXP_VIATIC === 'TES'){
                          
                          err = '1';
                          msgErr = 'Error, ya se proceso en tesoreria una operacion o aun no se a autorizado el viatico con folio: ' + record[i].data.NUMERO_VIATIC;
                          
                          
                          
                      }
                      
                   
                    
                }
                
                if (err === '1'){
                    
                    msgBoxErr('Error',msgErr);
                    return;
                    
                    
                    
                }else{
                    
                    
                     var resp = Ext.MessageBox.show({
                        title: 'Enviar a Pagar',
                        msg: 'Los datos estan completos. Esta seguro que desea actualizar un folio de Tesoreria?',
                        icon: Ext.MessageBox.QUESTION,
                        buttons: Ext.Msg.YESNO,
                        fn: function(btn, text) {
                            if (btn === 'yes') {
                                
                                me.actualizaViaticos();


                            }
                        }

                    }); 
        
                    
                    
                    
                }  
            
            
        
        
        
    },
    
        actualizaFolioViaticos:function(){
            
            var me = this;
     
                       var window=  Ext.create('Ext.window.Window', {
                                        title: 'Folio',
                                        height: 160,
                                        width: 250,
                                         modal: true,
                                        layout: 'fit',
                                        items: [
                                            {
                                            xtype:'formactviaticos'
                                        }
                                        ],
                                           listeners:{
                                            beforeclose:function(win) {


                                             me.findViaticos();
                                             //  me.findArchivos();

                                            }
                                        }


                                    }).show();


                   
                   
                   var cboFolio = Ext.getCmp('cboFolioViatic');
                   var storeFolio = cboFolio.getStore();
                    cboFolio.clearValue();

                       storeFolio.proxy.api.read = 'process/data/BuscaFoliosETesoreria';

                            storeFolio.loadData([], false);
                            storeFolio.load({
                             //   url:'process/data/BuscaFoliosETesoreria',
                                callback: function() {
                                    
                                  
                                
                                }
                            });

},
    actualizaViaticos:function(){
        
           var me = this,
             
              gridT = me.getGridViaticos(),
              record = gridT.getSelectionModel().getSelection(),
              form = me.getFormActViaticos(),
              basicForm = form.getForm(),
              winV  = form.up('window'),
         
              storeT = gridT.getStore();
    
    
              var folio = basicForm.findField('cboFolioViatic').getValue();
    
              var data = [];
              
               for (var i=0; i < record.length; i++) {

                     
                   
                      data.push(record[i].data);
                    
                }
         
                   
             
        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        var url;
//        
//        if (Ext.isEmpty(this.folioActualizaTeso)){
//            
            url = 'Pagos/updateViaticos';
//            
//        }else{
//            
//            url = 'Pagos/updateFolioTes';
//        }
//        

         gridT.setLoading('Guardando...');
         Ext.Ajax.request({
            url: url,
             params: {
                 data : jsonData,
                 folio:folio
               
        
            },
            method: 'POST',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    gridT.setLoading(false);
                //    win.close();
                    msgBox('Guardado',val.msg);
                     winV.close();
                    me.findViaticos();
                    
                   // me.findCompaniaTesoreria();
                    
                   
                    
                  //  me.findRelacionCXP();
                    
                   // win.close();
                  
                }else{
                    
                    gridT.setLoading(false);
                     winV.close();
                    msgBoxErr('Error',val.msg);
                  
                   // me.findRelacionCXP();
                 

                }
                
             }
            //timeout: 30000

        });
        
        
    },
        guardaViaticos: function(){
        
              var me = this,
             
              gridT = me.getGridViaticos(),
              record = gridT.getSelectionModel().getSelection(),
              storeT = gridT.getStore();
    
              var data = [];
              
               for (var i=0; i < record.length; i++) {

                     
                   
                      data.push(record[i].data);
                    
                }
         
                   
             
        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        var url;
//        
//        if (Ext.isEmpty(this.folioActualizaTeso)){
//            
            url = 'Pagos/saveViaticos';
//            
//        }else{
//            
//            url = 'Pagos/updateFolioTes';
//        }
//        

         gridT.setLoading('Guardando...');
         Ext.Ajax.request({
            url: url,
             params: {
                 data : jsonData
               
        
            },
            method: 'POST',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    gridT.setLoading(false);
                //    win.close();
                    msgBox('Guardado',val.msg);
                    me.findViaticos();
                    
                   // me.findCompaniaTesoreria();
                    
                   
                    
                  //  me.findRelacionCXP();
                    
                   // win.close();
                  
                }else{
                    
                    gridT.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
                  
                   // me.findRelacionCXP();
                 

                }
                
             }
            //timeout: 30000

        });
    
        
        
    },
     findViaticos: function(calendario,periodo, periodoFinal) {

        var me = this,
                gridArch = me.getGridViaticos(),
                storeArch = gridArch.getStore();
        
 
         if (Ext.isEmpty(calendario)){   
            calendario = this.calendarioSysViaticos;
            Ext.getCmp('cboCalendarioFeCxpViaticos').setValue(calendario);
        }
        if (Ext.isEmpty(periodo)){
            periodo = this.periodoSysViaticos;

             Ext.getCmp('cboPeriodoFeCxpViaticos').setValue(periodo);
       
        }
        if (Ext.isEmpty(periodoFinal)){
            periodoFinal = this.periodoSysViaticosFinal;

             Ext.getCmp('cboPeriodoFeCxpViaticosFinal').setValue(periodoFinal);
       
        }
        

        storeArch.proxy.extraParams.calendario = calendario;
        storeArch.proxy.extraParams.periodo = periodo;
        storeArch.proxy.extraParams.periodoFinal = periodoFinal;
       
     
       
        msgOut("show 5");
        gridArch.setLoading('Buscando...');
        storeArch.loadData([], false);
        storeArch.load({
            callback: function() {
                gridArch.setLoading(false);
            }
        });
    },
    
    generaReembolsoOtras:function(){
        
            var me = this,
                grid = me.getGridCxpOtros(),
                gridComp = me.getGridInfoFactOtras(),
                records = grid.getSelectionModel().getSelection(),
                storeComp = gridComp.getStore(),
                store = grid.getStore();
      
         var record = records[0];
         
        // grid.setLoading('Generando Reembolsos...');
         
         var totalOtras = record.get('TOTAL_OTROS');
         var bandera = record.get('REEMBOLSO');
         var tipoGastoOtros = record.get('TIPO_GASTO_OTROS');
         
         
         console.log(tipoGastoOtros);
         
         
         var total = 0;
         
         if (!Ext.isEmpty(bandera)){
             
             msgBoxErr('Error','Ya se genero un reembolso de este viatico');
             return;
         }
         
         if( (tipoGastoOtros === 'A' || tipoGastoOtros === 'H')){
             
             
         }else{
             
             
             msgBoxErr('Error','Opcion no disponible para este tipo de gasto');
             return;
         }
       
          storeComp.each(function(rec) {
                                             
                                             console.log(rec.get('TOTAL_REL_INFO'));
                                             
                                            total += rec.get('TOTAL_REL_INFO');
                                        });
               
        console.log('-------------------------');        
        console.log(totalOtras);
        console.log(total);
        
        if(total>totalOtras){
            
            me.guardaReembolsoCompOtras(total-totalOtras);
        }else{
            
            msgBoxErr('Error','No se puede generar el reembolso ya que la comprobación no presenta ningun importe excedente.');
            grid.setLoading(false);
        }
        
        
    },
    
    generaReembolso:function(){
        
         var me = this,
                grid = me.getGridViaticos(),
                gridComp = me.getGridInfoFactViat(),
                records = grid.getSelectionModel().getSelection(),
                storeComp = gridComp.getStore(),
                store = grid.getStore();
      
         var record = records[0];
         
        // grid.setLoading('Generando Reembolsos...');
         
         var totalViatico = record.get('TOTAL_VIATIC');
         var bandera = record.get('REEMBOLSO');
         
         var total = 0;
         
         if (!Ext.isEmpty(bandera)){
             
             msgBoxErr('Error','Ya se genero un reembolso de este viatico');
             return;
         }
       
          storeComp.each(function(rec) {
                                             
                                             console.log(rec.get('TOTAL_COMP_VIA'));
                                             
                                            total += rec.get('TOTAL_COMP_VIA');
                                        });
               
        console.log('-------------------------');        
        console.log(totalViatico);
        console.log(total);
        
        if(total>totalViatico){
            
            me.guardaReembolsoComp(total-totalViatico);
        }else{
            
            msgBoxErr('Error','No se puede generar el reembolso ya que la comprobación no presenta ningun importe excedente.');
            grid.setLoading(false);
        }
        
    },
    
    
    guardaReembolsoCompOtras:function(impReembolso){
        
            var me = this,
             
              gridT = me.getGridCxpOtros(),
              record = gridT.getSelectionModel().getSelection(),
              storeT = gridT.getStore();
    
              var data = [];
              
               for (var i=0; i < record.length; i++) {

                     
                   
                      data.push(record[i].data);
                    
                }
         
                   
             
        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        var url;
//        
//        if (Ext.isEmpty(this.folioActualizaTeso)){
//            
            url = 'CXP/saveReemCompOtras';
//            
//        }else{
//            
//            url = 'Pagos/updateFolioTes';
//        }
//        

         gridT.setLoading('Generando Reembolsos...');
         Ext.Ajax.request({
            url: url,
             params: {
                 data : jsonData,
                 impReembolso:impReembolso
               
        
            },
            method: 'POST',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    gridT.setLoading(false);
                //    win.close();
                    msgBox('Guardado',val.msg);
                    me.findViaticos();
                    me.findCxpOtros();
                   // me.findCompaniaTesoreria();
                    
                   
                    
                  //  me.findRelacionCXP();
                    
                   // win.close();
                  
                }else{
                    
                    gridT.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
                  
                   // me.findRelacionCXP();
                 

                }
                
             }
            //timeout: 30000

        });
    
        
        
        
        
    },
    
           guardaReembolsoComp: function(impReembolso){
        
              var me = this,
             
              gridT = me.getGridViaticos(),
              record = gridT.getSelectionModel().getSelection(),
              storeT = gridT.getStore();
    
              var data = [];
              
               for (var i=0; i < record.length; i++) {

                     
                   
                      data.push(record[i].data);
                    
                }
         
                   
             
        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        var url;
//        
//        if (Ext.isEmpty(this.folioActualizaTeso)){
//            
            url = 'CXP/saveReemComp';
//            
//        }else{
//            
//            url = 'Pagos/updateFolioTes';
//        }
//        

         gridT.setLoading('Generando Reembolsos...');
         Ext.Ajax.request({
            url: url,
             params: {
                 data : jsonData,
                 impReembolso:impReembolso
               
        
            },
            method: 'POST',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    gridT.setLoading(false);
                //    win.close();
                    msgBox('Guardado',val.msg);
                    me.findViaticos();
                    me.findCxpOtros();
                   // me.findCompaniaTesoreria();
                    
                   
                    
                  //  me.findRelacionCXP();
                    
                   // win.close();
                  
                }else{
                    
                    gridT.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
                  
                   // me.findRelacionCXP();
                 

                }
                
             }
            //timeout: 30000

        });
    
        
        
    },
    
    validaPagosViatico:function(){
        
           
         var me = this,
                grid = me.getGridViaticos(),
                record = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
      
        // var record = records[0];
         
         var err = '0';
         var msgErr = '';
         
     
                for (var i=0; i < record.length; i++) {

                     
                   
                      if(Ext.isEmpty(record[i].data.NOM_BANCO_VIATIC) || record[i].data.NOM_BANCO_VIATIC === 'N/A'){
                          
                          err = '1';
                          msgErr = 'Error, no se encuentro dato de banco para el viatico: ' + record[i].data.NUMERO_VIATIC;
                          
                          
                          
                      }
                      if(Ext.isEmpty(record[i].data.RFC_EMISOR_VIATIC)){
                          
                          err = '1';
                          msgErr = 'Error, no se encuentro dato de rfc para el viatico: ' + record[i].data.NUMERO_VIATIC;
                          
                          
                          
                      }
                      
                      if(Ext.isEmpty(record[i].data.BANCO_VIATIC || record[i].data.BANCO_VIATIC === 'N/A')){
                          
                          err = '1';
                          msgErr = 'Error, no se encuentro dato de banco para el viatico: ' + record[i].data.NUMERO_VIATIC;
                          
                          
                          
                      }
                      
                      if(Ext.isEmpty(record[i].data.CUENTA_CLABE_VIATIC || record[i].data.CUENTA_CLABE_VIATIC === 'N/A')){
                          
                          err = '1';
                          msgErr = 'Error, no se encuentro dato de cuenta clabe para el viatico: ' + record[i].data.NUMERO_VIATIC;
                          
                          
                          
                      }
                      
                       if(record[i].data.ESTATUS_CXP_VIATIC === 'FG' || record[i].data.ESTATUS_CXP_VIATIC === 'TES' || record[i].data.ESTATUS_CXP_VIATIC === 'C' || record[i].data.ESTATUS_CXP_VIATIC === 'PAG' || record[i].data.ESTATUS_CXP_VIATIC === 'CA' || record[i].data.ESTATUS_CXP_VIATIC === 'TES'){
                          
                          err = '1';
                          msgErr = 'Error, ya se proceso en tesoreria una operacion o aun no se a autorizado el viatico con folio: ' + record[i].data.NUMERO_VIATIC;
                          
                          
                          
                      }
                      
                    
                }
                
                if (err === '1'){
                    
                    msgBoxErr('Error',msgErr);
                    return;
                    
                    
                    
                }else{
                    
                    
                     var resp = Ext.MessageBox.show({
                        title: 'Enviar a Pagar',
                        msg: 'Los datos estan completos. Esta seguro que desea crear un folio de Tesoreria?',
                        icon: Ext.MessageBox.QUESTION,
                        buttons: Ext.Msg.YESNO,
                        fn: function(btn, text) {
                            if (btn === 'yes') {
                                
                                me.guardaViaticos();


                            }
                        }

                    }); 
        
                    
                    
                    
                }

        
    },
    
        guardaFolioViaticos: function(){
        
              var me = this,
             
              gridT = me.getGridViaticos(),
              storeT = gridT.getStore();
      
             
              var data = [];
                    storeT.each(function(r) {




                  data.push(r.data);
              });

     
        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        var url;
//        
//        if (Ext.isEmpty(this.folioActualizaTeso)){
//            
            url = 'Pagos/saveViaticos';
//            
//        }else{
//            
//            url = 'Pagos/updateFolioTes';
//        }
//        

         gridT.setLoading('Guardando...');
         Ext.Ajax.request({
            url: url,
             params: {
                 data : jsonData,
                 folio: this.folioActualizaTeso
                
        
            },
            method: 'POST',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    gridT.setLoading(false);
                  
                    msgBox('Guardado',val.msg);
                    me.findArchivos();
                    
                   // me.findCompaniaTesoreria();
                    
                   
                    
                  //  me.findRelacionCXP();
                    
                   // win.close();
                  
                }else{
                    
                    gridT.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
                  
                   // me.findRelacionCXP();
                 

                }
                
             }
            //timeout: 30000

        });
    
        
        
    },
    
    habilitarBotonesRelacion: function(){
        
         var me = this,
                grid = me.getGridFacturasXOtras(),
                store = grid.getStore();
        if (me.relacionFactOtr === '0') {

               grid.down('button[itemId=btnGuardarFactOtras]').setVisible(false);
               grid.down('button[itemId=btnBorrarRelFactOtr]').setVisible(true);
               
            } else {
                
               grid.down('button[itemId=btnGuardarFactOtras]').setVisible(true);
               grid.down('button[itemId=btnBorrarRelFactOtr]').setVisible(false);

            }
         
                
        
    },
    
    recargaGridConceptos: function(){
        
        this.findGridConceptos();
    },
    
    addConcepto: function(btn, cellEditing) {
        
         var view = Ext.widget('windowconceptos');
        view.setTitle('Agregar Concepto');
        var form = view.down('formconceptos').getForm();
        
       

//                 beforeclose:function(win) {
//                                
//                          
//
//                            }
//                        }
        
       // findGridConceptos

//        var me = this,
//                gridDet = me.getGridConceptos(),
//              
//                records = gridDet.getSelectionModel().getSelection(),
//                storeDet = gridDet.getStore();
//      
//                var record = records[0];
//                
//       
//       
//         var model = new AppCXPFacturas.model.ModelGridConceptosCxp({
//                   COMPANIA_CONC:'',
//                   CONCEPTO_CONC:'',
//                   NOMBRE_CONC:'',                   
//                   CUENTA_CONC:''
//
//               });
// 
//            
//                storeDet.insert(0, model);
//                cellEditing.startEditByPosition({
//                    row: 0,
//                    column: 1
//                });
//          


    },
    
    eliminaConceptos: function(){
        
         var me = this,
                grid = me.getGridConceptos(),
                record = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
      
        // var record = records[0];
         
         var err = '0';
         var msgErr = '';
         
     
                for (var i=0; i < record.length; i++) {

                     
                    console.log('cuenta: '+record[i].data.CUENTA_CONC);
        
                      if(!Ext.isEmpty(record[i].data.CUENTA_CONC)){
                          console.log('cuenta: '+record[i].data.CUENTA_CONC);
                          
                          err = '1';
                          msgErr = 'No se puede borrar el concepto: ' + record[i].data.NOMBRE_CONC + ', ya que tiene cuenta ligada';
                          
                          
                          
                      }
                      
                   
                    
                }
                
                if (err === '1'){
                    
                    msgBoxErr('Error',msgErr);
                    return;
                    
                    
                    
                }

                        if (record.phantom) {

                            store.remove(record);

                        } else {
                         
                            store.destroy(record);

                            store.remove(record);
                            
                            grid.setLoading("Borrando...");
                            store.sync({
                                scope: this,
                                success: function(resp, dos) {
                                    grid.setLoading(false);
                                },
                                failure: function(resp, dos) {
                                    msgBoxErr('Error', 'Error al Eliminar:' + store.getProxy( ).getReader().rawData.msg);
                                    grid.setLoading(false);
                                },
                                callback: function(records, operation, val3) {
                                    grid.setLoading(false);
                                    me.findGridConceptos();
                //                    me.procesarPolizas(modified, 0, me, grid);

                                }

                            });


                        }



        

        
        
        
    },
    
    guardaConceptos: function(btn){
        
         var me = this,
                form = btn.up('formconceptos'),
                win = form.up('window'),
                basicForm = form.getForm(),
              
                record = basicForm.getRecord(),
                values = basicForm.getValues(),
                 grid = me.getGridConceptos(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();

        if (basicForm.isValid()) {

            if (!record) {

                record = Ext.create('AppCXPFacturas.model.ModelGridConceptosCxp');
                record.set(values);
                store.insert(0, record);
                // record.phantom = true;

            } else {

                record.set(values);

            }
        }else{
            
            msgBoxErr('Error','Faltan datos por llenar');
            
            return;
            
        }
              
      
        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

        if (!Ext.isEmpty(news)) {

                    
                    var errClave = '0';
                    var errMsg = '';
                    var bandera = 0;
                  
              if (!Ext.isEmpty(news)){
                  
                  store.each(function(r) {
                      
                      
                     for (var i = 0; i < news.length; i++) {

                    if (r.data.CONCEPTO_CONC === news[i].data.CONCEPTO_CONC) {
                        
                        bandera = bandera + 1;
                        
                        if (bandera>1){
                         errMsg = news[i].data.CONCEPTO_CONC;
                         errClave = '1';
                        }
                         

                 
                    }
                   
                }
                  
                     
                  
                   });
              }
                 
                  
              if (errClave === '1'){
                  
                  msgBoxErr('Error','Existe una clave de concepto repetido: ' + errMsg);
                  return;
                  
              } 

            if (!Ext.isEmpty(modified)) {
                
                msgBoxErr('Error','no tiene permisos para modificar conceptos');
                return;

            
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
                    me.findGridConceptos();
                    win.close();
//                    me.procesarPolizas(modified, 0, me, grid);

                }

            });

        }

        
        
        
    },
    eliminarFactFol: function(){
        
        
         var me = this,
             
              gridT = me.getGridFoliosGe(),
              storeT = gridT.getStore(),
              records = gridT.getSelectionModel().getSelection();
      
           var folio = Ext.getCmp('cboFolioGe').getValue();
           
           if (Ext.isEmpty(records)) {
            msgBoxErr("Error", "No ha seleccionado ningun registro");
            return;
           
        }
           
            var selection = gridT.getSelectionModel().getSelection();
           
               var win = gridT.up('window');

              var errData = 0;
              
               var data = [];
              
              storeT.each(function(r) {
                  
                 
                  
                if (Ext.isEmpty(r.data.ESTATUS_FOL)){

                    r.data.TOTAL_TES = 0;
                    msgBoxErr('Error', 'Existen facturas sin estatus');

                    errData = 1;
                    return;

                }
                
                if (r.data.ESTATUS_FOL==='PAG'){

                    r.data.TOTAL_TES = 0;
                    msgBoxErr('Error', 'El folio contiene facturas ya pagadas');

                    errData = 1;
                    return;

                }
                
                if (r.data.ESTATUS_FOL==='GE'){

                    r.data.TOTAL_TES = 0;
                    msgBoxErr('Error', 'El folio contiene facturas ya impresas en Tesoreria');

                    errData = 1;
                    return;

                }
                
                if (r.data.ESTATUS_FOL==='ET'){

                    r.data.TOTAL_TES = 0;
                    msgBoxErr('Error', 'El folio contiene facturas enviadas a Tesoreria');

                    errData = 1;
                    return;

                }
                
                if (r.data.ESTATUS_FOL==='CAN'){

                    r.data.TOTAL_TES = 0;
                    msgBoxErr('Error', 'El folio contiene facturas canceladas por Tesoreria');

                    errData = 1;
                    return;

                }
               
                
              

          //  data.push(r.data);
        });

        if (errData === 1){
            
            return;
            
        }else{
            
            
                for (var i=0; i < selection.length; i++) {

                     
                    
        
                      data.push(selection[i].data);
                      
                   
                    
                }
            
            
        }
        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
      

         gridT.setLoading('Guardando...');
         Ext.Ajax.request({
            url: 'Pagos/eliminaFactFolioCXP',
             params: {
                 data : jsonData
                 //folio: this.folioActualizaTeso
                
        
            },
            method: 'POST',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    gridT.setLoading(false);
                    //win.close();
                    msgBox('Guardado',val.msg);
                    //me.findArchivos();
                    
                    //me.findCompaniaTesoreria();
                    me.buscaFolios(folio);

                  
                }else{
                    
                    gridT.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
                  
       
                }
                
             }
            //timeout: 30000

        });
    
        
        
        
        
    },
    
    enviaTesoreria:function(text){
        
          var me = this,
             
              gridT = me.getGridFoliosGe(),
              storeT = gridT.getStore();
      
               var win = gridT.up('window');
               
               var folio = Ext.getCmp('cboFolioGe').getValue();

              var errData = 0;
              var data = [];
              storeT.each(function(r) {
                  
                 
                  
                if (Ext.isEmpty(r.data.ESTATUS_FOL)){

                    r.data.TOTAL_TES = 0;
                    msgBoxErr('Error', 'Existen facturas sin estatus');

                    errData = 1;
                    return;

                }
                
                if (r.data.ESTATUS_FOL==='PAG'){

                    r.data.TOTAL_TES = 0;
                    msgBoxErr('Error', 'El folio contiene facturas ya pagadas');

                    errData = 1;
                    return;

                }
                
                if (r.data.ESTATUS_FOL==='GE'){

                    r.data.TOTAL_TES = 0;
                    msgBoxErr('Error', 'El folio contiene facturas ya impresas en Tesoreria');

                    errData = 1;
                    return;

                }
                
                if (r.data.ESTATUS_FOL==='ET'){

                    r.data.TOTAL_TES = 0;
                    msgBoxErr('Error', 'El folio contiene facturas enviadas a Tesoreria');

                    errData = 1;
                    return;

                }
                
                if (r.data.ESTATUS_FOL==='CAN'){

                    r.data.TOTAL_TES = 0;
                    msgBoxErr('Error', 'El folio contiene facturas canceladas por Tesoreria');

                    errData = 1;
                    return;

                }
               
                
              

            data.push(r.data);
        });

        if (errData === 1){
            
            return;
            
        }
        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
      

         gridT.setLoading('Guardando...');
         Ext.Ajax.request({
            url: 'Pagos/enviaTesoreria',
             params: {
                 data : jsonData,
                 text:text
                 //folio: this.folioActualizaTeso
                
        
            },
            method: 'POST',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    gridT.setLoading(false);
                   // win.close();
                    msgBox('Guardado',val.msg);
                   // me.findArchivos();
                    
                    me.findCompaniaTesoreria();
                    
                    me.buscaFolios(folio);
                    

                  
                }else{
                    
                    gridT.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
                  
       
                }
                
             }
            //timeout: 30000

        });
    
        
        
        
    },
    
    buscaFoliosCan:function(folio){
        
         var me = this,
                
                grid = me.getGridFactCan(),
                store = grid.getStore();
        
        
        
        store.proxy.extraParams.folio = folio;
   
       
        grid.setLoading('Buscando...');
        store.loadData([], false);
        store.load({
            callback: function() {
                
                
                
         
                        
                
                grid.setLoading(false);
            }
        });
        
        
    },
    
    buscaFolios: function(folio){
        
        var me = this,
                
                grid = me.getGridFoliosGe(),
                store = grid.getStore();
        
        
          var containerStatus = me.getPanelSurFoliosGe();
        
         
                        var sb = containerStatus.getComponent('statusbarTotalesCXPFol');

                        var totFacturas = sb.getComponent('totalFacturasFol');
                        
                        var totAPagar = sb.getComponent('totalAPagarFol');
                        
                        


                       sb.showBusy();
        
 
                     var total = 0;
                     var totalPagar = 0;
        
   
        
        store.proxy.extraParams.folio = folio;
   
       
        grid.setLoading('Buscando...');
        store.loadData([], false);
        store.load({
            callback: function() {
                
                 var icon = 'x-status-valid';
                   
                    sb.setStatus({
                        iconCls: icon,
                        text: 'Totales...'
                    });
                
                
            store.each(function(rec) {
                total += rec.get('TOTAL_FACT_FOL');
                totalPagar += rec.get('TOTAL_A_PAGAR_FOL');
             });
                                        
            totFacturas.update('Total Facturas:' + formatCurrency(Math.round(total * 1000) / 1000));
            totAPagar.update('Total a Pagar:' + formatCurrency(Math.round(totalPagar * 1000) / 1000));
                                        
                             
                        
                
                grid.setLoading(false);
            }
        });
        
        
                
        
        
    },
    buscaCCostos: function(){
        
        var me = this;
        
        
        
        
        
            var window=  Ext.create('Ext.window.Window', {
                     
                        height: 500,
                        width: 670,
                         modal: true,
                          title:'C. Costos',
                        layout: 'fit',
//                        
//                        items: [
//                            {
//                              xtype: 'tabpanel',
//                              
//                                frame: true,     
//                                layout: 'border',
//                               
                                items: [
//                                    
//                                     {
//                                        xtype:'gridconceptos',
//                                        title:'Conceptos'
//                                    }
                                    {
                                        xtype:'gridccostos'
                                       
                                    }
                                    
                                ],
                                    
                           //) }
                            
                           
                        //],
                           listeners:{
                            beforeclose:function(win) {
                                
                          

                            }
                        }


                    }).show();
                
                
                
        
        
        
    },
    buscaConceptos: function(){
        
         var me = this;
        
        
        
        
        
            var window=  Ext.create('Ext.window.Window', {
                     
                        height: 500,
                        width: 670,
                         modal: true,
                           title:'Conceptos',
                        layout: 'fit',
//                        
//                        items: [
//                            {
//                              xtype: 'tabpanel',
//                              
//                                frame: true,     
//                                layout: 'border',
//                               
                                items: [
//                                    
                                     {
                                        xtype:'gridconceptos'
                                      
                                    }
                                   // {
//                                        xtype:'gridccostos',
//                                        title:'C. Costos'
//                                    }
                                    
                                ],
                                    
                           //) }
                            
                           
                        //],
                           listeners:{
                            beforeclose:function(win) {
                                
                          

                            }
                        }


                    }).show();
                
                
        
        
    },
    
    verFoliosPagosCan:function(){
        
        
            var me = this;
        
        
        
        
        
            var window=  Ext.create('Ext.window.Window', {
                        title: 'Folios Cancelados',
                        height: 500,
                        width: 900,
                         modal: true,
                         maximizable:true,
                       // layout: 'fit',
                       
                       layout: {
                            type: 'vbox',
                            align : 'stretch',
                            pack  : 'start'
                        },
                        items: [
                            {
                            xtype:'gridfactcan'
                        },
                        {
                                    xtype: 'panel',
                                    id: 'detailPanelCan',  
                                     region: 'south',
                                    title:'Datos de la Cancelacion',
                                    height: 200,
                                    split: true,
                                    collapsible: true,
                                    autoScroll: true
                       }
                        ],
                           listeners:{
                            beforeclose:function(win) {
                                
                           //     winForm.close();
                             var grid = me.getGridFactCan();
                             var store = grid.getStore();
                              store.loadData([], false);
                             
                             me.findArchivos();
                             me.findCxpOtros();
                             me.findViaticos();
                             //  me.findArchivos();

                            }
                        }


                    }).show();
                
        
        
    },
    
    verFoliosPagos: function(){
        
        var me = this;
        
        
        
        
        
            var window=  Ext.create('Ext.window.Window', {
                      //  title: 'Folios',
                        height: 500,
                        width: 900,
                         modal: true,
                         maximizable:true,
                         layout: {
                                        type: 'border',
                                        padding: 5
                                    },
                 
                        items: [
                              {
                                    xtype:'tabpanel',
                                       region: 'center',
                                          layout: {
                                              type: 'vbox',
                                              align : 'stretch',
                                              pack  : 'start'
                                          },
                                    
                                 items: [    
                                    {
                                          xtype:'panel',
                                          title: 'Folios',
                                          region: 'center',
                                          layout: {
                                              type: 'vbox',
                                              align : 'stretch',
                                              pack  : 'start'
                                          },

                                      items:[
                                                {
                                                xtype:'gridfoliosge'


                                            },

                                            {

                                                xtype:'panelsurfoliosge'

                                            }
                                        ]
                                   },
                                   {
                                          xtype:'panel',
                                          title: 'Tesoreria',
                                          region: 'center',
                                          layout: {
                                              type: 'vbox',
                                              align : 'stretch',
                                              pack  : 'start'
                                          },

                                      items:[
                                                {
                                                xtype:'gridarchivostesor'


                                            }
                                        ]
                                   }
                                 ]
                             }
                        ],
                       
                       
                        
                           listeners:{
                            beforeclose:function(win) {
                                
                           //     winForm.close();
                             var grid = me.getGridFoliosGe();
                             var store = grid.getStore();
                              store.loadData([], false);
                             
                             me.findArchivos();
                             me.findCxpOtros();
                             me.findViaticos();
                             me.findArchivosInt();
                             //  me.findArchivos();

                            }
                        }


                    }).show();
                
                
        
        
    },
    
    borraFactTes: function(){
        var me = this,
         grid = me.getGridTesoreria(),
         store = grid.getStore(),

                records = grid.getSelectionModel().getSelection();

        var record = records[0];
    
        
         var selection = records[0];

                    if (selection) {
                      
                        store.remove(selection);
                        
                        
                         var containerStatus = me.getPanelSurTesoreria();
        
         
                        var sb = containerStatus.getComponent('statusbarTotalesCXP');

                        var totFacturas = sb.getComponent('totalFacturas');


                       sb.showBusy();
        
 
                     var total = 0;
                     
                     var icon = 'x-status-valid';
                   
                    sb.setStatus({
                        iconCls: icon,
                        text: 'Totales...'
                    });
      
                    
                                        
                                         store.each(function(rec) {
                                            total += rec.get('TOTAL_TES');
                                        });
                                        
                                        totFacturas.update('Total Facturas:' + formatCurrency(Math.round(total * 1000) / 1000));
                                        
                             
                        
        
                    }else{
                        
                        
                       msgBoxErr('Error','No ha seleccionado registros a eliminar');
                        
                    }
    },
    
    buscaDatosBancarios: function(cuentaClabe,banco){
        
        var me = this,
               
               grid = me.getGridRembolsos(),

                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        record.set('BANCO_PROV_REM', banco);
        record.set('CTA_CLABE_PROV_REM', cuentaClabe);
        
    },
    
        copiaFolioTes:function(btn){
        
        var me = this,
        
        form = btn.up('formactfolio'),
        winForm = form.up('window'),

         basicForm = form.getForm();

        var folio = basicForm.findField('cboFolioTes').getValue();

       

        if (basicForm.isValid()) {
            
            if (!Ext.isEmpty(folio)){
                
                this.folioActualizaTeso = '';
                me.banderaOtros = '0';
                
               // win.close();
                
                 var window=  Ext.create('Ext.window.Window', {
                        title: 'Tesoreria',
                        height: 500,
                        width: 900,
                         modal: true,
                         maximizable:true,
                       // layout: 'form',
                       layout: {
                            type: 'vbox',
                            align : 'stretch',
                            pack  : 'start'
                        },
                        items: [
                            {
                            xtype:'gridtesoreria'
                        },
                        {
                            
                            xtype:'panelsurtesoreria'
                            
                        }
                        ],
                           listeners:{
                            beforeclose:function(win) {
                                
                                winForm.close();
                             
                             me.findArchivos();
                             //  me.findArchivos();

                            }
                        }


                    }).show();
                
                
                
            }
           


        } else {

            basicForm.getFields().each(function(item) {
                if (!item.isValid()) {
                    msgBoxErr("Error falta un campo", item.name);
                    return;
                }

            });
        }

    
        
    },
    
    relacionaFacturas: function(origen){
        
         var me = this,
         gridA = me.getGridCxpOtros(),
         storeA = gridA.getStore(),
 
         recordsA = gridA.getSelectionModel().getSelection();
            
          var recordA = recordsA[0];
            
            if (Ext.isEmpty(recordA)){
                
                msgBoxErr('Error','No ha seleccionado ningun registro');
                return;
                
            }
            
            if(recordsA.length > 1){

                        msgBoxErr('Error', 'Error, no puede seleccionar más de un anticipo o reembolso en este proceso');

                        return;



                    }
               
               this.relacionaOtrasOrigen = origen;

                
                 var window=  Ext.create('Ext.window.Window', {
                        title: 'Relacion',
                        height: 500,
                        width: 900,
                         modal: true,
                         maximizable:true,
                       // layout: 'form',
                       layout: {
                            type: 'vbox',
                            align : 'stretch',
                            pack  : 'start'
                        },
                        items: [
                            {
                            xtype:'gridfacturasxotras'
                        }
                        ],
                           listeners:{
                            beforeclose:function(win) {
                                
                             
                             me.findCxpOtros();
                             me.findArchivos();
                            
                            }
                        }


                    }).show();
                
                
  
        
    },
        quitarRelacionaFacturas: function(origen){
        
         var me = this,
         gridA = me.getGridCxpOtros(),
         storeA = gridA.getStore(),
 
         recordsA = gridA.getSelectionModel().getSelection();
            
          var recordA = recordsA[0];
            
            if (Ext.isEmpty(recordA)){
                
                msgBoxErr('Error','No ha seleccionado ningun registro');
                return;
                
            }
            
            if(recordsA.length > 1){

                        msgBoxErr('Error', 'Error, no puede seleccionar más de un anticipo o reembolso en este proceso');

                        return;



                    }
                    
                    
               if (Ext.isEmpty(recordA.data.NUMERO_RELACION_OTRAS)){
                
                msgBoxErr('Error','Este registro no tiene relacionada ninguna factura');
                return;
                
            }
                    
                    
                    
               
               this.relacionaOtrasOrigen = origen;

                
                 var window=  Ext.create('Ext.window.Window', {
                        title: 'Relacion',
                        height: 500,
                        width: 900,
                         modal: true,
                         maximizable:true,
                        //layout: 'form',
                        layout: {
                            type: 'vbox',
                            align : 'stretch',
                            pack  : 'start'
                        },
                        items: [
                            {
                            xtype:'gridfacturasxotras'
                        }
                        ],
                           listeners:{
                            beforeclose:function(win) {
                                
                             
                             me.findCxpOtros();
                             me.findArchivos();
                            
                            }
                        }


                    }).show();
                
                
  
        
    },
    
    quitarRelacionaOtras:function(origen){
        
         var me = this,
         gridA = me.getGridArchivos(),
         storeA = gridA.getStore(),
 
         recordsA = gridA.getSelectionModel().getSelection();
            
          var recordA = recordsA[0];
            
            if (Ext.isEmpty(recordA)){
                
                msgBoxErr('Error','No ha seleccionado ningun registro');
                return;
                
            }
            
            if(recordsA.length > 1){
            
                msgBoxErr('Error', 'Solo puede seleccionar una factura a la vez para este proceso');

                return;



            }
            
            if (Ext.isEmpty(recordA.data.NUM_REL_OTRAS)){
                
                msgBoxErr('Error', 'Esta Factura no tiene ningun anticipo ni reembolso ligado');

                return;
                
                
            }
//            
//            if (recordA.data.ESTATUS_CXP === 'ANT'){
//                
//                msgBoxErr('Error', 'Esta factura ya esta ligada a un anticipo');
//
//                return;
//                
//                
//            }
//            
//            if (recordA.data.ESTATUS_CXP === 'FG' || recordA.data.ESTATUS_CXP === 'IMP' || recordA.data.ESTATUS_CXP === 'PAG' || recordA.data.ESTATUS_CXP === 'TES'){
//                
//                msgBoxErr('Error', 'Esta factura no puede ser relacionada por que se encuentra en proceso dentro de tesoreria');
//
//                return;
//                
//                
//            }
            
               
               this.relacionaOtrasOrigen = origen;

                
                 var window=  Ext.create('Ext.window.Window', {
                       title: 'Relacion',
                        height: 500,
                        width: 900,
                         modal: true,
                         maximizable:true,
                        //layout: 'form',
                        layout: {
                            type: 'vbox',
                            align : 'stretch',
                            pack  : 'start'
                        },
                        items: [
                            {
                            xtype:'gridfacturasxotras'
                        }
                        ],
                           listeners:{
                            beforeclose:function(win) {
                                
                             
                             me.findArchivos();
                             me.findCxpOtros();
                            
                            }
                        }


                    }).show();
                
                
        
    },
    
        relacionaOtrasInt: function(origen){
        
         var me = this,
         gridA = me.getGridIntercos(),
         storeA = gridA.getStore(),
 
         recordsA = gridA.getSelectionModel().getSelection();
            
          var recordA = recordsA[0];
            
            if (Ext.isEmpty(recordA)){
                
                msgBoxErr('Error','No ha seleccionado ningun registro');
                return;
                
            }
            
            if(recordsA.length > 1){
            
                msgBoxErr('Error', 'Solo puede seleccionar una factura a la vez para este proceso');

                return;



            }
            
            if (recordA.data.ESTATUS_CXP === 'REMB'){
                
                msgBoxErr('Error', 'Esta factura ya esta ligada a un reembolso');

                return;
                
                
            }
            
            if (recordA.data.ESTATUS_CXP === 'ANT'){
                
                msgBoxErr('Error', 'Esta factura ya esta ligada a un anticipo');

                return;
                
                
            }
            
            if (recordA.data.ESTATUS_CXP === 'FG' || recordA.data.ESTATUS_CXP === 'IMP' || recordA.data.ESTATUS_CXP === 'PAG' || recordA.data.ESTATUS_CXP === 'TES'){
                
                msgBoxErr('Error', 'Esta factura no puede ser relacionada por que se encuentra en proceso dentro de tesoreria');

                return;
                
                
            }
            
               
               this.relacionaOtrasOrigen = origen;

                
                 var window=  Ext.create('Ext.window.Window', {
                       title: 'Relacion',
                        height: 500,
                        width: 900,
                         modal: true,
                         maximizable:true,
                       // layout: 'form',
                       layout: {
                            type: 'vbox',
                            align : 'stretch',
                            pack  : 'start'
                        },
                        items: [
                            {
                            xtype:'gridfacturasxotras'
                        }
                        ],
                           listeners:{
                            beforeclose:function(win) {
                                
                             
                             me.findArchivosInt();
                             me.findCxpOtros();
                            
                            }
                        }


                    }).show();
                
                
  
        
    },
    
    relacionaOtras: function(origen){
        
         var me = this,
         gridA = me.getGridArchivos(),
         storeA = gridA.getStore(),
 
         recordsA = gridA.getSelectionModel().getSelection();
            
          var recordA = recordsA[0];
            
            if (Ext.isEmpty(recordA)){
                
                msgBoxErr('Error','No ha seleccionado ningun registro');
                return;
                
            }
            
            if(recordsA.length > 1){
            
                msgBoxErr('Error', 'Solo puede seleccionar una factura a la vez para este proceso');

                return;



            }
            
            if (recordA.data.ESTATUS_CXP === 'REMB'){
                
                msgBoxErr('Error', 'Esta factura ya esta ligada a un reembolso');

                return;
                
                
            }
            
            if (recordA.data.ESTATUS_CXP === 'ANT'){
                
                msgBoxErr('Error', 'Esta factura ya esta ligada a un anticipo');

                return;
                
                
            }
            
            if (recordA.data.ESTATUS_CXP === 'FG' || recordA.data.ESTATUS_CXP === 'IMP' || recordA.data.ESTATUS_CXP === 'PAG' || recordA.data.ESTATUS_CXP === 'TES'){
                
                msgBoxErr('Error', 'Esta factura no puede ser relacionada por que se encuentra en proceso dentro de tesoreria');

                return;
                
                
            }
            
               
               this.relacionaOtrasOrigen = origen;

                
                 var window=  Ext.create('Ext.window.Window', {
                       title: 'Relacion',
                        height: 500,
                        width: 900,
                         modal: true,
                         maximizable:true,
                       // layout: 'form',
                       layout: {
                            type: 'vbox',
                            align : 'stretch',
                            pack  : 'start'
                        },
                        items: [
                            {
                            xtype:'gridfacturasxotras'
                        }
                        ],
                           listeners:{
                            beforeclose:function(win) {
                                
                             
                             me.findArchivos();
                             me.findCxpOtros();
                            
                            }
                        }


                    }).show();
                
                
  
        
    },
    
    actFolTes:function(btn){
        
        var me = this,
        
        form = btn.up('formactfolio'),
        winForm = form.up('window'),

         basicForm = form.getForm();

        var folio = basicForm.findField('cboFolioTes').getValue();

       

        if (basicForm.isValid()) {
            
            if (!Ext.isEmpty(folio)){
                
                this.folioActualizaTeso = folio;
                me.banderaOtros = '0';
                
               // win.close();
                
                 var window=  Ext.create('Ext.window.Window', {
                        title: 'Tesoreria',
                        height: 500,
                        width: 900,
                         modal: true,
                         maximizable:true,
                       // layout: 'form',
                       layout: {
                            type: 'vbox',
                            align : 'stretch',
                            pack  : 'start'
                        },
                        items: [
                            {
                            xtype:'gridtesoreria'
                        },
                        {
                            
                            xtype:'panelsurtesoreria'
                            
                        }
                        ],
                           listeners:{
                            beforeclose:function(win) {
                                
                                winForm.close();
                             
                             me.findArchivos();
                             //  me.findArchivos();

                            }
                        }


                    }).show();
                
                
                
            }
           


        } else {

            basicForm.getFields().each(function(item) {
                if (!item.isValid()) {
                    msgBoxErr("Error falta un campo", item.name);
                    return;
                }

            });
        }

    
        
    },
    
    actFolTesOtros:function(btn){
        
        var me = this,
        
        form = btn.up('formactfolio'),
        winForm = form.up('window'),

         basicForm = form.getForm();

        var folio = basicForm.findField('cboFolioTes').getValue();

       

        if (basicForm.isValid()) {
            
            if (!Ext.isEmpty(folio)){
                
                this.folioActualizaTeso = folio;
                me.banderaOtros = '0';
                
               // win.close();
                
                 var window=  Ext.create('Ext.window.Window', {
                        title: 'Tesoreria',
                        height: 500,
                        width: 900,
                         modal: true,
                         maximizable:true,
                       // layout: 'form',
                       layout: {
                            type: 'vbox',
                            align : 'stretch',
                            pack  : 'start'
                        },
                        items: [
                            {
                            xtype:'gridtesoreria'
                        },
                        {
                            
                            xtype:'panelsurtesoreria'
                            
                        }
                        ],
                           listeners:{
                            beforeclose:function(win) {
                                
                                winForm.close();
                             
                             me.findCxpOtros();
                             //  me.findArchivos();

                            }
                        }


                    }).show();
                
                
                
            }
           


        } else {

            basicForm.getFields().each(function(item) {
                if (!item.isValid()) {
                    msgBoxErr("Error falta un campo", item.name);
                    return;
                }

            });
        }

    
        
    },
    
    guardaRelFactOtras: function(){
        
                      var me = this,
             
              gridT = me.getGridArchivos(),
              storeT = gridT.getStore(),
              grid = me.getGridFacturasXOtras(),
              store = grid.getStore();
              
              var selectionT = gridT.getSelectionModel().getSelection();

              var recordT = selectionT[0];
              
              var selection = grid.getSelectionModel().getSelection();

              var record = selection[0];
                  
      
               var win = grid.up('window');

              var data = [];
              var data2 = [];
           
                 if (recordT.data.ESTATUS_CXP === 'TES' || recordT.data.ESTATUS_CXP === 'IMP' || recordT.data.ESTATUS_CXP === 'FG' || recordT.data.ESTATUS_CXP === 'PAG'){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO + ' no se puede relacionar debido a que se encuentra en un proceso dentro de tesoreria');
                   
                    return;
                    
                }
             
              

        data.push(recordT.data);
        
        
        if(selection.length > 1){
            
            msgBoxErr('Error', 'Error, no puede relacionar una factura a más de un Anticipo o Reembolso');
                   
            return;
            
            
            
        }
        

        data2.push(record.data);
            
        
        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        var jsonData2 = Ext.encode(data2);
        if (Ext.isEmpty(data2)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        var url;
  
            
            url = 'Pagos/relacionaFacturasXOtras';

        

         grid.setLoading('Guardando...');
         Ext.Ajax.request({
            url: url,
             params: {
                 data : jsonData,
                 data2 : jsonData2
             
        
            },
            method: 'POST',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    grid.setLoading(false);
                    win.close();
                    msgBox('Guardado',val.msg);
                    me.findArchivos();
                    me.findCxpOtros();

                }else{
                    
                    grid.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
             

                }
                
             }
            //timeout: 30000

        });
    
        
        
    },
    
     eliminaRelFactOtras: function(){
        
                      var me = this,
             
              gridT = me.getGridArchivos(),
              storeT = gridT.getStore(),
              grid = me.getGridFacturasXOtras(),
              store = grid.getStore();
              
              var selectionT = gridT.getSelectionModel().getSelection();

              var recordT = selectionT[0];
              
              var selection = grid.getSelectionModel().getSelection();

              var record = selection[0];
                  
      
               var win = grid.up('window');

              var data = [];
              var data2 = [];
           
//                 if (recordT.data.ESTATUS_CXP === 'TES' || recordT.data.ESTATUS_CXP === 'IMP' || recordT.data.ESTATUS_CXP === 'FG' || recordT.data.ESTATUS_CXP === 'PAG'){
//
//                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO + ' no se puede relacionar debido a que se encuentra en un proceso dentro de tesoreria');
//                   
//                    return;
//                    
//                }
//             
              

        data.push(recordT.data);
        
        
        if(selection.length > 1){
            
            msgBoxErr('Error', 'Error, no puede quitar la relacionar una factura a más de un Anticipo o Reembolso');
                   
            return;
            
            
            
        }
        

        data2.push(record.data);
            
        
        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        var jsonData2 = Ext.encode(data2);
        if (Ext.isEmpty(data2)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        var url;
  
            
            url = 'Pagos/quitarRelacionaFacturasXOtras';

        

         grid.setLoading('Eliminando...');
         Ext.Ajax.request({
            url: url,
             params: {
                 data : jsonData,
                 data2 : jsonData2
             
        
            },
            method: 'POST',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    grid.setLoading(false);
                    win.close();
                    msgBox('Eliminado',val.msg);
                 //   me.findArchivos();
                 //   me.findCxpOtros();

                }else{
                    
                    grid.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
             

                }
                
             }
            //timeout: 30000

        });
    
        
        
    },
    
    guardaRelOtrasFact: function(){
        
                      var me = this,
             
              gridT = me.getGridCxpOtros(),
              storeT = gridT.getStore(),
              grid = me.getGridFacturasXOtras(),
              store = grid.getStore();
      
             var win = grid.up('window');

              var data = [];
              var data2 = [];
              
              var selectionT = gridT.getSelectionModel().getSelection();

              var recordT = selectionT[0];
              
//                 
//                 if (recordT.data.ESTATUS_CXP === 'TES' || recordT.data.ESTATUS_CXP === 'IMP' || recordT.data.ESTATUS_CXP === 'FG' || recordT.data.ESTATUS_CXP === 'PAG'){
//
//                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO + ' no se puede relacionar debido a que se encuentra en un proceso dentro de tesoreria');
//                   
//                    return;
//                    
//                }
//             
              

                    data.push(recordT.data);


                    if(selectionT.length > 1){

                        msgBoxErr('Error', 'Error, no puede relacionar una factura a más de un Anticipo o Reembolso');

                        return;



                    }
        
             
              
              
              var selection = grid.getSelectionModel().getSelection();

              var record = selection[0];
              
              var err = "0";
              
               for (var i=0; i < selection.length; i++) {
                    
                     var estatus = selection[i].data.ESTATUS_CXP_REL;
                   
                 if (estatus === 'REMB'){
                     
                    msgBoxErr('Error', 'La factura con numero: ' + selection[i].data.NUMERO_REL + ' no se puede procesar debido a que ya esta relacionada a un reembolso');
                    err = 1;
                    return;
                     
                     
                 } 
                 
                 if (estatus === 'ANT'){
                     
                    msgBoxErr('Error', 'La factura con numero: ' + selection[i].data.NUMERO_REL + ' no se puede procesar debido a que ya esta relacionada a un anticipo');
                    err = 1;
                    return;
                     
                     
                 } 
                 
                 if (estatus === 'TES' || estatus === 'IMP' || estatus === 'PAG' || estatus === 'FG'){
                     
                    msgBoxErr('Error', 'La factura con numero: ' + selection[i].data.NUMERO_REL + ' no se puede procesar debido a que se encuentra dentro de un proceso en tesoreria');
                    err = 1;
                    return;
                     
                     
                 } 
                     
                  data2.push(selection[i].data);   
                     
              }
              
              if(err === '1'){
                  
                  
                  return;
                  
              }
                  

        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        var jsonData2 = Ext.encode(data2);
        if (Ext.isEmpty(data2)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        var url;
  
            
            url = 'Pagos/relacionaOtrasXFacturas';

        

         grid.setLoading('Guardando...');
         Ext.Ajax.request({
            url: url,
             params: {
                 data : jsonData,
                 data2 : jsonData2
             
        
            },
            method: 'POST',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    grid.setLoading(false);
                    win.close();
                    msgBox('Guardado',val.msg);
                    me.findCxpOtros();
                    me.findArchivos();

                }else{
                    
                    grid.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
             

                }
                
             }
            //timeout: 30000

        });
    
        
        
    },
    
    eliminaRelOtrasFact: function(){
        
                      var me = this,
             
              gridT = me.getGridCxpOtros(),
              storeT = gridT.getStore(),
              grid = me.getGridFacturasXOtras(),
              store = grid.getStore();
      
             var win = grid.up('window');

              var data = [];
              var data2 = [];
              
              var selectionT = gridT.getSelectionModel().getSelection();

              var recordT = selectionT[0];
              
//                 
//                 if (recordT.data.ESTATUS_CXP === 'TES' || recordT.data.ESTATUS_CXP === 'IMP' || recordT.data.ESTATUS_CXP === 'FG' || recordT.data.ESTATUS_CXP === 'PAG'){
//
//                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO + ' no se puede relacionar debido a que se encuentra en un proceso dentro de tesoreria');
//                   
//                    return;
//                    
//                }
//             
              

                    data.push(recordT.data);


                    if(selectionT.length > 1){

                        msgBoxErr('Error', 'Error, no puede relacionar una factura a más de un Anticipo o Reembolso');

                        return;



                    }
        
             
              
              
              var selection = grid.getSelectionModel().getSelection();

              var record = selection[0];
              
          //    var err = "0";
              
               for (var i=0; i < selection.length; i++) {
//                    
//                     var estatus = selection[i].data.ESTATUS_CXP_REL;
//                   
//                 if (estatus === 'REMB'){
//                     
//                    msgBoxErr('Error', 'La factura con numero: ' + selection[i].data.NUMERO_REL + ' no se puede procesar debido a que ya esta relacionada a un reembolso');
//                    err = 1;
//                    return;
//                     
//                     
//                 } 
//                 
//                 if (estatus === 'ANT'){
//                     
//                    msgBoxErr('Error', 'La factura con numero: ' + selection[i].data.NUMERO_REL + ' no se puede procesar debido a que ya esta relacionada a un anticipo');
//                    err = 1;
//                    return;
//                     
//                     
//                 } 
//                 
//                 if (estatus === 'TES' || estatus === 'IMP' || estatus === 'PAG' || estatus === 'FG'){
//                     
//                    msgBoxErr('Error', 'La factura con numero: ' + selection[i].data.NUMERO_REL + ' no se puede procesar debido a que se encuentra dentro de un proceso en tesoreria');
//                    err = 1;
//                    return;
//                     
//                     
//                 } 
//                     
                  data2.push(selection[i].data);   
                     
              }
//              
//              if(err === '1'){
//                  
//                  
//                  return;
//                  
//              }
                  

        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        var jsonData2 = Ext.encode(data2);
        if (Ext.isEmpty(data2)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        var url;
  
            
            url = 'Pagos/quitarRelacionaOtrasXFacturas';

        

         grid.setLoading('Eliminando...');
         Ext.Ajax.request({
            url: url,
             params: {
                 data : jsonData,
                 data2 : jsonData2
             
        
            },
            method: 'POST',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    grid.setLoading(false);
                    win.close();
                    msgBox('Eliminado',val.msg);
                   // me.findCxpOtros();
                   // me.findArchivos();

                }else{
                    
                    grid.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
             

                }
                
             }
            //timeout: 30000

        });
    
        
        
    },
    
    guardaTesoreriaInt:function(){
        
            var me = this,
             
              gridT = me.getGridTesoreria(),
              gridA = me.getGridIntercos(),
              storeT = gridT.getStore();
      
               var win = gridT.up('window');
               
               
               var selectionA = gridA.getSelectionModel().getSelection();

              var recordA = selectionA[0];

              var errData = 0;
              var data = [];
              storeT.each(function(r) {
                  
                  r.data.MONEDA_PAGO_TES = r.data.MONEDA_TES;
                  
                if (Ext.isEmpty(r.data.TIPO_PAGO_TES)){
                    
                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ', no tiene el campo de tipo de pago.');
                    errData = 1;
                    return;
                    
                    
                }  
                  
                if (recordA.get('ESTATUS_CXP') === 'PAR' && r.data.TIPO_PAGO_TES === 'PAG'){
                    
                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ', cuenta con un pago parcial y no puede aceptar pagos totales, solo pagos parciales.');
                    errData = 1;
                    return;
                    
                    
                }
                
                if (recordA.get('ESTATUS_CXP') === 'PAR' && r.data.TIPO_PAGO_TES === 'PAR'){
                    
                     if((r.data.PAGO_ACUMULADO_CXP_TES + r.data.TOTAL_PAGAR_TES) > r.data.TOTAL_TES){
                         
                          msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + '. La suma de los pagos parciales supera el monto total de la factura. Favor de verificar');
                          errData = 1;
                          return;
                    
                    
                     }
                    
                }
                
               
          
                 
               if (r.data.TIPO_PAGO_TES === 'PAR'){
                  
                 if (r.data.TOTAL_TES <= r.data.TOTAL_PAGAR_TES){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + '. El pago parcial no puede ser igual o mayor al importe total de la factura.');
                    errData = 1;
                    return;
                    
                }
                
                
                
              }
                  
                 if ( Ext.isEmpty(r.data.RFC_PROV_TES)){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' no tiene al proveedor dado de alta');
                    errData = 1;
                    return;
                    
                }
                  
                if (Ext.isEmpty(r.data.TOTAL_TES)){

                    r.data.TOTAL_TES = 0;
                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' tiene un importe de 0');

                    errData = 1;
                    return;

                }
                if (r.data.TOTAL_TES === 0){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' tiene un importe de 0');
                    errData = 1;
                    return;
                }
                
                if (r.data.MONEDA_TES === 'N/A' || Ext.isEmpty(r.data.MONEDA_TES)){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' tiene un tipo de moneda incorrecto');
                    errData = 1;
                    return;
                }
                
                
                
                
                if (r.data.BANCO_PROV === 'N/A' || Ext.isEmpty(r.data.BANCO_PROV)){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' no tiene un banco ligado al proveedor');
                    errData = 1;
                    return;
                }
                
                if (r.data.CIE === '1'){
                    
                    if (Ext.isEmpty(r.data.REFERENCIA_CIE)){

                        msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' no tiene referencia cie');
                        errData = 1;
                        return;
                   }
                   if (Ext.isEmpty(r.data.PAGO_CIE)){

                        msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' no tiene pago cie');
                        errData = 1;
                        return;
                   }
                   if (Ext.isEmpty(r.data.CONCEPTO_CIE)){

                        msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' no tiene concepto cie');
                        errData = 1;
                        return;
                   }
                }else{
                    
                    if ((r.data.CTA_CLABE_PROV === 'N/A' && r.data.CUENTA_VALIDA_PROV === '1') || (Ext.isEmpty(r.data.CTA_CLABE_PROV) && r.data.CUENTA_VALIDA_PROV === '1')){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' no tiene una cuenta clabe ligada al proveedor');
                    errData = 1;
                    return;
                   }
                   
                   if ((r.data.NUMERO_CUENTA_PROV === 'N/A' && r.data.CUENTA_VALIDA_PROV === '2') || (Ext.isEmpty(r.data.NUMERO_CUENTA_PROV) && r.data.CUENTA_VALIDA_PROV === '2')){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' no tiene numero de cuenta ligado al proveedor');
                    errData = 1;
                    return;
                   }
                    
                   
                   
                    
                    
                    
                }
                
              

            data.push(r.data);
        });

        if (errData === 1){
            
            return;
            
        }
        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        var url;
        
        if (Ext.isEmpty(this.folioActualizaTeso)){
            
            url = 'Pagos/save';
            
        }else{
            
            url = 'Pagos/updateFolioTes';
        }
        

         gridT.setLoading('Guardando...');
         Ext.Ajax.request({
            url: url,
             params: {
                 data : jsonData,
                 folio: this.folioActualizaTeso
                
        
            },
            method: 'POST',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    gridT.setLoading(false);
                    win.close();
                    msgBox('Guardado',val.msg);
                    me.findArchivosInt();
                    
                   // me.findCompaniaTesoreria();
                    
                   
                    
                  //  me.findRelacionCXP();
                    
                   // win.close();
                  
                }else{
                    
                    gridT.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
                  
                   // me.findRelacionCXP();
                 

                }
                
             }
            //timeout: 30000

        });
    
        
        
    },
    
    guardaTesoreria: function(){
        
              var me = this,
             
              gridT = me.getGridTesoreria(),
              gridA = me.getGridArchivos(),
              storeT = gridT.getStore();
      
               var win = gridT.up('window');
               
               
               var selectionA = gridA.getSelectionModel().getSelection();

              var recordA = selectionA[0];

              var errData = 0;
              var data = [];
              storeT.each(function(r) {
                  
                  r.data.MONEDA_PAGO_TES = r.data.MONEDA_TES;
                  
                if (Ext.isEmpty(r.data.TIPO_PAGO_TES)){
                    
                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ', no tiene el campo de tipo de pago.');
                    errData = 1;
                    return;
                    
                    
                }  
                  
                if (recordA.get('ESTATUS_CXP') === 'PAR' && r.data.TIPO_PAGO_TES === 'PAG'){
                    
                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ', cuenta con un pago parcial y no puede aceptar pagos totales, solo pagos parciales.');
                    errData = 1;
                    return;
                    
                    
                }
                
                if (recordA.get('ESTATUS_CXP') === 'PAR' && r.data.TIPO_PAGO_TES === 'PAR'){
                    
                    //console.log(r.data.PAGO_ACUMULADO_CXP_TES);
                    //console.log(r.data.TOTAL_PAGAR_TES);
                    //console.log(r.data.TOTAL_TES);
                    
                    var sumaPar = r.data.PAGO_ACUMULADO_CXP_TES + r.data.TOTAL_PAGAR_TES;
                    //console.log(Number(sumaPar.toFixed(2)));
                    
                     if(Number(sumaPar.toFixed(2)) > r.data.TOTAL_TES){
                         
                         
                          msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + '. La suma de los pagos parciales supera el monto total de la factura. Favor de verificar');
                          errData = 1;
                          return;
                    
                    
                     }
                    
                }
                
               
          
                 
               if (r.data.TIPO_PAGO_TES === 'PAR'){
                   
                   console.log(r.data.TOTAL_TES);
                   console.log(r.data.TOTAL_PAGAR_TES);
                  
                 if (r.data.TOTAL_TES <= r.data.TOTAL_PAGAR_TES){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + '. El pago parcial no puede ser igual o mayor al importe total de la factura.');
                    errData = 1;
                    return;
                    
                }
                
                
                
              }
                  
                 if ( Ext.isEmpty(r.data.RFC_PROV_TES)){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' no tiene al proveedor dado de alta');
                    errData = 1;
                    return;
                    
                }
                  
                if (Ext.isEmpty(r.data.TOTAL_TES)){

                    r.data.TOTAL_TES = 0;
                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' tiene un importe de 0');

                    errData = 1;
                    return;

                }
                if (r.data.TOTAL_TES === 0){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' tiene un importe de 0');
                    errData = 1;
                    return;
                }
                
                if (r.data.MONEDA_TES === 'N/A' || Ext.isEmpty(r.data.MONEDA_TES)){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' tiene un tipo de moneda incorrecto');
                    errData = 1;
                    return;
                }
                
                
                
                
                if (r.data.BANCO_PROV === 'N/A' || Ext.isEmpty(r.data.BANCO_PROV)){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' no tiene un banco ligado al proveedor');
                    errData = 1;
                    return;
                }
                
                if (r.data.CIE === '1'){
                    
                    if (Ext.isEmpty(r.data.REFERENCIA_CIE)){

                        msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' no tiene referencia cie');
                        errData = 1;
                        return;
                   }
                   if (Ext.isEmpty(r.data.PAGO_CIE)){

                        msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' no tiene pago cie');
                        errData = 1;
                        return;
                   }
                   if (Ext.isEmpty(r.data.CONCEPTO_CIE)){

                        msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' no tiene concepto cie');
                        errData = 1;
                        return;
                   }
                }else{
                    
                    if ((r.data.CTA_CLABE_PROV === 'N/A' && r.data.CUENTA_VALIDA_PROV === '1') || (Ext.isEmpty(r.data.CTA_CLABE_PROV) && r.data.CUENTA_VALIDA_PROV === '1')){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' no tiene una cuenta clabe ligada al proveedor');
                    errData = 1;
                    return;
                   }
                   
                   if ((r.data.NUMERO_CUENTA_PROV === 'N/A' && r.data.CUENTA_VALIDA_PROV === '2') || (Ext.isEmpty(r.data.NUMERO_CUENTA_PROV) && r.data.CUENTA_VALIDA_PROV === '2')){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' no tiene numero de cuenta ligado al proveedor');
                    errData = 1;
                    return;
                   }
                    
                    
                    
                }
                
              

            data.push(r.data);
        });

        if (errData === 1){
            
            return;
            
        }
        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        var url;
        
        if (Ext.isEmpty(this.folioActualizaTeso)){
            
            url = 'Pagos/save';
            
        }else{
            
            url = 'Pagos/updateFolioTes';
        }
        

         gridT.setLoading('Guardando...');
         Ext.Ajax.request({
            url: url,
             params: {
                 data : jsonData,
                 folio: this.folioActualizaTeso
                
        
            },
            method: 'POST',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    gridT.setLoading(false);
                    win.close();
                    msgBox('Guardado',val.msg);
                    me.findArchivos();
                    
                   // me.findCompaniaTesoreria();
                    
                   
                    
                  //  me.findRelacionCXP();
                    
                   // win.close();
                  
                }else{
                    
                    gridT.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
                  
                   // me.findRelacionCXP();
                 

                }
                
             }
            //timeout: 30000

        });
    
        
        
    },
    
    guardaTesoreriaOtros: function(){
        
              var me = this,
             
              gridT = me.getGridTesoreria(),
              gridO = me.getGridCxpOtros(),
              storeT = gridT.getStore();
      
               var win = gridT.up('window');

              var errData = 0;
              var data = [];
              
               var selectionO = gridO.getSelectionModel().getSelection();

              var recordO = selectionO[0];
              
              storeT.each(function(r) {
                  
                  r.data.MONEDA_PAGO_TES = r.data.MONEDA_TES;
                  
                 if ( Ext.isEmpty(r.data.RFC_PROV_TES)){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' no tiene al proveedor dado de alta');
                    errData = 1;
                    return;
                    
                }
                  
                if (Ext.isEmpty(r.data.TOTAL_TES)){

                    r.data.TOTAL_TES = 0;
                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' tiene un importe de 0');

                    errData = 1;
                    return;

                }
                if (r.data.TOTAL_TES === 0){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' tiene un importe de 0');
                    errData = 1;
                    return;
                }
                
                if (r.data.MONEDA_TES === 'N/A' || Ext.isEmpty(r.data.MONEDA_TES)){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' tiene un tipo de moneda incorrecto');
                    errData = 1;
                    return;
                }
                
                if (recordO.get('TIPO_GASTO_OTROS') !== 'P'){
                    
                    console.log('datos cuentas');
                    
                    console.log(r.data.NUMERO_CUENTA_PROV);
                    console.log(r.data.CUENTA_VALIDA_PROV);
                
                    if ((r.data.CTA_CLABE_PROV === 'N/A' && r.data.CUENTA_VALIDA_PROV === '1') || (Ext.isEmpty(r.data.CTA_CLABE_PROV) && r.data.CUENTA_VALIDA_PROV === '1')){

                        msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' no tiene una cuenta clabe ligada al proveedor');
                        errData = 1;
                        return;
                    }
                    
                   if ((r.data.NUMERO_CUENTA_PROV === 'N/A' && r.data.CUENTA_VALIDA_PROV === '2') || (Ext.isEmpty(r.data.NUMERO_CUENTA_PROV) && r.data.CUENTA_VALIDA_PROV === '2')){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' no tiene numero de cuenta ligado al proveedor');
                    errData = 1;
                    return;
                   }
                    
                }
                
                
                if (r.data.BANCO_PROV === 'N/A' || Ext.isEmpty(r.data.BANCO_PROV)){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES + ' no tiene un banco ligado al proveedor');
                    errData = 1;
                    return;
                }
                
                if (recordO.get('TIPO_GASTO_OTROS') === 'P'){
                    
                    if (Ext.isEmpty(r.data.REFERENCIA_CIE)){

                        msgBoxErr('Error', 'El gasto con numero: ' + r.data.NUMERO_TES + ' no tiene referencia cie');
                        errData = 1;
                        return;
                   }
                   if (Ext.isEmpty(r.data.PAGO_CIE)){

                        msgBoxErr('Error', 'El gasto con numero: ' + r.data.NUMERO_TES + ' no tiene pago cie');
                        errData = 1;
                        return;
                   }
                   
                   if (Ext.isEmpty(r.data.CONCEPTO_CIE)){

                        msgBoxErr('Error', 'El gasto con numero: ' + r.data.NUMERO_TES + ' no tiene concepto cie');
                        errData = 1;
                        return;
                   }
                }
//                
//              

            data.push(r.data);
        });

        if (errData === 1){
            
            return;
            
        }
        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        var url;
        
        if (Ext.isEmpty(this.folioActualizaTeso)){
            
            url = 'Pagos/save';
            
        }else{
            
            url = 'Pagos/updateFolioTes';
        }
        

         gridT.setLoading('Guardando...');
         Ext.Ajax.request({
            url: url,
             params: {
                 data : jsonData,
                 folio: this.folioActualizaTeso
                
        
            },
            method: 'POST',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    gridT.setLoading(false);
                    win.close();
                    msgBox('Guardado',val.msg);
                    me.findCxpOtros();
                    
                   // me.findCompaniaTesoreria();
                    
                   
                    
                  //  me.findRelacionCXP();
                    
                   // win.close();
                  
                }else{
                    
                    gridT.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
                  
                   // me.findRelacionCXP();
                 

                }
                
             }
            //timeout: 30000

        });
    
        
        
    },
    
     guardaRembolso: function(){
        
              var me = this,
             
              gridT = me.getGridRembolsos(),
              storeT = gridT.getStore();
      
               var win = gridT.up('window');

              var errData = 0;
              var data = [];
              storeT.each(function(r) {
                  
                  
                  
       
                  
                if (Ext.isEmpty(r.data.TOTAL_TES_REM)){

                    r.data.TOTAL_TES_REM = 0;
                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES_REM + ' tiene un importe de 0');

                    errData = 1;
                    return;

                }
                if (r.data.TOTAL_TES_REM === 0){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES_REM + ' tiene un importe de 0');
                    errData = 1;
                    return;
                }
                
                if (r.data.MONEDA_TES_REM === 'N/A' || Ext.isEmpty(r.data.MONEDA_TES_REM)){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES_REM + ' tiene un tipo de moneda incorrecto');
                    errData = 1;
                    return;
                }
                
                if (r.data.CTA_CLABE_PROV_REM === 'N/A' || Ext.isEmpty(r.data.CTA_CLABE_PROV_REM)){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES_REM + ' no tiene una cuenta clabe ligada al empleado');
                    errData = 1;
                    return;
                }
                
                
                if (r.data.BANCO_PROV_REM === 'N/A' || Ext.isEmpty(r.data.BANCO_PROV_REM)){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES_REM + ' no tiene un banco ligado al empleado');
                    errData = 1;
                    return;
                }
                
               
                
                 if (r.data.EMPLEADO_REM === 'N/A' || Ext.isEmpty(r.data.EMPLEADO_REM)){

                    msgBoxErr('Error', 'La factura con numero: ' + r.data.NUMERO_TES_REM + ' no tiene un empleado seleccionado');
                    errData = 1;
                    return;
                }
                
              

            data.push(r.data);
        });

        if (errData === 1){
            
            return;
            
        }
        
        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
     

         gridT.setLoading('Guardando...');
         Ext.Ajax.request({
            url: 'Pagos/saveRembolso',
             params: {
                 data : jsonData
                
        
            },
            method: 'POST',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    gridT.setLoading(false);
                    win.close();
                    msgBox('Guardado',val.msg);
                    me.findArchivos();
                    me.findCompaniaTesoreria();
               
                  
                }else{
                    
                    gridT.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
                  
                   // me.findRelacionCXP();
                 

                }
                
             }
            //timeout: 30000

        });
    
        
        
    },
    
        enviaCorreoCancelacion: function(data){
            
            
            for (var i=0; i < data.length; i++) {
                
                        Ext.Ajax.request({
                        url: '/CorreosAvisos/cancelacionFact.jsp',
                     // url: 'http://localhost:8084/CorreosAvisos/correoTesoreria.jsp',
                         params: {
                             compania : data[i].COMPANIA,
                             folio:data[i].NUMERO


                        },
                        method: 'GET',
                        scope: this,
                         timeout: 60000,
                        callback: function(records, operation, success) {


                         }
                        //timeout: 30000

                    });
                           
                            
              }
                        
            
        
         
        
    },
    
    enviaCorreo: function(){
        
         Ext.Ajax.request({
            url: '/CorreosAvisos/correoTesoreria.jsp',
         // url: 'http://localhost:8084/CorreosAvisos/correoTesoreria.jsp',
             params: {
                 compania : this.companiaSession
                
        
            },
            method: 'GET',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
              
                
             }
            //timeout: 30000

        });
        
    },
    
    buscaFechaSistemaInt: function(){
        
                     Ext.Ajax.request({
                            url: 'process/data/BuscaFechaSystema',
                            method: 'GET',
                            params:{
                                
                               origen : 'WS'
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
                                    
                                   // msgOut('this.calendarioSys'+this.calendarioSys);
                                   //  msgOut('this.calendarioSys'+this.periodoSys);
                                   //   msgOut('this.calendarioSys'+this.periodoSysFin);
                                    
                                     this.findArchivosInt();


                                } else if (!val.success) {
                                }
                            },
                            timeout: 30000

                        });
        
        
    },
    
    buscaFechaSistema: function(){
        
                     Ext.Ajax.request({
                            url: 'process/data/BuscaFechaSystema',
                            method: 'GET',
                            params:{
                                
                               origen : 'CP'
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
                                    
                                   // msgOut('this.calendarioSys'+this.calendarioSys);
                                   //  msgOut('this.calendarioSys'+this.periodoSys);
                                   //   msgOut('this.calendarioSys'+this.periodoSysFin);
                                    
                                     this.findArchivos();


                                } else if (!val.success) {
                                }
                            },
                            timeout: 30000

                        });
        
        
    },
    
    buscaFechaSistemaViaticos: function(){
        
                     Ext.Ajax.request({
                            url: 'process/data/BuscaFechaViaticos',
                            method: 'GET',
                            params:{
                                
                               origen : 'V'
                            },
                            scope: this,
                            callback: function(records, operation, success) {
                                if (Ext.isEmpty(success.responseText))
                                    return;
                                var val = Ext.decode(success.responseText);
                                if (Ext.isEmpty(val))
                                    return;
                                if (val.success) {
                           
                                    this.calendarioSysViaticos = val.data[0].CALENDARIO;
                                 
                                    this.periodoSysViaticos = val.data[0].PERIODO;
                                    
                                    this.periodoSysViaticosFinal = val.data[0].PERIODO;
                                    
                                    
                                    
                                    
                                     this.findViaticos();


                                } else if (!val.success) {
                                }
                            },
                            timeout: 30000

                        });
        
        
    },
    buscaFechaSistemaOtras: function(){
        
                     Ext.Ajax.request({
                            url: 'process/data/BuscaFechaSystemaOtras',
                            method: 'GET',
                            params:{
                                
                               origen : 'CP'
                            },
                            scope: this,
                            callback: function(records, operation, success) {
                                if (Ext.isEmpty(success.responseText))
                                    return;
                                var val = Ext.decode(success.responseText);
                                if (Ext.isEmpty(val))
                                    return;
                                if (val.success) {
                                    this.calendarioSysOtros = val.data[0].CALENDARIO;
                                 
                                    this.periodoSysOtros = val.data[0].PERIODO;
                                    this.periodoSysOtrosFinal = val.data[0].PERIODO;
                                    
                                    //this.buscaPermisosOtras();
                                     this.findCxpOtros();


                                } else if (!val.success) {
                                }
                            },
                            timeout: 30000

                        });
        
        
    },

                    
        
       
    buscaPorFecha: function(calendario,periodo,periodoFin){
        
           this.calendarioSys = calendario;
           
           this.periodoSys=periodo;
           
           this.periodoSysFin=periodoFin;
           
           this.findArchivos2('',calendario,periodo,periodoFin);
           
           
        
        
        
    },
    
    buscaPorFechaInt:function(calendario,periodo,periodoFin){
        
        this.calendarioSys = calendario;
           
           this.periodoSys=periodo;
           
           this.periodoSysFin=periodoFin;
           
           this.findArchivos2Int('',calendario,periodo,periodoFin);
        
        
    },
    
    buscaPorFechaOtros: function(calendario,periodo,peridoFinal){
        
         console.log('periodo final: '+peridoFinal);
        
           this.calendarioSysOtros = calendario;
           
           this.periodoSysOtros=periodo;
           
           this.periodoSysOtrosFinal=peridoFinal;
           
           this.findCxpOtros('',calendario,periodo,peridoFinal);
           
           
        
        
        
    },
    
    findArchivos2Int:function(factura,calendario,periodo,periodoFin){
        
        var me = this,
                gridArch = me.getGridIntercos(),
                storeArch = gridArch.getStore();
        if (Ext.isEmpty(factura))
            factura = '';
         if (Ext.isEmpty(calendario)){   
            calendario = this.calendarioSys;
            Ext.getCmp('cboCalendarioFeCxpInt').setValue(calendario);
        }
        if (Ext.isEmpty(periodo)){
            periodo = this.periodoSys;

             Ext.getCmp('cboPeriodoFeCxpInt').setValue(periodo);
       
        }
        
        if (Ext.isEmpty(periodoFin)){
            periodoFin = this.periodoSysFin;

             Ext.getCmp('cboPeriodoFeCxpFinInt').setValue(periodoFin);
       
        }
        
        storeArch.proxy.extraParams.FACTURA = factura;
        storeArch.proxy.extraParams.calendario = calendario;
        storeArch.proxy.extraParams.periodo = periodo;
        storeArch.proxy.extraParams.periodoFin = periodoFin;
        
           
        var dirBus = 'process/data3/BuscaArchivosCXPIntercosP';
             
       
    
        
        storeArch.proxy.api.read = dirBus;
       
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

    findArchivos2:function(factura,calendario,periodo,periodoFin) {

        var me = this,
                gridArch = me.getGridArchivos(),
                storeArch = gridArch.getStore();
        if (Ext.isEmpty(factura))
            factura = '';
         if (Ext.isEmpty(calendario)){   
            calendario = this.calendarioSys;
            Ext.getCmp('cboCalendarioFeCxp').setValue(calendario);
        }
        if (Ext.isEmpty(periodo)){
            periodo = this.periodoSys;

             Ext.getCmp('cboPeriodoFeCxp').setValue(periodo);
       
        }
        
        if (Ext.isEmpty(periodoFin)){
            periodoFin = this.periodoSysFin;

             Ext.getCmp('cboPeriodoFeCxpFin').setValue(periodoFin);
       
        }
        
        storeArch.proxy.extraParams.FACTURA = factura;
        storeArch.proxy.extraParams.calendario = calendario;
        storeArch.proxy.extraParams.periodo = periodo;
        storeArch.proxy.extraParams.periodoFin = periodoFin;
        
        var dirBus = '';
        
        var ver = Ext.getCmp('cboverCXP').getValue();
        
         if (Ext.isEmpty(ver)){
             
            dirBus = 'process/data3/BuscaArchivosCXP';
             
         }
         if (ver === 'F'){
             
            dirBus = 'process/data3/BuscaArchivosCXP';
             
         }
         if (ver === 'P'){
             
            dirBus = 'process/data3/BuscaArchivosCXPPagos';
             
         }
        
        storeArch.proxy.api.read = dirBus;
       
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
    
    borraCXPRelacionInt:function(btn){
        
           var me = this,
              gridW = btn.up('gridrelfactint'),
              //   form1 = btn.up('formcuentas'),
                win = gridW.up('window'),
              
              gridA = me.getGridIntercos(),
              storeA = gridA.getStore(),
              gridCXP = me.getGridRelFactInt(),
              storeCXP = gridCXP.getStore(),
              recordsA = gridA.getSelectionModel().getSelection(),
              recordsCXP = gridCXP.getSelectionModel().getSelection();
        
        
        var recordA = recordsA[0];
        var recordCXP = recordsCXP[0];
        
//           
            var importeArchivo = 0;
            var importeRelacion = 0;
            var tipoComprobante = recordA.get('TIPO_DE_COMPROBANTE');
            var saldoCxpA = recordA.get('SALDOS_CXP');
            var importeA = recordA.get('TOTAL');
            
//            var saldoCxpR = recordCXP.get('SALDOS_CXP_FACT');
//            var importeR = recordCXP.get('TOTAL_FACT');
      
          
            var selection = gridCXP.getSelectionModel().getSelection();
            var data = [];
            msgOut('tamano'+selection.length);
        // if (selection.length >= 2){
         
                for (var i=0; i < selection.length; i++) {
                    
                     var importeFact = selection[i].data.IMPORTE_FACT;
                     var importeDoc = selection[i].data.IMPORTE_DOC;
                     var saldoCxpFact = selection[i].data.SALDOS_CXP_FACT;
                     var totalFactura = selection[i].data.TOTAL_FACT;
                     
                     if (Ext.isEmpty(importeFact) && Ext.isEmpty(importeDoc)){
                         
                         
                         msgBoxErr('Error', 'La factura con numero: '+selection[i].data.NUMERO_FACT+' no esta relacionada.');
                         return;
                         
                     }
                         
                    
                    msgOut('tamano2'+i);
                    
                    if (importeArchivo !== 0){
                        
                        var saldoCxpA = importeArchivo;
                    }
                    
                     msgOut('importeArchivo'+importeArchivo);
                      msgOut('importeRelacion'+importeRelacion);
                      msgOut('saldoCxpA'+saldoCxpA);
                      msgOut('importeFact'+importeFact);
                    
                     if (tipoComprobante === 'egreso' || tipoComprobante === 'E'){
                
                       if(!Ext.isEmpty(importeFact)){
                           
                         //  saldoCxpA nota de credito
                         
                           importeArchivo = saldoCxpA + importeFact;
                           
                           importeRelacion = saldoCxpFact + importeFact;
                           
                           if (importeRelacion === 0){
                               
                               importeRelacion = totalFactura;
                           }
                           
                           
                       }else{
                           
                           importeArchivo = saldoCxpA + importeDoc;
                           
                           importeRelacion = saldoCxpFact + importeDoc;
                           
                           if (importeRelacion === 0){
                               
                               importeRelacion = totalFactura;
                           }
                           
                           
                       }

                    }

                    if (tipoComprobante === 'ingreso' || tipoComprobante === 'I'){
                        
                         if(!Ext.isEmpty(importeFact)){
                             
                           importeArchivo = saldoCxpA + importeFact;
                           
                           importeRelacion = saldoCxpFact + importeFact;
                           
                           if (importeArchivo === 0){
                               
                               importeArchivo = importeA;
                           }
                           
                           
                           
                       }else{
                           
                           importeArchivo = saldoCxpA + importeDoc;
                           
                           importeRelacion = saldoCxpFact + importeDoc;
                           
                           if (importeArchivo === 0){
                               
                               importeArchivo = importeA;
                           }
                           
                           
                           
                       }



                    }
  
                    
//                    if(!Ext.isEmpty(selection[i].data.NUM_FACTURA_REL)){
//                        
//                        msgBoxErr('Error', 'La factura con numero: '+selection[i].data.NUMERO_FACT+' ya esta relacionada');
//                        return;
//                    }
//                    
//                    if(!Ext.isEmpty(selection[i].data.NUM_DOCUMENTO_REL)){
//                        
//                        msgBoxErr('Error', 'La factura con numero: '+selection[i].data.NUMERO_FACT+' ya esta relacionada');
//                        return;
//                    }
                    
                       selection[i].data.SALDOS_CXP_FACT = importeRelacion;
                      data.push(selection[i].data);
                      
                      
                      msgOut('importeArchivo2'+importeArchivo);
                      msgOut('importeRelacion2'+importeRelacion);
                      
                      msgOut('data'+data);
                    
                }
        
                   
                    

        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        msgOut('jsonData'+jsonData);
         gridCXP.setLoading('Guardando...');
         Ext.Ajax.request({
            url: 'relacionpoliza/quitaRelacionFacturasCXP',
             params: {
                 data : jsonData,
                 numFact:recordA.get('NUMERO'),
                 importeArchivo:importeArchivo,
                 importeRel:importeRelacion
        
            },
            method: 'POST',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    gridCXP.setLoading(false);
                    msgBox('Borrado',val.msg);
                    me.findRelacionCXPInt();
                    
                    win.close();
                  
                }else{
                    
                    gridCXP.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
                  
                    me.findRelacionCXPInt();
                 

                }
                
             }
            //timeout: 30000

        });
        
    },

    borraCXPRelacion: function(btn){
          var me = this,
              gridW = btn.up('gridrelfact'),
              //   form1 = btn.up('formcuentas'),
                win = gridW.up('window'),
              
              gridA = me.getGridArchivos(),
              storeA = gridA.getStore(),
              gridCXP = me.getGridRelFact(),
              storeCXP = gridCXP.getStore(),
              recordsA = gridA.getSelectionModel().getSelection(),
              recordsCXP = gridCXP.getSelectionModel().getSelection();
        
        
        var recordA = recordsA[0];
        var recordCXP = recordsCXP[0];
        
//           
            var importeArchivo = 0;
            var importeRelacion = 0;
            var tipoComprobante = recordA.get('TIPO_DE_COMPROBANTE');
            var saldoCxpA = recordA.get('SALDOS_CXP');
            var importeA = recordA.get('TOTAL');
            
//            var saldoCxpR = recordCXP.get('SALDOS_CXP_FACT');
//            var importeR = recordCXP.get('TOTAL_FACT');
      
          
            var selection = gridCXP.getSelectionModel().getSelection();
            var data = [];
            msgOut('tamano'+selection.length);
        // if (selection.length >= 2){
         
                for (var i=0; i < selection.length; i++) {
                    
                     var importeFact = selection[i].data.IMPORTE_FACT;
                     var importeDoc = selection[i].data.IMPORTE_DOC;
                     var saldoCxpFact = selection[i].data.SALDOS_CXP_FACT;
                     var totalFactura = selection[i].data.TOTAL_FACT;
                     
                     if (Ext.isEmpty(importeFact) && Ext.isEmpty(importeDoc)){
                         
                         
                         msgBoxErr('Error', 'La factura con numero: '+selection[i].data.NUMERO_FACT+' no esta relacionada.');
                         return;
                         
                     }
                         
                    
                    msgOut('tamano2'+i);
                    
                    if (importeArchivo !== 0){
                        
                        var saldoCxpA = importeArchivo;
                    }
                    
                     msgOut('importeArchivo'+importeArchivo);
                      msgOut('importeRelacion'+importeRelacion);
                      msgOut('saldoCxpA'+saldoCxpA);
                      msgOut('importeFact'+importeFact);
                    
                     if (tipoComprobante === 'E'){
                
                       if(!Ext.isEmpty(importeFact)){
                           
                         //  saldoCxpA nota de credito
                         
                           importeArchivo = saldoCxpA + importeFact;
                           
                           importeRelacion = saldoCxpFact + importeFact;
                           
                           if (importeRelacion === 0){
                               
                               importeRelacion = totalFactura;
                           }
                           
                           
                       }else{
                           
                           importeArchivo = saldoCxpA + importeDoc;
                           
                           importeRelacion = saldoCxpFact + importeDoc;
                           
                           if (importeRelacion === 0){
                               
                               importeRelacion = totalFactura;
                           }
                           
                           
                       }

                    }

                    if (tipoComprobante === 'I'){
                        
                         if(!Ext.isEmpty(importeFact)){
                             
                           importeArchivo = saldoCxpA + importeFact;
                           
                           importeRelacion = saldoCxpFact + importeFact;
                           
                           if (importeArchivo === 0){
                               
                               importeArchivo = importeA;
                           }
                           
                           
                           
                       }else{
                           
                           importeArchivo = saldoCxpA + importeDoc;
                           
                           importeRelacion = saldoCxpFact + importeDoc;
                           
                           if (importeArchivo === 0){
                               
                               importeArchivo = importeA;
                           }
                           
                           
                           
                       }



                    }
  
                    
//                    if(!Ext.isEmpty(selection[i].data.NUM_FACTURA_REL)){
//                        
//                        msgBoxErr('Error', 'La factura con numero: '+selection[i].data.NUMERO_FACT+' ya esta relacionada');
//                        return;
//                    }
//                    
//                    if(!Ext.isEmpty(selection[i].data.NUM_DOCUMENTO_REL)){
//                        
//                        msgBoxErr('Error', 'La factura con numero: '+selection[i].data.NUMERO_FACT+' ya esta relacionada');
//                        return;
//                    }
                    
                       selection[i].data.SALDOS_CXP_FACT = importeRelacion;
                      data.push(selection[i].data);
                      
                      
                      msgOut('importeArchivo2'+importeArchivo);
                      msgOut('importeRelacion2'+importeRelacion);
                      
                      msgOut('data'+data);
                    
                }
        
                   
                    

        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', 'No existen equipos seleccionados');
            return;
        }
        
        msgOut('jsonData'+jsonData);
         gridCXP.setLoading('Guardando...');
         Ext.Ajax.request({
            url: 'relacionpoliza/quitaRelacionFacturasCXP',
             params: {
                 data : jsonData,
                 numFact:recordA.get('NUMERO'),
                 importeArchivo:importeArchivo,
                 importeRel:importeRelacion
        
            },
            method: 'POST',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    gridCXP.setLoading(false);
                    msgBox('Borrado',val.msg);
                    me.findRelacionCXP();
                    
                    win.close();
                  
                }else{
                    
                    gridCXP.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
                  
                    me.findRelacionCXP();
                 

                }
                
             }
            //timeout: 30000

        });
        
    },
    
    guardarCXPRelacionInt:function(btn){
        
         var me = this,
        
          gridW = btn.up('gridrelfactint'),
              //   form1 = btn.up('formcuentas'),
                win = gridW.up('window'),
              gridA = me.getGridIntercos(),
              storeA = gridA.getStore(),
              gridCXP = me.getGridRelFactInt(),
              storeCXP = gridCXP.getStore(),
              recordsA = gridA.getSelectionModel().getSelection(),
              recordsCXP = gridCXP.getSelectionModel().getSelection();
        
        
            var recordA = recordsA[0];
            var recordCXP = recordsCXP[0];
        
        //    me.cierraWindow();
                    var saldoCxpNota;
                     var saldoCxpFact;
                     var saldoCxpFactDif;
                     var error;
                    
                    var tipoComprobante = recordA.get('TIPO_DE_COMPROBANTE');
                    
                    if (tipoComprobante === 'egreso' || tipoComprobante === 'E'){
                        
                        error = 'La nota de credito no tiene saldo para estas facturas';
                        
                        var saldoCxpNota = recordA.get('SALDOS_CXP');
                        var importeArchivosNota = recordA.get('TOTAL');
                    }
                    
                    if (tipoComprobante === 'ingreso' || tipoComprobante === 'I'){
                        
                        error = 'La factura ya fue pagada totalmente';
                        
                        var saldoCxpFact = recordA.get('SALDOS_CXP');
                        var importeArchivosFact = recordA.get('TOTAL');
                        
                         if (!Ext.isEmpty(saldoCxpFact) && saldoCxpFact < 0){
                             
                             saldoCxpFactDif = importeArchivosFact - (saldoCxpFact * -1);
                             
                             saldoCxpFact = saldoCxpFactDif;
                             
                             
                         }else{
                             saldoCxpFact = importeArchivosFact;
                             
                         }
                        
                    }
                    
                    
        
                       
       
      
        
        var imp_total_ope_nota = 0;
        var imp_total_ope_fact = 0;
        var saldo = 0;
        var diferencia = 0;
       
            var selection = gridCXP.getSelectionModel().getSelection();
            var data = [];
            msgOut('tamano'+selection.length);
        // if (selection.length >= 2){
         
                for (var i=0; i < selection.length; i++) {
                    
                   diferencia = 0;
                    msgOut('---------------------------------------------------------------');
                    
                    msgOut('tipoComprobante'+tipoComprobante);
                    msgOut('saldoCxpNota'+saldoCxpNota);
                    
                     msgOut('tipoComprobante'+tipoComprobante);
                    
                    if(!Ext.isEmpty(selection[i].data.NUM_FACTURA_REL)){
                        
                        msgBoxErr('Error', 'La factura con numero: '+selection[i].data.NUMERO_FACT+' ya esta relacionada');
                        return;
                    }
                    
                    if(!Ext.isEmpty(selection[i].data.NUM_DOCUMENTO_REL)){
                        
                        msgBoxErr('Error', 'La factura con numero: '+selection[i].data.NUMERO_FACT+' ya esta relacionada');
                        return;
                    }
                    
                    
//                    
                     var importeFact = selection[i].data.SALDOS_CXP_FACT;
//                     var importeDoc = selection[i].data.IMPORTE_DOC;
                     var totalFact = selection[i].data.TOTAL_FACT;
                    
                   if((tipoComprobante === 'egreso' || tipoComprobante === 'E') && saldoCxpNota !== 0){
                       
                        msgOut('tipoComprobante2'+tipoComprobante);
                         msgOut('saldoCxpNota2'+saldoCxpNota);
                       if (Ext.isEmpty(importeFact)){
                          
                          if (Ext.isEmpty(saldoCxpNota)){
                          
                              

                                    imp_total_ope_nota = importeArchivosNota - totalFact;

                                
                               
                          }else{
                     
                                    imp_total_ope_nota = saldoCxpNota - totalFact;

                          }
                          
                      }else{
                          if (importeFact < 0){
                          var importe_res = totalFact - (importeFact * -1);
                          if (importe_res === 0){
                            msgBoxErr('Error', 'La Factura con numero: '+selection[i].data.NUMERO_FACT+' ya fue pagada');
                        
                           return;
                          } else{
                              
                              importeFact = importe_res;
                              
                          }
                          }
                          
                          if (Ext.isEmpty(saldoCxpNota)){
                          
                          
                          
                          msgOut('importeFact'+importeFact);
                        

                                    imp_total_ope_nota = importeArchivosNota - importeFact;

                          }else{
                               msgOut('importeFact2'+importeFact);
 
                                    imp_total_ope_nota = saldoCxpNota - importeFact;

                          }
                          
                          
                      }
                       msgOut('importeFact3'+imp_total_ope_nota);
                      
                        if (imp_total_ope_nota === 0){
                            
                            
                            saldoCxpNota = 0;
                            
                            selection[i].data.SALDOS_CXP_FACT = (totalFact * -1);
                            
                            diferencia = totalFact;
                            selection[i].data.IMPORTE_FACT = diferencia;
                            
                        }
                        
                        if (imp_total_ope_nota > 0){
                            
                           
                            saldoCxpNota = imp_total_ope_nota;
                            
                            selection[i].data.SALDOS_CXP_FACT = (totalFact * -1);
                            
                            diferencia = totalFact;
                            selection[i].data.IMPORTE_FACT = diferencia;
                        }
                       
                        if (imp_total_ope_nota < 0){
                            
                             if (Ext.isEmpty(saldoCxpNota)){
                                  diferencia=importeArchivosNota;
                                  selection[i].data.IMPORTE_FACT = diferencia;
                             }else{
                                 
                                 diferencia = saldoCxpNota;
                                 selection[i].data.IMPORTE_FACT = diferencia;
                             }
                            
                            saldoCxpNota = 0;
                            
                            selection[i].data.SALDOS_CXP_FACT = (imp_total_ope_nota * -1) - totalFact;
                            
                            
                            
                        }
                        
                       saldo = saldoCxpNota;
                       data.push(selection[i].data);

                         msgOut('data'+data);
                   }
                   
                   if((tipoComprobante === 'ingreso' || tipoComprobante === 'I') && saldoCxpFact > 0){
                       
                       msgOut('importeFact'+importeFact);
                        msgOut('saldoCxpFact'+saldoCxpFact);
                       
                        if(importeFact === 0){
                            msgBoxErr('Error', 'La Nota de Credito con numero: '+selection[i].data.NUMERO_FACT+' no tiene saldo');
                        
                           return;
                        }
                        
                        
                        if (Ext.isEmpty(importeFact)){
                          
                          if (Ext.isEmpty(saldoCxpFact)){
                          
                              

                                    imp_total_ope_fact = importeArchivosFact - totalFact;

                                
                               
                          }else{
                              
                                    
                     
                                    imp_total_ope_fact = saldoCxpFact - totalFact;
                                    
                                    msgOut('saldoCxpFact de la factura'+saldoCxpFact);
                                    msgOut('totalFact de la nota de cre'+totalFact);

                          }
                          
                      }else{
                          
                          if (Ext.isEmpty(saldoCxpFact)){
                          
                        

                                    imp_total_ope_fact = importeArchivosFact - importeFact;

                          }else{
                              
 
                                    imp_total_ope_fact = saldoCxpFact - importeFact;

                          }
                          
                          
                      }
                       
                       
                        
                        if (imp_total_ope_fact === 0){
                            
                            
                            saldoCxpFact = (importeArchivosFact * -1);
                            
                            selection[i].data.SALDOS_CXP_FACT = 0;
                            
                            saldo = saldoCxpFact;
                            
                            diferencia = importeArchivosFact;
                            selection[i].data.IMPORTE_FACT = diferencia;
                            
                        }
                        
                        if (imp_total_ope_fact > 0){
                            
                             msgOut('saldo mayor a cero');
                            
                            
                            saldoCxpFact = imp_total_ope_fact;
                            
                            selection[i].data.SALDOS_CXP_FACT = 0;
                            
                            saldo = saldoCxpFact - importeArchivosFact;
                            
                             if(Ext.isEmpty(importeFact)){
                                diferencia = totalFact;
                             }else{
                                 
                                 diferencia = importeFact;
                                 
                                 
                             }
                            
                            selection[i].data.IMPORTE_FACT = diferencia;
                             msgOut('diferencia'+diferencia);
                            
                        }
                       
                        if (imp_total_ope_fact < 0){
                            
                            msgOut('saldo menor a cero');
                            
                            
                            
                            
                            saldoCxpFact = (importeArchivosFact * -1);
                            
                            selection[i].data.SALDOS_CXP_FACT = (imp_total_ope_fact * -1);
                            saldo = saldoCxpFact;
                            diferencia = importeArchivosFact;
                            selection[i].data.IMPORTE_FACT = diferencia;
                             msgOut('diferencia'+diferencia);
                            
                        }
                       
                       
                        data.push(selection[i].data);

                         msgOut('data'+data);
                       
                       
                   }
                    
   
                }
        


        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', error);
            return;
        }
        
        msgOut('jsonData'+jsonData);
         gridCXP.setLoading('Guardando...');
         Ext.Ajax.request({
            url: 'relacionpoliza/relacionaFacturasCXP',
             params: {
                 data : jsonData,
                 numFact:recordA.get('NUMERO'),
                 saldo:saldo,
                 diferencia:diferencia
        
            },
            method: 'POST',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    gridCXP.setLoading(false);
                    msgBox('Guardado',val.msg);
                    me.findRelacionCXPInt();
                    win.close();
                  
                }else{
                    
                    gridCXP.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
                  
                    me.findRelacionCXPInt();
                 

                }
                
             }
            //timeout: 30000

        });
        
        
    },
    
     guardarCXPRelacion: function(btn){
        
        var me = this,
              
              gridW = btn.up('gridrelfact'),
              //   form1 = btn.up('formcuentas'),
                win = gridW.up('window'),
              gridA = me.getGridArchivos(),
              storeA = gridA.getStore(),
              gridCXP = me.getGridRelFact(),
              storeCXP = gridCXP.getStore(),
              recordsA = gridA.getSelectionModel().getSelection(),
              recordsCXP = gridCXP.getSelectionModel().getSelection();
        
        
            var recordA = recordsA[0];
            var recordCXP = recordsCXP[0];
        
        //    me.cierraWindow();
                    var saldoCxpNota;
                     var saldoCxpFact;
                     var saldoCxpFactDif;
                     var error;
                    
                    var tipoComprobante = recordA.get('TIPO_DE_COMPROBANTE');
                    
                    if (tipoComprobante === 'E'){
                        
                        error = 'La nota de credito no tiene saldo para estas facturas';
                        
                        var saldoCxpNota = recordA.get('SALDOS_CXP');
                        var importeArchivosNota = recordA.get('TOTAL');
                    }
                    
                    if (tipoComprobante === 'I'){
                        
                        error = 'La factura ya fue pagada totalmente';
                        
                        var saldoCxpFact = recordA.get('SALDOS_CXP');
                        var importeArchivosFact = recordA.get('TOTAL');
                        
                         if (!Ext.isEmpty(saldoCxpFact) && saldoCxpFact < 0){
                             
                             saldoCxpFactDif = importeArchivosFact - (saldoCxpFact * -1);
                             
                             saldoCxpFact = saldoCxpFactDif;
                             
                             
                         }else{
                             saldoCxpFact = importeArchivosFact;
                             
                         }
                        
                    }
                    
                    
        
                       
       
      
        
        var imp_total_ope_nota = 0;
        var imp_total_ope_fact = 0;
        var saldo = 0;
        var diferencia = 0;
       
            var selection = gridCXP.getSelectionModel().getSelection();
            var data = [];
            msgOut('tamano'+selection.length);
        // if (selection.length >= 2){
         
                for (var i=0; i < selection.length; i++) {
                    
                   diferencia = 0;
                    msgOut('---------------------------------------------------------------');
                    
                    msgOut('tipoComprobante'+tipoComprobante);
                    msgOut('saldoCxpNota'+saldoCxpNota);
                    
                     msgOut('tipoComprobante'+tipoComprobante);
                    
                    if(!Ext.isEmpty(selection[i].data.NUM_FACTURA_REL)){
                        
                        msgBoxErr('Error', 'La factura con numero: '+selection[i].data.NUMERO_FACT+' ya esta relacionada');
                        return;
                    }
                    
                    if(!Ext.isEmpty(selection[i].data.NUM_DOCUMENTO_REL)){
                        
                        msgBoxErr('Error', 'La factura con numero: '+selection[i].data.NUMERO_FACT+' ya esta relacionada');
                        return;
                    }
                    
                    
//                    
                     var importeFact = selection[i].data.SALDOS_CXP_FACT;
//                     var importeDoc = selection[i].data.IMPORTE_DOC;
                     var totalFact = selection[i].data.TOTAL_FACT;
                    
                   if(tipoComprobante === 'E' && saldoCxpNota !== 0){
                       
                        msgOut('tipoComprobante2'+tipoComprobante);
                         msgOut('saldoCxpNota2'+saldoCxpNota);
                       if (Ext.isEmpty(importeFact)){
                          
                          if (Ext.isEmpty(saldoCxpNota)){
                          
                              

                                    imp_total_ope_nota = importeArchivosNota - totalFact;

                                
                               
                          }else{
                     
                                    imp_total_ope_nota = saldoCxpNota - totalFact;

                          }
                          
                      }else{
                          if (importeFact < 0){
                          var importe_res = totalFact - (importeFact * -1);
                          if (importe_res === 0){
                            msgBoxErr('Error', 'La Factura con numero: '+selection[i].data.NUMERO_FACT+' ya fue pagada');
                        
                           return;
                          } else{
                              
                              importeFact = importe_res;
                              
                          }
                          }
                          
                          if (Ext.isEmpty(saldoCxpNota)){
                          
                          
                          
                          msgOut('importeFact'+importeFact);
                        

                                    imp_total_ope_nota = importeArchivosNota - importeFact;

                          }else{
                               msgOut('importeFact2'+importeFact);
 
                                    imp_total_ope_nota = saldoCxpNota - importeFact;

                          }
                          
                          
                      }
                       msgOut('importeFact3'+imp_total_ope_nota);
                      
                        if (imp_total_ope_nota === 0){
                            
                            
                            saldoCxpNota = 0;
                            
                            selection[i].data.SALDOS_CXP_FACT = (totalFact * -1);
                            
                            diferencia = totalFact;
                            selection[i].data.IMPORTE_FACT = diferencia;
                            
                        }
                        
                        if (imp_total_ope_nota > 0){
                            
                           
                            saldoCxpNota = imp_total_ope_nota;
                            
                            selection[i].data.SALDOS_CXP_FACT = (totalFact * -1);
                            
                            diferencia = totalFact;
                            selection[i].data.IMPORTE_FACT = diferencia;
                        }
                       
                        if (imp_total_ope_nota < 0){
                            
                             if (Ext.isEmpty(saldoCxpNota)){
                                  diferencia=importeArchivosNota;
                                  selection[i].data.IMPORTE_FACT = diferencia;
                             }else{
                                 
                                 diferencia = saldoCxpNota;
                                 selection[i].data.IMPORTE_FACT = diferencia;
                             }
                            
                            saldoCxpNota = 0;
                            
                            selection[i].data.SALDOS_CXP_FACT = (imp_total_ope_nota * -1) - totalFact;
                            
                            
                            
                        }
                        
                       saldo = saldoCxpNota;
                       data.push(selection[i].data);

                         msgOut('data'+data);
                   }
                   
                   if(tipoComprobante === 'I' && saldoCxpFact > 0){
                       
                       msgOut('importeFact'+importeFact);
                        msgOut('saldoCxpFact'+saldoCxpFact);
                       
                        if(importeFact === 0){
                            msgBoxErr('Error', 'La Nota de Credito con numero: '+selection[i].data.NUMERO_FACT+' no tiene saldo');
                        
                           return;
                        }
                        
                        
                        if (Ext.isEmpty(importeFact)){
                          
                          if (Ext.isEmpty(saldoCxpFact)){
                          
                              

                                    imp_total_ope_fact = importeArchivosFact - totalFact;

                                
                               
                          }else{
                              
                                    
                     
                                    imp_total_ope_fact = saldoCxpFact - totalFact;
                                    
                                    msgOut('saldoCxpFact de la factura'+saldoCxpFact);
                                    msgOut('totalFact de la nota de cre'+totalFact);

                          }
                          
                      }else{
                          
                          if (Ext.isEmpty(saldoCxpFact)){
                          
                        

                                    imp_total_ope_fact = importeArchivosFact - importeFact;

                          }else{
                              
 
                                    imp_total_ope_fact = saldoCxpFact - importeFact;

                          }
                          
                          
                      }
                       
                       
                        
                        if (imp_total_ope_fact === 0){
                            
                            
                            saldoCxpFact = (importeArchivosFact * -1);
                            
                            selection[i].data.SALDOS_CXP_FACT = 0;
                            
                            saldo = saldoCxpFact;
                            
                            diferencia = importeArchivosFact;
                            selection[i].data.IMPORTE_FACT = diferencia;
                            
                        }
                        
                        if (imp_total_ope_fact > 0){
                            
                             msgOut('saldo mayor a cero');
                            
                            
                            saldoCxpFact = imp_total_ope_fact;
                            
                            selection[i].data.SALDOS_CXP_FACT = 0;
                            
                            saldo = saldoCxpFact - importeArchivosFact;
                            
                             if(Ext.isEmpty(importeFact)){
                                diferencia = totalFact;
                             }else{
                                 
                                 diferencia = importeFact;
                                 
                                 
                             }
                            
                            selection[i].data.IMPORTE_FACT = diferencia;
                             msgOut('diferencia'+diferencia);
                            
                        }
                       
                        if (imp_total_ope_fact < 0){
                            
                            msgOut('saldo menor a cero');
                            
                            
                            
                            
                            saldoCxpFact = (importeArchivosFact * -1);
                            
                            selection[i].data.SALDOS_CXP_FACT = (imp_total_ope_fact * -1);
                            saldo = saldoCxpFact;
                            diferencia = importeArchivosFact;
                            selection[i].data.IMPORTE_FACT = diferencia;
                             msgOut('diferencia'+diferencia);
                            
                        }
                       
                       
                        data.push(selection[i].data);

                         msgOut('data'+data);
                       
                       
                   }
                    
   
                }
        


        var jsonData = Ext.encode(data);
        if (Ext.isEmpty(data)) {
            msgBoxErr('Error', error);
            return;
        }
        
        msgOut('jsonData'+jsonData);
         gridCXP.setLoading('Guardando...');
         Ext.Ajax.request({
            url: 'relacionpoliza/relacionaFacturasCXP',
             params: {
                 data : jsonData,
                 numFact:recordA.get('NUMERO'),
                 saldo:saldo,
                 diferencia:diferencia
        
            },
            method: 'POST',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                if (Ext.isEmpty(val))
                    return;
                if (val.success) {
                    
                    gridCXP.setLoading(false);
                    msgBox('Guardado',val.msg);
                    me.findRelacionCXP();
                    win.close();
                  
                }else{
                    
                    gridCXP.setLoading(false);
                    
                    msgBoxErr('Error',val.msg);
                  
                    me.findRelacionCXP();
                 

                }
                
             }
            //timeout: 30000

        });
        
    },
    
    cierraWindow: function() {
        msgOut("Cierra window");
        var me = this;
        if (me.windowParent) {
            me.windowParent.close();
        }
    },
    
    findRelacionCXPInt:function(){
        
        var me = this,
                grid = me.getGridRelFactInt(),
                store = grid.getStore(),
                 gridA = me.getGridIntercos(),
                 storeA=gridA.getStore(),
                 recordsA = gridA.getSelectionModel().getSelection();
                 var recordA = recordsA[0];
                 
                 var rfcEmisor = recordA.get('RFC_EMISOR');
                 var tipoComprobante = recordA.get('TIPO_DE_COMPROBANTE');
                 
                 
                 
                 if (tipoComprobante === 'ingreso'){
                     
                     store.proxy.extraParams.comprobante = 'egreso';
                 }
                 
                 if (tipoComprobante === 'I'){
                     
                     store.proxy.extraParams.comprobante = 'E';
                 }
                 
                 if (tipoComprobante === 'egreso'){
                     
                     store.proxy.extraParams.comprobante = 'ingreso';
                 }
                 
                 if (tipoComprobante === 'E'){
                     
                     store.proxy.extraParams.comprobante = 'I';
                 }
                 
                 
                  var saldoCxp = recordA.get('SALDOS_CXP');
                  var importeTotal = recordA.get('TOTAL');
               
        store.proxy.extraParams.rfcEmisor = rfcEmisor;
        store.proxy.extraParams.numero = recordA.get('NUMERO');
        store.proxy.extraParams.compania = recordA.get('COMPANIA');
      
        
//        var dirBusFE = null;
//        
//         if (me.relacion === '0') {
//
//                dirBusFE = 'process/data3/BuscaQuitarFE';
//            } else {
//
//                dirBusFE = 'process/data3/BuscaFE';
//            }
        
       // store.proxy.api.read = dirBusFE;
    
        grid.setLoading('Buscando...');
        store.loadData([], false);
        store.load({
            callback: function() {
                
                 var det = grid.getComponent('statusRelacionInt');
                 var banSaldos = det.getComponent('idSaldoInt');
                 
                 
                
                if (!Ext.isEmpty(saldoCxp)){
                     if (tipoComprobante === 'ingreso'){
                     
                       banSaldos.update('<span font-weight: bold;font-size: "7";"> Saldo Factura: '+formatCurrency(Math.round(importeTotal-Math.abs(saldoCxp)))+'</span>');

                    }else{
                        
                        
                       banSaldos.update('<span font-weight: bold;font-size: "7";"> Saldo Nota de Credito: '+formatCurrency(Math.round(saldoCxp))+'</span>');

                    }
                    
                     
                    
                }else{
                    
                     banSaldos.update('<span font-weight: bold;font-size: "7";"> Saldo: '+formatCurrency(Math.round(importeTotal))+'</span>');

                    
                }
                
                
                grid.setLoading(false);
            }
        });
        
        
    },
    
     findRelacionCXP: function() {
        var me = this,
                grid = me.getGridRelFact(),
                store = grid.getStore(),
                 gridA = me.getGridArchivos(),
                 storeA=gridA.getStore(),
                 recordsA = gridA.getSelectionModel().getSelection();
                 var recordA = recordsA[0];
                 
                 var rfcEmisor = recordA.get('RFC_EMISOR');
                 var tipoComprobante = recordA.get('TIPO_DE_COMPROBANTE');
                 
                 
                 
                 if (tipoComprobante === 'ingreso'){
                     
                     store.proxy.extraParams.comprobante = 'egreso';
                 }
                 
                 if (tipoComprobante === 'egreso'){
                     
                     store.proxy.extraParams.comprobante = 'ingreso';
                 }
                 
                 if (tipoComprobante === 'I'){
                     
                     store.proxy.extraParams.comprobante = 'E';
                 }
                 
                 if (tipoComprobante === 'E'){
                     
                     store.proxy.extraParams.comprobante = 'I';
                 }
                 
                  var saldoCxp = recordA.get('SALDOS_CXP');
                  var importeTotal = recordA.get('TOTAL');
               
        store.proxy.extraParams.rfcEmisor = rfcEmisor;
        store.proxy.extraParams.numero = recordA.get('NUMERO');
        store.proxy.extraParams.compania = recordA.get('COMPANIA');
      
        
//        var dirBusFE = null;
//        
//         if (me.relacion === '0') {
//
//                dirBusFE = 'process/data3/BuscaQuitarFE';
//            } else {
//
//                dirBusFE = 'process/data3/BuscaFE';
//            }
        
       // store.proxy.api.read = dirBusFE;
    
        grid.setLoading('Buscando...');
        store.loadData([], false);
        store.load({
            callback: function() {
                
                 var det = grid.getComponent('statusRelacion');
                 var banSaldos = det.getComponent('idSaldo');
                 
                 
                
                if (!Ext.isEmpty(saldoCxp)){
                     if (tipoComprobante === 'ingreso'){
                     
                       banSaldos.update('<span font-weight: bold;font-size: "7";"> Saldo Factura: '+formatCurrency(Math.round(importeTotal-Math.abs(saldoCxp)))+'</span>');

                    }else{
                        
                        
                       banSaldos.update('<span font-weight: bold;font-size: "7";"> Saldo Nota de Credito: '+formatCurrency(Math.round(saldoCxp))+'</span>');

                    }
                    
                     
                    
                }else{
                    
                     banSaldos.update('<span font-weight: bold;font-size: "7";"> Saldo: '+formatCurrency(Math.round(importeTotal))+'</span>');

                    
                }
                
                
                grid.setLoading(false);
            }
        });
    },
    
    relacionarCxpInt:function(){
        
                 var me = this,
              
              
              grid = me.getGridIntercos(),
              store=grid.getStore(),
                 records = grid.getSelectionModel().getSelection();
        var record = records[0];
        
        me.notaCreditoOrigen = 'I';

        var serie = record.get('SERIE');
        
        if(serie !== 'NC'){
            
            msgBoxErr("Error", "Debe seleccionar solo notas de credito para relacionar facturas");
            return;
            
        }
        
        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado la factura a relacionar");
            return;
           // msgOut('record existente'+record);
        }

       var window=  Ext.create('Ext.window.Window', {
            title: 'Relacion Facturas',
            height: 480,
            width: 800,
             modal: true,
             maximizable:true,
            layout: 'fit',
            items: [
                {
                xtype:'gridrelfactint'
            }
            ],
               listeners:{
                beforeclose:function(win) {
                    me.findArchivosInt();
                  //  me.buscarMaestro();
                    // user has already answered yes
//                    if(win.closeMe) {
//                        win.closeMe = false;
//                        return true;
//                    }
// 
//                    // ask user if really close
//                    Ext.Msg.show({
//                         title:'Close confirmation'
//                        ,msg:'Really close?'
//                        ,buttons:Ext.Msg.YESNO
//                        ,callback:function(btn) {
//                            if('yes' === btn) {
// 
//                                // save the user answer
//                                win.closeMe = true;
// 
//                                // call close once again
//                                win.close();
//                            }
//                        }
//                    });
// 
//                    // Always cancel closing if we get here
//                    return false;
                }
            }
               
            
        }).show();
        
        
    },
    
    relacionarCxp:function(btn){
        
         var me = this,
              
              
              grid = me.getGridArchivos(),
              store=grid.getStore(),
                 records = grid.getSelectionModel().getSelection();
        var record = records[0];

        var serie = record.get('SERIE');
        
        me.notaCreditoOrigen = 'A';
        
        if(serie !== 'NC'){
             if(serie !== 'NCBE'){
                 if(serie !== 'NCP'){
                    msgBoxErr("Error", "Debe seleccionar solo notas de credito para relacionar facturas");
                    return;
                }
              }
            
        }
        
        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado la factura a relacionar");
            return;
           // msgOut('record existente'+record);
        }

       var window=  Ext.create('Ext.window.Window', {
            title: 'Relacion Facturas',
            height: 480,
            width: 800,
             modal: true,
             maximizable:true,
            layout: 'fit',
            items: [
                {
                xtype:'gridrelfact'
            }
            ],
               listeners:{
                beforeclose:function(win) {
                    me.findArchivos();
                  //  me.buscarMaestro();
                    // user has already answered yes
//                    if(win.closeMe) {
//                        win.closeMe = false;
//                        return true;
//                    }
// 
//                    // ask user if really close
//                    Ext.Msg.show({
//                         title:'Close confirmation'
//                        ,msg:'Really close?'
//                        ,buttons:Ext.Msg.YESNO
//                        ,callback:function(btn) {
//                            if('yes' === btn) {
// 
//                                // save the user answer
//                                win.closeMe = true;
// 
//                                // call close once again
//                                win.close();
//                            }
//                        }
//                    });
// 
//                    // Always cancel closing if we get here
//                    return false;
                }
            }
               
            
        }).show();
        
        
    },
     recargaPagina: function(pagina,factura){
        
        msgOut("pagina"+pagina);
        
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
     validaRfc: function(rfcStr) {
	var strCorrecta
	if (rfcStr.length === 12)
	{
		strCorrecta = ' ' + rfcStr;
                msgOut("rfcStr"+rfcStr);
	}
	else
	{
		strCorrecta = rfcStr;
	}
	var valid = '^(([A-Z]|[a-z]|\s){1})(([A-Z]|[a-z]){3})([0-9]{6})((([A-Z]|[a-z]|[0-9]){3}))';
	var validRfc=new RegExp(valid);
	var matchArray=strCorrecta.match(validRfc);
	if (matchArray==null) {
		alert('Cadena:' + strCorrecta);
		return;
		return false;
	}
	else
	{
		alert('Cadena:' + strCorrecta);
		return true;
	}
	
},
    
    editCXPOtras:function(btn){
      
       var me = this,
                grid = me.getGridCxpOtros(),
                records = grid.getSelectionModel().getSelection();
        
        var record = records[0];
//        
//        var tipoCxp = record.get('TIPO_CXP');
//        
//        if(tipoCxp === 'C'){
//            
//            msgBox('Editar','Este registro no se puede editar por este medio');
//            
//        }else{
            
              if (record.get('ESTATUS_CXP_OTROS') === 'IMP' || record.get('ESTATUS_CXP_OTROS') === 'TES' || record.get('ESTATUS_CXP_OTROS') === 'FG' || record.get('ESTATUS_CXP_OTROS') === 'PAG'){
                         
                         msgBoxErr("Error", "Existen datos procesadas en tesoreria, imposible modificar, favor de verficar");
                         return;
                         
                         
                     }
                     
               if (!Ext.isEmpty(record.get('NUMERO_RELACION_OTRAS'))){
                         
                         msgBoxErr("Error", "Existen facturas relacionadas, no se puede modificar el registro");
                         return;
                         
                         
                     }
                     
               
           
            
               var compania = record.get('COMPANIA_OTROS');
             var numero = record.get('NUMERO_OTROS');
             var tipoGasto = record.get('TIPO_GASTO_OTROS');
             var fecha = record.get('FECHA_OTROS');
             var beneficiario = record.get('NOMBRE_EMISOR_OTROS');
             var moneda = record.get('MONEDA_OTROS');
             var subtotal = record.get('SUBTOTAL_OTROS');
             var otrosImpuestos = record.get('OTROS_IMPUESTOS_OTROS');
             var iva = record.get('IVA_OTROS');
             var total = record.get('TOTAL_OTROS');
             var conceptoCxp = record.get('CONCEPTO_OTROS');
             var cto = record.get('NOMCC_OTROS');
             var fechaV = record.get('CXP_FECHA_OTROS');
             var rfcEmisor = record.get('RFC_EMISOR_OTROS');
             var tipoCambio = record.get('TIPO_CAMBIO_OTROS');
             var descripcion = record.get('DESCRIPCION_OTRAS_OTROS');
             var facturable = record.get('FACTURABLE_OTROS');
             
             
             
             
       
      
           var view = Ext.widget('windowcxpotros');
        view.setTitle('Agregar CXP');
        var form = view.down('formcxpotros').getForm();
        form.findField('txtCompania').setValue(compania);
        form.findField('id').setValue(numero);
        form.findField('cboTipo').setValue(tipoGasto);
        form.findField('cxpFecha').setValue(fecha);
        
        if (tipoGasto === '1' || tipoGasto === '3' || tipoGasto === 'R' || tipoGasto === 'A'){
            form.findField('cxpBeneficiario').setVisible(false);
            form.findField('cxpcboBENEFICIARIO').setVisible(true);
            
          //  form.findField('cxpcboBENEFICIARIO').setValue(beneficiario);
          
          console.log('beneficiario: '+beneficiario);
          
            var storeEmpleados = form.findField('cxpcboBENEFICIARIO').getStore();
                         storeEmpleados.proxy.extraParams.query = '';
                         
                         storeEmpleados.load({
                             callback:function(val1){
                                  
                                
                                    form.findField('cxpcboBENEFICIARIO').setValue(beneficiario);
                             }
                         });
        
        }else{
            form.findField('cxpBeneficiario').setVisible(true);
            form.findField('cxpcboBENEFICIARIO').setVisible(false);
            
            form.findField('cxpBeneficiario').setValue(beneficiario);
        }
        
       var storeFacturable = form.findField('cboFacturable').getStore();
                          
                         storeFacturable.load({
                             callback:function(val1){
                                  
                                
                                    form.findField('cboFacturable').setValue(facturable);
                             }
                         });
        
        form.findField('cboMoneda').setValue(moneda);
        
        form.findField('txtIMPORTE').setValue(subtotal);
        form.findField('txtOTROS_IMPUESTOS').setValue(otrosImpuestos);
        form.findField('txtIVA').setValue(iva);
        form.findField('txtTOTAL').setValue(total);
        form.findField('cxp_Concepto').setValue(conceptoCxp);
        form.findField('cboCto').setValue(cto);
        form.findField('cxpVencFecha').setValue(fechaV);
        form.findField('cxpRFCEmisor').setValue(rfcEmisor);
         form.findField('txtTIPO_CAMBIO').setValue(tipoCambio);
         form.findField('cxpDescripcionOtras').setValue(descripcion);
         
         if (moneda === 'MXN'){
             
             form.findField('txtTIPO_CAMBIO').setVisible(false);
             
         }else{
             
             form.findField('txtTIPO_CAMBIO').setVisible(true);
         }
        
        
        
        
            
            
     //   }
      
        
    },
    findTesoreriaCopia:function(){
      var me = this,
                 grid = me.getGridArchivos(),
                gridT = me.getGridTesoreria(),
                storeT = gridT.getStore();
        
        var containerStatus = me.getPanelSurTesoreria();
        
        console.log(containerStatus);
        
         var sb = containerStatus.getComponent('statusbarTotalesCXP');
         
         var totFacturas = sb.getComponent('totalFacturas');


        sb.showBusy();
        
        gridT.setTitle('Copia de Folio');
 
        
                
        gridT.setLoading('Buscando...');
//           var selection = grid.getSelectionModel().getSelection();
//                    if (selection.length >= 2){
//                        var data = [];
//                           for (var i=0; i < selection.length; i++) {
//
//                               var record = selection[i];
//
//                               data.push(record.data);
//
//
//                               var jsonData = Ext.encode(data);
//                               if (Ext.isEmpty(data)) {
//                                   msgBoxErr('Error', 'No existen equipos seleccionados');
//                                   return;
//                               }
//                               
//                              
//
//                           }
//                    }else{
//
//                        var record = selection[0];
//
//                       var data = [];
//
//                               data.push(record.data);
//
//                              msgOut("data"+data);
//
//                               var jsonData = Ext.encode(data);
//
//                                msgOut("jsonData"+jsonData);
//                               if (Ext.isEmpty(data)) {
//                                   msgBoxErr('Error', 'No existen equipos seleccionados');
//                                   return;
//                               }
//
//                          
//                    }
                    
                     storeT.proxy.extraParams.folio = Ext.getCmp('cboFolioTes').getValue();
                     storeT.proxy.api.read = 'process/data2/BuscaDatosTesoreriaCAN';
                     
                     var total = 0;
      
                              //  grid.setLoading('Buscando...');
                                storeT.loadData([], false);
                                storeT.currentPage = 1;
                                storeT.load({
                                  //  url: 'process/data2/BuscaDatosTesoreriaCAN',
                                    callback: function() {
                                        
                                        var icon = 'x-status-valid';
                   
                                        sb.setStatus({
                                            iconCls: icon,
                                            text: 'Totales...'
                                        });
                                        
                                        
                                         storeT.each(function(rec) {
                                            total += rec.get('TOTAL_TES');
                                        });
                                        
                                        totFacturas.update('Total Facturas:' + formatCurrency(Math.round(total * 1000) / 1000));
                                        
                                        gridT.setLoading(false);
                                    }
                                }); 
                    

    },
    
    findTesoreriaOtros: function(){
        
        var me = this,
                 grid = me.getGridCxpOtros(),
                gridT = me.getGridTesoreria(),
                storeT = gridT.getStore();
        
        var containerStatus = me.getPanelSurTesoreria();
        
         var sb = containerStatus.getComponent('statusbarTotalesCXP');
         
         var totFacturas = sb.getComponent('totalFacturas');


        sb.showBusy();
        
 
        
                
        gridT.setLoading('Buscando...');
           var selection = grid.getSelectionModel().getSelection();
                    if (selection.length >= 2){
                        var data = [];
                           for (var i=0; i < selection.length; i++) {

                               var record = selection[i];

                               data.push(record.data);


                               var jsonData = Ext.encode(data);
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
                    
                     storeT.proxy.extraParams.jsonData = jsonData;
                     storeT.proxy.api.read = 'Pagos/dataTesoreriaOtros/BuscaDatosTesoreriaOtros';
                     var total = 0;
      
                              //  grid.setLoading('Buscando...');
                                storeT.loadData([], false);
                                storeT.currentPage = 1;
                                storeT.load({
                                    //url: 'Pagos/dataTesoreria/BuscaDatosTesoreria',
                                    callback: function() {
                                        
                                        var icon = 'x-status-valid';
                   
                                        sb.setStatus({
                                            iconCls: icon,
                                            text: 'Totales...'
                                        });
                                        
                                        
                                         storeT.each(function(rec) {
                                            total += rec.get('TOTAL_TES');
                                        });
                                        
                                        totFacturas.update('Total Facturas:' + formatCurrency(Math.round(total * 1000) / 1000));
                                        
                                        gridT.setLoading(false);
                                    }
                                }); 
                    

        
        
    },
    
    findTesoreriaInt:function(){
        
         var me = this,
                 grid = me.getGridIntercos(),
                gridT = me.getGridTesoreria(),
                storeT = gridT.getStore();
        
        var containerStatus = me.getPanelSurTesoreria();
        
        console.log(containerStatus);
        
         var sb = containerStatus.getComponent('statusbarTotalesCXP');
         
         var totFacturas = sb.getComponent('totalFacturas');


        sb.showBusy();
        
 
        
                
        gridT.setLoading('Buscando...');
           var selection = grid.getSelectionModel().getSelection();
                    if (selection.length >= 2){
                        var data = [];
                           for (var i=0; i < selection.length; i++) {

                               var record = selection[i];

                               data.push(record.data);


                               var jsonData = Ext.encode(data);
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
                    
                     storeT.proxy.extraParams.jsonData = jsonData;
                     storeT.proxy.api.read = 'Pagos/dataTesoreria/BuscaDatosTesoreria';
                     var total = 0;
      
                              //  grid.setLoading('Buscando...');
                                storeT.loadData([], false);
                                storeT.currentPage = 1;
                                storeT.load({
                                    //url: 'Pagos/dataTesoreria/BuscaDatosTesoreria',
                                    callback: function() {
                                        
                                        var icon = 'x-status-valid';
                   
                                        sb.setStatus({
                                            iconCls: icon,
                                            text: 'Totales...'
                                        });
                                        
                                        
                                         storeT.each(function(rec) {
                                            total += rec.get('TOTAL_TES');
                                        });
                                        
                                        totFacturas.update('Total Facturas:' + formatCurrency(Math.round(total * 1000) / 1000));
                                        
                                        gridT.setLoading(false);
                                    }
                                }); 
                    
        
        
    },
    
    
    findTesoreria:function(){
      var me = this,
                 grid = me.getGridArchivos(),
                gridT = me.getGridTesoreria(),
                storeT = gridT.getStore();
        
        var containerStatus = me.getPanelSurTesoreria();
        
        console.log(containerStatus);
        
         var sb = containerStatus.getComponent('statusbarTotalesCXP');
         
         var totFacturas = sb.getComponent('totalFacturas');


        sb.showBusy();
        
 
        
                
        gridT.setLoading('Buscando...');
           var selection = grid.getSelectionModel().getSelection();
                    if (selection.length >= 2){
                        var data = [];
                           for (var i=0; i < selection.length; i++) {

                               var record = selection[i];

                               data.push(record.data);


                               var jsonData = Ext.encode(data);
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
                    
                     storeT.proxy.extraParams.jsonData = jsonData;
                     storeT.proxy.api.read = 'Pagos/dataTesoreria/BuscaDatosTesoreria';
                     var total = 0;
      
                              //  grid.setLoading('Buscando...');
                                storeT.loadData([], false);
                                storeT.currentPage = 1;
                                storeT.load({
                                    //url: 'Pagos/dataTesoreria/BuscaDatosTesoreria',
                                    callback: function() {
                                        
                                        var icon = 'x-status-valid';
                   
                                        sb.setStatus({
                                            iconCls: icon,
                                            text: 'Totales...'
                                        });
                                        
                                        
                                         storeT.each(function(rec) {
                                             
                                             rec.set('TIPO_PAGO_TES','PAG');
                                             
                                            total += rec.get('TOTAL_TES');
                                        });
                                        
                                        totFacturas.update('Total Facturas:' + formatCurrency(Math.round(total * 1000) / 1000));
                                        
                                        gridT.setLoading(false);
                                    }
                                }); 
                    

    },
    findGridCC: function(){
        
         var me = this,

                grid = me.getGridCcostos(),
               
                store = grid.getStore();
        
                
        grid.setLoading('Buscando...');
        
          
                    store.proxy.extraParams.query = '';
                    
      
                              //  grid.setLoading('Buscando...');
                                store.loadData([], false);
                                store.currentPage = 1;
                                store.load({
                                    callback: function() {
                                        grid.setLoading(false);
                                    }
                                }); 
        
        
    },
    findGridConceptos: function(){
        
           var me = this,

                grid = me.getGridConceptos(),
               
                store = grid.getStore();
        
                
        grid.setLoading('Buscando...');
        
          
                    store.proxy.extraParams.query = '';
                    
      
                              //  grid.setLoading('Buscando...');
                                store.loadData([], false);
                                store.currentPage = 1;
                                store.load({
                                    callback: function() {
                                        grid.setLoading(false);
                                    }
                                }); 
        
        
    },
    
    findFacturasXOtras: function(){
        
           var me = this,

                grid = me.getGridFacturasXOtras(),
                gridO = me.getGridCxpOtros(),
                storeO = gridO.getStore(),
                gridA = me.getGridArchivos(),
                storeA = gridA.getStore(),
                store = grid.getStore();
        
                
        grid.setLoading('Buscando...');
        
            if(me.relacionaOtrasOrigen === 'F'){
                grid.setTitle('Anticipos y Reembolsos');
                
                 var selectionA = gridA.getSelectionModel().getSelection()[0];
                      
                   store.proxy.extraParams.numero_fe = selectionA.data.NUMERO;
                
                if (me.relacionFactOtr === '1'){
                
                 store.proxy.api.read = 'process/data3/BuscaOtrasRelfact';
                 
                }
                if (me.relacionFactOtr === '0'){
                
                 store.proxy.api.read = 'process/data3/BuscaOtrasRelfactDel';
                 
                }

                
            }
            
            if(me.relacionaOtrasOrigen === 'O'){
                grid.setTitle('Facturas');
                
                var selection = gridO.getSelectionModel().getSelection()[0];
                      
                   store.proxy.extraParams.numero_otras = selection.data.NUMERO_OTROS;
                
                if (me.relacionFactOtr === '1'){
                
                 store.proxy.api.read = 'process/data3/BuscaFactRelOtras';
                 
                }
                 
                 if (me.relacionFactOtr === '0'){
                   
                    
                   store.proxy.api.read = 'process/data3/BuscaFactRelOtrasDel';
                 
                }

                
            }
        
                    
                    // storeR.proxy.extraParams.jsonData = jsonData;
                    
                    
      
                              //  grid.setLoading('Buscando...');
                                store.loadData([], false);
                                store.currentPage = 1;
                                store.load({
                                    callback: function() {
                                        grid.setLoading(false);
                                    }
                                }); 
        
        
    },
    
     findRembolso:function(){
      var me = this,
                 grid = me.getGridArchivos(),
                gridR = me.getGridRembolsos(),
                storeR = gridR.getStore();
        
                
        gridR.setLoading('Buscando...');
           var selection = grid.getSelectionModel().getSelection();
                    if (selection.length >= 2){
                        var data = [];
                           for (var i=0; i < selection.length; i++) {

                               var record = selection[i];

                               data.push(record.data);


                               var jsonData = Ext.encode(data);
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
                    
                     storeR.proxy.extraParams.jsonData = jsonData;
      
                              //  grid.setLoading('Buscando...');
                                storeR.loadData([], false);
                                storeR.currentPage = 1;
                                storeR.load({
                                    callback: function() {
                                        gridR.setLoading(false);
                                    }
                                }); 
                    

    },
    
     copiaFolio:function(){
        
          var me = this,
                  
              
                
                grid = me.getGridArchivos();
        
                    me.copiafolio = '1';
                    me.folioActualizaTesoOtros = '0';
                    me.banderaOtros = '0';
        
        
                       var window=  Ext.create('Ext.window.Window', {
                                        title: 'Folio',
                                        height: 160,
                                        width: 250,
                                         modal: true,
                                        layout: 'fit',
                                        items: [
                                            {
                                            xtype:'formactfolio'
                                        }
                                        ],
                                           listeners:{
                                            beforeclose:function(win) {


                                             me.findArchivos();
                                             //  me.findArchivos();

                                            }
                                        }


                                    }).show();
        
            
            var cboFolio = Ext.getCmp('cboFolioTes');
            var storeFolio = cboFolio.getStore();
                    cboFolio.clearValue();

                storeFolio.proxy.api.read = 'process/data/BuscaFoliosETesoreriaCAN';

                            storeFolio.loadData([], false);
                            storeFolio.load({
                              //  url:'process/data/BuscaFoliosETesoreriaCAN',
                                callback: function() {
                                    
                                      


                                
                                }
                            });

                        
        
        
              
        
          // 
                    
                   
    
        
    },
    
    actualizaFolioInt:function(){
        
          var me = this,
                
                grid = me.getGridIntercos();
              
        me.copiafolio = '0';
        me.folioActualizaTesoOtros = '0';
        me.banderaOtros = '0';
        me.separacionInt = '1';
                  
        var resp = Ext.MessageBox.show({
            title: 'Enviar a Pagar',
            msg: 'Esta seguro que desea actualizar un folio de Tesoreria?',
            icon: Ext.MessageBox.QUESTION,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {
                    
                   var verifImp = 0;
                    
                     var selection = grid.getSelectionModel().getSelection();
                    if (selection.length >= 2){
                        var data = [];
                           for (var i=0; i < selection.length; i++) {

                               var record = selection[i];
                               
                               if (record.get('ESTATUS_CXP') === 'TES' || record.get('ESTATUS_CXP') === 'PAG' || record.get('ESTATUS_CXP') === 'IMP' || record.get('ESTATUS_CXP') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'REMB' || record.get('ESTATUS_CXP') === 'ANT'){
                                   
                                    verifImp = 3;
                               }
                               
                               if (record.get('TIPO_DE_COMPROBANTE') === 'egreso'){
                                   
                                    verifImp = 4;
                               }

                               data.push(record.data);


                               var jsonData = Ext.encode(data);
                               if (Ext.isEmpty(data)) {
                                   msgBoxErr('Error', 'No existen equipos seleccionados');
                                   return;
                               }
                               
                               
                           }
                    }else{

                        var record = selection[0];
                        
                         if (record.get('ESTATUS_CXP') === 'TES' || record.get('ESTATUS_CXP') === 'PAG' || record.get('ESTATUS_CXP') === 'IMP' || record.get('ESTATUS_CXP') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'REMB' || record.get('ESTATUS_CXP') === 'ANT'){
                                   
                                    verifImp = 3;
                               }
                               if (record.get('TIPO_DE_COMPROBANTE') === 'egreso'){
                                   
                                    verifImp = 4;
                               }

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
                    
                    if (verifImp === 2){
                        
                        msgBoxErr('Error','La factura ya esta cancelada');
                        return;   
                        
                    }
                    
                    if (verifImp === 1){
                        
                        msgBoxErr('Error','Dentro de la selección existen facturas ya procesadas en Tesoreria. Favor de verificar')
                        return;   
                    }
                    
                    if (verifImp === 3){
                        
                        msgBoxErr('Error','Dentro de la selección existen facturas ya procesadas A Reembolsos o Anticipos. Favor de verificar')
                        return;   
                    }
                    if (verifImp === 4){
                        
                        msgBoxErr('Error','No se puede enviar a pagar Notas de Credito');
                        return;   
                    }
                    
                   // 
                   
                       var window=  Ext.create('Ext.window.Window', {
                                        title: 'Folio',
                                        height: 160,
                                        width: 250,
                                         modal: true,
                                        layout: 'fit',
                                        items: [
                                            {
                                            xtype:'formactfolio'
                                        }
                                        ],
                                           listeners:{
                                            beforeclose:function(win) {


                                             me.findArchivos();
                                             //  me.findArchivos();

                                            }
                                        }


                                    }).show();


                   
                   
                   var cboFolio = Ext.getCmp('cboFolioTes');
                   var storeFolio = cboFolio.getStore();
                    cboFolio.clearValue();

                       storeFolio.proxy.api.read = 'process/data/BuscaFoliosETesoreria';

                            storeFolio.loadData([], false);
                            storeFolio.load({
                             //   url:'process/data/BuscaFoliosETesoreria',
                                callback: function() {
                                    
                                  
                                
                                }
                            });

                        
                    
//                     var window=  Ext.create('Ext.window.Window', {
//                        title: 'Folio',
//                        height: 160,
//                        width: 250,
//                         modal: true,
//                        layout: 'fit',
//                        items: [
//                            {
//                            xtype:'formactfolio'
//                        }
//                        ],
//                           listeners:{
//                            beforeclose:function(win) {
//                                
//                             
//                             me.findArchivos();
//                             //  me.findArchivos();
//
//                            }
//                        }
//
//
//                    }).show();
             
                }
            }

        }); 
        
        
        
    },
    
     actualizaFolio:function(){
        
          var me = this,
                
                grid = me.getGridArchivos();
              
        me.copiafolio = '0';
        me.folioActualizaTesoOtros = '0';
        me.banderaOtros = '0';
        me.separacionInt = '0';
                  
        var resp = Ext.MessageBox.show({
            title: 'Enviar a Pagar',
            msg: 'Esta seguro que desea actualizar un folio de Tesoreria?',
            icon: Ext.MessageBox.QUESTION,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {
                    
                   var verifImp = 0;
                    
                     var selection = grid.getSelectionModel().getSelection();
                    if (selection.length >= 2){
                        var data = [];
                           for (var i=0; i < selection.length; i++) {

                               var record = selection[i];
                               
                               if (record.get('ESTATUS_CXP') === 'TES' || record.get('ESTATUS_CXP') === 'PAG' || record.get('ESTATUS_CXP') === 'IMP' || record.get('ESTATUS_CXP') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'REMB' || record.get('ESTATUS_CXP') === 'ANT'){
                                   
                                    verifImp = 3;
                               }
                               
                               if (record.get('TIPO_DE_COMPROBANTE') === 'egreso'){
                                   
                                    verifImp = 4;
                               }

                               data.push(record.data);


                               var jsonData = Ext.encode(data);
                               if (Ext.isEmpty(data)) {
                                   msgBoxErr('Error', 'No existen equipos seleccionados');
                                   return;
                               }
                               
                               
                           }
                    }else{

                        var record = selection[0];
                        
                         if (record.get('ESTATUS_CXP') === 'TES' || record.get('ESTATUS_CXP') === 'PAG' || record.get('ESTATUS_CXP') === 'IMP' || record.get('ESTATUS_CXP') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'REMB' || record.get('ESTATUS_CXP') === 'ANT'){
                                   
                                    verifImp = 3;
                               }
                               if (record.get('TIPO_DE_COMPROBANTE') === 'egreso'){
                                   
                                    verifImp = 4;
                               }

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
                    
                    if (verifImp === 2){
                        
                        msgBoxErr('Error','La factura ya esta cancelada');
                        return;   
                        
                    }
                    
                    if (verifImp === 1){
                        
                        msgBoxErr('Error','Dentro de la selección existen facturas ya procesadas en Tesoreria. Favor de verificar')
                        return;   
                    }
                    
                    if (verifImp === 3){
                        
                        msgBoxErr('Error','Dentro de la selección existen facturas ya procesadas A Reembolsos o Anticipos. Favor de verificar')
                        return;   
                    }
                    if (verifImp === 4){
                        
                        msgBoxErr('Error','No se puede enviar a pagar Notas de Credito');
                        return;   
                    }
                    
                   // 
                   
                       var window=  Ext.create('Ext.window.Window', {
                                        title: 'Folio',
                                        height: 160,
                                        width: 250,
                                         modal: true,
                                        layout: 'fit',
                                        items: [
                                            {
                                            xtype:'formactfolio'
                                        }
                                        ],
                                           listeners:{
                                            beforeclose:function(win) {


                                             me.findArchivos();
                                             //  me.findArchivos();

                                            }
                                        }


                                    }).show();


                   
                   
                   var cboFolio = Ext.getCmp('cboFolioTes');
                   var storeFolio = cboFolio.getStore();
                    cboFolio.clearValue();

                       storeFolio.proxy.api.read = 'process/data/BuscaFoliosETesoreria';

                            storeFolio.loadData([], false);
                            storeFolio.load({
                             //   url:'process/data/BuscaFoliosETesoreria',
                                callback: function() {
                                    
                                  
                                
                                }
                            });

                        
                    
//                     var window=  Ext.create('Ext.window.Window', {
//                        title: 'Folio',
//                        height: 160,
//                        width: 250,
//                         modal: true,
//                        layout: 'fit',
//                        items: [
//                            {
//                            xtype:'formactfolio'
//                        }
//                        ],
//                           listeners:{
//                            beforeclose:function(win) {
//                                
//                             
//                             me.findArchivos();
//                             //  me.findArchivos();
//
//                            }
//                        }
//
//
//                    }).show();
             
                }
            }

        }); 
        
    },
    
    
     actualizaFolioOtros:function(){
        
          var me = this,
                
                grid = me.getGridCxpOtros();
              
        me.copiafolio = '0';
        
        
        me.folioActualizaTesoOtros = '1';
        
                  
        var resp = Ext.MessageBox.show({
            title: 'Enviar a Pagar',
            msg: 'Esta seguro que desea actualizar un folio de Tesoreria?',
            icon: Ext.MessageBox.QUESTION,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {
                    
                   var verifImp = 0;
                    
                     var selection = grid.getSelectionModel().getSelection();
                    if (selection.length >= 2){
                        var data = [];
                           for (var i=0; i < selection.length; i++) {

                               var record = selection[i];
                               
                               if (record.get('ESTATUS_CXP_OTROS') === 'TES' || record.get('ESTATUS_CXP_OTROS') === 'PAG' || record.get('ESTATUS_CXP_OTROS') === 'IMP' || record.get('ESTATUS_CXP_OTROS') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               
                               if (record.get('ESTATUS_CXP_OTROS') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               
                               if (record.get('ESTATUS_CXP_OTROS') === 'REMB'){
                                   
                                    verifImp = 3;
                               }
                               
                               if (record.get('TOTAL_COMPROBADO') === '0' && record.get('TIPO_GASTO_OTROS') === 'R'){
                                   
                                    verifImp = 4;
                               }else{
                                   
                                  if(record.get('TOTAL_COMPROBADO') < record.get('TOTAL_OTROS') && record.get('TIPO_GASTO_OTROS') === 'R'){
                                      
                                      verifImp = 4;
                                      
                                  } 
                                   
                                   
                               }

                               data.push(record.data);


                               var jsonData = Ext.encode(data);
                               if (Ext.isEmpty(data)) {
                                   msgBoxErr('Error', 'No existen equipos seleccionados');
                                   return;
                               }
                               
                               
                           }
                    }else{

                        var record = selection[0];
                        
                         if (record.get('ESTATUS_CXP_OTROS') === 'TES' || record.get('ESTATUS_CXP_OTROS') === 'PAG' || record.get('ESTATUS_CXP_OTROS') === 'IMP' || record.get('ESTATUS_CXP_OTROS') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               
                               if (record.get('ESTATUS_CXP_OTROS') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               
                               if (record.get('ESTATUS_CXP_OTROS') === 'REMB'){
                                   
                                    verifImp = 3;
                               }
                               
                               if (record.get('TOTAL_COMPROBADO') === '0' && record.get('TIPO_GASTO_OTROS') === 'R'){
                                   
                                    verifImp = 4;
                               }else{
                                   
                                  if(record.get('TOTAL_COMPROBADO') < record.get('TOTAL_OTROS') && record.get('TIPO_GASTO_OTROS') === 'R'){
                                      
                                      verifImp = 4;
                                      
                                  } 
                                   
                                   
                               }

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
                    
                    if (verifImp === 2){
                        
                        msgBoxErr('Error','La factura ya esta cancelada');
                        return;   
                        
                    }
                    
                    if (verifImp === 1){
                        
                        msgBoxErr('Error','Dentro de la selección existen facturas ya procesadas en Tesoreria. Favor de verificar')
                        return;   
                    }
                    
                    if (verifImp === 3){
                        
                        msgBoxErr('Error','Dentro de la selección existen facturas ya procesadas A Reembolsos. Favor de verificar')
                        return;   
                    }
                    
                    if (verifImp === 4){
                        
                        msgBoxErr('Error','Dentro de la selección existen reembolsos con una comprobacion incompleta. Favor de verificar')
                        return;   
                    }
                    
                   // 
                   
                       var window=  Ext.create('Ext.window.Window', {
                                        title: 'Folio',
                                        height: 160,
                                        width: 250,
                                         modal: true,
                                        layout: 'fit',
                                        items: [
                                            {
                                            xtype:'formactfolio'
                                        }
                                        ],
                                           listeners:{
                                            beforeclose:function(win) {


                                             me.findCxpOtros();
                                             //  me.findArchivos();

                                            }
                                        }


                                    }).show();


                   
                   
                   var cboFolio = Ext.getCmp('cboFolioTes');
                   var storeFolio = cboFolio.getStore();
                    cboFolio.clearValue();

                       storeFolio.proxy.api.read = 'process/data/BuscaFoliosETesoreria';

                            storeFolio.loadData([], false);
                            storeFolio.load({
                             //   url:'process/data/BuscaFoliosETesoreria',
                                callback: function() {
                                    
                                  
                                
                                }
                            });

                        
                    
//                     var window=  Ext.create('Ext.window.Window', {
//                        title: 'Folio',
//                        height: 160,
//                        width: 250,
//                         modal: true,
//                        layout: 'fit',
//                        items: [
//                            {
//                            xtype:'formactfolio'
//                        }
//                        ],
//                           listeners:{
//                            beforeclose:function(win) {
//                                
//                             
//                             me.findArchivos();
//                             //  me.findArchivos();
//
//                            }
//                        }
//
//
//                    }).show();
             
                }
            }

        }); 
        
    },
    
    cancelaFacturaInt:function(){
        
          var me = this,
                
                grid = me.getGridIntercos();
              
        
                  
        var resp = Ext.MessageBox.show({
            title: 'Enviar a Pagar',
            msg: 'Esta seguro que desea enviar cancelar estas Facturas?',
            icon: Ext.MessageBox.QUESTION,
            multiline: true,
            width:450,
            buttons: Ext.Msg.YESNOCANCEL,
            buttonText:{ 
                yes: "Cancelar Factura", 
                no: "Cancelar y Notificar",
                cancel:"Salir"
            },
            fn: function(btn, text) {
                if (btn === 'yes') {
                    
                      
                   var verifImp = 0;
                    
                     var selection = grid.getSelectionModel().getSelection();
                    if (selection.length >= 2){
                        var data = [];
                           for (var i=0; i < selection.length; i++) {

                               var record = selection[i];
                               
                               if (record.get('ESTATUS_CXP') === 'TES' || record.get('ESTATUS_CXP') === 'PAG' || record.get('ESTATUS_CXP') === 'IMP' || record.get('ESTATUS_CXP') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'REMB' || record.get('ESTATUS_CXP') === 'ANT'){
                                   
                                    verifImp = 3;
                               }


                               data.push(record.data);


                               var jsonData = Ext.encode(data);
                               if (Ext.isEmpty(data)) {
                                   msgBoxErr('Error', 'No existen equipos seleccionados');
                                   return;
                               }
                               
                               
                           }
                    }else{

                        var record = selection[0];
                        
                         if (record.get('ESTATUS_CXP') === 'TES' || record.get('ESTATUS_CXP') === 'PAG' || record.get('ESTATUS_CXP') === 'IMP' || record.get('ESTATUS_CXP') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'REMB' || record.get('ESTATUS_CXP') === 'ANT'){
                                   
                                    verifImp = 3;
                               }
                               
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
                    
                    if (verifImp === 2){
                        
                        msgBoxErr('Error','La factura ya esta cancelada');
                        return;   
                        
                    }
                    
                    if (verifImp === 3){
                        
                        msgBoxErr('Error','Dentro de la selección existen facturas ya procesadas en Reembolsos O Anticipos. Favor de Verificar');
                        return;   
                        
                    }

                    
                    if (verifImp === 1){
                        
                        msgBoxErr('Error','Dentro de la selección existen facturas ya procesadas en Tesoreria. Estas no pueden ser canceladas. Debe solicitar cancelacion de folio de pago');
                        return;   
                    }else{
                        
                         grid.setLoading('Buscando...');
                            Ext.Ajax.request({
                              url: 'Pagos/cancelaFactura',
                              timeout: 60000,
                              scope: this,
                              params: {
                                  data: jsonData,
                                  text: text


                              },
                              success: function(response) {
                                  var text = response.responseText;
                                   grid.setLoading(false);
                                  //msgBox("text",text.msg);



                              },
                              callback: function(a, b, c) {
                                  grid.setLoading(false);

                                  var val = Ext.decode(c.responseText);
                                  if (Ext.isEmpty(c.responseText)) {
                                      msgBoxErr('Error', 'Error de comunicacion al Guardar');
                                      return;
                                  }

                                  if(val.success){
                                      msgBox("Guardado",val.msg);
                                  }else{

                                      msgBox("Error",val.msg);
                                  }
                                   me.findArchivosInt();   





                              }
                          });
                        
                        
                    }
                    
                   // 
                   
               
             
                }
                
                  if (btn === 'no') {
                    
                      
                   var verifImp = 0;
                    
                    var compania;
                    var numero;
                    
                     var selection = grid.getSelectionModel().getSelection();
                    if (selection.length >= 2){
                        var data = [];
                           for (var i=0; i < selection.length; i++) {

                               var record = selection[i];
                               
                               if (record.get('ESTATUS_CXP') === 'TES' || record.get('ESTATUS_CXP') === 'PAG' || record.get('ESTATUS_CXP') === 'IMP' || record.get('ESTATUS_CXP') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'REMB' || record.get('ESTATUS_CXP') === 'ANT'){
                                   
                                    verifImp = 3;
                               }


                               data.push(record.data);


                               var jsonData = Ext.encode(data);
                               if (Ext.isEmpty(data)) {
                                   msgBoxErr('Error', 'No existen equipos seleccionados');
                                   return;
                               }
                               
                               
                           }
                    }else{

                        var record = selection[0];
                        
                         if (record.get('ESTATUS_CXP') === 'TES' || record.get('ESTATUS_CXP') === 'PAG' || record.get('ESTATUS_CXP') === 'IMP' || record.get('ESTATUS_CXP') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'REMB' || record.get('ESTATUS_CXP') === 'ANT'){
                                   
                                    verifImp = 3;
                               }
                               
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
                    
                    if (verifImp === 2){
                        
                        msgBoxErr('Error','La factura ya esta cancelada');
                        return;   
                        
                    }
                    
                    if (verifImp === 3){
                        
                        msgBoxErr('Error','Dentro de la selección existen facturas ya procesadas en Reembolsos O Anticipos. Favor de Verificar');
                        return;   
                        
                    }

                    
                    if (verifImp === 1){
                        
                        msgBoxErr('Error','Dentro de la selección existen facturas ya procesadas en Tesoreria. Estas no pueden ser canceladas. Debe solicitar cancelacion de folio de pago');
                        return;   
                    }else{
                        
                     
                        
                         grid.setLoading('Buscando...');
                            Ext.Ajax.request({
                              url: 'Pagos/cancelaFactura',
                              timeout: 60000,
                              scope: this,
                              params: {
                                  data: jsonData,
                                  text: text


                              },
                              success: function(response) {
                                  var text = response.responseText;
                                   grid.setLoading(false);
                                  //msgBox("text",text.msg);



                              },
                              callback: function(a, b, c) {
                                  grid.setLoading(false);

                                  var val = Ext.decode(c.responseText);
                                  if (Ext.isEmpty(c.responseText)) {
                                      msgBoxErr('Error', 'Error de comunicacion al Guardar');
                                      return;
                                  }

                                  if(val.success){
                                      msgBox("Guardado",val.msg);
                                      
                                      me.enviaCorreoCancelacion(data);
                                      
                                  }else{

                                      msgBox("Error",val.msg);
                                  }
                                   me.findArchivosInt();   





                              }
                          });
                        
                        
                    }
                    
                   // 
                   
               
             
                }
            }

        }); 
        
        
        
    },
    
    cancelaFactura:function(){
        
          var me = this,
                
                grid = me.getGridArchivos();
              
        
                  
        var resp = Ext.MessageBox.show({
            title: 'Enviar a Pagar',
            msg: 'Esta seguro que desea enviar cancelar estas Facturas?',
            icon: Ext.MessageBox.QUESTION,
            multiline: true,
            width:450,
            buttons: Ext.Msg.YESNOCANCEL,
            buttonText:{ 
                yes: "Cancelar Factura", 
                no: "Cancelar y Notificar",
                cancel:"Salir"
            },
            fn: function(btn, text) {
                if (btn === 'yes') {
                    
                      
                   var verifImp = 0;
                    
                     var selection = grid.getSelectionModel().getSelection();
                    if (selection.length >= 2){
                        var data = [];
                           for (var i=0; i < selection.length; i++) {

                               var record = selection[i];
                               
                               if (record.get('ESTATUS_CXP') === 'TES' || record.get('ESTATUS_CXP') === 'PAG' || record.get('ESTATUS_CXP') === 'IMP' || record.get('ESTATUS_CXP') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'REMB' || record.get('ESTATUS_CXP') === 'ANT'){
                                   
                                    verifImp = 3;
                               }


                               data.push(record.data);


                               var jsonData = Ext.encode(data);
                               if (Ext.isEmpty(data)) {
                                   msgBoxErr('Error', 'No existen equipos seleccionados');
                                   return;
                               }
                               
                               
                           }
                    }else{

                        var record = selection[0];
                        
                         if (record.get('ESTATUS_CXP') === 'TES' || record.get('ESTATUS_CXP') === 'PAG' || record.get('ESTATUS_CXP') === 'IMP' || record.get('ESTATUS_CXP') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'REMB' || record.get('ESTATUS_CXP') === 'ANT'){
                                   
                                    verifImp = 3;
                               }
                               
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
                    
                    if (verifImp === 2){
                        
                        msgBoxErr('Error','La factura ya esta cancelada');
                        return;   
                        
                    }
                    
                    if (verifImp === 3){
                        
                        msgBoxErr('Error','Dentro de la selección existen facturas ya procesadas en Reembolsos O Anticipos. Favor de Verificar');
                        return;   
                        
                    }

                    
                    if (verifImp === 1){
                        
                        msgBoxErr('Error','Dentro de la selección existen facturas ya procesadas en Tesoreria. Estas no pueden ser canceladas. Debe solicitar cancelacion de folio de pago');
                        return;   
                    }else{
                        
                         grid.setLoading('Buscando...');
                            Ext.Ajax.request({
                              url: 'Pagos/cancelaFactura',
                              timeout: 60000,
                              scope: this,
                              params: {
                                  data: jsonData,
                                  text: text


                              },
                              success: function(response) {
                                  var text = response.responseText;
                                   grid.setLoading(false);
                                  //msgBox("text",text.msg);



                              },
                              callback: function(a, b, c) {
                                  grid.setLoading(false);

                                  var val = Ext.decode(c.responseText);
                                  if (Ext.isEmpty(c.responseText)) {
                                      msgBoxErr('Error', 'Error de comunicacion al Guardar');
                                      return;
                                  }

                                  if(val.success){
                                      msgBox("Guardado",val.msg);
                                  }else{

                                      msgBox("Error",val.msg);
                                  }
                                   me.findArchivos();   





                              }
                          });
                        
                        
                    }
                    
                   // 
                   
               
             
                }
                
                  if (btn === 'no') {
                    
                      
                   var verifImp = 0;
                    
                    var compania;
                    var numero;
                    
                     var selection = grid.getSelectionModel().getSelection();
                    if (selection.length >= 2){
                        var data = [];
                           for (var i=0; i < selection.length; i++) {

                               var record = selection[i];
                               
                               if (record.get('ESTATUS_CXP') === 'TES' || record.get('ESTATUS_CXP') === 'PAG' || record.get('ESTATUS_CXP') === 'IMP' || record.get('ESTATUS_CXP') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'REMB' || record.get('ESTATUS_CXP') === 'ANT'){
                                   
                                    verifImp = 3;
                               }


                               data.push(record.data);


                               var jsonData = Ext.encode(data);
                               if (Ext.isEmpty(data)) {
                                   msgBoxErr('Error', 'No existen equipos seleccionados');
                                   return;
                               }
                               
                               
                           }
                    }else{

                        var record = selection[0];
                        
                         if (record.get('ESTATUS_CXP') === 'TES' || record.get('ESTATUS_CXP') === 'PAG' || record.get('ESTATUS_CXP') === 'IMP' || record.get('ESTATUS_CXP') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'REMB' || record.get('ESTATUS_CXP') === 'ANT'){
                                   
                                    verifImp = 3;
                               }
                               
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
                    
                    if (verifImp === 2){
                        
                        msgBoxErr('Error','La factura ya esta cancelada');
                        return;   
                        
                    }
                    
                    if (verifImp === 3){
                        
                        msgBoxErr('Error','Dentro de la selección existen facturas ya procesadas en Reembolsos O Anticipos. Favor de Verificar');
                        return;   
                        
                    }

                    
                    if (verifImp === 1){
                        
                        msgBoxErr('Error','Dentro de la selección existen facturas ya procesadas en Tesoreria. Estas no pueden ser canceladas. Debe solicitar cancelacion de folio de pago');
                        return;   
                    }else{
                        
                     
                        
                         grid.setLoading('Buscando...');
                            Ext.Ajax.request({
                              url: 'Pagos/cancelaFactura',
                              timeout: 60000,
                              scope: this,
                              params: {
                                  data: jsonData,
                                  text: text


                              },
                              success: function(response) {
                                  var text = response.responseText;
                                   grid.setLoading(false);
                                  //msgBox("text",text.msg);



                              },
                              callback: function(a, b, c) {
                                  grid.setLoading(false);

                                  var val = Ext.decode(c.responseText);
                                  if (Ext.isEmpty(c.responseText)) {
                                      msgBoxErr('Error', 'Error de comunicacion al Guardar');
                                      return;
                                  }

                                  if(val.success){
                                      msgBox("Guardado",val.msg);
                                      
                                      me.enviaCorreoCancelacion(data);
                                      
                                  }else{

                                      msgBox("Error",val.msg);
                                  }
                                   me.findArchivos();   





                              }
                          });
                        
                        
                    }
                    
                   // 
                   
               
             
                }
            }

        }); 
        
        
    },
    
    validaPagosOtros:function(){
        
          var me = this,
                
                grid = me.getGridCxpOtros();
        me.copiafolio = '0';
        this.banderaOtros = '1';
        me.folioActualizaTesoOtros = '0';
        
        this.folioActualizaTeso = '';
                  
        var resp = Ext.MessageBox.show({
            title: 'Enviar a Pagar',
            msg: 'Esta seguro que desea enviar sus registros a Tesoreria?',
            icon: Ext.MessageBox.QUESTION,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {
                    
                   var verifImp = 0;
                    
                     var selection = grid.getSelectionModel().getSelection();
                    if (selection.length >= 2){
                        var data = [];
                           for (var i=0; i < selection.length; i++) {

                               var record = selection[i];
                               
                               if (record.get('ESTATUS_CXP_OTROS') === 'TES' || record.get('ESTATUS_CXP_OTROS') === 'PAG'|| record.get('ESTATUS_CXP_OTROS') === 'IMP' || record.get('ESTATUS_CXP_OTROS') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               if (record.get('ESTATUS_CXP_OTROS') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               if (record.get('ESTATUS_CXP_OTROS') === 'REMB'){
                                   
                                    verifImp = 3;
                               }
                               
                               if (record.get('TOTAL_COMPROBADO') === '0' && record.get('TIPO_GASTO_OTROS') === 'R'){
                                   
                                    verifImp = 4;
                               }else{
                                   
                                  if(record.get('TOTAL_COMPROBADO') < record.get('TOTAL_OTROS')  && record.get('TIPO_GASTO_OTROS') === 'R'){
                                      
                                      verifImp = 4;
                                      
                                  } 
                                   
                                   
                               }

                               data.push(record.data);


                               var jsonData = Ext.encode(data);
                               if (Ext.isEmpty(data)) {
                                   msgBoxErr('Error', 'No existen equipos seleccionados');
                                   return;
                               }
                               
                               
                           }
                    }else{

                        var record = selection[0];
                        
                         if (record.get('ESTATUS_CXP_OTROS') === 'TES' || record.get('ESTATUS_CXP_OTROS') === 'PAG' || record.get('ESTATUS_CXP_OTROS') === 'IMP' || record.get('ESTATUS_CXP_OTROS') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               
                               if (record.get('ESTATUS_CXP_OTROS') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               if (record.get('ESTATUS_CXP_OTROS') === 'REMB'){
                                   
                                    verifImp = 3;
                               }
                               
                                if (record.get('TOTAL_COMPROBADO') === '0' && record.get('TIPO_GASTO_OTROS') === 'R'){
                                   
                                    verifImp = 4;
                               }else{
                                   
                                  if(record.get('TOTAL_COMPROBADO') < record.get('TOTAL_OTROS') && record.get('TIPO_GASTO_OTROS') === 'R'){
                                      
                                      verifImp = 4;
                                      
                                  } 
                                   
                                   
                               }

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
                    
                    if (verifImp === 2){
                        
                        msgBoxErr('Error','La factura ya esta cancelada');
                        return;   
                        
                    }
                    
                    if (verifImp === 1){
                        
                        msgBoxErr('Error','Dentro de la selección existen facturas ya procesadas en Tesoreria. Favor de verificar');
                        return;   
                    }
                    
                    if (verifImp === 3){
                        
                        msgBoxErr('Error','Dentro de la selección existen facturas ya procesadas en Reembolsos. Favor de verificar');
                        return;   
                    }
                    
                    if (verifImp === 4){
                        
                        msgBoxErr('Error','Dentro de la selección existen reembolsos con una comprobacion incompleta. Favor de verificar');
                        return; 
                        
                        
                    }
                    
                   // 
                   
                     var window=  Ext.create('Ext.window.Window', {
                        title: 'Tesoreria',
                        height: 500,
                        width: 900,
                         modal: true,
                         maximizable:true,
                        //layout: 'form',
                        layout: {
                            type: 'vbox',
                            align : 'stretch',
                            pack  : 'start'
                        },
                        items: [
                            {
                            xtype:'gridtesoreria'
                        },
                        {
                            
                            xtype:'panelsurtesoreria'
                            
                        }
                        ],
                           listeners:{
                            beforeclose:function(win) {
                                
                             
                             me.findCxpOtros();
                             //  me.findArchivos();

                            }
                        }


                    }).show();
             
                }
            }

        }); 
        
    },
    
    
    validaPagosInt:function(){
        
         
          var me = this,
                
                grid = me.getGridIntercos();
        me.copiafolio = '0';
        this.banderaOtros = '0';
        me.folioActualizaTesoOtros = '0';
        me.folioActualizaTeso = '';  
        me.separacionInt = '1';
        var resp = Ext.MessageBox.show({
            title: 'Enviar a Pagar',
            msg: 'Esta seguro que desea enviar sus Facturas a Tesoreria?',
            icon: Ext.MessageBox.QUESTION,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {
                    
                   var verifImp = 0;
                    
                     var selection = grid.getSelectionModel().getSelection();
                    if (selection.length >= 2){
                        var data = [];
                           for (var i=0; i < selection.length; i++) {

                               var record = selection[i];
                               
                               if (record.get('ESTATUS_CXP') === 'TES' || record.get('ESTATUS_CXP') === 'PAG'|| record.get('ESTATUS_CXP') === 'IMP' || record.get('ESTATUS_CXP') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               if (record.get('ESTATUS_CXP') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               if (record.get('ESTATUS_CXP') === 'REMB' || record.get('ESTATUS_CXP') === 'ANT'){
                                   
                                    verifImp = 3;
                               }
                               if (record.get('TIPO_DE_COMPROBANTE') === 'egreso'){
                                   
                                    verifImp = 4;
                               }

                               data.push(record.data);


                               var jsonData = Ext.encode(data);
                               if (Ext.isEmpty(data)) {
                                   msgBoxErr('Error', 'No existen equipos seleccionados');
                                   return;
                               }
                               
                               
                           }
                    }else{

                        var record = selection[0];
                        
                         if (record.get('ESTATUS_CXP') === 'TES' || record.get('ESTATUS_CXP') === 'PAG' || record.get('ESTATUS_CXP') === 'IMP' || record.get('ESTATUS_CXP') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               if (record.get('ESTATUS_CXP') === 'REMB' || record.get('ESTATUS_CXP') === 'ANT'){
                                   
                                    verifImp = 3;
                               }
                               
                               if (record.get('TIPO_DE_COMPROBANTE') === 'egreso'){
                                   
                                    verifImp = 4;
                               }

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
                    
                    if (verifImp === 2){
                        
                        msgBoxErr('Error','La factura ya esta cancelada');
                        return;   
                        
                    }
                    
                    if (verifImp === 1){
                        
                        msgBoxErr('Error','Dentro de la selección existen facturas ya procesadas en Tesoreria. Favor de verificar');
                        return;   
                    }
                    
                    if (verifImp === 3){
                        
                        msgBoxErr('Error','Dentro de la selección existen facturas ya procesadas en Reembolsos y anticipos. Favor de verificar');
                        return;   
                    }
                    if (verifImp === 4){
                        
                        msgBoxErr('Error','No se puede enviar a pagar Notas de Credito');
                        return;   
                    }
                    
                   // 
                   
                   // this.folioActualizaTeso = '';
                   
                     var window=  Ext.create('Ext.window.Window', {
                        title: 'Tesoreria',
                        height: 500,
                        width: 900,
                         modal: true,
                         maximizable:true,
                       // layout: 'form',
                       layout: {
                            type: 'vbox',
                            align : 'stretch',
                            pack  : 'start'
                        },
                        items: [
                            {
                            xtype:'gridtesoreria'
                        },
                        {
                            
                            xtype:'panelsurtesoreria'
                            
                        }
                        ],
                           listeners:{
                            beforeclose:function(win) {
                                
                             
                             me.findArchivosInt();
                             //  me.findArchivos();

                            }
                        }


                    }).show();
             
                }
            }

        }); 
        
        
        
    },
    
    validaPagos:function(){
        
        
          var me = this,
                
                grid = me.getGridArchivos();
        me.copiafolio = '0';
        this.banderaOtros = '0';
        me.folioActualizaTesoOtros = '0';
        me.folioActualizaTeso = ''; 
        me.separacionInt = '0';
        var resp = Ext.MessageBox.show({
            title: 'Enviar a Pagar',
            msg: 'Esta seguro que desea enviar sus Facturas a Tesoreria?',
            icon: Ext.MessageBox.QUESTION,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {
                    
                   var verifImp = 0;
                    
                     var selection = grid.getSelectionModel().getSelection();
                    if (selection.length >= 2){
                        var data = [];
                           for (var i=0; i < selection.length; i++) {

                               var record = selection[i];
                               
                               if (record.get('ESTATUS_CXP') === 'TES' || record.get('ESTATUS_CXP') === 'PAG'|| record.get('ESTATUS_CXP') === 'IMP' || record.get('ESTATUS_CXP') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               if (record.get('ESTATUS_CXP') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               if (record.get('ESTATUS_CXP') === 'REMB' || record.get('ESTATUS_CXP') === 'ANT'){
                                   
                                    verifImp = 3;
                               }
                               if (record.get('TIPO_DE_COMPROBANTE') === 'egreso'){
                                   
                                    verifImp = 4;
                               }

                               data.push(record.data);


                               var jsonData = Ext.encode(data);
                               if (Ext.isEmpty(data)) {
                                   msgBoxErr('Error', 'No existen equipos seleccionados');
                                   return;
                               }
                               
                               
                           }
                    }else{

                        var record = selection[0];
                        
                         if (record.get('ESTATUS_CXP') === 'TES' || record.get('ESTATUS_CXP') === 'PAG' || record.get('ESTATUS_CXP') === 'IMP' || record.get('ESTATUS_CXP') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               if (record.get('ESTATUS_CXP') === 'REMB' || record.get('ESTATUS_CXP') === 'ANT'){
                                   
                                    verifImp = 3;
                               }
                               
                               if (record.get('TIPO_DE_COMPROBANTE') === 'egreso'){
                                   
                                    verifImp = 4;
                               }

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
                    
                    if (verifImp === 2){
                        
                        msgBoxErr('Error','La factura ya esta cancelada');
                        return;   
                        
                    }
                    
                    if (verifImp === 1){
                        
                        msgBoxErr('Error','Dentro de la selección existen facturas ya procesadas en Tesoreria. Favor de verificar');
                        return;   
                    }
                    
                    if (verifImp === 3){
                        
                        msgBoxErr('Error','Dentro de la selección existen facturas ya procesadas en Reembolsos y anticipos. Favor de verificar');
                        return;   
                    }
                    if (verifImp === 4){
                        
                        msgBoxErr('Error','No se puede enviar a pagar Notas de Credito');
                        return;   
                    }
                    
                   // 
                   
                   // this.folioActualizaTeso = '';
                   
                     var window=  Ext.create('Ext.window.Window', {
                        title: 'Tesoreria',
                        height: 500,
                        width: 900,
                         modal: true,
                         maximizable:true,
                       // layout: 'form',
                       layout: {
                            type: 'vbox',
                            align : 'stretch',
                            pack  : 'start'
                        },
                        items: [
                            {
                            xtype:'gridtesoreria'
                        },
                        {
                            
                            xtype:'panelsurtesoreria'
                            
                        }
                        ],
                           listeners:{
                            beforeclose:function(win) {
                                
                             
                             me.findArchivos();
                             //  me.findArchivos();

                            }
                        }


                    }).show();
             
                }
            }

        }); 
        
    },
    
     validaRembolsos:function(){
        
          var me = this,
                
                grid = me.getGridArchivos();
              
        
                  
        var resp = Ext.MessageBox.show({
            title: 'Enviar a Pagar',
            msg: 'Esta seguro que desea enviar sus Facturas a Reembolso?',
            icon: Ext.MessageBox.QUESTION,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {
                    
                   var verifImp = 0;
                    
                     var selection = grid.getSelectionModel().getSelection();
                    if (selection.length >= 2){
                        var data = [];
                           for (var i=0; i < selection.length; i++) {

                               var record = selection[i];
                               
                               if (record.get('ESTATUS_CXP') === 'TES' || record.get('ESTATUS_CXP') === 'PAG'|| record.get('ESTATUS_CXP') === 'IMP' || record.get('ESTATUS_CXP') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               if (record.get('ESTATUS_CXP') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'REMB' || record.get('ESTATUS_CXP') === 'ANT'){
                                   
                                    verifImp = 3;
                               }
                               
                               if (record.get('TIPO_DE_COMPROBANTE') === 'egreso'){
                                   
                                    verifImp = 4;
                               }

                               data.push(record.data);


                               var jsonData = Ext.encode(data);
                               if (Ext.isEmpty(data)) {
                                   msgBoxErr('Error', 'No existen equipos seleccionados');
                                   return;
                               }
                               
                               
                           }
                    }else{

                        var record = selection[0];
                        
                         if (record.get('ESTATUS_CXP') === 'TES' || record.get('ESTATUS_CXP') === 'PAG' || record.get('ESTATUS_CXP') === 'IMP' || record.get('ESTATUS_CXP') === 'FG'){
                                   
                                    verifImp = 1;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'CANF'){
                                   
                                    verifImp = 2;
                               }
                               
                               if (record.get('ESTATUS_CXP') === 'REMB' || record.get('ESTATUS_CXP') === 'ANT'){
                                   
                                    verifImp = 3;
                               }
                               if (record.get('TIPO_DE_COMPROBANTE') === 'egreso'){
                                   
                                    verifImp = 4;
                               }

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
                    
                    if (verifImp === 2){
                        
                        msgBoxErr('Error','La factura ya esta cancelada');
                        return;   
                        
                    }
                    
                    if (verifImp === 1){
                        
                        msgBoxErr('Error','Dentro de la selección existen facturas ya procesadas en Tesoreria. Favor de verificar');
                        return;   
                    }
                    
                    if (verifImp === 3){
                        
                        msgBoxErr('Error','La factura ya fue enviada como Reembolso O Anticipo');
                        return;   
                    }
                    
                    if (verifImp === 4){
                        
                        msgBoxErr('Error','No se pueden enviar a pagar Notas de Credito');
                        return;   
                    }
                    
                      var window=  Ext.create('Ext.window.Window', {
                        title: 'Reembolsos',
                        height: 480,
                        width: 900,
                         modal: true,
                        layout: 'fit',
                        maximizable:true,
                        items: [
                            {
                            xtype:'gridrembolsos'
                        }
                        ],
                           listeners:{
                            beforeclose:function(win) {
                                
                             
                             me.findArchivos();
                             //  me.findArchivos();

                            }
                        }


                    }).show();
             
                }
            }

        }); 
        
    },
            
    enviaPagos: function (val,col){
        
          
          var me = this,
                
                grid = me.getGridArchivos();
                
        var resp = Ext.MessageBox.show({
            title: 'Enviar a Pagar',
            msg: 'Esta seguro que desea enviar sus Facturas a Tesoreria?',
            icon: Ext.MessageBox.QUESTION,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {

                     var selection = grid.getSelectionModel().getSelection();
                    if (selection.length >= 2){
                        var data = [];
                           for (var i=0; i < selection.length; i++) {

                               var record = selection[i];

                               data.push(record.data);


                               var jsonData = Ext.encode(data);
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


                               grid.setLoading('Buscando...');
                     Ext.Ajax.request({
                       url: 'Pagos/save',
                       timeout: 60000,
                       scope: this,
                       params: {
                           data: jsonData 


                       },
                       success: function(response) {
                           var text = response.responseText;
                            grid.setLoading(false);
                           //msgBox("text",text.msg);



                       },
                       callback: function(a, b, c) {
                           grid.setLoading(false);

                           var val = Ext.decode(c.responseText);
                           if (Ext.isEmpty(c.responseText)) {
                               msgBoxErr('Error', 'Error de comunicacion al Guardar');
                               return;
                           }

                           if(val.success){
                               msgBox("Guardado",val.msg);
                           }else{

                               msgBox("Error",val.msg);
                           }
                            me.findArchivos();   





                       }
                   });
                }
            }

        }); 
        
        
        
          

    },
    validaSat: function(val,col){
          
          var me = this,
                
                grid = me.getGridArchivos();
                
             //   store = grid.getStore();
        
       // store.suspendEvents();
        
         var selection = grid.getSelectionModel().getSelection();
         if (selection.length >= 2){
             var data = [];
                for (var i=0; i < selection.length; i++) {
                    
                    var record = selection[i];
     
                    data.push(record.data);
       
                  // msgOut("data"+data);
                   
                    var jsonData = Ext.encode(data);
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
                }else
                 me.findArchivos();   

            }
        });
          



        
    },
    
    enviaCorreoOtros: function(folio){
        
         Ext.Ajax.request({
        //    url: 'http://appferaz1.com/CorreosAvisos/correoTesoreria.jsp',
          url: '/CorreosAvisos/correoAntRem.jsp',
             params: {
                 compania : this.companiaSession,
                 folio :folio
                
        
            },
            method: 'GET',
            scope: this,
             timeout: 60000,
            callback: function(records, operation, success) {
              
                
             }
            //timeout: 30000

        });
        
    },
    
    guardaCXPOtros:function(btn){
 //VIEW        var view = Ext.widget('windowcxpotros');
//        view.setTitle('Descarga Sat');
        //   me.findRfcCfdi(btn);
        var me = this;
       var   form1 = btn.up('formcxpotros'),
        win = form1.up('window'),
        basicForm = form1.getForm();

        var rfcStr = basicForm.findField('cxpRFCEmisor').getValue();
        var tipoGasto = basicForm.findField('cboTipo').getValue();

        // me.validaRfc(rfc);
         
         var strCorrecta
         
         if(!Ext.isEmpty(rfcStr)){
             
             if (rfcStr.length === 10){
                 
             }else{
                if (rfcStr.length === 12)
                {

                        strCorrecta = 'X' + rfcStr;
                        msgOut("rfcStr"+rfcStr);
                }
                else
                {
                        strCorrecta = rfcStr;
                }
                var valid = '^(([A-Z]|[a-z]|\s){1})(([A-Z]|[a-z]){3})([0-9]{6})((([A-Z]|[a-z]|[0-9]){3}))';
                var validRfc=new RegExp(valid);
                var matchArray=strCorrecta.match(validRfc);
                if (matchArray===null) {
                        msgBoxErr('Error', 'El RFC: '+rfcStr+ ' tiene una estructura incorrecta');
                        return;

                }
            }
         }
	
              if (basicForm.isValid()) {
                form1.setLoading("Guardando Datos...");
                basicForm.submit({
                    timeout:30000,
                    success: function(form, action) {
                        if(!Ext.isEmpty(action.result))
                            msgOut("guardando1");
                        
                        Ext.Msg.alert('Guardado', 'Gasto guardado con numero: '+action.result.msg);
                        msgOut("guardando2");
                         win.close();
                         msgOut("guardando3");
                         // me.findArchivos();
                          msgOut("guardando4");
                        form1.setLoading(false);
                        
                        me.findCxpOtros();
                        
                     if(tipoGasto === 'R' || tipoGasto === 'A'){    
                        me.enviaCorreoOtros(action.result.msg);
                     }
                        
                       

                    },
                    failure: function(form, action) {
                        form1.setLoading(false);
                        if(!Ext.isEmpty(action.result))
                        Ext.Msg.alert('Error', action.result.msg);
                        form1.setLoading(false);
                    },
                     callback: function(records, operation, val3) {
                   
                    
//                    me.procesarPolizas(modified, 0, me, grid);

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
        
    },
    
    addCXP:function(){

        var view = Ext.widget('windowcxpotros');
        view.setTitle('Agregar CXP');
        
         var basicForm = view.down('formcxpotros').getForm();
         var storeMoneda = basicForm.findField('cboMoneda').getStore();
                          storeMoneda.proxy.extraParams.query = "";
                         storeMoneda.load({
                             callback:function(val1){
                                  
                                
                                    basicForm.findField('cboMoneda').setValue('MXN');
                             }
                         });
        
  

             basicForm.findField('txtTIPO_CAMBIO').setVisible(false);
    
    
        
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
    guardaDatosSat: function(btn) {

        var me = this,
                form1 = btn.up('formsat'),
                win = form1.up('window'),
                basicForm = form1.getForm();

        var bandera = basicForm.findField('txtSaveDat').getValue();
        var secuencia = basicForm.findField('txtSecuencia').getValue();
//              var termUso = basicForm.findField('acceptTerms').getValue();
//              
//              if (termUso === false){
//                  
//                   Ext.Msg.alert('Terminos de Uso', 'Debe de aceptar los terminos de uso');
//                   return;
//              }

        msgOut('bandera' + bandera);



     //   if (bandera === true) {

            //   if (Ext.isEmpty(secuencia)){

            // basicForm.findField('txtOperacion').setValue('I');

            if (basicForm.isValid()) {
                form1.setLoading("Guardando Datos...");
                
           Ext.Ajax.request({
            url: 'CfdiSat/saveDatos',
            method: 'POST',
             params: {
                    rfc:basicForm.findField('txt_RFC').getValue(),
                    password:basicForm.findField('txtPassword').getValue(),
                    secuencia: basicForm.findField('txtSecuencia').getValue(),
                    periodo: basicForm.findField('cboCxpPeriodo').getValue(),
                    calendario: basicForm.findField('cboCxpCalendario').getValue(),
                    txtSaveDat:bandera

            },
            scope: this,
            callback: function(records, operation, success) {
                if (Ext.isEmpty(success.responseText))
                    return;
                var val = Ext.decode(success.responseText);
                //if (Ext.isEmpty(val))
                  //  return;
                if (val.success) {
                   win.close();
                        Ext.Msg.alert('Guardado', 'Facturas Guardadas correctamente');


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
                                    
                                      form1.setLoading(false);
                                      Ext.Msg.alert('Error', 'Error en la lectura de las facturas');
                                }
                            },
                            timeout: 30000

                        });

                        form1.setLoading(false);

                } else if (!val.success) {
                     form1.setLoading(false);
                     Ext.Msg.alert('Error', 'Error al descargar las facturas');
                }
            },
            timeout: 180000

        });
                
//                basicForm.submit({
//                    success: function(form, action) {
                         
//                         win.close();
//                        Ext.Msg.alert('Guardado', action.result.msg);
//
//
//                        Ext.Ajax.request({
//                            url: 'process/data/BuscaRfcCfdi',
//                            method: 'GET',
//                            scope: this,
//                            callback: function(records, operation, success) {
//                                if (Ext.isEmpty(success.responseText))
//                                    return;
//                                var val = Ext.decode(success.responseText);
//                                if (Ext.isEmpty(val))
//                                    return;
//                                if (val.success) {
//                                    var secuencia = val.data[0].ID;
//                                    var rfc = val.data[0].RFC;
//                                    var password = val.data[0].PASSWORD;
//
//
//                                    basicForm.findField('txt_RFC').setValue(rfc);
//                                    basicForm.findField('txtPassword').setValue(password);
//                                    basicForm.findField('txtSecuencia').setValue(secuencia);
//                                    basicForm.findField('txtSaveDat').setValue(true);
//
//                                } else if (!val.success) {
//                                }
//                            },
//                            timeout: 30000
//
//                        });
//
//                        form1.setLoading(false);



               //     },
//                    failure: function(form, action) {
////                        form1.setLoading(false);
////                        Ext.Msg.alert('Error', 'Error en la lectura de las facturas');
//                    }
//                });


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
    
    guardarCXPInt:function(){
        
        var me = this,
                grid = me.getGridIntercos(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        //  var record = records[0];

        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

        if (!Ext.isEmpty(news) || !Ext.isEmpty(modified)) {






            var fechaVen;
            var i = 0;
            if (!Ext.isEmpty(modified)) {

                for (i = 0; i < modified.length; i++) {

                    if (Ext.isDate(modified[i].data.CXP_FECHA)) {



                        fechaVen = Ext.Date.format(modified[i].data.CXP_FECHA, 'd/m/Y');
                        modified[i].data.CXP_FECHA = fechaVen;


                    }
                    if (!Ext.isEmpty(modified[i].data.NUMERO_POL)) {


                         msgBoxErr("Error", "La factura con numero: "+ modified[i].data.NUMERO+" no se puede modificar tiene una poliza relacionada con numero: "+ modified[i].data.NUMERO_POL+", fecha: "+modified[i].data.FECHA_POL+" y tipo: "+modified[i].data.TIPO_POLIZA);
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
                    me.findArchivos();
//                    me.procesarPolizas(modified, 0, me, grid);

                }

            });

        }
        
        
    },
    
    guardarCXP: function() {

        var me = this,
                grid = me.getGridArchivos(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        //  var record = records[0];

        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

        if (!Ext.isEmpty(news) || !Ext.isEmpty(modified)) {






            var fechaVen;
            var i = 0;
            if (!Ext.isEmpty(modified)) {

                for (i = 0; i < modified.length; i++) {

                    if (Ext.isDate(modified[i].data.CXP_FECHA)) {



                        fechaVen = Ext.Date.format(modified[i].data.CXP_FECHA, 'd/m/Y');
                        modified[i].data.CXP_FECHA = fechaVen;


                    }
                    if (!Ext.isEmpty(modified[i].data.NUMERO_POL)) {


                         msgBoxErr("Error", "La factura con numero: "+ modified[i].data.NUMERO+" no se puede modificar tiene una poliza relacionada con numero: "+ modified[i].data.NUMERO_POL+", fecha: "+modified[i].data.FECHA_POL+" y tipo: "+modified[i].data.TIPO_POLIZA);
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
                    me.findArchivos();
//                    me.procesarPolizas(modified, 0, me, grid);

                }

            });

        }

    },
    
     guardarCXPOtros: function() {

        var me = this,
                grid = me.getGridCxpOtros(),
                records = grid.getSelectionModel().getSelection(),
                store = grid.getStore();
        //  var record = records[0];

        var news = store.getNewRecords();
        var modified = store.getUpdatedRecords();

        console.log('gusrdando cxp otros');

        if (!Ext.isEmpty(news) || !Ext.isEmpty(modified)) {






            var fechaVen;
            var i = 0;
            if (!Ext.isEmpty(modified)) {

                for (i = 0; i < modified.length; i++) {
                     
                     console.log();
                     
                    if (Ext.isDate(modified[i].data.CXP_FECHA_OTROS)) {



                        fechaVen = Ext.Date.format(modified[i].data.CXP_FECHA_OTROS, 'd/m/Y');
                        modified[i].data.CXP_FECHA_OTROS = fechaVen;


                    }
//                    if (!Ext.isEmpty(modified[i].data.NUMERO_POL)) {
//
//
//                         msgBoxErr("Error", "La factura con numero: "+ modified[i].data.NUMERO+" no se puede modificar tiene una poliza relacionada con numero: "+ modified[i].data.NUMERO_POL+", fecha: "+modified[i].data.FECHA_POL+" y tipo: "+modified[i].data.TIPO_POLIZA);
//                         return;
//                         
//
//                    }
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
                    me.findCxpOtros();
//                    me.procesarPolizas(modified, 0, me, grid);

                }

            });

        }

    },
    verConvertidor: function() {

        var me = this,
                grid = me.getGridArchivos(),
                store = grid.getStore();

        var controllerFE = me.getController('AppConvertidor.controller.Main');
        //      controllerFE.windowParent = window;
//          controllerFE.storePolizas = store;
//            controllerFE.isRelacion = false;
//             controllerFE.polizaNumero=null;
//           controllerFE.polizaTipo=null;
//              controllerFE.polizaFecha=null;
        var vista = controllerFE.getView(controllerFE.views[0]).create();
//          window.add(vista);
//          window.show();

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
    deleteArchivoOtros: function(){
        
                var me = this,
                grid = me.getGridCxpOtros(),
                records = grid.getSelectionModel().getSelection(),
                storeArch = grid.getStore();

        var selection = grid.getSelectionModel().getSelection();

        //var record = selection[0];

        if (Ext.isEmpty(selection)) {
            msgBoxErr("Error", "No ha seleccionado ningun registro");
            return;
        }
        
       
        
                
        Ext.MessageBox.show({
            title: 'Cancelar Registro',
            msg: 'Esta seguro que desea borrar el registro?',
            icon: Ext.MessageBox.WARNING,
            buttons: Ext.Msg.YESNO,
            fn: function(btn, text) {
                if (btn === 'yes') {


                    var data = [];
                    var err = '0';

                    for (var i = 0; i < selection.length; i++) {
                         
                        var record = selection[i];
                     if (record.data.ESTATUS_CXP_OTROS === 'IMP' || record.data.ESTATUS_CXP_OTROS === 'TES' || record.data.ESTATUS_CXP_OTROS === 'FG' || record.data.ESTATUS_CXP_OTROS === 'PAG'){
                         
                         msgBoxErr("Error", "Existen datos procesados en tesoreria, imposible eliminar registro, favor de verficar");
                         err = '1';
                         return;
                         
                         
                         
                     }
                     
                      if (!Ext.isEmpty(record.data.NUMERO_RELACION_OTRAS)){
                         
                         msgBoxErr("Error", "Existen facturas relacionadas, no se puede modificar el registro");
                         err = '1';
                         return;
                         
                         
                         
                     }
                     
                        data.push(record.data);

                        msgOut('data', data);


                    }
                    
                    if (err === '1'){
                        
                        return;
                        
                    }



//
//               var data = [];
//               
//                    data.push(record.data);



                    var jsonData = Ext.encode(data);
                    if (Ext.isEmpty(data)) {
                        msgBoxErr('Error', 'No existen equipos seleccionados');
                        return;
                    }



                    grid.setLoading("Borrando Registro...");
                    Ext.Ajax.request({
                        url: 'Pagos/deleteOtros',
                        timeout: 60000,
                        scope: this,
                        params: {
                            data: jsonData


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
                                me.findCxpOtros();

                            } else {

                                msgBoxErr('Error en el Borrado', res.msg);

                            }
                        }
                    });


                }

            }

        });
        
    },
    
    deleteArchivo: function() {

        var me = this,
                grid = me.getGridArchivos(),
                records = grid.getSelectionModel().getSelection(),
                storeArch = grid.getStore();

        var selection = grid.getSelectionModel().getSelection();

        //var record = selection[0];

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
                     if (!Ext.isEmpty(record.data.NUMERO_POL)){
                         
                         msgBoxErr("Error", "La factura con folio: "+ record.data.FOLIO+" no se puede eliminar tiene una poliza relacionada con numero: "+ record.data.NUMERO_POL+", fecha: "+record.data.FECHA_POL+" y tipo: "+record.data.TIPO_POLIZA);
                         return;
                         
                         
                     }
                        data.push(record.data);

                        msgOut('data', data);


                    }



//
//               var data = [];
//               
//                    data.push(record.data);



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

//                     var cboConvertidor = Ext.getCmp('cboConvertidor');
//       
//                    var storeConv = cboConvertidor.getStore();
//                    Ext.getCmp('cboConvertidor').clearValue();
//                    storeConv.removeAll();
                            storeArch.proxy.extraParams.query = "";
//                    storeConv.load();
//                    
//                    var text = response.responseText;
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

                                msgBox('Borrado', 'Borrado con Exito');

                            } else {

                                msgBoxErr('Error en el Borrado', res.msg);

                            }
                        }
                    });


                }

            }

        });

    },
    
    cleanFiltersOtro: function() {

        var me = this,
                grid = me.getGridCxpOtros();
        grid.filters.clearFilters();

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
    cleanFiltersArchInt:function(){
        
        var me = this,
                grid = me.getGridIntercos();
        grid.filters.clearFilters();
        
        
    },
            
   cleanFiltersCXP:function(){
        var me = this,
                grid = me.getGridRelFact();
        grid.filters.clearFilters();
       
   },
   
   cleanFiltersCXPInt:function(){
        var me = this,
                grid = me.getGridRelFactInt();
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
                    win.close();


                },
                callback: function(a, b, c) {
                    grid.setLoading(false);
                    win.close();

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
    
    actIdCCCxp: function() {

        var me = this,
                grid = me.getGridArchivos(),
                  gridC = me.getGridCcostos(),
                store = grid.getStore();
        store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        var selectionC = gridC.getSelectionModel().getSelection();
        
         if (Ext.isEmpty(selection)){
            
            msgBoxErr('Error','No ha seleccionado facturas a relacionar');
            return;
        }
        
        var recordC = selectionC[0];
        
        var val = recordC.get('CTO_CTO_CC');
        if (selection.length >= 2) {
            for (var i = 0; i < selection.length; i++) {
                //  msgOut("dentro de select: "+selection[i].data.NOMIDCONCGASTO);

                var record = selection[i];

               //if(record.get('TIPO_CXP') === 'C'){ 
                   record.set('NOMCC', val);
              // }

            }
        } else {
            
               var selectGrid = grid.getSelectionModel().getSelection()[0];
            
                
                        selectGrid.set('NOMCC', val);
               
  
            
//            store.each(function(rec) {
//                //rec.set(col, true);
//
//                 msgOut('rec'+rec.get('TIPO_CXP'));
//                if (col === 'NOMCC') {
//
//                    // if (Ext.isEmpty(rec.get('NUMERO_POL'))){
//                    //  rec.set('NOMIDCONCGASTO', val);
//                 //   if(rec.get('TIPO_CXP') === 'C'){ 
//                         rec.set('NOMCC', val);
//                   // }
//                    // }
//
//                }
//
//
//            });
        }
        store.resumeEvents();
        grid.getView().refresh();

    },
    
    actIdCCInt:function(val, col){
        
         var me = this,
                grid = me.getGridIntercos(),
                store = grid.getStore();
        store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {
            for (var i = 0; i < selection.length; i++) {
                //  msgOut("dentro de select: "+selection[i].data.NOMIDCONCGASTO);

                var record = selection[i];

               //if(record.get('TIPO_CXP') === 'C'){ 
                   record.set('NOMCC', val);
              // }

            }
        } else {
            
               var selectGrid = grid.getSelectionModel().getSelection()[0];
            
                
                        selectGrid.set('NOMCC', val);
               
  
            
//            store.each(function(rec) {
//                //rec.set(col, true);
//
//                 msgOut('rec'+rec.get('TIPO_CXP'));
//                if (col === 'NOMCC') {
//
//                    // if (Ext.isEmpty(rec.get('NUMERO_POL'))){
//                    //  rec.set('NOMIDCONCGASTO', val);
//                 //   if(rec.get('TIPO_CXP') === 'C'){ 
//                         rec.set('NOMCC', val);
//                   // }
//                    // }
//
//                }
//
//
//            });
        }
        store.resumeEvents();
        grid.getView().refresh();

        
        
    },
    
    actIdCC: function(val, col) {

        var me = this,
                grid = me.getGridArchivos(),
                store = grid.getStore();
        store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {
            for (var i = 0; i < selection.length; i++) {
                //  msgOut("dentro de select: "+selection[i].data.NOMIDCONCGASTO);

                var record = selection[i];

               //if(record.get('TIPO_CXP') === 'C'){ 
                   record.set('NOMCC', val);
              // }

            }
        } else {
            
               var selectGrid = grid.getSelectionModel().getSelection()[0];
            
                
                        selectGrid.set('NOMCC', val);
               
  
            
//            store.each(function(rec) {
//                //rec.set(col, true);
//
//                 msgOut('rec'+rec.get('TIPO_CXP'));
//                if (col === 'NOMCC') {
//
//                    // if (Ext.isEmpty(rec.get('NUMERO_POL'))){
//                    //  rec.set('NOMIDCONCGASTO', val);
//                 //   if(rec.get('TIPO_CXP') === 'C'){ 
//                         rec.set('NOMCC', val);
//                   // }
//                    // }
//
//                }
//
//
//            });
        }
        store.resumeEvents();
        grid.getView().refresh();

    },
    actIdConceptoCxp: function(){
        
         var me = this,
                grid = me.getGridArchivos(),
                gridC = me.getGridConceptos(),
                win = gridC.up('window'),
               
                store = grid.getStore();
        store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        
        if (Ext.isEmpty(selection)){
            
            msgBoxErr('Error','No ha seleccionado facturas a relacionar');
            return;
        }
        
        var selectionC = gridC.getSelectionModel().getSelection();
        
        var recordC = selectionC[0];
        
        var val = recordC.get('CONCEPTO_CONC');
        
        if (selection.length >= 2) {
            for (var i = 0; i < selection.length; i++) {
                //  msgOut("dentro de select: "+selection[i].data.NOMIDCONCGASTO);

                var record = selection[i];

                // record.set('NOMIDCONCGASTO', val);
                //if(record.get('TIPO_CXP') === 'C'){ 
                record.set('CONCEPTO', val);
               // }


            }
        } else {
            
             var selectGrid = grid.getSelectionModel().getSelection()[0];
            
                
                        selectGrid.set('CONCEPTO', val);
               
  
             
       
        }
        store.resumeEvents();
        grid.getView().refresh();
        
        
    },
    actIdConceptoInt:function(val, col){
        
        var me = this,
                grid = me.getGridIntercos(),
                store = grid.getStore();
        store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {
            for (var i = 0; i < selection.length; i++) {
                //  msgOut("dentro de select: "+selection[i].data.NOMIDCONCGASTO);

                var record = selection[i];

                // record.set('NOMIDCONCGASTO', val);
                //if(record.get('TIPO_CXP') === 'C'){ 
                record.set('CONCEPTO', val);
               // }


            }
        } else {
            
             var selectGrid = grid.getSelectionModel().getSelection()[0];
            
                
                        selectGrid.set('CONCEPTO', val);
               
  
             
       
        }
        store.resumeEvents();
        grid.getView().refresh();
        
        
    },
    actIdConcepto: function(val, col) {

        var me = this,
                grid = me.getGridArchivos(),
                store = grid.getStore();
        store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {
            for (var i = 0; i < selection.length; i++) {
                //  msgOut("dentro de select: "+selection[i].data.NOMIDCONCGASTO);

                var record = selection[i];

                // record.set('NOMIDCONCGASTO', val);
                //if(record.get('TIPO_CXP') === 'C'){ 
                record.set('CONCEPTO', val);
               // }


            }
        } else {
            
             var selectGrid = grid.getSelectionModel().getSelection()[0];
            
                
                        selectGrid.set('CONCEPTO', val);
               
  
             
       
        }
        store.resumeEvents();
        grid.getView().refresh();

    },
    actFechaCxpInt:function(val, col){
        
         var me = this,
                grid = me.getGridIntercos(),
                store = grid.getStore();
        store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {
            for (var i = 0; i < selection.length; i++) {
                msgOut("dentro de select: " + selection[i].data.CXP_FECHA);

                var record = selection[i];
                // if (Ext.isEmpty(record.get('NUMERO_POL'))){
               // if(record.get('TIPO_CXP') === 'C'){ 
                    record.set('CXP_FECHA', val);
                //}
                // }
            }
        } else {
            
            
               var selectGrid = grid.getSelectionModel().getSelection()[0];
            
                
                        selectGrid.set('CXP_FECHA', val);
               
  
            
//            store.each(function(rec) {
//                //rec.set(col, true);
//
//                msgOut('col' + col);
//                if (col === 'CXP_FECHA') {
//                    //if (Ext.isEmpty(rec.get('NUMERO_POL'))){
//               //    if(rec.get('TIPO_CXP') === 'C'){ 
//                    rec.set('CXP_FECHA', val);
//                 //  }
//                    //}
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
    actFechaCxp: function(val, col) {

        var me = this,
                grid = me.getGridArchivos(),
                store = grid.getStore();
        store.suspendEvents();

        var selection = grid.getSelectionModel().getSelection();
        if (selection.length >= 2) {
            for (var i = 0; i < selection.length; i++) {
                msgOut("dentro de select: " + selection[i].data.CXP_FECHA);

                var record = selection[i];
                // if (Ext.isEmpty(record.get('NUMERO_POL'))){
               // if(record.get('TIPO_CXP') === 'C'){ 
                    record.set('CXP_FECHA', val);
                //}
                // }
            }
        } else {
            
            
               var selectGrid = grid.getSelectionModel().getSelection()[0];
            
                
                        selectGrid.set('CXP_FECHA', val);
               
  
            
//            store.each(function(rec) {
//                //rec.set(col, true);
//
//                msgOut('col' + col);
//                if (col === 'CXP_FECHA') {
//                    //if (Ext.isEmpty(rec.get('NUMERO_POL'))){
//               //    if(rec.get('TIPO_CXP') === 'C'){ 
//                    rec.set('CXP_FECHA', val);
//                 //  }
//                    //}
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
    
    imprimirXMLInt:function(){
        
          var me = this,
                grid = me.getGridIntercos(),
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
        var mes = (fechaM.getMonth()+1).toString();
        var ano = fechaM.getFullYear().toString();
        
        if (mes < 10 && ano < 2018){
            
            mes = '0' + mes;
            
        }
        
     
        var xml = record.get('XML');
        var string;
        if (ano > '2015'){
             string = Ext.String.format(
                    'http://' + window.location.host + '/carga_erp/xml/{0}/{1}/{2}/{3}',
                    //'/empres/XML/{0}/{1}',
                    compania,
                    ano,
                    mes,
                    xml
                );
         }else{
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
            maximizable : true,
            layout: 'fit',
            items: {  // Let's put an empty grid in just to illustrate fit layout
                xtype: 'panel',
                //title: 'My PDF',
                width: 600,
                height: 400,
                items:[ {
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
    
     imprimirXML:function(){
         var me = this,
                grid = me.getGridArchivos(),
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
        var mes = (fechaM.getMonth()+1).toString();
        var ano = fechaM.getFullYear().toString();
        
        if (mes < 10 && ano < 2018){
            
            mes = '0' + mes;
            
        }
        
     
        var xml = record.get('XML');
        var string;
        if (ano > '2015'){
             string = Ext.String.format(
                    'http://' + window.location.host + '/carga_erp/xml/{0}/{1}/{2}/{3}',
                    //'/empres/XML/{0}/{1}',
                    compania,
                    ano,
                    mes,
                    xml
                );
         }else{
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
            maximizable : true,
            layout: 'fit',
            items: {  // Let's put an empty grid in just to illustrate fit layout
                xtype: 'panel',
                //title: 'My PDF',
                width: 600,
                height: 400,
                items:[ {
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
        imprimirReembolso: function() {

             var me = this,
                grid = me.getGridCxpOtros(),
                records = grid.getSelectionModel().getSelection();
        
        
        var selection = grid.getSelectionModel().getSelection();
                
                
           
        var record = selection[0];

        if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado XML");
            return;
        }
        var compania = record.get('COMPANIA_OTROS');
       // var xml = record.get('XML');
        var numero = record.get('NUMERO_OTROS');
       // xml = xml.replace('.XML', '.pdf');
        
          var string = Ext.String.format(
              'http://appferaz1.com/fenius/servlet/ada_ServAppletSqr?dic_sistema=empres&catalogo=JREP_Impresion_Anticipos&dic_idioma=Esp&dic_estado=66&ck_htm=on&compania={0}&id={1}&reporte=JREP_Impresion_Anticipos',
                   compania,
                   numero
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
        

        // window.open(string);

    },
    
        imprimirArchivoCan: function() {


             var me = this,
                grid = me.getGridFactCan(),
                records = grid.getSelectionModel().getSelection();
        
        
        var selection = grid.getSelectionModel().getSelection();
        
        var record = selection[0];
        
         if (Ext.isEmpty(record)) {
            msgBoxErr("Error", "No ha seleccionado ningun registro");
            return;
        }
        
        
        var url = record.get('URL_CAN')

    
        
          var string = Ext.String.format(
              'http://appferaz1.com{0}',
                   url
                );
                    
           
          
        
        Ext.create('Ext.window.Window', {
            title: 'Archivo',
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

    },
    imprimirPDFInt:function(){
        
        
             var me = this,
                grid = me.getGridIntercos(),
                records = grid.getSelectionModel().getSelection();
        
        
        var selection = grid.getSelectionModel().getSelection();
        
 
              var dataNum = '';
           
                     for (var i=0; i < selection.length; i++) {
                    
                    var record = selection[i];
                    
                  
                      
                      if (i === selection.length - 1){
                          
                          dataNum = dataNum+record.get('NUMERO');
                          
                      }else{
                      
                            dataNum = dataNum+record.get('NUMERO')+',';
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
    imprimirPDF: function() {
//        var me = this,
//                grid = me.getGridArchivos(),
//                records = grid.getSelectionModel().getSelection();
//
//        var record = records[0];
//
//        if (Ext.isEmpty(record)) {
//            msgBoxErr("Error", "No ha seleccionado XML");
//            return;
//        }
//        var compania = record.get('COMPANIA');
//        // var xml = record.get('XML');
//        // xml = xml.replace('.xml', '.pdf');
//        // xml = xml.replace('.XML', '.pdf');
//
//        var pdf = record.get('PDF');
//
//
//        var string = Ext.String.format(
//                'http://' + window.location.host + '/carga_erp/xml/{0}/{1}',
//                //'/empres/XML/{0}/{1}',
//                compania,
//                pdf
//                );
//                    
//           Ext.Ajax.request({
//                        url: 'dirdatacxp/buscarPDF',
//                        params: {
//                            pdf: pdf
//                        },
//                        method: 'POST',
//                        scope: this,
//                        callback: function(records, operation, success) {
//                            if (Ext.isEmpty(success.responseText))
//                                return;
//                            var val = Ext.decode(success.responseText);
//                            if (Ext.isEmpty(val))
//                                return;
//                          
//                            if (val.success) {
//                                
//                                  Ext.create('Ext.window.Window', {
//                                    title: 'PDF',
//                                    height: 500,
//                                    width: 500,
//                                    minimizable: true,
//                                    maximizable: true,
//                                    layout: 'fit',
//                                    items: {// Let's put an empty grid in just to illustrate fit layout
//                                        xtype: 'panel',
//                                        //title: 'My PDF',
//                                        width: 600,
//                                        height: 400,
//                                        items: {
//                                            xtype: 'component',
//                                            autoEl: {
//                                                tag: 'iframe',
//                                                style: 'height: 100%; width: 100%; border: none',
//                                                src: string
//                                            }
//                                        }
//                                    }
//                                }).show();
//                                
//
//                            } else if (!val.success) {
//                                msgBoxErr('Error', val.msg);
//                            }
//                        },
//                        timeout: 30000
//
//                    });

             var me = this,
                grid = me.getGridArchivos(),
                records = grid.getSelectionModel().getSelection();
        
        
        var selection = grid.getSelectionModel().getSelection();
        
 
              var dataNum = '';
           
                     for (var i=0; i < selection.length; i++) {
                    
                    var record = selection[i];
                    
                  
                      
                      if (i === selection.length - 1){
                          
                          dataNum = dataNum+record.get('NUMERO');
                          
                      }else{
                      
                            dataNum = dataNum+record.get('NUMERO')+',';
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
    setConcGasto: function(conc) {
        msgOut(conc);
        var me = this,
                grid = me.getGridArchivos(),
                records = grid.getSelectionModel().getSelection();

        var record = records[0];

        record.set('NO_CASO', conc);


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
    findCxpOtros: function(otros,calendario,periodo,periodoFinal){
        
        var me = this,
                gridOtros = me.getGridCxpOtros(),
                gridInfo = me.getGridInfoFactOtras(),
                storeInfo = gridInfo.getStore(), 
                storeOtros = gridOtros.getStore();
        if (Ext.isEmpty(otros))
            otros = '';
         if (Ext.isEmpty(calendario)){   
            calendario = this.calendarioSysOtros;
            Ext.getCmp('cboCalendarioFeCxpOtros').setValue(calendario);
        }else{
            this.calendarioSysOtros = calendario;
            Ext.getCmp('cboCalendarioFeCxpOtros').setValue(calendario);
            
        }
        if (Ext.isEmpty(periodo)){
            periodo = this.periodoSysOtros;

             Ext.getCmp('cboPeriodoFeCxpOtros').setValue(periodo);
       
        }else{
            
            this.periodoSysOtros = periodo;

             Ext.getCmp('cboPeriodoFeCxpOtros').setValue(periodo);
            
        }
        
        console.log('periodo final: '+periodoFinal);
        
        if (Ext.isEmpty(periodoFinal)){
            periodoFinal = this.periodoSysOtrosFinal;

             Ext.getCmp('cboPeriodoFeCxpOtrosFinal').setValue(periodoFinal);
       
        }else{
            
            this.periodoSysOtrosFinal = periodoFinal;

             Ext.getCmp('cboPeriodoFeCxpOtrosFinal').setValue(periodoFinal);
            
        }
        
        storeOtros.proxy.extraParams.otros = otros;
        storeOtros.proxy.extraParams.calendario = calendario;
        storeOtros.proxy.extraParams.periodo = periodo;
        storeOtros.proxy.extraParams.periodoFinal = periodoFinal;
       
       var urlOtras;
       
                 Ext.Ajax.request({
                            url: 'process/data/BuscaPermisosOtrosGastos',
                            method: 'GET',
//                            params:{
//                                
//                               origen : 'CP'
//                            },
                            scope: this,
                            callback: function(records, operation, success) {
                                if (Ext.isEmpty(success.responseText))
                                    return;
                                var val = Ext.decode(success.responseText);
                                if (Ext.isEmpty(val))
                                    return;
                                if (val.success) {
                                    var estatus = val.data[0].ESTATUS;
                                 
                                    if(estatus === 'I' || estatus === 'U'){
                                        
                                        urlOtras='process/data3/BuscaArchivosCXPOtrosEmpleado';
                                        
                                        
                                        
                                    }else{
                                       
                                        urlOtras='process/data3/BuscaArchivosCXPOtros';
                                    
                                    }


                                } else if (!val.success) {
                                    
                                    urlOtras='process/data3/BuscaArchivosCXPOtros';
                                    
                                }
                                
                                storeOtros.proxy.api.read = urlOtras;
                                gridOtros.setLoading('Buscando...');
                                storeOtros.loadData([], false);
                                storeOtros.load({
                                    callback: function() {
                                        gridOtros.setLoading(false);
                                        gridInfo.setLoading('Buscando...');
                                        storeInfo.loadData([], false);
                                        gridInfo.setLoading(false);
                                    }
                                });

                                
                                
                            },
                            timeout: 30000

                        });
       
        
        
        
    },
        findArchivosInt: function(factura,calendario,periodo,periodoFin) {

        var me = this,
                gridArch = me.getGridIntercos(),
                storeArch = gridArch.getStore();
        if (Ext.isEmpty(factura))
            factura = '';
         if (Ext.isEmpty(calendario)){   
            calendario = this.calendarioSys;
            Ext.getCmp('cboCalendarioFeCxpInt').setValue(calendario);
        }
        if (Ext.isEmpty(periodo)){
            periodo = this.periodoSys;

             Ext.getCmp('cboPeriodoFeCxpInt').setValue(periodo);
       
        }
        if (Ext.isEmpty(periodoFin)){
            periodoFin = this.periodoSysFin;

             Ext.getCmp('cboPeriodoFeCxpFinInt').setValue(periodoFin);
       
        }
        
        storeArch.proxy.extraParams.FACTURA = factura;
        storeArch.proxy.extraParams.calendario = calendario;
        storeArch.proxy.extraParams.periodo = periodo;
        storeArch.proxy.extraParams.periodoFin = periodoFin;
       
       var dirBus = '';
        
//        var ver = Ext.getCmp('cboverCXP').getValue();
//        
//         if (Ext.isEmpty(ver)){
             
            dirBus = 'process/data3/BuscaArchivosCXPIntercosP';
             
//         }
//         if (ver === 'F'){
//             
//            dirBus = 'process/data3/BuscaArchivosCXP';
//             
//         }
//         if (ver === 'P'){
//             
//            dirBus = 'process/data3/BuscaArchivosCXPPagos';
//             
//         }
//        
        storeArch.proxy.api.read = dirBus;
       
       
        msgOut("show 5");
        gridArch.setLoading('Buscando...');
        storeArch.loadData([], false);
        storeArch.load({
            callback: function() {
                gridArch.setLoading(false);
            }
        });
    },
    findArchivos: function(factura,calendario,periodo,periodoFin) {

        var me = this,
                gridArch = me.getGridArchivos(),
                storeArch = gridArch.getStore();
        if (Ext.isEmpty(factura))
            factura = '';
         if (Ext.isEmpty(calendario)){   
            calendario = this.calendarioSys;
            Ext.getCmp('cboCalendarioFeCxp').setValue(calendario);
        }
        if (Ext.isEmpty(periodo)){
            periodo = this.periodoSys;

             Ext.getCmp('cboPeriodoFeCxp').setValue(periodo);
       
        }
        if (Ext.isEmpty(periodoFin)){
            periodoFin = this.periodoSysFin;

             Ext.getCmp('cboPeriodoFeCxpFin').setValue(periodoFin);
       
        }
        
        storeArch.proxy.extraParams.FACTURA = factura;
        storeArch.proxy.extraParams.calendario = calendario;
        storeArch.proxy.extraParams.periodo = periodo;
        storeArch.proxy.extraParams.periodoFin = periodoFin;
       
       var dirBus = '';
        
        var ver = Ext.getCmp('cboverCXP').getValue();
        
         if (Ext.isEmpty(ver)){
             
            dirBus = 'process/data3/BuscaArchivosCXP';
             
         }
         if (ver === 'F'){
             
            dirBus = 'process/data3/BuscaArchivosCXP';
             
         }
         if (ver === 'P'){
             
            dirBus = 'process/data3/BuscaArchivosCXPPagos';
             
         }
        
        storeArch.proxy.api.read = dirBus;
       
       
        msgOut("show 5");
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
                    
                    this.companiaSession = val.data[0].COMPANIA;

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
    
    findCompaniaTesoreria: function() {
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
                    
                     me.enviaCorreo();


                } else if (!val.success) {
                    msgBoxErr('Session', 'Error sesion invalida no se pudo enviar el correo');
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
            url: 'dirdatacxp/processCXP',
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
