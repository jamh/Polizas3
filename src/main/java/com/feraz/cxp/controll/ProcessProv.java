/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.feraz.cxp.controll;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.feraz.cxp.dao.ErpCClientesDao;
import com.feraz.cxp.dao.ErpProvDireccionDao;
import com.feraz.cxp.dao.ErpProvProductosDao;
import com.feraz.cxp.dto.ProductoDTO;
import com.feraz.cxp.dto.ProvDTO;
import com.feraz.cxp.dto.TesoreriaDTO;
import com.feraz.cxp.model.ErpCClientes;
import com.feraz.cxp.model.ErpCClientesId;
import com.feraz.cxp.model.ErpCpOtras;
import com.feraz.cxp.model.ErpCpOtrasId;
import com.feraz.cxp.model.ErpCxpFolios;
import com.feraz.cxp.model.ErpCxpFoliosId;
import com.feraz.cxp.model.ErpProvDireccion;
import com.feraz.cxp.model.ErpProvDireccionId;
import com.feraz.cxp.model.ErpProvProductos;
import com.feraz.cxp.model.ErpProvProductosId;
import com.feraz.facturas.webcontrolfe.model.ErpFeComprobantes;
import com.feraz.facturas.webcontrolfe.model.ErpFeComprobantesId;
import com.feraz.portal.mail.MailCadena;
import com.feraz.portal.mail.MailVerificacion;
import java.io.IOException;
import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import org.jamh.data.process.ProcessDao;
import org.jamh.wf.json.model.ResponseQuery;
import org.jamh.wf.process.Querys;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.context.request.WebRequest;

/**
 *
 * @author 55555
 */

@Controller
@RequestMapping("/CrearProveedor")
@SessionAttributes({"compania", "usuario"})
public class ProcessProv {
    
    
     private ProcessDao processDao;
     private ErpCClientesDao erpCClientesDao;
     private ErpProvDireccionDao erpProvDireccionDao;
     private ErpProvProductosDao erpProvProductosDao;
    
     private MailVerificacion mailVerificacion;
     
