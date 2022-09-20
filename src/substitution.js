// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  const abc = "abcdefghijklmnopqrstuvwxyz".split("");
  const decoder = [];
  function substitution(input, alphabet, encode = true) {

    const noRepeats = new Set(alphabet);
    if (alphabet === undefined || alphabet.length < 26 || [...noRepeats].length < 26) return false;
        
    alphabet.split("");
    if (encode){
      for (let i = 0; i < 26; i++)
      {decoder[abc[i]] = alphabet[i]};
    } 
    else
    {for (let i = 0; i < 26; i++)
      {decoder[alphabet[i]] = abc[i]};
    }
    
    let result = input.toLowerCase().split("").map((letter) => {
      if (letter === " ") return " ";
      return decoder[letter]
    })
    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

