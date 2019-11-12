exports.up = function(knex) {
	return knex.schema.createTable("usersCalendars", table => {
		table.increments("usersCalendarsId");
		table.integer("userId");
		table
			.foreign("userId")
			.references("userId")
			.inTable("users")
			.onDelete("CASCADE")
			.onUpdate("CASCADE");
		table.integer("calendarId");
		table
			.foreign("calendarId")
			.references("calendarId")
			.inTable("calendars")
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
	return knex.schema.dropTableIfExists("usersCalendars");
};
