/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.feraz.cxp.controll;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.feraz.cxp.dao.ErpCpOtrasDao;
import com.feraz.cxp.dto.CxpOtrasDTO;
import com.feraz.cxp.dto.ViaticosDTO;
import com.feraz.cxp.model.ErpCpOtras;
import com.feraz.cxp.model.ErpCpOtrasId;
import com.feraz.cxp.model.ErpCxpFolios;
import com.feraz.cxp.model.ErpCxpFoliosId;
import com.feraz.facturas.webcontrolfe.dto.FileInfo;
import com.feraz.ordencompra.dao.ErpOrdenCompraDao;
import com.feraz.ordencompra.dao.ErpOrdenCompraDetDao;
import com.feraz.ordencompra.dao.ErpOrdenXFacturaDao;
import com.feraz.ordencompra.model.ErpOrdenCompra;
import com.feraz.ordencompra.model.ErpOrdenCompraDet;
import com.feraz.ordencompra.model.ErpOrdenCompraDetId;
import com.feraz.ordencompra.model.ErpOrdenCompraId;
import com.feraz.ordencompra.model.ErpOrdenXFactura;
import com.feraz.ordencompra.model.ErpOrdenXFacturaId;
import com.feraz.polizas3.model.FileUploadBean;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import org.jamh.data.process.ProcessDao;
import org.jamh.wf.json.model.ResponseQuery;
import org.jamh.wf.process.Querys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author Administrador
 */

@Controller
@RequestMapping("/CXP")
@SessionAttributes({"compania", "usuario"})
public class ProcessCXPOtros {
    

    @Value("${document.file.dirOutDocumentOtras}")
    private String dirOutFileDocument;
    @Value("${document.file.dirURLOutDocumentOtras}")
    private String dirUrlOutDocument;
    @Value("${document.file.maxZiseOtras}")
    private String maxSizeDocument;
    
     @Value("${document.file.dirOutDocumentOrden}")
    private String dirOutFileDocumentOrden;
    @Value("${document.file.dirURLOutDocumentOrden}")
    private String dirUrlOutDocumentOrden;
    @Value("${document.file.maxZiseOrden}")
    private String maxSizeDocumentOrden;

    private ErpCpOtrasDao ErpCpOtrasDao;
    private ProcessDao processDao;
    
      private String msgErr;
    private String extension = "";
    //private String nombreArc = "";
    private String path;
    private String pathXML;
    private String url;
    
      @Autowired
    private ErpOrdenCompraDao erpOrdenCompraDao;
    
