// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // needs to know the alphabet 
    const letters = "abcdefghijklmnopqrstuvwxyz";
  
  function caesar(input, shift, encode = true) {
      if (shift < -25 || shift > 25 || shift === 0 || shift === undefined)
    {return false;}
     
    let message = "";
      if (encode === false){
      shift = shift * -1;}     
  
    for (let i = 0; i < input.length; i++){
      // need to make all lettter lower case
        const letter = input[i].toLowerCase();
      
      if (letters.includes(letter)){
        const letterIndex = letters.indexOf(letter);
        let shiftedIndex = letterIndex + shift;
       
        if (shiftedIndex > 25){
          shiftedIndex += -26;
        }
        if (shiftedIndex < 0 && shiftedIndex > -25){
          shiftedIndex += 26;
        }
        
        const shiftedLetter = letters[shiftedIndex];
        message += shiftedLetter;
      } 
      else{
        message += letter;
      }
  }
      return message;
  }
  return {caesar,};
})();

module.exports = { caesar: caesarModule.caesar };

