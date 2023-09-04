// Fichier : src/assets/custom-tabs.js

$(document).ready(function() {
    $('.custom-tab-link').on('click', function(event) {
      event.preventDefault();
      var target = $(this).attr('href');
      $('.custom-tab-pane').removeClass('show');
      $(target).addClass('show');
    });
  });
  