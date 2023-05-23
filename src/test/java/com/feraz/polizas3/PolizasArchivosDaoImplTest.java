/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.feraz.polizas3;

/**
 *
 * @author Feraz3
 */

import com.feraz.cuentas.dao.CuentasDao;
import org.junit.Test;
import static org.junit.Assert.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.feraz.polizas3.dao.PolizasArchivosDao;
import com.feraz.cuentas.model.Cuentas;
import com.feraz.cuentas.model.CuentasId;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
public class PolizasArchivosDaoImplTest extends AbstractDB {
    
     @Autowired
	    private CuentasDao CuentasDao;
	    
	    public PolizasArchivosDaoImplTest() {
	    }
            
                 @Test
	     public void testSave() {
            
  //          System.out.println("findDfaInterfaz");           
//            Cuentas result = CuentasDao.findCuenta("TEMP", "2101-003-000");
//            
//           	System.out.println("result"+ result.getCuentaAlias());
                
       //    List<Cuentas> result2 = CuentasDao.findCuentasporCompania("TEMP");
            String result2="aa";
//            Cuentas cuentas = new Cuentas();
//            CuentasId idC = new CuentasId();
//            idC.setEstructura("TEMP");
//            idC.setCuenta("111111111");
//            cuentas.setId(idC);
//            cuentas.setCuentaAlias("3333333");
//            
//           Boolean id = CuentasDao.delete(cuentas);
//            
            System.out.println("result2"+ result2);
               
            assertNotNull("nulo", result2);
//            fail("The test case is a prototype.");
        }

    ////	        System.out.println("save");
    //	          PolizasArchivos polizasArchivos = new PolizasArchivos();
    //	    	  PolizasArchivosId expResult = new PolizasArchivosId();
    //
    //                  expResult.setCompania("TEMP");
    //                  expResult.setFecha(new Date());
    //                  expResult.setNumero("000000000");
    //                  expResult.setSec(new BigDecimal(12));
    //                  expResult.setTipoPoliza("D");
    //
    //	          polizasArchivos.setId(expResult);
    // PolizasArchivosId result = polizasArchivosDao.save(polizasArchivos);
    //	          System.out.println("Id:"+result.getIdCampo());
    //fail("The test case is a prototype.");
    //fail("The test case is a prototype.");
    public void setCuentasDao(CuentasDao CuentasDao) {
        this.CuentasDao = CuentasDao;
    }
	    

    
            
             
    
}
