jQuery(document).ready(function () {

    jQuery("#banner-slider").owlCarousel({
        singleItem: true,
        navigation: true,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
    jQuery("#news-slider").owlCarousel({
        singleItem: true,
        navigation: true,
        navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
    jQuery("#departments-slider").owlCarousel({
        singleItem: true,
        navigation: true,
    });
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.scroll-to-top').fadeIn()
        } else {
            jQuery('.scroll-to-top').fadeOut()
        }
    });
    jQuery('.scroll-to-top').click(function () {
        jQuery('html, body').animate({scrollTop: 0}, 800);
        return false
    })
    enquire.register("screen and (max-width: 991px)", {
        match: function () {
            jQuery('#parimary-navbar .navbar-nav li.dropdown > a').click(function () {
                var parentli = jQuery(this).parent();
                parentli.find('ul.dropdown-menu').slideToggle();
                return false;
            });
        }
    });
});
