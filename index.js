
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
}






var word = "guessthisword";
var splitword = word.split('');
splitword.forEach(myFunction);
console.log(splitword);

for (var i = 0; i < splitword.length; i++) {
	console.log(splitword[i])

}

function myFunction(item) {

    var element = document.getElementById("container");


    var para = document.createElement("p");
    para.setAttribute("class","ltrs");
    
    
    var node = document.createTextNode(item);
    para.appendChild(node);
    element.appendChild(para);
 					
    }