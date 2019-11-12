exports.up = function(knex) {
	return knex.schema.createTable("invitations", table => {
		table.increments("invitationId");
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
		table.string("invitationCode").notNullable();
		table
			.boolean("isUsed")
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
	return knex.schema.dropTableIfExists("invitations");
};
