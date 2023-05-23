/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.feraz.cxp.controll;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.feraz.contabilidad.sat.transacciones.dao.ErpSatTransaccionDao;
import com.feraz.contabilidad.sat.transacciones.model.ErpSatTransaccion;
import com.feraz.contabilidad.sat.transacciones.model.ErpSatTransaccionId;
import com.feraz.cxp.dao.ErpCpConcPagoDao;
import com.feraz.cxp.dao.ErpCpOtrasDao;
import com.feraz.cxp.dao.ErpCxpFacturasXOtrasDao;
import com.feraz.cxp.dao.ErpCxpFoliosDao;
import com.feraz.cxp.dao.ErpPolizasVSFacturasAutErrDao;
import com.feraz.cxp.dao.ErpSeguiDocumentosDao;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import org.jamh.data.process.ProcessDao;
import org.jamh.wf.json.model.ResponseQuery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.context.request.WebRequest;
import com.feraz.cxp.dto.CxpDTO;
import com.feraz.cxp.dto.CxpOtrasDTO;
import com.feraz.cxp.dto.EnvioTesDTO;
import com.feraz.cxp.dto.ErpConcGastoDTO;
import com.feraz.cxp.dto.PagosAllDTO;
import com.feraz.cxp.dto.PagosDTO;
import com.feraz.cxp.dto.RelacionFactXOtrasDTO;
import com.feraz.cxp.dto.RembolsoDTO;
import com.feraz.cxp.dto.TesoreriaDTO;
import com.feraz.cxp.dto.ViaticosDTO;
import com.feraz.cxp.model.ErpCpConcPago;
import com.feraz.cxp.model.ErpCpConcPagoId;
import com.feraz.cxp.model.ErpCpOtras;
import com.feraz.cxp.model.ErpCpOtrasId;
import com.feraz.cxp.model.ErpCxpFacturasXOtras;
import com.feraz.cxp.model.ErpCxpFacturasXOtrasId;
import com.feraz.cxp.model.ErpCxpFolios;
import com.feraz.cxp.model.ErpCxpFoliosId;
import com.feraz.cxp.model.ErpPolizasVSFacturasAutErr;
import com.feraz.cxp.model.ErpPolizasVSFacturasAutErrId;
import com.feraz.cxp.model.ErpSeguiDocumentos;
import com.feraz.cxp.model.ErpSeguiDocumentosId;
import com.feraz.facturas.webcontrolfe.dao1.ErpFeComprobantesDao;
import com.feraz.facturas.webcontrolfe.model.ErpFeComprobantes;
import com.feraz.facturas.webcontrolfe.model.ErpFeComprobantesId;
import java.io.IOException;
import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import org.jamh.wf.process.Querys;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

/**
 *
 * @author Feraz3
 */
@Controller
@RequestMapping("/Pagos")
@SessionAttributes({"compania", "usuario"})
public class ProcessPagos {
    
    private ErpCxpFoliosDao erpCxpFoliosDao;
    private ErpFeComprobantesDao erpFeComprobantesDao;
    private ErpSeguiDocumentosDao erpSeguiDocumentosDao;
    private ErpCpOtrasDao erpCpOtrasDao;
    private ProcessDao processDao;
    private ErpPolizasVSFacturasAutErrDao erpPolizasVSFacturasAutErrDao;
    private ErpCxpFacturasXOtrasDao erpCxpFacturasXOtrasDao;
    
    private ErpCpConcPagoDao erpCpConcPagoDao;
    
    private ErpSatTransaccionDao erpSatTransaccionDao;
    
    
    
    
    
    
    @RequestMapping(value = "/save", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery savePagos( String data, WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
        //System.out.println("data Pagos creacion:"+data);
        
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }


            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
          
        try{
            List<TesoreriaDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            TesoreriaDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }            Iterator<TesoreriaDTO> it = lista.iterator();
           ErpCxpFolios folios = new ErpCxpFolios();
           ErpCxpFoliosId foliosId = new ErpCxpFoliosId();
           
           ErpFeComprobantes comprobantes = new ErpFeComprobantes();
           ErpFeComprobantesId comprobantesId = new ErpFeComprobantesId();
           
           ErpCpOtras otras = new ErpCpOtras();
           ErpCpOtrasId otrasId = new ErpCpOtrasId();
           
           foliosId.setCompania(compania);
           
           int geFolio = erpCxpFoliosDao.getMaxCxpFolios(foliosId);
           
           int banderaGe = 0;
           
        //   System.out.println("GENRADOR DE FOLIO:"+geFolio);
           
           int folioPagos = geFolio;
           
           Querys que = new Querys();
            String store = que.getSQL("CONTA_ACTUALIZA_VIATICOS");
          
            while (it.hasNext()) {
//                 System.out.println("-------------------------------------------------------------------");
                 TesoreriaDTO ss = it.next();
               //  if (ss.estatusCxp == null){
                 int id = erpCxpFoliosDao.getMaxIdCxpFolios(foliosId);
                 
                // folioPagos = id;
                 
                 foliosId.setId(id);
                 folios.setId(foliosId);
                 folios.setFolio(geFolio);
                 folios.setOperacion("FG");
                 folios.setUsuario(usuario);
                 folios.setOrigen(ss.origen);
                 folios.setNumeroFe(Integer.parseInt(ss.numero));
                
                 
                 ErpCxpFoliosId result = erpCxpFoliosDao.save(folios);
                 
                 if(ss.origen.equalsIgnoreCase("F")){

                    comprobantesId.setCompania(compania);
                    comprobantesId.setNumero(Integer.parseInt(ss.numero));
                    comprobantes.setId(comprobantesId);
                    comprobantes.setEstatusCxp("FG");
                    comprobantes.setTipoPago(ss.tipoPagoTes);
                    comprobantes.setTotalAPagar(new BigDecimal(ss.totalAPagar));
                    comprobantes.setFolioPagos(geFolio);

   //                 
                    int pagoCie = 0;
                    if(ss.pagoCie == "" || ss.pagoCie == null){

                        pagoCie = 0;
                    }else{

                        pagoCie = Integer.parseInt(ss.pagoCie);
                    }
                    comprobantes.setReferenciaCie(ss.referenciaCie);
                    comprobantes.setConceptoCie(ss.conceptoCie);


                    boolean result2 = false;

                    if (ss.cie.equalsIgnoreCase("1")){


                      result2 = erpFeComprobantesDao.actualizaEstatusFolioPagosCie(comprobantes, ss.monedaPago, pagoCie);

                    }else{


                        result2 = erpFeComprobantesDao.actualizaEstatusFolioPagos(comprobantes, ss.monedaPago);

                    }

                 }
                 if(ss.origen.equalsIgnoreCase("O")){

                      otrasId.setCompania(ss.compania);
                      otrasId.setId(Integer.parseInt(ss.numero));
                      otras.setId(otrasId);
                      otras.setEstatusCxp("FG");
                      otras.setFolioPagos(geFolio);
                      otras.setPagoCie(ss.pagoCie);
                      otras.setRefenciaCie(ss.referenciaCie);
                      otras.setConceptoCie(ss.conceptoCie);
                    
                 
                      
                      erpCpOtrasDao.updateErpCpOtrasEstatusPagos(otras);

                 }
                 
                 if(ss.origen.equalsIgnoreCase("V")){

                      Map paramViatico = new HashMap();
                        paramViatico.put("COMPANIA",compania);
                        paramViatico.put("COMISION",ss.numero);
                        paramViatico.put("TIPO","FG");
                        paramViatico.put("FOLIO_PAGO",geFolio);

                    int val = processDao.execute(store, paramViatico);

                         if (val <= 0) {

                    }

                 }
                 
                 
                 banderaGe = 1;
//                 
//             

            }
            

            
      //     if (result2 == true){ 
             rq.setSuccess(true);
             rq.setData(null);
             rq.setMsg("Facturas enviadas con folio: "+geFolio);
      //     }
            
        }catch(Exception e){
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("Error al guardar");
           return rq;
        }
        
