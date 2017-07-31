
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var toupper = alphabet.toUpperCase();
var splitalphabet = toupper.split('')
splitalphabet.forEach(myAlphabet);
console.log(splitalphabet)

function myAlphabet(item) {

    var element = document.getElementById("beta");


    var para = document.createElement("p");
    para.setAttribute("class","available");
    
    
    var node = document.createTextNode(item);
    para.appendChild(node);
    element.appendChild(para);
 					
    }


document.getElementById("submitletter").addEventListener("click",function(){

    var myletter = document.getElementById("typeletter").value;
    letterSearch(myletter);
    });

function letterSearch(myletter) {
	console.log(myletter);
	
    var arr = document.getElementsByClassName("available");

    for (var i = 0; i < arr.length; i++) {
    	if (arr[i].innerHTML === myletter){
    	console.log(arr[i])
    	arr[i].style.color = "orange";
		}
    }

    var arr2 = document.getElementsByClassName("ltrs");
    var howMany = 0;

    for (var i = 0; i < arr2.length; i++) {
        if (arr2[i].innerHTML === myletter){
        console.log(arr2[i]);
        arr2[i].style.color = "black";
        var howMany = howMany + 1;
        console.log(howMany);
        } else{
        
        }
    }
    var points = howMany * spin.innerHTML;
    console.log(points);
}






var word = "GUESSTHISWORD";
var splitword = word.split('');
splitword.forEach(guessWord);
console.log(splitword);

for (var i = 0; i < splitword.length; i++) {
	console.log(splitword[i])

}

function guessWord(item) {

    var element = document.getElementById("container");


    var para = document.createElement("p");
    para.setAttribute("class","ltrs");
    
    
    var node = document.createTextNode(item);
    para.appendChild(node);
    element.appendChild(para);
 					
    }

var spin = document.getElementById("spin");
function spinWheel() {
    
    spin.innerHTML = Math.floor((Math.random() * 100) + 1);
    return spin.innerHTML;
}


class Game {
    constructor (){
        
    }

    beginGame() {
    var person = prompt("Please enter your name");
    if (person != null) {
        document.getElementById("player").innerHTML =
        "Hello " + person + "! Good Luck!!";
        }
    }


   
}

var game = new Game();




 function reload() {
    location.reload();
}

function seeRules() {
    document.getElementById("rules").addEventListener("click", rules.style.visibility = "visible")
}


