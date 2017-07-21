import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
	isReviewFormVisible:false,
	actions:{
		showReviewForm(){
			this.set('isReviewFormVisible', true);
		},
		cancel(){
			this.set('isReviewFormVisible', false);
		},
		createReview(){
			var today = moment().format('YYYY-MM-DD-HH-mm-ss');
			var params = {
				title: this.get('title'),
				rating: this.get('rating'),
				message: this.get('message'),
				date_created: today,
				restaurant:this.get('restaurant'),
				author: this.get('author')
			};
			this.sendAction('createReview', params);
			this.setProperties({'isReviewFormVisible':false,'title':'','rating':'','message':''});
		}
	}
});


	// title: DS.attr(),
	// rating:DS.attr(),
	// message:DS.attr(),
	// date_created:DS.attr(),
	// restaurant: DS.belongsTo('restaurant', {async:true})