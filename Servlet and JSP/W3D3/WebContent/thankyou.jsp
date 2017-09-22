<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html class="gr__localhost" lang="en">
<head>
<meta charset="UTF-8">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<meta content="ie=edge" http-equiv="X-UA-Compatible">
<title>Customer Contact App - Thank you!</title>
<link
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
	rel="stylesheet">
<link href="css/main.css" rel="stylesheet">
<style type="text/css">
html {
	position: relative;
	min-height: 100%;
}

body {
	margin-bottom: 40px;
}

.footer {
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 40px;
	line-height: 40px;
	background-color: #f5f5f5;
}
</style>
</head>
<body data-gr-c-s-loaded="true">
	<nav class="navbar navbar-expand-md navbar-dark bg-dark">
		<a class="navbar-brand" href="index.html">CS472 ::: W3D1 Lab</a>
		<button aria-controls="navbarsExampleDefault" aria-expanded="false"
			aria-label="Toggle navigation" class="navbar-toggler"
			data-target="#navbarsExampleDefault" data-toggle="collapse"
			type="button">
			<span class="navbar-toggler-icon"></span>
		</button>
	</nav>
	<div class="container">
		<div class="container">
			<br> <span class="text-muted" style="float: right;"> ${ now } </span>
		</div>
		<p>
			<br>
		</p>
		<div class="card">
			<div class="card-header">
				<h2>Thank you! Your message has been received as follows:</h2>
			</div>
			<div class="card-body">
				<h4 class="card-title">
					Name:
					${customerName}</h4>
				<br>
				<h5 class="card-subtitle mb-2 text-muted">
					Gender:
					${gender}</h5>
				<br>
				<h5 class="card-subtitle mb-2 text-muted">
					Category:
					${category}</h5>
				<br>
				<p class="card-text">
					Message:
					${message}</p>
				<br> <br>
				<p>
					Please feel free to <a class="card-link" href="contact.jsp">Contact
						Us</a> again
				</p>
				<p class="contact-message-list">
					<a href="contact-message-list.jsp">Message List</a>
				</p>
			</div>
			
		</div>
		<c:remove var = "customerName"/>
		<c:remove var = "gender"/>
		<c:remove var = "category"/>
		<c:remove var = "message"/>
			
		<p></p>
		<div class="container">
			<span class="text-muted">Hit Count for this page: --</span><span
				class="text-muted" style="float: right;">Total Hit Count for
				the entire WebApp: 
				<%@ include file="counter.jsp" %> 
				</span>
		</div>
	</div>
	<footer class="footer">
		<div class="container">
			<span class="text-muted">O. Kalu ::: CS472-WAP</span><span
				class="text-muted" style="float: right;">© September 2017</span>
		</div>
	</footer>
</body>
</html>