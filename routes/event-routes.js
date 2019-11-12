const router = require("express").Router();

// const authenticate = require('../auth/authenticate-middleware');
const Events = require("./event-model");
const Calendars = require("../routes/calendar-model");

// get all events via a calendar id
router.get("/:calendar_uuid/events/", async (req, res) => {
	try {
		const { calendar_uuid } = req.params;
		const response = await Events.get(calendar_uuid);
		if (response.length > 0) {
			res.status(200).json(response);
		} else {
			res.status(200).json({ message: "There are no events found." });
		}
	} catch (err) {
		console.log("event GET error", err);
		res.status(400).json({ message: "error fetching events", error: `${err}` });
	}
});

// get an event via the event id and a calendar id
router.get("/events/:events_uuid", async (req, res) => {
	try {
		const { events_uuid } = req.params;
		const response = await Events.getByUuid(events_uuid);
		if (response) {
			res.status(200).json(response);
		} else {
			res.status(200).json({ message: "There is no event found." });
		}
	} catch (err) {
		console.log("event GET BY ID error", err);
		res.status(400).json({ message: "error fetching event", error: `${err}` });
	}
});

// create an event to a calendar via the calendar id
router.post("/:calendar_uuid/events/", async (req, res) => {
	try {
		const { calendar_uuid } = req.params;
		const { event } = req.body;
		const calendar = await Calendars.getByUuid(calendar_uuid);
		const response = await Events.add(calendar.calendarId, event);

		res.status(200).json(response);
	} catch (err) {
		console.log("event POST error", err);
		res.status(400).json({ message: "error adding event", error: `${err}` });
	}
});

// delete an event on a calendar via the event id and the calendar id
router.delete("/events/:events_uuid", async (req, res) => {
	try {
		const { events_uuid } = req.params;
		const response = await Events.remove(events_uuid);

		if (response === 1) {
			res.status(200).json({ message: "The event has been deleted." });
		}
	} catch (err) {
		console.log("event DELETE error", err);
		res.status(400).json({ message: "error deleting event", error: `${err}` });
	}
});

// update an event via the event uuid
router.put("/events/:events_uuid", async (req, res) => {
	try {
		const { events_uuid } = req.params;
		const { event } = req.body;
		const response = await Events.update(events_uuid, event);
		if (response === 1) {
			res.status(200).json({ message: "The event has been updated." });
		}
	} catch (err) {
		console.log("event PUT error", err);
		res.status(400).json({ message: "error updating event", error: `${err}` });
	}
});
module.exports = router;
