exports.up = function(knex) {
	return knex.schema.createTable("users", table => {
		table.increments("userId");
		table
			.string("username", 255)
			.notNullable()
			.unique();
		table.string("firstName");
		table.string("lastName");
		table
			.string("email")
			.notNullable()
			.unique();

		table.string("password").notNullable();
		table.integer("phone");
		table
			.boolean("isAdmin")
			.notNullable()
			.defaultTo(false);
		table
			.string("uuid")
			.notNullable()
			.unique()
			.defaultTo(1);
		table.timestamps(true, true);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists("users");
};
