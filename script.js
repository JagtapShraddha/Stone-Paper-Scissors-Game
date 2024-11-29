

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    
    const options = ["stone","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];

}
const draw = () =>{
   
    
    msg.innerText = "Game is Draw. Play Again";
    msg.style.backgroundColor = "#081b31";

    
}
const showWinner = (userWin,userChoice,compChoice) =>{
   

    if(userWin === true){
       
       
        msg.innerText = `You Win! Your ${userChoice} beates ${compChoice}`;
        msg.style.backgroundColor = "green";
       
        userScore++;
        userScorePara.innerText = userScore;
        
    }
    else{
        
        msg.innerText = `You lose! ${compChoice} beates your ${userChoice}`;
        msg.style.backgroundColor = "red";
       
        compScore++;
        compScorePara.innerText = compScore;
    }
}


const playGame = (userChoice) =>{
    
    const compChoice = genCompChoice();
    console.log("Comp Choice =",compChoice);

    if(userChoice === compChoice){
        draw();

    }
    else{
        let userWin = true;
        if(userChoice === "stone"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice == "scissors" ?false : true; 
        }
        else {
            userWin = compChoice === "stone" ?false :true;
        }
        showWinner(userWin,userChoice,compChoice);
    }


}

choices.forEach((choice) =>{
   
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
       
    })
})