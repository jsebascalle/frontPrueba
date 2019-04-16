jQuery(document).ready(function($) {
	
	$.getJSON("../sitioWeb/zapato.json", function( data ) {
	  var items = "";
	  $.each( data, function( key, val ) {
	    items += "<div class='owl-product-item' id='item-" + data[key].referencia + "'><div class='product-img'><img class='img-fluid' src='/sitioWeb/img/"+data[key].foto+"' /></div><h4>" + data[key].nombre + "</h4><h4 class='product-price'>$" + data[key].precio + "</h4><button type='button' class='add-cart btn-block'>AÑADIR AL CARRITO</button></div>";
	  });
	 
	  $("#recommended-products").html(items);
	}).done(function() {
	    
	    $("#recommended-products").owlCarousel({
		    loop:true,
		    margin:10,
		    autoHeight:true,
		    autoplay:true,
		    responsive:{
		        0:{
		            items:1
		        },
		        600:{
		            items:3
		        },
		        1000:{
		            items:5
		        }
		    }
	    });
	});
});

$(".product-thumbnails .owl-carousel").owlCarousel({items:6});