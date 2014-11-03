$(document).ready(function() {
    // function for smooth scrolling
    $(document).on('click', 'nav li a', function(e) {
        e.preventDefault();
        if($(this).attr("href")) {
            var page = $(this).attr("href");
        }
        else {
            var page = $(this).closest("a").attr("href");
        }
        $("html, body").animate({scrollTop: parseInt($(page).position().top)}, 1000);
    }); 
    //hover fadeIn/fadeOut effect for slide description
    $('.item').mouseenter(function() {
        $('.caption').fadeIn("slow");
            $(this).mouseleave(function() {
                $('.caption').fadeOut("slow");
            });
    });  
});