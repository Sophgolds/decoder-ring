// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  
  const encoder = {
    "a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
    "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52",
    "l": "13", "m": "23", "n": "33", "o": "43", "p": "53",
    "q": "14", "r": "24", "s": "34", "t": "44", "u": "54",
    "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"
  };

  const decoder= {}

  for (let letter in encoder) {
    const numPair = encoder[letter];

    if (decoder[numPair]) {
      decoder [numPair] = `(${decoder[numPair]}/${letter})`
    } 
    else {
      decoder[numPair] = letter;
    }
  }

  function getArrayFromString(string) {
    return Array.from(string);
  }
  function encodeInput(input) {
    const array = getArrayFromString(input.toLowerCase());
    return array.map(character => {
      if (character === " ") {
        return character;
      }
      else {
        return encoder[character];
      }
    }).join("");
  }

  function decodeInput(input) {
    const arrays = getArrayFromString(input);
    const decodedArray = [];

    for (let i = 0; i < arrays.length; i++) {
      const index = arrays[i];
      if (index === " ") {
        decodedArray.push(index);
      }
      else {
        let tens = index;
        let ones = arrays[i + 1];
        const numberKey = tens + ones;
        i = i + 1;
        decodedArray.push(decoder[numberKey]);
      }
    }
    return decodedArray.join("");
  }

  function polybius(input, encode = true) {
    if (encode === false) {
      if (input.replace(" ", "").length % 2 > 0) {
        return false;
      } 
      else {
        return decodeInput(input);
      }
    }

    if (encode) {
      return encodeInput(input);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
