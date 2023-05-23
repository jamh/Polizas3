/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.feraz.ordencompra.controll;

/**
 *
 * @author vavi
 */
import com.fasterxml.jackson.databind.ObjectMapper;
import com.feraz.ordencompra.dao.ErpOrdenCompraDao;
import com.feraz.ordencompra.dao.ErpOrdenCompraDetDao;
import com.feraz.ordencompra.dao.ErpOrdenXFacturaDao;
import com.feraz.ordencompra.dao.ErpOrdenXPedidosDao;
import com.feraz.ordencompra.dto.OrdenDTO;
import com.feraz.ordencompra.dto.OrdenDetDTO;
import com.feraz.ordencompra.dto.PedidosDTO;
import com.feraz.ordencompra.dto.RelFactDTO;
import com.feraz.ordencompra.model.ErpOrdenCompra;
import com.feraz.ordencompra.model.ErpOrdenCompraDet;
import com.feraz.ordencompra.model.ErpOrdenCompraDetId;
import com.feraz.ordencompra.model.ErpOrdenCompraId;
import com.feraz.ordencompra.model.ErpOrdenXFactura;
import com.feraz.ordencompra.model.ErpOrdenXFacturaId;
import com.feraz.ordencompra.model.ErpOrdenXPedidos;
import com.feraz.ordencompra.model.ErpOrdenXPedidosId;
import java.math.BigDecimal;
import java.math.MathContext;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import javax.swing.JFormattedTextField;
import javax.swing.text.MaskFormatter;
import org.jamh.data.process.ProcessDao;
import org.jamh.wf.json.model.ResponseQuery;
import org.jamh.wf.json.model.ResponseQuery2;
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
 * @author vavi
 */
@Controller
@RequestMapping("/detOrden")
@SessionAttributes({"compania", "usuario"})
public class ControlDetOrden {
    
    private ErpOrdenCompraDao erpOrdenCompraDao;
    private ErpOrdenCompraDetDao erpOrdenCompraDetDao;
    private ErpOrdenXFacturaDao erpOrdenXFacturaDao;
    private ProcessDao processDao;
    private ErpOrdenXPedidosDao erpOrdenXPedidosDao;
    
    
      @RequestMapping(value = "/insert", method = RequestMethod.POST)
     public @ResponseBody
    ResponseQuery2 insertAction(String data, WebRequest webRequest, Model model) throws ParseException {

        ResponseQuery2 rq = new ResponseQuery2();
        SimpleDateFormat formatoDelTexto = new SimpleDateFormat("dd/MM/yyyy");
        int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }
           
        System.out.println("data:" + data);
//
        if (model.asMap().get("compania") == null) {
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("La sesion no es valida.");
            return rq;
        }
        String compania = model.asMap().get("compania").toString();
        String usuario = model.asMap().get("usuario").toString();
       
