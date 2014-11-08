(function(document, $, undefined){
    $("#menu-toggler").on("click", function(evt){
        evt.preventDefault();
        $("menu").slideToggle();
    });
})(document, jQuery);
