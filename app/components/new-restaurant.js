import Ember from 'ember';

export default Ember.Component.extend({
	isCreateFormVisible:false,
	actions:{
		showCreateForm(){
			this.set('isCreateFormVisible', true)
		},
		cancel(){
			this.set('isCreateFormVisible', false)
		},
		create(){
			var params = {
				name: this.get('name'),
				description: this.get('description'),
				image: this.get('image'),
				longitude: parseFloat(this.get('longitude')),
				latitude: parseFloat(this.get('latitude')),
				type: this.get('type'),
				star_rating: parseInt(this.get('star_rating'))
			};
			this.sendAction('createRestaurant', params);
			this.setProperties({'isCreateFormVisible':false,'image':'','name':'','description':'','longitude':'','latitude':'','type':'','star_rating':''});
		}
	}
});