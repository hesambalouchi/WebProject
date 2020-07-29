$(document).ready(function(){


    $("table").on("click" , ".delete" , deleteuser);

    read();






    function read() {

        $.ajax({
            url: "php/read-comments.php",
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
                            '<td class="email">' + data[i].name + '</td>' +
                            '<td class="fullname">' + data[i].email + '</td>\n' +
                            '<td class="username">' + data[i].subject + '</td>\n' +
                            '<td class="password">' + data[i].message + '</td>\n' +
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

    




    function deleteuser() {
        var id = $(this).attr("id")


        $.ajax({
            url: "php/delete-comments.php",
            method: "post",
            data : {id:id},
            success: function (response) {

                //to refresh after edit
                read();
            }
        });
    }




});