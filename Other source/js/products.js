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
		brand: "LP"
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
var productsEl =  document.getElementById('products');
var output = "";

for( product of products){
	output +=   '<div class="prod">' +
					'<img class="img" src="'+ product.img+'">' +
					'<h3 class="title" >'+ product.name +'</h3>' +
					'<div class="cat">'+ product.brand +'</div>'+
					'<div class="price">'+ product.offer +'</div>'+
			    '</div>';
}

productsEl.innerHTML = output;



// var proEl = document.getElementById("products");
// proEl.innerHTML = "data";
// var output = "";

// for(product of products){
// 	//console.log(product.img)
// 	output += "<div class='prod'>" +
// 					"<img class='img' src='"+product.img+"'>"+
// 					"<h3 class='title'>"+product.name+"</h3>"+
// 					"<div class='cat'>"+product.brand+"</div>"+
// 					"<div class='price'>"+product.offer+"</div>" +
// 		      "</div>";
// }

// proEl.innerHTML = output;
