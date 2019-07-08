export class inputDate {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  checkYear() {
    if (this.year > 999 && this.year < 10000) {
      return true;
    } else {
      return false;
    }
  }

  checkLeapYear() {
    if ((this.year % 4 === 0) && (this.year % 100 !== 0) || (this.year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }

  dateRange() {
    const longMonths = [0, 2, 4, 6, 7, 9, 11];
    if (longMonths.includes(this.month)) {
      return 31;
    } else if (this.checkLeapYear() === true && this.month === 1) {
      return 29;
    } else if (this.month === 1) {
      return 28;
    } else {
      return 30;
    }
  }
  
  validate() {
    if (this.checkYear() === true && this.day > 0 && this.day <= this.dateRange()) {
      return true;
    } else {
      return false;
    }
  }

  makeBirthday() {
    return new Date(this.year, this.month, this.day);
  }

  getAge() {
    const today = new Date();
    const timeDiff = new Date(today - this.makeBirthday());
    return Math.floor(timeDiff/3.154e10);
  }
}

export class User {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.mercuryAge = Math.floor(earthAge / .24);
    this.venusAge = Math.floor(earthAge / .62);
    this.marsAge = Math.floor(earthAge / 1.88);
    this.jupiterAge = Math.floor(earthAge / 11.86);
  }

  getLifeExpectancy(gender) {
    if (gender === "male") {
      this.earthLife = 80;
    } else {
      this.earthLife = 82;
    }
    this.mercuryLife = Math.round(this.earthLife / .24);
    this.venusLife = Math.round(this.earthLife / .62);
    this.marsLife = Math.round(this.earthLife / 1.88);
    this.jupiterLife = Math.round(this.earthLife / 11.86);
  }

  getYearsLeft() {
    this.yearsLeft = {
      earth: Math.floor(this.earthLife - this.earthAge),
      mercury: Math.floor(this.mercuryLife - this.mercuryAge),
      venus: Math.floor(this.venusLife - this.venusAge),
      mars: Math.floor(this.marsLife - this.marsAge),
      jupiter: Math.floor(this.jupiterLife - this.jupiterAge)
    }
  }
}
