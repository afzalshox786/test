
// let box = document.querySelector('.box'),
// btn = document.querySelector('button'),
// qabul = document.querySelector('.qabul');

// btn.addEventListener('click', () => {
// box.classList.add('tugma'); 
// box.style.background='black';
// })


// qabul.addEventListener('click' , () =>{
// box.classList.remove('tugma');
// })



//  var ozgaruvchi=12;
//  let zamonaviyOzgaruvchi = aaaaaaaaaaaaaaaaaaaaaa;
//  const ozgarmaydi ="ism ABUUU";

//  console.log(ozgarmaydi);
//  console.log( ozgaruvchi);
//  console.log(zamonaviyOzgaruvchi);
//  document.write(ozgarmaydi);
//  alert(ozgarmaydi)

// cgg
// prompt("Kdni ayting");
//  prompt("saitni nechi baxoda baxolisiz");
//  prompt("isminmgizniu kiriting"); let lorem="loremoooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooOOOOOOOOOOOOOOOOOOOOOOOOOOOOOoooooooooooooooooooooooooooooOOOOOOOOOOOOOOOOOooooooooooooooooOOOOOOOOOOOOOOoooooooooooOOOOOOOOOOOOoooooooooooOOOOOOOOOOOOooooooooooOOOOOOOOOOOoooooooooooOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOooooooooooooooooooooooooo";
// console.log(lorem); 

// let nameIsm = 'Asadbek';
// console.log(nameIsm);

// let times = 10;



// hhhh
// if(times == 7){
//     console.log('nonushta');
// }else if(times == 12){
//     console.log('abet');
// }else if(times == 18){
//     console.log('kechki nonushta');
// }else if(times == 21){
//     console.log('dars qil');
// }
// else {console.log('boshqa vaqt');}


// kkk
// let answer = prompt("");
// console.log(answer);

// YUZ
// let age = 100;
// if(age >= 18){console.log("balog'at");   }
// else if(age < 18 ){console.log('yoshsiz');}
// else{console.log('raqam emas');}

// svetafor
// let age = "yashil";
// if(age == "qizil"){document.write("to'xtang");   }
// else if(age == "sariq" ){document.write("tayyorboling");}
// else if(age == "yashil" ){document.write("yuring");}
//  else{document.write('svet yo\'q');}

//  pagoda
// let age = 50 ;
// if(age < 0){document.write("sharf");}
// else if(age >= 0  && age < 18){document.write("kastyum shim");}
// else if(age >= 18 && age < 39){document.write("yengil kiyim");}
// else if(age >= 40 && age < 49){document.write("uydan chiqmang");}
// else if(age >= 50){document.write("pagoda ishlamayapti");} 
 
// 123456789
// for(let i = 2; i < 15; i+=2 ){
//  console.log(i);}


// so'raydi
// const answer={
//     news:{}
// }


// for(let i = 0; i < 1; i++){
//     const a =prompt("Qanday yangilik ko'rdingiz"),
// b =+prompt("nechta yangilik ko'rdingiz")

//     answer.news[a]=b;
//     if(a !='' && a != null && b != '' && b != null ){
//         console.log('tayyor');
//     }else{
//         console.log('eror');
//         i--;
//     }
// }

// sanaydi qadamni
// function qoshish(a,b){
// console.log(a+b);}
// qoshish(555,555);

// window.addEventListener('scroll',() => {
//     console.log('skrol bolyapti');
// });

//  123
// const person = {name: 'Uchqun', age: 25,kasbi: 'pragramist'};
// console.log(person);

// const colors =['red','grid','blue'];
// console.log(colors[0])

     00000
// x=o
// var playerTurn, moves, isGameOver, span, restartButton;  
//  playerTurn = "x";  
//  moves = 0;  
//  isGameOver = false;  
//  span = document.getElementsByTagName("span");  
//  restartButton = '<button onclick="playAgain()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16"><path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"/><path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"/></svg></button>';  
//  function play(y){  
//       if (y.dataset.player=="none" && window.isGameOver == false) {  
//            y.innerHTML = playerTurn;  
//            y.dataset.player = playerTurn;  
//            moves++;  
//            if (playerTurn=="x") {  
//                 playerTurn="o";  
//            } else if (playerTurn=="o") {  
//                 playerTurn="x"  
//            }  
//       }  
//       checkWinner(1,2,3);  
//       checkWinner(4,5,6);  
//       checkWinner(7,8,9);  
//       checkWinner(1,4,7);  
//       checkWinner(2,5,8);  
//       checkWinner(3,6,9);  
//       checkWinner(1,5,9);  
//       checkWinner(3,5,7);  
//       if (moves == 9 && isGameOver == false) {draw();}  
//  }  
//  function checkWinner(a, b, c) {  
//       a--; b--; c--;  
//       if (  
//            (span[a].dataset.player === span[b].dataset.player) &&  
//            (span[b].dataset.player === span[c].dataset.player) &&  
//            (span[a].dataset.player === span[c].dataset.player) &&  
//            ((span[a].dataset.player === "x") || span[a].dataset.player == "o")&&  
//            isGameOver == false  
//       ) {  
//            span[a].parentNode.className += " activeBox";  
//            span[b].parentNode.className += " activeBox";  
//            span[c].parentNode.className += " activeBox";  
//            gameOver(a);  
//       }  
//  }  
//  function playAgain(){  
//       document.getElementsByClassName("alert")[0].parentNode.removeChild(document.getElementsByClassName("alert")[0]);  
//       resetGame();  
//       window.isGameOver = false;  
//       for(var k =0; k<span.length; k++){  
//            span[k].parentNode.className= span[k].parentNode.className.replace("activeBox", "");//remove activebox class; you can use classlist.remove , but it doesn't support all browsers  
//       }  
//  }  
//  function resetGame(){  
//       for (i=0; i<span.length; i++){  
//            span[i].dataset.player = "none";  
//            span[i].innerHTML = "&nbsp;"  
//       }  
//       playerTurn = "x";  
//  }  
//  function gameOver(a){  
//       var gameOverAlertElement = "<b>GAME OVER</b><br><br> Player " + span[a].dataset.player.toUpperCase() + ' Win !!! <br><br>' + restartButton  
//       var div = document.createElement("div");  
//       div.className = "alert";  
//       div.innerHTML = gameOverAlertElement;  
//       document.getElementsByTagName("body")[0].appendChild(div);  
//       window.isGameOver = true;  
//       moves = 0;  
//  }  
//  function draw(){  
//       var drawAlertElement = '<b>DRAW!!!</b><br><br>' + restartButton;  
//       var div = document.createElement("div");  
//       div.className = "alert";  
//       div.innerHTML = drawAlertElement;  
//       document.getElementsByTagName("body")[0].appendChild(div);  
//       window.isGameOver = true;  
//       moves = 0;  
//  }  


