/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.feraz.ordencompra.controll;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.feraz.ordencompra.dao.ErpOrdenCompraDao;
import com.feraz.ordencompra.dao.ErpOrdenCompraDetDao;
import com.feraz.ordencompra.dao.ErpOrdenXPedidosDao;
import com.feraz.ordencompra.dto.OrdenDTO;
import com.feraz.ordencompra.model.ErpOrdenCompra;
import com.feraz.ordencompra.model.ErpOrdenCompraDet;
import com.feraz.ordencompra.model.ErpOrdenCompraDetId;
import com.feraz.ordencompra.model.ErpOrdenCompraId;
import com.feraz.ordencompra.model.ErpOrdenXPedidos;
import com.feraz.ordencompra.model.ErpOrdenXPedidosId;
import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import org.jamh.data.process.ProcessDao;
import org.jamh.wf.json.model.ResponseQuery;
import org.jamh.wf.json.model.ResponseQuery2;
import org.jamh.wf.process.Querys;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.context.request.WebRequest;

/**
 *
 * @author vavi
 */
@Controller
@RequestMapping("/orden")
@SessionAttributes({"compania", "usuario"})
public class ControlOrden {
    
    private ErpOrdenCompraDao erpOrdenCompraDao;
    private ErpOrdenCompraDetDao erpOrdenCompraDetDao;
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
            List<OrdenDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            OrdenDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
            
            ErpOrdenCompra orden = new ErpOrdenCompra();
            ErpOrdenCompraId ordenId = new ErpOrdenCompraId();
           
            ErpOrdenCompraId result = null;

