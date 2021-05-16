function price(){
	let price = 0;

	let VIEWS_1 = parseFloat(document.getElementById("view_1").value);
	let VIEWS_2 = parseFloat(document.getElementById("view_2").value);
	let VIEWS_3 = parseFloat(document.getElementById("view_3").value);
	let VIEWS_4 = parseFloat(document.getElementById("view_4").value);

	let LIKES_1 = parseFloat(document.getElementById("like_1").value);
	let LIKES_2 = parseFloat(document.getElementById("like_2").value);
	let LIKES_3 = parseFloat(document.getElementById("like_3").value);
	let LIKES_4 = parseFloat(document.getElementById("like_4").value);

	let PRICE_PER_VIEW = parseFloat(document.getElementById("price_per_view").value);
	let SUBSCRIBERS = parseFloat(document.getElementById("subscribers").value);
	let LIKES_TO_COUNT = parseFloat(document.getElementById("likes_to_count").value);
	// let SUBSCRIBERS_TO_COUNT = parseFloat(document.getElementById("subscribers_to_count").value);
	// let SUBSCRIBERS_TO_PRICE = parseFloat(document.getElementById("subscribers_to_price").value);
	let LIKES_TO_PRICE = parseFloat(document.getElementById("likes_to_price").value);

	let VIEWS = VIEWS_1 + VIEWS_2 + VIEWS_3 + VIEWS_4;
	let LIKES = LIKES_1 + LIKES_2 + LIKES_3 + LIKES_4;

	if(LIKES >= (VIEWS / 100) * LIKES_TO_COUNT){
		price = VIEWS * PRICE_PER_VIEW;
		price += (price / 100) * LIKES_TO_PRICE;
	} 
	else{
		price = VIEWS * PRICE_PER_VIEW;
	}

	// if(SUBSCRIBERS >= (VIEWS / 100) * SUBSCRIBERS_TO_COUNT){
	// 	price += (price / 100) * SUBSCRIBERS_TO_PRICE;
	// }

	document.getElementById("price_per_task").value = parseInt(price) + " рублей";
}