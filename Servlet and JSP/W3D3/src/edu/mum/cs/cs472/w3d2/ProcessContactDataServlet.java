package edu.mum.cs.cs472.w3d2;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class ProcessContactDataServlet
 */
@WebServlet(description = "ProcessContactDataServlet", urlPatterns = { "/processContact" })
public class ProcessContactDataServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private int hitCount;
	private List<ContactMessage> cmList;
       
    public ProcessContactDataServlet() {
        super();
        cmList = new ArrayList<ContactMessage>();
    }

	@Override
	public void init() throws ServletException {
		super.init();
		hitCount++;
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		hitCount++;
		response.sendRedirect("contact.jsp");
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		hitCount++;
		String missingFieldsMsg = "";
		String customerName = request.getParameter("customerName");
		String gender = request.getParameter("radioGender");
		String category = request.getParameter("ddlCategory");
		String message = request.getParameter("message");
		
		System.out.println("name= "+ customerName + ", gender= " + gender + ", cat= " + category + ", msg= " + message);
		// Check for missing fields data
		if(customerName.equals("")) {
			missingFieldsMsg += "<span style='color:red;font-size:1em'>Name is missing.</span><br/>";
		}
		if(gender == null) {
			missingFieldsMsg += "<span style='color:red;'>Gender is missing.</span><br/>";
		}
		if(category.equals("null")) {
			missingFieldsMsg += "<span style='color:red;'>Category is missing.</span><br/>";
		}
		if(message.equals("")) {
			missingFieldsMsg += "<span style='color:red;'>Message is missing.</span><br/>";
		}
		if(!missingFieldsMsg.equals("")) {
			Error err = new Error();
			err.setErrorMsg(missingFieldsMsg);
			request.getSession().setAttribute("err", err);
			
			response.sendRedirect("contact.jsp");
		} else {
			request.getSession().setAttribute("customerName", customerName);
			request.getSession().setAttribute("gender", gender);
			request.getSession().setAttribute("category", category);
			request.getSession().setAttribute("message", message);
			request.getSession().setAttribute("now", LocalDateTime.now());
			
			ContactMessage cm = new ContactMessage(customerName, gender, category, message);
			cmList.add(cm);
			request.getServletContext().setAttribute("cmsSes", cmList);
			
			response.sendRedirect("thankyou.jsp");
		}
	}
}
