function changeDice(point1,point2)
{
    if(point1==1)
    {
        document.getElementById("img1").setAttribute("src","dice1.png");
    }
    if(point1==2)
    {
        document.getElementById("img1").setAttribute("src","dice2.png");
    }
    if(point1==3)
    {
        document.getElementById("img1").setAttribute("src","dice3.png");
    }
    if(point1==4)
    {
        document.getElementById("img1").setAttribute("src","dice4.png");
    }
    if(point1==5)
    {
        document.getElementById("img1").setAttribute("src","dice5.png");
    }
    if(point1==6)
    {
        document.getElementById("img1").setAttribute("src","dice6.png");
    }
    if(point2==1)
    {
        document.getElementById("img2").setAttribute("src","dice1.png");
    }
    if(point2==2)
    {
        document.getElementById("img2").setAttribute("src","dice2.png");
    }
    if(point2==3)
    {
        document.getElementById("img2").setAttribute("src","dice3.png");
    }
    if(point2==4)
    {
        document.getElementById("img2").setAttribute("src","dice4.png");
    }
    if(point2==5)
    {
        document.getElementById("img2").setAttribute("src","dice5.png");
    }
    if(point2==6)
    {
        document.getElementById("img2").setAttribute("src","dice6.png");
    }
}

function throughDice()
{
    var random_for_player1= Math.floor(Math.random()*(7-1)+1);
    var random_for_player2= Math.floor(Math.random()*(7-1)+1);
    if(random_for_player1>random_for_player2)
    {
        document.getElementById("dicetitlehead").innerHTML="PLAYER 1 WIN ";
        changeDice(random_for_player1,random_for_player2)
    }
    if(random_for_player1<random_for_player2)
    {
        document.getElementById("dicetitlehead").innerHTML="PLAYER 2 WIN ";
        changeDice(random_for_player1,random_for_player2)

    }
    if(random_for_player1==random_for_player2)
    {
        document.getElementById("dicetitlehead").innerHTML="MATCH DRAW";
        changeDice(random_for_player1,random_for_player2)
    }
}
function resetDice()
{
    document.getElementById("img1").setAttribute("src","dice6.png");   
    document.getElementById("img2").setAttribute("src","dice6.png");
    document.getElementById("dicetitlehead").innerHTML="THE DICE GAME";
}
function audioDice()
{
    document.getElementById("audio").play();
}