Ext.define('AppPolizas3.view.maestro.GridMaestro', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.gridmaestro',
    itemId: 'gridmaestro',
    xtype: 'gridmaestro',
    flex: 1,
    // title: 'Polizas',
    split: true,
//    autoRender :true,
    collapsible: true,
    autoScroll: true,
    store: 'StoreMaestro',
    initComponent: function () {
        var me = this;
        var storeTipoPolizaGrid = Ext.create('AppPolizas3.store.StoreTipoPolizaS');
        var storeTipoSolicitud = Ext.create('AppPolizas3.store.StoreTipoSolicitud');

        var encode = true;
        var local = false;

        var filters = {
            ftype: 'filters',
            encode: encode,
            local: local,
            filters: [{
                    type: 'boolean',
                    dataIndex: 'visible'
                }]
        };

        var lblEstatus = new Ext.form.Display({
            id: 'lblEstatus',
            name: 'lblEstatus',
            value: '<span style="color:black;">Estatus</span>'

        });
        var cboTipoPoliza = Ext.create('Ext.form.field.ComboBox', {
            id: 'cboTipoPoliza2',
            name: 'cboTipoPoliza2',
            itemId: 'cboTipoPoliza2',
            displayField: 'NOMBRE1',
            valueField: 'TIPO_POLIZA',
            typeAhead: true,
            minChars: 0,
            editable: false,
            store: storeTipoPolizaGrid,
            allowBlank: false,
            listeners: {
                scope: me,
                'change': function (field, value, eOpts) {



                }
            }

        });

        var cboTipoSolicitud = Ext.create('Ext.form.field.ComboBox', {
            id: 'cboTipoSolicitud',
            name: 'cboTipoSolicitud',
            itemId: 'cboTipoSolicitud',
            displayField: 'NOMBRE1',
            valueField: 'NOMBRE1',
            typeAhead: true,
            minChars: 0,
            editable: false,
            store: storeTipoSolicitud,
            allowBlank: true,
            listeners: {
                scope: me,
                'change': function (field, value, eOpts) {



                }
            }

        });

        var cellEditing2 = Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 1
        });


