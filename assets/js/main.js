$(document).ready(function() {

// Toggler

$('.toggle').each((i, elm) => {
  $(elm).click(function(e) {
    let id = $(this).attr('id');

    $('[id='+id+']').each((i, inner) => {
      console.log(i, inner)
      $(inner).toggleClass('hide');
    });
  });

});

});