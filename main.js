// https://www.tiktok.com/@jelyxaly?is_copy_url=1&is_from_webapp=v1

function pm_set(pm_id, pm_value){
	document.getElementById(pm_id).value = pm_value;
}

function pm_get(pm_id){
	return parseFloat(document.getElementById(pm_id).value);
}

function price(){
	let rating = 0;

	pm_set("price_per_view", 0.003);
	pm_set("likes_to_count", 10);
	pm_set("likes_to_price", 15);
	pm_set("comments_to_count", 3);
	pm_set("comments_to_price", 25);

	let VIEWS_1 = pm_get("view_1");
	let VIEWS_2 = pm_get("view_2");
	let VIEWS_3 = pm_get("view_3");

	let LIKES_1 = pm_get("like_1");
	let LIKES_2 = pm_get("like_2");
	let LIKES_3 = pm_get("like_3");

	let COMMENTS_1 = pm_get("comment_1");
	let COMMENTS_2 = pm_get("comment_2");
	let COMMENTS_3 = pm_get("comment_3");

	let COMMENTS_TO_COUNT = pm_get("comments_to_count");
	let COMMENTS_TO_PRICE = pm_get("comments_to_price");
	let LIKES_TO_COUNT = pm_get("likes_to_count");
	let LIKES_TO_PRICE = pm_get("likes_to_price");
	let PRICE_PER_VIEW = pm_get("price_per_view");

	let COMMENTS = COMMENTS_1 + COMMENTS_2 + COMMENTS_3;
	let VIEWS = VIEWS_1 + VIEWS_2 + VIEWS_3;
	let LIKES = LIKES_1 + LIKES_2 + LIKES_3;

	pm_set("count_comments", COMMENTS);
	pm_set("count_views", VIEWS);
	pm_set("count_likes", LIKES);
	
	let price = VIEWS * PRICE_PER_VIEW;

	LIKES_TO_COUNT /= 100;
	LIKES_TO_PRICE /= 100;
	COMMENTS_TO_COUNT /= 100;
	COMMENTS_TO_PRICE /= 100;

	if(LIKES >= VIEWS * LIKES_TO_COUNT){
		price += price * LIKES_TO_PRICE;
		rating += 4;
	}
	else{rating += 3;}

	if(COMMENTS >= LIKES * COMMENTS_TO_COUNT){
		price += price * COMMENTS_TO_PRICE;
		rating += 1;
	}

	if(rating == 5){price *= 2}
	if(rating >= 4){price *= 1.5;}
	if(rating >= 3 && rating < 4){price /= 1.5;}

	if(rating < 0)
		rating = 0

	document.getElementById("blogger_rating").value = rating + " из 5";
	document.getElementById("price_per_task").value = parseInt(price) + "р";
}