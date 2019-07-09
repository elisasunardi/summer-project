$( document ).ready(function() {

    $('.phone').hover(function() {
        $(this).css("color", "green");
    },function(){
        $(this).css("color", "black");
      });

    $('.left-div').hover(function() {
        $(this).wrapInner("<u></u>")
    }, function(){
        $(this).find('div').unwrap();
    });

});