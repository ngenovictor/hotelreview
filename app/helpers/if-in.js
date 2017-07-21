import Ember from 'ember';

export function ifIn(params) {
	var restaurant = params[0];
	var myList = params[1].favRestaurants;
	if(myList.includes(restaurant)){
		return '<i class="fa fa-star fa-2x" {{action "removeRestaurant" restaurant}}></i>'
	}else{
		return '<i class="fa fa-star-0 fa-2x" {{action "addRestaurant" restaurant}}></i>'
	}
}

export default Ember.Helper.helper(ifIn);
