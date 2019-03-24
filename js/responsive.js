/*global $ */

$(function () {
    
    'use strict';
    
    $('.information .classic-list li').click(function () {
        
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.information .info-content div').hide();
        $('.' + $(this).data('class')).fadeIn();
    });
    

});
