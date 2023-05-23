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
public class OrdenDetDTO {
    
      @JsonProperty("ID")
      public String id;
      
      @JsonProperty("LINEA")
      public String linea;
      
      @JsonProperty("ID_ORDEN_COMPRA")
      public String idOrdenCompra;
      
      @JsonProperty("COMPANIA")
      public String compania;
      
      @JsonProperty("ID_PRODUCTO")
      public String idProducto;
      
      @JsonProperty("DESCRIPCION")
      public String descripcion;
      
      @JsonProperty("CANTIDAD_PEDIDA")
      public String cantidadPedida;
      
      @JsonProperty("CANTIDAD_LLEGO")
      public String cantidadLlego;
      
      @JsonProperty("PRECIO_UNITARIO")
      public String precioUnitario;
      
      @JsonProperty("IVA")
      public String iva;
      
      @JsonProperty("TOTAL")
      public String total;
      
      @JsonProperty("IMPORTE_COTIZACION")
      public String importeCotizacion;
      
      @JsonProperty("ID_ALMACEN")
      public String idAlmacen;
      
      @JsonProperty("ID_ESTATUS")
      public String idEstatus;
      
      @JsonProperty("ID_PRIORIDAD")
      public String idPrioridad;
      
      @JsonProperty("ESTATUS_LINEA")
      public String estatusLinea;
      
      @JsonProperty("ID_PEDIDO")
      public String idPedido;
      
      
      
      
     
    
}
