// JavaScript Document
let getRandomRGB = function(){
	let r = Math.round(Math.random() * 255);
	let g = Math.round(Math.random() * 255);
	let b = Math.round(Math.random() * 255);
	return "rgb("+r+","+g+","+b+")"; 
}

let rgb = getRandomRGB();
//let backColor = document.querySelector("html").style.backgroundColor;
let backColor = "wheat";
console.log("back",backColor, typeof backColor, backColor.length);
let header = document.querySelector("#rgb");
let success = document.querySelector("#success");
header.textContent = rgb;

let boxes = document.getElementsByClassName("box");
let trueIndex = Math.round(Math.random() * boxes.length);
console.log(boxes.length);
for(let index=0; index<boxes.length; index++){
	if (index===trueIndex){
		boxes[index].style.backgroundColor = rgb;
		boxes[index].addEventListener("click",() => {
			success.textContent = "Correct!";
			let top = document.querySelector("h1");
			top.style.backgroundColor = rgb;
			for(let box of boxes){
				box.style.backgroundColor = rgb;
				//box.hidden = false;
				
				box.removeEventListener("click",box.eventHandlerMethod);
			}
		});
	} else{
		let x = getRandomRGB();
		boxes[index].style.backgroundColor = x;
		boxes[index].eventHandlerMethod = event => {
			success.textContent = "Try Again";
			//event.target.hidden = true;
			event.target.style.backgroundColor = backColor;
		}
		boxes[index].addEventListener("click", boxes[index].eventHandlerMethod);
		console.log(index,x);
	}
}