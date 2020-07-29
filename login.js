$(document).ready(function(){

    $("form").on("submit", function(event){
        event.preventDefault();

        var allData = $("form").serialize();

        $.ajax({
            url: "php/login.php",
            method: "post",
            data: allData,
            success: function(response) {

                if(response!=0){
                window.location.href = "Quiz.html";
                }

                else alert("wrong user or password")
            }
        })
    })

})









function quiz(){

    var num = document.getElementById("test").children.length;
    num = num - 1;
    var answers = [];
    var correct = ["ch1","ch2","ch3"];
    var score = 0;

    var ans = document.getElementsByTagName("input")

    for(i=0; i<ans.length; i++){

        if(ans[i].checked){

            answers.push(ans[i].value);

        }
    }

    for(i = 0; i<num; i++){
        if(!answers[i].localeCompare(correct[i])){
            score = score + 1;
        }
    }

    alert("You Got: " + score + " out of: " + num + " !")

    $.ajax({
        url: "php/create.php",
        method: "post",
        data: {mark:score},
        success: function (response) {
            console.log(response);
            if (response == '1'){
                alert('Done');

            }
            else {
                alert('You have done this test once');
            }

        }
    });
    window.location.href = "index.html";


}