    @Autowired
    private ErpOrdenCompraDetDao erpOrdenCompraDetDao;
    
    
    @Autowired
    private ErpOrdenXFacturaDao erpOrdenXFacturaDao;
    
    
    @RequestMapping(value = "/saveOtrosCXP", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery saveCXPOtros( WebRequest webRequest, Model model) {

        ResponseQuery rq = new ResponseQuery();
        String compania = model.asMap().get("compania").toString();             
         System.out.println("compania:"+compania);  
         
         System.out.println("txtTIPO_CAMBIO:"+webRequest.getParameter("TIPO_CAMBIO")); 
         
                  System.out.println("rfc:"+webRequest.getParameter("RFCEmisor")); 
                  
           String numero = webRequest.getParameter("NUMERO").toString();
           String rfcEmisor = webRequest.getParameter("RFCEmisor").toString();
           String tipoGasto = webRequest.getParameter("TIPO_GASTO").toString();
           String fecha = webRequest.getParameter("FECHA").toString();
           String moneda = webRequest.getParameter("MONEDA").toString();
           String beneficiario = webRequest.getParameter("BENEFICIARIO").toString();
           String cboBeneficiario = webRequest.getParameter("cboBENEFICIARIO").toString();
           String importe = webRequest.getParameter("IMPORTE").toString();
           String iva = webRequest.getParameter("IVA").toString();
           String otrosImpuestos = webRequest.getParameter("OTROS_IMPUESTOS").toString();
           String total = webRequest.getParameter("TOTAL").toString();
           String ctoCxp = webRequest.getParameter("CTO_CXP").toString();
           String conceptoCxp = webRequest.getParameter("CONCEPTO_CXP").toString();
           String fechaV = webRequest.getParameter("FECHA_V").toString();
           String tipoCambio = webRequest.getParameter("TIPO_CAMBIO").toString();
           String descripcion = webRequest.getParameter("DESCRIPCION_OTRAS").toString();
           String facturable = webRequest.getParameter("cboFacturable").toString();
          
                System.out.println("beneficiario"+beneficiario);
                System.out.println("cboBeneficiario"+cboBeneficiario);
                                                          
        try {
            
            SimpleDateFormat formatFecha = new SimpleDateFormat("dd/MM/yyyy");
      
                 System.out.println("fecha: "+fecha);

                System.out.println("fecha: "+formatFecha.parse(fecha));
            
            ErpCpOtras erpCpOtras = new ErpCpOtras();
            ErpCpOtrasId erpCpOtrasId = new ErpCpOtrasId();
            
            
            if (numero == null || numero == ""){
            
           
            erpCpOtrasId.setCompania(compania);
            
            int id = ErpCpOtrasDao.getMaxErpCpOtrasId(erpCpOtrasId);
            
             erpCpOtrasId.setId(id);
            
            erpCpOtras.setId(erpCpOtrasId);
            erpCpOtras.setRfc(rfcEmisor);
            erpCpOtras.setTipoGasto(tipoGasto);
            if(!fecha.equalsIgnoreCase("")){
            erpCpOtras.setFecha(formatFecha.parse(fecha));
            }
            erpCpOtras.setMoneda(moneda);
            erpCpOtras.setDescripcion(descripcion);
               if (beneficiario.equalsIgnoreCase("")){
                
              erpCpOtras.setBeneficiario(cboBeneficiario);
            
            }else{
                 erpCpOtras.setBeneficiario(beneficiario);
            }
                
            
            erpCpOtras.setImporte(Double.parseDouble(importe));
            erpCpOtras.setIva(Double.parseDouble(iva));
            if (otrosImpuestos.equalsIgnoreCase("")){
                 erpCpOtras.setOtrosImpuestos(Double.parseDouble("0"));
            }else{
              erpCpOtras.setOtrosImpuestos(Double.parseDouble(otrosImpuestos));
            }
            erpCpOtras.setTotal(Double.parseDouble(total));
            erpCpOtras.setCtoCxp(ctoCxp);
            erpCpOtras.setConceptoCxp(conceptoCxp);
            erpCpOtras.setFacturable(facturable);
            if(!fechaV.equalsIgnoreCase("")){
            erpCpOtras.setFechaVencCxp(formatFecha.parse(fechaV));
            }
            if(moneda.equalsIgnoreCase("MXN")){
                erpCpOtras.setTipoCambio("");
           
            }else{
                
                 erpCpOtras.setTipoCambio(tipoCambio);
                
            }
            ErpCpOtrasId result = ErpCpOtrasDao.save(erpCpOtras);
            
            if(result == null){
                
                rq.setSuccess(false);
                rq.setMsg("Error al guardar Datos");
                
            }else{
                
                rq.setSuccess(true);
                rq.setMsg(""+id);
            
            }
            
            }else{
            
            erpCpOtrasId.setId(Integer.parseInt(numero));
            erpCpOtrasId.setCompania(compania);
            erpCpOtras.setId(erpCpOtrasId);
            erpCpOtras.setRfc(rfcEmisor);
            erpCpOtras.setDescripcion(descripcion);
            erpCpOtras.setTipoGasto(tipoGasto);
             if(!fecha.equalsIgnoreCase("")){
            erpCpOtras.setFecha(formatFecha.parse(fecha));
             }
            erpCpOtras.setMoneda(moneda);
             if (beneficiario.equalsIgnoreCase("")){
                
              erpCpOtras.setBeneficiario(cboBeneficiario);
            
            }else{
                 erpCpOtras.setBeneficiario(beneficiario);
            }
            erpCpOtras.setImporte(Double.parseDouble(importe));
            erpCpOtras.setIva(Double.parseDouble(iva));
            erpCpOtras.setOtrosImpuestos(Double.parseDouble(otrosImpuestos));
            erpCpOtras.setTotal(Double.parseDouble(total));
            erpCpOtras.setCtoCxp(ctoCxp);
            erpCpOtras.setConceptoCxp(conceptoCxp);
            erpCpOtras.setFacturable(facturable);
            if(!fechaV.equalsIgnoreCase("")){
            erpCpOtras.setFechaVencCxp(formatFecha.parse(fechaV));
            }

             if(moneda.equalsIgnoreCase("MXN")){
                  System.out.println("tipo de cambio null");
                erpCpOtras.setTipoCambio("");
           
            }else{
                  erpCpOtras.setTipoCambio(tipoCambio);
             System.out.println("tipo de cambiodatos");
                
             }
             
            
            
               boolean result = ErpCpOtrasDao.update(erpCpOtras);
            
            if(result == false){
                
                rq.setSuccess(false);
                rq.setMsg("Error al guardar Datos");
                
            }else{
                
                rq.setSuccess(true);
                rq.setMsg(numero);
            
            }
            
            
            
            }
            
             
        } catch (Exception e) {
             rq.setSuccess(false);
            rq.setMsg("Error al guardar  cxp");
            e.printStackTrace();
            return rq;
        }

        return rq;

    }
    
        @RequestMapping(value = "/saveOtrosCXPPortal", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery saveCXPOtrosPortal( WebRequest webRequest, Model model,FileUploadBean uploadItem) {

        ResponseQuery rq = new ResponseQuery();
        String compania = model.asMap().get("compania").toString();             
         System.out.println("compania:"+compania);  
         
         System.out.println("txtTIPO_CAMBIO:"+webRequest.getParameter("TIPO_CAMBIO")); 
         
                  System.out.println("rfc:"+webRequest.getParameter("RFCEmisor")); 
                  
           String numero = webRequest.getParameter("NUMERO").toString();
           String rfcEmisor = webRequest.getParameter("RFCEmisor").toString();
           String tipoGasto = webRequest.getParameter("TIPO_GASTO").toString();
           String fecha = webRequest.getParameter("FECHA").toString();
           String moneda = webRequest.getParameter("MONEDA").toString();
           String beneficiario = webRequest.getParameter("BENEFICIARIO").toString();
           String cboBeneficiario = webRequest.getParameter("cboBENEFICIARIO").toString();
           String importe = webRequest.getParameter("IMPORTE").toString();
           String iva = webRequest.getParameter("IVA").toString();
           String otrosImpuestos = webRequest.getParameter("OTROS_IMPUESTOS").toString();
           String total = webRequest.getParameter("TOTAL").toString();
           String ctoCxp = webRequest.getParameter("CTO_CXP").toString();
           String conceptoCxp = webRequest.getParameter("CONCEPTO_CXP").toString();
           String fechaV = webRequest.getParameter("FECHA_V").toString();
           String tipoCambio = webRequest.getParameter("TIPO_CAMBIO").toString();
           String descripcion = webRequest.getParameter("DESCRIPCION_OTRAS").toString();
           String facturable = webRequest.getParameter("cboFacturable").toString();
           String idCliente = webRequest.getParameter("ID_CLIENTE").toString();
           
           
          
                System.out.println("beneficiario"+beneficiario);
                System.out.println("cboBeneficiario"+cboBeneficiario);
                                                          
        try {
            
             MultipartFile file = uploadItem.getFile();

            InputStream inputStream = null;
            OutputStream outputStream = null;
            
            ErpCpOtras erpCpOtras = new ErpCpOtras();
            ErpCpOtrasId erpCpOtrasId = new ErpCpOtrasId();
            
            if (file.getSize() > 0) {
                inputStream = file.getInputStream();
                long maxSize = new Long(maxSizeDocument);
                if (file.getSize() > maxSize) {
                    //System.out.println("File Size:::" + file.getSize());
                     rq.setSuccess(false);
                     rq.setMsg("Archivo demasiado grande.");
                    return rq;
                }

                int i = file.getOriginalFilename().lastIndexOf('.');
                
//                System.out.println("Nombre:" + file.getOriginalFilename());
                String extension = "";
                String nombreArc ="";
               
                    extension = file.getOriginalFilename().substring(i + 1);
                    nombreArc = file.getOriginalFilename().substring(0 , i);
//                    System.out.println("i:" + i);
//               System.out.println("exte:" + extension);
//               System.out.println("nombreArc:" + nombreArc);
               // System.out.println("exte:" + extension);
//                if (!extension.trim().equals("pdf")) {
//                    isSave = false;
//                    extjsFormResult.setMessage("Archivo pdf no valido");
//                    extjsFormResult.setSuccess(isSave);
//                    return extjsFormResult.toString();
//                }
                String hora = "" + System.currentTimeMillis();
                String path =dirOutFileDocument+compania+"/"+nombreArc+"."+extension;
                erpCpOtras.setArchivo(nombreArc+"."+extension);
                erpCpOtras.setRuta(path);
               // polizasArchivos.setPath(path);
                String url =dirUrlOutDocument+compania+"/"+nombreArc+"."+extension;
               // polizasArchivos.setUrl(url);
               
                revisarDirectorio(compania);
            
                outputStream = new FileOutputStream(path);

                int readBytes = 0;
                byte[] buffer = new byte[10000];
                while ((readBytes = inputStream.read(buffer, 0, 10000)) != -1) {
                    outputStream.write(buffer, 0, readBytes);
                }
                outputStream.close();
                inputStream.close();
            }
            
            SimpleDateFormat formatFecha = new SimpleDateFormat("dd/MM/yyyy");
      
                 System.out.println("fecha: "+fecha);

                System.out.println("fecha: "+formatFecha.parse(fecha));
            
            
            
            System.out.println("numero: "+numero);
            //System.out.println("numero: "+numero.isEmpty());
            
           
           
            erpCpOtrasId.setCompania(compania);
            
            int id = ErpCpOtrasDao.getMaxErpCpOtrasId(erpCpOtrasId);
            
             
             erpCpOtrasId.setId(id);
            
            erpCpOtras.setId(erpCpOtrasId);
            erpCpOtras.setRfc(rfcEmisor);
            erpCpOtras.setTipoGasto(tipoGasto);
            if(!fecha.equalsIgnoreCase("")){
            erpCpOtras.setFecha(formatFecha.parse(fecha));
            }
            erpCpOtras.setMoneda(moneda);
            erpCpOtras.setDescripcion(descripcion);
               if (beneficiario.equalsIgnoreCase("")){
                
              erpCpOtras.setBeneficiario(cboBeneficiario);
            
            }else{
                 erpCpOtras.setBeneficiario(beneficiario);
            }
                
            
            erpCpOtras.setImporte(Double.parseDouble(importe));
            erpCpOtras.setIva(Double.parseDouble(iva));
            if (otrosImpuestos.equalsIgnoreCase("")){
                 erpCpOtras.setOtrosImpuestos(Double.parseDouble("0"));
            }else{
              erpCpOtras.setOtrosImpuestos(Double.parseDouble(otrosImpuestos));
            }
            erpCpOtras.setTotal(Double.parseDouble(total));
            erpCpOtras.setCtoCxp(ctoCxp);
            erpCpOtras.setConceptoCxp(conceptoCxp);
            erpCpOtras.setFacturable(facturable);
            if(!fechaV.equalsIgnoreCase("")){
            erpCpOtras.setFechaVencCxp(formatFecha.parse(fechaV));
            }
            if(moneda.equalsIgnoreCase("MXN")){
                erpCpOtras.setTipoCambio("");
           
            }else{
                
                 erpCpOtras.setTipoCambio(tipoCambio);
                
            }
            erpCpOtras.setIdProveedor(idCliente);
            ErpCpOtrasId result = ErpCpOtrasDao.save(erpCpOtras);
            
               Querys que = new Querys();
            String store = que.getSQL("CONTA_INSERTA_FECHAVENC");
            
             Map parametros= new HashMap();
            
           
             
         
                  
             parametros.put("compania", compania);
             parametros.put("numero", id);
             parametros.put("idCliente", idCliente);
             parametros.put("origen", "OTR");

                
        
    
            
       
                
                
            
            if(result == null){
                
                rq.setSuccess(false);
                rq.setMsg("Error al guardar Datos");
                
            }else{
                
                processDao.execute(store, parametros);
                
                rq.setSuccess(true);
                rq.setMsg(""+id);
            
            }
            
            
            
             
        } catch (Exception e) {
             rq.setSuccess(false);
            rq.setMsg("Error al guardar  cxp");
            e.printStackTrace();
            return rq;
        }

        return rq;

    }
    
            @RequestMapping(value = "/saveOtrosCXPPortalAereo", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery saveCXPOtrosPortalAereo( WebRequest webRequest, Model model,FileUploadBean uploadItemPortal,FileUploadBean uploadItemPortal2) {

        ResponseQuery rq = new ResponseQuery();
        String compania = model.asMap().get("compania").toString();             
         System.out.println("compania:"+compania);  
         
         System.out.println("txtTIPO_CAMBIO:"+webRequest.getParameter("TIPO_CAMBIO")); 
         
                  System.out.println("rfc:"+webRequest.getParameter("RFCEmisor")); 
                  
           String numero = webRequest.getParameter("NUMERO").toString();
           String rfcEmisor = webRequest.getParameter("RFCEmisor").toString();
           String tipoGasto = webRequest.getParameter("TIPO_GASTO").toString();
           String fecha = webRequest.getParameter("FECHA").toString();
           String moneda = webRequest.getParameter("MONEDA").toString();
           String beneficiario = webRequest.getParameter("BENEFICIARIO").toString();
           String cboBeneficiario = webRequest.getParameter("cboBENEFICIARIO").toString();
           String importe = webRequest.getParameter("IMPORTE").toString();
           String iva = webRequest.getParameter("IVA").toString();
           String otrosImpuestos = webRequest.getParameter("OTROS_IMPUESTOS").toString();
           String total = webRequest.getParameter("TOTAL").toString();
           String ctoCxp = webRequest.getParameter("CTO_CXP").toString();
           String conceptoCxp = webRequest.getParameter("CONCEPTO_CXP").toString();
           String fechaV = webRequest.getParameter("FECHA_V").toString();
           String tipoCambio = webRequest.getParameter("TIPO_CAMBIO").toString();
           String descripcion = webRequest.getParameter("DESCRIPCION_OTRAS").toString();
           String facturable = webRequest.getParameter("cboFacturable").toString();
           String idCliente = webRequest.getParameter("ID_CLIENTE").toString();
           String ordenCompra = webRequest.getParameter("ORDEN_COMPRA_OTR").toString();
           
           
          
                System.out.println("beneficiario"+beneficiario);
                System.out.println("cboBeneficiario"+cboBeneficiario);
                                                          
        try {
            
            
              Map orden = new HashMap();
                 String buscaOrden = "";
               
               orden.put("compania", compania);
               orden.put("orden", ordenCompra);
               orden.put("idClienta", idCliente);
               
                   List listOrden = processDao.getMapResult("BuscaOrdenCompraIdExt", orden);
                 if(listOrden.isEmpty()){
                     
                  
                     
                     rq.setSuccess(false);
                    rq.setMsg("La orden de compra es invalida");
                    return rq;
                     
                     
                 
                 }
            
            
             MultipartFile file = uploadItemPortal.getFile();

            InputStream inputStream = null;
            OutputStream outputStream = null;
            
            ErpCpOtras erpCpOtras = new ErpCpOtras();
            ErpCpOtrasId erpCpOtrasId = new ErpCpOtrasId();
            
            if (file.getSize() > 0) {
                inputStream = file.getInputStream();
                long maxSize = new Long(maxSizeDocument);
                if (file.getSize() > maxSize) {
                    //System.out.println("File Size:::" + file.getSize());
                     rq.setSuccess(false);
                     rq.setMsg("Archivo demasiado grande.");
                    return rq;
                }

                int i = file.getOriginalFilename().lastIndexOf('.');
                
//                System.out.println("Nombre:" + file.getOriginalFilename());
                String extension = "";
                String nombreArc ="";
               
                    extension = file.getOriginalFilename().substring(i + 1);
                    nombreArc = file.getOriginalFilename().substring(0 , i);
//                    System.out.println("i:" + i);
//               System.out.println("exte:" + extension);
//               System.out.println("nombreArc:" + nombreArc);
               // System.out.println("exte:" + extension);
//                if (!extension.trim().equals("pdf")) {
//                    isSave = false;
//                    extjsFormResult.setMessage("Archivo pdf no valido");
//                    extjsFormResult.setSuccess(isSave);
//                    return extjsFormResult.toString();
//                }
                String hora = "" + System.currentTimeMillis();
                String path =dirOutFileDocument+compania+"/"+nombreArc+"."+extension;
                erpCpOtras.setArchivo(nombreArc+"."+extension);
                erpCpOtras.setRuta(path);
               // polizasArchivos.setPath(path);
                String url =dirUrlOutDocument+compania+"/"+nombreArc+"."+extension;
               // polizasArchivos.setUrl(url);
               
                revisarDirectorio(compania);
            
                outputStream = new FileOutputStream(path);

                int readBytes = 0;
                byte[] buffer = new byte[10000];
                while ((readBytes = inputStream.read(buffer, 0, 10000)) != -1) {
                    outputStream.write(buffer, 0, readBytes);
                }
                outputStream.close();
                inputStream.close();
            }
            
            SimpleDateFormat formatFecha = new SimpleDateFormat("dd/MM/yyyy");
      
                 System.out.println("fecha: "+fecha);

                System.out.println("fecha: "+formatFecha.parse(fecha));
            
            
            
            System.out.println("numero: "+numero);
            //System.out.println("numero: "+numero.isEmpty());
            
           
           
            erpCpOtrasId.setCompania(compania);
            
            int id = ErpCpOtrasDao.getMaxErpCpOtrasId(erpCpOtrasId);
            
             
             erpCpOtrasId.setId(id);
            
            erpCpOtras.setId(erpCpOtrasId);
            erpCpOtras.setRfc(rfcEmisor);
            erpCpOtras.setTipoGasto(tipoGasto);
            if(!fecha.equalsIgnoreCase("")){
            erpCpOtras.setFecha(formatFecha.parse(fecha));
            }
            erpCpOtras.setMoneda(moneda);
            erpCpOtras.setDescripcion(descripcion);
               if (beneficiario.equalsIgnoreCase("")){
                
              erpCpOtras.setBeneficiario(cboBeneficiario);
            
            }else{
                 erpCpOtras.setBeneficiario(beneficiario);
            }
                
            
            erpCpOtras.setImporte(Double.parseDouble(importe));
            erpCpOtras.setIva(Double.parseDouble(iva));
            if (otrosImpuestos.equalsIgnoreCase("")){
                 erpCpOtras.setOtrosImpuestos(Double.parseDouble("0"));
            }else{
              erpCpOtras.setOtrosImpuestos(Double.parseDouble(otrosImpuestos));
            }
            erpCpOtras.setTotal(Double.parseDouble(total));
            erpCpOtras.setCtoCxp(ctoCxp);
            erpCpOtras.setConceptoCxp(conceptoCxp);
            erpCpOtras.setFacturable(facturable);
            if(!fechaV.equalsIgnoreCase("")){
            erpCpOtras.setFechaVencCxp(formatFecha.parse(fechaV));
            }
            if(moneda.equalsIgnoreCase("MXN")){
                erpCpOtras.setTipoCambio("");
           
            }else{
                
                 erpCpOtras.setTipoCambio(tipoCambio);
                
            }
            erpCpOtras.setIdProveedor(idCliente);
            ErpCpOtrasId result = ErpCpOtrasDao.save(erpCpOtras);
            
               Querys que = new Querys();
            String store = que.getSQL("CONTA_INSERTA_FECHAVENC");
            
             Map parametros= new HashMap();
            
           
             
         
                  
             parametros.put("compania", compania);
             parametros.put("numero", id);
             parametros.put("idCliente", idCliente);
             parametros.put("origen", "OTR");

                
            MultipartFile file2 = uploadItemPortal2.getFile();
             
            FileInfo fi2 = generaArchivosOrden(file2, ordenCompra, compania,id);
       
                 if (!fi2.isIsSave()) {
                    rq.setMsg("Error al guardar el archivo de la orden de compra:" + msgErr);
                    rq.setSuccess(false);
                    return rq;
                } 
                
            
            if(result == null){
                
                rq.setSuccess(false);
                rq.setMsg("Error al guardar Datos");
                
            }else{
                
                processDao.execute(store, parametros);
                
                rq.setSuccess(true);
                rq.setMsg(""+id);
            
            }
            
            
            
             
        } catch (Exception e) {
             rq.setSuccess(false);
            rq.setMsg("Error al guardar  cxp");
            e.printStackTrace();
            return rq;
        }

        return rq;

    }
    
    
               @RequestMapping(value = "/saveOtrosCXPPortalAereoOrden", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery saveCXPOtrosPortalAereoOrden( WebRequest webRequest, Model model,FileUploadBean uploadItemPortal,FileUploadBean uploadItemPortal2) {

        ResponseQuery rq = new ResponseQuery();
        String compania = model.asMap().get("compania").toString();             
         System.out.println("compania:"+compania);  
         
         System.out.println("txtTIPO_CAMBIO:"+webRequest.getParameter("TIPO_CAMBIO")); 
         
                  System.out.println("rfc:"+webRequest.getParameter("RFCEmisor")); 
                  
           String numero = webRequest.getParameter("NUMERO").toString();
           String rfcEmisor = webRequest.getParameter("RFCEmisor").toString();
           String tipoGasto = webRequest.getParameter("TIPO_GASTO").toString();
           String fecha = webRequest.getParameter("FECHA").toString();
           String moneda = webRequest.getParameter("MONEDA").toString();
           String beneficiario = webRequest.getParameter("BENEFICIARIO").toString();
           String cboBeneficiario = webRequest.getParameter("cboBENEFICIARIO").toString();
           String importe = webRequest.getParameter("IMPORTE").toString();
           String iva = webRequest.getParameter("IVA").toString();
           String otrosImpuestos = webRequest.getParameter("OTROS_IMPUESTOS").toString();
           String total = webRequest.getParameter("TOTAL").toString();
           String ctoCxp = webRequest.getParameter("CTO_CXP").toString();
           String conceptoCxp = webRequest.getParameter("CONCEPTO_CXP").toString();
           String fechaV = webRequest.getParameter("FECHA_V").toString();
           String tipoCambio = webRequest.getParameter("TIPO_CAMBIO").toString();
           String descripcion = webRequest.getParameter("DESCRIPCION_OTRAS").toString();
           String facturable = webRequest.getParameter("cboFacturable").toString();
           String idCliente = webRequest.getParameter("ID_CLIENTE").toString();
           String ordenCompra = webRequest.getParameter("ORDEN_COMPRA_OTR").toString();
           String linea = webRequest.getParameter("LINEA_OTR").toString();
           
           
          
                System.out.println("beneficiario"+beneficiario);
                System.out.println("cboBeneficiario"+cboBeneficiario);
                                                          
        try {
            
            
              Map orden = new HashMap();
                 String buscaOrden = "";
               
               orden.put("compania", compania);
               orden.put("orden", ordenCompra);
               orden.put("idClienta", idCliente);
               
                   List listOrden = processDao.getMapResult("BuscaOrdenCompraIdExt", orden);
                 if(listOrden.isEmpty()){
                     
                  
                     
                     rq.setSuccess(false);
                    rq.setMsg("La orden de compra es invalida");
                    return rq;
                     
                     
                 
                 }
            
            
             MultipartFile file = uploadItemPortal.getFile();

            InputStream inputStream = null;
            OutputStream outputStream = null;
            
            ErpCpOtras erpCpOtras = new ErpCpOtras();
            ErpCpOtrasId erpCpOtrasId = new ErpCpOtrasId();
            
            if (file.getSize() > 0) {
                inputStream = file.getInputStream();
                long maxSize = new Long(maxSizeDocument);
                if (file.getSize() > maxSize) {
                    //System.out.println("File Size:::" + file.getSize());
                     rq.setSuccess(false);
                     rq.setMsg("Archivo demasiado grande.");
                    return rq;
                }

                int i = file.getOriginalFilename().lastIndexOf('.');
                
//                System.out.println("Nombre:" + file.getOriginalFilename());
                String extension = "";
                String nombreArc ="";
               
                    extension = file.getOriginalFilename().substring(i + 1);
                    nombreArc = file.getOriginalFilename().substring(0 , i);
//                    System.out.println("i:" + i);
//               System.out.println("exte:" + extension);
//               System.out.println("nombreArc:" + nombreArc);
               // System.out.println("exte:" + extension);
//                if (!extension.trim().equals("pdf")) {
//                    isSave = false;
//                    extjsFormResult.setMessage("Archivo pdf no valido");
//                    extjsFormResult.setSuccess(isSave);
//                    return extjsFormResult.toString();
//                }
                String hora = "" + System.currentTimeMillis();
                String path =dirOutFileDocument+compania+"/"+nombreArc+"."+extension;
                erpCpOtras.setArchivo(nombreArc+"."+extension);
                erpCpOtras.setRuta(path);
               // polizasArchivos.setPath(path);
                String url =dirUrlOutDocument+compania+"/"+nombreArc+"."+extension;
               // polizasArchivos.setUrl(url);
               
                revisarDirectorio(compania);
            
                outputStream = new FileOutputStream(path);

                int readBytes = 0;
                byte[] buffer = new byte[10000];
                while ((readBytes = inputStream.read(buffer, 0, 10000)) != -1) {
                    outputStream.write(buffer, 0, readBytes);
                }
                outputStream.close();
                inputStream.close();
            }
            
            SimpleDateFormat formatFecha = new SimpleDateFormat("dd/MM/yyyy");
      
                 System.out.println("fecha: "+fecha);

                System.out.println("fecha: "+formatFecha.parse(fecha));
            
            
            
            System.out.println("numero: "+numero);
            //System.out.println("numero: "+numero.isEmpty());
            
           
           
            erpCpOtrasId.setCompania(compania);
            
            int id = ErpCpOtrasDao.getMaxErpCpOtrasId(erpCpOtrasId);
            
             
             erpCpOtrasId.setId(id);
            
            erpCpOtras.setId(erpCpOtrasId);
            erpCpOtras.setRfc(rfcEmisor);
            erpCpOtras.setTipoGasto(tipoGasto);
            if(!fecha.equalsIgnoreCase("")){
            erpCpOtras.setFecha(formatFecha.parse(fecha));
            }
            erpCpOtras.setMoneda(moneda);
            erpCpOtras.setDescripcion(descripcion);
               if (beneficiario.equalsIgnoreCase("")){
                
              erpCpOtras.setBeneficiario(cboBeneficiario);
            
            }else{
                 erpCpOtras.setBeneficiario(beneficiario);
            }
                
            
            erpCpOtras.setImporte(Double.parseDouble(importe));
            erpCpOtras.setIva(Double.parseDouble(iva));
            if (otrosImpuestos.equalsIgnoreCase("")){
                 erpCpOtras.setOtrosImpuestos(Double.parseDouble("0"));
            }else{
              erpCpOtras.setOtrosImpuestos(Double.parseDouble(otrosImpuestos));
            }
            erpCpOtras.setTotal(Double.parseDouble(total));
            erpCpOtras.setCtoCxp(ctoCxp);
            erpCpOtras.setConceptoCxp(conceptoCxp);
            erpCpOtras.setFacturable(facturable);
            if(!fechaV.equalsIgnoreCase("")){
            erpCpOtras.setFechaVencCxp(formatFecha.parse(fechaV));
            }
            if(moneda.equalsIgnoreCase("MXN")){
                erpCpOtras.setTipoCambio("");
           
            }else{
                
                 erpCpOtras.setTipoCambio(tipoCambio);
                
            }
            erpCpOtras.setIdProveedor(idCliente);
            ErpCpOtrasId result = ErpCpOtrasDao.save(erpCpOtras);
            
               Querys que = new Querys();
            String store = que.getSQL("CONTA_INSERTA_FECHAVENC");
            
             Map parametros= new HashMap();
            
           
             
         
                  
             parametros.put("compania", compania);
             parametros.put("numero", id);
             parametros.put("idCliente", idCliente);
             parametros.put("origen", "OTR");

                
            MultipartFile file2 = uploadItemPortal2.getFile();
             
            FileInfo fi2 = generaArchivosOrden(file2, ordenCompra, compania,id);
       
                 if (!fi2.isIsSave()) {
                    rq.setMsg("Error al guardar el archivo de la orden de compra:" + msgErr);
                    rq.setSuccess(false);
                    return rq;
                } 
                
            
             generaRelacionOrden(compania,id,ordenCompra,linea, total);    
                 
            if(result == null){
                
                rq.setSuccess(false);
                rq.setMsg("Error al guardar Datos");
                
            }else{
                
                processDao.execute(store, parametros);
                
                rq.setSuccess(true);
                rq.setMsg(""+id);
            
            }
            
            
            
             
        } catch (Exception e) {
             rq.setSuccess(false);
            rq.setMsg("Error al guardar  cxp");
            e.printStackTrace();
            return rq;
        }

        return rq;

    }
    
        public boolean generaRelacionOrden(String compania,int data,String ordenCompra,String linea, String importe){
        
            ErpOrdenXFactura ordeFact = new ErpOrdenXFactura();
            ErpOrdenXFacturaId ordenFactId = new ErpOrdenXFacturaId();
            ErpOrdenCompraDet ordenDet = new ErpOrdenCompraDet();
            ErpOrdenCompraDetId ordenDetId = new ErpOrdenCompraDetId();
                  
            ErpOrdenCompra orden = new ErpOrdenCompra();
            ErpOrdenCompraId ordenId = new ErpOrdenCompraId();
            
             Map impoFact = new HashMap();
                   impoFact.put("compania", compania);
                   impoFact.put("numero", data);
               
                 // List listImpoFact = processDao.getMapResult("BuscaImportesFactura", impoFact);
                 // Map mapImpoFact = (HashMap) listImpoFact.get(0);
                  
        
            ordenFactId.setCompania(compania);
                  ordenFactId.setIdOrden(Integer.parseInt(ordenCompra));
                  ordenFactId.setIdOrdenDet(Integer.parseInt(linea));
                  ordenFactId.setNumeroFe(data);
                  ordeFact.setId(ordenFactId);
                  ordeFact.setOrigen("OTR");
                  ordeFact.setSubtotal(new BigDecimal(importe));
                  ordeFact.setIva(new BigDecimal(0));
                  ordeFact.setTotal(new BigDecimal(importe));
                 
                  erpOrdenXFacturaDao.save(ordeFact);
                  
                      Map ordenFact = new HashMap();
                   ordenFact.put("compania", compania);
                   ordenFact.put("idOrden", ordenCompra);
                   ordenFact.put("idOrdenDet", linea);
                   ordenFact.put("origen", "OTR");
                   
               
                  List listOrdenFact = processDao.getMapResult("BuscaImportesOrdenDet", ordenFact);
                  
                  List listOrdenFactM = processDao.getMapResult("BuscaImportesOrden", ordenFact);
//                   
                  Map ordenTotal = (HashMap) listOrdenFact.get(0);
                  Map ordenMTotal = (HashMap) listOrdenFactM.get(0);
                  
                   System.out.println("Obteniendo mapa");
             
                  
                  ordenDetId.setCompania(compania);
                  ordenDetId.setIdOrdenCompra(Integer.parseInt(ordenCompra));
                  ordenDetId.setLinea(Integer.parseInt(linea));
                  
                  ordenDet.setId(ordenDetId);
                  ordenDet.setTotal(new BigDecimal(ordenTotal.get("TOTAL").toString()));
                  ordenDet.setPrecioUnitario(new BigDecimal(ordenTotal.get("SUBTOTAL").toString()));
                  ordenDet.setIva(new BigDecimal(ordenTotal.get("IVA").toString()));
                  System.out.println("actualizando importes");
                  erpOrdenCompraDetDao.actualizaImportes(ordenDet);
                  
                  ordenId.setCompania(compania);
                  ordenId.setId(Integer.parseInt(ordenCompra));
                  orden.setId(ordenId);
                  orden.setTotalPendiente(new BigDecimal(ordenMTotal.get("TOTAL").toString()));
                  
                  erpOrdenCompraDao.actualizaImportes(orden);
        return true;
    
    }
    
            public FileInfo generaArchivosOrden(MultipartFile uploadItem, String orden, String dirCompania,int numero) {
        String fileName = null;
        String nombreArchivo = "";
        
        String nombreArc = "";
      //  filesordencompra
                
      
        //  ExtJSFormResult rq = new ExtJSFormResult();
        try {

            MultipartFile file = uploadItem;
            FileInfo fi = new FileInfo();

            InputStream inputStream = null;
            OutputStream outputStream = null;
            if (file.getSize() > 0) {
                inputStream = file.getInputStream();
                long maxSize = new Long(maxSizeDocument);
                if (file.getSize() > maxSize) {
                    msgErr = "Tamaño no valido";
                    //System.out.println("File Size:::" + file.getSize());
                    // isSave = false;
//                    rq.setMsg("Tamaño no valido");
//                    rq.setSuccess(isSave);
                    fi.setIsSave(false);
                    return fi;
                }

                int i = file.getOriginalFilename().lastIndexOf('.');
               // String hora = "" + System.currentTimeMillis();
//                System.out.println("Nombre:" + file.getOriginalFilename());
                extension = file.getOriginalFilename().substring(i + 1);
                nombreArc = file.getOriginalFilename().substring(0, i);
                fi.setFile(nombreArc  + "." + extension);
//                System.out.println("i:" + i);
//                System.out.println("exte:" + extension);
//                System.out.println("nombreArc:" + nombreArc);
//                System.out.println("exte:" + extension);
               
                if ( !extension.toLowerCase().trim().equals("pdf")) {

                    msgErr = "Archivo pdf no valido";

                    fi.setIsSave(false);
                    return fi;
                }

                path = dirOutFileDocumentOrden + dirCompania + "/" + orden + "/" + nombreArc + "." + extension;
                fi.setPath(path);
              
                url = dirOutFileDocumentOrden + nombreArc  + "." + extension;
                fi.setUrl(url);

                revisarDirectorioOrden(dirCompania,orden);
                outputStream = new FileOutputStream(path);

                int readBytes = 0;
                byte[] buffer = new byte[10000];
                while ((readBytes = inputStream.read(buffer, 0, 10000)) != -1) {
                    outputStream.write(buffer, 0, readBytes);
                }
                outputStream.close();
                inputStream.close();
            }
            
             Querys que = new Querys();
            String store = que.getSQL("InsertaArchivoOrden");
            
            Map archivoOrden = new HashMap();
            
            archivoOrden.put("COMPANIA", dirCompania);
            archivoOrden.put("ORDEN_COMPRA", orden);
            archivoOrden.put("ORIGEN", "OTR");
            archivoOrden.put("NUMERO", numero);
            archivoOrden.put("PATH", path);
            archivoOrden.put("URL", url);
            archivoOrden.put("NOMBRE",  nombreArc + "." + extension);
        
                 processDao.execute(store, archivoOrden); 
           

            fi.setIsSave(true);
            return fi;

        } catch (Exception e) {
            e.printStackTrace();
            FileInfo fi = new FileInfo();
            fi.setIsSave(false);
            return fi;
        }
    }
            
               public void revisarDirectorioOrden(String dirCompania,String orden) {

        File file = new File(dirOutFileDocumentOrden + dirCompania + "/" + orden + "/");
//        System.out.println("Directory" + dirOutFileDocument + dirCompania + "/");
        if (!file.exists()) {
            if (file.mkdirs()) {
//                System.out.println("Directory is created!");
            } else {
//                System.out.println("Failed to create directory!");
            }
        }

    }
    
     @RequestMapping(value = "/saveReemComp", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery saveRembComp( String data, @RequestParam("impReembolso") String impReembolso,WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
        
        
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }

        System.out.println("data Pagos creacion:"+data);
        
            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
          
        try{
            List<ViaticosDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            ViaticosDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }            
            
            Iterator<ViaticosDTO> it = lista.iterator();
          
         
            ErpCpOtras erpCpOtras = new ErpCpOtras();
            ErpCpOtrasId erpCpOtrasId = new ErpCpOtrasId();
          
            Querys que = new Querys();
            String store = que.getSQL("GENERA_REEMB_VIATIC");
          
            
            
            while (it.hasNext()) {
//                 System.out.println("-------------------------------------------------------------------");
                 ViaticosDTO ss = it.next();
                 
                 
                 erpCpOtrasId.setCompania(compania);
                
               // erpCpOtrasId.setCompania("TEMP");
            
                int id = ErpCpOtrasDao.getMaxErpCpOtrasId(erpCpOtrasId);

                 erpCpOtrasId.setId(id);

                erpCpOtras.setId(erpCpOtrasId);
                erpCpOtras.setRfc(ss.rfcEmisor);
                erpCpOtras.setTipoGasto("R");
              
              //  erpCpOtras.setFecha(formatFecha.parse(fecha));
               erpCpOtras.setFecha(new Date());
               
                erpCpOtras.setMoneda("MXN");
                erpCpOtras.setDescripcion("Reembolso por viatico");
              
                  erpCpOtras.setBeneficiario(ss.nombreEmisor);

             
                erpCpOtras.setImporte(Double.parseDouble(impReembolso));
                erpCpOtras.setIva(Double.parseDouble("0"));
                erpCpOtras.setOtrosImpuestos(Double.parseDouble("0"));
              
                erpCpOtras.setTotal(Double.parseDouble(impReembolso));
                erpCpOtras.setCtoCxp("");
                erpCpOtras.setConceptoCxp("");
                erpCpOtras.setFacturable("S");
               
                erpCpOtras.setFechaVencCxp(new Date());
                
                erpCpOtras.setTipoCambio("");

                ErpCpOtrasId result = ErpCpOtrasDao.save(erpCpOtras);

                if(result == null){

                    rq.setSuccess(false);
                    rq.setMsg("Error al guardar Datos");

                }else{

                    rq.setSuccess(true);
                    rq.setMsg("Se genero reembolso con numero: "+id);

                }
                
                 Map paramViatico = new HashMap();
                    paramViatico.put("COMPANIA",compania);
                 //   paramViatico.put("COMPANIA","TEMP");
                    paramViatico.put("COMISION",ss.numero);
                    paramViatico.put("ID",id);
                    paramViatico.put("IMPORTE",Double.parseDouble(impReembolso));
                    
                int val = processDao.execute(store, paramViatico);

                     if (val <= 0) {

                }
            


            }
            
            

         
            
        }catch(Exception e){
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("Error al guardar");
           return rq;
        }
        
        return rq;
    }
    
    @RequestMapping(value = "/saveReemCompOtras", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery saveRembCompOtras( String data, @RequestParam("impReembolso") String impReembolso,WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
        
        
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }

        System.out.println("data Pagos creacion:"+data);
        
            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
          
        try{
            List<CxpOtrasDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            CxpOtrasDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }            
            
            Iterator<CxpOtrasDTO> it = lista.iterator();
          
         
            ErpCpOtras erpCpOtras = new ErpCpOtras();
            ErpCpOtrasId erpCpOtrasId = new ErpCpOtrasId();
          
            Querys que = new Querys();
            String store = que.getSQL("GENERA_REEMB_OTRAS");
          
            
            
            while (it.hasNext()) {
//                 System.out.println("-------------------------------------------------------------------");
                 CxpOtrasDTO ss = it.next();
                 
                 
                 erpCpOtrasId.setCompania(compania);
                
               // erpCpOtrasId.setCompania("TEMP");
            
                int id = ErpCpOtrasDao.getMaxErpCpOtrasId(erpCpOtrasId);

                 erpCpOtrasId.setId(id);

                erpCpOtras.setId(erpCpOtrasId);
                erpCpOtras.setRfc(ss.rfcEmisor);
                erpCpOtras.setTipoGasto("R");
              
              //  erpCpOtras.setFecha(formatFecha.parse(fecha));
               erpCpOtras.setFecha(new Date());
               
                erpCpOtras.setMoneda("MXN");
                erpCpOtras.setDescripcion("Reembolso por viatico");
              
                  erpCpOtras.setBeneficiario(ss.nombreEmisor);

             
                erpCpOtras.setImporte(Double.parseDouble(impReembolso));
                erpCpOtras.setIva(Double.parseDouble("0"));
                erpCpOtras.setOtrosImpuestos(Double.parseDouble("0"));
              
                erpCpOtras.setTotal(Double.parseDouble(impReembolso));
                erpCpOtras.setCtoCxp("");
                erpCpOtras.setConceptoCxp("");
                erpCpOtras.setFacturable("S");
               
                erpCpOtras.setFechaVencCxp(new Date());
                
                erpCpOtras.setTipoCambio("");

                ErpCpOtrasId result = ErpCpOtrasDao.save(erpCpOtras);

                if(result == null){

                    rq.setSuccess(false);
                    rq.setMsg("Error al guardar Datos");

                }else{

                    rq.setSuccess(true);
                    rq.setMsg("Se genero reembolso con numero: "+id);

                }
                
                 Map paramViatico = new HashMap();
                    paramViatico.put("COMPANIA",compania);
                 //   paramViatico.put("COMPANIA","TEMP");
                    paramViatico.put("COMISION",ss.id);
                    paramViatico.put("ID",id);
                    paramViatico.put("IMPORTE",Double.parseDouble(impReembolso));
                    
                int val = processDao.execute(store, paramViatico);

                     if (val <= 0) {

                }
            


            }
            
            

         
            
        }catch(Exception e){
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("Error al guardar");
           return rq;
        }
        
        return rq;
    }
    

        public void revisarDirectorio(String compania) {

        File file = new File(dirOutFileDocument + compania + "/");
//        System.out.println("Directory" + dirOutFileDocument + dirCompania + "/");
        if (!file.exists()) {
            if (file.mkdirs()) {
//                System.out.println("Directory is created!");
            } else {
//                System.out.println("Failed to create directory!");
            }
        }

    }
    
    public void setErpCpOtrasDao(ErpCpOtrasDao ErpCpOtrasDao) {
        this.ErpCpOtrasDao = ErpCpOtrasDao;
    }

    public void setProcessDao(ProcessDao processDao) {
        this.processDao = processDao;
    }

    public void setDirOutFileDocument(String dirOutFileDocument) {
        this.dirOutFileDocument = dirOutFileDocument;
    }

    public void setDirUrlOutDocument(String dirUrlOutDocument) {
        this.dirUrlOutDocument = dirUrlOutDocument;
    }

    public void setMaxSizeDocument(String maxSizeDocument) {
        this.maxSizeDocument = maxSizeDocument;
    }
    
    
    
}
