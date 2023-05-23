/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.feraz.portal.controll;

/**
 *
 * @author vavi
 */

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

/**
 *
 * @author 55555
 */
@Controller
@RequestMapping("/")
@SessionAttributes({"compania","usuario"})
public class CotrollerPortalFolio {
    
       @RequestMapping(value = "/PortalProveedor",method = RequestMethod.GET)
    public String inicio(Model model) {      
         System.out.println("aqui1");
        model.addAttribute("compania", "T2O");
        return "init/LoginPortalFolio";
    }
    
     @RequestMapping(value = "/PortalProveedor",method = RequestMethod.POST)
    public String inicioPost(Model model) {      
         System.out.println("aqui1");
        model.addAttribute("compania", "T2O");
        return "init/LoginPortalFolio";
    }
    
    
      @RequestMapping(value = "/PortalAereo",method = RequestMethod.GET)
    public String inicio2(Model model) {      
         System.out.println("aqui1");
        model.addAttribute("compania", "MASAIR");
        return "init/LoginPortalAereo";
    }
    
     @RequestMapping(value = "/PortalAereo",method = RequestMethod.POST)
    public String inicioPos2t(Model model) {      
         System.out.println("aqui1");
        model.addAttribute("compania", "MASAIR");
        return "init/LoginPortalAereo";
    }
    
    @RequestMapping(value = "/PortalInsurgentes",method = RequestMethod.GET)
    public String inicio2Insur(Model model) {      
         System.out.println("aqui1");
        model.addAttribute("compania", "UNISRG");
        return "init/LoginPortalInsurgentes";
    }
    
     @RequestMapping(value = "/PortalInsurgentes",method = RequestMethod.POST)
    public String inicioPos2tInsur(Model model) {      
         System.out.println("aqui1");
        model.addAttribute("compania", "UNISRG");
        return "init/LoginPortalInsurgentes";
    }
    
   
    
}
