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

    for(i=0; i<num; i++){
        if(!answers[i].localeCompare(correct[i])){
            score = score + 1;
        }
    }


    alert("You Got: " + score + " out of: " + num + " !")
}

