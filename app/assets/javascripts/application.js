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

    $.ajax(url, {
      type: method,
      success: function (data) {
        // console.log(data);
        // console.log(main_panel);
         //$(main_panel).fadeTo(3000).replaceWith(data);
         // $(main_panel).slideDown(3000).append();

      // $(main_panel).fadeOut(, function(){
      //   $(this).replaceWith(data);
      //   $(main_panel).fadeIn("slow");
      // })

    //    $(main_panel).fadeOut("slow", function(){
    //       $(main_panel).html(data);
    //       $(main_panel).fadeIn("slow");
    //   };

    //   $('#foo').fadeOut("slow", function(){
    // var div = $("<div id='foo'>test2</div>").hide();
    // $(this).replaceWith(div);
    // $('#foo').fadeIn("slow");
// });

    //     $(main_panel).slideUp(400, 'swing', function() {
    //       $(this).html(data).slideDown(400);
    //     });
    // }

    $(main_panel).animate({'margin-right':'1000px'}, 300, function() {
          $(this).html(data).animate({'margin-right':'0px'}, 600);
        });
      }

  });
  });
});