        try {
            int guardado = 0;
           
            ObjectMapper mapper = new ObjectMapper();
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

            mapper.setDateFormat(df);
            List<OrdenDetDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            OrdenDetDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
            
            ErpOrdenCompraDet ordenDet = new ErpOrdenCompraDet();
            ErpOrdenCompraDetId ordenDetId = new ErpOrdenCompraDetId();
           
           
            int val = 0;
            Iterator<OrdenDetDTO> it = lista.iterator();
           
            ErpOrdenCompraDetId result = null;
            while (it.hasNext()) {
                 System.out.println("-------------------------------------------------------------------");
                OrdenDetDTO ss = it.next();
                
                ordenDetId.setCompania(compania);
                ordenDetId.setIdOrdenCompra(Integer.parseInt(ss.idOrdenCompra));
                int id = erpOrdenCompraDetDao.getMaxIdDetOrden(ordenDetId);
                ordenDetId.setLinea(id);
                
                
                String idOr = agregarCeros(ss.idOrdenCompra,5);
                String idLi = agregarCeros(String.valueOf(id),5);
                
                ordenDet.setId(ordenDetId);
                ordenDet.setCantidadLlego(new BigDecimal(0));
                ordenDet.setCantidadPedida(new BigDecimal(ss.cantidadPedida));
                ordenDet.setDescripcion(ss.descripcion);
                ordenDet.setIdAlmacen(Integer.parseInt(ss.idAlmacen));
                ordenDet.setIdDet(idOr+idLi);
                ordenDet.setIdEstatus(1);
                if(!ss.idPrioridad.equalsIgnoreCase("")){
                ordenDet.setIdPrioridad(Integer.parseInt(ss.idPrioridad));
                }
                ordenDet.setIdProducto(ss.idProducto);
                ordenDet.setImporteCotizacion(new BigDecimal(ss.importeCotizacion));
                ordenDet.setIva(new BigDecimal(0));
                ordenDet.setPrecioUnitario(new BigDecimal(0));
                ordenDet.setTotal(new BigDecimal(0));
                ordenDet.setEstatusLinea("1");
                
               
                result = erpOrdenCompraDetDao.save(ordenDet);

            }

          
            

            if (result != null) {
               
                 
                    rq.setSuccess(true);
                //    rq.setData(listaAciertos);
                //    rq.setDataErr(lisErr2);
                    rq.setMsg("Guardados Correctamente");
                 
            } else {
                rq.setSuccess(false);
                rq.setData(null);
             //   rq.setDataErr(lisErr2);
                rq.setMsg("Error al guardar");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return rq;

    }
    
     
            @RequestMapping(value = "/update", method = RequestMethod.POST)
     public @ResponseBody
    ResponseQuery2 updateAction(String data, WebRequest webRequest, Model model) throws ParseException {

       ResponseQuery2 rq = new ResponseQuery2();
        SimpleDateFormat formatoDelTexto = new SimpleDateFormat("dd/MM/yyyy");
        int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }
           
        System.out.println("data:" + data);
//
        if (model.asMap().get("compania") == null) {
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("La sesion no es valida.");
            return rq;
        }
        String compania = model.asMap().get("compania").toString();
        String usuario = model.asMap().get("usuario").toString();
       
        try {
            int guardado = 0;
           
            ObjectMapper mapper = new ObjectMapper();
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

            mapper.setDateFormat(df);
            List<OrdenDetDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            OrdenDetDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
            
            ErpOrdenCompraDet ordenDet = new ErpOrdenCompraDet();
            ErpOrdenCompraDetId ordenDetId = new ErpOrdenCompraDetId();
           
           
            int val = 0;
            Iterator<OrdenDetDTO> it = lista.iterator();
           
            boolean result = false;
            while (it.hasNext()) {
                 System.out.println("-------------------------------------------------------------------");
                OrdenDetDTO ss = it.next();
                
                ordenDetId.setCompania(compania);
                ordenDetId.setIdOrdenCompra(Integer.parseInt(ss.idOrdenCompra));
               
                ordenDetId.setLinea(Integer.parseInt(ss.linea));
                
                ordenDet.setId(ordenDetId);
                
                 ordenDet.setCantidadLlego(new BigDecimal(ss.cantidadLlego));
                ordenDet.setCantidadPedida(new BigDecimal(ss.cantidadPedida));
                ordenDet.setDescripcion(ss.descripcion);
                ordenDet.setIdAlmacen(Integer.parseInt(ss.idAlmacen));
                ordenDet.setIdDet(ss.id);
                ordenDet.setIdEstatus(Integer.parseInt(ss.idEstatus));
                if(ss.idPrioridad != null){
                    if(!ss.idPrioridad.equalsIgnoreCase("")){
                    ordenDet.setIdPrioridad(Integer.parseInt(ss.idPrioridad));
                    }
                }
                ordenDet.setIdProducto(ss.idProducto);
                ordenDet.setImporteCotizacion(new BigDecimal(ss.importeCotizacion));
                ordenDet.setIva(new BigDecimal(ss.iva));
                ordenDet.setPrecioUnitario(new BigDecimal(ss.precioUnitario));
                ordenDet.setTotal(new BigDecimal(ss.total));
                ordenDet.setEstatusLinea(ss.estatusLinea);
                
               
                result = erpOrdenCompraDetDao.update(ordenDet);

            }

          
            

            if (result == true) {
               
                 
                    rq.setSuccess(true);
                //    rq.setData(listaAciertos);
                //    rq.setDataErr(lisErr2);
                    rq.setMsg("Guardados Correctamente");
                 
            } else {
                rq.setSuccess(false);
                rq.setData(null);
             //   rq.setDataErr(lisErr2);
                rq.setMsg("Error al guardar");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return rq;

    }
    
                @RequestMapping(value = "/updateEstatus", method = RequestMethod.POST)
     public @ResponseBody
    ResponseQuery2 updateActionEstatus(String data, WebRequest webRequest, Model model) throws ParseException {

       ResponseQuery2 rq = new ResponseQuery2();
        SimpleDateFormat formatoDelTexto = new SimpleDateFormat("dd/MM/yyyy");
        int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }
           
        System.out.println("data:" + data);
//
        if (model.asMap().get("compania") == null) {
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("La sesion no es valida.");
            return rq;
        }
        String compania = model.asMap().get("compania").toString();
        String usuario = model.asMap().get("usuario").toString();
       
        try {
            int guardado = 0;
           
            ObjectMapper mapper = new ObjectMapper();
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

            mapper.setDateFormat(df);
            List<OrdenDetDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            OrdenDetDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
            
            ErpOrdenCompraDet ordenDet = new ErpOrdenCompraDet();
            ErpOrdenCompraDetId ordenDetId = new ErpOrdenCompraDetId();
           
           
            int val = 0;
            Iterator<OrdenDetDTO> it = lista.iterator();
           
            boolean result = false;
            while (it.hasNext()) {
                 System.out.println("-------------------------------------------------------------------");
                OrdenDetDTO ss = it.next();
                
                ordenDetId.setCompania(compania);
                ordenDetId.setIdOrdenCompra(Integer.parseInt(ss.idOrdenCompra));
               
                ordenDetId.setLinea(Integer.parseInt(ss.linea));
                
                ordenDet.setId(ordenDetId);
                
     
                ordenDet.setEstatusLinea(ss.estatusLinea);
                              
                
               
                result = erpOrdenCompraDetDao.actualizaEstatus(ordenDet);

            }

          
            

            if (result == true) {
               
                 
                    rq.setSuccess(true);
                //    rq.setData(listaAciertos);
                //    rq.setDataErr(lisErr2);
                    rq.setMsg("Guardados Correctamente");
                 
            } else {
                rq.setSuccess(false);
                rq.setData(null);
             //   rq.setDataErr(lisErr2);
                rq.setMsg("Error al guardar");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return rq;

    }
    
                @RequestMapping(value = "/delete", method = RequestMethod.POST)
     public @ResponseBody
    ResponseQuery2 deleteAction(String data, WebRequest webRequest, Model model) throws ParseException {

  
       ResponseQuery2 rq = new ResponseQuery2();
        SimpleDateFormat formatoDelTexto = new SimpleDateFormat("dd/MM/yyyy");
        int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }
           
        System.out.println("data:" + data);
//
        if (model.asMap().get("compania") == null) {
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("La sesion no es valida.");
            return rq;
        }
        String compania = model.asMap().get("compania").toString();
        String usuario = model.asMap().get("usuario").toString();
       
        try {
            int guardado = 0;
           
            ObjectMapper mapper = new ObjectMapper();
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

            mapper.setDateFormat(df);
            List<OrdenDetDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            OrdenDetDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
            
            ErpOrdenCompraDet ordenDet = new ErpOrdenCompraDet();
            ErpOrdenCompraDetId ordenDetId = new ErpOrdenCompraDetId();
            
            ErpOrdenXPedidos erpOrdenXPedidos = new ErpOrdenXPedidos();
            ErpOrdenXPedidosId erpOrdenXPedidosId = new ErpOrdenXPedidosId();
           
           
            int val = 0;
            Iterator<OrdenDetDTO> it = lista.iterator();
           
            boolean result = false;
            while (it.hasNext()) {
                 System.out.println("-------------------------------------------------------------------");
                OrdenDetDTO ss = it.next();
                
                ordenDetId.setCompania(compania);
                ordenDetId.setIdOrdenCompra(Integer.parseInt(ss.idOrdenCompra));
               
                ordenDetId.setLinea(Integer.parseInt(ss.linea));
                
                ordenDet.setId(ordenDetId);
             
                
               
                result = erpOrdenCompraDetDao.delete(ordenDet);
                
                erpOrdenXPedidosId.setCompania(compania);
                erpOrdenXPedidosId.setLinea(Integer.parseInt(ss.linea));
                erpOrdenXPedidosId.setOrdenCompra(Integer.parseInt(ss.idOrdenCompra));
                erpOrdenXPedidos.setId(erpOrdenXPedidosId);
                erpOrdenXPedidos.setUsuario(usuario);
                erpOrdenXPedidosDao.borraPorLinea(erpOrdenXPedidos);

                
                  Querys que = new Querys();
            String store = que.getSQL("ActualizaPedidos");
            
            Map archivoPedidos = new HashMap();
            
            archivoPedidos.put("compania", compania);
            archivoPedidos.put("id", ss.idPedido);
            archivoPedidos.put("estatus", "A");
        
                 processDao.execute(store, archivoPedidos); 
                
                  
                

            }

          
            

            if (result == true) {
               
                 
                    rq.setSuccess(true);
                //    rq.setData(listaAciertos);
                //    rq.setDataErr(lisErr2);
                    rq.setMsg("Guardados Correctamente");
                 
            } else {
                rq.setSuccess(false);
                rq.setData(null);
             //   rq.setDataErr(lisErr2);
                rq.setMsg("Error al guardar");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return rq;

    }
    
                    @RequestMapping(value = "/saveRel", method = RequestMethod.POST)
     public @ResponseBody
    ResponseQuery2 relacionAction(String data, WebRequest webRequest, Model model) throws ParseException {

  
       ResponseQuery2 rq = new ResponseQuery2();
        SimpleDateFormat formatoDelTexto = new SimpleDateFormat("dd/MM/yyyy");
        int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }
           
        System.out.println("data:" + data);
//
        if (model.asMap().get("compania") == null) {
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("La sesion no es valida.");
            return rq;
        }
        String compania = model.asMap().get("compania").toString();
        String usuario = model.asMap().get("usuario").toString();
        
        System.out.println("-------------------------------------------------------------------");
       
        try {
            int guardado = 0;
           
            ObjectMapper mapper = new ObjectMapper();
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

            mapper.setDateFormat(df);
            List<RelFactDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            RelFactDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
            
            ErpOrdenXFactura ordeFact = new ErpOrdenXFactura();
            ErpOrdenXFacturaId ordenFactId = new ErpOrdenXFacturaId();
           
           System.out.println("-------------------------------------------------------------------");
            int val = 0;
            Iterator<RelFactDTO> it = lista.iterator();
           
            ErpOrdenXFacturaId result = null;
            while (it.hasNext()) {
                 System.out.println("-------------------------------------------------------------------");
                RelFactDTO ss = it.next();
                
                  ordenFactId.setCompania(compania);
                  ordenFactId.setIdOrden(Integer.parseInt(ss.idOrden));
                  ordenFactId.setIdOrdenDet(Integer.parseInt(ss.idOrdenDet));
                  ordenFactId.setNumeroFe(Integer.parseInt(ss.numeroFe));
                  ordeFact.setId(ordenFactId);
                  ordeFact.setOrigen(ss.origen);
                  ordeFact.setSubtotal(new BigDecimal(ss.subtotal));
                  ordeFact.setIva(new BigDecimal(ss.iva));
                  ordeFact.setTotal(new BigDecimal(ss.total));
                 
                  result = erpOrdenXFacturaDao.save(ordeFact);
                  
                      Map ordenFact = new HashMap();
                   ordenFact.put("compania", compania);
                   ordenFact.put("idOrden", ss.idOrden);
                   ordenFact.put("idOrdenDet", ss.idOrdenDet);
                   ordenFact.put("origen", ss.origen);
                   
               
                  List listOrdenFact = processDao.getMapResult("BuscaImportesOrdenDet", ordenFact);
                  
                  List listOrdenFactM = processDao.getMapResult("BuscaImportesOrden", ordenFact);
//                   
                  Map ordenTotal = (HashMap) listOrdenFact.get(0);
                  Map ordenMTotal = (HashMap) listOrdenFactM.get(0);
                  
                   System.out.println("Obteniendo mapa");
                  
                  ErpOrdenCompraDet ordenDet = new ErpOrdenCompraDet();
                  ErpOrdenCompraDetId ordenDetId = new ErpOrdenCompraDetId();
                  
                  ErpOrdenCompra orden = new ErpOrdenCompra();
                  ErpOrdenCompraId ordenId = new ErpOrdenCompraId();
                  
                  
                  ordenDetId.setCompania(compania);
                  ordenDetId.setIdOrdenCompra(Integer.parseInt(ss.idOrden));
                  ordenDetId.setLinea(Integer.parseInt(ss.idOrdenDet));
                  
                  ordenDet.setId(ordenDetId);
                  ordenDet.setTotal(new BigDecimal(ordenTotal.get("TOTAL").toString()));
                  ordenDet.setPrecioUnitario(new BigDecimal(ordenTotal.get("SUBTOTAL").toString()));
                  ordenDet.setIva(new BigDecimal(ordenTotal.get("IVA").toString()));
                  System.out.println("actualizando importes");
                  erpOrdenCompraDetDao.actualizaImportes(ordenDet);
                  
                  ordenId.setCompania(compania);
                  ordenId.setId(Integer.parseInt(ss.idOrden));
                  orden.setId(ordenId);
                  orden.setTotalPendiente(new BigDecimal(ordenMTotal.get("TOTAL").toString()));
                  
                  erpOrdenCompraDao.actualizaImportes(orden);
                  

            }

          
            

            if (result != null) {
               
                 
                    rq.setSuccess(true);
                //    rq.setData(listaAciertos);
                //    rq.setDataErr(lisErr2);
                    rq.setMsg("Guardados Correctamente");
                 
            } else {
                rq.setSuccess(false);
                rq.setData(null);
             //   rq.setDataErr(lisErr2);
                rq.setMsg("Error al guardar");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return rq;

    }
    
                        @RequestMapping(value = "/delRel", method = RequestMethod.POST)
     public @ResponseBody
    ResponseQuery2 relacionDelAction(String data, WebRequest webRequest, Model model) throws ParseException {

  
       ResponseQuery2 rq = new ResponseQuery2();
        SimpleDateFormat formatoDelTexto = new SimpleDateFormat("dd/MM/yyyy");
        int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }
           
        System.out.println("data:" + data);
//
        if (model.asMap().get("compania") == null) {
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("La sesion no es valida.");
            return rq;
        }
        String compania = model.asMap().get("compania").toString();
        String usuario = model.asMap().get("usuario").toString();
        
        System.out.println("-------------------------------------------------------------------");
       
        try {
            int guardado = 0;
           
            ObjectMapper mapper = new ObjectMapper();
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

            mapper.setDateFormat(df);
            List<RelFactDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            RelFactDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
            
            ErpOrdenXFactura ordeFact = new ErpOrdenXFactura();
            ErpOrdenXFacturaId ordenFactId = new ErpOrdenXFacturaId();
           
           System.out.println("-------------------------------------------------------------------");
            int val = 0;
            Iterator<RelFactDTO> it = lista.iterator();
           
            boolean result = false;
            while (it.hasNext()) {
                 System.out.println("-------------------------------------------------------------------");
                RelFactDTO ss = it.next();
                
                  ordenFactId.setCompania(compania);
                  ordenFactId.setIdOrden(Integer.parseInt(ss.idOrden));
                  ordenFactId.setIdOrdenDet(Integer.parseInt(ss.idOrdenDet));
                  ordenFactId.setNumeroFe(Integer.parseInt(ss.numeroFe));
                  ordeFact.setId(ordenFactId);
                  ordeFact.setOrigen(ss.origen);
                  
                  result = erpOrdenXFacturaDao.delete(ordeFact);
                  
                  
                     Map ordenFact = new HashMap();
                   ordenFact.put("compania", compania);
                   ordenFact.put("idOrden", ss.idOrden);
                   ordenFact.put("idOrdenDet", ss.idOrdenDet);
                   ordenFact.put("origen", ss.origen);
                   
               
                  List listOrdenFact = processDao.getMapResult("BuscaImportesOrdenDet", ordenFact);
                  
                  List listOrdenFactM = processDao.getMapResult("BuscaImportesOrden", ordenFact);
//                   
                  Map ordenTotal = (HashMap) listOrdenFact.get(0);
                  Map ordenMTotal = (HashMap) listOrdenFactM.get(0);
                  
                   System.out.println("Obteniendo mapa");
                  
                  ErpOrdenCompraDet ordenDet = new ErpOrdenCompraDet();
                  ErpOrdenCompraDetId ordenDetId = new ErpOrdenCompraDetId();
                  
                  ErpOrdenCompra orden = new ErpOrdenCompra();
                  ErpOrdenCompraId ordenId = new ErpOrdenCompraId();
                  
                  
                  ordenDetId.setCompania(compania);
                  ordenDetId.setIdOrdenCompra(Integer.parseInt(ss.idOrden));
                  ordenDetId.setLinea(Integer.parseInt(ss.idOrdenDet));
                  
                  ordenDet.setId(ordenDetId);
                  ordenDet.setTotal(new BigDecimal(ordenTotal.get("TOTAL").toString()));
                  ordenDet.setPrecioUnitario(new BigDecimal(ordenTotal.get("SUBTOTAL").toString()));
                  ordenDet.setIva(new BigDecimal(ordenTotal.get("IVA").toString()));
                  System.out.println("actualizando importes");
                  erpOrdenCompraDetDao.actualizaImportes(ordenDet);
                  
                  ordenId.setCompania(compania);
                  ordenId.setId(Integer.parseInt(ss.idOrden));
                  orden.setId(ordenId);
                  orden.setTotalPendiente(new BigDecimal(ordenMTotal.get("TOTAL").toString()));
                  
                  erpOrdenCompraDao.actualizaImportes(orden);
                  
                  

            }

          
            

            if (result == true) {
               
                 
                    rq.setSuccess(true);
                //    rq.setData(listaAciertos);
                //    rq.setDataErr(lisErr2);
                    rq.setMsg("Guardados Correctamente");
                 
            } else {
                rq.setSuccess(false);
                rq.setData(null);
             //   rq.setDataErr(lisErr2);
                rq.setMsg("Error al guardar");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return rq;

    }
    
                        @RequestMapping(value = "/enviaCXP", method = RequestMethod.POST)
     public @ResponseBody
    ResponseQuery2 enviaCXP(String data, WebRequest webRequest, Model model) throws ParseException {

  
       ResponseQuery2 rq = new ResponseQuery2();
        SimpleDateFormat formatoDelTexto = new SimpleDateFormat("dd/MM/yyyy");
        int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }
           
        System.out.println("data:" + data);
//
        if (model.asMap().get("compania") == null) {
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("La sesion no es valida.");
            return rq;
        }
        String compania = model.asMap().get("compania").toString();
        String usuario = model.asMap().get("usuario").toString();
        
        System.out.println("-------------------------------------------------------------------");
       
        try {
            int guardado = 0;
           
            ObjectMapper mapper = new ObjectMapper();
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

            mapper.setDateFormat(df);
            List<RelFactDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            RelFactDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
            
            ErpOrdenXFactura ordeFact = new ErpOrdenXFactura();
            ErpOrdenXFacturaId ordenFactId = new ErpOrdenXFacturaId();
           
           System.out.println("-------------------------------------------------------------------");
            int val = 0;
            Iterator<RelFactDTO> it = lista.iterator();
           
            boolean result = false;
            while (it.hasNext()) {
                 System.out.println("-------------------------------------------------------------------");
                RelFactDTO ss = it.next();
                
                  ordenFactId.setCompania(compania);
                  ordenFactId.setIdOrden(Integer.parseInt(ss.idOrden));
                  ordenFactId.setIdOrdenDet(Integer.parseInt(ss.idOrdenDet));
                  ordenFactId.setNumeroFe(Integer.parseInt(ss.numeroFe));
                  ordeFact.setId(ordenFactId);
                  if(ss.estatusCXP.equalsIgnoreCase("true")){
                  ordeFact.setEstatusCXP("1");
                  }
                  
                  result = erpOrdenXFacturaDao.actualizaEstatus(ordeFact);
                  
                    
                  

            }

          
            

            if (result == true) {
               
                 
                    rq.setSuccess(true);
                //    rq.setData(listaAciertos);
                //    rq.setDataErr(lisErr2);
                    rq.setMsg("Guardados Correctamente");
                 
            } else {
                rq.setSuccess(false);
                rq.setData(null);
             //   rq.setDataErr(lisErr2);
                rq.setMsg("Error al guardar");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return rq;

    }
    
    
                  @RequestMapping(value = "/generaOrdenPedido", method = RequestMethod.POST)
     public @ResponseBody
    ResponseQuery2 generaOrdenPedido(String data,@RequestParam("prov") String prov,
            @RequestParam("idProv") String idProv,
            @RequestParam("idAlmacen") String idAlmacen,
            @RequestParam("fechaR") String fechaR,
            
            WebRequest webRequest, Model model) throws ParseException {

  
       ResponseQuery2 rq = new ResponseQuery2();
        SimpleDateFormat formatoDelTexto = new SimpleDateFormat("dd/MM/yyyy");
        int index = data.indexOf("[");
        if (index == -1) {
            data = "[" + data + "]";
        }
           
        System.out.println("data:" + data);
        System.out.println("prov:" + prov);
        System.out.println("idProv:" + idProv);
        System.out.println("idAlmacen:" + idAlmacen);
        System.out.println("fechaR:" + fechaR);
//
        if (model.asMap().get("compania") == null) {
            rq.setSuccess(false);
            rq.setData(null);
            rq.setMsg("La sesion no es valida.");
            return rq;
        }
        String compania = model.asMap().get("compania").toString();
        String usuario = model.asMap().get("usuario").toString();
        
         ErpOrdenCompra orden = new ErpOrdenCompra();
            ErpOrdenCompraId ordenId = new ErpOrdenCompraId();
           
            ErpOrdenCompraId result2 = null;
            
            Date fechaOrden = new Date();
        
        
        System.out.println("-------------------------------------------------------------------");
       
        try {
            int guardado = 0;
           
            ObjectMapper mapper = new ObjectMapper();
            DateFormat df = new SimpleDateFormat("dd/MM/yyyy");

            mapper.setDateFormat(df);
            List<PedidosDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            PedidosDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
            
              ordenId.setCompania(compania);
                
                int id = erpOrdenCompraDao.getMaxIdOrden(ordenId);
                System.out.println(id);
                ordenId.setId(id);
                
                orden.setId(ordenId);
              //  orden.setCalendario(Integer.parseInt(ss.calendario));
                orden.setClasificacion("");
                orden.setCondicionesPago("Fecha Venc. "+fechaR);
                orden.setCtoCto("");
                orden.setEstatus("PE");
                orden.setFechaOrden(fechaOrden);
                orden.setFechaRequerida(df.parse(fechaR));
            //    orden.setFolio(Integer.parseInt(ss.folio));
                orden.setIdAlmacen(Integer.parseInt(idAlmacen));
                orden.setIdProveedor(idProv);
                //orden.setImporte(new BigDecimal(ss.importe));
                //orden.setPeriodo(Integer.parseInt(ss.periodo));
                orden.setRfc(prov);
                orden.setTotal(new BigDecimal(0));
                orden.setTotalPendiente(new BigDecimal(0));
                orden.setUsuario(usuario);
                orden.setUsuarioAutorizo(usuario);
                orden.setUsuarioComprador("");
                orden.setNombre("Orden "+id);
                orden.setDescripcion("Pedido a proveedor "+prov);
                
                
                result2 = erpOrdenCompraDao.save(orden);

            
            ErpOrdenXFactura ordeFact = new ErpOrdenXFactura();
            ErpOrdenXFacturaId ordenFactId = new ErpOrdenXFacturaId();
           
           System.out.println("-------------------------------------------------------------------");
            int val = 0;
            Iterator<PedidosDTO> it = lista.iterator();
            
            ErpOrdenCompraDet ordenDet = new ErpOrdenCompraDet();
            ErpOrdenCompraDetId ordenDetId = new ErpOrdenCompraDetId();
            
            ErpOrdenXPedidos erpOrdenXPedidos = new ErpOrdenXPedidos();
            ErpOrdenXPedidosId erpOrdenXPedidosId = new ErpOrdenXPedidosId();
           
            boolean result = false;
            while (it.hasNext()) {
                 System.out.println("-------------------------------------------------------------------");
                PedidosDTO ss = it.next();
                
                   ordenDetId.setCompania(compania);
                ordenDetId.setIdOrdenCompra(id);
                int id2 = erpOrdenCompraDetDao.getMaxIdDetOrden(ordenDetId);
                ordenDetId.setLinea(id2);
                
                
                String idOr = agregarCeros(String.valueOf(id),5);
                String idLi = agregarCeros(String.valueOf(id2),5);
                
                ordenDet.setId(ordenDetId);
                ordenDet.setCantidadLlego(new BigDecimal(0));
                ordenDet.setCantidadPedida(new BigDecimal(ss.cantidad));
                if(ss.descripcion == null || ss.descripcion == ""){
                    
                    ordenDet.setDescripcion(ss.nombreProduct);
                
                }else{
                    
                    ordenDet.setDescripcion(ss.nombreProduct+" ("+ss.descripcion+")");
                
                }
                
                ordenDet.setIdAlmacen(Integer.parseInt(idAlmacen));
                ordenDet.setIdDet(idOr+idLi);
                ordenDet.setIdEstatus(1);
              
                ordenDet.setIdProducto(ss.idProducto);
                ordenDet.setImporteCotizacion(new BigDecimal(0));
                ordenDet.setIva(new BigDecimal(0));
                
                      Map ordenProdu = new HashMap();
                   ordenProdu.put("compania", compania);
                   ordenProdu.put("idProducto", ss.idProducto);
               
                  List listCotProdc = processDao.getMapResult("BuscaCotizacionProducto", ordenProdu);
                  
//                
                 if(listCotProdc !=null){
                  Map producTotal = (HashMap) listCotProdc.get(0);
                  
                   System.out.println("Obteniendo mapa");
                   MathContext mc = new MathContext(4);
                
                  ordenDet.setImporteCotizacion(new BigDecimal(producTotal.get("IMPORTE_COTIZACION").toString()).multiply(new BigDecimal(ss.cantidad), mc));
                 }else{
                 
                    ordenDet.setImporteCotizacion(new BigDecimal(0));
                 }
                 
                
                ordenDet.setPrecioUnitario(new BigDecimal(0));
                ordenDet.setTotal(new BigDecimal(0));
                ordenDet.setEstatusLinea("1");
                
                
               
                erpOrdenCompraDetDao.save(ordenDet);
                
                
                erpOrdenXPedidosId.setCompania(compania);
                erpOrdenXPedidosId.setIdPedido(Integer.parseInt(ss.id));
                erpOrdenXPedidosId.setLinea(id2);
                erpOrdenXPedidosId.setOrdenCompra(id);
                erpOrdenXPedidos.setId(erpOrdenXPedidosId);
                erpOrdenXPedidos.setUsuario(usuario);
                erpOrdenXPedidosDao.save(erpOrdenXPedidos);

                
                  Querys que = new Querys();
            String store = que.getSQL("ActualizaPedidos");
            
            Map archivoPedidos = new HashMap();
            
            archivoPedidos.put("compania", compania);
            archivoPedidos.put("id", ss.id);
            archivoPedidos.put("estatus", "O");
        
                 processDao.execute(store, archivoPedidos); 
                
                  
                  

            }

          
            

            if (result2 != null) {
               
                 
                    rq.setSuccess(true);
                //    rq.setData(listaAciertos);
                //    rq.setDataErr(lisErr2);
                    rq.setMsg("Orden Generada con Folio: "+String.valueOf(id));
                 
            } else {
                rq.setSuccess(false);
                rq.setData(null);
             //   rq.setDataErr(lisErr2);
                rq.setMsg("Error al guardar");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return rq;

    }
            
            
            
            
        private static String agregarCeros(String string, int largo){
    			String ceros = "";
 
    			int cantidad = largo - string.length();
 
    			if (cantidad >= 1)
    			{
    				for(int i=0;i<cantidad;i++)
    				{
    					ceros += "0";
    				}
 
    				return (ceros + string);
    			}
    			else
    				return string;
    		}
     

    public void setErpOrdenCompraDao(ErpOrdenCompraDao erpOrdenCompraDao) {
        this.erpOrdenCompraDao = erpOrdenCompraDao;
    }

    public void setErpOrdenCompraDetDao(ErpOrdenCompraDetDao erpOrdenCompraDetDao) {
        this.erpOrdenCompraDetDao = erpOrdenCompraDetDao;
    }

    public void setErpOrdenXFacturaDao(ErpOrdenXFacturaDao erpOrdenXFacturaDao) {
        this.erpOrdenXFacturaDao = erpOrdenXFacturaDao;
    }

    public void setProcessDao(ProcessDao processDao) {
        this.processDao = processDao;
    }

    public void setErpOrdenXPedidosDao(ErpOrdenXPedidosDao erpOrdenXPedidosDao) {
        this.erpOrdenXPedidosDao = erpOrdenXPedidosDao;
    }
    
    
    
}
