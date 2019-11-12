const uuidv1 = require("uuid/v1");
exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("usersCalendars")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("usersCalendars").insert([
				{ userId: 1, calendarId: 1, uuid: uuidv1() }
			]);
		});
};
