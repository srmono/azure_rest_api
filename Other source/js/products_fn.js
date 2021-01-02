var products = [
	{
		img: "headphone.jpg",
		name: "headphone",
		offer: 50,
		brand: "jbl",
	},
	{
		img: "headphone.jpg",
		name: "shirt",
		offer: 500,
		brand: "LP",
	},
	{
		img: "headphone.jpg",
		name: "Shoe",
		offer: 5000,
		brand: "Lee",
	},
	{
		img: "headphone.jpg",
		name: "watch",
		offer: 5000,
		brand: "Rolex",
	},
	{
		img: "headphone.jpg",
		name: "watch",
		offer: 5000,
		brand: "Rolex",
	},
	{
		img: "headphone.jpg",
		name: "watch",
		offer: 5000,
		brand: "Rolex",
	},
	{
		img: "headphone.jpg",
		name: "watch",
		offer: 5000,
		brand: "Rolex",
	}
];

var topdeals = [
	{
		img: "headphone.jpg",
		name: "headphone",
		offer: 50,
		brand: "jbl",
	},
	{
		img: "headphone.jpg",
		name: "shirt",
		offer: 500,
		brand: "LP",
	},
	{
		img: "headphone.jpg",
		name: "Shoe",
		offer: 5000,
		brand: "Lee",
	},
	{
		img: "headphone.jpg",
		name: "watch",
		offer: 5000,
		brand: "Rolex",
	},
	{
		img: "headphone.jpg",
		name: "watch",
		offer: 5000,
		brand: "Rolex",
	},
	{
		img: "headphone.jpg",
		name: "watch",
		offer: 5000,
		brand: "Rolex",
	}
];

function displayProducts(data, el, title) {
	var proEl = document.getElementById(el);
	var output = "<h1>"+ title +"<h1>";

	for(product of data){
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

displayProducts(products, "products", "Deals of the day");
displayProducts(topdeals, "topdeals", "Top Deals");

