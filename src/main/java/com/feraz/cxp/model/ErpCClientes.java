/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.feraz.cxp.model;

/**
 *
 * @author Feraz3
 */

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
@Table(name = "ERP_CCLIENTES")
public class ErpCClientes implements java.io.Serializable{
    
     @EmbeddedId
    @AttributeOverrides({
      
        @AttributeOverride(name = "compania", column = @Column(name = "COMPANIA", nullable = false, length = 10)),
        @AttributeOverride(name = "idCliente", column = @Column(name = "ID_CLIENTE", nullable = false, length = 12)),
        @AttributeOverride(name = "origen", column = @Column(name = "ORIGEN", nullable = false, length = 3))

    })
     
     private ErpCClientesId id;
    
     
      @Column(name = "NOMBRE")
      private String nombre;
      
      @Column(name = "RFC")
      private String rfc;
      
      @Column(name = "ACT_ECONOMICA")
      private String actEconomica;
      
      @Column(name = "F_ALTA")
     @Temporal(javax.persistence.TemporalType.DATE)
      private Date fAlta;
      
      @Column(name = "RAZON_SOCIAL")
      private String razonSocial;
      
      @Column(name = "PAPELERIA")
      private String papeleria;
      
      @Column(name = "T_PERSONA")
      private String tPersona;
      
      @Column(name = "T_CLIEPROV")
      private String tClieprov;
      
      @Column(name = "T_TERCERO")
      private String tTercero;
      
      @Column(name = "T_OPERACION")
      private String tOperacion;
      
      @Column(name = "ID_FISCAL")
      private String idFiscal;
      
      @Column(name = "NOMBRE_EXTRANJERO")
      private String nombreExtranjero;
      
      @Column(name = "PAIS_RESIDENCIA")
      private String paisResidencia;
      
      @Column(name = "NACIONALIDAD")
      private String nacionalidad;
      
      @Column(name = "FORMA_PAGO")
      private String formaPago;
      
      @Column(name = "BANCO")
      private String banco;
      
      @Column(name = "NUMERO_CUENTA")
      private String numeroCuenta;
      
      @Column(name = "CUENTA_CLAVE")
      private String cuentaClave;
      
      @Column(name = "SALDO_INICIAL")
      private BigDecimal saldoInicial;
      
      @Column(name = "DIAS_CREDITO")
      private Integer diasCredito;
      
      @Column(name = "CONCEPTO_DEFAULT")
      private String conceptoDefault;
      
      @Column(name = "AUXILIAR")
      private String auxiliar;
      
      @Column(name = "T_OPERACION_DIOT")
      private String tOpearcionDiot;
      
      @Column(name = "CUENTA")
      private String cuenta;
      
      @Column(name = "CIE")
      private String cie;
      
      @Column(name = "PAGO_CIE")
      private Integer pagoCie;
      
      @Column(name = "REFERENCIA_CIE")
      private String referenciaCie;
      
      @Column(name = "CUENTA_IVA")
      private String cuentaIva;
      
      @Column(name = "CORREO")
      private String correo;
      
      @Column(name = "TELEFONO")
      private String telefono;
      
      @Column(name = "TIPO_POLIZA")
      private String tipoPoliza;
      
      @Column(name = "BANCO_PAGO")
      private String bancoPago;
      
      @Column(name = "ESTATUS")
      private String estatus;
      
      @Column(name = "PASSWORD")
      private String password;
      
      @Column(name = "VIATICO")
      private String viatico;
      
      @Column(name = "USUARIO")
      private String usuario;
      
      
      @Column(name = "CUENTA_GASTO")
      private String cuentaGasto;
      
      
      @Column(name = "CUENTA_IVA_PAGO")
      private String cuentaIvaPago;
      
      @Column(name = "CUENTA_COMPLEMENTARIA")
      private String cuentaComplementaria;
      
      @Column(name = "CTO_CTO_DEFAULT")
      private String ctoDefault;
      
      
      @Column(name = "TIPO_CUENTA")
      private String tipoCuenta;
      
      @Column(name = "ACTIVACION")
      private String activacion;
      
      @Column(name = "IBAN")
      private String iban;
      
      @Column(name = "SWIFT")
      private String swift;
      
      @Column(name = "CUENTA_VALIDA")
      private String cuentaValida;
      
      @Column(name = "CONTACTO")
      private String contacto;
      
      
      
      public ErpCClientes(){
      
      }
      
      public ErpCClientes(ErpCClientesId id){
      
          this.id = id;
      
      }

    public ErpCClientesId getId() {
        return id;
    }

