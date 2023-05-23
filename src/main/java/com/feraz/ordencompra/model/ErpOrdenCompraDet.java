/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.feraz.ordencompra.model;

/**
 *
 * @author vavi
 */
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;

@Entity
@Table (name="ERP_ORDEN_COMPRA_DET" )
public class ErpOrdenCompraDet implements java.io.Serializable{
    
       @EmbeddedId
    @AttributeOverrides({
       
        @AttributeOverride(name = "compania", column = @Column(name="COMPANIA",nullable = false,length = 10)),
        @AttributeOverride(name = "idOrdenCompra", column = @Column(name = "ID_ORDEN_COMPRA",nullable = false)),
        @AttributeOverride(name = "linea", column = @Column(name = "LINEA",nullable = false))
    
    })
    
    private ErpOrdenCompraDetId id;
     
     
    @Column (name = "ID")
    private String idDet;
    
    @Column (name = "ID_PRODUCTO")
    private String idProducto;
    
    @Column (name = "DESCRIPCION")
    private String descripcion;
    
    @Column (name = "CANTIDAD_PEDIDA")
    private BigDecimal cantidadPedida;
    
    @Column (name = "CANTIDAD_LLEGO")
    private BigDecimal cantidadLlego;
    
    @Column (name = "PRECIO_UNITARIO")
    private BigDecimal precioUnitario;
    
    @Column (name = "IVA")
    private BigDecimal iva;
    
    @Column (name = "TOTAL")
    private BigDecimal total;
    
    @Column (name = "IMPORTE_COTIZACION")
    private BigDecimal importeCotizacion;
    
    @Column (name = "ID_ALMACEN")
    private Integer idAlmacen;
    
    @Column (name = "ID_ESTATUS")
    private Integer idEstatus;
    
    @Column (name = "ID_PRIORIDAD")
    private Integer idPrioridad;
    
    @Column (name = "ESTATUS_LINEA")
    private String estatusLinea;
    
    @Column (name = "ID_LINEA_WS")
    private String idLineaWS;
    
    @Column (name = "ID_WS")
    private String idWs;
    
    
    
    public ErpOrdenCompraDet(){
    
    }
    
    public ErpOrdenCompraDet(ErpOrdenCompraDetId id){
    
        this.id = id;
    }

    public ErpOrdenCompraDetId getId() {
        return id;
    }

    public void setId(ErpOrdenCompraDetId id) {
        this.id = id;
    }

    public String getIdDet() {
        return idDet;
    }

    public void setIdDet(String idDet) {
        this.idDet = idDet;
    }

    public String getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(String idProducto) {
        this.idProducto = idProducto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public BigDecimal getCantidadPedida() {
        return cantidadPedida;
    }

    public void setCantidadPedida(BigDecimal cantidadPedida) {
        this.cantidadPedida = cantidadPedida;
    }

    public BigDecimal getCantidadLlego() {
        return cantidadLlego;
    }

    public void setCantidadLlego(BigDecimal cantidadLlego) {
        this.cantidadLlego = cantidadLlego;
    }

    public BigDecimal getPrecioUnitario() {
        return precioUnitario;
    }

    public void setPrecioUnitario(BigDecimal precioUnitario) {
        this.precioUnitario = precioUnitario;
    }

    public BigDecimal getIva() {
        return iva;
    }

    public void setIva(BigDecimal iva) {
        this.iva = iva;
    }

    public BigDecimal getTotal() {
        return total;
    }

    public void setTotal(BigDecimal total) {
        this.total = total;
    }

    public BigDecimal getImporteCotizacion() {
        return importeCotizacion;
    }

    public void setImporteCotizacion(BigDecimal importeCotizacion) {
        this.importeCotizacion = importeCotizacion;
    }

    public Integer getIdAlmacen() {
        return idAlmacen;
    }

    public void setIdAlmacen(Integer idAlmacen) {
        this.idAlmacen = idAlmacen;
    }

    public Integer getIdEstatus() {
        return idEstatus;
    }

    public void setIdEstatus(Integer idEstatus) {
        this.idEstatus = idEstatus;
    }

    public Integer getIdPrioridad() {
        return idPrioridad;
    }

    public void setIdPrioridad(Integer idPrioridad) {
        this.idPrioridad = idPrioridad;
    }

    public String getEstatusLinea() {
        return estatusLinea;
    }

    public void setEstatusLinea(String estatusLinea) {
        this.estatusLinea = estatusLinea;
    }

    public String getIdLineaWS() {
        return idLineaWS;
    }

    public void setIdLineaWS(String idLineaWS) {
        this.idLineaWS = idLineaWS;
    }

    public String getIdWs() {
        return idWs;
    }

    public void setIdWs(String idWs) {
        this.idWs = idWs;
    }
    
    
    
    
}
