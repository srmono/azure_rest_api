var p1 = document.getElementById('parent1');
var p2 = document.getElementById('parent2');

var c1 = document.getElementById('child1');
var c2 = document.getElementById('child2');

var anc = document.getElementById("anc");

function one(e){
    console.log("one")
}

function two(e){
    console.log("two");
    e.stopImmediatePropagation();
}

function three(e){
    e.preventDefault();
    console.log("three")
}

anc.addEventListener("click", three)

p1.addEventListener("click", one); //dev
p1.addEventListener("click", two); // pm
p1.addEventListener("click", three); //pl

// function fn1(ev){
//     //console.log(ev.target)
//     console.log(ev.currentTarget)
//     //ev.stopPropagation();
//     //console.log("This is parent element")
// }

// function fn2(ev){
//     ev.stopPropagation();    
//     console.log("This is child element")
// }
// //Bydefault it is bubbling phase
// // true: capturing phase

// p1.addEventListener("click", fn1); 
// //c1.addEventListener("click", fn2);

// p2.addEventListener("click", fn1);
// c2.addEventListener("click", fn2);