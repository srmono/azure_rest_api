// while 
//var i =0;
// while(i <= 10){
//     console.log(i);
//     i++;
// }
// do while
// do{
//     console.log(i);
//     i++
// } while( i< 10);
// for 
// for( var i = 0; i <= 10; i++){
//     console.log(i)
// }

var tools = ["js", "java", 'react', 'spring'];
// var toolslen = tools.length;
// for(var i = 0; i < toolslen; i++){
//     console.log(tools[i])
// }

// for of 
// for(tool of tools){
//     console.log(tool)
// }

// for in 
// for(tool in tools){
//     console.log(tools[tool])
// }

var person = {
    name: "venkat",
    profession: "training",
    address: {
        city: "bangalore"
    }
}

person.address.city;
person.name = "sajith";
// person[prop];
//prop: definition

for( prop in person){
    console.log(prop +' : '+person[prop])
}












