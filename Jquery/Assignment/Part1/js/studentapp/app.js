// alert("Hello Jquery");
//
// $(document).ready(function(){
//   alert("Hello Jquery");
// });

 var p = $("#dateTime");
 setInterval(function(){
   p.text (new Date());},1000);


   $.ajax({
   	url: "studentsData.json",
   	type: "GET",
   	dataType: "json",
  }).done(function(result) {
    for(const student of result.students){
        let li = $('<li></li>').text(student.studentId + ' - ' + student.firstName);
        li.addClass('list-group-item');
        $('#student-list').append(li);
      }
  })
.fail(function(xhr, status, err) {
    console.log(status);
}).always(function(xhr, status) {
    console.log(status);
});
