const uuidv1 = require("uuid/v1");
exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("calendars")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("calendars").insert([
				{
					userId: 1,
					calendarName: "Team Calendar",
					isPrivate: 1,
					uuid: uuidv1()
				}
			]);
		});
};
