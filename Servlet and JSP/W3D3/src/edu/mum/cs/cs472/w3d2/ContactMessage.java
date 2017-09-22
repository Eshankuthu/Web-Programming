package edu.mum.cs.cs472.w3d2;

public class ContactMessage {
	private String name;
	private String gender;
	private String category;
	private String message;
	
	public ContactMessage(String name, String gender, String category, String message) {
		this.name = name;
		this.gender = gender;
		this.category = category;
		this.message = message;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
