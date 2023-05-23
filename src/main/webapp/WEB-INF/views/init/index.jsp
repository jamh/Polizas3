<%-- 
    Document   : index
    Created on : 8/04/2013, 12:47:57 PM
    Author     : ING. JAMH
--%>

<%@page contentType="text/html" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!doctype html>
<html>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title id="page-title">Polizas3</title>
    
    <script language="JavaScript">
      window.onbeforeunload = confirmExit;
      function confirmExit()
      {
        return "Esta Seguro que desaea Salir de la Captura";
      }
    </script>
    <script type="text/javascript">

        var ppCompa='<c:out value="${compania}" />';
        var ppUsr='<c:out value="${usuario}" />';

    </script>

    <link rel="stylesheet" type="text/css" href="resources/css/formater.css"/>
    <link rel="stylesheet" type="text/css" href="resources/css/icon.css"/>
    <link rel="stylesheet" type="text/css" href="resources/css/app.css"/>
    <link rel="stylesheet" type="text/css" href="resources/js/ux/statusbar/css/statusbar.css"/>
    <link rel="stylesheet" type="text/css" href="resources/js/ux/grid/css/GridFilters.css"/>
    <link rel="stylesheet" type="text/css" href="resources/js/ux/grid/css/RangeMenu.css"/>
   
    <link rel="stylesheet" type="text/css" href="resources/js/shared/example.css"/>
    <!-- <link rel="stylesheet" type="text/css" href="http://localhost:8080/extjs4.2.2/packages/ext-theme-neptune/build/resources/ext-theme-neptune-all.css" />
        <script type="text/javascript" charset="utf-8" src="http://localhost:8080/extjs4.2.2/ext-all.js"></script>
   -->
    <link rel="stylesheet" type="text/css" href="http://www.appferaz1.com/extjs/extjs4.2/packages/ext-theme-neptune/build/resources/ext-theme-neptune-all.css" />
        <script type="text/javascript" charset="utf-8" src="http://www.appferaz1.com/extjs/extjs4.2/ext-all.js"></script>
    <script type="text/javascript" charset="utf-8" src="http://www.appferaz1.com/extjs/extjs4.2/locale/ext-lang-es.js"></script>

 <!--   <link href="http://cdn.sencha.io/ext/gpl/4.2.0/resources/css/ext-all-neptune.css" rel="stylesheet" />
    <script src="http://cdn.sencha.com/ext/gpl/4.2.0/ext-all.js"></script>-->
    


    <script type="text/javascript">
        Ext.Loader.setConfig({
            enabled: true,
            paths: {
                AppPolizas3: "AppPolizas3/app"
            }
        });

    </script>
    <script type="text/javascript" src="resources/js/monitor/Ext.ux.ActivityMonitor.js"></script>
    <script type="text/javascript" src="resources/js/shared/examples.js"></script>
    <script type="text/javascript" src="resources/tools/util.js"></script>
    <script type="text/javascript" src="resources/locale/ext-lang-es.js"></script>
    <script type="text/javascript" src="AppPolizas3/app.js"></script>
</head>
<body>
</body>
</html>
