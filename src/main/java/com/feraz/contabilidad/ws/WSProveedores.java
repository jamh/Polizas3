/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.feraz.contabilidad.ws;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.xml.bind.JAXBException;

/**
 *
 * @author vavi
 */
@WebService(serviceName = "WSProveedores")
public class WSProveedores {
    
       @WebMethod(operationName = "cargaProveedor")
    public String proveedor(
            @WebParam(name = "usuario") String usuario,
            @WebParam(name = "password") String pass,
            @WebParam(name = "compania") String compania,
            @WebParam(name = "rfc") String rfc,
            @WebParam(name = "razonSocial") String razonSocial,
            @WebParam(name = "tPersona") String tPersona,
            @WebParam(name = "banco") String banco,
            @WebParam(name = "numCuenta") String numCuenta,
            @WebParam(name = "cuentaClabe") String cuentaClabe
    
    ) throws IOException, FileNotFoundException, JAXBException {
        
        
         
        
  
        System.out.println("-----------WS Proveedore----------------");
        System.out.println(usuario);
        System.out.println(pass);
        System.out.println(compania);
        System.out.println(rfc);
        System.out.println(razonSocial);
        System.out.println(tPersona);
        System.out.println(banco);
        System.out.println(numCuenta);
        System.out.println(cuentaClabe);
        
        
        System.out.println("-----------WS Proveedor----------------");
        
      
         
       
        if(!usuario.equalsIgnoreCase("cfdiInt")){
            
            return msgResp("0","Error usuario incorrecto");
        
        }
        
        if(!pass.equalsIgnoreCase("truper")){
            
            return msgResp("0","Error password incorrecto");
        
        }
          return null;
        
    
    }
    

    
    @WebMethod(exclude = true)
    public String msgResp(String result, String msg) {
       
        return "<?xml version=\"1.0\" encoding=\"UTF-8\"?>"
                + "<response>\n"
                + "  <result>" + result + "</result>\n"
                + "  <mensaje>" + msg + "</mensaje>\n"
                + "</response>\n";
    }

}
