/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */

var binarySearch = function (array, target) {
	
	//index variable to hold the index of target, start and end to use in recursive call
	var index, start, end;

	//variable middleIndex to take the middle index of array
	var middleIndex = Math.floor(array.length / 2);

	//if the value at middle index equals target
	if (array[middleIndex] === target) {

		//assign middleIndex to index and return index
		index = middleIndex;

		return index;

	}

	//if the target is smaller than the value at 0 or larger than the last value
	if( (target < array[0]) || (target > array[array.length-1]) || (array.length === 0) ) {
		return null;
	}

	//if value at target if greater than value at middle index
	if (target > array[middleIndex]) {

		//assign middleIndex to start, and end gets array.length - 1
		start = middleIndex;
		end = array.length -1;

	}

	//if value at target is smaller than value at middle index
	if (target < array[middleIndex]) {

		//assign 0 to start, and middleIndex to end
		start = 0;
		end = middleIndex;
	}

	//function to recursively call
	function find(start, end) {
		
		var midIndex = Math.floor( (end + start ) /2);
		console.log('mid', midIndex);
		//if value at midIndex equals value at target
		if (array[midIndex] === target) {

			//return midIndx
			return midIndex;
		}

		//if target is greater than the value at midIndex
		else if(target > array[midIndex]) {

			//assign midIndex to start, and end gets array.length-1
			start = midIndex + 1;
			end = array.length-1;
			return find(start, end);
		}

		//if value at target is smaller than value at midIndex
		else if(target < array[midIndex]) {

			//assign 0 to start and midIndex to end
			start = 0;
			end = midIndex;
			return find(start, end);
		}


	}

	return find(start, end);

};

