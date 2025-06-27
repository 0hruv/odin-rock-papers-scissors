
let totalRounds = Number(prompt("How many rounds do you want to play: "));
let round = 1;


const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    let humanChoice = button.className;
    playGame(humanChoice);
  });

  button.addEventListener("mouseenter",() =>
  {
    // button.style.width = "150px";
    button.style.backgroundColor = "steelblue";
  }
)

   button.addEventListener("mouseleave",() =>
  {
    // button.style.width = "110px";
    button.style.backgroundColor = "black";
  }

)
});



function getComputerChoice(){
    let x = Math.random()*2.999999;

    let choice; 
    
    if(x < 1)
    {
        choice = "paper";
    }

    else if(x<2){
        choice = "scissors";
    }

    else if(x<3)
    {
        choice = "rock";
    }

    return choice;
}


function playRound(a){
    
    let humanchoice = a;
    let computerchoice = getComputerChoice();

    let computerOutput = document.querySelector(".computer")
    computerOutput.textContent = computerchoice;

    let win = -1; //0 -> draw , 1 -> computer , 2->human

    if (humanchoice == computerchoice)
    {
        win = 0;
    }

    else if (humanchoice == "rock")
        {   
            if (computerchoice == "paper")
            {
                win = 1;
            }

            else 
            {
                win = 2;
            }

        }

    else if (humanchoice == "paper")
        {   
            if (computerchoice == "scissors")
            {
                win = 1;
            }

            else 
            {
                win = 2;
            }

        }

    else if (humanchoice == "scissors")
        {   
            if (computerchoice == "rock")
            {
                win = 1;
            }

            else 
            {
                win = 2;
            }

        }    

        return win;
}


let humanscore = 0;
let computerscore = 0;

function playGame(a)
{
    if (round <= totalRounds)
    {

        let roundNumber = document.querySelector(".round");
        roundNumber.textContent = `ROUND : ${round}`;

        let winner = playRound(a);

        if(winner== 1)
        {
            computerscore++;
        }

        else if(winner == 2)
        {
            humanscore++;
        }

        round++;
        
        let s = document.querySelector(".score");
        s.textContent = `SCORE : ${humanscore} - ${computerscore}`;

        if (round <= totalRounds)
        {
        roundNumber.textContent = `ROUND : ${round}`;
        }

    if (round > totalRounds)//so that the user can check their last round score 
    {
        setTimeout(() => finalResult(s), 700);
}
}
}

function finalResult(s)
{

    let result;

    if (humanscore> computerscore)
    {
        result = "You win!";
    }

    else if (computerscore>humanscore)
    {
        result = "Computer wins";
    }

    else{
        result = "It's a tie!";
    }

    s.textContent = result;
}