//        var cellEditing2 = Ext.create('Ext.grid.plugin.CellEditing', {
//            clicksToEdit: 2
//
//        });

        Ext.apply(me, {
            features: [filters],
            plugins: [
                cellEditing2
            ],
            tbar: [
                lblEstatus,
                '->',
                {
                    iconCls: 'clean-filter-icon',
                    text: 'Limpiar Filtros',
                    handler: function (btn) {
                        // msgOut('Excel');
                        me.fireEvent("cleanFiltersMst", btn);
                    }
                },
//                  {
//                    xtype: 'checkboxfield',
//                    boxLabel: 'Buscar Remotamente',
//                    name: 'copiBuscar',
//                   // dock: 'bottom',
//                    inputValue: '0',
//                    id: 'copiBuscar',
//                    itemId: 'copiBuscar'                    
//                },

                {
                    xtype: 'splitbutton',
                    text: 'CFDI..',
                    iconCls: 'processFE-icon',
                    menu: [{
                            iconCls: 'process-icon',
                            text: 'Generar Poliza de CFDI',
                            handler: function (btn) {
                                me.fireEvent("generarFE", btn);
                            }
                        },
                        {
                            iconCls: 'xml-icon',
                            text: 'Relacionar CFDI..',
                            handler: function (btn) {
                                // msgOut('Excel');
                                me.fireEvent("relacionaFE", btn);
                            }
                        }
                        , '-',
                        {
                            iconCls: 'xml-icon',
                            text: 'Relacionar con CFDI existente..',
                            handler: function (btn) {
                                // msgOut('Excel');
                                me.fireEvent("relacionaFeExistente", btn);
                            }
                        }
                        , '-',
                        {
                            iconCls: 'xml-icon',
                            text: 'Quitar relación CFDI..',
                            handler: function (btn) {
                                // msgOut('Excel');
                                me.fireEvent("deleteRelacion", btn);
                            }
                        }
                        , '-',
                        {
                            iconCls: 'pdf-icon',
                            text: 'Ver PDF',
                            handler: function (btn) {
                                // msgOut('Excel');
                                me.fireEvent("imprimirFEPDFXML", '1');
                            }
                        },
                        {
                            iconCls: 'xml-icon',
                            text: 'Ver XML',
                            handler: function (btn) {
                                // msgOut('Excel');
                                me.fireEvent("imprimirFEPDFXML", '2');
                            }
                        }

                    ]
                },
                {
                    iconCls: 'impresora-icon',
                    text: 'Imprimir Poliza',
                    id: 'btnPrintMst',
                    name: 'btnPrintMst',
                    itemId: 'btnPrintMst',
                    handler: function (btn) {
                        me.fireEvent("imprimirPolizas", btn);
                    }


                },
                {
                    iconCls: 'copy-icon',
                    text: 'Copia Poliza',
                    id: 'btnCopiaMst',
                    name: 'btnCopiaMst',
                    itemId: 'btnCopiaMst',
                    handler: function (btn) {
                        me.fireEvent("copyPoliza", btn);
                    }


                },
                {
                    xtype: 'tbspacer',
                    width: 50
                }, '-',
                {
                    iconCls: 'add-icon',
                    text: 'Agregar Poliza',
                    id: 'btnAgregarMst',
                    name: 'btnAgregarMst',
                    itemId: 'btnAgregarMst',
                    handler: function (btn) {
                        me.fireEvent("addPoliza", btn, cellEditing2);
                    }

                },
                {
                    xtype: 'tbspacer'
                },
                {
                    iconCls: 'delete-icon',
                    text: 'Cancelar Poliza',
                    itemId: 'btnBorrarMst',
                    name: 'btnBorrarMst',
                    id: 'btnBorrarMst',
                    handler: function (btn) {
                        me.fireEvent("cancelaPoliza", btn);
                    }



                }, {
                    iconCls: 'save-icon',
                    text: 'Guardar Poliza',
                    itemId: 'btnGuardarMst',
                    action: 'btnGuardarMst',
                    name: 'btnGuardarMst',
                    id: 'btnGuardarMst',
                    handler: function (btn) {
                        me.fireEvent("guardaPolizas", cellEditing2);
                    }
                }
            ],
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 40,
                    sortable: false
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'ID',
                    name: 'ID',
                    id: 'masID',
                    sortable: true,
                    header: 'ID',
                    hidden: true,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'COMPANIA',
                    name: 'COMPANIA',
                    id: 'masCOMPANIA',
                    sortable: true,
                    header: 'COMPANIA',
                    hidden: true,
                    flex: 1
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'NUMERO',
                    name: 'NUMERO',
                    id: 'masNUMERO',
                    filterable: true,
                    sortable: true,
                    header: 'Numero',
                    flex: 1,
                    renderer: function (val, meta, record) {
                        var uuid = record.data.UUID_RELACION;



                        if (!Ext.isEmpty(uuid)) {

                            return '<span style="color:orange;font-weight: bold">' + val + '</span>';

                        } else {


                            return val;
                        }
                    }
//                    renderer:function(value) {
//                       return "<b>"+value+"</b>";                      
//                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'TIPO_POLIZA',
                    name: 'TIPO_POLIZA',
                    id: 'masTIPO',
                    itemId: 'masTIPO',
                    sortable: true,
                    header: 'Tipo Poliza',
                    flex: 1,
                    field: cboTipoPoliza,
                    renderer: function (value) {
                        if (value === 'D') {
                            return 'D-DIARIO';
                        } else if (value === 'E') {
                            return 'E-EGRESOS';
                        } else if (value === 'I') {
                            return 'I-INGRESOS';
                        } else {
                            return value;
                        }
//                        var index = storeTipoPolizaGrid.find('TIPO_POLIZA', value);
//                        if (index > -1) {
//                            var record = storeTipoPolizaGrid.getAt(index);
//                            return record.get('NOMBRE1');
//                        }

                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'FECHA',
                    name: 'FECHA',
                    id: 'masFECHA',
                    itemId: 'dtFechaMst',
                    sortable: true,
                    header: 'Fecha',
                    format: 'd/m/Y',
                    filterable: true,
                    filter: {
                        type: 'date'
                    },
                    flex: 1,
                    renderer: // Ext.util.Format.dateRenderer('d/m/Y'),
                            function (value) {
                                if (Ext.isDate(value)) {
                                    return   Ext.Date.format(value, 'd/m/Y');
                                } else {
                                    return  value;
                                }
//                        if (Ext.isEmpty(value.length)) {
//                            return   Ext.Date.format(value, 'd/m/Y');
//                        } else {
//                            return  value;
//                        }
                            },
                    editor: {
                        xtype: 'datefield',
                        format: 'd/m/Y'
                    }


                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'NOMBRE',
                    name: 'NOMBRE',
                    id: 'masNOMBRE',
                    sortable: true,
                    filterable: true,
                    header: 'Descripcion',
                    flex: 3,
                    field: {
                        xtype: 'textfield',
                        allowBlank: false,
                        maxLength: 200,
                        enforceMaxLength: true
                    }

                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'FUENTE',
                    name: 'FUENTE',
                    id: 'masFUENTE',
                    filterable: true,
                    sortable: true,
                    flex: 2,
                    field: {
                        xtype: 'textfield',
                        allowBlank: true,
                        maxLength: 20,
                        enforceMaxLength: true
                    },
                    header: 'Fuente'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'NUM_CLC',
                    hidden: true,
                    name: 'NUM_CLC',
                    id: 'masNUM_CLC',
                    sortable: true,
                    flex: 2,
                    field: {
                        xtype: 'textfield',
                        allowBlank: true,
                        maxLength: 30,
                        enforceMaxLength: true
                    },
                    header: 'CLC'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'REFERENCIA',
                    sortable: true,
                    filterable: true,
                    flex: 1,
                    header: 'Referencia',
                    field: {
                        xtype: 'textfield',
                        allowBlank: true,
                        maxLength: 200,
                        enforceMaxLength: true
                    }

                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'TIPO_SOLICITUD',
                    name: 'TIPO_SOLICITUD',
                    id: 'masTIPO_SOLICITUD',
                    itemId: 'masTIPO_SOLICITUD',
                    sortable: true,
                    header: 'Tipo Solicitud',
                    flex: 2,
                    field: cboTipoSolicitud,
                    renderer: function (value) {
//                        if(value==='D'){
//                            return 'D-DIARIO';
//                        }else if(value==='E'){
//                            return 'E-EGRESOS';
//                        }else if(value==='I'){
//                            return 'I-INGRESOS';
//                        }else{
                        return value;
                        // }
//                        var index = storeTipoPolizaGrid.find('TIPO_POLIZA', value);
//                        if (index > -1) {
//                            var record = storeTipoPolizaGrid.getAt(index);
//                            return record.get('NOMBRE1');
//                        }

                    }
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'NUM_TRAMITE',
                    sortable: true,
                    filterable: true,
                    flex: 1,
                    header: 'Num Tramite',
                    field: {
                        xtype: 'textfield',
                        allowBlank: true,
                        maxLength: 200,
                        enforceMaxLength: true
                    }

                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'NUM_ORDEN',
                    sortable: true,
                    filterable: true,
                    flex: 1,
                    header: 'Num Orden',
                    field: {
                        xtype: 'textfield',
                        allowBlank: true,
                        maxLength: 200,
                        enforceMaxLength: true
                    }

                }




            ],
            dockedItems: [
                Ext.create('Ext.toolbar.Paging', {
                    dock: 'bottom',
                    store: 'StoreMaestro'
                })

            ]

        });


        this.callParent(arguments);
    },
    renderTopic: function (value, p, record) {

        var estructura = '1';
        var json = record.get('ID');
        var fecha = json.substring(11, 13) + "" + json.substring(13, 15) + "" + json.substring(15, 19);
        return Ext.String.format(
                '<a href="http://' + window.location.host + '/clases/servlet/ConectAc?dic_estado=66&dic_tabla=rep_polizas&dic_sistema=contab&dic_menu=cr&dic_submenu=cr4&reporte=REP_polizas_conCT&ventanaAparte=false&compania={4}&estructura={1}&tipo_poliza={2}&fecha={3}&poliza={0}" target="_blank">{0}</a>',
                value,
                estructura,
                record.get('TIPO').substring(0, 1),
                fecha,
                '1'
                );
    },
    formatDate: function (value) {

        return value ? Ext.Date.dateFormat(value, 'd/m/Y') : '';
    }



});
