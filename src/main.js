import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputDate, User } from './business-logic';

const displayAges = function (earthAge, mercuryAge, venusAge, marsAge, jupiterAge) {
  $('.outputAges').html(`You are ${earthAge} years old on Earth.<br><br>Your age on Mercury: ${mercuryAge}<br>Your age on Venus: ${venusAge}<br>Your age on Mars: ${marsAge}<br>Your age on Jupiter: ${jupiterAge}`);
}

const displayYearsLeft = function (lifeExpectancy, earthYears, mercuryYears, venusYears, marsYears, jupiterYears) {
  if (earthYears >= 0) {
    $('.outputYearsLeft').html(`Based on your gender, the average life expectancy for your demographic is ${lifeExpectancy} years. Based on this life expectancy, you have ${earthYears} years left on Earth.<br><br>Years left on Mercury: ${mercuryYears}<br>Years left on Venus: ${venusYears}<br>Years left on Mars: ${marsYears}<br>Years left on Jupiter: ${jupiterYears}`);
  } else {
    $('.outputYearsLeft').html(`Based on your gender, the average life expectancy for your demographic is ${lifeExpectancy} years. Based on this life expectancy, you have lived ${earthYears} years EXTRA on Earth.<br><br>Years lived EXTRA on Mercury: ${mercuryYears}<br>Years lived EXTRA on Venus: ${venusYears}<br>Years lived EXTRA on Mars: ${marsYears}<br>Years lived EXTRA on Jupiter: ${jupiterYears}`);
  }
}

$(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    $('.outputAges, .outputYearsLeft').empty();

    const inputYear = $('#year').val();
    const inputMonth = $('#month').val();
    const inputDay = $('#day').val();
    const inputGender = $('#gender').val();

    const newDate = new InputDate(inputYear, inputMonth, inputDay);

    if (newDate.validate() === false) {
      $('.outputAges').text('Please enter a valid date of birth.');
    } else {
      const earthAge = newDate.getAge();
      const newUser = new User(earthAge);
      newUser.getLifeExpectancy(inputGender);
      newUser.getYearsLeft();
      displayAges(newUser.earthAge, newUser.mercuryAge, newUser.venusAge, newUser.marsAge, newUser.jupiterAge);
      displayYearsLeft(newUser.earthLife, newUser.yearsLeft.earth, newUser.yearsLeft.mercury,newUser.yearsLeft.venus,newUser.yearsLeft.mars,newUser.yearsLeft.jupiter);
      $('form')[0].reset();
    }

  });
});
