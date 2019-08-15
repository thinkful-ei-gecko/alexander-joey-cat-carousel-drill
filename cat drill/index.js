'use strict';

$('.thumbnail').on('click', e => {
  const imgSrc = $(event.currentTarget).find('img').attr('src');
  const imgAlt = $(event.currentTarget).find('img').attr('alt');
  $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);

});

// $('.thumbnail').on('click', e => {
//   console.log(e.target);
// });