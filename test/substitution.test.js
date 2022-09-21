const expect = require("chai").expect
const {substitution} = require("../src/substitution")

describe("substitution", () =>{
  // Error Test
  describe("Error handling for input values", () =>{
    
    it("should return false if the alphabet value is not present", () =>{
      const actual = substitution("thinkful");
      
      expect(actual).to.be.false
    });
    
    it("should return false if the alphabet length is not equal to 26", () =>{
      const actual = substitution("thinkful", "short");
      
      expect(actual).to.be.false
    });
    
    it("should return false if the input value is not present", () => {
      const message = ""
      const actual = substitution(message)
      
      expect(actual).to.be.false;
    });
    
    it("should return false if the input has duplicated letters",() =>{
      const actual = substitution("thinkful","abcabcabcabcabcabcabcabcyz")
      
      expect(actual).to.be.false
    })
    })
 
  // Encoding Tests
  describe("Encoding a message", () =>{
    it("should encode a message using the substitution alphabet", () =>{
      const expected = "jrufscpw";
      const actual =substitution("thinkful","xoyqmcgrukswaflnthdjpzibev");
      
      expect(actual).to.equal(expected);
    });
    
    it("should convert the string to lowercase", () =>{
      const expected = "jrufscpw";
      const actual =substitution("Thinkful","xoyqmcgrukswaflnthdjpzibev");
   
      expect(actual).to.equal(expected);
    });
    
    it("should work with any unique characters in the substitution alphabet", () =>{
      const expected = "y&ii$r&"
      const actual = substitution ("message","$wae&zrdxtfcygvuhbijnokmpl")
      
      expect(actual).to.equal(expected)
    });
    
    it("should maintian the spaces in the string", () =>{
      const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
      const expected = "elp xhm xf mbymwwmfj dne";
      
      expect(actual).to.equal(expected);
    });
  })
  
  //Decoding Tests
  describe("Decoding a message", () =>{
    it("should decode a message using the substitution alphabet", () => {
      const expected = "thinkful"
      const actual = substitution("jrufscpw","xoyqmcgrukswaflnthdjpzibev", false); 
      
      expect(actual).to.equal(expected);
    })
    
    it("should convert the string to lowercase", () =>{
      const expected = "thinkful"
      const actual = substitution("jRUfscpw","xoyqmcgrukswaflnthdjpzibev", false); 
      
      expect(actual).to.equal(expected)
    });
    
    it("should work with any unique characters in the substitution alphabet", () => {
      const expected = "message"
      const actual = substitution("y&ii$r&","$wae&zrdxtfcygvuhbijnokmpl", false);
      
      expect(actual).to.equal(expected);
    });
    
    it("should maintian the spaces in the string", () =>{
      const expected = "you are an excellent spy"
      const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false)
      
      expect(actual).to.equal(expected)
    })
  })
})
