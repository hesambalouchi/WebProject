$(document).ready(function(){



    read();



    function read() {

        $.ajax({
            url: "php/read-admin-logs.php",
            method: "get",
            success: function (response) {
                var data = JSON.parse(response);
                var items = "";
                var row = 1;
                if (data.length>0) {
                    for (var i in data) {
                        items += '<tr>\n' +
                            '<td>' + row + '</td>\n' +
                            '<td class="editable email">' + data[i].user + '</td>' +
                            '<td class="editable fullname">' + data[i].secret_key + '</td>\n' +
                            '<td class="editable username">' + data[i].last_login + '</td>\n' +

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