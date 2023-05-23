/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.feraz.polizas3;

/**
 *
 * @author Feraz3
 */
import com.feraz.polizas3.model.DetPolizas;
import com.feraz.polizas3.model.DetPolizasId;
import com.feraz.cxp.model.ErpCClientes;
import com.feraz.cxp.model.ErpCClientesId;
import java.util.List;
import org.junit.Test;
import static org.junit.Assert.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.feraz.contabilidad.nomina.model.ErpNomCancela;
import com.feraz.contabilidad.nomina.model.ErpNomCancelaId;
import com.feraz.contabilidad.nomina.model.ErpNomPoliza;
import com.feraz.contabilidad.nomina.model.ErpNomPolizaId;
import com.feraz.contabilidad.nomina.dao.ErpNomPolizaDao;
import com.feraz.contabilidad.nomina.dao.ErpNomCancelaDao;
import com.feraz.cuentas.dao.CuentasDao;
import com.feraz.cxp.dao.ErpCClientesDao;
import com.feraz.cuentas.model.Cuentas;
import com.feraz.cuentas.model.CuentasId;

import com.feraz.polizas3.validation.DetalleValidation;
import java.util.Date;
public class ValidationTest extends AbstractDB{
    
    @Autowired
   // private MaestroValidation maestroValidation;
        //private ErpNomPolizaDao erpNomPolizaDao;
    
    private CuentasDao cuentasDao;

//    
//     @Test
//	    public void validarMaestro() {
//		 System.out.println("validar Maestro");
//		 Polizas polizas= new Polizas();
//                 PolizasId polizasId= new PolizasId();
//		 boolean expResult = false;
//		 polizasId.setCompania("DIG");
//                 polizasId.setFecha(new Date());
//                 
//                 polizas.setId(polizasId);
//                 
//		 boolean result = maestroValidation.validaPeriodo(polizas);
//                 
//          
//		 assertEquals(expResult, result);
//	 }
     
         @Test
	    public void validarDetalle() {
             
//            ErpSeguiDocumentos documentos = new ErpSeguiDocumentos();
//            ErpSeguiDocumentosId documentosId = new ErpSeguiDocumentosId();
             
             Cuentas cuentas = new Cuentas();
             CuentasId cuentasId = new CuentasId();
            
             cuentasId.setCuenta("12345678");
             cuentasId.setEstructura("TEMP");
             cuentas.setId(cuentasId);
             cuentas.setCuentaAlias("12345678");
             
            // CuentasId result = cuentasDao.save(cuentas);
            
             
            // ErpCClientesId result = erpCClientesDao.save(clientes);
             
   
         //   System.out.println("result"+result);
//        
  
                 
		 assertEquals(true, true);
	 }

    //
    //    public void setMaestroValidation(MaestroValidation maestroValidation) {
    //    }
    //    }
    public void setCuentasDao(CuentasDao cuentasDao) {
        this.cuentasDao = cuentasDao;
    }
  
  
   
   
    
    
    
}
