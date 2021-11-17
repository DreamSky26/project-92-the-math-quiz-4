player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name;
document.getElementById("player2_name").innerHTML = player2_name;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send()
{
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_word = "<h4 id='word display'>" + number1 + "×" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br><button onclick='check(); colChng4CBtn();' class='btn btn-info'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}


question_turn = "player1";
answer_turn = "player2";

function check()
    {
        get_answer = document.getElementById("input_check_box").value;
        answer = get_answer;
        console.log("Answer In Lower Case - " + answer);
        if(answer == actual_answer)
        {
        if(answer_turn == "player1"){
            player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = player1_score;
            document.getElementById("score_message").innerHTML = "Good Job! That was correct, " + player1_name + "! Your score increases by 1.";
            }
            else{
                player2_score = player2_score +1;
                document.getElementById("player2_score").innerHTML = player2_score;
                document.getElementById("score_message").innerHTML = "Good Job! That was correct, " + player2_name + "! Your score increases by 1.";
            }
        }
        else{
            if(answer_turn == "player1"){
                player1_score = player1_score;
                document.getElementById("player1_score").innerHTML = player1_score;
                document.getElementById("score_message").innerHTML = "Uh-oh! That was incorrect, " + player1_name + "! Your score stays the same. Better luck next time!";
            }
                else{
                    player2_score = player2_score;
                    document.getElementById("player2_score").innerHTML = player2_score;
                    document.getElementById("score_message").innerHTML = "Uh-oh! That was incorrect, " + player2_name + "! Your score stays the same. Better luck next time!";
                } 
        }
        if(question_turn == "player1")
        {
            question_turn = "player2"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
        }
        else
        {
            question_turn = "player1"
            document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
        }
    
        if(answer_turn == "player1")
        {
            answer_turn = "player2"
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
        }
        else
        {
            answer_turn = "player1"
            document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name;
        }
        document.getElementById("output").innerHTML = "";
    }

    function colChng4LgBtn()
    {
        document.getElementById("player_answer").style.color = "rgb(33, 85, 182)";
        document.getElementById("player_answer").style.fontSize = "28px";
        document.getElementById("player_question").style.color = "black";
        document.getElementById("player_question").style.fontSize = "24px";
    }
    function colChng4CBtn()
    {
        document.getElementById("player_answer").style.color = "black";
        document.getElementById("player_answer").style.fontSize = "24px";
        document.getElementById("player_question").style.color = "rgb(33, 85, 182)";
        document.getElementById("player_question").style.fontSize = "28px";
    }