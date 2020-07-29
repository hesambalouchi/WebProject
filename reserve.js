$(document).ready(function(){


    $("form").on("click", "button", create);
    $("table").on("click" , ".update" , update);
    $("table").on("click" , ".delete" , deleteuser);

    read();


    function create(event) {
        event.preventDefault();
        var allData = $("form").serialize();

        $.ajax({
            url: "php/reserve.php",
            method: "post",
            data: allData,
            success: function (response) {
                console.log(response);
                if (response == 1){
                    $("input").val("");
                    read();
                }   else {
                    alert("You have left a comment before!");
                }
            }
        });
    }



    function read() {

        $.ajax({
            url: "php/read.php",
            method: "get",
            success: function (response) {
                console.log(response);
                var data = JSON.parse(response);
                console.log(data);

                var items = "";
                var row = 1;
                if (data.length>0) {
                    for (var i in data) {
                        items += '<tr>\n' +
                            '<td>' + row + '</td>\n' +
                            '<td>' + data[i].id + '</td>\n' +
                            '<td class="editable email">' + data[i].email + '</td>' +
                            '<td class="editable fullname">' + data[i].full_name + '</td>\n' +
                            '<td class="editable username">' + data[i].username + '</td>\n' +
                            '<td class="editable password">' + data[i].password + '</td>\n' +
                            '<td><button class="btn btn-info update" id="' + data[i].id + '">Edit</button></td>\n' +
                            '<td><button class="btn btn-danger delete" id="' + data[i].id + '">Delete</button></td>\n' +

                            '</tr>'
                        row++;
                    }
                }
                else {
                    items += '<tr><td colspan="8">NO USER FOUND IN DATABASE <br> add some plzz!!</td></tr>'
                }
                $("table tbody").html("").append(items);
            }
        });

    }

    




});