

import { tsvParse, csvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";
import {URL, local_URL} from '../Adapter';

function parseData(parse) {
	return function(d) {
		d.date = parse(d.date);
		d.open = +d.open;
		d.high = +d.high;
		d.low = +d.low;
		d.close = +d.close;
		d.volume = +d.volume;

		return d;
	};
}

const parseDate = timeParse("%Y-%m-%d");

export function getData(sym) {
	const promiseMSFT = fetch(local_URL+"api/v1/more/"+sym)
        .then(response => response.json())
        .then(data => data.map(e =>{return {...e, "date":parseDate(e.date) }} ))
        // .then(console.log)
		// .then(data => tsvParse(data, parseData(parseDate)))
	return promiseMSFT;
}