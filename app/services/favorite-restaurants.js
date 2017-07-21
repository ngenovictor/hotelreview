import Ember from 'ember';

export default Ember.Service.extend({
	favRestaurants:[],
	add(restaurant){
		this.get('favRestaurants').pushObject(restaurant);
	},
	remove(restaurant){
		this.get('favRestaurants').removeObject(restaurant);
	}
});
