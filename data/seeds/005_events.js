const uuidv1 = require("uuid/v1");
exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("events")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("events").insert([
				{
					eventName: "Manta Rays Vs. Sea Kings",
					eventInfo: "Soccer Match",
					startDate: "2019-11-21",
					endDate: "2019-11-21",
					startTime: "2019-11-11T19:17:02+00:00",
					endTime: "2019-11-11T21:17:02+00:00",
					isFullDayEvent: 0,
					isRecurringEvent: 0,
					uuid: uuidv1()
				}
			]);
		});
};
