import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return this.store.findRecord('restaurant', params.restaurant_id);
	},
	actions:{
		editRestaurant(params, restaurant){
			Object.keys(params).forEach(function(key){
				if(params[key]!==undefined){
					restaurant.set(key, params[key]);
				}
			});
			restaurant.save();
			this.transitionTo('admin');
		},
		createReview(params){
			var newReview = this.store.createRecord('review',params);
			var restaurant = params.restaurant;
			restaurant.get('reviews').addObject(newReview);
			newReview.save().then(function(){
				return restaurant.save()
			});
			this.transitionTo('restaurant', restaurant);
		}
	}

});