        return rq;
    }
    
     @RequestMapping(value = "/saveViaticos", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery saveViaticos( String data, WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
        //System.out.println("data Pagos creacion:"+data);
        
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }


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
            }            Iterator<ViaticosDTO> it = lista.iterator();
           ErpCxpFolios folios = new ErpCxpFolios();
           ErpCxpFoliosId foliosId = new ErpCxpFoliosId();
           
         
           foliosId.setCompania(compania);
           
           int geFolio = erpCxpFoliosDao.getMaxCxpFolios(foliosId);
           
           int banderaGe = 0;
           
           Querys que = new Querys();
            String store = que.getSQL("CONTA_ACTUALIZA_VIATICOS");
           
        //   System.out.println("GENRADOR DE FOLIO:"+geFolio);
           
           int folioPagos = geFolio;
          
            while (it.hasNext()) {
//                 System.out.println("-------------------------------------------------------------------");
                 ViaticosDTO ss = it.next();
               //  if (ss.estatusCxp == null){
                 int id = erpCxpFoliosDao.getMaxIdCxpFolios(foliosId);
                 
                // folioPagos = id;
                 
                 foliosId.setId(id);
                 folios.setId(foliosId);
                 folios.setFolio(geFolio);
                 folios.setOperacion("FG");
                 folios.setUsuario(usuario);
                 folios.setOrigen("V");
                 folios.setNumeroFe(Integer.parseInt(ss.numero));
                
                 
                 ErpCxpFoliosId result = erpCxpFoliosDao.save(folios);
                 
    
                 
                 banderaGe = 1;
                   
                  Map paramViatico = new HashMap();
                    paramViatico.put("COMPANIA",compania);
                    paramViatico.put("COMISION",ss.numero);
                    paramViatico.put("TIPO","FG");
                    paramViatico.put("FOLIO_PAGO",geFolio);
            
                int val = processDao.execute(store, paramViatico);

                     if (val <= 0) {

                }
            
//             

            }
            
            

            
      //     if (result2 == true){ 
             rq.setSuccess(true);
             rq.setData(null);
             rq.setMsg("Facturas enviadas con folio: "+geFolio);
      //     }
            
        }catch(Exception e){
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("Error al guardar");
           return rq;
        }
        
        return rq;
    }
    
       @RequestMapping(value = "/updateViaticos", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery updateViaticos( String data,@RequestParam("folio") String folio, WebRequest webRequest, Model model) throws IOException {
       ResponseQuery rq = new ResponseQuery();
        //System.out.println("data Pagos creacion:"+data);
        
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }


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
            }            Iterator<ViaticosDTO> it = lista.iterator();
           ErpCxpFolios folios = new ErpCxpFolios();
           ErpCxpFoliosId foliosId = new ErpCxpFoliosId();
           
         
           foliosId.setCompania(compania);
           
           int geFolio = Integer.parseInt(folio);
           
           int banderaGe = 0;
           
           Querys que = new Querys();
            String store = que.getSQL("CONTA_ACTUALIZA_VIATICOS");
           
        //   System.out.println("GENRADOR DE FOLIO:"+geFolio);
           
           int folioPagos = geFolio;
          
            while (it.hasNext()) {
//                 System.out.println("-------------------------------------------------------------------");
                 ViaticosDTO ss = it.next();
               //  if (ss.estatusCxp == null){
                 int id = erpCxpFoliosDao.getMaxIdCxpFolios(foliosId);
                 
                // folioPagos = id;
                 
                 foliosId.setId(id);
                 folios.setId(foliosId);
                 folios.setFolio(geFolio);
                 folios.setOperacion("FG");
                 folios.setUsuario(usuario);
                 folios.setOrigen("V");
                 folios.setNumeroFe(Integer.parseInt(ss.numero));
                
                 
                 ErpCxpFoliosId result = erpCxpFoliosDao.save(folios);
                 
    
                 
                 banderaGe = 1;
                 
                   
                  Map paramViatico = new HashMap();
                    paramViatico.put("COMPANIA",compania);
                    paramViatico.put("COMISION",ss.numero);
                    paramViatico.put("TIPO","FG");
                    paramViatico.put("FOLIO_PAGO",geFolio);
            
                int val = processDao.execute(store, paramViatico);

                     if (val <= 0) {

                }
            
//             

            }
            
            

            
      //     if (result2 == true){ 
             rq.setSuccess(true);
             rq.setData(null);
             rq.setMsg("Facturas enviadas con folio: "+geFolio);
      //     }
            
        }catch(Exception e){
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("Error al guardar");
           return rq;
        }
        
        return rq;
    }
    
    
        @RequestMapping(value = "/cancelaFactura", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery cancelaFactura( String data, @RequestParam("text") String text,WebRequest webRequest, Model model) throws IOException {

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
            List<CxpDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            CxpDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }

  
            Iterator<CxpDTO> it = lista.iterator();
           ErpCxpFolios folios = new ErpCxpFolios();
           ErpCxpFoliosId foliosId = new ErpCxpFoliosId();
           foliosId.setCompania(compania);
           ErpFeComprobantes comprobantes = new ErpFeComprobantes();
           ErpFeComprobantesId comprobantesId = new ErpFeComprobantesId();
           
           int banderaGe = 0;
          
            while (it.hasNext()) {
//                 System.out.println("-------------------------------------------------------------------");
                 CxpDTO ss = it.next();
               //  if (ss.estatusCxp == null){
                 
                 int id = erpCxpFoliosDao.getMaxIdCxpFolios(foliosId);
                 
                // folioPagos = id;
              
                 foliosId.setId(id);
              
                 folios.setId(foliosId);
              
                 folios.setFolio(-1);
               
                 folios.setOperacion("CANF");
              
                 folios.setUsuario(usuario);
             
                 folios.setNumeroFe(Integer.parseInt(ss.numero));
                 
                 ErpCxpFoliosId result = erpCxpFoliosDao.save(folios);
                 
                  
                 comprobantesId.setCompania(compania);
                 comprobantesId.setNumero(Integer.parseInt(ss.numero));
                 comprobantes.setId(comprobantesId);
                 comprobantes.setEstatusCxp("CANF");
                 comprobantes.setFolioPagos(-1);
                 
                  
                 boolean result2 = erpFeComprobantesDao.actualizaEstatusFolioPagos(comprobantes, "");
                 erpFeComprobantesDao.descripcionCancelacion(text, comprobantes);
                 
                 banderaGe = 1;

            }
            
     
            
            
            
            if (banderaGe == 1){
            
             
                
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("La factura se cancelo correctamente");
                
                
            }else{
                
                rq.setSuccess(true);
                rq.setData(null);
                rq.setMsg("Error al cancelar");
                
            }
            
        }catch(Exception e){
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("Error al cancelar");
           return rq;
        }
        
        return rq;
    }
    
     @RequestMapping(value = "/updateFolioTes", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery updateFolioTes( String data,@RequestParam("folio") String folio, WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
     //   System.out.println("data Pagos Actualizacion:"+data);
        
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }


            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
          
        try{
            List<TesoreriaDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            TesoreriaDTO.class));
            
            
            Map validaFolio = new HashMap();
                
               validaFolio.put("folio", folio);
               validaFolio.put("compania", compania);
               
                   List folioValid = processDao.getMapResult("validaFolioTes", validaFolio);
                   
              if (folioValid == null || folioValid.isEmpty() || folioValid.size() == 0){
              
                rq.setSuccess(false);
                rq.setMsg("El folio no se puede actualizar por que ya fue enviado a tesoreria");
                return rq; 
              
              }
            
            
            
            if (folio.equalsIgnoreCase("") || folio == null){
                
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error el folio de la actualizacion es nulo");
                return rq;
            
            
            }

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }

  
            Iterator<TesoreriaDTO> it = lista.iterator();
           ErpCxpFolios folios = new ErpCxpFolios();
           ErpCxpFoliosId foliosId = new ErpCxpFoliosId();
           
           ErpFeComprobantes comprobantes = new ErpFeComprobantes();
           ErpFeComprobantesId comprobantesId = new ErpFeComprobantesId();
           
           ErpCpOtras otras = new ErpCpOtras();
           ErpCpOtrasId otrasId = new ErpCpOtrasId();
           
           foliosId.setCompania(compania);
           
           //int geFolio = erpCxpFoliosDao.getMaxCxpFolios(foliosId);
           int geFolio = Integer.parseInt(folio);
           
           int banderaGe = 0;
           
     //      System.out.println("GENRADOR DE FOLIO:"+geFolio);
           
           int folioPagos = geFolio;
          
            while (it.hasNext()) {
//                 System.out.println("-------------------------------------------------------------------");
                 TesoreriaDTO ss = it.next();
               //  if (ss.estatusCxp == null){
                 int id = erpCxpFoliosDao.getMaxIdCxpFolios(foliosId);
                 
                // folioPagos = id;
                 
                 foliosId.setId(id);
                 folios.setId(foliosId);
                 folios.setFolio(geFolio);
                 folios.setOperacion("FG");
                 folios.setUsuario(usuario);
                 folios.setOrigen(ss.origen);
                 folios.setNumeroFe(Integer.parseInt(ss.numero));
                
                 
                 ErpCxpFoliosId result = erpCxpFoliosDao.save(folios);
                 
                  if(ss.origen.equalsIgnoreCase("F")){
                 
                        comprobantesId.setCompania(compania);
                        comprobantesId.setNumero(Integer.parseInt(ss.numero));
                        comprobantes.setId(comprobantesId);
                        comprobantes.setEstatusCxp("FG");
                        comprobantes.setTipoPago(ss.tipoPagoTes);
                        comprobantes.setTotalAPagar(new BigDecimal(ss.totalAPagar));
                        comprobantes.setFolioPagos(geFolio);
                         int pagoCie = 0;
                        if(ss.pagoCie == "" || ss.pagoCie == null){
       //                     
       //                     System.out.println("pasando el pago1-----------------");
                           // comprobantes.setPagoCie(new Integer(0));
                            pagoCie = 0;
                        }else{
                            //System.out.println("pasando el pago2-----------------");
                            //comprobantes.setPagoCie(new Integer(ss.pagoCie));
                            pagoCie = Integer.parseInt(ss.pagoCie);
                        }
                        comprobantes.setReferenciaCie(ss.referenciaCie);
                        comprobantes.setConceptoCie(ss.conceptoCie);

                        boolean result2 = false;

                        if (ss.cie.equalsIgnoreCase("1")){

                  //          System.out.println("actualiza cie");

                          result2 = erpFeComprobantesDao.actualizaEstatusFolioPagosCie(comprobantes, ss.monedaPago, pagoCie);

                        }else{

                            result2 = erpFeComprobantesDao.actualizaEstatusFolioPagos(comprobantes, ss.monedaPago);

                        }
                 
                  }
                  if(ss.origen.equalsIgnoreCase("O")){

                      otrasId.setCompania(ss.compania);
                      otrasId.setId(Integer.parseInt(ss.numero));
                      otras.setId(otrasId);
                      otras.setEstatusCxp("FG");
                      otras.setFolioPagos(geFolio);
                      otras.setPagoCie(ss.pagoCie);
                      otras.setRefenciaCie(ss.referenciaCie);
                      otras.setConceptoCie(ss.conceptoCie);
                      
                      erpCpOtrasDao.updateErpCpOtrasEstatusPagos(otras);

                 }
                 
           //      System.out.println("result2"+result2);
                 
                 banderaGe = 1;
//                 
//                 }else{
//                    
//                     if (ss.estatusCxp.equalsIgnoreCase("CAN")){
//                         
//                         int id = erpCxpFoliosDao.getMaxIdCxpFolios(foliosId);
//                            foliosId.setId(id);
//                            folios.setId(foliosId);
//                            folios.setFolio(geFolio);
//                            folios.setOperacion("ET");
//                            folios.setUsuario(usuario);
//
//
//                            ErpCxpFoliosId result = erpCxpFoliosDao.save(folios);
//
//                            comprobantesId.setCompania(compania);
//                            comprobantesId.setNumero(Integer.parseInt(ss.numero));
//                            comprobantes.setId(comprobantesId);
//                            comprobantes.setEstatusCxp("TES");
//                            comprobantes.setFolioPagos(geFolio);
//
//                            boolean result2 = erpFeComprobantesDao.actualizaEstatusFolioPagos(comprobantes);
//
//                            System.out.println("result2"+result2);
//
//                            banderaGe = 1;
//                     
//                     
//                     }
                 
              //   }       

            }
            
