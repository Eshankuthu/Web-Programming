<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="ct" uri="WEB-INF/custom.tld"%>
    
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Custom tag</title>
</head>
<body>

<h1>Hello </h1>

<ct:currentDateTime dateFormat="E yyyy.MM.dd" fontColor="red" fontSize="50px" timeFormat="hh:mm:ss a zzz"/>



<br>
<ct:currentDateTime dateFormat="E yyyy.MM.dd" fontColor="green" fontSize="30px" timeFormat="hh:mm:ss a zzz"/>
</body>
</html>