'use strict';

/**
 * @param {number} num 
 * @returns {*} Will return 'fizzbuzz'/'buzz'/'fizz' or the number
 */

function fizzbuzz(num){
  if (num % 15 === 0) return 'fizzbuzz';
  if (num % 5 === 0) return 'buzz';
  if (num % 3 === 0) return 'fizz';
  if (num === 0) return 0;
  return num;
}

/**
 * Builds HTML for fizzBuzz output
 * @param {*} fizzResult will be one of the returns from fizzbuzz().
 * @returns {string} Result is a single fizzbuzz item.
 */

function generateFizzHtml(fizzResult){
  let fizzClass = '';
  if (typeof fizzResult === 'string'){
    fizzClass = fizzResult;
  }
  return `
    <div class='fizz-buzz-item ${fizzClass}'>
        ${fizzResult}
      </div>
        `;
}

function handleSubmit(){
  $('#number-chooser').submit(event => {
    event.preventDefault();
    const countTo = $('#number-choice').val();
    const fizzBuzzResults = [];
    for(let i = 1; i <= countTo; i++){
      fizzBuzzResults.push(fizzbuzz(i));
    }  
    const htmlArray = fizzBuzzResults.map(result => generateFizzHtml(result));
    $('.js-results').html(htmlArray);  
  });
}

$(handleSubmit);