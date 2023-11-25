let randnum=Math.floor(Math.random()*6)+1;
let randimg="images/dice"+randnum+".png";
let img1 = document.querySelector(".img1");
img1.setAttribute("src",randimg);
let randnum2=Math.floor(Math.random()*6)+1;
let randimg2 = "images/dice"+randnum2+".png";
let img2 = document.querySelector(".img2");
img2.setAttribute("src",randimg2)

if(randnum>randnum2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}else if(randnum2>randnum){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML="Draw";
}