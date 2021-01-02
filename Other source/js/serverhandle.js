function handleAjax(url, callback, method, title, el){
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          callback(this.responseText, title, el);
        }
    };
    http.open(method, url );
    http.send()
}

function processProducts(data, title, el){
    var proEl = document.getElementById(el);
	var output = "<h1>"+ title +"<h1>";

    var dataObj = JSON.parse(data)

	for(product of dataObj){
		//console.log(product.img)
		output += "<div class='prod'>" +
						"<img class='img' src='"+product.img+"'>"+
						"<h3 class='title'>"+product.name+"</h3>"+
						"<div class='cat'>"+product.brand+"</div>"+
						"<div class='price'>"+product.offer+"</div>" +
			      "</div>";
	}
	output += "<div class='clear'></div>"

	proEl.innerHTML = output;
}

var api = "https://jsonplaceholder.typicode.com/todos";

// handleAjax(api, processProducts, "GET", "todays offers", "products");
handleAjax("products.json", processProducts, "GET", "todays offers", "products");
handleAjax("offers.json", processProducts, "GET", "suggstions for user", "topdeals");


// backup
    // var http = new XMLHttpRequest();
    // http.onreadystatechange = function() {
    //     if (this.readyState == 4 && this.status == 200) {
    //         var data = JSON.parse(this.responseText);
    //         var el = document.getElementById("ajaxel");

    //         for( p of data){
    //             el.innerHTML +="<p>"+ p.name +"</p>";
    //         }

    //       //console.log(this.responseText)
    //     }
    // };
    // http.open("GET","products.json");
    // http.send()