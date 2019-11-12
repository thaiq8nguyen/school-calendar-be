const uuidv1 = require("uuid/v1");
exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("calendarsEvents")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("calendarsEvents").insert([
				{ calendarId: 1, eventId: 1, uuid: uuidv1() }
			]);
		});
};
