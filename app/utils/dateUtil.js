"use strict";

module.exports = {

    getTimestamps: (dateStr) => {
        let unixTimestamp = parseInt(dateStr, 10),
            naturalTimestamp = "",
            months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            isUnix = +dateStr === unixTimestamp,
            isNatural = !isNaN(Date.parse(dateStr));

        if( isUnix || isNatural ) {
            if( isNatural ) {
                unixTimestamp = (Date.parse(dateStr) / 1000).toFixed(0);
            }

            let date = new Date(unixTimestamp * 1000),
                year = date.getFullYear(),
                month = months[date.getMonth()],
                day = date.getDate();
            naturalTimestamp = `${month} ${day}, ${year}`;

            return {"unix": unixTimestamp, "natural": naturalTimestamp};
        }

        return { "unix": null, "natural": null };
    }

}
