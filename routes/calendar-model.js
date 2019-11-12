const db = require("../data/db-config.js"); // Calendar-Modal
module.exports = {
	get,
	getById,
	getByUuid,
	add,
	remove,
	update
};
function get() {
	return db("calendars").select("calendarName", "calendarDescription");
}
function getById(id) {
	return db("calendars").where({ id });
}
function getByUuid(uuid) {
	return db("calendars")
		.where({ uuid })
		.first();
}
function add(calendar) {
	return db("calendars").insert(calendar, "id");
}
function remove(id) {
	return db("calendars")
		.where({ id })
		.del();
}
function update(id, updated) {
	return db("calendars")
		.where({ id })
		.update(updated);
}
