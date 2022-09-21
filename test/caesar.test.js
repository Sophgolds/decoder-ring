const expect = require("chai").expect
const {caesar} = require("../src/caesar")

describe("caesar",() =>{
  describe("Error handling shift value",() =>{
    
    // Error Tests
    it("should return false if there is no shift value",() =>{
      const expected = false
      const actual = caesar("coding");
      
      expect(actual).to.equal(expected);
    })
    
    it("should return false if shift value is equal to 0, less than -25, or greater than 25", () =>{
      const expected = false
      const actual = caesar("coding", 0);
      const actual2 = caesar ("coding", -30)
      const actual3 = caesar("coding", 100);
      
      expect(actual).to.equal(expected);
      expect(actual2).to.equal(expected);
      expect(actual3).to.equal(expected);
    });
  })
  // Tests for Encoding
  describe("Encoding a message", () => {
    it("should encode a message by shifting the letters through the alphabet", () => {
      const actual = caesar("thinkful", 3);
      const expected = "wklqnixo";
      expect(actual).to.equal(expected);
    });
    
    it("should convert the string to lowercase", () =>{
      const expected = "phvvdjh";
      const actual = caesar("Message", 3);
      
      expect(actual).to.equal(expected);
    });
    
    it("should maintain spaces and non-alpabetical symbols in the sting",() =>{
      const expected = "bpqa qa i amkzmb umaaiom!"
      const actual = caesar("This is a secret message!", 8);
      
      expect(actual).to.equal(expected)
    });
    
   it("should compensate for a negative shift value by shifting left through the alphabet", () =>{
     const expected = "qefkhcri"
     const actual = caesar("thinkful", -3)
     
     expect(actual).to.equal(expected)
   });
    
    it("should be able to compenstate for the end of the alphabet", () =>{
      const expected = "cheud pdjdclqh";
      const actual = caesar("zebra magazine", 3);
      
      expect(actual).to.equal(expected);
    })
  })
  //Test for Decoding
  
  describe("Decoding a message", () =>{
    it("should decode a message by shifting the letters in the opposite direction of the alphabet", () =>{
      const expected = "thinkful"
      const actual = caesar("wklqnixo", 3, false)
      
      expect(actual).to.equal(expected);
    });
    
    it("should convert the sting to lowercase",() =>{
      const expected = "message"
      const actual = caesar("Phvvdjh", 3, false);
      
      expect(actual).to.equal(expected);
    });
    
    it("should maintain spaces and non-alpabetical symbols in the sting",() =>{
      const expected = 'this is a secret message!'
      const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
      
      expect(actual).to.equal(expected);
    });
    
    it("should compensate for a negative shift value by shifting left through the alphabet", () =>{
      const expected = "thinkful"
      const actual = caesar("qefkhcri", -3, false);
    });
    it("should be able to compenstate for the end of the alphabet", () =>{
      const expected = "zebra magazine";
      const actual = caesar("cheud pdjdclqh", 3, false);
      
      expect(actual).to.equal(expected)
    })
  })
})
