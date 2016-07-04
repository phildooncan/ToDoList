
$( document ).ready(function() {
//theme for the widget based on selection in radio: default, gators, or knights
    $("#datepicker").datepicker();

    $('#theme input').on('change', function(){
      var selection = $('input[name=Theme]:checked', '#theme').val();

      if(selection == "gators"){
        gatorTheme();
      }
      else if(selection == "knights"){
        knightTheme();
      }
      else if(selection == "default"){
        removeItAll();
      }

    });

    $(".glyphicon").hover(
      function(){
        $(this).addClass("hover");
      },
      function(){
        $(this).removeClass("hover");
      });

});
//functions for the theme radio selection

//gator image background, color, and theme
function gatorTheme(){
  $(".task").removeClass("well");
  $("body").removeClass("knightsBackground");
  $("body").addClass("gatorsBackground");
  $(".task").removeClass("knights");
  $(".task").addClass("gators")
            .addClass("shadow");
  $("#delete").removeClass("well")
              .removeClass("knights")
              .addClass("gators")
              .addClass("shadow");
  $(".glyphicon").removeClass("glyphKnights")
                 .addClass("glyphGators");
  $(".newTask").css("margin-left", "2px");
}


//knights background, colors, and theme
function knightTheme(){
  $(".task").removeClass("well");
  $("body").removeClass("gatorsBackground");
  $("body").addClass("knightsBackground");
  $(".task").removeClass("gators");
  $(".task").addClass("knights")
            .addClass("shadow");
  $("#delete").removeClass("well")
              .removeClass("gators")
              .addClass("knights")
              .addClass("shadow");
  $(".glyphicon").removeClass("glyphGators")
                 .addClass("glyphKnights");
  $(".newTask").css("margin-left", "2px");
}


//removes gator/knights theme and restores default bootstrap
function removeItAll(){
  $("body").removeClass("knightsBackground")
           .removeClass("gatorsBackground");
  $(".task").removeClass("gators")
            .removeClass("knights")
            .removeClass("shadow");
  $(".task").addClass("well");
  $("#delete").removeClass("shadow")
              .removeClass("gators")
              .removeClass("knights")
              .addClass("well");
  $(".glyphicon").removeClass("glyphKnights")
                .removeClass("glyphGators");
  $(".newTask").css("margin-left", "-16px");
}
