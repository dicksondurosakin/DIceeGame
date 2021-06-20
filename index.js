var randomNumber1 = Math.floor(Math.random()*6+1)
var randomNumber2 = Math.floor(Math.random()*6+1)
// var dice = "images/dice"+(randomNumber)+".png"
// console.log(dice)
document.querySelector(".img1").setAttribute("src","images/dice"+(randomNumber1)+".png")
document.querySelector(".img2").setAttribute("src","images/dice"+(randomNumber2)+".png")
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player1 Wins"
}else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player2 Wins🚩"
} else if (randomNumber1 = randomNumber2) {
    document.querySelector("h1").textContent = "This is a Draw!"
}