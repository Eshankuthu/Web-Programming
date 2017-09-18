
(function() {   

        let myStorage = window.localStorage;
        var data = [];

        setInterval(   () => {
            $("#time").text(new Date());
        }, 
        1000);


        const loadInitialDataToLocalStorage = function() {
            myStorage.setItem("Students", JSON.stringify(data));    
            loadArrayofStudents(data);
        }

        
        const loadArrayofStudents = function(arr) {
            let count = 0;
            $("#lista").empty();
            arr.forEach((st) => {
                loadNewLine(st);
                count++;
            });
            console.log(count);
        }

        const loadNewLine = function(user){
            const line = "<li id='" + user.studentId + "'> " +
                user.studentId + " // " + user.firstName + "</li>";
            
            $("#lista").append(line);
            $("#"+ user.studentId).addClass("list-group-item list-group-item-info");
            $("#studentId").val("");
            $("#firstName").val("");
            $("#lista").append();
            $("#studentId").focus();
        }

        const form = document.querySelector("#form");



        // ----- --- -- - - -- 

        if(!myStorage.getItem("Students")) {

            myStorage.setItem("Students", data);
            $.get({
                url: "data/students.json",
                success: function(resp) {
                    resp.forEach( (el) => {
                        data.push(el);
                    });
                }
            }).then(() => {
                loadInitialDataToLocalStorage();
            })
        } else {
            data = JSON.parse(myStorage.getItem("Students"));
            loadInitialDataToLocalStorage();
        }


        $("#form").on("submit", function(submited) {
            submited.preventDefault();
            let newStudent = {"studentId": $("#studentId").val(), 
                "firstName": $("#firstName").val() 
            };
            data.push(newStudent);
            loadInitialDataToLocalStorage();
        });

        

        navigator.geolocation.getCurrentPosition(
            (success) => {
                console.log(success);
            }, (error) => {
                console.log(error);
            });



        
        window.cleanMemory = function() {
            myStorage.clear();
        }

    })();