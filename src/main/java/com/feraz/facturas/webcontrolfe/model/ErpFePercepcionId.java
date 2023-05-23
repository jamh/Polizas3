/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.feraz.facturas.webcontrolfe.model;

/**
 *
 * @author vavi
 */

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Temporal;

@JsonIgnoreProperties(ignoreUnknown = true)
@Embeddable
public class ErpFePercepcionId implements java.io.Serializable{
    
     @JsonProperty("COMPANIA")
    @Column (name = "COMPANIA")
    private String compania;
   
    @JsonProperty("NUMERO")
    @Column (name = "NUMERO")
    private int numero;
    
    @JsonProperty("ID")
    @Column (name = "ID")
    private int id;
    
    public ErpFePercepcionId(){
    
    }
    
    public ErpFePercepcionId(String compania,int numero,int id){
        
        this.compania = compania;
        this.numero = numero;
        this.id = id;
    
    
    }

    public String getCompania() {
        return compania;
    }

    public void setCompania(String compania) {
        this.compania = compania;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
    
    
    
}
