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

