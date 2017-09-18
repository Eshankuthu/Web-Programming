$(document).ready(function(){

  let myStorage = window.localStorage;
  const customersData = [];

  const addStudent = function(customer) {
      addCustomerToListView(customer);
      addCustomerToArrayData(customer);
      // addtoLocalStorage
  }

  /** Adds the student data to List UI */
  const addCustomerToListView = function(customer) {
      const newListItem = "<li class='list-group-item'>" + customer.accountId + " - " + customer.firstName +" - " + customer.accountype +"</li>";
      $("#customer-list").append(newListItem);
  }

  /** Adds the student to the studentsData array */
  const addCustomerToArrayData = function(customer) {
      customersData.push(customer);
      
  }

  $.ajax({
      url: "data/customerData.json",
      type: "GET",
      dataType: "json"
  }).done(function(customersData) {
      customersData.forEach((objStudent) => {
          addStudent(objStudent);
      });
  }).fail(function(xhr, status, err) {
      alert("Error: " + status + " - " + err);
  }).always(function(xhr, status) {
      //alert( "The request is complete!" );
  });


  $("#CustRegForm").on("submit", function(event) {
      event.preventDefault();
      const accountId = $("#accountId").val();
      const firstName = $("#firstName").val();
      const accountype =$("#accountype").val();
      const objNewCustomer = {
          "accountId": accountId,
          "firstName": firstName,
          "accountype": accountype
      };
      addStudent(objNewCustomer);
      $("#accountId").val("");
      $("#firstName").val("");
      $("#accountype").focus();
  });
  $("#accountype").focus();


  });
