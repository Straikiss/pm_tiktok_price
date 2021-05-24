function pm_set(pm_id, pm_value){
	document.getElementById(pm_id).value = pm_value;
}

function pm_get(pm_id){
	return parseFloat(document.getElementById(pm_id).value);
}

function price(){
	let rating = 0;
	let blogger_id = 2; 

	if(blogger_id == 0){
		pm_set("view_1", 103200);
		pm_set("view_2", 277300);
		pm_set("view_3", 62800);

		pm_set("like_1", 16800);
		pm_set("like_2", 28400);
		pm_set("like_3", 10300);
	}
	if(blogger_id == 1){
		pm_set("view_1", 61400);
		pm_set("view_2", 11200);
		pm_set("view_3", 27800);

		pm_set("like_1", 10100);
		pm_set("like_2", 1063);
		pm_set("like_3", 4295);
	}

	pm_set("likes_to_count", 10);
	pm_set("likes_to_price", 25);

	let VIEWS_1 = pm_get("view_1");
	let VIEWS_2 = pm_get("view_2");
	let VIEWS_3 = pm_get("view_3");

	let LIKES_1 = pm_get("like_1");
	let LIKES_2 = pm_get("like_2");
	let LIKES_3 = pm_get("like_3");


	let LIKES_TO_COUNT = pm_get("likes_to_count");
	let LIKES_TO_PRICE = pm_get("likes_to_price");
	let PRICE_PER_VIEW = pm_get("price_per_view");

	let VIEWS = VIEWS_1 + VIEWS_2 + VIEWS_3;
	let LIKES = LIKES_1 + LIKES_2 + LIKES_3;

	pm_set("count_views", VIEWS);
	pm_set("count_likes", LIKES);
	
	let price = VIEWS * PRICE_PER_VIEW;

	LIKES_TO_COUNT /= 100;
	LIKES_TO_PRICE /= 100;

	if(LIKES >= VIEWS * LIKES_TO_COUNT){
		price += price * LIKES_TO_PRICE;
		rating += 5;
	}
	else if(LIKES >= VIEWS * 5) {
		price += price * LIKES_TO_PRICE;
		rating += 4;
	}
	else{
		rating += 3;
	}

	document.getElementById("blogger_rating").value = rating + " из 5";
	document.getElementById("price_per_task").value = parseInt(price) + "р";
}