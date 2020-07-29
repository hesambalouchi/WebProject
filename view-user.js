$(document).ready(function(){


    $("form").on("click", "button", create);
    $("table").on("click" , ".update" , update);
    $("table").on("click" , ".delete" , deleteuser);

    read();


    function create(event) {
        event.preventDefault();
        var allData = $("form").serialize();

        $.ajax({
            url: "php/add-user.php",
            method: "post",
            data: allData,
            success: function (response) {
                console.log(response);
                if (response == 1){
                    $("input").val("");
                    read();
                }   else {
                    alert("fill in all the blanks");
                }
            }
        });
    }



    function read() {

        $.ajax({
            url: "php/read.php",
            method: "get",
            success: function (response) {
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
                            '<td class="editable score">' + data[i].score + '</td>\n' +
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

    
    
    function update() {
        if (!$(this).hasClass("active")) {

            $(this).parent().siblings(".editable").each(function () {
                var val = $(this).html();
                $(this).html("<input type='text' value='" + val + "'>");
            })
            $(this).addClass("active");
        }

        else {

            var id = $(this).attr("id");
            var email = $(this).parent().siblings(".email").children("input").val();
            var fullname = $(this).parent().siblings(".fullname").children("input").val();
            var username = $(this).parent().siblings(".username").children("input").val();
            var password = $(this).parent().siblings(".password").children("input").val();


            $.ajax({
                url: "php/update.php",
                method: "post",
                data: {
                    //avaly name moteghayerre dovomy esmye k bahash mire tu file php va dar araye sarasary post mishine
                    id : id,
                    email: email,
                    fullname : fullname,
                    username : username,
                    password : password
                },
                success: function (response) {
                    //to refresh after edit
                    read();

                }
            });
        }


    }



    function deleteuser() {
        var id = $(this).attr("id")


        $.ajax({
            url: "php/delete.php",
            method: "post",
            data : {id:id},
            success: function (response) {

                //to refresh after edit
                read();
            }
        });
    }




});