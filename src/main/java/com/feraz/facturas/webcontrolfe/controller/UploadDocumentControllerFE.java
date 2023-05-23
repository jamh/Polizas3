package com.feraz.facturas.webcontrolfe.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
//import com.feraz.contabilidad.convertidor.model.ErpCatConvertidor2;
import com.feraz.contabilidad.convertidor.util.ResponseComprobante;
import com.feraz.contabilidad.convertidor.util.ResponseQuery3;
import com.feraz.contabilidad.sat.electronica.process.GeneraContaElectronica;
import com.feraz.contabilidad.sat.transacciones.dao.ErpSatTransaccionDao;
import com.feraz.contabilidad.sat.transacciones.model.ErpSatTransaccion;
import com.feraz.contabilidad.sat.transacciones.model.ErpSatTransaccionId;
import com.feraz.cxp.dao.ErpCpOtrasDao;
import com.feraz.cxp.dto.PagosAllDTO;
import com.feraz.facturas.webcontrolfe.model.FileUploadBean;
import com.feraz.facturas.webcontrolfe.model.ErpFeComprobantes;
import com.feraz.facturas.webcontrolfe.model.ErpFeComprobantesId;

import com.feraz.facturas.webcontrolfe.model.FileUploadBean2;
import com.feraz.facturas.webcontrolfe.App.App;
import com.feraz.facturas.webcontrolfe.dao1.ErpFeComprobantesDao;
import com.feraz.facturas.webcontrolfe.dto.ComprobanteDto;
import com.feraz.facturas.webcontrolfe.dto.FileInfo;
import com.feraz.facturas.webcontrolfe.dto.PolizasInfo;
import com.feraz.facturas.webcontrolfe.model.ResponseQuery2;
import com.feraz.facturas.webcontrolfe.process.GeneraPolizasListas;
import com.feraz.polizas3.dao.ErpPolizasXFacturasDao;
import com.feraz.polizas3.model.ErpPolizasXFacturas;
import com.feraz.polizas3.model.ErpPolizasXFacturasId;
import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import mx.bigdata.sat.cfdi.v32.schema.TimbreFiscalDigital;
import org.jamh.data.process.ProcessDao;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;

import com.feraz.cxp.model.ErpCpOtras;
import com.feraz.cxp.model.ErpCpOtrasId;
import com.feraz.facturas.webcontrolfe.dto.ResponseMsg2;
import com.feraz.facturas.webcontrolfe.validation.ValidaVersionCFDI;
import com.feraz.polizas3.dao.ErpPolizasXPagosDao;
import com.feraz.polizas3.model.ErpPolizasXPagos;
import java.io.FileInputStream;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.HashMap;
import javax.servlet.http.HttpServletResponse;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import org.jamh.wf.json.model.ResponseQuery;
import org.jamh.wf.process.Querys;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author Ing. JAMH
 */
@Controller
@RequestMapping(value = "/UploadDocumentFE")
@SessionAttributes({"compania", "usuario"})
public class UploadDocumentControllerFE {

    @Value("${document.file.dirOutDocumentFE}")
    private String dirOutFileDocument;
    @Value("${document.file.dirURLOutDocumentFE}")
    private String dirUrlOutDocument;
    @Value("${document.file.maxZiseFE}")
    private String maxSizeDocument;

    private ProcessDao processDao;
    private ErpSatTransaccionDao erpSatTransaccionDao;

    private String msgErr;
    private String extension = "";
    private String nombreArc = "";
    private String path;
    private String pathXML;
    private String url;
    private String dirCompania;
    private File file;
    private String hora;

    private App app;

