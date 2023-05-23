package com.feraz.facturas.webcontrolfe.controller;

import com.feraz.facturas.webcontrolfe.App.App;
import com.feraz.facturas.webcontrolfe.dto.PolizasInfo;
import com.feraz.facturas.webcontrolfe.validation.ValidaVersionCFDI;
import java.io.IOException;
import java.util.Iterator;
import java.util.LinkedList;
import java.io.File;
import java.io.FileInputStream;
import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.feraz.procesos.model.FileMeta;

import java.io.File;
import java.io.FileInputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import mx.bigdata.sat.cfdi.CFDv32;
import mx.bigdata.sat.cfdi.v32.schema.Comprobante;
import mx.bigdata.sat.cfdi.v32.schema.TimbreFiscalDigital;
import org.apache.log4j.Logger;
import org.apache.xerces.dom.ElementNSImpl;
import org.jamh.data.process.ProcessDao;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

@Controller
@RequestMapping("/filesC")
@SessionAttributes({"compania", "usuario"})
public class FileControllerComplete {

    private static final Logger log = Logger.getLogger(FileControllerComplete.class);
    @Value("${document.file.dirOutDocumentFE}")
    private String dirOutFileDocument;
    @Value("${document.file.dirURLOutDocumentFE}")
    private String dirUrlOutDocument;
    @Value("${document.file.maxZiseFE}")
    private String maxSizeDocument;
    private ProcessDao processDao;
    private ValidaVersionCFDI validaVersionCFDI;
   // private String extension = "";
    //private String nombreArc = "";
    private String dirCompania;

    private App app;

