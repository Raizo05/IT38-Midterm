//document.getElementsByName('in')[0].value
function btnclick(x){
	document.getElementById('in').value+=x;
}
function equ(){
	var x = document.getElementById('in').value;
	document.getElementById('in').value = eval(x);
}
function clr(){
	document.getElementById('in').value="";
}
function del(){
	let x = document.getElementById('in').value;
	let y = "";
	for (let i = 0; i<x.length-1; i++){
		y+=x[i];
	}
	document.getElementById('in').value = y;
}
