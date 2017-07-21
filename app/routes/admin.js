import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		createRestaurant(params){
			var newRestaurant = this.store.createRecord('restaurant', params);
			newRestaurant.save();
			this.transitionTo('admin');
		}
	}
});
