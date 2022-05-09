// Write your code below
const hasUniqueChars = word => {
    for (let i =0; i < word.length-1; i++) {
        //loop through the string starting after the current character
        for (let j = i+1; j < word.length; j++) {
            //check if following letters are equal to current
            if (word[i] === word[j]) {
                return false;
            }
        }
    }
    return true;
}
