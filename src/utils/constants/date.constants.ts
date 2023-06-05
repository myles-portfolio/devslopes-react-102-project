import moment from "moment";

export const MONTHS = [
	"",
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

export const YEARS = () => {
	const years = [];
	const dateStart = moment();
	const dateEnd = moment().add(10, "y");
	while (dateEnd.diff(dateStart, "years") >= 0) {
		years.push(dateStart.format("YYYY"));
		dateStart.add(1, "year");
	}
	return years;
};
