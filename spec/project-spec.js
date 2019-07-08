import { inputDate, User } from './../src/business-logic';

describe('validate input and save as a Date object', function() {
  it('should validate date input', function() {
    const invalidDate1 = new inputDate(2001, 1, 29);
    const invalidDate2 = new inputDate(333, 0, 19);
    const invalidDate3 = new inputDate(1991, 3, 31);
    const validDate = new inputDate(1991, 0, 10);
    
    expect(invalidDate1.validate()).toEqual(false);
    expect(invalidDate2.validate()).toEqual(false);
    expect(invalidDate3.validate()).toEqual(false);
    expect(validDate.validate()).toEqual(true);   
  });
  
  it('should save input birthday as a Date object', function() {
    const newDate = new inputDate(1991, 0, 10);
    const newBirthday = newDate.makeBirthday(); 
    expect(newBirthday.getDate()).toEqual(10);
  });
});

const newDate = new inputDate(1991, 0, 10); 
const earthAge = newDate.getAge();
const newUser = new User(earthAge); 

describe('calculate user age', function() {
  it('should calculate user age in Earth years', function() {  
    expect(newUser.earthAge).toEqual(28);  
  });

  it('should calculate user age in Mercury years', function() {  expect(newUser.mercuryAge).toEqual(116);  
  });

  it('should calculate user age in Venus years', function() {  expect(newUser.venusAge).toEqual(45);  
  });

  it('should calculate user age in Mars years', function() {  expect(newUser.marsAge).toEqual(14); 
  }); 

  it('should calculate user age in Jupiter years', function() {  expect(newUser.jupiterAge).toEqual(2); 
  });
}); 

describe('determine how many years of life user has left', function() {
  newUser.getLifeExpectancy("female"); 
  
  it('should determine user life expectancy on Earth', function() {   
    expect(newUser.earthLife).toEqual(82);
  });

  it('should determine user life expectancy on other planets', function() {  
    expect(newUser.mercuryLife).toEqual(342);
    expect(newUser.venusLife).toEqual(132);
    expect(newUser.marsLife).toEqual(44);
    expect(newUser.jupiterLife).toEqual(7); 
  });

  it('should determine expected years left to live on each planet', function() {  
    newUser.getYearsLeft();

    expect(newUser.yearsLeft.earth).toEqual(54);
    expect(newUser.yearsLeft.mercury).toEqual(226);
    expect(newUser.yearsLeft.venus).toEqual(87);
    expect(newUser.yearsLeft.mars).toEqual(30);
    expect(newUser.yearsLeft.jupiter).toEqual(5); 
  }); 
}); 