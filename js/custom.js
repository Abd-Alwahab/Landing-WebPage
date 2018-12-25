$(document).ready(function () {


    $('.gallery').waypoint(function (direction) {

        if (direction == "down") {

            $('nav').addClass('fixnav');
        } else {

            $('nav').removeClass('fixnav');
        }
    }, {
        offset: '60px'
    });



    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });



    
    $('.btn-one').click(function() {
        
        $('html,body').animate({scrollTop: $('.plans').offset().top - 100},1000);
    })
    


    $('.fet').waypoint(function () {

        $('.fet').addClass('animated fadeIn');


    }, {

        offset: '50%'
    });


});


$('.hero-text').waypoint(function () {


    $('.hero-text').addClass('animated shake');
}, {

    offset: '50%'
});




$('.btn-one').waypoint(function () {


    $('.btn-one').addClass('animated flash');
}, {

    offset: '50%'
});
