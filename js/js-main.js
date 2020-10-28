var nc = jQuery.noConflict();
nc(document).ready(function () {
    nc('#submit, .wpcf7-submit, .comment-reply-link, input[type="submit"]').addClass('btn btn-default');
    nc('.wp-caption').addClass('thumbnail');
    nc('.widget_rss ul').addClass('media-list');
    nc('table#wp-calendar').addClass('table table-striped');
    nc('input[type="checkbox"]').parent('label').addClass('checked ccheckbox');
    nc('input[type="checkbox"]:checked').parent('label').addClass('checked');
    nc('a[data-toggle="collapse"]').attr('data-parent', function () {
        return '#' + nc(this).closest('.panel-group').attr('id');
    });
    if (nc('input.search-query', '#header').val() != '') {
        nc('input.search-query', '#header').addClass('expanded');
    }

});
nc(document).ready(function () {
    nc('.album .featured-album-images').magnificPopup({
        delegate: 'a.zoom-view',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function (element) {
                return element.find('img');
            }
        }

    });
    nc('.album .featured-album-videos, .item_video').magnificPopup({
        delegate: 'a.play-view',
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});
var uiuScroll;
nc(window).on('load', function () {
    //nc(".hasScroll").mCustomScrollbar({theme:"minimal-dark",alwaysShowScrollbar:1,});
    nc(".hasScroll").perfectScrollbar({wheelPropagation: true, maxScrollbarLength: 38, wheelSpeed: 0.5});
});
document.addEventListener('touchmove ', function (e) {
    e.preventDefault();
}, true);
function resize_window() {
    //console.log(window.matchMedia('(max-width:992px)').matches)
    if (window.matchMedia('(max-width:992px)').matches == true) {
        jQuery(".navbar-top").appendTo(".navbar-collapse");
        jQuery('#menu-primary > li.dropdown > a').attr("data-toggle");

    }
    else {
        jQuery(".navbar-top").appendTo(".top-menu");
        jQuery('#menu-primary > li.dropdown > a').removeAttr("data-toggle");

    }

}
nc(window).on('load resize', function () {
    resize_window();
});
nc(document).ready(function () {
    nc("table").addClass("footable");
    nc('.footable').removeAttr('width');
    nc('.footable').prepend('<thead class="footable-head" style="display:none"><tr><th data-class="expand">&nbsp;</th><th>&nbsp;</th></thead>');
    nc('.footable').each(function () {
        var extra_cols = jQuery(this).children('tbody').children('tr:first').children('td').length - 2;
        for (var i = 0; i < extra_cols; i++)
        {
            jQuery(this).children('thead').children('tr:first').append('<th data-hide="phone,tablet">&nbsp;</th>');
        }
    });
    nc('table').footable({
        breakpoints: {
            phone: 380,
            tablet: 550
        }
    });
});
nc(document).ready(function () {
    nc('.job-details').click(function () {

        var collapse_content_selector = jQuery(this).attr('href');

        var toggle_switch = jQuery(this);
        nc(collapse_content_selector).toggle('slow', function () {
            if (jQuery(this).css('display') == 'none') {
                toggle_switch.html('Details...');

            } else {
                toggle_switch.html('Hide Details...');

            }
        });
    });

});
