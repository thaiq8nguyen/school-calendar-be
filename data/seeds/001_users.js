const bcrypt = require("bcryptjs");
const uuidv1 = require("uuid/v1");
exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("users")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("users").insert([
				{
					firstName: "Bob",
					lastName: "Smith",
					username: "bsmith",
					email: "bsmith@email.com",
					phone: "555-555-1234",
					password: bcrypt.hashSync("bsmith1", 10),
					isAdmin: 1,
					uuid: uuidv1()
				}
			]);
		});
};
