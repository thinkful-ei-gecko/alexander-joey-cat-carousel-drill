'use strict';
/*
@param{number} num
@returns {*} will return 'fizzbuzz'/ 'fizz'/'buzz' or the num
*/

function fizzBuzz(num){
    if( num % 5) return 'buzz';
    if(num % 3) return 'fizz';
    if(num % 15) return 'fizzbuzz';
    return num;
}

function makeHtml(fizzBuzzResult){
    let fizzResult = '';
    if(typeof fizzBuzzResult === 'string'){
        fizzResult = fizzBuzzResult;
    }
    return `
    <div class ='fizz-buzz-item ${fizzResult}'
    ${fizzBuzzResult}
    </div>
    `
}

function formSubmit(event){
    $('#number-chooser').on('submit', event => {
        event.preventDefault();
        const countTo = $('#number-choice').val();
        $('#number-choice').val('');
        const finalResults = [];
        for (let i = 0; i < countTo, i++){
            finalResults.push(fizzBuzz(i));
    }

    const html = finalResults.map(results => makeHtml(results));
    $('.js-results').html(html);
  });
}

$(formSubmit);










































/* function fizzbuzz(num){
  if (num & 15 ===0) return 'fizzbuzz';
  if(num % 5 === 0) return 'buzz';
  if(num % 3 === 0) return 'fizz';
  return num;


}

function generateFizzHtml(fizzResult){
  let fizzClass = '';
  if(typeof fizzResult === 'string'){
    fizzClass = fizzResult;
  }
  return `
    <div class='fizz-buzz-item ${fizzClass}'>
        <span>${fizzResult}</span>
        </div>
        `;
}

function handleSubmit(){
  $('number-chooser').on('submit', event => {
    event.preventDefault();
    const countTo = $('#number-choice').val();
    const fizzBuzzResults = [];
    for(let i = 1; i <countTo; i++){
      fizzBuzzResults.push(fizzbuzz(i));
    }  
    const htmlArray =fizzBuzzResults.map(result => generateFizzHtml(result));
    $('.js-results').html(htmlArray);  
  });
  
}

$(handleSubmit);