/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.feraz.ordencompra.dto;

/**
 *
 * @author vavi
 */

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.io.Serializable;
import java.math.BigDecimal;

/**
 *
 * @author Ing. JAMH
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class OrdenDTO {
    
    
    @JsonProperty("ID")
    public String id;
    
    @JsonProperty("COMPANIA")
    public String compania;
    
    @JsonProperty("FOLIO")
    public String folio;
    
    @JsonProperty("CALENDARIO")
    public String calendario;
    
    @JsonProperty("PERIODO")
    public String periodo;
    
    @JsonProperty("IMPORTE")
    public String importe;
    
    @JsonProperty("USUARIO")
    public String usuario;
    
    @JsonProperty("FECHA_CAP")
    public String fechaCap;
    
    @JsonProperty("ESTATUS")
    public String estatus;
    
    @JsonProperty("RFC")
    public String rfc;
    
    @JsonProperty("ID_PROVEEDOR")
    public String idProveedor;
    
    @JsonProperty("USUARIO_AUTORIZO")
    public String usuarioAutorizo;
    
    @JsonProperty("USUARIO_COMPRADOR")
    public String usuarioComprador;
    
    @JsonProperty("CONDICIONES_PAGO")
    public String condicionesPago;
    
    @JsonProperty("FECHA_ORDEN")
    public String fechaOrden;
    
    @JsonProperty("FECHA_REQUERIDA")
    public String fechaRequerida;
    
    @JsonProperty("CLASIFICACION")
    public String clasificacion;
    
    @JsonProperty("TOTAL")
    public String total;
    
    @JsonProperty("TOTAL_PENDIENTE")
    public String totalPendiente;
    
    @JsonProperty("ID_ALMACEN")
    public String idAlmacen;
    
    @JsonProperty("CTO_CTO")
    public String ctoCto;
    
    @JsonProperty("NOMBRE")
    public String nombre;
    @JsonProperty("DESCRIPCION")
    public String descripcion;
   
}