//             boolean result=false;
//            
//            if (folioPagos != 0){
//            
//                ErpPolizasVSFacturasAutErr correo = new ErpPolizasVSFacturasAutErr();
//
//                ErpPolizasVSFacturasAutErrId correoId = new ErpPolizasVSFacturasAutErrId();
//
//                correoId.setCompania(compania);
//                correoId.setFolio(String.valueOf(folioPagos));
//                correoId.setTipo("5");
//                
//                correo.setId(correoId);
//                correo.setEnvio("0");
//                correo.setDescripcion("Se actualizo Folio de pago : "+folioPagos+ ", para impresión");
//                correo.setFechaCap(new Date());
//                correo.setNombre("Folio para impresion");
//               
//                
//                result = erpPolizasVSFacturasAutErrDao.update(correo);
//            }
            
            
            
            if (banderaGe == 1){
            
//                if (result == false){
//                    rq.setSuccess(true);
//                    rq.setData(null);
//                    rq.setMsg("Enviado a pagar con folio: "+geFolio+", error al enviar correo");
//                }else{
//                
//                    rq.setSuccess(true);
//                    rq.setData(null);
//                    rq.setMsg("Enviado a pagar con folio: "+geFolio+", se ha enviado correo a Tesoreria");
//                
//                }
                rq.setSuccess(true);
                rq.setData(null);
                rq.setMsg("Facturas enviadas con folio: "+geFolio);
            }else{
                
                rq.setSuccess(true);
                rq.setData(null);
                rq.setMsg("No hay registros para enviar");
                
            }
            
        }catch(Exception e){
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("Error al guardar");
           return rq;
        }
        
        return rq;
    }
    
    
        
    @RequestMapping(value = "/savePagoOtras", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery saveSeguiPagosOtras( String data, WebRequest webRequest, Model model) throws IOException, ParseException {

        ResponseQuery rq = new ResponseQuery();
     //   System.out.println("data Pagos:"+data);
        
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }


            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
            
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

           
          
        try{
            
              List<PagosDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            PagosDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
          
            Iterator<PagosDTO> it = lista.iterator();
            
            ErpSeguiDocumentos segui = new ErpSeguiDocumentos(); 
            ErpSeguiDocumentosId seguiId = new ErpSeguiDocumentosId(); 
            String numFE = "";
            String fechaPago = "";
            
              while (it.hasNext()) {
         //        System.out.println("------------------------------PAGOS-------------------------------");
                 PagosDTO ss = it.next();
                 numFE = ss.numFe;
         //        System.out.println("pagos"+ss.tOperacionDet);
                 
                 seguiId.setCompania(compania);
                 seguiId.setNumFe(Integer.parseInt(ss.numFe));
                 seguiId.setOrigen("P");
                 seguiId.setSerie("A");
                 seguiId.settDoc("OTR");
                 int sec = erpSeguiDocumentosDao.getMaxId(seguiId);
        //         System.out.println("pagos sec "+sec);
                 seguiId.setSec(sec);
                 
                 segui.setId(seguiId);
                 segui.setBanco(ss.banco);
                     
                 segui.setFolio(Integer.parseInt(ss.numFe));
                     
                
                 segui.setImporteOperacion(new BigDecimal(ss.importeOperacionDet));
                 //segui.setMoneda(ss.);
                 segui.setObservaciones(ss.observaciones);
                 segui.setParidad(new BigDecimal(ss.paridad));
                 segui.setTotPesos(new BigDecimal(ss.totPesos));
                 segui.setUsuario(usuario);
                 segui.settOperacion(ss.tOperacionDet);
                 segui.setCuentaBanco(ss.cuentaBanco);
                 segui.setFechaPagoCxpFe(df.parse(ss.fechaPago));
                 
                 fechaPago = ss.fechaPago;
                 
                 ErpSeguiDocumentosId result = erpSeguiDocumentosDao.save(segui);
          //       System.out.println("buscando ..........");
            
                      rq.setSuccess(true);
                        rq.setData(null);
                        rq.setMsg("Pago Guerdado");
                      
                 
                 
             
                 
                 

            }
              
        //      System.out.println("buscando actualizar");
              
                Map pagoTotal = new HashMap();
                
               pagoTotal.put("compania", compania);
               pagoTotal.put("numero", numFE);
               
                   List listTotal = processDao.getMapResult("TotalesPagosOtras", pagoTotal);
                   System.out.println("Lista total");
                   System.out.println(listTotal);
                   
                    Map pag = (HashMap) listTotal.get(0);
                    System.out.println("Lista total");
                    BigDecimal pago = new BigDecimal(pag.get("PAGO").toString());
                    BigDecimal total = new BigDecimal(pag.get("TOTAL").toString());
                    
                    System.out.println("buscando actualizar"+pago);
                    System.out.println("buscando actualizar"+total);
                     
                    ErpCpOtras comp = new ErpCpOtras();
                    ErpCpOtrasId compId = new ErpCpOtrasId();
                    
                    compId.setCompania(compania);
                    compId.setId(Integer.parseInt(numFE));
                    comp.setId(compId);
                    comp.setPagoAcumuladoCXP(pago);
                    comp.setFechaPagoCxp(df.parse(fechaPago));
                    
                   if (total.compareTo(pago) == 1){
                       
                        comp.setEstatusCxp("PAR");
                        
                        erpCpOtrasDao.updateErpCpOtrasEstatusPagosOtras(comp);
                   
                   
                   }
                   
                    if (total.compareTo(pago) == 0){
                      
                       comp.setEstatusCxp("PAG");
                        
                        erpCpOtrasDao.updateErpCpOtrasEstatusPagosOtras(comp);
                   
                   
                   }
                    
                     if (total.compareTo(pago) == -1){
                       
                       comp.setEstatusCxp("PAG");
                        
                        erpCpOtrasDao.updateErpCpOtrasEstatusPagosOtras(comp);
                   
                   
                   }
                          
          
                     

         
            
        }catch(Exception e){
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("Error al guardar");
           return rq;
        }
        
        return rq;
    }
    
    
    
    @RequestMapping(value = "/savePago", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery saveSeguiPagos( String data, WebRequest webRequest, Model model) throws IOException, ParseException {

        ResponseQuery rq = new ResponseQuery();
     //   System.out.println("data Pagos:"+data);
        
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }


            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
            
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

           
          
        try{
            
              List<PagosDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            PagosDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
          
            Iterator<PagosDTO> it = lista.iterator();
            
            ErpSeguiDocumentos segui = new ErpSeguiDocumentos(); 
            ErpSeguiDocumentosId seguiId = new ErpSeguiDocumentosId(); 
            String numFE = "";
            
              while (it.hasNext()) {
         //        System.out.println("------------------------------PAGOS-------------------------------");
                 PagosDTO ss = it.next();
                 numFE = ss.numFe;
         //        System.out.println("pagos"+ss.tOperacionDet);
                 
                 seguiId.setCompania(compania);
                 seguiId.setNumFe(Integer.parseInt(ss.numFe));
                 seguiId.setOrigen("P");
                 seguiId.setSerie("A");
                 seguiId.settDoc("FE");
                 int sec = erpSeguiDocumentosDao.getMaxId(seguiId);
        //         System.out.println("pagos sec "+sec);
                 seguiId.setSec(sec);
                 
                 segui.setId(seguiId);
                 segui.setBanco(ss.banco);
                 if (ss.folio == null){
                     
                   segui.setFolio(Integer.parseInt(ss.numFe));
                     
                 }else{
                  segui.setFolio(Integer.parseInt(ss.folio));
                 }
                 segui.setImporteOperacion(new BigDecimal(ss.importeOperacionDet));
                 //segui.setMoneda(ss.);
                 segui.setObservaciones(ss.observaciones);
                 segui.setParidad(new BigDecimal(ss.paridad));
                 segui.setTotPesos(new BigDecimal(ss.totPesos));
                 segui.setUsuario(usuario);
                 segui.settOperacion(ss.tOperacionDet);
                 segui.setCuentaBanco(ss.cuentaBanco);
                 segui.setFechaPagoCxpFe(df.parse(ss.fechaPago));
                 
                 ErpSeguiDocumentosId result = erpSeguiDocumentosDao.save(segui);
          //       System.out.println("buscando ..........");
            
                      rq.setSuccess(true);
                        rq.setData(null);
                        rq.setMsg("Pago Guerdado");
                      
                 
                 if(ss.idTransaccion != null && !ss.idTransaccion.equalsIgnoreCase("")){
                 
                     ErpSatTransaccion tran = new ErpSatTransaccion();
                     ErpSatTransaccionId tranId = new ErpSatTransaccionId();
                     
                     tranId.setCompania(compania);
                     tranId.setId(new BigDecimal(ss.idTransaccion));
                     tran.setId(tranId);
                     tran.setFecha(df.parse(ss.fechaPago));
                     tran.setMontoTotal(new BigDecimal(ss.totPesos));
                     tran.setTipCamb(new BigDecimal(ss.paridad));
                     tran.setBancoOriNal(ss.banco);
                     tran.setBancoDestNal(ss.banco);
                     tran.setCtaDest(ss.cuentaBanco);
                     tran.setCtaOri(ss.cuentaBanco);
                 
                     if(ss.origen.equalsIgnoreCase("CXP")){
                           erpSatTransaccionDao.actualizaTransaccionCXP(tran);
                     }
                     
                     if(ss.origen.equalsIgnoreCase("CXC")){
                           erpSatTransaccionDao.actualizaTransaccionCXC(tran);
                     }
                 
                 
                 }
                 
             
                 
                 

            }
              
        //      System.out.println("buscando actualizar");
              
                Map pagoTotal = new HashMap();
                
               pagoTotal.put("compania", compania);
               pagoTotal.put("numero", numFE);
               
                   List listTotal = processDao.getMapResult("TotalesPagos", pagoTotal);
                   
                    Map pag = (HashMap) listTotal.get(0);
                    BigDecimal pago = new BigDecimal(pag.get("PAGO").toString());
                    BigDecimal total = new BigDecimal(pag.get("TOTAL").toString());
                    
         //           System.out.println("buscando actualizar"+pago);
         //           System.out.println("buscando actualizar"+total);
                     
                    ErpFeComprobantes comp = new ErpFeComprobantes();
                    ErpFeComprobantesId compId = new ErpFeComprobantesId();
                    
                    compId.setCompania(compania);
                    compId.setNumero(Integer.parseInt(numFE));
                    comp.setId(compId);
                    
                   if (total.compareTo(pago) == 1){
                       
                       erpFeComprobantesDao.actualizaPago("PAR", pago, comp);
                   
                   
                   }
                   
                    if (total.compareTo(pago) == 0){
                       
                       erpFeComprobantesDao.actualizaPago("PAG", pago, comp);
                   
                   
                   }
                    
                     if (total.compareTo(pago) == -1){
                       
                       erpFeComprobantesDao.actualizaPago("PAG", pago, comp);
                   
                   
                   }
                     
                     
                     
                     
                          
          
                     

         
            
        }catch(Exception e){
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("Error al guardar");
           return rq;
        }
        
        return rq;
    }
    
          @RequestMapping(value = "/updatePagoOtras", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery updateSeguiPagosOtras( String data, WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
    //    System.out.println("data Pagos:"+data);
        
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }


            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
            
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

           
          
        try{
            
              List<PagosDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            PagosDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
          
            Iterator<PagosDTO> it = lista.iterator();
            
            ErpSeguiDocumentos segui = new ErpSeguiDocumentos(); 
            ErpSeguiDocumentosId seguiId = new ErpSeguiDocumentosId(); 
            String numFE = "";
            String fechaPago  = "";
            
              while (it.hasNext()) {
          //       System.out.println("------------------------------PAGOS UPDATE-------------------------------");
                 PagosDTO ss = it.next();
                 numFE = ss.numFe;
         //        System.out.println("pagos"+ss.tOperacionDet);
                 
                 seguiId.setCompania(compania);
                 seguiId.setNumFe(Integer.parseInt(ss.numFe));
                 seguiId.setOrigen("P");
                 seguiId.setSerie("A");
                 seguiId.settDoc("OTR");
                 //int sec = erpSeguiDocumentosDao.getMaxId(seguiId);
                 
                 seguiId.setSec(Integer.parseInt(ss.sec));
         //        System.out.println("llave guardada");
                 segui.setId(seguiId);
                 segui.setBanco(ss.banco);
                      
                   segui.setFolio(Integer.parseInt(ss.numFe));
                     
               
          //       System.out.println("folio");
                 segui.setImporteOperacion(new BigDecimal(ss.importeOperacionDet));
          //       System.out.println("importe operacion");
                 //segui.setMoneda(ss.);
                 segui.setObservaciones(ss.observaciones);
                 segui.setParidad(new BigDecimal(ss.paridad));
         //        System.out.println("paridad");
                 segui.setTotPesos(new BigDecimal(ss.totPesos));
          //       System.out.println("ltotpesos");
                 segui.setUsuario(usuario);
                 segui.settOperacion(ss.tOperacionDet);
                 segui.setCuentaBanco(ss.cuentaBanco);
        //         System.out.println("fechaPago"+ss.fechaPago);
                 segui.setFechaPagoCxpFe(df.parse(ss.fechaPago));
        //         System.out.println("fechaPago");
                 fechaPago = ss.fechaPago;
        //         System.out.println("pagos enviados");
                 
                 boolean result = erpSeguiDocumentosDao.update(segui);
          //       System.out.println("buscando ..........");
            
                      rq.setSuccess(true);
                        rq.setData(null);
                        rq.setMsg("Pago Guerdado");
                      
                 
                 
             
                 
                 

            }
              
          //    System.out.println("buscando actualizar");
              
                 Map pagoTotal = new HashMap();
                
               pagoTotal.put("compania", compania);
               pagoTotal.put("numero", numFE);
               
                   List listTotal = processDao.getMapResult("TotalesPagosOtras", pagoTotal);
                   System.out.println("Lista total");
                   System.out.println(listTotal);
                   
                    Map pag = (HashMap) listTotal.get(0);
                    System.out.println("Lista total");
                    BigDecimal pago = new BigDecimal(pag.get("PAGO").toString());
                    BigDecimal total = new BigDecimal(pag.get("TOTAL").toString());
                    
                    System.out.println("buscando actualizar"+pago);
                    System.out.println("buscando actualizar"+total);
                     
                    ErpCpOtras comp = new ErpCpOtras();
                    ErpCpOtrasId compId = new ErpCpOtrasId();
                    
                    compId.setCompania(compania);
                    compId.setId(Integer.parseInt(numFE));
                    comp.setId(compId);
                    comp.setPagoAcumuladoCXP(pago);
                    comp.setFechaPagoCxp(df.parse(fechaPago));
                    
                   if (total.compareTo(pago) == 1){
                       
                        comp.setEstatusCxp("PAR");
                        
                        erpCpOtrasDao.updateErpCpOtrasEstatusPagosOtras(comp);
                   
                   
                   }
                   
                    if (total.compareTo(pago) == 0){
                      
                       comp.setEstatusCxp("PAG");
                        
                        erpCpOtrasDao.updateErpCpOtrasEstatusPagosOtras(comp);
                   
                   
                   }
                    
                     if (total.compareTo(pago) == -1){
                       
                       comp.setEstatusCxp("PAG");
                        
                        erpCpOtrasDao.updateErpCpOtrasEstatusPagosOtras(comp);
                   
                   
                   }
                        
                          
          
                     

         
            
        }catch(Exception e){
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("Error al guardar");
           return rq;
        }
        
        return rq;
    }
    
      @RequestMapping(value = "/updatePago", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery updateSeguiPagos( String data, WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
    //    System.out.println("data Pagos:"+data);
        
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }


            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
            
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

           
          
        try{
            
              List<PagosDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            PagosDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
          
            Iterator<PagosDTO> it = lista.iterator();
            
            ErpSeguiDocumentos segui = new ErpSeguiDocumentos(); 
            ErpSeguiDocumentosId seguiId = new ErpSeguiDocumentosId(); 
            String numFE = "";
            
              while (it.hasNext()) {
          //       System.out.println("------------------------------PAGOS UPDATE-------------------------------");
                 PagosDTO ss = it.next();
                 numFE = ss.numFe;
         //        System.out.println("pagos"+ss.tOperacionDet);
                 
                 seguiId.setCompania(compania);
                 seguiId.setNumFe(Integer.parseInt(ss.numFe));
                 seguiId.setOrigen("P");
                 seguiId.setSerie("A");
                 seguiId.settDoc("FE");
                 //int sec = erpSeguiDocumentosDao.getMaxId(seguiId);
                 
                 seguiId.setSec(Integer.parseInt(ss.sec));
         //        System.out.println("llave guardada");
                 segui.setId(seguiId);
                 segui.setBanco(ss.banco);
                  if (ss.folio == null){
                     
                   segui.setFolio(Integer.parseInt(ss.numFe));
                     
                 }else{
                  segui.setFolio(Integer.parseInt(ss.folio));
                 }
          //       System.out.println("folio");
                 segui.setImporteOperacion(new BigDecimal(ss.importeOperacionDet));
          //       System.out.println("importe operacion");
                 //segui.setMoneda(ss.);
                 segui.setObservaciones(ss.observaciones);
                 segui.setParidad(new BigDecimal(ss.paridad));
         //        System.out.println("paridad");
                 segui.setTotPesos(new BigDecimal(ss.totPesos));
          //       System.out.println("ltotpesos");
                 segui.setUsuario(usuario);
                 segui.settOperacion(ss.tOperacionDet);
                 segui.setCuentaBanco(ss.cuentaBanco);
        //         System.out.println("fechaPago"+ss.fechaPago);
                 segui.setFechaPagoCxpFe(df.parse(ss.fechaPago));
                 
                 if(ss.idTransaccion != null){
                     
                     segui.setIdTransaccion(Integer.parseInt(ss.idTransaccion));
                 
                 
                 }
                 
        //         System.out.println("fechaPago");
                 
        //         System.out.println("pagos enviados");
                 
                 boolean result = erpSeguiDocumentosDao.update(segui);
          //       System.out.println("buscando ..........");
            
                      rq.setSuccess(true);
                        rq.setData(null);
                        rq.setMsg("Pago Guerdado");
                      
                    System.out.println("buscando transacccion ..........");
                    
                    System.out.println(ss.idTransaccion);
                    if(ss.idTransaccion != null){
                 
                     ErpSatTransaccion tran = new ErpSatTransaccion();
                     ErpSatTransaccionId tranId = new ErpSatTransaccionId();
                     
                     tranId.setCompania(compania);
                     tranId.setId(new BigDecimal(ss.idTransaccion));
                     tran.setId(tranId);
                     tran.setFecha(df.parse(ss.fechaPago));
                     tran.setMontoTotal(new BigDecimal(ss.totPesos));
                     tran.setTipCamb(new BigDecimal(ss.paridad));
                     tran.setBancoOriNal(ss.banco);
                     tran.setBancoDestNal(ss.banco);
                     tran.setCtaDest(ss.cuentaBanco);
                     tran.setCtaOri(ss.cuentaBanco);
                     
                     System.out.println("buscando origen ..........");
                      System.out.println(ss.origen);
                 
                     if(ss.origen.equalsIgnoreCase("CXP")){
                           erpSatTransaccionDao.actualizaTransaccionCXP(tran);
                     }
                     
                     if(ss.origen.equalsIgnoreCase("CXC")){
                           erpSatTransaccionDao.actualizaTransaccionCXC(tran);
                     }
                 
                 
                 }
             
                 
                 

            }
              
          //    System.out.println("buscando actualizar");
              
                Map pagoTotal = new HashMap();
                
               pagoTotal.put("compania", compania);
               pagoTotal.put("numero", numFE);
               
                   List listTotal = processDao.getMapResult("TotalesPagos", pagoTotal);
                   
                    Map pag = (HashMap) listTotal.get(0);
                    BigDecimal pago = new BigDecimal(pag.get("PAGO").toString());
                    BigDecimal total = new BigDecimal(pag.get("TOTAL").toString());
                    
               //     System.out.println("buscando actualizar"+pago);
               //     System.out.println("buscando actualizar"+total);
                     
                    ErpFeComprobantes comp = new ErpFeComprobantes();
                    ErpFeComprobantesId compId = new ErpFeComprobantesId();
                    
                    compId.setCompania(compania);
                    compId.setNumero(Integer.parseInt(numFE));
                    comp.setId(compId);
                    
                   if (total.compareTo(pago) == 1){
                       
                       erpFeComprobantesDao.actualizaPago("PAR", pago, comp);
                   
                   
                   }
                   
                    if (total.compareTo(pago) == 0){
                       
                       erpFeComprobantesDao.actualizaPago("PAG", pago, comp);
                   
                   
                   }
                    
                     if (total.compareTo(pago) == -1){
                       
                       erpFeComprobantesDao.actualizaPago("PAG", pago, comp);
                   
                   
                   }
                          
          
                     

         
            
        }catch(Exception e){
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("Error al guardar");
           return rq;
        }
        
        return rq;
    }
    
          @RequestMapping(value = "/deletePagoOtras", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery deleteSeguiPagosOtras( String data, WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
     //   System.out.println("data Pagos:"+data);
        
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }


            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
            
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

           
          
        try{
            
              List<PagosDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            PagosDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
          
            Iterator<PagosDTO> it = lista.iterator();
            
            ErpSeguiDocumentos segui = new ErpSeguiDocumentos(); 
            ErpSeguiDocumentosId seguiId = new ErpSeguiDocumentosId(); 
            String numFE = "";
            String fechaPago = "";
            
              while (it.hasNext()) {
       //          System.out.println("------------------------------PAGOS DELETE-------------------------------");
                 PagosDTO ss = it.next();
                 numFE = ss.numFe;
      //           System.out.println("pagos"+ss.tOperacionDet);
                 
                 seguiId.setCompania(compania);
                 seguiId.setNumFe(Integer.parseInt(ss.numFe));
                 seguiId.setOrigen("P");
                 seguiId.setSerie("A");
                 seguiId.settDoc("OTR");
                 //int sec = erpSeguiDocumentosDao.getMaxId(seguiId);
                 
                 seguiId.setSec(Integer.parseInt(ss.sec));
         //        System.out.println("llave guardada");
                 segui.setId(seguiId);
                 
                 fechaPago = ss.fechaPago;
             
                 
                 boolean result = erpSeguiDocumentosDao.delete(segui);
           //      System.out.println("buscando ..........");
            
                      rq.setSuccess(true);
                        rq.setData(null);
                        rq.setMsg("Pago Borrado");
                      
                 
                 
             
                 
                 

            }
              
         //     System.out.println("buscando actualizar");
              
                Map pagoTotal = new HashMap();
                
               pagoTotal.put("compania", compania);
               pagoTotal.put("numero", numFE);
               
                   List listTotal = processDao.getMapResult("TotalesPagosOtras", pagoTotal);
               
                    
                     ErpCpOtras comp = new ErpCpOtras();
                    ErpCpOtrasId compId = new ErpCpOtrasId();
                    
                    compId.setCompania(compania);
                    compId.setId(Integer.parseInt(numFE));
                    comp.setId(compId);
                    
                    
                    
                   if (listTotal == null || listTotal.isEmpty()){
                       comp.setFechaPagoCxp(null);
                       comp.setPagoAcumuladoCXP(new BigDecimal(0));
                       comp.setEstatusCxp("");
                       erpCpOtrasDao.updateErpCpOtrasEstatusPagosOtras(comp);
                       
                       return rq;
                   
                   }
                   
          //         System.out.println("listTotal: "+listTotal);
                   
                    Map pag = (HashMap) listTotal.get(0);
                    BigDecimal pago = new BigDecimal(pag.get("PAGO").toString());
                    BigDecimal total = new BigDecimal(pag.get("TOTAL").toString());
                    
             //       System.out.println("buscando actualizar"+pago);
             //       System.out.println("buscando actualizar"+total);
                     
                   
                    
                   if (pago.compareTo(new BigDecimal(0)) == 0){
                       
                       comp.setFechaPagoCxp(null);
                       comp.setPagoAcumuladoCXP(new BigDecimal(0));
                       comp.setEstatusCxp("");
                        erpCpOtrasDao.updateErpCpOtrasEstatusPagosOtras(comp);
                   
                   }else{ 
                       
                       
                       
                        if (total.compareTo(pago) == 1){
                            
                             comp.setPagoAcumuladoCXP(pago);
                             comp.setEstatusCxp("PAR");
                             erpCpOtrasDao.updateErpCpOtrasEstatusPagosOtrasSF(comp);



                        }

                         if (total.compareTo(pago) == 0){

                             comp.setPagoAcumuladoCXP(pago);
                             comp.setEstatusCxp("PAG");
                             erpCpOtrasDao.updateErpCpOtrasEstatusPagosOtrasSF(comp);


                        }

                          if (total.compareTo(pago) == -1){

                            comp.setPagoAcumuladoCXP(pago);
                             comp.setEstatusCxp("PAG");
                             erpCpOtrasDao.updateErpCpOtrasEstatusPagosOtrasSF(comp);



                        }
                   }
                          
          
                     

         
            
        }catch(Exception e){
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("Error al borrar");
           return rq;
        }
        
        return rq;
    }
    
      @RequestMapping(value = "/deletePago", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery deleteSeguiPagos( String data, WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
     //   System.out.println("data Pagos:"+data);
        
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }


            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
            
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

           
          
        try{
            
              List<PagosDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            PagosDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
          
            Iterator<PagosDTO> it = lista.iterator();
            
            ErpSeguiDocumentos segui = new ErpSeguiDocumentos(); 
            ErpSeguiDocumentosId seguiId = new ErpSeguiDocumentosId(); 
            String numFE = "";
            
              while (it.hasNext()) {
       //          System.out.println("------------------------------PAGOS DELETE-------------------------------");
                 PagosDTO ss = it.next();
                 numFE = ss.numFe;
      //           System.out.println("pagos"+ss.tOperacionDet);
                 
                 seguiId.setCompania(compania);
                 seguiId.setNumFe(Integer.parseInt(ss.numFe));
                 seguiId.setOrigen("P");
                 seguiId.setSerie("A");
                 seguiId.settDoc("FE");
                 //int sec = erpSeguiDocumentosDao.getMaxId(seguiId);
                 
                 seguiId.setSec(Integer.parseInt(ss.sec));
         //        System.out.println("llave guardada");
                 segui.setId(seguiId);
             
                 
                 boolean result = erpSeguiDocumentosDao.delete(segui);
           //      System.out.println("buscando ..........");
            
                      rq.setSuccess(true);
                        rq.setData(null);
                        rq.setMsg("Pago Borrado");
                      
                 
                 
             
                 
                 

            }
              
         //     System.out.println("buscando actualizar");
              
                Map pagoTotal = new HashMap();
                
               pagoTotal.put("compania", compania);
               pagoTotal.put("numero", numFE);
               
                   List listTotal = processDao.getMapResult("TotalesPagos", pagoTotal);
                   
                    ErpFeComprobantes comp = new ErpFeComprobantes();
                    ErpFeComprobantesId compId = new ErpFeComprobantesId();
                    
                    compId.setCompania(compania);
                    compId.setNumero(Integer.parseInt(numFE));
                    comp.setId(compId);
                    
                   if (listTotal == null || listTotal.isEmpty()){
                       
                       erpFeComprobantesDao.actualizaPago("", new BigDecimal(0), comp);
                       
                       return rq;
                   
                   }
                   
          //         System.out.println("listTotal: "+listTotal);
                   
                    Map pag = (HashMap) listTotal.get(0);
                    BigDecimal pago = new BigDecimal(pag.get("PAGO").toString());
                    BigDecimal total = new BigDecimal(pag.get("TOTAL").toString());
                    
             //       System.out.println("buscando actualizar"+pago);
             //       System.out.println("buscando actualizar"+total);
                     
                   
                    
                   if (pago.compareTo(new BigDecimal(0)) == 0){
                       
                        erpFeComprobantesDao.actualizaPago("", pago, comp);
                   
                   }else{ 
                        if (total.compareTo(pago) == 1){

                            erpFeComprobantesDao.actualizaPago("PAR", pago, comp);


                        }

                         if (total.compareTo(pago) == 0){

                            erpFeComprobantesDao.actualizaPago("PAG", pago, comp);


                        }

                          if (total.compareTo(pago) == -1){

                            erpFeComprobantesDao.actualizaPago("PAG", pago, comp);


                        }
                   }
                          
          
                     

         
            
        }catch(Exception e){
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("Error al borrar");
           return rq;
        }
        
        return rq;
    }
    
          @RequestMapping(value = "/actualizaEstatus", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery actualizaEstatus( String data, WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
    

            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
            
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

           
          
        try{
            
             Querys que = new Querys();
            String store = que.getSQL("ACTUALIZA_PAGOS");
            
            Map param = new HashMap();
             
            
               param.put("compania", compania);
               
                int val = processDao.execute(store, param);

//                if (val <= 0) {
//                  
//                }
           
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("");
           //          System.out.println("En actualiza pagos");

         
            
        }catch(Exception e){
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("");
           return rq;
        }
        
        return rq;
    }
    
      @RequestMapping(value = "/savePagoAll", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery saveSeguiPagosAll( String data,@RequestParam("met_pago") String met_pago,
            @RequestParam("banco") String banco,
            @RequestParam("cuenta_banco") String cuenta_banco,
            @RequestParam("observaciones") String observaciones,
            @RequestParam("fechaPago") String fechaPago,
            @RequestParam("moneda") String moneda,
            @RequestParam("tipo_cambio") String tipo_cambio,
            @RequestParam("importeApli") String importeApli,
            @RequestParam("accion") String accion,
            WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
     //   System.out.println("data Pagos:"+data);
        
//         System.out.println("data met_pago:"+met_pago);
//         System.out.println("data banco:"+banco);
//         System.out.println("data cuenta_banco:"+cuenta_banco);
//         System.out.println("data observaciones:"+observaciones);
//         System.out.println("data fechaPago:"+fechaPago);
//         System.out.println("data moneda:"+moneda);
//         System.out.println("data tipo_cambio:"+tipo_cambio);
//         System.out.println("data importeApli:"+importeApli);
//         System.out.println("data accion:"+accion);
        
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }


            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
            
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

          
        try{
            
              List<PagosAllDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            PagosAllDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
          
            Iterator<PagosAllDTO> it = lista.iterator();
            
            ErpSeguiDocumentos segui = new ErpSeguiDocumentos(); 
            ErpSeguiDocumentosId seguiId = new ErpSeguiDocumentosId(); 
            
              while (it.hasNext()) {
             //    System.out.println("------------------------------PAGOS TOTALES-------------------------------");
                 PagosAllDTO ss = it.next();
               // System.out.println("ss.numero"+ss.numero);
                 seguiId.setCompania(compania);
                 seguiId.setNumFe(Integer.parseInt(ss.numero));
                 seguiId.setOrigen("P");
                 seguiId.setSerie("A");
                 seguiId.settDoc("FE");
                 int sec = erpSeguiDocumentosDao.getMaxId(seguiId);
           //      System.out.println("pagos sec "+sec);
                 seguiId.setSec(sec);
                 
                 segui.setId(seguiId);
                // System.out.println("1");
                 segui.setBanco(banco);
                // System.out.println("2");
                 if (ss.folio == null){
                     
                   segui.setFolio(Integer.parseInt(ss.numero));
                     
                 }else{
                  segui.setFolio(Integer.parseInt(ss.folio));
                 }
                // System.out.println("3");
                 if (accion.equalsIgnoreCase("T")){
                   segui.setImporteOperacion(new BigDecimal(ss.total));
                 }
                 if (accion.equalsIgnoreCase("P")){
                   segui.setImporteOperacion(new BigDecimal(importeApli));
                 }
                // System.out.println("4");
                 segui.setObservaciones(observaciones);
                // System.out.println("5");
                 segui.setParidad(new BigDecimal(tipo_cambio));
                // System.out.println("6");
                 if (accion.equalsIgnoreCase("T")){
                   segui.setTotPesos(new BigDecimal(ss.total).multiply(new BigDecimal(tipo_cambio)));
                 }
                 if (accion.equalsIgnoreCase("P")){
                   segui.setTotPesos(new BigDecimal(importeApli).multiply(new BigDecimal(tipo_cambio)));
                 }
                 
                // System.out.println("7");
                 segui.setUsuario(usuario);
                // System.out.println("8");
                 segui.settOperacion(met_pago);
                // System.out.println("9");
                 segui.setCuentaBanco(cuenta_banco);
                 //System.out.println("10");
                 segui.setFechaPagoCxpFe(df.parse(fechaPago));
                 //System.out.println("11");
                 
                 ErpSeguiDocumentosId result = erpSeguiDocumentosDao.save(segui);
                
                      rq.setSuccess(true);
                        rq.setData(null);
                        rq.setMsg("Pago Guardado");
                   //   System.out.println("12");
                  ErpFeComprobantes comp = new ErpFeComprobantes();
                    ErpFeComprobantesId compId = new ErpFeComprobantesId();
                    
                    compId.setCompania(compania);
                    compId.setNumero(Integer.parseInt(ss.numero));
                    comp.setId(compId);
                 
                 if (accion.equalsIgnoreCase("T")){
                     erpFeComprobantesDao.actualizaPago("PAG", new BigDecimal(ss.total), comp);
                 }
                 if (accion.equalsIgnoreCase("P")){
                     if (new BigDecimal(importeApli).compareTo(new BigDecimal(ss.total)) == 0){
                         
                          erpFeComprobantesDao.actualizaPago("PAG", new BigDecimal(importeApli), comp);
                     
                     }
                     if (new BigDecimal(importeApli).compareTo(new BigDecimal(ss.total)) == -1){
                         
                          erpFeComprobantesDao.actualizaPago("PAR", new BigDecimal(importeApli), comp);
                     
                     }
                     if (new BigDecimal(importeApli).compareTo(new BigDecimal(ss.total)) == 1){
                         
                          erpFeComprobantesDao.actualizaPago("PAG", new BigDecimal(importeApli), comp);
                     
                     }
                    
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
    @RequestMapping(value = "/cancelPagoAll", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery cancelPagoAll( String data,
            WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
      //  System.out.println("data Pagos:"+data);
       
        
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }


            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
            
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

          
        try{
            
              List<PagosAllDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            PagosAllDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
          
            Iterator<PagosAllDTO> it = lista.iterator();
            
            ErpSeguiDocumentos segui = new ErpSeguiDocumentos(); 
            ErpSeguiDocumentosId seguiId = new ErpSeguiDocumentosId(); 
            
              while (it.hasNext()) {
              //   System.out.println("--------------------------CANCELA PAGOS TOTALES-------------------------------");
                 PagosAllDTO ss = it.next();
             
                 seguiId.setCompania(compania);
                 seguiId.setNumFe(Integer.parseInt(ss.numero));
                 seguiId.setOrigen("P");
                 seguiId.setSerie("A");
                 seguiId.settDoc("FE");
                 
                
                 
                 
                 boolean result = erpSeguiDocumentosDao.borraDetallePagos(seguiId);
                
                        rq.setSuccess(true);
                        rq.setData(null);
                        rq.setMsg("Pago Eliminado");
                   //   System.out.println("12");
                  ErpFeComprobantes comp = new ErpFeComprobantes();
                    ErpFeComprobantesId compId = new ErpFeComprobantesId();
                    
                    compId.setCompania(compania);
                    compId.setNumero(Integer.parseInt(ss.numero));
                    comp.setId(compId);
                 
                
                          erpFeComprobantesDao.actualizaPago("", new BigDecimal(0), comp);
                     
                     
                    
                 
                 

            }
             
         
            
        }catch(Exception e){
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("Error al eliminar pago");
           return rq;
        }
        
        return rq;
    }
    
          @RequestMapping(value = "/dataTesoreria/{query}", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery queryActionPost(@PathVariable String query,
             @RequestParam(value = "limit") int limit,
                         @RequestParam(value = "page") int page,
                         //@RequestParam(value = "query") String query,
                         @RequestParam(value = "start") int start,
            WebRequest webRequest, Model model) {
        ResponseQuery rq = new ResponseQuery();
        
     //   System.out.println("tesoreria");
     //   System.out.println(webRequest.getParameter("jsonData"));
        
        int to = limit * page;
        int from = to - limit;
       
        Map parametros = processDao.paramToMap(webRequest.getParameterMap());
        
        
        String data = webRequest.getParameter("jsonData");
        
           int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }


            
            ObjectMapper mapper = new ObjectMapper();
          
        try{
            List<CxpDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            CxpDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }

  
            Iterator<CxpDTO> it = lista.iterator();
      
            List listT = new ArrayList();
          
            int total = 0;
            
            while (it.hasNext()) {
           //      System.out.println("-------------------------------------------------------------------");
                 CxpDTO ss = it.next();
                 
                 
           //      System.out.println("parametro: "+ ss.folio);
                 
                 parametros.put("compania", ss.compania);
                 parametros.put("numero",ss.numero);
                 
                 List list = processDao.getMapResult(query, parametros);
                 
                
                 
          //       System.out.println(list.get(0));
                 
                 listT.add(list.get(0));
                 
                 total = total + 1;
            }
            
       //     System.out.println("list finally");
       //     System.out.println(listT);
            
            int paginas;
            
            if (total > limit){
            
              paginas = (int) ((total/limit)+1);
            }else{
            
              paginas = 1;
            }
            
            if (listT.isEmpty() || listT == null){
                
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Ready");
                
            
            
            }else{
            
                rq.setSuccess(true);
                rq.setData(listT);
                rq.setMsg("Ready");
                rq.setTotal(new BigDecimal(paginas));
            
            }
            
            
            
        }catch (Exception e){
        
             rq.setSuccess(true);
            rq.setData(null);
            rq.setMsg("Ready");
        }
        
       // parametros.put("compania", model.asMap().get("compania"));
       // parametros.put("usuario", model.asMap().get("usuario"));

       // System.out.println("compania"+parametros.put("compania", model.asMap().get("compania")));
       // System.out.println("query"+query);
       
       // List list = processDao.getMapResult(query, parametros);

//        if (list == null  || list.size()==0) {
//            rq.setSuccess(false);
//            rq.setData(null);
//            rq.setMsg("data null");
//        } else {

//            rq.setSuccess(true);
//            rq.setData(null);
//            rq.setMsg("Ready");
       // }

        return rq;
    }
    
            @RequestMapping(value = "/dataTesoreriaOtros/{query}", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery dataTesoreriaOtros(@PathVariable String query,
             @RequestParam(value = "limit") int limit,
                         @RequestParam(value = "page") int page,
                         //@RequestParam(value = "query") String query,
                         @RequestParam(value = "start") int start,
            WebRequest webRequest, Model model) {
        ResponseQuery rq = new ResponseQuery();
        
     //   System.out.println("tesoreria");
     //   System.out.println(webRequest.getParameter("jsonData"));
        
        int to = limit * page;
        int from = to - limit;
       
        Map parametros = processDao.paramToMap(webRequest.getParameterMap());
        
        
        String data = webRequest.getParameter("jsonData");
        
           int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }


            
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
      
            List listT = new ArrayList();
          
            int total = 0;
            
            while (it.hasNext()) {
           //      System.out.println("-------------------------------------------------------------------");
                 CxpOtrasDTO ss = it.next();
                 
                 
           //      System.out.println("parametro: "+ ss.folio);
                 
                 parametros.put("compania", ss.compania);
                 parametros.put("numero",ss.id);
                 
                 List list = processDao.getMapResult(query, parametros);
                 
                
                 
          //       System.out.println(list.get(0));
                 
                 listT.add(list.get(0));
                 
                 total = total + 1;
            }
            
       //     System.out.println("list finally");
       //     System.out.println(listT);
            
            int paginas;
            
            if (total > limit){
            
              paginas = (int) ((total/limit)+1);
            }else{
            
              paginas = 1;
            }
            
            if (listT.isEmpty() || listT == null){
                
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Ready");
                
            
            
            }else{
            
                rq.setSuccess(true);
                rq.setData(listT);
                rq.setMsg("Ready");
                rq.setTotal(new BigDecimal(paginas));
            
            }
            
            
            
        }catch (Exception e){
        
             rq.setSuccess(true);
            rq.setData(null);
            rq.setMsg("Ready");
        }
        
       // parametros.put("compania", model.asMap().get("compania"));
       // parametros.put("usuario", model.asMap().get("usuario"));

       // System.out.println("compania"+parametros.put("compania", model.asMap().get("compania")));
       // System.out.println("query"+query);
       
       // List list = processDao.getMapResult(query, parametros);

//        if (list == null  || list.size()==0) {
//            rq.setSuccess(false);
//            rq.setData(null);
//            rq.setMsg("data null");
//        } else {

//            rq.setSuccess(true);
//            rq.setData(null);
//            rq.setMsg("Ready");
       // }

        return rq;
    }
    
    
     @RequestMapping(value = "/dataRembolso/{query}", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery queryActionRembolso(@PathVariable String query,
             @RequestParam(value = "limit") int limit,
                         @RequestParam(value = "page") int page,
                         //@RequestParam(value = "query") String query,
                         @RequestParam(value = "start") int start,
            WebRequest webRequest, Model model) {
        ResponseQuery rq = new ResponseQuery();
        
     //   System.out.println("rembolso");
     //   System.out.println(webRequest.getParameter("jsonData"));
        
        int to = limit * page;
        int from = to - limit;
       
        Map parametros = processDao.paramToMap(webRequest.getParameterMap());
        
        
        String data = webRequest.getParameter("jsonData");
        
           int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }


            
            ObjectMapper mapper = new ObjectMapper();
          
        try{
            List<CxpDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            CxpDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }

  
            Iterator<CxpDTO> it = lista.iterator();
      
            List listT = new ArrayList();
          
            int total = 0;
            
            while (it.hasNext()) {
         //        System.out.println("-------------------------------------------------------------------");
                 CxpDTO ss = it.next();
                 
                 
          //       System.out.println("parametro: "+ ss.folio);
                 
                 parametros.put("compania", ss.compania);
                 parametros.put("numero",ss.numero);
                 
                 List list = processDao.getMapResult(query, parametros);
                 
                
                 
              //   System.out.println(list.get(0));
                 
                 listT.add(list.get(0));
                 
                 total = total + 1;
            }
            
          //  System.out.println("list finally");
          //  System.out.println(listT);
            
            int paginas;
            
            if (total > limit){
            
              paginas = (int) ((total/limit)+1);
            }else{
            
              paginas = 1;
            }
            
            if (listT.isEmpty() || listT == null){
                
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Ready");
                
            
            
            }else{
            
                rq.setSuccess(true);
                rq.setData(listT);
                rq.setMsg("Ready");
                rq.setTotal(new BigDecimal(paginas));
            
            }
            
            
            
        }catch (Exception e){
        
             rq.setSuccess(true);
            rq.setData(null);
            rq.setMsg("Ready");
        }
        
     
        return rq;
    }

     @RequestMapping(value = "/saveRembolso", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery saveRembolso( String data, WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
      //  System.out.println("data rembolso creacion:"+data);
        
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }


            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
          
        try{
            List<RembolsoDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            RembolsoDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }

  
            Iterator<RembolsoDTO> it = lista.iterator();
           ErpCxpFolios folios = new ErpCxpFolios();
           ErpCxpFoliosId foliosId = new ErpCxpFoliosId();
           
           ErpFeComprobantes comprobantes = new ErpFeComprobantes();
           ErpFeComprobantesId comprobantesId = new ErpFeComprobantesId();
           
           foliosId.setCompania(compania);
           
           int geFolio = erpCxpFoliosDao.getMaxCxpFolios(foliosId);
           
           int banderaGe = 0;
           
        //   System.out.println("GENRADOR DE FOLIO:"+geFolio);
           
           int folioPagos = geFolio;
          
            while (it.hasNext()) {
//                 System.out.println("-------------------------------------------------------------------");
                 RembolsoDTO ss = it.next();
               //  if (ss.estatusCxp == null){
                 int id = erpCxpFoliosDao.getMaxIdCxpFolios(foliosId);
                 
                // folioPagos = id;
                 
                 foliosId.setId(id);
                 folios.setId(foliosId);
                 folios.setFolio(geFolio);
                 folios.setOperacion("EA");
                 folios.setUsuario(usuario);
                 folios.setNumeroFe(Integer.parseInt(ss.numeroRem));
                
                 
                 ErpCxpFoliosId result = erpCxpFoliosDao.save(folios);
                 
                 comprobantesId.setCompania(compania);
                 comprobantesId.setNumero(Integer.parseInt(ss.numeroRem));
                 comprobantes.setId(comprobantesId);
                 comprobantes.setEstatusCxp("REMB");
                 comprobantes.setFolioPagos(geFolio);
                 comprobantes.setReembolsoClieprov(ss.empleadoRem);
                 

                 
                 boolean result2 = false;
                 
                
                     
               //      System.out.println("actualiza reembolso");
                 
                     result2 = erpFeComprobantesDao.actualizaEstatusFolioPagosReembolso(comprobantes, ss.monedaRem);
                 
                
              //   System.out.println("result2"+result2);
                 
                 banderaGe = 1;
  

            }
            
            ErpPolizasVSFacturasAutErrId result=null;
            
            if (folioPagos != 0){
            
                ErpPolizasVSFacturasAutErr correo = new ErpPolizasVSFacturasAutErr();

                ErpPolizasVSFacturasAutErrId correoId = new ErpPolizasVSFacturasAutErrId();

                correoId.setCompania(compania);
                correoId.setFolio(String.valueOf(folioPagos));
                correoId.setTipo("5");
                
                correo.setId(correoId);
                correo.setEnvio("0");
                correo.setDescripcion("Se envio Folio: "+folioPagos+ " para autorización");
                correo.setFechaCap(new Date());
                correo.setNombre("Folio para autorización");
               
                
                result = erpPolizasVSFacturasAutErrDao.save(correo);
            }
            
            
            
            if (banderaGe == 1){
            
                if (result == null){
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("Enviado a pagar con folio: "+geFolio+", error al enviar correo");
                }else{
                
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("Enviado a pagar con folio: "+geFolio+", se ha enviado correo a Tesoreria");
                
                }
            }else{
                
                rq.setSuccess(true);
                rq.setData(null);
                rq.setMsg("No hay registros para enviar");
                
            }
            
        }catch(Exception e){
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("Error al guardar");
           return rq;
        }
        
        return rq;
    }
    
      @RequestMapping(value = "/enviaTesoreria", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery enviaTesoreria( String data,String text, WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
       System.out.println("text:"+text);
       
        String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
       
      
        Map tok = new HashMap();
              
        tok.put("idTok", text);
        tok.put("compania", compania);
        tok.put("usuario", usuario);
        
        List permisoTok = processDao.getMapResult("permisosTok", tok);
        
         if(permisoTok == null || permisoTok.size() == 0){
             
         }else{       
                List listVToken = processDao.getMapResult("ValidaToken", tok);

                if(listVToken == null || listVToken.size() == 0){


                       rq.setSuccess(false);
                       rq.setData(null);
                       rq.setMsg("Error, el token no es valido");
                       return rq;




                }else{

                  Map t = (HashMap) listVToken.get(0);

                      System.out.println(t.get("ID_CEL").toString());
                      System.out.println(t.get("TOK_ID").toString());
                      System.out.println(t.get("DIFERENECIA").toString());

                      BigDecimal dif = new BigDecimal(t.get("DIFERENECIA").toString());
                      BigDecimal dif2 = new BigDecimal(3);

                      if(dif.compareTo(dif2) == 1){

                           rq.setSuccess(false);
                           rq.setData(null);
                           rq.setMsg("Error, el token ha caducado");
                           return rq;


                      }



                }
         }
        
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }


           
            ObjectMapper mapper = new ObjectMapper();
            
        try{
            List<EnvioTesDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            EnvioTesDTO.class));
            
            

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }

            
                   Map permisos = new HashMap();
                
                   permisos.put("compania", compania);
                   permisos.put("usuario", usuario);
               
                   List listPermisos = processDao.getMapResult("BuscaPermisosComponentesCXP", permisos);
                   
                   System.out.println(listPermisos);
                    
                   if (listPermisos != null && !listPermisos.isEmpty()){
                       
                          Map perm = (HashMap) listPermisos.get(0);
                          
                          if(!perm.get("HIDDEN").toString().equalsIgnoreCase("0")){
                              
                                rq.setSuccess(false);
                                rq.setData(null);
                                rq.setMsg("Error el usuario no tiene permisos para liberar a tesoreria");

                                return rq;
                          
                          
                          }
                          
                   }else{
                   
                        rq.setSuccess(false);
                        rq.setData(null);
                        rq.setMsg("Error el usuario no tiene permisos para liberar a tesoreria");
                        
                        return rq;

                       
                   }
                   
 
            Iterator<EnvioTesDTO> it = lista.iterator();
           ErpCxpFolios folios = new ErpCxpFolios();
           ErpCxpFoliosId foliosId = new ErpCxpFoliosId();
           
           ErpFeComprobantes comprobantes = new ErpFeComprobantes();
           ErpFeComprobantesId comprobantesId = new ErpFeComprobantesId();
           
           ErpCpOtras otras = new ErpCpOtras();
           ErpCpOtrasId otrasId = new ErpCpOtrasId();
          
            String folioPagos = "";
            int banderaGe = 0 ;
            
            Querys que = new Querys();
            String store = que.getSQL("CONTA_ACTUALIZA_VIATICOS");
            
            while (it.hasNext()) {
//                 System.out.println("-------------------------------------------------------------------");
                 EnvioTesDTO ss = it.next();
                 
                 
                 comprobantesId.setCompania(ss.compania);
                 comprobantesId.setNumero(Integer.parseInt(ss.numero));
                 comprobantes.setId(comprobantesId);
                 
                 otrasId.setCompania(ss.compania);
                 otrasId.setId(Integer.parseInt(ss.numero));
                 otras.setId(otrasId);
                 otras.setEstatusCxp("TES");
                 otras.setPagoCie(ss.pagoCieFol);
                 otras.setRefenciaCie(ss.referenciaCieFol);
                 otras.setConceptoCie(ss.conceptoCieFol);
                 otras.setFolioPagos(Integer.parseInt(ss.folioCxp));
                 
                 foliosId.setCompania(ss.compania);
                 foliosId.setId(0);
                 folios.setId(foliosId);
                 folios.setFolio(Integer.parseInt(ss.folioCxp));
                 folios.setNumeroFe(Integer.parseInt(ss.numero));
                 folios.setOperacion("ET");
                 
                 
                 erpCxpFoliosDao.actualizaEstatusFolio(folios);
                 
                 if(ss.origenFol.equalsIgnoreCase("F")){
                    erpFeComprobantesDao.actualizaPago("TES", new BigDecimal(0), comprobantes);
                 }
                 if(ss.origenFol.equalsIgnoreCase("O")){
                    erpCpOtrasDao.updateErpCpOtrasEstatusPagos(otras);
                 }
                 if(ss.origenFol.equalsIgnoreCase("V")){
                    
                  Map paramViatico = new HashMap();
                    paramViatico.put("COMPANIA",compania);
                    paramViatico.put("COMISION",ss.numero);
                    paramViatico.put("TIPO","TES");
                    paramViatico.put("FOLIO_PAGO",ss.folioCxp);
            
                int val = processDao.execute(store, paramViatico);

                     if (val <= 0) {

                }
                 }
                 
                  folioPagos = ss.folioCxp;
                  banderaGe = 1;
            }
            
             Querys queT = new Querys();
             String storeT = queT.getSQL("InsertaTokenFolio");
            
             
             Map paramTOK = new HashMap();
                    paramTOK.put("TOK_ID",text);
                    paramTOK.put("FOLIO_AUT",folioPagos);
           
            
                int val = processDao.execute(storeT, paramTOK);
             
            
            ErpPolizasVSFacturasAutErrId result=null;
            
         
                ErpPolizasVSFacturasAutErr correo = new ErpPolizasVSFacturasAutErr();

                ErpPolizasVSFacturasAutErrId correoId = new ErpPolizasVSFacturasAutErrId();

                correoId.setCompania(compania);
                correoId.setFolio(folioPagos);
                correoId.setTipo("5");
                
                correo.setId(correoId);
                correo.setEnvio("0");
                correo.setDescripcion("Se envio Folio: "+folioPagos+ " para impresión");
                correo.setFechaCap(new Date());
                correo.setNombre("Folio para impresion");
               
                
                result = erpPolizasVSFacturasAutErrDao.save(correo);
            
            
            
            
            if (banderaGe == 1){
            
                if (result == null){
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("Enviado a pagar con folio: "+folioPagos+", error al enviar correo");
                }else{
                
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("Enviado a pagar con folio: "+folioPagos+", se ha enviado correo a Tesoreria");
                
                }
            }else{
                
                rq.setSuccess(true);
                rq.setData(null);
                rq.setMsg("No hay registros para enviar");
                
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
    
     @RequestMapping(value = "/eliminaFactFolioCXP", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery eliminaFactFolioCXP( String data, WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
        
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }
         
      //  System.out.println("----------------------------------------------");
        
     //   System.out.println(data);

            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
            
        try{
            List<EnvioTesDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            EnvioTesDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }

  
            Iterator<EnvioTesDTO> it = lista.iterator();
           ErpCxpFolios folios = new ErpCxpFolios();
           ErpCxpFoliosId foliosId = new ErpCxpFoliosId();
           
           ErpFeComprobantes comprobantes = new ErpFeComprobantes();
           ErpFeComprobantesId comprobantesId = new ErpFeComprobantesId();
           ErpCpOtras otras = new ErpCpOtras();
           ErpCpOtrasId otrasId = new ErpCpOtrasId();
          
            String folioPagos = "";
            int banderaGe = 0 ;
            
            Querys que = new Querys();
            String store = que.getSQL("CONTA_ACTUALIZA_VIATICOS");
         
            
            while (it.hasNext()) {
              
                 EnvioTesDTO ss = it.next();
                 
                 
                 comprobantesId.setCompania(ss.compania);
                 comprobantesId.setNumero(Integer.parseInt(ss.numero));
                 comprobantes.setId(comprobantesId);
                 
                 otrasId.setCompania(ss.compania);
                 otrasId.setId(Integer.parseInt(ss.numero));
                 otras.setId(otrasId);
                 otras.setEstatusCxp("");
                 otras.setFolioPagos(null);
                 
                 
                 foliosId.setCompania(ss.compania);
                 foliosId.setId(0);
                 folios.setId(foliosId);
                 folios.setFolio(Integer.parseInt(ss.folioCxp));
                 folios.setNumeroFe(Integer.parseInt(ss.numero));
                 folios.setOperacion("");
                 
                 
                 erpCxpFoliosDao.eliminaFactFolio(folios);
                 
                 if (ss.origenFol.equalsIgnoreCase("F")){
                 
                    erpFeComprobantesDao.eliminaRelacionTesoreria("", null, comprobantes);
                 }
                 if (ss.origenFol.equalsIgnoreCase("O")){
                     
                  
                    erpCpOtrasDao.updateErpCpOtrasEstatusPagos(otras);
                 }
                 if (ss.origenFol.equalsIgnoreCase("V")){
          
                 
                   
                  Map paramViatico = new HashMap();
                    paramViatico.put("COMPANIA",compania);
                    paramViatico.put("COMISION",ss.numero);
                    paramViatico.put("TIPO","CAN");
                    paramViatico.put("FOLIO_PAGO",ss.folioCxp);
                    
                     int val = processDao.execute(store, paramViatico);

                     if (val <= 0) {

                }
                    
                 }
                  folioPagos = ss.folioCxp;
                  banderaGe = 1;
            }
            
          
            
            if (banderaGe == 1){
            
                
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("Facturas Eliminadas Correctamente del folio: "+folioPagos);
              
                
            }else{
                
                rq.setSuccess(true);
                rq.setData(null);
                rq.setMsg("No hay registros para enviar");
                
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
         @RequestMapping(value = "/deleteOtros", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery deleteOtros( String data, WebRequest webRequest, Model model) throws IOException {

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
           ErpCpOtras otras = new ErpCpOtras();
           ErpCpOtrasId otrasId = new ErpCpOtrasId();
          
          
            int banderaGe = 0 ;
            while (it.hasNext()) {
//                 System.out.println("-------------------------------------------------------------------");
                 CxpOtrasDTO ss = it.next();
                 
                 otrasId.setCompania(ss.compania);
                 otrasId.setId(Integer.parseInt(ss.id));
                 otras.setId(otrasId);
                 
                 erpCpOtrasDao.delete(otras);
               
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
            rq.setMsg("Error al guardar");
           return rq;
        }
        
        return rq;
    }
    
    
     @RequestMapping(value = "/updateOtros", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery updateOtros( String data, WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
   //     System.out.println("data factura cancelacion:"+data);
        SimpleDateFormat formatFecha = new SimpleDateFormat("dd/MM/yyyy");
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }

       // System.out.println("data:  "+data);
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
           ErpCpOtras otras = new ErpCpOtras();
           ErpCpOtrasId otrasId = new ErpCpOtrasId();
          
          
            int banderaGe = 0 ;
            while (it.hasNext()) {
//                 System.out.println("-------------------------------------------------------------------");
                 CxpOtrasDTO ss = it.next();
                 
                 otrasId.setCompania(ss.compania);
                 otrasId.setId(Integer.parseInt(ss.id));
                 otras.setId(otrasId);
                 
                // System.out.println("fecha: ----"+ss.fechaCxp);
                 
                 if (ss.fechaCxp == null || ss.fechaCxp.equalsIgnoreCase("")){
                 
                     otras.setFechaVencCxp(null);
                 }else{
                     
                     otras.setFechaVencCxp(formatFecha.parse(ss.fechaCxp));
                 
                 }
                 
                 
                 otras.setConceptoCxp(ss.concepto);
                 otras.setCtoCxp(ss.cc);
                 
                 erpCpOtrasDao.updateErpCpOtras(otras,"");
               
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
            rq.setMsg("Error al guardar");
           return rq;
        }
        
        return rq;
    }
    
    
    
     @RequestMapping(value = "/relacionaOtrasXFacturas", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery relacionaOtrasXFacturas( String data,String data2, WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
   //     System.out.println("data factura cancelacion:"+data);
        SimpleDateFormat formatFecha = new SimpleDateFormat("dd/MM/yyyy");
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }
        
          int index2 = data2.indexOf("[");
        if (index2 == -1) {
            data2 = "[" + data2 + "]";
        }
//        
//        System.out.println("---------------------------------------------------");
//        
//        System.out.println("data:  "+data);
//        System.out.println("---------------------------------------------------");
//        
//        System.out.println("data2:  "+data2);
//        System.out.println("---------------------------------------------------");
        
            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
          
                   
        try{
            List<CxpOtrasDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            CxpOtrasDTO.class));
            
            List<RelacionFactXOtrasDTO> lista2 = mapper.readValue(data2,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            RelacionFactXOtrasDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
            
            if (lista2.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }

  
           Iterator<CxpOtrasDTO> it = lista.iterator();
           Iterator<RelacionFactXOtrasDTO> it2 = lista2.iterator();
           
           ErpFeComprobantes comp = new ErpFeComprobantes();       
           ErpFeComprobantesId compId = new ErpFeComprobantesId();
           
           ErpCxpFacturasXOtras factxotras = new ErpCxpFacturasXOtras();
           ErpCxpFacturasXOtrasId factxotrasId = new ErpCxpFacturasXOtrasId();
//           
           boolean result = false;
           ErpCxpFacturasXOtrasId result2 = null;
//           
//           
//         
//
            while (it.hasNext()) {
//                 System.out.println("-------------------------------------------------------------------");
                 CxpOtrasDTO ss = it.next();
                 
                 
                 
                  while (it2.hasNext()) {
                      
                      RelacionFactXOtrasDTO ss2 = it2.next();
                      
                        compId.setCompania(ss2.compania);
                        compId.setNumero(Integer.parseInt(ss2.numero));
                        comp.setId(compId);

                      if(ss.tipoGasto.equalsIgnoreCase("R")){
                          result = erpFeComprobantesDao.actualizaPago("REMB", BigDecimal.ZERO, comp);
                      }
                      if(ss.tipoGasto.equalsIgnoreCase("A")){
                          
                          result = erpFeComprobantesDao.actualizaPago("ANT", BigDecimal.ZERO, comp);
                      
                      }
                      
                      factxotrasId.setCompania(compania);
                      int sec = erpCxpFacturasXOtrasDao.getMaxErpCpOtrasId(factxotrasId);
                      factxotrasId.setSec(sec);
                      factxotras.setId(factxotrasId);
                      factxotras.setNumeroFe(Integer.parseInt(ss2.numero));
                      factxotras.setNumeroOtras(Integer.parseInt(ss.id));
                      
                      
                      result2 = erpCxpFacturasXOtrasDao.save(factxotras);
                      
                      
                      
                  }
                 
                 
                 
                 
                 
                 
               
            }
            
          
            
            if (result == true && result2 != null){
            
                
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("Se guardo la relacion correctamente");
              
                
            }else{
//                
                rq.setSuccess(true);
                rq.setData(null);
                rq.setMsg("Error al guardar relacion");
                
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
    
      @RequestMapping(value = "/quitarRelacionaOtrasXFacturas", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery quitarRelacionaOtrasXFacturas( String data,String data2, WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
   //     System.out.println("data factura cancelacion:"+data);
        SimpleDateFormat formatFecha = new SimpleDateFormat("dd/MM/yyyy");
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }
        
          int index2 = data2.indexOf("[");
        if (index2 == -1) {
            data2 = "[" + data2 + "]";
        }
//        
//        System.out.println("---------------------------------------------------");
//        
//        System.out.println("data:  "+data);
//        System.out.println("---------------------------------------------------");
//        
//        System.out.println("data2:  "+data2);
//        System.out.println("---------------------------------------------------");
        
            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
          
                   
        try{
            List<CxpOtrasDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            CxpOtrasDTO.class));
            
            List<RelacionFactXOtrasDTO> lista2 = mapper.readValue(data2,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            RelacionFactXOtrasDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
            
            if (lista2.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }

  
           Iterator<CxpOtrasDTO> it = lista.iterator();
           Iterator<RelacionFactXOtrasDTO> it2 = lista2.iterator();
           
           ErpFeComprobantes comp = new ErpFeComprobantes();       
           ErpFeComprobantesId compId = new ErpFeComprobantesId();
           
           ErpCxpFacturasXOtras factxotras = new ErpCxpFacturasXOtras();
           ErpCxpFacturasXOtrasId factxotrasId = new ErpCxpFacturasXOtrasId();
//           
           boolean result = false;
           boolean result2 = false;
//           
//           
//         
//
            while (it.hasNext()) {
//                 System.out.println("-------------------------------------------------------------------");
                 CxpOtrasDTO ss = it.next();
                 
                 
                 
                  while (it2.hasNext()) {
                      
                      RelacionFactXOtrasDTO ss2 = it2.next();
                      
                        compId.setCompania(ss2.compania);
                        compId.setNumero(Integer.parseInt(ss2.numero));
                        comp.setId(compId);

                      if(ss.tipoGasto.equalsIgnoreCase("R")){
                          result = erpFeComprobantesDao.actualizaPago("", BigDecimal.ZERO, comp);
                      }
                      if(ss.tipoGasto.equalsIgnoreCase("A")){
                          
                          result = erpFeComprobantesDao.actualizaPago("", BigDecimal.ZERO, comp);
                      
                      }
                      
                      factxotrasId.setCompania(compania);
                     // int sec = erpCxpFacturasXOtrasDao.getMaxErpCpOtrasId(factxotrasId);
                     // factxotrasId.setSec(sec);
                      factxotras.setId(factxotrasId);
                      factxotras.setNumeroFe(Integer.parseInt(ss2.numero));
                      factxotras.setNumeroOtras(Integer.parseInt(ss.id));
                      
                      
                      result2 = erpCxpFacturasXOtrasDao.eliminaFactOtras(factxotras);
                      
                      
                      
                  }
                 
                 
                 
                 
                 
                 
               
            }
            
          
            
            if (result == true && result2 == true){
            
                
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("Se elimino la relacion correctamente");
              
                
            }else{
//                
                rq.setSuccess(true);
                rq.setData(null);
                rq.setMsg("Error al eliminar relacion");
                
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
    
     @RequestMapping(value = "/relacionaFacturasXOtras", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery relacionaFacturasXOtras( String data,String data2, WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
   //     System.out.println("data factura cancelacion:"+data);
        SimpleDateFormat formatFecha = new SimpleDateFormat("dd/MM/yyyy");
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }
        
          int index2 = data2.indexOf("[");
        if (index2 == -1) {
            data2 = "[" + data2 + "]";
        }
        
//        System.out.println("---------------------------------------------------");
//        
//        System.out.println("data:  "+data);
//        System.out.println("---------------------------------------------------");
//        
//        System.out.println("data2:  "+data2);
//        System.out.println("---------------------------------------------------");
        
            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
          
                   
        try{
            List<CxpDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            CxpDTO.class));
            
            List<RelacionFactXOtrasDTO> lista2 = mapper.readValue(data2,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            RelacionFactXOtrasDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
            
            if (lista2.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }

  
           Iterator<CxpDTO> it = lista.iterator();
           Iterator<RelacionFactXOtrasDTO> it2 = lista2.iterator();
           
           ErpFeComprobantes comp = new ErpFeComprobantes();       
           ErpFeComprobantesId compId = new ErpFeComprobantesId();
           
           ErpCxpFacturasXOtras factxotras = new ErpCxpFacturasXOtras();
           ErpCxpFacturasXOtrasId factxotrasId = new ErpCxpFacturasXOtrasId();
           
           boolean result = false;
           ErpCxpFacturasXOtrasId result2 = null;
           
           
         

            while (it.hasNext()) {
//                 System.out.println("-------------------------------------------------------------------");
                 CxpDTO ss = it.next();
                 
                 compId.setCompania(ss.compania);
                 compId.setNumero(Integer.parseInt(ss.numero));
                 comp.setId(compId);
                 
                  while (it2.hasNext()) {
                      
                      RelacionFactXOtrasDTO ss2 = it2.next();
                      
                      
                      if(ss2.tipoGasto.equalsIgnoreCase("R")){
                          result = erpFeComprobantesDao.actualizaPago("REMB", BigDecimal.ZERO, comp);
                      }
                      if(ss2.tipoGasto.equalsIgnoreCase("A")){
                          
                          result = erpFeComprobantesDao.actualizaPago("ANT", BigDecimal.ZERO, comp);
                      
                      }
                      
                      factxotrasId.setCompania(compania);
                      int sec = erpCxpFacturasXOtrasDao.getMaxErpCpOtrasId(factxotrasId);
                      factxotrasId.setSec(sec);
                      factxotras.setId(factxotrasId);
                      factxotras.setNumeroFe(Integer.parseInt(ss.numero));
                      factxotras.setNumeroOtras(Integer.parseInt(ss2.numero));
                      
                      
                      result2 = erpCxpFacturasXOtrasDao.save(factxotras);
                      
                      
                      
                  }
                 
                 
                 
                 
                 
                 
               
            }
            
          
            
            if (result == true && result2 != null){
            
                
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("Se guardo la relacion correctamente");
              
                
            }else{
                
                rq.setSuccess(true);
                rq.setData(null);
                rq.setMsg("Error al guardar relacion");
                
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
    
    
      @RequestMapping(value = "/quitarRelacionaFacturasXOtras", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery quitarRelacionaFacturasXOtras( String data,String data2, WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
   //     System.out.println("data factura cancelacion:"+data);
        SimpleDateFormat formatFecha = new SimpleDateFormat("dd/MM/yyyy");
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }
        
          int index2 = data2.indexOf("[");
        if (index2 == -1) {
            data2 = "[" + data2 + "]";
        }
        
//        System.out.println("---------------------------------------------------");
//        
//        System.out.println("data:  "+data);
//        System.out.println("---------------------------------------------------");
//        
//        System.out.println("data2:  "+data2);
//        System.out.println("---------------------------------------------------");
        
            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
          
                   
        try{
            List<CxpDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            CxpDTO.class));
            
            List<RelacionFactXOtrasDTO> lista2 = mapper.readValue(data2,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            RelacionFactXOtrasDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
            
            if (lista2.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }

  
           Iterator<CxpDTO> it = lista.iterator();
           Iterator<RelacionFactXOtrasDTO> it2 = lista2.iterator();
           
           ErpFeComprobantes comp = new ErpFeComprobantes();       
           ErpFeComprobantesId compId = new ErpFeComprobantesId();
           
           ErpCxpFacturasXOtras factxotras = new ErpCxpFacturasXOtras();
           ErpCxpFacturasXOtrasId factxotrasId = new ErpCxpFacturasXOtrasId();
           
           boolean result = false;
           boolean result2 = false;
           
           
         

            while (it.hasNext()) {
//                 System.out.println("-------------------------------------------------------------------");
                 CxpDTO ss = it.next();
                 
                 compId.setCompania(ss.compania);
                 compId.setNumero(Integer.parseInt(ss.numero));
                 comp.setId(compId);
                 
                  while (it2.hasNext()) {
                      
                      RelacionFactXOtrasDTO ss2 = it2.next();
                      
                      
                      if(ss2.tipoGasto.equalsIgnoreCase("R")){
                          result = erpFeComprobantesDao.actualizaPago("", BigDecimal.ZERO, comp);
                      }
                      if(ss2.tipoGasto.equalsIgnoreCase("A")){
                          
                          result = erpFeComprobantesDao.actualizaPago("", BigDecimal.ZERO, comp);
                      
                      }
                      
                      factxotrasId.setCompania(compania);
//                      int sec = erpCxpFacturasXOtrasDao.getMaxErpCpOtrasId(factxotrasId);
//                      factxotrasId.setSec(sec);
                      factxotras.setId(factxotrasId);
                      factxotras.setNumeroFe(Integer.parseInt(ss.numero));
                      factxotras.setNumeroOtras(Integer.parseInt(ss2.numero));
                      
                      
                      result2 = erpCxpFacturasXOtrasDao.eliminaFactOtras(factxotras);
                      
                      
                      
                  }
                 
                 
                 
                 
                 
                 
               
            }
            
          
            
            if (result == true && result2 == true){
            
                
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("Se elimino la relacion correctamente");
              
                
            }else{
                
                rq.setSuccess(true);
                rq.setData(null);
                rq.setMsg("Error al eliminar relacion");
                
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
    
       @RequestMapping(value = "/generaConceptosPagos", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery generaConceptosPagos( String data, WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
   //     System.out.println("data factura cancelacion:"+data);
        SimpleDateFormat formatFecha = new SimpleDateFormat("dd/MM/yyyy");
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }
  
        
            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
          
                   
        try{
            List<ErpConcGastoDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            ErpConcGastoDTO.class));
            
          
            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
          

  
           Iterator<ErpConcGastoDTO> it = lista.iterator();
          boolean result = false;
          
          ErpCpConcPago conc = new ErpCpConcPago();
          ErpCpConcPagoId concId = new ErpCpConcPagoId();
            
         

            while (it.hasNext()) {
//                 System.out.println("-------------------------------------------------------------------");
                 ErpConcGastoDTO ss = it.next();
                 
                 concId.setCompania(compania);
                 concId.setConcepto(ss.concepto);
                 conc.setId(concId);
                 conc.setNombre(ss.nombre);
                 
                 erpCpConcPagoDao.save(conc);

                 
               
            }
            
          
            
            if (result == true){
            
                
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("Se Guardo correctamente");
              
                
            }else{
                
                rq.setSuccess(true);
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
    
     @RequestMapping(value = "/quitarConceptosPagos", method = RequestMethod.POST)
    public @ResponseBody
    ResponseQuery quitarConceptosPagos( String data, WebRequest webRequest, Model model) throws IOException {

        ResponseQuery rq = new ResponseQuery();
   //     System.out.println("data factura cancelacion:"+data);
        SimpleDateFormat formatFecha = new SimpleDateFormat("dd/MM/yyyy");
         int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }
  
        
            String compania = model.asMap().get("compania").toString();
            String usuario = model.asMap().get("usuario").toString();
            ObjectMapper mapper = new ObjectMapper();
          
                   
        try{
            List<ErpConcGastoDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            ErpConcGastoDTO.class));
            
          
            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
          

  
           Iterator<ErpConcGastoDTO> it = lista.iterator();
          boolean result = false;
          
          ErpCpConcPago conc = new ErpCpConcPago();
          ErpCpConcPagoId concId = new ErpCpConcPagoId();
            
         

            while (it.hasNext()) {
//                 System.out.println("-------------------------------------------------------------------");
                 ErpConcGastoDTO ss = it.next();
                 
                 concId.setCompania(compania);
                 concId.setConcepto(ss.concepto);
                 conc.setId(concId);
                 conc.setNombre(ss.nombre);
                 
                 erpCpConcPagoDao.delete(conc);

                 
               
            }
            
          
            
            if (result == true){
            
                
                    rq.setSuccess(true);
                    rq.setData(null);
                    rq.setMsg("Se elimino correctamente");
              
                
            }else{
                
                rq.setSuccess(true);
                rq.setData(null);
                rq.setMsg("Error al eliminar");
                
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

    public void setErpCpConcPagoDao(ErpCpConcPagoDao erpCpConcPagoDao) {
        this.erpCpConcPagoDao = erpCpConcPagoDao;
    }
    
    
    
    
   
    public void setErpCxpFoliosDao(ErpCxpFoliosDao erpCxpFoliosDao) {
        this.erpCxpFoliosDao = erpCxpFoliosDao;
    }

    public void setErpFeComprobantesDao(ErpFeComprobantesDao erpFeComprobantesDao) {
        this.erpFeComprobantesDao = erpFeComprobantesDao;
    }

    public void setErpSeguiDocumentosDao(ErpSeguiDocumentosDao erpSeguiDocumentosDao) {
        this.erpSeguiDocumentosDao = erpSeguiDocumentosDao;
    }

    public void setProcessDao(ProcessDao processDao) {
        this.processDao = processDao;
    }

    public void setErpPolizasVSFacturasAutErrDao(ErpPolizasVSFacturasAutErrDao erpPolizasVSFacturasAutErrDao) {
        this.erpPolizasVSFacturasAutErrDao = erpPolizasVSFacturasAutErrDao;
    }

    public void setErpCpOtrasDao(ErpCpOtrasDao erpCpOtrasDao) {
        this.erpCpOtrasDao = erpCpOtrasDao;
    }

    public void setErpCxpFacturasXOtrasDao(ErpCxpFacturasXOtrasDao erpCxpFacturasXOtrasDao) {
        this.erpCxpFacturasXOtrasDao = erpCxpFacturasXOtrasDao;
    }

    public void setErpSatTransaccionDao(ErpSatTransaccionDao erpSatTransaccionDao) {
        this.erpSatTransaccionDao = erpSatTransaccionDao;
    }

   
    
    
}
