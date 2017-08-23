$(document).ready(function () {
    //if($('#page_payment').length || $('#page_paymentdebug').length){

    var sendData = {
        num: null,
        summ: null,
        method: 'card',
        captcha: null,
        prt: null
    };


    var euCountries = ["Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
        "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia",
        "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain",
        "Sweden", "United Kingdom"];

    var euCodes = ["AUT", "BEL", "BGR", "HRV", "CYP", "CZE",
        "DNK", "EST", "FIN", "FRA", "DEU", "GRC", "HUN", "IRL", "ITA", "LVA",
        "LTU", "LUX", "MLT", "NLD", "POL", "PRT", "ROU", "SVK", "SVN", "ESP",
        "SWE", "GBR"];

    var cListEl = document.createElement('div');
    euCountries.forEach(function (name, index) {
        var code = euCodes[index];
        $(cListEl).append('<div class="country_item" data-code="' + code + '">' +
            '<img src="/img/frontend/payment/flags/' + code.toLowerCase() + '.png" />' + name + '</div>');
    });
    $('#refill_countries_list').append(cListEl);

    try {
        var currentLang =﻿window.location.pathname.split('/')[1];
    } catch (e) {
        var currentLang = 'en';
    }

    var sendPaymentData = function(){
        $.ajax({
            type: "POST",
            url: '/' + currentLang + '/payment/send',
            data: sendData,
            success: function (res) {
                if (res.status && res.url) {
                    if (sendData.method != 'card') {
                        window.location = res.url;
                    } else {
                        var formBox = document.getElementById('refill_cntt_data_form');
                        var ifrBox = document.getElementById('refill_cntt_data_ifr');
                        ifrBox.innerHTML = '';
                        var ifr = document.createElement('iframe');
                        ifr.src = res.url;
                        ifr.style.width = '100%';
                        ifr.style.height = '650px';
                        ifr.style.border = 'none';

                        ifrBox.appendChild(ifr);

                        formBox.style.display = 'none';
                        ifrBox.style.display = 'block';
                    }
                } else if (res.field) {
                    switch (res.field) {
                        case 'phone':
                            $('#inputPhoneRefill').addClass('error');
                            if (res.message) {
                                var message = $('#' + res.message).text();
                                if (!message) {
                                    message = $('#payment_incorrect_phone').text();
                                }
                                $('.tooltip_phone_number').text(message);
                                $('.tooltip_phone_number').addClass('show');
                                setTimeout(function () {
                                    $('.tooltip_phone_number').removeClass('show');
                                }, 3500);
                            }
                            break;
                        case 'captcha':
                            $('.refill_captcha_input').addClass('error');
                            break;
                    }
                } else if (res.message) {
                    //$('#refill_success_text').html(res.message);
                    $('.refill_success').addClass('show');
                    window.scrollTo(0, 0);
                } else {
                    //$('#refill_success_text').html(baseErrorPopuptext);
                    $('.refill_success').addClass('show');
                    window.scrollTo(0, 0);
                }
            }
        });
    };

    var keydErrorText = $('.tooltip_phone_number').text();
    var baseErrorPopuptext = $('#refill_success_text').html();
    $("#inputPhoneRefill").keydown(function (e) {
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) ||
            (e.keyCode >= 35 && e.keyCode <= 40)) {
            return;
        }
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
            $('.tooltip_phone_number').text(keydErrorText);
            $('.tooltip_phone_number').addClass('show');
            setTimeout(function () {
                $('.tooltip_phone_number').removeClass('show');
            }, 1500);
        }
    });
    $('.cash_holder div').on('click', function () {
        $('.cash_holder div').removeClass('act');

        var summ = parseInt($(this).attr('data-summ'));
        if (summ) {
            $(this).addClass('act');
            sendData.summ = summ;
        }
        check_refill_button();
    });
    $('.cash_holder div:first-child').trigger('click');

    $('.method_holder div').on('click', function () {
        $('.method_holder div').removeClass('act');

        var method = $(this).attr('data-method');
        if (method) {
            $(this).addClass('act');
            sendData.method = method;
        }
        check_refill_button();
    });
    $('.method_holder div:first-child').trigger('click');


    $('.refill_bottom label').on('click', function () {
        check_refill_button();
    });
    $('.refill_bottom .show_popup_info').on('click', function () {
        $('.popup.refill_info').addClass('show');
        window.scrollTo(0, 0);
    });
    $('.button_refill').on('click', function () {
        if (!$('.button_refill').hasClass('disabled')) {

            $('.refill_middle input').removeClass('error');
            var num = $('#inputPhoneRefill').val(),
            //captcha = $('.refill_captcha_input').val(),
                prt = $('input[name="prt"]').val();

            //if(num && captcha){
            if (num) {
                sendData.num = num;
                //sendData.captcha = captcha;
                sendData['_token'] = $('#token').text();

                var showCountriesPopup = function(){

                };


                $.ajax({
                    type: "POST",
                    url: '/' + currentLang + '/payment/vat',
                    data: sendData,
                    success: function(res){
                        if(res.vat){
                            sendData.vat = res.vat;
                            sendPaymentData();
                        }else{
                            $('.refill_countries .refill_stage2').hide();
                            $('.refill_countries .refill_stage1').show();
                            $('.refill_countries .popup_holder').addClass('popup_holder_mini');
                            $('.refill_countries').addClass('show');
                            window.scrollTo(0, 0);
                        }

                    }
                });

            } else {
                if (!num) {
                    $('#inputPhoneRefill').addClass('error');
                }
                /*if(!captcha){
                 $('.refill_captcha_input').addClass('error');
                 }*/
            }

        }
    });
    $('.popup_bg').on('click', function () {
        $('.popup').removeClass('show');
    });

    ///
    $('.refill_countries .country_item').on('click', function (e) {
        $('.refill_countries .country_item').removeClass('selected');
        $(this).addClass('selected');
        sendData.vat = {
            needed: true,
            country: $(this).attr('data-code')
        };
        $('.refill_countries .vat_set_country').removeClass('disabled');
    });
    $('.refill_countries .vat_cancel').on('click', function (e) {
        $('.popup').removeClass('show');
        e.preventDefault();
    });
    $('.refill_countries .vat_set_false').on('click', function (e) {
        $('.popup').removeClass('show');
        sendData.vat = {
            needed: false
        };
        sendPaymentData();
        e.preventDefault();
    });
    $('.refill_countries .vat_show_countries').on('click', function (e) {
        $('.refill_countries .refill_stage1').hide();
        $('.refill_countries .refill_stage2').show();
        $('.refill_countries .popup_holder').removeClass('popup_holder_mini');
        e.preventDefault();
    });
    $('.refill_countries .vat_set_country').on('click', function (e) {
        if($(this).hasClass('disabled')){
            e.preventDefault();
            return false;
        }
        $('.popup').removeClass('show');
        sendPaymentData();
        e.preventDefault();
    });




    function check_refill_button() {
        setTimeout(function () {
            if ($('#check1').prop('checked') && sendData.summ) {
                $('.refill_middle .button_refill').removeClass('disabled');
            } else {
                $('.refill_middle .button_refill').addClass('disabled');
            }
        }, 100);
    }

    //}
});