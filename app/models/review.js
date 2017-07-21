import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
	title: DS.attr(),
	author: DS.attr(),
	rating:DS.attr(),
	message:DS.attr(),
	date_created:DS.attr(),
	restaurant: DS.belongsTo('restaurant', {async:true})

});
