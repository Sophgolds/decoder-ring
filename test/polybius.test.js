const expect = require("chai").expect;
const {polybius} = require("../src/polybius");

describe("polybius", () => {
  
  //Encoding Test
  describe("Encoding a message", () => {
    it("should return a string with each letter changed to the polybius square to the assigned number", () =>{
      const expected = "44513444";
      const actual = polybius("test");
      
      expect(actual).to.equal(expected);
    });
   
    it("should ignore capital letters", () =>{
      const expected = "23513434112251";
      const actual = polybius("Message");
      
      expect(actual).to.equal(expected);
    });
    
    it("should have spaces within the string", () =>{
      const expected = "3251131343 2543241341"
      const actual = polybius("hello world");
      
      expect(actual).to.equal(expected);
    });
    
    it("should translate `i` and `j` to 42", () =>{
      const expected = "42114213"
      const actual = polybius("jail");
      
      expect(actual).to.equal(expected);
    })
  });

  //Decoding Tests 
  describe("Decoding a message", () =>{
    it("should return false the number of letters in a string is not an even amount", () =>{
      const actual = polybius("23354552116", false);
      
      expect(actual).to.be.false
    });
    
    it("should return a string with the number pair converted into a letter", () =>{
      const expected = "test"
      const actual = polybius("44513444", false);
      
      expect(actual).to.equal(expected);
    })
    
    it("should maintain spaces in the string", () =>{
      const expected = "hello world";
      const actual = polybius("3251131343 2543241341", false);
      
      expect(actual).to.equal(expected)
    });
    
    it("should translate 42 to i and j", () => {
      const expected = "th(i/j)nkful";
      const actual = polybius("4432423352125413", false);
      
      expect(actual).to.equal(expected)
    })
  });
})
