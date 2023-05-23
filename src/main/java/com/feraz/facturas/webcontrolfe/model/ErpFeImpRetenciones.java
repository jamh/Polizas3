/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.feraz.facturas.webcontrolfe.model;

/**
 *
 * @author Feraz3
 */
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import java.math.BigDecimal;
import javax.persistence.AttributeOverride;


import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;


@JsonIgnoreProperties(ignoreUnknown = true)
@Entity
@Table(name = "ERP_FE_IMP_RETENCIONES")
public class ErpFeImpRetenciones implements java.io.Serializable{
    
    @EmbeddedId
    @AttributeOverrides({
        @AttributeOverride(name = "compania", column = @Column(name = "COMPANIA", nullable = false, length = 10)),
        @AttributeOverride(name = "sec", column = @Column(name = "SEC", nullable = false)),
        @AttributeOverride(name = "numero", column = @Column(name = "NUMERO", nullable = false))
    })    
    private ErpFeImpRetencionesId id;
    
     @Column (name = "IMPORTE")
    @JsonProperty("IMPORTE")
    private BigDecimal importe;
     
    @Column (name = "IMPUESTO")
    @JsonProperty("IMPUESTO")
    private String impuesto;
    
     public ErpFeImpRetenciones(){
       }
    
        public ErpFeImpRetenciones(ErpFeImpRetencionesId id){

            this.id = id;

        }

    public ErpFeImpRetencionesId getId() {
        return id;
    }

    public BigDecimal getImporte() {
        return importe;
    }

    public String getImpuesto() {
        return impuesto;
    }

    public void setId(ErpFeImpRetencionesId id) {
        this.id = id;
    }

    public void setImporte(BigDecimal importe) {
        this.importe = importe;
    }

    public void setImpuesto(String impuesto) {
        this.impuesto = impuesto;
    }
        
      
}
