exports.up = function(knex) {
	return knex.schema.createTable("calendars", table => {
		table.increments("calendarId");
		table
			.integer("userId")
			.unsigned()
			.notNullable();
		table
			.foreign("userId")
			.references("userId")
			.inTable("users")
			.onDelete("CASCADE")
			.onUpdate("CASCADE");
		table.string("calendarName").notNullable();
		table
			.boolean("isPrivate")
			.notNullable()
			.defaultTo(true);
		table
			.string("uuid")
			.notNullable()
			.unique()
			.defaultTo(1);
		table.timestamps(true, true);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists("calendars");
};
