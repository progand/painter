(function (document, $, undefined) {
    $("#menu-toggler").on("click", function (evt) {
        evt.preventDefault();

        $.when($("menu").slideToggle()).done(function () {
            $("#menu-toggler").toggleClass("menu-toggler-expanded");
        });
    });
})(document, jQuery);