    public void setId(ErpCClientesId id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getRfc() {
        return rfc;
    }

    public void setRfc(String rfc) {
        this.rfc = rfc;
    }

    public String getActEconomica() {
        return actEconomica;
    }

    public void setActEconomica(String actEconomica) {
        this.actEconomica = actEconomica;
    }

    public Date getfAlta() {
        return fAlta;
    }

    public void setfAlta(Date fAlta) {
        this.fAlta = fAlta;
    }

    public String getRazonSocial() {
        return razonSocial;
    }

    public void setRazonSocial(String razonSocial) {
        this.razonSocial = razonSocial;
    }

    public String getPapeleria() {
        return papeleria;
    }

    public void setPapeleria(String papeleria) {
        this.papeleria = papeleria;
    }

    public String gettPersona() {
        return tPersona;
    }

    public void settPersona(String tPersona) {
        this.tPersona = tPersona;
    }

    public String gettClieprov() {
        return tClieprov;
    }

    public void settClieprov(String tClieprov) {
        this.tClieprov = tClieprov;
    }

    public String gettTercero() {
        return tTercero;
    }

    public void settTercero(String tTercero) {
        this.tTercero = tTercero;
    }

    public String gettOperacion() {
        return tOperacion;
    }

    public void settOperacion(String tOperacion) {
        this.tOperacion = tOperacion;
    }

    public String getIdFiscal() {
        return idFiscal;
    }

    public void setIdFiscal(String idFiscal) {
        this.idFiscal = idFiscal;
    }

    public String getNombreExtranjero() {
        return nombreExtranjero;
    }

    public void setNombreExtranjero(String nombreExtranjero) {
        this.nombreExtranjero = nombreExtranjero;
    }

    public String getPaisResidencia() {
        return paisResidencia;
    }

    public void setPaisResidencia(String paisResidencia) {
        this.paisResidencia = paisResidencia;
    }

    public String getNacionalidad() {
        return nacionalidad;
    }

    public void setNacionalidad(String nacionalidad) {
        this.nacionalidad = nacionalidad;
    }

    public String getFormaPago() {
        return formaPago;
    }

    public void setFormaPago(String formaPago) {
        this.formaPago = formaPago;
    }

    public String getBanco() {
        return banco;
    }

    public void setBanco(String banco) {
        this.banco = banco;
    }

    public String getNumeroCuenta() {
        return numeroCuenta;
    }

    public void setNumeroCuenta(String numeroCuenta) {
        this.numeroCuenta = numeroCuenta;
    }

    public String getCuentaClave() {
        return cuentaClave;
    }

    public void setCuentaClave(String cuentaClave) {
        this.cuentaClave = cuentaClave;
    }

    public BigDecimal getSaldoInicial() {
        return saldoInicial;
    }

    public void setSaldoInicial(BigDecimal saldoInicial) {
        this.saldoInicial = saldoInicial;
    }

    public Integer getDiasCredito() {
        return diasCredito;
    }

    public void setDiasCredito(Integer diasCredito) {
        this.diasCredito = diasCredito;
    }

    public String getConceptoDefault() {
        return conceptoDefault;
    }

    public void setConceptoDefault(String conceptoDefault) {
        this.conceptoDefault = conceptoDefault;
    }

    public String getAuxiliar() {
        return auxiliar;
    }

    public void setAuxiliar(String auxiliar) {
        this.auxiliar = auxiliar;
    }

    public String getCuenta() {
        return cuenta;
    }

    public void setCuenta(String cuenta) {
        this.cuenta = cuenta;
    }

    public String getCie() {
        return cie;
    }

    public void setCie(String cie) {
        this.cie = cie;
    }

    public Integer getPagoCie() {
        return pagoCie;
    }

    public void setPagoCie(Integer pagoCie) {
        this.pagoCie = pagoCie;
    }

    public String getReferenciaCie() {
        return referenciaCie;
    }

    public void setReferenciaCie(String referenciaCie) {
        this.referenciaCie = referenciaCie;
    }

    public String getCuentaIva() {
        return cuentaIva;
    }

    public void setCuentaIva(String cuentaIva) {
        this.cuentaIva = cuentaIva;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public String getTipoPoliza() {
        return tipoPoliza;
    }

    public void setTipoPoliza(String tipoPoliza) {
        this.tipoPoliza = tipoPoliza;
    }

    public String getBancoPago() {
        return bancoPago;
    }

    public void setBancoPago(String bancoPago) {
        this.bancoPago = bancoPago;
    }

    public String getEstatus() {
        return estatus;
    }

    public void setEstatus(String estatus) {
        this.estatus = estatus;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getViatico() {
        return viatico;
    }

    public void setViatico(String viatico) {
        this.viatico = viatico;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String gettOpearcionDiot() {
        return tOpearcionDiot;
    }

    public void settOpearcionDiot(String tOpearcionDiot) {
        this.tOpearcionDiot = tOpearcionDiot;
    }

    public String getCuentaGasto() {
        return cuentaGasto;
    }

    public void setCuentaGasto(String cuentaGasto) {
        this.cuentaGasto = cuentaGasto;
    }

    public String getCuentaIvaPago() {
        return cuentaIvaPago;
    }

    public void setCuentaIvaPago(String cuentaIvaPago) {
        this.cuentaIvaPago = cuentaIvaPago;
    }

    public String getCuentaComplementaria() {
        return cuentaComplementaria;
    }

    public void setCuentaComplementaria(String cuentaComplementaria) {
        this.cuentaComplementaria = cuentaComplementaria;
    }

    public String getCtoDefault() {
        return ctoDefault;
    }

    public void setCtoDefault(String ctoDefault) {
        this.ctoDefault = ctoDefault;
    }

    public String getTipoCuenta() {
        return tipoCuenta;
    }

    public void setTipoCuenta(String tipoCuenta) {
        this.tipoCuenta = tipoCuenta;
    }

    public String getActivacion() {
        return activacion;
    }

    public void setActivacion(String activacion) {
        this.activacion = activacion;
    }

    public String getIban() {
        return iban;
    }

    public void setIban(String iban) {
        this.iban = iban;
    }

    public String getSwift() {
        return swift;
    }

    public void setSwift(String swift) {
        this.swift = swift;
    }

    public String getCuentaValida() {
        return cuentaValida;
    }

    public void setCuentaValida(String cuentaValida) {
        this.cuentaValida = cuentaValida;
    }

    public String getContacto() {
        return contacto;
    }

    public void setContacto(String contacto) {
        this.contacto = contacto;
    }
      
    
    
    
      
}
