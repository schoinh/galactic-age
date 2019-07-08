# Super Galactic Age Calculator

#### _Determine your age and life expectancies based on different planets' solar years - July 7, 2019_

#### _By **Na Hyung Choi**_

## Description

With this application, the user can input their date of birth and find out their age in Earth, Mercury, Venus, Mars, and Jupiter years. The user can also view how many years they have left to live on each planet, assuming average life expectancy for their demographic. If the user has already surpassed the average life expectancy, they can view how many years they have lived past their life expectancy. This application only accepts valid dates of birth (between January 1, 1000 and the date that the application is run) and will notify the user if the input date is invalid. The average life expectancy is based on gender (82 for females, 80 for males).

### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Gives error when input birthday is not valid** | April 31, 1991 | Please input a valid date. |
| **Returns user age in Earth years** | January 10, 1991 | 28 |
| **Returns user age in Mercury years** | January 10, 1991 | 116 |
| **Returns user age in Venus years** | January 10, 1991 | 45 |
| **Returns user age in Mars years** | January 10, 1991 | 14 |
| **Returns user age in Jupiter years** | January 10, 1991 | 2 |
| **Determines user's average life expectancy on Earth** | Female | 82 |
| **Determines how many years user has left to live on each planet** | January 10, 1991, Female | Earth: 54<br/>Mercury: 226<br/>Venus: 87<br/>Mars: 30<br/>Jupiter: 5 |
| **Determines number of years user has lived past life expectancy on each planet** | January 10, 1934, Female | Earth: 3<br/>Mercury: 12<br/>Venus: 5<br/>Mars: 1<br/>Jupiter: 0 |

NOTE: Outputs are dependent on the date the application is run. The example outputs above are based on the build date of this application (July 7, 2019).

## Setup/Installation Requirements

1. Clone this repository:
    ```
    $ git clone https://github.com/schoinh/galactic-age.git
    ```
2. Install dependencies:
    ```
    $ npm install
    ```
3. Build distribution files:
    ```
    $ npm run build
    ```
4. Open the web page (dist/index.html)

## Known Bugs
* No known bugs at this time.

## Technologies Used
* JavaScript
* jQuery
* Bootstrap
* Jasmine/Karma
* ESLint
* Babel
* webpack
* npm

## Support and contact details

_Please contact Na Hyung with questions and comments._

### License

*GNU GPLv3*

Copyright (c) 2019 **_Na Hyung Choi_**
