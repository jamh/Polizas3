Ext.define('AppAyuda.model.ModeloVideos', {
    extend: 'Ext.data.Model',
    fields: [
        
        { name:'ID', type:'string' },
        { name:'NOMBRE', type:'string' },
        { name:'DESCRIPCION', type:'string' },
        { name:'URL', type:'string' },    
                { name:'URL_IMAGEN', type:'string' }, 
        { name:'FECHA', type:'string'},
        { name:'SEC', type:'int'}

    ]

});

