<%
	Integer counter = (Integer) session.getAttribute("counter");
	if (counter == null) {
		counter = new Integer(1);
	} else {
		counter = new Integer(counter.intValue() + 1);
	}

	session.setAttribute("counter", counter);
%>
<%=counter%>