    @RequestMapping(value = "/upload", method = RequestMethod.POST)
    public @ResponseBody
    Map upload(MultipartHttpServletRequest request, HttpServletResponse response,@RequestParam("origen") String origen, Model model) {

        Map<String, Object> filesm = new HashMap<String, Object>();

        if (model.asMap().get("compania") == null) {
//            msgErr ="Sesion no valida";
            //System.out.println("Sesion no valida");
            filesm.put("files", "Sesion no valida");
            return filesm;
        }
        
       
        String compania = model.asMap().get("compania").toString();
        String usuario = model.asMap().get("usuario").toString();
//         System.out.println("usuario:"+usuario);
        LinkedList<FileMeta> files = new LinkedList<FileMeta>();
        //1. build an iterator
        Iterator<String> itr = request.getFileNames();
        MultipartFile mpf = null;
        boolean err = false;
        //2. get each file
        while (itr.hasNext()) {

            mpf = request.getFile(itr.next());

            if (files.size() >= 10) {
                files.pop();
            }

            //2.3 create new fileMeta
            FileMeta fileMeta = new FileMeta();
            fileMeta.setFileName(mpf.getOriginalFilename());
            fileMeta.setFileSize(mpf.getSize() / 1024 + " Kb");
            fileMeta.setFileType(mpf.getContentType());
//              System.out.println("mpf.getSize():"+mpf.getSize());
//            fileMeta.setError("Error");

            try {
                fileMeta.setBytes(mpf.getBytes());

                long maxSize = new Long(maxSizeDocument);
//                    System.out.println("maxSize:"+maxSize);
//                    System.out.println("mpf.getSize():"+mpf.getSize());
                if (mpf.getSize() > maxSize) {
                    fileMeta.setError("Tamaño no valido");
                    fileMeta.setBytes(null);
                    files.add(fileMeta);
                    continue;
                }

                log.info("maxSize:" + maxSize);

                int i = mpf.getOriginalFilename().lastIndexOf('.');
                // String hora = "" + System.currentTimeMillis();
//                System.out.println("Nombre:" + file.getOriginalFilename());
               String extension = mpf.getOriginalFilename().substring(i + 1);
                String nombreArc = mpf.getOriginalFilename().substring(0, i);
                log.info("extension:" + extension);
                log.info("nombreArc:" + nombreArc);
                if (!extension.toLowerCase().trim().equals("xml") && !extension.toLowerCase().trim().equals("pdf")) {

                    fileMeta.setError("Archivo no valido");
                    fileMeta.setBytes(null);
                    files.add(fileMeta);
                    continue;

                }
//                      System.out.println("nombreArc:"+nombreArc);
//               String hora = "" + System.currentTimeMillis();

//               System.out.println("path:"+path);
                // copy file to local disk (make sure the path "e.g. D:/temp/files" exists)
                //FileCopyUtils.copy(mpf.getBytes(), new FileOutputStream("H:/temp/files/" + mpf.getOriginalFilename()));
                String timeT=""+System.currentTimeMillis();


                File temp = File.createTempFile(nombreArc+timeT, ".tmp");
                temp.deleteOnExit();
                FileCopyUtils.copy(mpf.getBytes(), temp);

                if (extension.toLowerCase().trim().equals("xml")) {
                    
                    boolean result1 = validaVersionCFDI.verision32(temp.getAbsolutePath());
                    boolean result2 = validaVersionCFDI.version33(temp.getAbsolutePath());
                    
                    System.out.println("version 32:" + result1);
                    System.out.println("version 33:" + result2);
                  if(result2 == false){
                 
                    Comprobante comp = CFDv32.newComprobante(new FileInputStream(temp));

                    if (comp != null) {
                        PolizasInfo info = app.validaComprobante(compania, temp.getAbsolutePath(), null, null);
                        log.info("Valida comprobante:" + info.getInfTipo());
                        if (info.getInfTipo() ==1 || info.getInfTipo() ==3) {
                            fileMeta.setError("Error el comprobante ya fue cargado al sistema. "+info.getUuid());
                        } else if(info.getInfTipo() ==2){
                             fileMeta.setError("Error el XML tiene un problema de lectura. ");
                        }
                        else {

                            String calendar = formatFecha(comp.getFecha(), "yyyy");
                            String periodo = formatFecha(comp.getFecha(), "MM");
                            
                            //System.out.println("buscando UUID");
                            
                            
                            TimbreFiscalDigital d = new mx.bigdata.sat.cfdi.v32.schema.TimbreFiscalDigital();
                            
                             
                              for(int j = 1;comp.getComplemento().getAny().size() >= j;j++){


                                if(TimbreFiscalDigital.class.equals(comp.getComplemento().getAny().get(j - 1).getClass())){

                                // System.out.println("si hay timbre:"+comp.getComplemento().getAny().isEmpty());

                                  d = (TimbreFiscalDigital)comp.getComplemento().getAny().get(j - 1);

                                  break;

                                }else{

                                // System.out.println("no hay timbre:"+comp.getComplemento().getAny().get(i - 1));

                                }

                             }  
                
                            
                            
                            String nombreUuid = d.getUUID();
                            
                           // System.out.println("UUID: "+nombreUuid);
                            
                            String path ;

                            if (calendar.trim().equals("2015")) {
                                revisarDirectorio(dirOutFileDocument + compania);
                                path = dirOutFileDocument + compania + "/" + nombreUuid + "." + extension;

                            } else {
                                revisarDirectorio(dirOutFileDocument + compania + "/" + calendar+ "/" + periodo);
                                path = dirOutFileDocument + compania + "/" + calendar + "/" + periodo + "/" + nombreUuid + "." + extension;
                            }

                            File ff = new File(path);
                            FileCopyUtils.copy(mpf.getBytes(), ff);
                            log.info("path:"+path);
                            int data = app.cargaComprobante4(path, compania,usuario,null, origen);
                            log.info("cargaComprobante:" + data);
                            
                            if (data == 0) {
                                fileMeta.setError("Error al leer el CFDI");
                            } else {
                                fileMeta.setError(null);
                                fileMeta.setMsg("Guardado con exito");
                            }

                        }

                    }
                     
                      
                  }else{
                      
                     // File file = new File(archivo);
                    JAXBContext jaxbContext = JAXBContext.newInstance(com.feraz.mx.sat.cfdi.Comprobante.class);

                    Unmarshaller jaxbUnmarshaller = jaxbContext.createUnmarshaller();
                    com.feraz.mx.sat.cfdi.Comprobante comprobante = (com.feraz.mx.sat.cfdi.Comprobante) jaxbUnmarshaller.unmarshal(new FileInputStream(temp));

                     // Comprobante comp = CFDv32.newComprobante(new FileInputStream(temp));

                    if (comprobante != null) {
                        PolizasInfo info = app.validaComprobante(compania, temp.getAbsolutePath(), null, null);
                        log.info("Valida comprobante:" + info.getInfTipo());
                        if (info.getInfTipo() ==1 || info.getInfTipo() ==3) {
                            fileMeta.setError("Error el comprobante ya fue cargado al sistema. "+info.getUuid());
                        } else if(info.getInfTipo() ==2){
                             fileMeta.setError("Error el XML tiene un problema de lectura. ");
                        }
                        else {
                           

                            String calendar =  String.valueOf(comprobante.getFecha().getYear());
                            String periodo = String.valueOf(comprobante.getFecha().getMonth());
                            
                            //System.out.println("buscando UUID");
                             
                            String uuid = "";
                            
                            if(comprobante.getComplemento().iterator().hasNext()){
                                 for(int j = 1;comprobante.getComplemento().iterator().next().getAny().size() >= j;j++){

                                    System.out.println(comprobante.getComplemento().iterator().next().getAny().get(j - 1).getClass());
                                    
                                    org.apache.xerces.dom.ElementNSImpl im = (ElementNSImpl)comprobante.getComplemento().iterator().next().getAny().get(j - 1);
                                    
                                    if(im.getNodeName().equalsIgnoreCase("tfd:TimbreFiscalDigital")){
                                    
                                            uuid = im.getAttribute("UUID");
                                    }
                                    
                                    
                                }


                             }  
                
                            
                            
                            //String nombreUuid = d.getUUID();
                            
                           // System.out.println("UUID: "+nombreUuid);
                            String nombreUuid = uuid;
                            String path ;

                            if (calendar.trim().equals("2015")) {
                                revisarDirectorio(dirOutFileDocument + compania);
                                path = dirOutFileDocument + compania + "/" + nombreUuid + "." + extension;

                            } else {
                                revisarDirectorio(dirOutFileDocument + compania + "/" + calendar+ "/" + periodo);
                                path = dirOutFileDocument + compania + "/" + calendar + "/" + periodo + "/" + nombreUuid + "." + extension;
                            }

                            File ff = new File(path);
                            FileCopyUtils.copy(mpf.getBytes(), ff);
                            log.info("path:"+path);
                            int data = app.cargaComprobante33(path, compania,usuario,null, origen);
                            log.info("cargaComprobante:" + data);
                            
                            if (data == 0) {
                                fileMeta.setError("Error al leer el CFDI");
                            } else {
                                fileMeta.setError(null);
                                fileMeta.setMsg("Guardado con exito");
                            }

                        }

                    }
                    
                      
                  
                  
                  }  
                }

            } catch (IOException e) {
                fileMeta.setError("Error al guardar archivo");
                // TODO Auto-generated catch block
                log.error("Error Crear Archivo", e);
            } catch (Exception e) {
                fileMeta.setError("Error al guardar archivo");
                log.error("Error al guardar archivo", e);
            }
            //2.4 add to files
            fileMeta.setBytes(null);
            files.add(fileMeta);
            log.info("filesSize:"+files.size());
        }

        filesm.put("files", files);

        // result will be like this
        // [{"fileName":"app_engine-85x77.png","fileSize":"8 Kb","fileType":"image/png"},...]
        return filesm;

    }

    public void revisarDirectorio(String dirCompania) {

        File file = new File(dirCompania + "/");
      //  System.out.println("Directory" + dirCompania + "/");
        if (!file.exists()) {
            if (file.mkdirs()) {
             //   System.out.println("Directory is created!");
            } else {
             //   System.out.println("Failed to create directory!");
            }
        }

    }

    public String formatFecha(Date date, String format) {
        try {
            return new SimpleDateFormat(format).format(date);
        } catch (Exception e) {
            return "";
        }
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

    public void setValidaVersionCFDI(ValidaVersionCFDI validaVersionCFDI) {
        this.validaVersionCFDI = validaVersionCFDI;
    }

}
