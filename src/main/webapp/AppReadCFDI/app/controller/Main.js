Ext.define('AppReadCFDI.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: [
    ],
    models: [
    ],
    refs: [
        {
            ref: 'panelBusqueda',
            selector: 'panelbusqueda'
        }

    ],
    views: [
        'Main',
        'PanelBusqueda'

    ],
    init: function() {

        var me = this;
        me.control({
            panelbusqueda: {
                buscaSAT: function() {
                    me.buscaSAT();
                }
            }

        });
    },
    buscaSAT: function() {
        
        Ext.data.JsonP.request({
            url:'https://portalcfdi.facturaelectronica.sat.gob.mx/ConsultaReceptor.aspx',
            method: 'POST',
            params: {
                  __ASYNCPOST: true,
                __CSRFTOKEN: "/wEFJGVlNWVmMzVhLWJlM2ItNDgwOC1hODIwLWI0MThhOGZhYjQ1ZQ==",
                __EVENTARGUMENT: '',
                __EVENTTARGET: '',
                __LASTFOCUS: '',
                __VIEWSTATE: "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",
                __VIEWSTATEENCRYPTED: '',
                __VIEWSTATEGENERATOR: "FE9DB3F4",
                ctl00$MainContent$BtnBusqueda: "Buscar CFDI",
                ctl00$MainContent$CldFecha$DdlAnio: 2014,
                ctl00$MainContent$CldFecha$DdlDia: 0,
                ctl00$MainContent$CldFecha$DdlHora: 0,
                ctl00$MainContent$CldFecha$DdlHoraFin: 23,
                ctl00$MainContent$CldFecha$DdlMes: 1,
                ctl00$MainContent$CldFecha$DdlMinuto: 0,
                ctl00$MainContent$CldFecha$DdlMinutoFin: 59,
                ctl00$MainContent$CldFecha$DdlSegundo: 0,
                ctl00$MainContent$CldFecha$DdlSegundoFin: 59,
                ctl00$MainContent$DdlEstadoComprobante: -1,
                ctl00$MainContent$FiltroCentral: "RdoFechas",
                ctl00$MainContent$TxtRfcReceptor: '',
                ctl00$MainContent$TxtUUID: '',
                ctl00$MainContent$ddlComplementos: -1,
                ctl00$MainContent$hfInicialBool: false,
                ctl00$ScriptManager1: "ctl00$MainContent$UpnlBusqueda|ctl00$MainContent$BtnBusqueda"
            },
            failure: function (val) {
                msgOut(val);
            },
            success: function (val) {
                alert(val);
            },
            callback: function(records, options, success) {
                msgOut(records);
                msgOut(options);
                msgOut(success);
            }
        });

//        var store = Ext.create('AppReadCFDI.store.StoreFind');
//
//        msgOut("Busqueda");
//        store.load({
//            params: {
//                __ASYNCPOST: true,
//                __CSRFTOKEN: "/wEFJGVlNWVmMzVhLWJlM2ItNDgwOC1hODIwLWI0MThhOGZhYjQ1ZQ==",
//                __EVENTARGUMENT: '',
//                __EVENTTARGET: '',
//                __LASTFOCUS: '',
//                __VIEWSTATE: "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",
//                __VIEWSTATEENCRYPTED: '',
//                __VIEWSTATEGENERATOR: "FE9DB3F4",
//                ctl00$MainContent$BtnBusqueda: "Buscar CFDI",
//                ctl00$MainContent$CldFecha$DdlAnio: 2014,
//                ctl00$MainContent$CldFecha$DdlDia: 0,
//                ctl00$MainContent$CldFecha$DdlHora: 0,
//                ctl00$MainContent$CldFecha$DdlHoraFin: 23,
//                ctl00$MainContent$CldFecha$DdlMes: 1,
//                ctl00$MainContent$CldFecha$DdlMinuto: 0,
//                ctl00$MainContent$CldFecha$DdlMinutoFin: 59,
//                ctl00$MainContent$CldFecha$DdlSegundo: 0,
//                ctl00$MainContent$CldFecha$DdlSegundoFin: 59,
//                ctl00$MainContent$DdlEstadoComprobante: -1,
//                ctl00$MainContent$FiltroCentral: "RdoFechas",
//                ctl00$MainContent$TxtRfcReceptor: '',
//                ctl00$MainContent$TxtUUID: '',
//                ctl00$MainContent$ddlComplementos: -1,
//                ctl00$MainContent$hfInicialBool: false,
//                ctl00$ScriptManager1: "ctl00$MainContent$UpnlBusqueda|ctl00$MainContent$BtnBusqueda"
//            },
//            callback: function(records, options, success) {
//                msgOut(records);
//                msgOut(options);
//                msgOut(success);
//            }
//        });

////        Ext.Ajax.cors = true;
//        msgOut("Busqueda");
//        Ext.Ajax.request({
//            url: 'https://portalcfdi.facturaelectronica.sat.gob.mx/ConsultaReceptor.aspx',
//            withCredentials: true,
//            useDefaultXhrHeader: false,
//            cors: true,
//            params: {
//                __ASYNCPOST: true,
//                __CSRFTOKEN: "/wEFJGVlNWVmMzVhLWJlM2ItNDgwOC1hODIwLWI0MThhOGZhYjQ1ZQ==",
//                __EVENTARGUMENT: '',
//                __EVENTTARGET: '',
//                __LASTFOCUS: '',
//                __VIEWSTATE: "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",
//                __VIEWSTATEENCRYPTED: '',
//                __VIEWSTATEGENERATOR: "FE9DB3F4",
//                ctl00$MainContent$BtnBusqueda: "Buscar CFDI",
//                ctl00$MainContent$CldFecha$DdlAnio: 2014,
//                ctl00$MainContent$CldFecha$DdlDia: 0,
//                ctl00$MainContent$CldFecha$DdlHora: 0,
//                ctl00$MainContent$CldFecha$DdlHoraFin: 23,
//                ctl00$MainContent$CldFecha$DdlMes: 1,
//                ctl00$MainContent$CldFecha$DdlMinuto: 0,
//                ctl00$MainContent$CldFecha$DdlMinutoFin: 59,
//                ctl00$MainContent$CldFecha$DdlSegundo: 0,
//                ctl00$MainContent$CldFecha$DdlSegundoFin: 59,
//                ctl00$MainContent$DdlEstadoComprobante: -1,
//                ctl00$MainContent$FiltroCentral: "RdoFechas",
//                ctl00$MainContent$TxtRfcReceptor: '',
//                ctl00$MainContent$TxtUUID: '',
//                ctl00$MainContent$ddlComplementos: -1,
//                ctl00$MainContent$hfInicialBool: false,
//                ctl00$ScriptManager1: "ctl00$MainContent$UpnlBusqueda|ctl00$MainContent$BtnBusqueda"
//
//            },
//            method: 'POST',
//            scope: this,
//            timeout: 60000,
//            callback: function(records, operation, success) {
//                msgOut(records);
//                msgOut(operation);
//                msgOut(success);
//
//
//            }
//
//
//        });
    },
    findCompania: function() {
////        var me = this;
////        
////        Ext.getBody().on("contextmenu", Ext.emptyFn, null, {preventDefault: true});
////        Ext.Ajax.request({
////            url: 'process/data/BuscaCompania',
////            method: 'GET',
////            scope: this,
////            callback: function(records, operation, success) {
////                if (Ext.isEmpty(success.responseText))
////                    return;
////                var val = Ext.decode(success.responseText);
////                if (Ext.isEmpty(val))
////                    return;
////                if (val.success) {
////                    var nombre = val.data[0].NOMBRE1;
////
////                    var me = this,
////                            grid = me.getAppMain();
////                    grid.setTitle(val.data[0].NOMBRE1);
////
////                } else if (!val.success) {
////                    msgBoxErr('Compania', 'Error compañia no encontrada');
////                }
////            },
////            timeout: 30000
//
//        });
    },
    getCompania: function() {
//        var grid = this.getAppMain();
//        var title = grid.title;
//        var n = title.indexOf("-");
//        var compania = title.substr(0, n);
//        return compania;
    }

});