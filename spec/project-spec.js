import { inputDate, userAge } from './../src/business-logic';

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

describe('calculate user age', function() {
  const newDate = new inputDate(1991, 0, 10); 
  const earthAge = newDate.getAge();
  const newUserAge = new userAge(earthAge);

  it('should calculate user age in Earth years', function() {  
    expect(newUserAge.earthYears).toEqual(28);  
  });

  it('should calculate user age in Mercury years', function() {  expect(newUserAge.mercuryYears).toEqual(116);  
  });

  it('should calculate user age in Venus years', function() {  expect(newUserAge.venusYears).toEqual(45);  
  });

  it('should calculate user age in Mars years', function() {  expect(newUserAge.marsYears).toEqual(14); 
  }); 

  it('should calculate user age in Jupiter years', function() {  expect(newUserAge.jupiterYears).toEqual(2); 
  });
}); 