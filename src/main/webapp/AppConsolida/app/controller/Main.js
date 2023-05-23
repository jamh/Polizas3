Ext.define('AppConsolida.controller.Main', {
    extend: 'Ext.app.Controller',
    stores: [
       'StoreAuxiliar',
       'StoreEstadoCuenta'
    ],
    models: [
       'ModeloAuxiliar',
       'ModeloEstadoCuenta'

    ],
    refs: [
        {
            ref: 'gridAuxiliar',
            selector: 'gridauxiliar'
        },
        {
            ref: 'gridEstadoCuenta',
            selector: 'gridestadocuenta'
        },
        {
            ref: 'formMaestro',
            selector: 'formmaestro'
        }
    ],
    views: [
         'Main',
         'GridAuxiliar',
         'GridEstadoCuenta',
         'FormMaestro'
     

    ],
    init: function() {

        this.control({
            gridauxiliar: {
                select: function(view, model, index) {
                    msgOut(view);
                    msgOut(model);
                    msgOut(index);
                }
            }
///       gridestadocuenta: {
//                
//            }



        });
    }
    

});

