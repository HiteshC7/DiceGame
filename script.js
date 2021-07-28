var randomnumber1=Math.floor(Math.random()*6)+1;
var first=document.querySelectorAll("img")[0];
first.setAttribute("src","images/dice"+randomnumber1+".png");
var randomnumber2=Math.floor(Math.random()*6)+1;
var second=document.querySelectorAll("img")[1];
second.setAttribute("src","images/dice"+randomnumber2+".png");
if(randomnumber1>randomnumber2)
{
    var temp=document.querySelector("h2");
    temp.innerHTML="🚩Player 1 wins!";
}
else
{
    if(randomnumber1<randomnumber2)
    {
        document.querySelector("h2").innerHTML="🚩Player 2 wins!";
    }
    else
    {
        document.querySelector("h2").innerHTML="Draw!";
    }
}
