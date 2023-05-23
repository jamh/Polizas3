<%-- 
    Document   : LoginPortal
    Created on : 24/08/2016, 04:00:06 PM
    Author     : user
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Portal Facturas</title>
       
        <link rel="stylesheet" type="text/css" href="http://www.appferaz1.com/extjs/extjs5.1/build/packages/appgenf-theme/appgenf-theme-all.css" />
        <script type="text/javascript" charset="utf-8" src="http://www.appferaz1.com/extjs/extjs5.1/build/ext-all.js"></script>
    
        <script type="text/javascript" src="AppPortal/login.js"></script>
        
          <style>




            #imagenPosicion {
                position:absolute;
                top:10%;
                left: 15%;

            }
          
        </style>
        
    </head>

    <body>
        
        <div id="imagenPosicion">   
            <div id="divImagenLogin">    
                <img src="/Polizas3/resources/images/logo_<c:out value="${compania}"/>.png">
            </div>
          </div>
        
    </body>
</html>