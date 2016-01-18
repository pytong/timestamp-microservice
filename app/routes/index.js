"use strict";

let dateUtil = require("../utils/dateUtil");


module.exports = (app) => {

	app.route("/:timestamp")
		.get((req, res) => {
			let timestamp = req.params.timestamp,
				result = dateUtil.getTimestamps(timestamp);

			res.json(result);
		});

};
