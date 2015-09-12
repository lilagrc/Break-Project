// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery.slick
//= require_tree .


$(function() {
  $(".roberto_bronze").click(function(event) {
     event.preventDefault();
     var button = $(this);

     slide_artwork(button, 'roberto');
    });
  });

  $(function() {
  $(".ana_bronze").click(function(event) {
     event.preventDefault();
     var button = $(this);

      slide_artwork(button, 'ana');
    });
});

function slide_artwork(button, artist) {

   var formTag = button.parent('form');
   var url = formTag.attr('action');
   var method = formTag.attr('method');

   var parent = button.parents('.container-fluid');
   var middle_column = parent.children('.col-md-8');
   var main_panel = middle_column.children('.main-panel');

  $.ajax(url, {
    type: method,
    success: function (data) {

    $(button).addClass("chosen");


    if (artist == 'ana') {
      $(main_panel).animate({'margin-left':'1500px'}, 300, function() {
        $(this).html(data).delay(100).animate({'margin-left':'0px'}, 300);
        });
    } else if (artist == 'roberto') {
      $(main_panel).animate({'margin-left':'-1500px'}, 300, function() {
        $(this).html(data).delay(100).animate({'margin-left':'0px'}, 250);
        });
      }
    }
  });
}

$(function() {
  $("a#about").click(function(event) {
    event.preventDefault(this);

    var link = $(this);
    var url = link.attr('href')
    console.log(this);
  });
})







