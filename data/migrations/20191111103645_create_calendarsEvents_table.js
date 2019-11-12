exports.up = function(knex) {
	return knex.schema.createTable("calendarsEvents", table => {
		table.increments("calendarsEventsId");
		table.integer("calendarId");
		table
			.foreign("calendarId")
			.references("calendarId")
			.inTable("calendars")
			.onDelete("CASCADE")
			.onUpdate("CASCADE");
		table.integer("eventId");
		table
			.foreign("eventId")
			.references("eventId")
			.inTable("events")
			.onDelete("CASCADE")
			.onUpdate("CASCADE");
		table
			.string("uuid")
			.notNullable()
			.unique()
			.defaultTo(1);
		table.timestamps(true, true);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists("calendarsEvents");
};
