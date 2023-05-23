Ext.define('AppPolizas3.model.ModeloArchivos', {
    extend: 'Ext.data.Model',

  fields: [
      'COMPANIA', 
      'SEC', 
      {name: 'FECHA', type: 'date', dateFormat: 'd/m/Y'}, 
      'NUMERO', 
      'NOMBRE', 
      'DESCRIPCION', 
      'URL', 
      'TIPO_POLIZA',
      'TIPO'
            
          ]


});

