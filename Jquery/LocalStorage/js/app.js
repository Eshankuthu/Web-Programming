/** Javascript source code for Student Registration SPApp **/
/** Author: O. A. Kalu **/
/** Date created: Thur 9/14/2017 **/
/** Date modified: Thur 9/14/2017 **/

$(document).ready(function(){
    // Setup and switch-on DateTime ticking clock
    setInterval(() => {
        $("#dateTimeTicker").text(new Date());
    }, 1000);

    // Hold a copy of studentsData in memory
    const studentsData = [];

    /** Add a new Student */
    const addStudent = function(student) {
        addStudentToListView(student);
        addStudentToArrayData(student);
        // addtoLocalStorage
    }

    /** Adds the student data to List UI */
    const addStudentToListView = function(student) {
        const newListItem = "<li class='list-group-item'>" + student.studentId + " - " + student.firstName + "</li>";
        $("#olstStudents").append(newListItem);
    }

    /** Adds the student to the studentsData array */
    const addStudentToArrayData = function(student) {
        studentsData.push(student);
    }

    // Fetch and display studentsData from server using AJAX
    $.ajax({
        url: "data/students.json",
        type: "GET",
        dataType: "json"
    }).done(function(studentsData) {
        studentsData.forEach((objStudent) => {
            addStudent(objStudent);
        });
    }).fail(function(xhr, status, err) {
        alert("Error: " + status + " - " + err);
    }).always(function(xhr, status) {
        //alert( "The request is complete!" );
    });   
    
    // Form submission
    $("#stuRegForm").on("submit", function(event) {
        event.preventDefault();
        const studentId = $("#studentId").val();
        const firstName = $("#firstName").val();
        const objNewStudent = {
            "studentId": studentId,
            "firstName": firstName
        };
        addStudent(objNewStudent);
        $("#studentId").val("");
        $("#firstName").val("");
        $("#studentId").focus();
    });
    $("#studentId").focus();
});
