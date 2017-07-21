import Ember from 'ember';

export default Ember.Component.extend({
	favoriteRestaurants:Ember.inject.service(),
	actions:{
		addRestaurant(restaurant){
			this.get('favoriteRestaurants').add(restaurant);
		},
		removeRestaurant(restaurant){
			this.get('favoriteRestaurants').remove(restaurant);
		}
	}
});
