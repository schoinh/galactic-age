import { inputDate } from './../src/business-logic';

describe('determine user age', function() {
  const birthYear = 1991;
  const birthMonth = 0;
  const birthDay = 19;

  it('should save input birthday as a Date object', function() {
    const newDate = new inputDate(birthYear, birthMonth, birthDay);
    const newBirthday = newDate.makeBirthday(); 
    expect(newBirthday.getFullYear()).toEqual(1991);
  });

  // it('should validate date input', function() {
  //   const invalidYear = 333;
  //   const invalid
  //   const invalidDay = 

  //   expect(triangle.side1).toEqual(3);
  //   expect(triangle.side2).toEqual(4);
  //   expect(triangle.side3).not.toEqual(6);
  // });

})
