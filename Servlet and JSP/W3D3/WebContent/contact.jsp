<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@page import="java.util.*" session="true"%>
<!DOCTYPE html>
<html>
<head>
<title>Contact Us</title>
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
	integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M"
	crossorigin="anonymous">
</head>
<body>
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
		<form action="processContact" id="formCustomerContact" method="post"
			name="formCustomerContact">
			<fieldset>
				<legend>Customer Contact Form</legend>
				<div>
					<p style="color: red">${ err.errorMsg }</p>
					<c:remove var="err" />
				</div>


				<div class="form-group">
					<label for="customerName">*Name:</label><input
						aria-describedby="customerNameHelp" class="form-control"
						id="customerName" name="customerName"
						placeholder="e.g. John Smith" title="Enter your full name"
						type="text"><small class="form-text text-muted"
						id="customerNameHelp">Enter your full name.</small>
				</div>
				<label>*Gender:</label><br> <label
					class="custom-control custom-radio"> <input
					class="custom-control-input" id="radioGenderMale"
					name="radioGender" type="radio" value="male"> <span
					class="custom-control-indicator"></span> <span
					class="custom-control-description">Male</span>
				</label> <label class="custom-control custom-radio"> <input
					class="custom-control-input" id="radioGenderFemale"
					name="radioGender" type="radio" value="female"> <span
					class="custom-control-indicator"></span> <span
					class="custom-control-description">Female </span>
				</label>

				<div class="form-group">
					<label for="ddlCategory">*Category:</label> <select
						class="form-control" id="ddlCategory" name="ddlCategory">
						<option value="null">Select...</option>
						<option value="feedback">Feedback</option>
						<option value="inquiry">Inquiry</option>
						<option value="complaint">Complaint</option>
					</select>
				</div>
				<div class="form-group">
					<label for="message">*Message:</label>
					<textarea class="form-control" id="message" name="message" rows="3"></textarea>
				</div>
				<button class="btn btn-primary btn-block" id="btnSubmit"
					type="submit">Submit</button>
			</fieldset>
		</form>
	</div>
	<div class="container">
		<br> <span class="text-muted">Hit Count for this page: --</span><span
			class="text-muted" style="float: right;">Total Hit Count for
			the entire WebApp: 
			<%@ include file="counter.jsp" %> 
			 
		</span>
	</div>
	<footer class="footer">
		<div class="container">
			<span class="text-muted">O. Kalu ::: CS472-WAP</span><span
				class="text-muted" style="float: right;">© September 2017</span>
		</div>
	</footer>
</body>
</html>