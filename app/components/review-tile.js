import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		createReview(params){
			this.sendAction('createReview', params);
		}
	}
});
