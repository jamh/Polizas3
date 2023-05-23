package com.feraz.cfdi.process;

import com.feraz.cfdi.dao.ErpSatLeerCfdiDao;
import com.feraz.facturas.webcontrolfe.App.App;
import com.feraz.facturas.webcontrolfe.dto.PolizasInfo;
import com.feraz.sat.cfdi.read.BeanRespuestas;
import com.feraz.sat.cfdi.read.SeleReadSAT;
import com.feraz.sat.cfdi.read.SeleReadSATCXC2;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Value;

/**
 *
 * @author Ing. JAMH
 */
public class ProcesaCFDISAT {

    private App app;
    private ErpSatLeerCfdiDao erpSatLeerCfdiDao;

    @Value("${document.file.dirOutDocumentCXP}")
    private String dirOutXml;

    @Value("${file.phantom.phantomdir}")
    private String dirPhantom;

    @Value("${file.phantom.chromedriver}")
    private String dirChromeDriver;

    @Value("${file.phantom.flag}")
    private String flagPhantom;
//    private SeleReadSAT readCRSAT;

    public ProcesaCFDISAT() {
    }

    public int procesaSATCFDI(String compania, String rfc, String password) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy");
        SimpleDateFormat sdfp = new SimpleDateFormat("MM");

//        System.out.println("CAlendario: "+sdf.format(new Date()));
        int numXml = procesaSATCFDI(compania, rfc, password, sdf.format(new Date()), sdfp.format(new Date()),"");

        return numXml;
    }

    public int procesaSATCFDI(String compania, String rfc, String password, String calendario, String periodo,String user) {
        SeleReadSAT readCRSAT = new SeleReadSAT();

        readCRSAT.setUsarioRFC(rfc);
        readCRSAT.setPasswordRFC(password);
//        readCRSAT.setCalendario(calendario);
//        readCRSAT.setPeriodo(periodo);
        readCRSAT.setDirOut(dirOutXml);
        readCRSAT.setDirPhantom(dirPhantom);
        readCRSAT.setChromeDir(dirChromeDriver);
        BeanRespuestas br=null;
        if (flagPhantom.equals("true")) {
             br =readCRSAT.consultaFERecepcion(false, compania,calendario,periodo);
        } else {
            br= readCRSAT.consultaFERecepcion(false, compania, false,calendario,periodo);
        }
        List<String> listxml = br.getListXML();
        List<String> listActivos = br.getListActivos();

        erpSatLeerCfdiDao.findErpSatLeerCfdi(listActivos);
        //List<String> listpdf=readCRSAT.getListPdf();
//        findErpSatLeerCfdi
//        readCRSAT.getListPdf();

        for (int i = 0; i < listxml.size(); i++) {
//           System.out.println("xml:"+listxml.get(i));
            //String compania, String archivo, String namePdf, String pathPdf
            PolizasInfo pi = app.validaComprobante(compania, listxml.get(i), null, null);
            if (pi.getInfTipo() == 0) {
                app.cargaComprobante(listxml.get(i), compania, null, "SATCP",user);
            }
            // System.out.println("pdf:"+listpdf.get(i));
        }

        if (listxml == null) {

            return 0;

        } else {

            return listxml.size();

        }

    }

    public int procesaSATCFDICXC(String compania, String rfc, String password) {
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy");
        SimpleDateFormat sdfp = new SimpleDateFormat("MM");

//        System.out.println("CAlendario: "+sdf.format(new Date()));
        int numXml = procesaSATCFDICXC(compania, rfc, password, sdf.format(new Date()), sdfp.format(new Date()));

        return numXml;
    }

    public int procesaSATCFDICXC(String compania, String rfc, String password, String calendario, String periodo) {
        SeleReadSATCXC2 readCRSAT = new SeleReadSATCXC2();

        readCRSAT.setUsarioRFC(rfc);
        readCRSAT.setPasswordRFC(password);
//        readCRSAT.setCalendario(calendario);
//        readCRSAT.setPeriodo(periodo);
        readCRSAT.setDirOut(dirOutXml);
        readCRSAT.setDirPhantom(dirPhantom);
        readCRSAT.setChromeDir(dirChromeDriver);
        if (flagPhantom.equals("true")) {
            readCRSAT.consultaFERecepcion(false, compania,calendario,periodo);
        } else {
            readCRSAT.consultaFERecepcion(false, compania, false,calendario,periodo);
        }
        List<String> listxml = readCRSAT.getListXML();
        List<String> listActivos = readCRSAT.getListActivos();

        erpSatLeerCfdiDao.findErpSatLeerCfdi(listActivos);
        //List<String> listpdf=readCRSAT.getListPdf();
//        findErpSatLeerCfdi
//        readCRSAT.getListPdf();

        for (int i = 0; i < listxml.size(); i++) {
//           System.out.println("xml:"+listxml.get(i));
            //String compania, String archivo, String namePdf, String pathPdf
            PolizasInfo pi = app.validaComprobante(compania, listxml.get(i), null, null);
            if (pi.getInfTipo() == 0) {
                app.cargaComprobante(listxml.get(i), compania, null, "SATCXC");
            }
            // System.out.println("pdf:"+listpdf.get(i));
        }

        if (listxml == null) {

            return 0;

        } else {

            return listxml.size();

        }

    }

    public void setApp(App app) {
        this.app = app;
    }

    public void setDirOutXml(String dirOutXml) {
        this.dirOutXml = dirOutXml;
    }

    public void setDirPhantom(String dirPhantom) {
        this.dirPhantom = dirPhantom;
    }

    public void setErpSatLeerCfdiDao(ErpSatLeerCfdiDao erpSatLeerCfdiDao) {
        this.erpSatLeerCfdiDao = erpSatLeerCfdiDao;
    }

    public void setFlagPhantom(String flagPhantom) {
        this.flagPhantom = flagPhantom;
    }

    public void setDirChromeDriver(String dirChromeDriver) {
        this.dirChromeDriver = dirChromeDriver;
    }

}