            int val = 0;
            Iterator<OrdenDTO> it = lista.iterator();
           
            
            while (it.hasNext()) {
                 System.out.println("-------------------------------------------------------------------");
                OrdenDTO ss = it.next();
                
                ordenId.setCompania(compania);
                
                int id = erpOrdenCompraDao.getMaxIdOrden(ordenId);
                System.out.println(id);
                ordenId.setId(id);
                
                System.out.println(ss.calendario);
                
                orden.setId(ordenId);
              //  orden.setCalendario(Integer.parseInt(ss.calendario));
                orden.setClasificacion(ss.clasificacion);
                orden.setCondicionesPago(ss.condicionesPago);
                orden.setCtoCto(ss.ctoCto);
                orden.setEstatus("PE");
                orden.setFechaOrden(df.parse(ss.fechaOrden));
                orden.setFechaRequerida(df.parse(ss.fechaRequerida));
            //    orden.setFolio(Integer.parseInt(ss.folio));
                orden.setIdAlmacen(Integer.parseInt(ss.idAlmacen));
                orden.setIdProveedor(ss.idProveedor);
                //orden.setImporte(new BigDecimal(ss.importe));
                //orden.setPeriodo(Integer.parseInt(ss.periodo));
                orden.setRfc(ss.rfc);
                orden.setTotal(new BigDecimal(0));
                orden.setTotalPendiente(new BigDecimal(0));
                orden.setUsuario(usuario);
                orden.setUsuarioAutorizo(usuario);
                orden.setUsuarioComprador(ss.usuarioComprador);
                orden.setNombre(ss.nombre);
                orden.setDescripcion(ss.descripcion);
                
                
                result = erpOrdenCompraDao.save(orden);

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
            List<OrdenDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            OrdenDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
            
            ErpOrdenCompra orden = new ErpOrdenCompra();
            ErpOrdenCompraId ordenId = new ErpOrdenCompraId();
           
            boolean result = false;

            int val = 0;
            Iterator<OrdenDTO> it = lista.iterator();
           
            
            while (it.hasNext()) {
                 System.out.println("-------------------------------------------------------------------");
                OrdenDTO ss = it.next();
                
                ordenId.setCompania(compania);
               
                ordenId.setId(Integer.parseInt(ss.id));
                
                System.out.println(ss.calendario);
                
                orden.setId(ordenId);
              //  orden.setCalendario(Integer.parseInt(ss.calendario));
                orden.setClasificacion(ss.clasificacion);
                orden.setCondicionesPago(ss.condicionesPago);
                orden.setCtoCto(ss.ctoCto);
                orden.setEstatus(ss.estatus);
                orden.setFechaOrden(df.parse(ss.fechaOrden));
                orden.setFechaRequerida(df.parse(ss.fechaRequerida));
            //    orden.setFolio(Integer.parseInt(ss.folio));
                orden.setIdAlmacen(Integer.parseInt(ss.idAlmacen));
                orden.setIdProveedor(ss.idProveedor);
                //orden.setImporte(new BigDecimal(ss.importe));
                //orden.setPeriodo(Integer.parseInt(ss.periodo));
                orden.setRfc(ss.rfc);
                orden.setTotal(new BigDecimal(ss.total));
                orden.setTotalPendiente(new BigDecimal(ss.totalPendiente));
                orden.setUsuario(usuario);
                orden.setUsuarioAutorizo(usuario);
                orden.setUsuarioComprador(ss.usuarioComprador);
                orden.setNombre(ss.nombre);
                orden.setDescripcion(ss.descripcion);
                
                
                result = erpOrdenCompraDao.update(orden);

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
            List<OrdenDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            OrdenDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
            
            ErpOrdenCompra orden = new ErpOrdenCompra();
            ErpOrdenCompraId ordenId = new ErpOrdenCompraId();
            
            ErpOrdenCompraDet det  = new ErpOrdenCompraDet();
            ErpOrdenCompraDetId detId= new ErpOrdenCompraDetId();
           
            boolean result = false;

            int val = 0;
            Iterator<OrdenDTO> it = lista.iterator();
           
            
            while (it.hasNext()) {
                 System.out.println("-------------------------------------------------------------------");
                OrdenDTO ss = it.next();
                
                ordenId.setCompania(compania);
               
                ordenId.setId(Integer.parseInt(ss.id));
                
                System.out.println(ss.calendario);
                
                orden.setId(ordenId);
             
                System.out.println("Borrando orden");
                result = erpOrdenCompraDao.delete(orden);
                
                detId.setCompania(compania);
                detId.setIdOrdenCompra(Integer.parseInt(ss.id));
                det.setId(detId);
                System.out.println("Borrando detalle");
                erpOrdenCompraDetDao.borraDetalleOrden(det);

            }

          
            

            if (result == true) {
               
                 
                    rq.setSuccess(true);
                //    rq.setData(listaAciertos);
                //    rq.setDataErr(lisErr2);
                    rq.setMsg("Borrado Correctamente");
                 
            } else {
                rq.setSuccess(false);
                rq.setData(null);
             //   rq.setDataErr(lisErr2);
                rq.setMsg("Error al borra");
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return rq;

    }

    
        
            @RequestMapping(value = "/actualizaEstatus", method = RequestMethod.POST)
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
            List<OrdenDTO> lista = mapper.readValue(data,
                    mapper.getTypeFactory().constructCollectionType(List.class,
                            OrdenDTO.class));

            if (lista.isEmpty()) {
                rq.setSuccess(false);
                rq.setData(null);
                rq.setMsg("Error no existen datos que guardar");
                return rq;
            }
            
            ErpOrdenCompra orden = new ErpOrdenCompra();
            ErpOrdenCompraId ordenId = new ErpOrdenCompraId();
            
            ErpOrdenXPedidos ordenPedido = new ErpOrdenXPedidos();
            ErpOrdenXPedidosId ordePedidoId = new ErpOrdenXPedidosId();
           
            boolean result = false;

            int val = 0;
            Iterator<OrdenDTO> it = lista.iterator();
           
            
            while (it.hasNext()) {
                 System.out.println("-------------------------------------------------------------------");
                OrdenDTO ss = it.next();
                
                ordenId.setCompania(compania);
               
                ordenId.setId(Integer.parseInt(ss.id));
                
                
                orden.setId(ordenId);
              //  orden.setCalendario(Integer.parseInt(ss.calendario));
   
                orden.setEstatus(ss.estatus);
          
                
                result = erpOrdenCompraDao.actualizaEstatus(orden);
                
                if(ss.estatus.equalsIgnoreCase("CA")){
                
                        Querys que = new Querys();
                    String store = que.getSQL("ActualizaPedidosCan");

                    Map archivoPedidos = new HashMap();

                    archivoPedidos.put("compania", compania);
                    archivoPedidos.put("ordenCompra", ss.id);
                    archivoPedidos.put("estatus", "P");

                         processDao.execute(store, archivoPedidos); 
                         
                         
                     ordePedidoId.setCompania(compania);
                     ordePedidoId.setOrdenCompra(Integer.parseInt(ss.id));
                     ordenPedido.setId(ordePedidoId);
                     
                     erpOrdenXPedidosDao.borraPorOrden(ordenPedido);
                         
                         
                    
                
                }

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
    
    public void setErpOrdenCompraDao(ErpOrdenCompraDao erpOrdenCompraDao) {
        this.erpOrdenCompraDao = erpOrdenCompraDao;
    }

    public void setErpOrdenCompraDetDao(ErpOrdenCompraDetDao erpOrdenCompraDetDao) {
        this.erpOrdenCompraDetDao = erpOrdenCompraDetDao;
    }

    public void setProcessDao(ProcessDao processDao) {
        this.processDao = processDao;
    }

    public void setErpOrdenXPedidosDao(ErpOrdenXPedidosDao erpOrdenXPedidosDao) {
        this.erpOrdenXPedidosDao = erpOrdenXPedidosDao;
    }
    
    
}
