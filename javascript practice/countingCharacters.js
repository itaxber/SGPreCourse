function countingCharacters(stringToCount){
    // The length property has been mentioned in 
    // the Logging Letter Exercise in Lesson 4
    console.log (stringToCount + " has " + 
              stringToCount.length + " characters.");
}
function countingCharacters2(stringToCount, characterToFind){
	 // Let's count the number of times a character appears in a string

	 // We will look at each character one-by-one with the help of a loop
	 var characterCount = 0
	 for (var characterPosition = 0;
			characterPosition < stringToCount.length;
			characterPosition++){
		 if (stringToCount[characterPosition] == characterToFind){  			
			characterCount++;
		}saffhdf
	}
	console.log("string to search in: " + stringToCount);SDfsDfsf
	console.log("Number of times the character appears: " + characterCount);
}	

// str - string to search
// search - characters to find in str
function countingCharacters3(str, search){
	var count = 0; //number found
	var numChars = search.length; /* we need to stop loop based on multiple characters example: if searching "ohio" with 3 characters at a time we want to stop at h so we do not go past the end of the string */
	var lastIndex = str.length - numChars;  // we will use a for loop to go through our string
	// this time, we are looking for a series of characters - a substring
	for (var index = 0; index <= lastIndex; index++){
		// substring gets a part of a string from a start to end index.
		var current = str.substring(index, index + numChars);
		// if the substring matches our series, increase our counter
		if (current == search){
			count++;
		}
	}
	return count;
}

	





