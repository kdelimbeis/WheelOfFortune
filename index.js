var words = ["ubiquitous","omnipotent","malcontent","silhouette","recognizance","reparations","inconsequential","valedictory","Metamorphosis","benevolent"]
var wordsUpper = [];
for (var i = 0; i < words.length; i++) {
   wordsUpper[i] = words[i].toUpperCase();
}

var randomValue = wordsUpper[Math.floor(Math.random() * wordsUpper.length)];
console.log(randomValue)
var points = 0;
var guess = 4;

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
    var letter = document.getElementById("typeletter").value;
    var myletter = letter.toUpperCase();
    if (myletter.length > 1){
        myletter = myletter[0]
        }
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
    if (splitword.indexOf(myletter) > -1) {
        for (var i = 0; i < arr2.length; i++) {
            if (arr2[i].innerHTML === myletter){
            console.log(arr2[i]);
            arr2[i].style.color = "black";
            var howMany = howMany + 1;
            console.log(howMany);
            }
        }
    } else{
        if (guess === 4) {
            alert("you have 4 guesses remaining")
            guess -= 1
        } else if (guess === 3) {
            alert("your have 3 guess remaining")
            guess -= 1
        } else if (guess === 2) {
            alert("your have 2 guess remaining")
            guess -= 1
        } else if (guess === 1) {
            alert("your have 1 guess remaining")
            guess -= 1
        } else {
            alert("wrong, game over for you")
            reload();
            alert("Begin new game...")
        }
    }

    points += howMany * spin.innerHTML;
    console.log(points);
   
     return score.innerHTML= points;
}




var word = randomValue;
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
    var rules = document.getElementById('rules');
    if (rules.style.display === 'none') {
        rules.style.display = 'inline-block';
    } else {
        rules.style.display = 'none';
    }
}

