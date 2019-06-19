import 'bootstrap';

import '../scss/index.scss';

$(document).ready(function() {
  $('.collection-item').hover(function() {
    $('.item-overlay', this).toggleClass('item-hover');
  });

  $('.cart-link').hover(function() {
    $('.cart-image').attr('src', './public/images/box_hover.png');
  });

  $('.cart-link').mouseout(function() {
    $('.cart-image').attr('src', './public/images/box.png');
  });
});
