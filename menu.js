var moneyInWallet = 100;

$(document).ready(function(){
	// if products will be null, there is no date should be there

	if (products.length > 0) {
		// show products in the site
		// to clear products place

		$("#products-wrapper").html("");

		// put products with foreach
		products.forEach(function(item) {
			var item = 
			'<div class="col-6 col-sm-4 col-xl-4">' + 
				'<div class="whole_block">' + 
					// '<h2 class="menu-h2">' + item.category + '</h2>' +
					'<div class="card product mx-1 mb-3" data-product-price="'+item.price+'">' +
						'<img src="images/' + item.image + '" alt="Image" class="card-img-top product_image">' + 
						'<div class="card-body p-2 text-center">' +
							'<h4 class="h6 product_name text-center">' + item.title + '</h4>' +
							'<div class="product_price mb-2"> <strong>Price: </strong>$ '+ item.price + '</div>' + 
							'<div class="d-flex justify-content-between mb-2">' +
								'<button class="btn btn-default btn-sm remove-one-btn w-25">-</button>' +
								'<input type="number" class="form-control mx-1 product-quantity-input" value="1" min="1">' +
								'<button class="btn btn-default btn-sm add-one-btn w-25">+</button>' +
							'</div>' +
							'<button class="btn btn-block add_to_basket">Add to basket</button>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>';

			$("#products-wrapper").append(item);
		});	

	}

	$(".product-quantity-input").blur(function(){
		if ($(this).val() < 1) {
			alert("Item quantity should be at least 1")
			$(this).val(1);
		}
	});

	// if minus will clicked the quantity will decrease
	$(".remove-one-btn").click(function(){
		var productQuantityInput = $(this).closest(".product").find(".product-quantity-input");
		console.log(productQuantityInput);

		var productQuantity = productQuantityInput.val();

		// the user is not allowed to choose less than one product
		if (productQuantity <= 1) {
			alert("You should choose at least one product");
			return;
		}

		productQuantity--;

		productQuantityInput.val(productQuantity);


	});

	$(".add-one-btn").click(function(){
		var productQuantityInput = $(this).closest(".product").find(".product-quantity-input");
		// console.log(productQuantityInput);

		var productQuantity = productQuantityInput.val();

		// increasing number of items

		productQuantity++;

		productQuantityInput.val(productQuantity);
	});
	var total_value = 0;
	var total_qty = -1;
	var cardList = $("#basket");
	var total_value_for_next_page = [];

	$(".add_to_basket").click(function(){

		total_qty++;
		
		var product_name = $(this).siblings('.product_name').text();
		var product_price = $(this).closest(".product").data("product-price");
		var quantity = $(this).closest(".product").find(".product-quantity-input");
		var quantityProduct =  quantity.val();

		var total = product_price * quantityProduct;
		total_value += total;
		var basket_item_name = $(".basket-item_name");
		var qty = parseInt(total_qty) + parseInt(quantityProduct);

		var productAdded = '<li class="basket-item border-bottom pb-2">' + '<div class="d-flex justify-content-between">' + '<strong class="basket_item_name">'+product_name+'</strong>'+'<span><strong class="basket-item_qty">'+quantityProduct+'</strong></span>' + '</div>' + '<div class="calcs d-flex justify-content-between align-item-center">' + '<span class="basket-item_price">'+product_price+'</span>' + '</div>' + '</li>';
		cardList.append(productAdded);

		$(".basket-total-text").text(total_value);

		let msg = {
				total : total_value
			}

			total_value_for_next_page.push(msg);

			localStorage.setItem('total', JSON.stringify(total_value_for_next_page));

	});

	$("#buy-products-btn").click(function(){
		if (total_value != 0) {
		window.location.href="basket.html";
		}else{
			alert('you should buy something ;)');
		}
	});

	$("#btn-check").click(function(){
		// $("#rdbExamples:checked").val()
		var radio_value = document.querySelector('input[name="delivery"]:checked').value;
		console.log(radio_value);
		var name = document.getElementById('name').value;
		
	});


	

});