      @RequestMapping(value = "/save", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery saveProv( @RequestParam("ID_CLIENTE") String idCliente,
            @RequestParam("NOMBRE") String nombre,
            @RequestParam("RFC") String rfc,
            @RequestParam("RAZON_SOCIAL") String razonSocial,
            @RequestParam("DIAS") String dias,
            @RequestParam("CORREO") String correo,
            @RequestParam("BANCO_PAGO") String bancoPago,
            @RequestParam("TELEFONO") String telefono,
            @RequestParam("CALLE") String calle,
            @RequestParam("COLONIA") String colonia,
            @RequestParam("PAIS") String pais,
            @RequestParam("NO_INTERIOR") String noInterior,
            @RequestParam("NO_EXTERIOR") String noExterior,
            @RequestParam("ESTADO") String estado,
            @RequestParam("DELEGACION") String delegacion,
            @RequestParam("mailingPostalCode") String cp,
            @RequestParam("CUENTA_CONTABLE") String cuenta,
            @RequestParam("CUENTA_IVA") String cuentaIva,
            @RequestParam("BANCO") String banco,
            @RequestParam("CUENTA_BANCARIA") String cuentaBanco,
            @RequestParam("CLABE") String clabe,
            @RequestParam("TIPO_POLIZA") String tipoPoliza,
            @RequestParam("cboPersona") String persona,
            @RequestParam("cboMonedaProv") String moneda,
            @RequestParam("proceso") String proceso,
            @RequestParam("procesoDir") String procesoDir,
            @RequestParam("PASSWORD") String password,
            @RequestParam("cbotTercero") String tercero,
            @RequestParam("cbotOperacion") String operacion,
            @RequestParam("cboConceptoDefault") String concepto,
            @RequestParam("banderaViatic") String banderaViatico,
            @RequestParam("addBanderaCie") String banderaCie,
            @RequestParam("PAGO_CIE") String pagoCie,
            @RequestParam("REFERENCIA_CIE") String referenciaCie,
             @RequestParam("cbotOperacionDiot") String operacionDiot,
             @RequestParam("AUXILIAR") String auxiliar,
              @RequestParam("CUENTA_GASTO") String cuentaGasto,
              @RequestParam("CUENTA_IVA_PAGO") String cuentaIvaPago,
              @RequestParam("CUENTA_COMPLEMENTARIA") String cuentaComplementaria,
              @RequestParam("cboctoDefault") String ctoDefault,
              @RequestParam("TIPO_CUENTA") String tipoCuenta,
            @RequestParam("IBAN") String iban,
            @RequestParam("SWIFT") String swift,
            @RequestParam("CUENTA_VALIDA") String cuentaValida,
            
                    
            
            
            
            
        
            
             WebRequest webRequest, Model model){

        ResponseQuery rq = new ResponseQuery();

            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            
            Querys que = new Querys();
            String store = que.getSQL("GENERA_EMPLEADO_VIATIC");
            
            Map viatico = new HashMap();
                
               
        
          
           // System.out.println("banderaViatico: "+banderaViatico);    
            try{
                
                ErpCClientes prov = new ErpCClientes();
                ErpCClientesId provId = new ErpCClientesId();
                ErpProvDireccion dir = new ErpProvDireccion();
                ErpProvDireccionId dirId = new ErpProvDireccionId();
                ErpProvProductos prod = new ErpProvProductos();
                ErpProvProductosId prodId = new ErpProvProductosId();
                ErpCClientesId result = null;
                boolean result2 = false;
                ErpProvDireccionId resultDir = null;
                boolean resultDir2 = false;
                
              if(proceso.equalsIgnoreCase("I")){  
                  
                  
                  Map secProv = new HashMap();
                
                   secProv.put("compania", compania);
               
                   List listProv = processDao.getMapResult("BuscaMaxProveedorComp", secProv);
                   
                    Map provSec = (HashMap) listProv.get(0);
     
                 
                    System.out.println("cie"+banderaCie);
                  
                
                provId.setCompania(compania);
                provId.setIdCliente("000"+provSec.get("ID_CLIENTE").toString());
                provId.setOrigen("P");
                prov.setId(provId);
                prov.setNombre(nombre);
                prov.setRfc(rfc);
                prov.setRazonSocial(razonSocial);
                prov.setCorreo(correo);
                prov.setTelefono(telefono);
                prov.setCuenta(cuenta);
                prov.setCuentaIva(cuentaIva);
                prov.setBanco(banco);
                prov.setNumeroCuenta(cuentaBanco);
                prov.setCuentaClave(clabe);
                prov.setTipoPoliza(tipoPoliza);
                prov.settClieprov(moneda);
                prov.settPersona(persona);
                prov.setPassword(password);
                prov.settOperacion(operacion);
                prov.settTercero(tercero);
                prov.setConceptoDefault(concepto);
                prov.setViatico(banderaViatico);
                
                if(correo.equalsIgnoreCase("")){
                
                   prov.setUsuario(rfc);
                }else{
                
                   prov.setUsuario(correo);
                }
                
                //prov.setUsuario(correo);
                prov.setAuxiliar(auxiliar);
                prov.settOpearcionDiot(operacionDiot);
                prov.setCuentaGasto(cuentaGasto);
                prov.setCuentaIvaPago(cuentaIvaPago);
                prov.setCuentaComplementaria(cuentaComplementaria);
                prov.setCtoDefault(ctoDefault);
                prov.setIban(iban);
                prov.setSwift(swift);
                prov.setTipoCuenta(tipoCuenta);
                prov.setActivacion("1");
                prov.setCuentaValida(cuentaValida);
                
                if(banderaCie.equalsIgnoreCase("true") || banderaCie.equalsIgnoreCase("1")){
                
                    prov.setCie("1");
                    
                   if(!pagoCie.equalsIgnoreCase("")) {
                    prov.setPagoCie(Integer.parseInt(pagoCie));
                    prov.setReferenciaCie(referenciaCie);
                    
                   }else{
                       
                       prov.setPagoCie(null);
                        prov.setReferenciaCie("");
                   
                   }
                          
                }
                
                
                dirId.setCompania(compania);
                dirId.setIdProveedor("000"+provSec.get("ID_CLIENTE").toString());
                dir.setId(dirId);
                dir.setSec(1);
                dir.setCalle(calle);
                dir.setColonia(colonia);
                dir.setPais(pais);
                dir.setEstado(estado);   
                dir.setNoInterior(noInterior);
                dir.setNoExterior(noExterior);
                dir.setDelegacion(delegacion);
                dir.setCp(cp);
               
                
                if (!dias.equalsIgnoreCase("")){
                
                   prov.setDiasCredito(Integer.parseInt(dias));
                }
                
                prov.setBancoPago(bancoPago);
                
                result = erpCClientesDao.save(prov);
                resultDir = erpProvDireccionDao.save(dir);
                
                viatico.put("compania", compania);
                viatico.put("cliente", "000"+provSec.get("ID_CLIENTE").toString());
                viatico.put("rfc", rfc);
                viatico.put("banco", banco);
                viatico.put("cuenta", cuentaBanco);
                viatico.put("cuentaClabe", clabe);
                viatico.put("proceso", "I");
                
                
                if(banderaViatico.equalsIgnoreCase("true")){
                
                    processDao.execute(store, viatico);
                }
                
                
                
           
              }
              
              
              if(proceso.equalsIgnoreCase("U")){  
                
                provId.setCompania(compania);
                provId.setIdCliente(idCliente);
                provId.setOrigen("P");
                prov.setId(provId);
                prov.setNombre(nombre);
                prov.setRfc(rfc);
                prov.setRazonSocial(razonSocial);
                prov.setCorreo(correo);
                prov.setTelefono(telefono);
                prov.setCuenta(cuenta);
                prov.setCuentaIva(cuentaIva);
                prov.setBanco(banco);
                prov.setNumeroCuenta(cuentaBanco);
                prov.setCuentaClave(clabe);
                prov.setTipoPoliza(tipoPoliza);
                prov.settClieprov(moneda);
                prov.settPersona(persona);
                prov.setPassword(password);
                prov.settOperacion(operacion);
                prov.settTercero(tercero);
                prov.setConceptoDefault(concepto);
                prov.setViatico(banderaViatico);
                prov.setActivacion("1");
                
                if(correo.equalsIgnoreCase("")){
                
                   prov.setUsuario(rfc);
                }else{
                
                   prov.setUsuario(correo);
                }
                
                prov.setAuxiliar(auxiliar);
                prov.settOpearcionDiot(operacionDiot);
                prov.setCuentaGasto(cuentaGasto);
                prov.setCuentaIvaPago(cuentaIvaPago);
                prov.setCuentaComplementaria(cuentaComplementaria);
                prov.setCtoDefault(ctoDefault);
                prov.setIban(iban);
                prov.setSwift(swift);
                prov.setTipoCuenta(tipoCuenta);
                prov.setCuentaValida(cuentaValida);
                
                
                 if(banderaCie.equalsIgnoreCase("true") || banderaCie.equalsIgnoreCase("1")){
                
                    prov.setCie("1");
                   if(!pagoCie.equalsIgnoreCase("")) {
                    prov.setPagoCie(Integer.parseInt(pagoCie));
                     prov.setReferenciaCie(referenciaCie);
                    
                   }else{
                       
                       prov.setPagoCie(null);
                       prov.setReferenciaCie(referenciaCie);
                   
                   }
                          
                }else{
                     
                    prov.setCie("0");
                
                       prov.setPagoCie(null);
                         prov.setReferenciaCie("");
                   
                 
                 }
                
                
                dirId.setCompania(compania);
                dirId.setIdProveedor(idCliente);
                dir.setId(dirId);
                dir.setSec(1);
                dir.setCalle(calle);
                dir.setColonia(colonia);
                dir.setPais(pais);
                dir.setEstado(estado);   
                dir.setNoInterior(noInterior);
                dir.setNoExterior(noExterior);
                dir.setDelegacion(delegacion);
                dir.setCp(cp);
                
                if (!dias.equalsIgnoreCase("")){
                
                   prov.setDiasCredito(Integer.parseInt(dias));
                }
                
                prov.setBancoPago(bancoPago);
                
                result2 = erpCClientesDao.update(prov);
                
                if(procesoDir.equalsIgnoreCase("I")){
                
                   resultDir = erpProvDireccionDao.save(dir);
                }
                if(procesoDir.equalsIgnoreCase("U")){
                
                   resultDir2 = erpProvDireccionDao.update(dir);
                }
           
              }
              
           if(proceso.equalsIgnoreCase("I")){
            if (result != null){ 
                if (resultDir != null){
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("Proveedor Guardado");
                }else{
                    
                    rq.setSuccess(false);
                    rq.setData(null);
                    rq.setMsg("Proveedor Guardado. Error al guardar la direccion");
                
                }
            }else{

              rq.setSuccess(false);
              rq.setData(null);
              rq.setMsg("Error al guardar");


            }
           }   
              
              
           if(proceso.equalsIgnoreCase("U")){
            if (result2 == true){
              if(procesoDir.equalsIgnoreCase("U")){
               if (resultDir2 == true){
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("Proveedor Guardado");
                }else{
                    
                    rq.setSuccess(false);
                    rq.setData(null);
                    rq.setMsg("Proveedor Guardado. Error al guardar la direccion");
                
                }
              }else{
                 if (resultDir != null){
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("Proveedor Guardado");
                }else{
                    
                    rq.setSuccess(false);
                    rq.setData(null);
                    rq.setMsg("Proveedor Guardado. Error al guardar la direccion");
                
                }
              }
            }else{

              rq.setSuccess(false);
              rq.setData(null);
              rq.setMsg("Error al actualizar");


            }
           }
           
           
            
        }catch(Exception e){
            e.printStackTrace();
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("Error al guardar");
           return rq;
        }
        
        return rq;
    }
    
    
          @RequestMapping(value = "/registro", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery registroProv( 
            @RequestParam("RAZON_SOCIAL") String razonSocial,
            @RequestParam("RFC") String rfc,
            @RequestParam("PAIS") String pais,
            @RequestParam("ESTADO") String estado,
            @RequestParam("DELEGACION") String delegacion,
            @RequestParam("COLONIA") String colonia,
            @RequestParam("mailingPostalCode") String cp,
            @RequestParam("CALLE") String calle,    
            @RequestParam("BANCO") String banco,
            @RequestParam("CUENTA_BANCARIA") String cuentaBancaria,
            @RequestParam("CLABE") String clabe,
            @RequestParam("CORREO") String correo,
            @RequestParam("PASSWORD") String password,
            @RequestParam("cboTipoCuentaProv") String tipoCuenta,
            @RequestParam("DIRECCION") String direccion,
            @RequestParam("IBAN") String iban,
            @RequestParam("SWIFT") String swift,
            @RequestParam("cboPersonaPortal") String tPersona,
            @RequestParam("cboMonedaPortal") String tMoneda,
            @RequestParam("PASSWORD_VERIFIC") String passwordVerific,
            

            
             WebRequest webRequest, Model model){

        ResponseQuery rq = new ResponseQuery();

            String compania = model.asMap().get("compania").toString();
          //  String usuario = model.asMap().get("usuario").toString();
            
          System.out.println(password);
          System.out.println(passwordVerific);
          
          if(!password.equalsIgnoreCase(passwordVerific)){
              
                    rq.setSuccess(false);
                    rq.setData(null);
                    rq.setMsg("Error. El password verificado no coincide.");
                    return rq;
          
          }
          
    
            try{
                
                ErpCClientes prov = new ErpCClientes();
                ErpCClientesId provId = new ErpCClientesId();
                ErpProvDireccion dir = new ErpProvDireccion();
                ErpProvDireccionId dirId = new ErpProvDireccionId();
               
                ErpCClientesId result = null;
                ErpProvDireccionId resultDir = null;
                
                   
                  
                  Map secProv = new HashMap();
                
                   secProv.put("compania", compania);
               
                   List listProv = processDao.getMapResult("BuscaMaxProveedorComp", secProv);
                   
                    Map provSec = (HashMap) listProv.get(0);
     
                 
                    //System.out.println("cie"+banderaCie);
                  
                
                provId.setCompania(compania);
                provId.setIdCliente("000"+provSec.get("ID_CLIENTE").toString());
                provId.setOrigen("P");
                prov.setId(provId);
                prov.setNombre(razonSocial);
                if(tipoCuenta.equalsIgnoreCase("EXT")){
                   
                   prov.setRfc("XEXX010101000");
                   prov.setIban(iban);
                   prov.setSwift(swift);
               
               }else{
                prov.setRfc(rfc);
                prov.setBanco(banco);
                prov.setNumeroCuenta(cuentaBancaria);
                prov.setCuentaClave(clabe);
               }
                prov.setRazonSocial(razonSocial);
                prov.setCorreo(correo);
               // prov.setTelefono(telefono);
               
                
               
                prov.settClieprov(tMoneda);
                prov.settPersona(tPersona);
               
               //if(tipoCuenta.equalsIgnoreCase("EXT")){
                   
               //    prov.setUsuario("XEXX010101000");
               
               //}else{
                prov.setUsuario(correo);
               //}
                prov.setPassword(password);
                prov.setActivacion("0");
                prov.setTipoCuenta(tipoCuenta);
            
                
//                if(banderaCie.equalsIgnoreCase("true") || banderaCie.equalsIgnoreCase("1")){
//                
//                    prov.setCie("1");
//                    
//                   if(!pagoCie.equalsIgnoreCase("")) {
//                    prov.setPagoCie(Integer.parseInt(pagoCie));
//                    prov.setReferenciaCie(referenciaCie);
//                    
//                   }else{
//                       
//                       prov.setPagoCie(null);
//                        prov.setReferenciaCie("");
//                   
//                   }
//                          
//                }
                
                
                dirId.setCompania(compania);
                dirId.setIdProveedor("000"+provSec.get("ID_CLIENTE").toString());
                dir.setId(dirId);
                dir.setSec(1);
                dir.setCalle(calle);
                dir.setColonia(colonia);
                dir.setPais(pais);
                dir.setEstado(estado);   
             
                dir.setDelegacion(delegacion);
                dir.setCp(cp);
                dir.setDireccion(direccion);
               
            
                
                result = erpCClientesDao.save(prov);
                resultDir = erpProvDireccionDao.save(dir);
                
                
                MailCadena cadena = new MailCadena();
                
                String cad = cadena.getCadenaAlfanumAleatoria(10);
                
               // MailVerificacion mail = new MailVerificacion();
                
                mailVerificacion.sendMail(cad, correo, correo, password,compania);
                
         
                
                
           
              
              
           
              
            if (result != null){ 
                if (resultDir != null){
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("Proveedor Guardado");
                }else{
                    
                    rq.setSuccess(false);
                    rq.setData(null);
                    rq.setMsg("Proveedor Guardado. Error al guardar la direccion");
                
                }
            }else{

              rq.setSuccess(false);
              rq.setData(null);
              rq.setMsg("Error al guardar");


            }
  
           
            
        }catch(Exception e){
            e.printStackTrace();
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("Error al guardar");
           return rq;
        }
        
        return rq;
    }
    
    
              @RequestMapping(value = "/registroAereo", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery registroProvAereo( 
            @RequestParam("RAZON_SOCIAL") String razonSocial,
            @RequestParam("RFC") String rfc,
            @RequestParam("PAIS") String pais,
            @RequestParam("ESTADO") String estado,
            @RequestParam("DELEGACION") String delegacion,
            @RequestParam("COLONIA") String colonia,
            @RequestParam("mailingPostalCode") String cp,
            @RequestParam("CALLE") String calle,    
            @RequestParam("BANCO") String banco,
            @RequestParam("CUENTA_BANCARIA") String cuentaBancaria,
            @RequestParam("CLABE") String clabe,
            @RequestParam("CORREO") String correo,
            @RequestParam("PASSWORD") String password,
            @RequestParam("cboTipoCuentaProv") String tipoCuenta,
            @RequestParam("DIRECCION") String direccion,
            @RequestParam("IBAN") String iban,
            @RequestParam("SWIFT") String swift,
            @RequestParam("cboPersonaPortal") String tPersona,
            @RequestParam("cboMonedaPortal") String tMoneda,
            @RequestParam("PASSWORD_VERIFIC") String passwordVerific,
            @RequestParam("TELEFONO") String telefono,
            @RequestParam("CONTACTO") String contacto,
            

            
             WebRequest webRequest, Model model){

        ResponseQuery rq = new ResponseQuery();

            String compania = model.asMap().get("compania").toString();
          //  String usuario = model.asMap().get("usuario").toString();
            
          System.out.println(password);
          System.out.println(passwordVerific);
          
          
          System.out.println("contacto");
                  System.out.println(contacto);
          
          if(!password.equalsIgnoreCase(passwordVerific)){
              
                    rq.setSuccess(false);
                    rq.setData(null);
                    rq.setMsg("Error. El password verificado no coincide.");
                    return rq;
          
          }
          
    
            try{
                
                ErpCClientes prov = new ErpCClientes();
                ErpCClientesId provId = new ErpCClientesId();
                ErpProvDireccion dir = new ErpProvDireccion();
                ErpProvDireccionId dirId = new ErpProvDireccionId();
               
                ErpCClientesId result = null;
                ErpProvDireccionId resultDir = null;
                
                   
                  
                  Map secProv = new HashMap();
                
                   secProv.put("compania", compania);
               
                   List listProv = processDao.getMapResult("BuscaMaxProveedorComp", secProv);
                   
                    Map provSec = (HashMap) listProv.get(0);
     
                 
                    //System.out.println("cie"+banderaCie);
                  
                
                provId.setCompania(compania);
                provId.setIdCliente("000"+provSec.get("ID_CLIENTE").toString());
                provId.setOrigen("P");
                prov.setId(provId);
                prov.setNombre(razonSocial);
                if(tipoCuenta.equalsIgnoreCase("EXT")){
                   
                   prov.setRfc("XEXX010101000");
                   prov.setIban(iban);
                   prov.setSwift(swift);
               
               }else{
                prov.setRfc(rfc);
                prov.setBanco(banco);
                prov.setNumeroCuenta(cuentaBancaria);
                prov.setCuentaClave(clabe);
               }
                prov.setRazonSocial(razonSocial);
                prov.setCorreo(correo);
               // prov.setTelefono(telefono);
               
                
               
                prov.settClieprov(tMoneda);
                prov.settPersona(tPersona);
               
               //if(tipoCuenta.equalsIgnoreCase("EXT")){
                   
               //    prov.setUsuario("XEXX010101000");
               
               //}else{
                prov.setUsuario(correo);
               //}
                prov.setPassword(password);
                prov.setActivacion("0");
                prov.setTipoCuenta(tipoCuenta);
                prov.setTelefono(telefono);
                prov.setContacto(contacto);
            
                
//                if(banderaCie.equalsIgnoreCase("true") || banderaCie.equalsIgnoreCase("1")){
//                
//                    prov.setCie("1");
//                    
//                   if(!pagoCie.equalsIgnoreCase("")) {
//                    prov.setPagoCie(Integer.parseInt(pagoCie));
//                    prov.setReferenciaCie(referenciaCie);
//                    
//                   }else{
//                       
//                       prov.setPagoCie(null);
//                        prov.setReferenciaCie("");
//                   
//                   }
//                          
//                }
                
                
                dirId.setCompania(compania);
                dirId.setIdProveedor("000"+provSec.get("ID_CLIENTE").toString());
                dir.setId(dirId);
                dir.setSec(1);
                dir.setCalle(calle);
                dir.setColonia(colonia);
                dir.setPais(pais);
                dir.setEstado(estado);   
             
                dir.setDelegacion(delegacion);
                dir.setCp(cp);
                dir.setDireccion(direccion);
               
            
                
                result = erpCClientesDao.save(prov);
                resultDir = erpProvDireccionDao.save(dir);
                
                
                MailCadena cadena = new MailCadena();
                
                String cad = cadena.getCadenaAlfanumAleatoria(10);
                
               // MailVerificacion mail = new MailVerificacion();
                
                mailVerificacion.sendMailAereo(cad, correo, correo, password,compania);
                
         
                
                
           
              
              
           
              
            if (result != null){ 
                if (resultDir != null){
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("Proveedor Guardado");
                }else{
                    
                    rq.setSuccess(false);
                    rq.setData(null);
                    rq.setMsg("Proveedor Guardado. Error al guardar la direccion");
                
                }
            }else{

              rq.setSuccess(false);
              rq.setData(null);
              rq.setMsg("Error al guardar");


            }
  
           
            
        }catch(Exception e){
            e.printStackTrace();
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("Error al guardar");
           return rq;
        }
        
        return rq;
    }
    
    
         @RequestMapping(value = "/registro/verific")
    public String verificSystemUser(String compania,String user,String verific, WebRequest webRequest, Model model) {

        boolean isSave = false;


        ResponseQuery rq = new ResponseQuery();
  
        boolean result = false;
      
      
        try {
            ObjectMapper mapper = new ObjectMapper();
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
            mapper.setDateFormat(df);
            
//            System.out.println(user);
//            System.out.println(verific);
           
    //     isSave=SystemUserDao.verifica(user, verific);
                        
           // isSave = SystemUserDao.update(systemUser);
           
           
                ErpCClientes prov = new ErpCClientes();
                ErpCClientesId provId = new ErpCClientesId();
                
                provId.setCompania(compania);
                prov.setId(provId);
                prov.setUsuario(user);
                prov.setActivacion("1");
                
              result = erpCClientesDao.updateVerific(prov);
           
        } catch (Exception e) {
            isSave = false;
            e.printStackTrace();
            return "inicio/RegistroIncorrecto";
        }


        if (result) {
            List lista = new ArrayList();
            lista.add(null);
            rq.setSuccess(true);
            rq.setData(lista);
            rq.setMsg("Ready");
            return "init/RegistroCorrecto";
        } else {
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("data null");
            return "init/RegistroIncorrecto";
        }

       
    }
    
           @RequestMapping(value = "/registro/verific2")
    public String verificSystemUser2(String compania,String user,String verific, WebRequest webRequest, Model model) {

        boolean isSave = false;


        ResponseQuery rq = new ResponseQuery();
  
        boolean result = false;
      
      
        try {
            ObjectMapper mapper = new ObjectMapper();
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");
            mapper.setDateFormat(df);
            
//            System.out.println(user);
//            System.out.println(verific);
           
    //     isSave=SystemUserDao.verifica(user, verific);
                        
           // isSave = SystemUserDao.update(systemUser);
           
           
                ErpCClientes prov = new ErpCClientes();
                ErpCClientesId provId = new ErpCClientesId();
                
                provId.setCompania(compania);
                prov.setId(provId);
                prov.setUsuario(user);
                prov.setActivacion("1");
                
              result = erpCClientesDao.updateVerific(prov);
           
        } catch (Exception e) {
            isSave = false;
            e.printStackTrace();
            return "inicio/RegistroIncorrectoAereo";
        }


        if (result) {
            List lista = new ArrayList();
            lista.add(null);
            rq.setSuccess(true);
            rq.setData(lista);
            rq.setMsg("Ready");
            return "init/RegistroCorrectoAereo";
        } else {
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("data null");
            return "init/RegistroIncorrectoAereo";
        }

       
    }
    
      @RequestMapping(value = "/deleteProveedor", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery deleteProv( String data, WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
   //     System.out.println("data factura cancelacion:"+data);
        
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }


            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
          
                   
        try{
            List<ProvDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            ProvDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }

  
            Iterator<ProvDTO> it = lista.iterator();
     
             ErpCClientes prov = new ErpCClientes();
             ErpCClientesId provId = new ErpCClientesId();
             ErpProvDireccion dir = new ErpProvDireccion();
             ErpProvDireccionId dirId = new ErpProvDireccionId();
            int banderaGe = 0 ;
            while (it.hasNext()) {
//                 System.out.println("-------------------------------------------------------------------");
                 ProvDTO ss = it.next();
                 
                 provId.setCompania(ss.compania);
                 provId.setIdCliente(ss.idCliente);
                 provId.setOrigen("P");
                 prov.setId(provId);
                 
                 dirId.setCompania(ss.compania);
                 dirId.setIdProveedor(ss.idCliente);
                 dir.setId(dirId);
                 
                 erpCClientesDao.delete(prov);
                 erpProvDireccionDao.delete(dir);
               
                  banderaGe = 1;
            }
            
          
            
            if (banderaGe == 1){
            
                
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("Registros eliminados correctamente");
              
                
            }else{
                
                rq.setSuccess(true);
                rq.setData(null);
                rq.setMsg("Error al eliminar");
                
            }
            

        }catch(Exception e){
            e.printStackTrace();
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("Error al eliminar");
           return rq;
        }
        
        return rq;
    }
    
     @RequestMapping(value = "/saveProduct", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery saveProduct( @RequestParam("PROVEEDOR_FORM") String proveedor,
            @RequestParam("ID_PRODUCTO_FORM") String idProducto,
            @RequestParam("NOMBRE_FORM") String nombre,
            @RequestParam("CODIGO_FORM") String codigo,
            @RequestParam("UNIDAD_MEDIDA_FORM") String unidadMedida,
            @RequestParam("PRECIO_SIN_IVA_FORM") String precio,
             @RequestParam("CODIGO_PROVEEDOR_FORM") String codigoProveedor,

            
            
            
                    
            
             WebRequest webRequest, Model model){

        ResponseQuery rq = new ResponseQuery();

            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
        
          
        
            try{
                 boolean result2 = false;
                 ErpProvProductosId result = null;

                ErpProvProductos prod = new ErpProvProductos();
                ErpProvProductosId prodId = new ErpProvProductosId();
                
              if (idProducto.equalsIgnoreCase("")){  
                prodId.setCompania(compania);
                prodId.setProveedor(proveedor);
                int sec = erpProvProductosDao.getMaxErpProductos(prodId);
                prodId.setIdProducto(sec);
                prod.setId(prodId);
                prod.setCodigo(codigo);
                prod.setCodigoProveedor(codigoProveedor);
                prod.setNombre(nombre);
                if (!precio.equalsIgnoreCase("")){
                  prod.setPrecioSinIva(new BigDecimal(precio));
                }
                prod.setUnidadMedida(unidadMedida);
                
                result = erpProvProductosDao.save(prod);
                
              }else{
                  
                prodId.setCompania(compania);
                prodId.setProveedor(proveedor);
                prodId.setIdProducto(Integer.parseInt(idProducto));
                prod.setId(prodId);
                prod.setCodigo(codigo);
                prod.setCodigoProveedor(codigoProveedor);
                prod.setNombre(nombre);
                if (!precio.equalsIgnoreCase("")){
                  prod.setPrecioSinIva(new BigDecimal(precio));
                }
                prod.setUnidadMedida(unidadMedida);
                
                result2 = erpProvProductosDao.update(prod);
              
              }
                

              
            if (idProducto.equalsIgnoreCase("")){
              if (result != null){ 
                
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("Producto Guardado");
                }else{
                    
                    rq.setSuccess(false);
                    rq.setData(null);
                    rq.setMsg("Error al guardar Producto");
                
                }
            }else{
                
                if (result2 == true){ 
                
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("Producto Actualizado");
                }else{
                    
                    rq.setSuccess(false);
                    rq.setData(null);
                    rq.setMsg("Error al guardar Producto");
                
                }
            
            
            
            }
            
        }catch(Exception e){
            e.printStackTrace();
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("Error al guardar");
           return rq;
        }
        
        return rq;
    }
          @RequestMapping(value = "/deleteProducto", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery deleteProducto( String data, WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
   //     System.out.println("data factura cancelacion:"+data);
        
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }


            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
          
                   
        try{
            List<ProductoDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            ProductoDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }

  
            Iterator<ProductoDTO> it = lista.iterator();
            
            ErpProvProductos prod = new ErpProvProductos();
            ErpProvProductosId prodId = new ErpProvProductosId();
     
             
            int banderaGe = 0 ;
            while (it.hasNext()) {
//                 System.out.println("-------------------------------------------------------------------");
                 ProductoDTO ss = it.next();
                 
                 prodId.setCompania(ss.compania);
                 prodId.setIdProducto(Integer.parseInt(ss.idProductor));
                 prodId.setProveedor(ss.proveedor);
                 prod.setId(prodId);
                 prod.setCodigo(ss.codigo);
                 prod.setNombre(ss.nombre);
                 prod.setPrecioSinIva(new BigDecimal(ss.precioSinIva));
                 prod.setUnidadMedida(ss.unidadMedida);
                 
                 erpProvProductosDao.delete(prod);
               
                  banderaGe = 1;
            }
            
          
            
            if (banderaGe == 1){
            
                
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("Registros eliminados correctamente");
              
                
            }else{
                
                rq.setSuccess(true);
                rq.setData(null);
                rq.setMsg("Error al eliminar");
                
            }
            

        }catch(Exception e){
            e.printStackTrace();
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("Error al eliminar");
           return rq;
        }
        
        return rq;
    }
    
    
            
      @RequestMapping(value = "/actDatosBanExt", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery actDatosBan( @RequestParam("IBAN") String iban,
            @RequestParam("SWIFT") String swift,
             WebRequest webRequest, Model model){

        
          ResponseQuery rq = new ResponseQuery();

            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            
            
           // System.out.println("usuario "+usuario);
           // System.out.println("ctaClabe "+ctaClabe);
           // System.out.println("banco "+banco);
           // System.out.println("ctaNum "+ctaNum);
           // System.out.println("compania "+compania);
            
            ErpCClientes prov = new ErpCClientes();
            ErpCClientesId provId = new ErpCClientesId();
            
            provId.setCompania(compania);
            prov.setId(provId);
            prov.setIban(iban);
            prov.setSwift(swift);
            prov.setUsuario(usuario);
            
            
            boolean result = erpCClientesDao.updateDatosBancariosExt(prov);
            
            
            
            
            if (result == true){
                
                
                Querys queP = new Querys();
                String storeP = queP.getSQL("InsertaCorreoProvBanExt");


                Map paramProv = new HashMap();
                       paramProv.put("compania",compania);
                       paramProv.put("usuario",usuario);
                       paramProv.put("iban",iban);
                       paramProv.put("swift",swift);

                   int val = processDao.execute(storeP, paramProv);
                
                
                
                rq.setData(null);
                rq.setMsg("Datos Guardados Correctamente");
                rq.setSuccess(true);
                
            
            
            }else{
            
                rq.setData(null);
                rq.setMsg("Error al guardar la información");
                rq.setSuccess(false);
            
            }
        
         return rq;
    }        
    
       @RequestMapping(value = "/actDatosBan", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery actDatosBan( @RequestParam("CTA_CLABE") String ctaClabe,
            @RequestParam("CTA_NUM") String ctaNum,
            @RequestParam("BANCO") String banco,
            
             WebRequest webRequest, Model model){

        
          ResponseQuery rq = new ResponseQuery();

            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            
            
           // System.out.println("usuario "+usuario);
           // System.out.println("ctaClabe "+ctaClabe);
           // System.out.println("banco "+banco);
           // System.out.println("ctaNum "+ctaNum);
           // System.out.println("compania "+compania);
            
            ErpCClientes prov = new ErpCClientes();
            ErpCClientesId provId = new ErpCClientesId();
            
            provId.setCompania(compania);
            prov.setId(provId);
            prov.setCuentaClave(ctaClabe);
            prov.setBanco(banco);
            prov.setNumeroCuenta(ctaNum);
            prov.setUsuario(usuario);
            
            
            boolean result = erpCClientesDao.updateDatosBancarios(prov);
            
            
            
            
            if (result == true){
                
                
                Querys queP = new Querys();
                String storeP = queP.getSQL("InsertaCorreoProvBan");


                Map paramProv = new HashMap();
                       paramProv.put("compania",compania);
                       paramProv.put("usuario",usuario);
                       paramProv.put("banco",banco);
                       paramProv.put("ctaNum",ctaNum);
                       paramProv.put("ctaClabe",ctaClabe);


                   int val = processDao.execute(storeP, paramProv);
                
                
                
                rq.setData(null);
                rq.setMsg("Datos Guardados Correctamente");
                rq.setSuccess(true);
                
            
            
            }else{
            
                rq.setData(null);
                rq.setMsg("Error al guardar la información");
                rq.setSuccess(false);
            
            }
        
         return rq;
    }
    

    public void setProcessDao(ProcessDao processDao) {
        this.processDao = processDao;
    }

    public void setErpCClientesDao(ErpCClientesDao erpCClientesDao) {
        this.erpCClientesDao = erpCClientesDao;
    }

    public void setErpProvDireccionDao(ErpProvDireccionDao erpProvDireccionDao) {
        this.erpProvDireccionDao = erpProvDireccionDao;
    }

    public void setErpProvProductosDao(ErpProvProductosDao erpProvProductosDao) {
        this.erpProvProductosDao = erpProvProductosDao;
    }

    public void setMailVerificacion(MailVerificacion mailVerificacion) {
        this.mailVerificacion = mailVerificacion;
    }
    
    
    
}
