import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr(),
	description: DS.attr(),
	image: DS.attr(),
	longitude: DS.attr(),
	latitude: DS.attr(),
	type: DS.attr(),
	star_rating: DS.attr(),
});
