import {expect} from 'chai';
import  nflNames from './index';

describe('nfl-names', function() {
	describe('all', function() {
		it('should be an array of strings', function() {
			expect(nflNames.all).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings(array) {
				return array.every(function (item) {
					return typeof item === 'string';
				})
			}
		});

		it('should always include the Indianpolis Colts', function() {
			expect(nflNames.all).to.include('Colts');
		});
	});

	describe('random', function() {
		it('should return a random nfl team name from the nflNames.random', function() {
			var randomName = nflNames.random();

			expect(nflNames.all).to.include(randomName);
		});

		it('should return an array of random names if passed a number', function() {
			var randomNames = nflNames.random(3);

			expect(randomNames).to.have.length(3);

			randomNames.forEach(function (name) {
				expect(nflNames.all).to.include(name);
			});
		});
	});
});