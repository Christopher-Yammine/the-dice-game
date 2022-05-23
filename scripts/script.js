
    var firstDice= document.getElementsByClassName("img1")[0];
    var secondDice=document.getElementsByClassName("img2")[0];
    var dice1="./assets/dice1.png";
    var dice2="./assets/dice2.png";
    var dice3="./assets/dice3.png";
    var dice4="./assets/dice4.png";
    var dice5="./assets/dice5.png";
    var dice6="./assets/dice6.png";
    var dices=[dice1,dice2,dice3,dice4,dice5,dice6];
    
    var randomDice1=Math.floor(Math.random() * 5) + 1;
    var randomDice2=Math.floor(Math.random() * 5) + 1;

    firstDice.src=dices[randomDice1];
    secondDice.src=dices[randomDice2];
    if (randomDice1<randomDice2){
        document.getElementsByTagName('h1')[0].innerHTML="Player 2 won!"
    }
    else if (randomDice1>randomDice2){
        document.getElementsByTagName('h1')[0].innerHTML="Player 1 won!"
    }
    else {
        document.getElementsByTagName('h1')[0].innerHTML="Draw!"
    }
    