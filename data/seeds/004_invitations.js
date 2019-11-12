const shortid = require("shortid");
const uuidv1 = require("uuid/v1");
exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex("invitations")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("invitations").insert([
				{
					userId: 1,
					invitationCode: shortid.generate(),
					isUsed: 0,
					uuid: uuidv1()
				},
				{
					userId: 1,
					invitationCode: shortid.generate(),
					isUsed: 0,
					uuid: uuidv1()
				},
				{
					userId: 1,
					invitationCode: shortid.generate(),
					isUsed: 0,
					uuid: uuidv1()
				}
			]);
		});
};
