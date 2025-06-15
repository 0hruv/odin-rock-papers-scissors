playGame();

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

function getHumanChoice(a){
    let choice = prompt("Round " + a + '\n' + "Your Turn: ").toLowerCase();

    return choice;
}

function playRound(a){
    
    let humanchoice = getHumanChoice(a);
    let computerchoice = getComputerChoice();

    alert("Computer: "+ computerchoice);

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

function playGame()
{
    let round = 1;

    let humanscore = 0;
    let computerscore = 0;

    while(round <= 5)
    {
        let winner = playRound(round);

        if(winner== 1)
        {
            computerscore++;
        }

        else if(winner == 2)
        {
            humanscore++;
        }

        else if(winner == -1)
        {
            alert("Improper Input");
            round --;
        }

        round++;
    }

    if (humanscore> computerscore)
    {
        alert("You win!");
    }

    else if (computerscore>humanscore)
    {
        alert("Computer wins");
    }

    else{
        alert("It's a tie!");
    }
}