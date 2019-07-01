import { inputDate } from './../src/business-logic';

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
    expect(newBirthday.getFullYear()).toEqual(1991);
  });
})
