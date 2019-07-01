export class inputDate {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  makeBirthday() {
    return new Date(this.year, this.month, this.day);
  }
}
