/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var nc = jQuery.noConflict();
nc(document).ready(function () {
    nc('a.cng-pass,a.loast_pass_link').click(function () {
        var collapse_content_selector = nc(this).attr('href');
         nc(this).toggleClass('visibleItem');
        nc(collapse_content_selector).slideToggle();
        return false;
    });

    nc('#resetPasswordForm').on('submit', function () {
        var passreset = nc(this);
        var form_data = passreset.serialize();
        nc.ajax({
            method: 'POST',
            url: ajax_login_settings.ajax_url,
            data: form_data,
            dataType: 'json',
            beforeSend: function () {
                passreset.find('.messages').html('').slideUp();
                passreset.find('input[type="submit"]').button('loading');
            },
            success: function (responces) {
                passreset.find('.messages').html(responces.msg).slideDown();
                passreset.find('input[type="submit"]').button('reset');
            }
        })
        return false;
    });

    nc('#lostPasswordForm').on('submit', function () {
        var passreset = nc(this);
        var form_data = passreset.serialize();
        nc.ajax({
            method: 'POST',
            url: ajax_login_settings.ajax_url,
            data: form_data,
            dataType: 'json',
            beforeSend: function () {
                passreset.find('.messages').html('').slideUp();
                passreset.find('input[type="submit"]').button('loading');
            },
            success: function (responces) {
                passreset.find('.messages').html(responces.msg).slideDown();
                passreset.find('input[type="submit"]').button('reset');
            }
        })
        return false;
    });
    
});