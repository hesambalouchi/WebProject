
var msg = {

    "fake-email" : "enter a valid email address!!",
    "short-username" : "this username is too short! try another one!",
    "short-password" : "this password is too short! try another one!",
    "password-confirm" : "a problem in password and confirm!",
    "taken-username" : "username is already taken! try another one!",
    "success" : "You have successfully registered!"
}

$(document).ready(function () {

    $("form").on("submit" , function (event) {

        // event.preventDefault();
        var alldata = $("form").serialize();

        $.ajax({
            url:"php/register.php",
            method:"post",
            data:alldata,
            success:function (response) {
                alert(msg[response]);

            }

        })
        window.location.href = "index.html";


    })

})