    private ErpFeComprobantesDao erpFeComprobantesDao;
    private ErpPolizasXFacturasDao erpPolizasXFacturasDao;
    private ErpPolizasXPagosDao erpPolizasXPagosDao;
    private GeneraPolizasListas generaPolizasListas;
    private ErpCpOtrasDao ErpCpOtrasDao;
    private ValidaVersionCFDI validaVersionCFDI;
    private GeneraContaElectronica generaContaElectronica;
    
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery3 create(@RequestParam("archCOMPANIA") String compania1,
            FileUploadBean uploadItem,
            FileUploadBean2 uploadItem2,
            BindingResult result,
            WebRequest webRequest,
            Model model) throws IOException {

        Map parametros = processDao.paramToMap(webRequest.getParameterMap());
        String concGasto = null;

          hora = "" + System.currentTimeMillis();

        boolean isSave = true;
        SimpleDateFormat formatoDelTexto2 = new SimpleDateFormat("dd/MM/yyyy");

        ResponseQuery3 rq = new ResponseQuery3();

        if (model.asMap().get("compania") == null) {
            rq.setMsg("Sesion no valida");
            rq.setSuccess(false);
            return rq;
        }

        String compania = model.asMap().get("compania").toString();
         String usuario = model.asMap().get("usuario").toString();
        try{ 

        dirCompania = compania;
        FileInfo fi;
        FileInfo fi2;
        
         boolean result1 = validaVersionCFDI.verision32File(uploadItem.getFile());
         boolean result2 = validaVersionCFDI.version33File(uploadItem.getFile());
         
         
         System.out.println("result1: " +result1);
         System.out.println("result2: " +result2);
        
         
        String dirFecha = "";
        
        if(!result2){
        
               dirFecha = app.validaFechaComprobante(uploadItem.getFile(), dirOutFileDocument, compania);
        }else{
        
               dirFecha = app.validaFechaComprobante33(uploadItem.getFile(), dirOutFileDocument, compania);
        }

        if (dirFecha.equalsIgnoreCase("")){
            
                fi = generaArchivos(uploadItem.getFile(), 1);

                if (!fi.isIsSave()) {
                    rq.setMsg("Error al guardar archivo XML:" + msgErr);
                    rq.setSuccess(false);
                    return rq;
                }
                fi2 = generaArchivos(uploadItem2.getFile2(), 2);
                if (!fi2.isIsSave()) {
                    rq.setMsg("Error al guardar archivo PDF:" + msgErr);
                    rq.setSuccess(false);
                    return rq;
                }
        
        }else{
            
            
            String nombreUuid = "";
            
            if(!result2){
            
              nombreUuid = app.validaNombreUUidComprobante(uploadItem.getFile(), dirOutFileDocument, compania);
              
            }else{
                
                nombreUuid = app.validaNombreUUidComprobante33(uploadItem.getFile(), dirOutFileDocument, compania);
                
                
                      
                }
            
            System.out.println("nombreUuid: "+nombreUuid);
            
               fi = generaArchivos2(uploadItem.getFile(), 1,dirFecha,nombreUuid);

                if (!fi.isIsSave()) {
                    rq.setMsg("Error al guardar archivo XML:" + msgErr);
                    rq.setSuccess(false);
                    return rq;
                }
                fi2 = generaArchivos2(uploadItem2.getFile2(), 2,dirFecha,nombreUuid);
        //        System.out.println("res2:" + res2);
                if (!fi2.isIsSave()) {
                    rq.setMsg("Error al guardar archivo PDF:" + msgErr);
                    rq.setSuccess(false);
                    return rq;
                }
        
        }
         System.out.println("Archivo Generado");
        

        if (result.hasErrors()) {
            for (ObjectError error : result.getAllErrors()) {
                System.err.println("Error: " + error.getCode() + " - " + error.getDefaultMessage());
            }
            rq.setSuccess(isSave);
            rq.setMsg("Error al guardar el archivo.");

            return rq;
        }
        String idErr = "" + System.currentTimeMillis();
        app.setId(idErr);
        System.out.println("VALIDANDO COMP");
        PolizasInfo valida;
       if(!result2){
            valida = app.validaComprobante(compania, pathXML, fi2.getFile(), fi2.getPath());
       }else{
            valida = app.validaComprobante33(compania, pathXML, fi2.getFile(), fi2.getPath());
       }
//         System.out.println("valida:"+valida);
        if (valida.getInfTipo() == 1) {
            String va = "";
            if (app.getRelacion() != null) {
                va = app.getRelacion().getId().getNumeroPol() + "-" + app.getRelacion().getId().getTipoPol();
            }
            rq.setNumero(valida.getNumero());
            rq.setTipoPoliza(valida.getTipoPoliza());
            rq.setFecha(valida.getFecha());
            //  String poliza = app.getRelacion().
            rq.setSuccess(false);
            rq.setMsg(valida.getMsgErr());
            return rq;
        } else if (valida.getInfTipo() == 2) {
            rq.setSuccess(false);
            rq.setMsg(valida.getMsgErr());
            return rq;
        } else if (valida.getInfTipo() == 3) {
            rq.setSuccess(true);
            rq.setMsg(valida.getMsgErr());
            rq.setNumeroFe("" + valida.getNumeroFe());
            return rq;
        }
        System.out.println("Carga Comprbante");

        app.setNombrePdf(fi2.getFile());
        app.setPathPdf(fi2.getPath());
        app.setUsuario(usuario);
        app.setTipoCarga("1");
        int data;
        if(!result2){
           data = app.cargaComprobante(pathXML, compania, concGasto);
        }else{
           data = app.cargaComprobante33(pathXML, compania,"", concGasto,"P");
        }
        if (data >= 1) {

            rq.setSuccess(true);
            rq.setMsg(Integer.toString(data));

            return rq;
        } else {
            rq.setSuccess(false);
            rq.setMsg(idErr);

            return rq;
        }
         } catch (Exception e) {
             
             e.printStackTrace();
              return null;
            }

    }
    
    
       @RequestMapping(value = "/saveGastos", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery saveGastos(
            @RequestParam("comisionFE") String comision,
            @RequestParam("conceptoFE") String concepto,
            //HttpServletResponse response,
            FileUploadBean uploadItem,
            FileUploadBean2 uploadItem2,
            BindingResult result,
            WebRequest webRequest,
            Model model) throws IOException, JAXBException {
  //       response.setContentType("text/plain");
   // response.setCharacterEncoding("UTF-8");
        Map parametros = processDao.paramToMap(webRequest.getParameterMap());
        String concGasto = null;
        
          hora = "" + System.currentTimeMillis();

        boolean isSave = true;
        SimpleDateFormat formatoDelTexto2 = new SimpleDateFormat("dd/MM/yyyy");

        ResponseQuery rq = new ResponseQuery();

        
       String compania = parametros.get("compania").toString();

        dirCompania = compania;
        FileInfo fi;
        FileInfo fi2;
         Querys que = new Querys();
            String store = que.getSQL("CONTA_INSERTA_VIATICOS");
            
          
          
         boolean result1 = validaVersionCFDI.verision32File(uploadItem.getFile());
         boolean result2 = validaVersionCFDI.version33File(uploadItem.getFile());
         
         
         System.out.println("result1: " +result1);
         System.out.println("result2: " +result2); 
         
         String dirFecha = "";
            
        if(!result2){
        
               dirFecha = app.validaFechaComprobante(uploadItem.getFile(), dirOutFileDocument, compania);
        }else{
        
               dirFecha = app.validaFechaComprobante33(uploadItem.getFile(), dirOutFileDocument, compania);
        }
            
        
        if (dirFecha.equalsIgnoreCase("")){
            
                fi = generaArchivos(uploadItem.getFile(), 1);

                if (!fi.isIsSave()) {
                    rq.setMsg("Error al guardar archivo XML:" + msgErr);
                    rq.setSuccess(false);
                    return rq;
                }
                fi2 = generaArchivos(uploadItem2.getFile2(), 2);
        //        System.out.println("res2:" + res2);
                if (!fi2.isIsSave()) {
                    rq.setMsg("Error al guardar archivo PDF:" + msgErr);
                    rq.setSuccess(false);
                    return rq;
                }
        
        }else{
            
             
            String nombreUuid = "";
            
            if(!result2){
            
              nombreUuid = app.validaNombreUUidComprobante(uploadItem.getFile(), dirOutFileDocument, compania);
              
            }else{
                
                nombreUuid = app.validaNombreUUidComprobante33(uploadItem.getFile(), dirOutFileDocument, compania);
                
                
                      
                }
            
               fi = generaArchivos2(uploadItem.getFile(), 1,dirFecha,nombreUuid);

                if (!fi.isIsSave()) {
                    rq.setMsg("Error al guardar archivo XML:" + msgErr);
                    rq.setSuccess(false);
                    return rq;
                }
                fi2 = generaArchivos2(uploadItem2.getFile2(), 2,dirFecha,nombreUuid);
        //        System.out.println("res2:" + res2);
                if (!fi2.isIsSave()) {
                    rq.setMsg("Error al guardar archivo PDF:" + msgErr);
                    rq.setSuccess(false);
                    return rq;
                }
        
        }
        
        

        if (result.hasErrors()) {
            for (ObjectError error : result.getAllErrors()) {
                System.err.println("Error: " + error.getCode() + " - " + error.getDefaultMessage());
            }
            rq.setSuccess(isSave);
            rq.setMsg("Error al guardar el archivo.");

            return rq;
        }
        String idErr = "" + System.currentTimeMillis();
        app.setId(idErr);
//        System.out.println("idErr"+idErr);
          PolizasInfo valida;
            if(!result2){
               valida = app.validaComprobante(compania, pathXML, fi2.getFile(), fi2.getPath());
          }else{
               valida = app.validaComprobante33(compania, pathXML, fi2.getFile(), fi2.getPath());
          }
            
//         System.out.println("valida:"+valida);
        if (valida.getInfTipo() == 1) {
            String va = "";
            if (app.getRelacion() != null) {
                va = app.getRelacion().getId().getNumeroPol() + "-" + app.getRelacion().getId().getTipoPol();
            }
         
            //  String poliza = app.getRelacion().
            rq.setSuccess(false);
            rq.setMsg(valida.getMsgErr());
            return rq;
        } else if (valida.getInfTipo() == 2) {
            rq.setSuccess(false);
            rq.setMsg(valida.getMsgErr());
            return rq;
        } else if (valida.getInfTipo() == 3) {
            rq.setSuccess(true);
            rq.setMsg(valida.getMsgErr());
           
            return rq;
        }
//        System.out.println("pdf" + fi2.getFile() + fi2.getPath());

        
            Map titulo = new HashMap();
                 String rfcCompania = "";
               titulo.put("compania", compania);
               
                   List listComp = processDao.getMapResult("BuscaRfcComp", titulo);
                   
                    Map rfcC = (HashMap) listComp.get(0);
                  System.out.println("RFC:" + rfcC.get("RFC"));
                   

         if(!result2){
             
               if (!valida.getComprobante().getReceptor().getRfc().equalsIgnoreCase(rfcC.get("RFC").toString())){
                   rq.setSuccess(false);
                   rq.setMsg("Rfc del Receptor incorrecto.");
                   return rq;
                  }
             
         }else{ 
             
             
                    JAXBContext jaxbContext = JAXBContext.newInstance(com.feraz.mx.sat.cfdi.Comprobante.class);

                    Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
                    com.feraz.mx.sat.cfdi.Comprobante comp = (com.feraz.mx.sat.cfdi.Comprobante) jaxbUnmarshaller.unmarshal(new FileInputStream(pathXML));

                    if (!comp.getReceptor().getRfc().equalsIgnoreCase(rfcC.get("RFC").toString())){
                   rq.setSuccess(false);
                   rq.setMsg("Rfc del Receptor incorrecto.");
                   return rq;
                  }
         }

        app.setNombrePdf(fi2.getFile());
        app.setPathPdf(fi2.getPath());
        app.setUsuario("");
        app.setTipoCarga("1");

        int data;

        if(!result2){
           data = app.cargaComprobante(pathXML, compania, concGasto,"V");
        }else{
           data = app.cargaComprobante33(pathXML, compania, concGasto,"","V");
        }
        
        if (data >= 1) {
            
            
            Map paramViatico = new HashMap();
            paramViatico.put("COMPANIA",compania);
            paramViatico.put("COMISION",comision);
            paramViatico.put("CONCEPTO",concepto);
            
            paramViatico.put("NUMERO",data);
            paramViatico.put("ORIGEN","G");
            
                int val = processDao.execute(store, paramViatico);

                     if (val <= 0) {

                }
            

            rq.setSuccess(true);
            rq.setMsg("Guardado Correctamente");
            
            return rq;
        } else {
            rq.setSuccess(false);
            rq.setMsg(idErr);

            return rq;
        }

    }
    
    
    
     @RequestMapping(value = "/savePasajes", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery savePasajes(
            @RequestParam("comisionFE") String comision,
            @RequestParam("conceptoFE") String concepto,
            
            FileUploadBean uploadItem,
            FileUploadBean2 uploadItem2,
            BindingResult result,
            WebRequest webRequest,
            Model model) {

        
        String concGasto = null;
        
          hora = "" + System.currentTimeMillis();

        boolean isSave = true;
        SimpleDateFormat formatoDelTexto2 = new SimpleDateFormat("dd/MM/yyyy");

        ResponseQuery rq = new ResponseQuery();


       String compania = "SHW";

        dirCompania = compania;
        FileInfo fi;
        FileInfo fi2;
         Querys que = new Querys();
            String store = que.getSQL("CONTA_INSERTA_VIATICOS");
            
            
        
         
        String dirFecha = app.validaFechaComprobante(uploadItem.getFile(), dirOutFileDocument, compania);

        if (dirFecha.equalsIgnoreCase("")){
            
                fi = generaArchivos(uploadItem.getFile(), 1);

                if (!fi.isIsSave()) {
                    rq.setMsg("Error al guardar archivo XML:" + msgErr);
                    rq.setSuccess(false);
                    return rq;
                }
                fi2 = generaArchivos(uploadItem2.getFile2(), 2);
        //        System.out.println("res2:" + res2);
                if (!fi2.isIsSave()) {
                    rq.setMsg("Error al guardar archivo PDF:" + msgErr);
                    rq.setSuccess(false);
                    return rq;
                }
        
        }else{
            
              String nombreUuid = app.validaNombreUUidComprobante(uploadItem.getFile(), dirOutFileDocument,compania);
            
               fi = generaArchivos2(uploadItem.getFile(), 1,dirFecha,nombreUuid);

                if (!fi.isIsSave()) {
                    rq.setMsg("Error al guardar archivo XML:" + msgErr);
                    rq.setSuccess(false);
                    return rq;
                }
                fi2 = generaArchivos2(uploadItem2.getFile2(), 2,dirFecha,nombreUuid);
        //        System.out.println("res2:" + res2);
                if (!fi2.isIsSave()) {
                    rq.setMsg("Error al guardar archivo PDF:" + msgErr);
                    rq.setSuccess(false);
                    return rq;
                }
        
        }
        
        

        if (result.hasErrors()) {
            for (ObjectError error : result.getAllErrors()) {
                System.err.println("Error: " + error.getCode() + " - " + error.getDefaultMessage());
            }
            rq.setSuccess(isSave);
            rq.setMsg("Error al guardar el archivo.");

            return rq;
        }
        String idErr = "" + System.currentTimeMillis();
        app.setId(idErr);
//        System.out.println("idErr"+idErr);
        PolizasInfo valida = app.validaComprobante(compania, pathXML, fi2.getFile(), fi2.getPath());
//         System.out.println("valida:"+valida);
        if (valida.getInfTipo() == 1) {
            String va = "";
            if (app.getRelacion() != null) {
                va = app.getRelacion().getId().getNumeroPol() + "-" + app.getRelacion().getId().getTipoPol();
            }
         
            //  String poliza = app.getRelacion().
            rq.setSuccess(false);
            rq.setMsg(valida.getMsgErr());
            return rq;
        } else if (valida.getInfTipo() == 2) {
            rq.setSuccess(false);
            rq.setMsg(valida.getMsgErr());
            return rq;
        } else if (valida.getInfTipo() == 3) {
            rq.setSuccess(true);
            rq.setMsg(valida.getMsgErr());
           
            return rq;
        }
//        System.out.println("pdf" + fi2.getFile() + fi2.getPath());

        app.setNombrePdf(fi2.getFile());
        app.setPathPdf(fi2.getPath());
        app.setUsuario("");
        app.setTipoCarga("1");

        int data = app.cargaComprobante(pathXML, compania, concGasto, "V");
        if (data >= 1) {
            
            
            Map paramViatico = new HashMap();
            paramViatico.put("COMPANIA",compania);
            paramViatico.put("COMISION",comision);
            paramViatico.put("CONCEPTO",concepto);
            
            paramViatico.put("NUMERO",data);
            paramViatico.put("ORIGEN","P");
            
                int val = processDao.execute(store, paramViatico);

                     if (val <= 0) {

                }
            

            rq.setSuccess(true);
            rq.setMsg("Guardado Correctamente");
            
            return rq;
        } else {
            rq.setSuccess(false);
            rq.setMsg(idErr);

            return rq;
        }

    }
    
        @RequestMapping(value = "/saveViaticos", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery createViatico(
            @RequestParam("comisionFE") String comision,
            @RequestParam("conceptoFE") String concepto,
            
            FileUploadBean uploadItem,
            FileUploadBean2 uploadItem2,
            BindingResult result,
            WebRequest webRequest,
            Model model) throws IOException, JAXBException {

        
        String concGasto = null;//parametros.get("archIDCONCGASTO").toString();
//         System.out.println("llegando a archivos");
//
//        System.out.println("compania" + compania1);
//        if(concGasto == "" || concGasto == null ){
//            concGasto = "";
//        }
//        System.out.println("uploadItem:" + uploadItem);
//        System.out.println("uploadItem2:" + uploadItem2);
//        System.out.println("uploadItem2:" + uploadItem2.getFile2().getContentType());
          hora = "" + System.currentTimeMillis();

        boolean isSave = true;
        SimpleDateFormat formatoDelTexto2 = new SimpleDateFormat("dd/MM/yyyy");
        Map parametros = processDao.paramToMap(webRequest.getParameterMap());
        ResponseQuery rq = new ResponseQuery();

        String compania = parametros.get("compania").toString();

        
       //String compania = "SHW";

        dirCompania = compania;
        FileInfo fi;
        FileInfo fi2;
         Querys que = new Querys();
            String store = que.getSQL("CONTA_INSERTA_VIATICOS");
            
            
         
         boolean result1 = validaVersionCFDI.verision32File(uploadItem.getFile());
         boolean result2 = validaVersionCFDI.version33File(uploadItem.getFile());
         
         
         System.out.println("result1: " +result1);
         System.out.println("result2: " +result2); 
         
         String dirFecha = "";
            
        if(!result2){
        
               dirFecha = app.validaFechaComprobante(uploadItem.getFile(), dirOutFileDocument, compania);
        }else{
        
               dirFecha = app.validaFechaComprobante33(uploadItem.getFile(), dirOutFileDocument, compania);
        }

        if (dirFecha.equalsIgnoreCase("")){
            
                fi = generaArchivos(uploadItem.getFile(), 1);

                if (!fi.isIsSave()) {
                    rq.setMsg("Error al guardar archivo XML:" + msgErr);
                    rq.setSuccess(false);
                    return rq;
                }
                fi2 = generaArchivos(uploadItem2.getFile2(), 2);
        //        System.out.println("res2:" + res2);
                if (!fi2.isIsSave()) {
                    rq.setMsg("Error al guardar archivo PDF:" + msgErr);
                    rq.setSuccess(false);
                    return rq;
                }
        
        }else{
            
            String nombreUuid = "";
            
            if(!result2){
            
              nombreUuid = app.validaNombreUUidComprobante(uploadItem.getFile(), dirOutFileDocument, compania);
              
            }else{
                
                nombreUuid = app.validaNombreUUidComprobante33(uploadItem.getFile(), dirOutFileDocument, compania);
                
                
                      
                }
               fi = generaArchivos2(uploadItem.getFile(), 1,dirFecha,nombreUuid);

                if (!fi.isIsSave()) {
                    rq.setMsg("Error al guardar archivo XML:" + msgErr);
                    rq.setSuccess(false);
                    return rq;
                }
                fi2 = generaArchivos2(uploadItem2.getFile2(), 2,dirFecha,nombreUuid);
        //        System.out.println("res2:" + res2);
                if (!fi2.isIsSave()) {
                    rq.setMsg("Error al guardar archivo PDF:" + msgErr);
                    rq.setSuccess(false);
                    return rq;
                }
        
        }
        
        

        if (result.hasErrors()) {
            for (ObjectError error : result.getAllErrors()) {
                System.err.println("Error: " + error.getCode() + " - " + error.getDefaultMessage());
            }
            rq.setSuccess(isSave);
            rq.setMsg("Error al guardar el archivo.");

            return rq;
        }
        String idErr = "" + System.currentTimeMillis();
        app.setId(idErr);
//        System.out.println("idErr"+idErr);
         PolizasInfo valida;
            if(!result2){
               valida = app.validaComprobante(compania, pathXML, fi2.getFile(), fi2.getPath());
          }else{
               valida = app.validaComprobante33(compania, pathXML, fi2.getFile(), fi2.getPath());
          }
            
        
//         System.out.println("valida:"+valida);
        if (valida.getInfTipo() == 1) {
            String va = "";
            if (app.getRelacion() != null) {
                va = app.getRelacion().getId().getNumeroPol() + "-" + app.getRelacion().getId().getTipoPol();
            }
         
            //  String poliza = app.getRelacion().
            rq.setSuccess(false);
            rq.setMsg(valida.getMsgErr());
            return rq;
        } else if (valida.getInfTipo() == 2) {
            rq.setSuccess(false);
            rq.setMsg(valida.getMsgErr());
            return rq;
        } else if (valida.getInfTipo() == 3) {
            rq.setSuccess(true);
            rq.setMsg(valida.getMsgErr());
           
            return rq;
        }
//        System.out.println("pdf" + fi2.getFile() + fi2.getPath());


            Map titulo = new HashMap();
                 String rfcCompania = "";
               titulo.put("compania", compania);
               
                   List listComp = processDao.getMapResult("BuscaRfcComp", titulo);
                   
                    Map rfcC = (HashMap) listComp.get(0);
                  System.out.println("RFC:" + rfcC.get("RFC"));
                   

         if(!result2){
             
               if (!valida.getComprobante().getReceptor().getRfc().equalsIgnoreCase(rfcC.get("RFC").toString())){
                   rq.setSuccess(false);
                   rq.setMsg("Rfc del Receptor incorrecto.");
                   return rq;
                  }
             
         }else{ 
             
             
                    JAXBContext jaxbContext = JAXBContext.newInstance(com.feraz.mx.sat.cfdi.Comprobante.class);

                    Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
                    com.feraz.mx.sat.cfdi.Comprobante comp = (com.feraz.mx.sat.cfdi.Comprobante) jaxbUnmarshaller.unmarshal(new FileInputStream(pathXML));

                    if (!comp.getReceptor().getRfc().equalsIgnoreCase(rfcC.get("RFC").toString())){
                   rq.setSuccess(false);
                   rq.setMsg("Rfc del Receptor incorrecto.");
                   return rq;
                  }
         }


        app.setNombrePdf(fi2.getFile());
        app.setPathPdf(fi2.getPath());
        app.setUsuario("");
        app.setTipoCarga("1");
        
        int data;

        if(!result2){
           data = app.cargaComprobante(pathXML, compania, concGasto,"V");
        }else{
           data = app.cargaComprobante33(pathXML, compania, concGasto,"","V");
        }
       
        if (data >= 1) {
            
            
            Map paramViatico = new HashMap();
            paramViatico.put("COMPANIA",compania);
            paramViatico.put("COMISION",comision);
            paramViatico.put("CONCEPTO",concepto);
            
            paramViatico.put("NUMERO",data);
            paramViatico.put("ORIGEN","V");
            
                int val = processDao.execute(store, paramViatico);

                     if (val <= 0) {

                }
            

            rq.setSuccess(true);
            rq.setMsg("Guardado Correctamente");
            
            return rq;
        } else {
            rq.setSuccess(false);
            rq.setMsg(idErr);

            return rq;
        }

    }

    @RequestMapping(value = "/relacion", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery3 relacion(@RequestParam("archCOMPANIA") String compania1,
            @RequestParam("archNUMERO") String numero,
            @RequestParam("archTIPO_POLIZA") String tipoPoliza,
            @RequestParam("archFECHA") String fecha,
            FileUploadBean uploadItem,
            FileUploadBean2 uploadItem2,
            BindingResult result,
            WebRequest webRequest,
            Model model) throws IOException {

        boolean isSave = true;
        SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy");

        ResponseQuery3 rq = new ResponseQuery3();
        
        String compania = model.asMap().get("compania").toString();
        
                
                   Map tipoPolSatMap = new HashMap();
              //String rfcComp = "";
              tipoPolSatMap.put("compania", compania);
              tipoPolSatMap.put("tipoPoliza", tipoPoliza);
                    
              List listTipoPolSat= processDao.getMapResult("BuscaTipoPolSat", tipoPolSatMap);
                  Map secTipoPolSat = (HashMap) listTipoPolSat.get(0);
                   
                 String tipoSat = secTipoPolSat.get("TIPO_SAT").toString();
            
                 
        
        try {
            
            boolean resultRela = false;
            
             if(tipoSat.equalsIgnoreCase("I") || tipoSat.equalsIgnoreCase("E")){
               ErpPolizasXPagos polizP = erpPolizasXPagosDao.buscaPoliza(compania1, numero, tipoPoliza, formato.parse(fecha));
           
               if (polizP != null) {
                    resultRela = true;
                }
             }else{
                       
                ErpPolizasXFacturas poliz = erpPolizasXFacturasDao.buscaPoliza(compania1, numero, tipoPoliza, formato.parse(fecha));
                if (poliz != null) {
                    resultRela = true;
                }
                       
             }
               
            if (resultRela = true) {
                rq.setSuccess(false);
                rq.setMsg("La poliza ya tiene Factura electronica relacionada");
            }

        } catch (Exception e) {
            e.printStackTrace();
            rq.setMsg("Error al convertir la Fecha de poliza");
            rq.setSuccess(false);
        }
        if (model.asMap().get("compania") == null) {
            rq.setMsg("Sesion no valida");
            rq.setSuccess(false);
            return rq;
        }

        

        dirCompania = compania;
        FileInfo fi = generaArchivos(uploadItem.getFile(), 1);

        if (!fi.isIsSave()) {
            rq.setMsg("Error al guardar archivo XML:" + msgErr);
            rq.setSuccess(false);
            return rq;
        }
        FileInfo fi2 = generaArchivos(uploadItem2.getFile2(), 2);
//        System.out.println("res2:" + res2);
        if (!fi2.isIsSave()) {
            rq.setMsg("Error al guardar archivo PDF:" + msgErr);
            rq.setSuccess(false);
            return rq;
        }

        if (result.hasErrors()) {
            for (ObjectError error : result.getAllErrors()) {
                System.err.println("Error: " + error.getCode() + " - " + error.getDefaultMessage());
            }
            rq.setSuccess(isSave);
            rq.setMsg("Error al guardar el archivo.");

            return rq;
        }
        
        
         
         boolean result1 = validaVersionCFDI.verision32File(uploadItem.getFile());
         boolean result2 = validaVersionCFDI.version33File(uploadItem.getFile());
        
         System.out.println(result1);
         System.out.println(result2);
        
        String idErr = "" + System.currentTimeMillis();
        app.setId(idErr);
//        System.out.println("idErr"+idErr);
        PolizasInfo valida;
            if(!result2){
               valida = app.validaComprobante(compania, pathXML, fi2.getFile(), fi2.getPath());
          }else{
               valida = app.validaComprobante33(compania, pathXML, fi2.getFile(), fi2.getPath());
          }
//         System.out.println("valida:"+valida);
        if (valida.getInfTipo() == 1) {
            String va = "";
            if (app.getRelacion() != null) {
                va = app.getRelacion().getId().getNumeroPol() + "-" + app.getRelacion().getId().getTipoPol();
            }
            rq.setNumero(valida.getNumero());
            rq.setTipoPoliza(valida.getTipoPoliza());
            rq.setFecha(valida.getFecha());
            //  String poliza = app.getRelacion().
            rq.setSuccess(false);
            rq.setMsg(valida.getMsgErr());
            return rq;
        } else if (valida.getInfTipo() == 2) {
            rq.setSuccess(false);
            rq.setMsg(valida.getMsgErr());
            return rq;
        }

        //YA esta cargado
//        else if (valida.getInfTipo() == 3) {
//            rq.setSuccess(true);
//            rq.setMsg(valida.getMsgErr());
//           
//            return rq;
//        }
//        System.out.println("pdf"+fi2.getFile()+ fi2.getPath());
        app.setNombrePdf(fi2.getFile());
        app.setPathPdf(fi2.getPath());
        ResponseComprobante data = null;
        int data2 = 0;
        if (valida.getInfTipo() == 3) {
            data = new ResponseComprobante();
            data.setComprobante(valida.getComprobante());
            data.setNumero(valida.getNumeroFe());

        } else {
            
            System.out.println("guardando comprobantes");
            
             if(!result2){
                data2 = app.cargaComprobante(pathXML, compania, null,"cfdi");
             }else{
                data2 = app.cargaComprobante33(pathXML, compania, null,"","cfdi");
             }
        }
        
        System.out.println("resultado de guardado");
        
        System.out.println(data2);

        if (data2 != 0) {
            
            System.out.println("generando relacion");
            boolean resultContaElect = generaContaElectronica.generaRelacion(compania, data2, numero, fecha, tipoPoliza);
            System.out.println(resultContaElect);
            if(resultContaElect = true){
                
                 rq.setSuccess(true);
                 rq.setMsg("Factura cargada y relacionada correctamente");
            
            
            }else{
            
            
                 rq.setSuccess(false);
                 rq.setMsg("Factura cargada. Existio error al relacionar la poliza");
            
            }

            return rq;
        } else {
            rq.setSuccess(false);
            rq.setMsg(idErr);

            return rq;
        }

    }
    
      @RequestMapping(value = "/updateMult", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery2 insertActionMult(String data, @RequestParam("tipoGenPoliza") String genPoliza,@RequestParam("tipoPolMult") String tipoPoliza, @RequestParam("tipoProceso") String proceso, WebRequest webRequest, Model model) {
        ResponseQuery2 rq = new ResponseQuery2();

        if (model.asMap().get("compania") == null) {
            rq.setData(null);
            rq.setMsg("Sesion no valida");
            rq.setSuccess(false);
            return rq;
        }
     /*   System.out.println("genpoliza"+genPoliza);
        System.out.println("tipoPoliza"+tipoPoliza);*/
        String compania = model.asMap().get("compania").toString();
        String usuario = model.asMap().get("usuario").toString();

        int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }
       
        System.out.println(data);
        
        try {
            int guardado = 0;

            ObjectMapper mapper = new ObjectMapper();
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

            mapper.setDateFormat(df);
            List<ComprobanteDto> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            ComprobanteDto.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
            
            ResponseMsg2 result = null;
            //   System.out.println("lista:" + lista.size());
//            boolean inf = erpFeComprobantesDao.precesaLista(lista, model.asMap().get("compania").toString());
            
            
            if(proceso.equalsIgnoreCase("F")){  
              if (genPoliza.equalsIgnoreCase("1")){
                     result = generaPolizasListas.procesa(model.asMap().get("compania").toString(), lista, usuario);
              }

              if (genPoliza.equalsIgnoreCase("2")){
                     result = generaPolizasListas.procesaMult(model.asMap().get("compania").toString(), lista, usuario,tipoPoliza);
              }
            }
         
            //  int val = 0;
            //Iterator<ComprobanteDto> it = lista.iterator();
            if (result.isIsGood()) {
                
                System.out.println("lista:");
                System.out.println(result.getList());
                
                rq.setSuccess(true);
                rq.setData(result.getList());
                rq.setMsg("Informacion guardada con exito");
                return rq;
            } else {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg(result.getMsg());
                return rq;
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return rq;
    }
    
          @RequestMapping(value = "/updateMultPagos", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery2 insertActionMultPago(String data, @RequestParam("tipoGenPoliza") String genPoliza,@RequestParam("tipoPolMult") String tipoPoliza, @RequestParam("tipoProceso") String proceso, WebRequest webRequest, Model model) {
        ResponseQuery2 rq = new ResponseQuery2();

        if (model.asMap().get("compania") == null) {
            rq.setData(null);
            rq.setMsg("Sesion no valida");
            rq.setSuccess(false);
            return rq;
        }
     /*   System.out.println("genpoliza"+genPoliza);
        System.out.println("tipoPoliza"+tipoPoliza);*/
        String compania = model.asMap().get("compania").toString();
        String usuario = model.asMap().get("usuario").toString();

        int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }
        
        System.out.println("data: "+data);

        try {
            int guardado = 0;

            ObjectMapper mapper = new ObjectMapper();
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

            mapper.setDateFormat(df);
            List<PagosAllDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            PagosAllDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
            
            ResponseMsg2 result = null;
            //   System.out.println("lista:" + lista.size());
//            boolean inf = erpFeComprobantesDao.precesaLista(lista, model.asMap().get("compania").toString());
            
            
          
            if(proceso.equalsIgnoreCase("P")){  
             
                     result = generaPolizasListas.procesaPagos(model.asMap().get("compania").toString(), lista, usuario);
              

            }
            //  int val = 0;
            //Iterator<ComprobanteDto> it = lista.iterator();
            if (result.isIsGood()) {
                
                System.out.println("lista:");
                System.out.println(result.getList());
                
                rq.setSuccess(true);
                rq.setData(result.getList());
                rq.setMsg("Informacion guardada con exito");
                return rq;
            } else {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg(result.getMsg());
                return rq;
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return rq;
    }
    

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery2 insertAction(String data, WebRequest webRequest, Model model) {
        ResponseQuery2 rq = new ResponseQuery2();

        if (model.asMap().get("compania") == null) {
            rq.setData(null);
            rq.setMsg("Sesion no valida");
            rq.setSuccess(false);
            return rq;
        }
        String compania = model.asMap().get("compania").toString();
        String usuario = model.asMap().get("usuario").toString();

        int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }

        try {
            int guardado = 0;

            ObjectMapper mapper = new ObjectMapper();
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

            mapper.setDateFormat(df);
            List<ComprobanteDto> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            ComprobanteDto.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }

            //   System.out.println("lista:" + lista.size());
//            boolean inf = erpFeComprobantesDao.precesaLista(lista, model.asMap().get("compania").toString());
         ResponseMsg2 result =    generaPolizasListas.procesa(model.asMap().get("compania").toString(), lista, usuario);

            //  int val = 0;
            //Iterator<ComprobanteDto> it = lista.iterator();
            if (result.isIsGood()) {
                rq.setSuccess(true);
                rq.setData(result.getList());
                rq.setMsg("Informacion guardada con exito");
                
                return rq;
            } else {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg(result.getMsg());
                return rq;
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return rq;
    }

    public FileInfo generaArchivos(MultipartFile uploadItem, int tipo) {
        String fileName = null;
        String nombreArchivo = "";

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
                fi.setFile(nombreArc + hora + "." + extension);
//                System.out.println("i:" + i);
//                System.out.println("exte:" + extension);
//                System.out.println("nombreArc:" + nombreArc);
//                System.out.println("exte:" + extension);
                if (tipo == 1 && !extension.toLowerCase().trim().equals("xml")) {

                    msgErr = "Archivo xml no valido";

                    fi.setIsSave(false);
                    return fi;
                }
                if (tipo == 2 && !extension.toLowerCase().trim().equals("pdf")) {

                    msgErr = "Archivo pdf no valido";

                    fi.setIsSave(false);
                    return fi;
                }

                path = dirOutFileDocument + dirCompania + "/" + nombreArc + hora + "." + extension;
                fi.setPath(path);
                if (tipo == 1) {
                    pathXML = path;
                }

                url = dirUrlOutDocument + nombreArc + hora + "." + extension;
                fi.setUrl(url);

                revisarDirectorio();
                outputStream = new FileOutputStream(path);

                int readBytes = 0;
                byte[] buffer = new byte[10000];
                while ((readBytes = inputStream.read(buffer, 0, 10000)) != -1) {
                    outputStream.write(buffer, 0, readBytes);
                }
                outputStream.close();
                inputStream.close();
            }

            fi.setIsSave(true);
            return fi;

        } catch (Exception e) {
            e.printStackTrace();
            FileInfo fi = new FileInfo();
            fi.setIsSave(false);
            return fi;
        }
    }
    
        public FileInfo generaArchivos2(MultipartFile uploadItem, int tipo,String pathArch, String nombreUuid) {
        String fileName = null;
        String nombreArchivo = "";
        
        //System.out.println("Guardando en genera 2");
        
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
                fi.setFile(nombreUuid + "." + extension);
//                System.out.println("i:" + i);
//                System.out.println("exte:" + extension);
//                System.out.println("nombreArc:" + nombreArc);
//                System.out.println("exte:" + extension);
                if (tipo == 1 && !extension.toLowerCase().trim().equals("xml")) {

                    msgErr = "Archivo xml no valido";

                    fi.setIsSave(false);
                    return fi;
                }
                if (tipo == 2 && !extension.toLowerCase().trim().equals("pdf")) {

                    msgErr = "Archivo pdf no valido";

                    fi.setIsSave(false);
                    return fi;
                }

                path = pathArch + "/"+nombreUuid+  "." + extension;
                fi.setPath(path);
                if (tipo == 1) {
                    pathXML = path;
                }

                url =  pathArch + "/"+nombreUuid+  "." + extension;
                fi.setUrl(url);

                //revisarDirectorio();
                outputStream = new FileOutputStream(path);

                int readBytes = 0;
                byte[] buffer = new byte[10000];
                while ((readBytes = inputStream.read(buffer, 0, 10000)) != -1) {
                    outputStream.write(buffer, 0, readBytes);
                }
                outputStream.close();
                inputStream.close();
            }

            fi.setIsSave(true);
            return fi;

        } catch (Exception e) {
            e.printStackTrace();
            FileInfo fi = new FileInfo();
            fi.setIsSave(false);
            return fi;
        }
    }

    public void revisarDirectorio() {

        File file = new File(dirOutFileDocument + dirCompania + "/");
//        System.out.println("Directory" + dirOutFileDocument + dirCompania + "/");
        if (!file.exists()) {
            if (file.mkdirs()) {
//                System.out.println("Directory is created!");
            } else {
//                System.out.println("Failed to create directory!");
            }
        }

    }
    
    @RequestMapping(value = "/saveCXP", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery3 createCXP(@RequestParam("archCOMPANIA") String compania1,
            FileUploadBean uploadItem,
            FileUploadBean2 uploadItem2,
            BindingResult result,
            WebRequest webRequest,
            Model model) {

        Map parametros = processDao.paramToMap(webRequest.getParameterMap());
        String concGasto = null;//parametros.get("archIDCONCGASTO").toString();
//         System.out.println("llegando a archivos");
//
//        System.out.println("compania" + compania1);
//        if(concGasto == "" || concGasto == null ){
//            concGasto = "";
//        }
//        System.out.println("uploadItem:" + uploadItem);
//        System.out.println("uploadItem2:" + uploadItem2);
//        System.out.println("uploadItem2:" + uploadItem2.getFile2().getContentType());
          hora = "" + System.currentTimeMillis();

        boolean isSave = true;
        SimpleDateFormat formatoDelTexto2 = new SimpleDateFormat("dd/MM/yyyy");

        ResponseQuery3 rq = new ResponseQuery3();

        if (model.asMap().get("compania") == null) {
            rq.setMsg("Sesion no valida");
            rq.setSuccess(false);
            return rq;
        }

        String compania = model.asMap().get("compania").toString();
         String usuario = model.asMap().get("usuario").toString();
         
         System.out.println("usuario"+usuario);

        dirCompania = compania;

        FileInfo fi = generaArchivos(uploadItem.getFile(), 1);

        if (!fi.isIsSave()) {
            rq.setMsg("Error al guardar archivo XML:" + msgErr);
            rq.setSuccess(false);
            return rq;
        }
        FileInfo fi2 = generaArchivos(uploadItem2.getFile2(), 2);
//        System.out.println("res2:" + res2);
        if (!fi2.isIsSave()) {
            rq.setMsg("Error al guardar archivo PDF:" + msgErr);
            rq.setSuccess(false);
            return rq;
        }

        if (result.hasErrors()) {
            for (ObjectError error : result.getAllErrors()) {
                System.err.println("Error: " + error.getCode() + " - " + error.getDefaultMessage());
            }
            rq.setSuccess(isSave);
            rq.setMsg("Error al guardar el archivo.");

            return rq;
        }
        String idErr = "" + System.currentTimeMillis();
        app.setId(idErr);
//        System.out.println("idErr"+idErr);
        PolizasInfo valida = app.validaComprobante(compania, pathXML, fi2.getFile(), fi2.getPath());
//         System.out.println("valida:"+valida);
        if (valida.getInfTipo() == 1) {
            String va = "";
            if (app.getRelacion() != null) {
                va = app.getRelacion().getId().getNumeroPol() + "-" + app.getRelacion().getId().getTipoPol();
            }
            rq.setNumero(valida.getNumero());
            rq.setTipoPoliza(valida.getTipoPoliza());
            rq.setFecha(valida.getFecha());
            //  String poliza = app.getRelacion().
            rq.setSuccess(false);
            rq.setMsg(valida.getMsgErr());
            return rq;
        } else if (valida.getInfTipo() == 2) {
            rq.setSuccess(false);
            rq.setMsg(valida.getMsgErr());
            return rq;
        } else if (valida.getInfTipo() == 3) {
            rq.setSuccess(true);
            rq.setMsg(valida.getMsgErr());
            rq.setNumeroFe("" + valida.getNumeroFe());
            return rq;
        }
//        System.out.println("pdf" + fi2.getFile() + fi2.getPath());

        app.setNombrePdf(fi2.getFile());
        app.setPathPdf(fi2.getPath());
        app.setUsuario(usuario);
        app.setTipoCarga("1");

        int data = app.cargaComprobante(pathXML, compania, concGasto,"CP");
        if (data >= 1) {

            rq.setSuccess(true);
            rq.setMsg(Integer.toString(data));

            return rq;
        } else {
            rq.setSuccess(false);
            rq.setMsg(idErr);

            return rq;
        }

    }
    
      @RequestMapping(value = "/updateCXP", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery2 insertDiot(String data, WebRequest webRequest, Model model) {

        ResponseQuery2 rq = new ResponseQuery2();
        SimpleDateFormat formatoDelTexto = new SimpleDateFormat("dd/MM/yyyy");
        int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }
           
//        System.out.println("data:" + data);
//
        if (model.asMap().get("compania") == null) {
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("La sesion no es valida.");
            return rq;
        }
        
         try {
            int guardado = 0;
           
            ObjectMapper mapper = new ObjectMapper();
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

            mapper.setDateFormat(df);
            List<ComprobanteDto> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            ComprobanteDto.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }

            int val = 0;
             Iterator<ComprobanteDto> it = lista.iterator();
             
            
           
            
           
            while (it.hasNext()) {
//                 System.out.println("-------------------------------------------------------------------");
                ComprobanteDto ss = it.next();
                
                System.out.println("concepto"+ ss.concepto);
                System.out.println("numero"+ ss.NUMERO);
            
                ErpFeComprobantes erpFeComprobantes = new ErpFeComprobantes();
                ErpFeComprobantesId erpFeComprobantesId = new ErpFeComprobantesId();
                
                SimpleDateFormat formatoDelTexto2 = new SimpleDateFormat("dd/MM/yyyy");
                  
                    Date fecha = null;
                 //Obtener maxima secuencia
                  if (ss.cxpFecha == null || ss.cxpFecha == "") {
                  }else{ 
                    fecha = formatoDelTexto2.parse(ss.cxpFecha);
                  }
               
                if(ss.tipoCxp.equalsIgnoreCase("C")) { 
                  
                erpFeComprobantesId.setCompania(ss.COMPANIA);
                erpFeComprobantesId.setNumero(Integer.parseInt(ss.NUMERO));
                erpFeComprobantes.setId(erpFeComprobantesId);
                erpFeComprobantes.setFechaVencCxp(fecha);
                erpFeComprobantes.setConceptoCxp(ss.concepto);
                erpFeComprobantes.setCtoCxp(ss.nomCC);
             //   erpFeComprobantes.setFechaVencCxp(df.parse(ss.cxpFecha));
                
                boolean result = erpFeComprobantesDao.updateErpComprobantes(erpFeComprobantes, ss.cxpFecha);
                
                if (result = true){
                    
                    rq.setSuccess(true);
                    rq.setMsg("Se guardo correctamente");
                
                }else{
                    
                    rq.setSuccess(false);
                    rq.setMsg("Error al guardar");
                
                
                }
                
                }else{
                   
                     ErpCpOtras erpCpOtras= new ErpCpOtras();
                     ErpCpOtrasId erpCpOtrasId = new ErpCpOtrasId();
                     
                     erpCpOtrasId.setCompania(ss.COMPANIA);
                     erpCpOtrasId.setId(Integer.parseInt(ss.NUMERO));
                     erpCpOtras.setId(erpCpOtrasId);
                     erpCpOtras.setCtoCxp(ss.nomCC);
                     erpCpOtras.setConceptoCxp(ss.concepto);
                     erpCpOtras.setFechaVencCxp(fecha);
                   
                    boolean result = ErpCpOtrasDao.updateErpCpOtras(erpCpOtras, ss.FECHA);
                    
                     if (result = true){
                    
                    rq.setSuccess(true);
                    rq.setMsg("Se guardo correctamente");
                
                }else{
                    
                    rq.setSuccess(false);
                    rq.setMsg("Error al guardar");
                
                
                }
                
                }
           
            }

              
            

        } catch (Exception e) {
            
            e.printStackTrace();
            
            rq.setSuccess(false);
               
            rq.setMsg("Error al guardar");
        }

        return rq;
        
     }

    public void setValidaVersionCFDI(ValidaVersionCFDI validaVersionCFDI) {
        this.validaVersionCFDI = validaVersionCFDI;
    }


    public String getDirOutFileDocument() {
        return dirOutFileDocument;
    }

    public void setDirOutFileDocument(String dirOutFileDocument) {
        this.dirOutFileDocument = dirOutFileDocument;
    }

    public String getDirUrlOutDocument() {
        return dirUrlOutDocument;
    }

    public void setDirUrlOutDocument(String dirUrlOutDocument) {
        this.dirUrlOutDocument = dirUrlOutDocument;
    }

    public String getMaxSizeDocument() {
        return maxSizeDocument;
    }

    public void setMaxSizeDocument(String maxSizeDocument) {
        this.maxSizeDocument = maxSizeDocument;
    }

    public ProcessDao getProcessDao() {
        return processDao;
    }

    public void setProcessDao(ProcessDao processDao) {
        this.processDao = processDao;
    }

    public void setApp(App app) {
        this.app = app;
    }

    public void setErpFeComprobantesDao(ErpFeComprobantesDao erpFeComprobantesDao) {
        this.erpFeComprobantesDao = erpFeComprobantesDao;
    }

    public void setErpPolizasXFacturasDao(ErpPolizasXFacturasDao erpPolizasXFacturasDao) {
        this.erpPolizasXFacturasDao = erpPolizasXFacturasDao;
    }

    public void setGeneraPolizasListas(GeneraPolizasListas generaPolizasListas) {
        this.generaPolizasListas = generaPolizasListas;
    }

    public void setErpCpOtrasDao(ErpCpOtrasDao ErpCpOtrasDao) {
        this.ErpCpOtrasDao = ErpCpOtrasDao;
    }

    public void setErpSatTransaccionDao(ErpSatTransaccionDao erpSatTransaccionDao) {
        this.erpSatTransaccionDao = erpSatTransaccionDao;
    }

    public void setErpPolizasXPagosDao(ErpPolizasXPagosDao erpPolizasXPagosDao) {
        this.erpPolizasXPagosDao = erpPolizasXPagosDao;
    }

    public void setGeneraContaElectronica(GeneraContaElectronica generaContaElectronica) {
        this.generaContaElectronica = generaContaElectronica;
    }
    
    

}
