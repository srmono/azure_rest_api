var menu = ["home", "about", "products", "categories", "contact"];

var output = '<ul class="menu">';
for(m of menu){
    output += '<li><a href="'+ m +'.html">'+ m +'</a></li>'
}
output += '</ul>';
console.log(output);

var el = document.getElementById('navigation');
el.innerHTML = output;

