function price(){
	let price = 0;
	let rating = 0;

	let VIEWS_1 = parseFloat(document.getElementById("view_1").value);
	let VIEWS_2 = parseFloat(document.getElementById("view_2").value);
	let VIEWS_3 = parseFloat(document.getElementById("view_3").value);

	let LIKES_1 = parseFloat(document.getElementById("like_1").value);
	let LIKES_2 = parseFloat(document.getElementById("like_2").value);
	let LIKES_3 = parseFloat(document.getElementById("like_3").value);

	let COMMENTS_1 = parseFloat(document.getElementById("comment_1").value);
	let COMMENTS_2 = parseFloat(document.getElementById("comment_2").value);
	let COMMENTS_3 = parseFloat(document.getElementById("comment_3").value);

	let PRICE_PER_VIEW = parseFloat(document.getElementById("price_per_view").value);
	let SUBSCRIBERS = parseFloat(document.getElementById("subscribers").value);
	let LIKES_TO_COUNT = parseFloat(document.getElementById("likes_to_count").value);
	let LIKES_TO_PRICE = parseFloat(document.getElementById("likes_to_price").value);

	let COMMENTS_TO_COUNT = parseFloat(document.getElementById("comments_to_count").value);
	let COMMENTS_TO_PRICE = parseFloat(document.getElementById("comments_to_price").value);

	let SUBSCRIBERS_TO_ALL = parseFloat(document.getElementById("subscribers_to_all").value);

	let VIEWS = VIEWS_1 + VIEWS_2 + VIEWS_3;
	let LIKES = LIKES_1 + LIKES_2 + LIKES_3;
	let COMMENTS = COMMENTS_1 + COMMENTS_2 + COMMENTS_3;

	document.getElementById("count_views").value = VIEWS;
	document.getElementById("count_likes").value = LIKES;
	document.getElementById("count_comments").value = COMMENTS;

	price = VIEWS * PRICE_PER_VIEW;

	if(LIKES >= (VIEWS / 100) * LIKES_TO_COUNT)
		price += (price / 100) * LIKES_TO_PRICE;
	else 
		price -= (price / 100) * LIKES_TO_PRICE;

	if(COMMENTS >= (VIEWS / 100) * COMMENTS_TO_COUNT)
		price += (price / 100) * COMMENTS_TO_PRICE;
	else 
		price -= (price / 100) * COMMENTS_TO_PRICE;


	if((SUBSCRIBERS / 100) * SUBSCRIBERS_TO_ALL <= (VIEWS / 100) * SUBSCRIBERS_TO_ALL) 
		rating += 1;

	if(COMMENTS >= (VIEWS / 100) * COMMENTS_TO_COUNT)
		rating += 2.5;
		
	if(LIKES >= (VIEWS / 100) * LIKES_TO_COUNT)
		rating += 1.5;

	if(rating < 0)
		rating = 0

	document.getElementById("blogger_rating").value = rating + " из 5";
	document.getElementById("price_per_task").value = parseInt(price) + "р";
}