const display1El = document.querySelector(".display-1");  
const display2El = document.querySelector(".display-2");  
const tempResultEl = document.querySelector(".temp-result");  
const numbersEl = document.querySelectorAll(".number");  
const operationEl = document.querySelectorAll(".operation");  
const equalEl = document.querySelector(".equal");  
const clearAllEl = document.querySelector(".all-clear");  
const clearLastEl = document.querySelector(".last-entity-clear");  
let dis1Num = "";  
let dis2Num = "";  
let result = null;  
let lastOperation = "";  
let haveDot = false;  
numbersEl.forEach((number) => {  
 number.addEventListener("click", (e) => {  
  if (e.target.innerText === "." && !haveDot) {  
   haveDot = true;  
  } else if (e.target.innerText === "." && haveDot) {  
   return;  
  }  
  dis2Num += e.target.innerText;  
  display2El.innerText = dis2Num;  
  // console.log();  
 });  
});  
operationEl.forEach((operation) => {  
 operation.addEventListener("click", (e) => {  
  if (!dis2Num) return;  
  haveDot = false;  
  const operationName = e.target.innerText;  
  if (dis1Num && dis2Num && lastOperation) {  
   mathOperation();  
  } else {  
   result = parseFloat(dis2Num);  
  }  
  clearVar(operationName);  
  lastOperation = operationName;  
  console.log(result);  
 });  
});  
function clearVar(name = "") {  
 dis1Num += dis2Num + " " + name + " ";  
 display1El.innerText = dis1Num;  
 display2El.innerText = "";  
 dis2Num = "";  
 tempResultEl.innerText = result;  
}  
function mathOperation() {  
 if (lastOperation === "x") {  
  result = parseFloat(result) * parseFloat(dis2Num);  
 } else if (lastOperation === "+") {  
  result = parseFloat(result) + parseFloat(dis2Num);  
 } else if (lastOperation === "-") {  
  result = parseFloat(result) - parseFloat(dis2Num);  
 } else if (lastOperation === "/") {  
  result = parseFloat(result) / parseFloat(dis2Num);  
 } else if (lastOperation === "%") {  
  result = parseFloat(result) % parseFloat(dis2Num);  
 }  
}  
// operation();  
equalEl.addEventListener("click", () => {  
 if (!dis2Num || !dis1Num) return;  
 haveDot = false;  
 mathOperation();  
 clearVar();  
 display2El.innerText = result;  
 tempResultEl.innerText = "";  
 dis2Num = result;  
 dis1Num = "";  
});  
clearAllEl.addEventListener("click", () => {  
 dis1Num = "";  
 dis2Num = "";  
 display1El.innerText = "";  
 display2El.innerText = "";  
 result = "";  
 tempResultEl.innerText = "";  
});  
clearLastEl.addEventListener("click", () => {  
 display2El.innerText = "";  
 dis2Num = "";  
});  
window.addEventListener("keydown", (e) => {  
 if (  
  e.key === "0" ||  
  e.key === "1" ||  
  e.key === "2" ||  
  e.key === "3" ||  
  e.key === "4" ||  
  e.key === "5" ||  
  e.key === "6" ||  
  e.key === "7" ||  
  e.key === "8" ||  
  e.key === "9" ||  
  e.key === "."  
 ) {  
  clickButtonEl(e.key);  
  // console.log(e.key)  
 } else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {  
  clickOperation(e.key);  
 } else if (e.key === "*") {  
  clickOperation("x");  
  // console.log(e.key)  
 } else if (e.key == "Enter" || e.key === "=") {  
  clickEqual();  
 }  
 // console.log(e.key)  
});  
function clickButtonEl(key) {  
 numbersEl.forEach((button) => {  
  if (button.innerText === key) {  
   button.click();  
  }  
 });  
}  
function clickOperation(key) {  
 operationEl.forEach((operation) => {  
  if (operation.innerText === key) {  
   operation.click();  
  }  
 });  
}  
function clickEqual() {  
 equalEl.click();  
}  

