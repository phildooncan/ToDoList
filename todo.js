alert("Update 7/18: \n This week I am working on the form input");
$( document ).ready(function() {
//theme for the widget based on selection in radio: default, gators, or knights
    $("#datepicker").datepicker();

    $("#draggable").draggable();;

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

    $(".todo-task").click("on", function(){
      $(this).toggleClass("highlighted");
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
  $(".newTask").css("margin-left", "2px");
  $(".todo-task").css("margin-top", "0px")
                .css("margin-left", "4px");
}


//knights background, colors, and theme
function knightTheme(){
  $(".task").removeClass("well");
  $("body").removeClass("gatorsBackground");
  $("body").addClass("knightsBackground");
  $(".task").removeClass("gators");
  $(".task").addClass("knights")
            .addClass("shadow");
  $(".newTask").css("margin-left", "2px");
  $(".todo-task").css("margin-top", "0px")
                .css("margin-left", "4px");
}


//removes gator/knights theme and restores default bootstrap
function removeItAll(){
  $("body").removeClass("knightsBackground")
           .removeClass("gatorsBackground");
  $(".task").removeClass("gators")
            .removeClass("knights")
            .removeClass("shadow");
  $(".task").addClass("well");
  $(".newTask").css("margin-left", "-16px");
}
