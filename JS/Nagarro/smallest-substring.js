//Input1:- I am the greatest

//input2:-  imt

//Outpout:- I am the



function shortestSubstring(str1, str2) {
    const set = new Set(str2); // Convert str2 to a set for efficient lookup
    let minLength = Infinity;
    let minStart = 0;
    let start = 0;
    let charsToCover = set.size;
    const map = new Map();

    const allCharsCovered = () => charsToCover === 0;

    for (let end = 0; end < str1.length; end++) {
        const char = str1[end];
        map.set(char, (map.get(char) || 0) + 1);

        if (set.has(char) && map.get(char) === 1) {
            charsToCover--;
        }

        while (allCharsCovered()) {
            const leftChar = str1[start];
            const windowLength = end - start + 1;

            if (windowLength < minLength) {
                minLength = windowLength;
                minStart = start;
            }

            map.set(leftChar, map.get(leftChar) - 1);
            if (set.has(leftChar) && map.get(leftChar) === 0) {
                charsToCover++;
            }
            start++;
        }
    }

    return minLength === Infinity ? "" : str1.substring(minStart, minStart + minLength);
}

// Example usage
const str1 = "My name is Fran";
const str2 = "rim";
console.log(shortestSubstring(str1, str2)); // Output: "me is Fr"