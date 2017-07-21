import Ember from 'ember';

export default Ember.Component.extend({
	isEditFormVisible:false,
	actions:{
		edit(){
			this.set('isEditFormVisible', true);
		},
		cancel(){
			this.set('isEditFormVisible', false);
		},
		editDetails(restaurant){
			var params = {
				name: this.get('name'),
				description: this.get('description'),
				image: this.get('image'),
				longitude: this.get('longitude'),
				latitude: this.get('latitude'),
				type: this.get('type'),
				star_rating: this.get('star_rating')
			};
			this.sendAction('editRestaurant', params, restaurant)
		}
	}
});
