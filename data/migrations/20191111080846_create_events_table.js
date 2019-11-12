exports.up = function(knex) {
	return knex.schema.createTable("events", table => {
		table.increments("eventId");
		table.string("eventName").notNullable();
		table.string("eventInfo").notNullable();
		table.date("startDate").notNullable();
		table.date("endDate").notNullable();
		table.timestamp("startTime").notNullable();
		table.timestamp("endTime").notNullable();
		table
			.boolean("isFullDayEvent")
			.notNullable()
			.defaultTo(0);
		table
			.boolean("isRecurringEvent")
			.notNullable()
			.defaultTo(0);
		table
			.string("uuid")
			.notNullable()
			.unique()
			.defaultTo(1);
		table.timestamps(true, true);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists("events");
};
