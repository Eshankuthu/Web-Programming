<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Contact Message List</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
	integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M"
	crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col">
				<h2>Message List:</h2>
	
				<c:forEach items="${cmsSes}" var="cm">
					<div class="message-list border rounded border-primary ">
						<p>Name: <c:out value="${cm.name}" /></p>
						<p>Gender: <c:out value="${cm.gender}" /></p>
						<p>Category: <c:out value="${cm.category}" /></p>
						<p>Message: <c:out value="${cm.message}" /></p>
					</div>
				</c:forEach>
				
				<p><a href="contact.jsp">Submit another message</a></p>
			</div>
		</div>
		
	</div>
	<p></p>
	<div class="container">
		<span class="text-muted">Hit Count for this page: --</span><span
			class="text-muted" style="float: right;">Total Hit Count for
			the entire WebApp: 
			<%@ include file="counter.jsp" %> 
			</span>
	</div>
	
</body>
</html>