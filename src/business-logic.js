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

export class userAge {
  constructor(earthYears) {
    this.earthYears = earthYears;
    this.mercuryYears = Math.floor(earthYears / .24);
    this.venusYears = Math.floor(earthYears / .62);
    this.marsYears = Math.floor(earthYears / 1.88);
    this.jupiterYears = Math.floor(earthYears / 11.86);
  }
}
