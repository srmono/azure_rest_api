// document 
var elDiv = document.createElement("div");
document.body.appendChild(elDiv);

var text = document.createTextNode("This is div element");
elDiv.appendChild(text);

elDiv.setAttribute('id', 'container');

//console.log(document.getElementById("container"))
var el = document.getElementById("container");

var els = document.getElementsByClassName("item");
console.log(els); 
//console.log(el)

//el.innerHTML;
var name = "Varada";

el.innerHTML = "<h1>Hey "+ name +" This is updated Text </h1>";

// /**  */elDiv.remove();