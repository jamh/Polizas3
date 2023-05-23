<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
   "http://www.w3.org/TR/html4/loose.dtd">


<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">        

<script>
function getFrameContents()
{

         document.frmEnvioPortal.idCel.value = '1234567890';
         document.frmEnvioPortal.jsoncallback.value = 'AAA';
       
       
          window.document.frmEnvioPortal.submit();

}
</script>
<title>Alta de Usuarios</title>
 </head>
 
<body onload="getFrameContents()">

 <form name="frmEnvioPortal" method="post" action="/Polizas3/token/generador" method="post" >
            <input type="hidden" name="idCel" value="" />
            <input type="hidden" name="jsoncallback" value="" />

 </form>


</body>
</html>