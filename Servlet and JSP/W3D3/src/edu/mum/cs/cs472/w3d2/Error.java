package edu.mum.cs.cs472.w3d2;

import java.io.Serializable;

public class Error implements Serializable {
	private String errorMsg;
	
	public Error() {
		
	}

	public String getErrorMsg() {
		return errorMsg;
	}

	public void setErrorMsg(String errorMsg) {
		this.errorMsg = errorMsg;
	}
	
}
