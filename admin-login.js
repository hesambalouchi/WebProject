$(document).ready(function(){

    $("form").on("submit", function(event){
        event.preventDefault();

        var allData = $("form").serialize();

        $.ajax({
            url: "php/admin-login.php",
            method: "post",
            data: allData,
            success: function(response) {

                if(response!=0){
                window.location.href = "admin-menu.html";
                $.ajax({
                    url: "php/admin-ent-log.php",
                    method: "post",
                    data: allData,
                    success: function(response) {

                    }
                })
                }

                else alert("wrong user or password")
            }
        })
    })

})











