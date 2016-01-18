"use strict";

let path = process.cwd(),
	dateUtil = require("../utils/dateUtil");


module.exports = (app) => {

	app.route("/:timestamp")
		.get((req, res) => {
			let timestamp = req.params.timestamp,
				result = dateUtil.getTimestamps(timestamp);

			res.json(result);
		});

	app.get("/", (req, res)  => {
		res.sendFile(path + "/public/index.html");
	});
};
