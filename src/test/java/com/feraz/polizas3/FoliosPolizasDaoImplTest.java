/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.feraz.polizas3;

/**
 *
 * @author Feraz3
 */

import java.util.List;
import org.junit.Test;
import static org.junit.Assert.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.feraz.polizas3.dao.FoliosPolizasDao;
import com.feraz.polizas3.model.FoliosPolizas;
import com.feraz.polizas3.model.FoliosPolizasId;
public class FoliosPolizasDaoImplTest extends AbstractDB{
     @Autowired
	    private FoliosPolizasDao foliosPolizasDao;
	    
	    public FoliosPolizasDaoImplTest() {
	    }
            
//                 @Test
//	     public void testSave() {
////	        System.out.println("save");
//	          FoliosPolizas foliosPolizas = new FoliosPolizas();
//	    	  FoliosPolizasId expResult = new FoliosPolizasId();
//	          foliosPolizas.setFolio(1);
//                    expResult.setCompania("TEMP");
//	          expResult.setAno(2020);
//                  expResult.setMes(1);
//                  expResult.setTipoPoliza("A");
//	          
////	    	  System.out.println(id);	         
//	          
//	          foliosPolizas.setId(expResult);	                 	     
//	          FoliosPolizasId result = foliosPolizasDao.save(foliosPolizas);	
////	          System.out.println("Id:"+result.getIdCampo());
//	          assertEquals(result.getCompania(),expResult.getCompania());
//	          //fail("The test case is a prototype.");
//	    }
            
                  @Test
	        public void findUpdate() {
	            System.out.println("Busca");
	            FoliosPolizas foliosPolizas = new FoliosPolizas();
	            FoliosPolizasId foliosPolizasId= new FoliosPolizasId(); 
	            boolean expResult = true;
                    int ano = 2010;
                    int mes = 11;
	          //  boolean result = foliosPolizasDao.buscaActualiza("TEMP",ano ,mes , "E");
	            assertEquals(expResult, true);
//	    		  fail("The test case is a prototype.");
	        }

    public void setFoliosPolizasDao(FoliosPolizasDao foliosPolizasDao) {
        this.foliosPolizasDao = foliosPolizasDao;
    }
    
                  
                  
}
