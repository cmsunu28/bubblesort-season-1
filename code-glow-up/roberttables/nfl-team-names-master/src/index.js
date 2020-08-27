import uniqueRandomArray from 'unique-random-array';
import nflNames from './nfl-team-names.json';

/* 
	The var in this code still works well
	In fact, you will see it's just swell
		But the scope that I've seen
		Can be really mean
	And for `THIS` reason you'll want to yell
*/
var getRandomName = uniqueRandomArray(nflNames);

/*
	We should write more versatile code
	Instead of just running in node
		It's local, observe us
		Later on, it's a service
	And later, my TwiML bin overflowed!
*/

module.exports = {
	all: nflNames,
	random: random
};

function random(number) {
	if( number === undefined ) {
		return getRandomName();
	} else {
		var randomNames = [];
		for (var i = 0; i < number; i++) {
			randomNames.push(getRandomName());
		}
		return randomNames;
	}
}
