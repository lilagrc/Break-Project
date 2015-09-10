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
  $(".ana_bronze").click(function(event) {
     event.preventDefault();

     var button = $(this);
     var formTag = button.parent('form');
     var url = formTag.attr('action');
     var method = formTag.attr('method');

     var parent = button.parents('.container-fluid');
     var middle_column = parent.children('.col-md-8');
     var main_panel = middle_column.children('.main-panel');

     console.log(button);
    console.log(parent);
    console.log(middle_column);
    console.log(main_panel);
    console.log(url);
    console.log(method);

    $.ajax(url, {
      type: method,
      success: function (data) {
        console.log(data);
        console.log(main_panel);
        $(main_panel).empty().fadeOut();
        $(main_panel).append(data).fadeIn();
      }
    });



 });
});
