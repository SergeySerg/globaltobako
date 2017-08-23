$(function() {

/******change bg for mobile******/
    if ( $(window).width() < 768){
        $('#download .r-background-image-holder > img').attr("src","img/frontend/nav_bg_mobile.png");
    }
/******END change bg for mobile******/

/******zoom for slider******/
    var sliderWidth = $('.owl-carousel').width();
    sliderWidth = sliderWidth/3.257 - 40;
    $('.slide-img-bg').each( function(){
       $(this).height(sliderWidth); 
    });
/******END zoom for slider******/

/******owl-corousel options******/
    $(".owl-carousel").owlCarousel({
        singleItem: true,
        slideSpeed: 500,
        loop: true,
        autoPlay: 4000,
    });
/******END owl-corousel options******/

/******Button burger ******/
    $('.button-menu').click(function(){
        $(this).toggleClass('active');
        $('.bar .menu-horizontal').toggleClass('active');
        $('.button-menu .icon').toggleClass('menu-i').toggleClass('close');
    });
/******END Button burger ******/

/**********languages**************/
    var myLang = window.location.pathname.split('/');
    var activeLang = $('.langs li a img[alt=' + myLang[1] + ']').attr('src');
    $(".active-lang > img").attr('src',activeLang);
    $('.langs').find('img[src=' + '\"' + activeLang + '\"' + ']').parent().parent().remove();
    $('.active-lang').on("click", function () {
        if($('.langs').hasClass('active')) {
            $('.langs').slideUp().removeClass('active');
        } else {
            $('.langs').slideDown().addClass('active');
        }
    });
/**********END languages**************/

/**********scrollTo**************/
    $("a.r-menu-link").click(function() {
        var scrollId = $(this).attr('data-scroll-id');
        if (scrollId === 'prices') {
            $('html, body').animate({
                scrollTop: ($("#" + scrollId).offset().top - 85)
            }, 1000);
        } else{
            $('html, body').animate({
                scrollTop: ($("#" + scrollId).offset().top - 70)
            }, 1000);
        }
    });
/**********END scrollTo**************/

/**********faq dropdown**************/
    $('.question').on("click", function () {
        $(this).toggleClass('active');
        $(this).find('i.fa').toggleClass('fa-angle-down').toggleClass('fa-angle-up');
        if($(this).hasClass('active')){
            $(this).parent().find('.answer').slideDown();
        } else {
            $(this).parent().find('.answer').slideUp();
        }
    });
/**********END faq dropdown**************/

/**********static-page gallery**************/
    $('.flex-gallery').each(function(){
        $(this).unitegallery({
            gallery_theme: "tilesgrid",
            gallery_width:"100%",              
            grid_space_between_cols:15,
            grid_space_between_rows:25,
            grid_space_between_mobile:0,
            tile_enable_border:false,
            tile_enable_shadow:false,
            grid_padding:0,
            tile_width: 270,						
            tile_height: 250,
            grid_num_rows:10
        });
    });
/**********END static-page gallery**************/
    
/**********slider pop-up**************/
    $('.show-popup-slide').click(function(event){
        var slide_id = $(this).attr('data-slide-id');
        $('#overlay').fadeIn(400,
            function(){
                $('[data-popup-id='+slide_id+']')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '45%'}, 200);
            });
        $('#overlay').click( function(){
            $('[data-popup-id='+slide_id+']')
                .animate({opacity: 0, top: '45%'}, 200,
                    function(){
                        $(this).css('display', 'none');
                        $('#overlay').fadeOut(400);
                    }
                );
        });
        $(document).keydown( function(e) {
            if (e.keyCode === 27) {
                $('[data-popup-id='+slide_id+']')
                    .animate({opacity: 0, top: '45%'}, 200,
                        function(){
                            $(this).css('display', 'none');
                            $('#overlay').fadeOut(400);
                        }
                    );
                e.preventDefault();
            }
        });
    });
/**********END slider pop-up**************/

/**********fixed menu**************/
    $(window).scroll(function(){                             
        if ( $(window).scrollTop() >= 150 ){                  
            $('.menu-fix').css('display','block');     
            $('.button-menu').css({'top':'25px', 'position':'fixed'}); 
        } else {
            $('.menu-fix').css('display','none');  
            if( $(window).width() > 768) {
                $('.button-menu').css({'top':'13px','position':'absolute'});       
            } else {
                $('.button-menu').css({'top':'55px','position':'absolute'});        
            }
        }
    });
/**********END sfixed menu**************/

/**********call-back**************/
    $('#submit-send').on('click', function(event){
        $('#submit-send').attr('disabled', true);
        var data = new FormData($('form#callback')[0]);
        $.ajax({
            url: '',
            method: 'POST',
            processData: false,
            contentType: false,
            data: data,
            dataType : "json",
            success: function(data){
                if(data.success){
                    swal(trans['base.success'], "", "success");
                    jQuery("#callback").trigger("reset");
                    $("#submit-send").attr('disabled', false);
                }
                else{
                    swal(trans['base.error'], data.message, "error");
                    $("#submit-send").attr('disabled', false);
                }
            },
            error:function(data){
                swal(trans['base.error']);
                $("#submit-send").attr('disabled', false);
            }

        });
        event.preventDefault();
    });
/**********END call-back**************/

/**********send code country**************/
    var tariffsCache = {};

    $('#tariffing').on( "submit",function(event){
        event.preventDefault();
        return false;
    });
    var clearTariffingResult = function(){
        $('#tariffing-operator').text('');
        $('#tariffing-rate').text('');
    };

    $('#insert_field').keypress(function(e){
        var symbol = (e.which) ? e.which : e.keyCode;
        if (symbol != 8 && symbol != 46 && symbol != 37 && symbol != 39 && symbol < 48 || symbol > 57)  return false;
    });

    var currentPhoneQuery = '';

    $('#insert_field').on('keyup', function(event){
        var value = $(this).val();
        if(value == '+'){
            $(this).val('');
        }else if((value[0] != '+') && (value.length > 0)){
            $(this).val('+' + value);
        }

        if(value.length < 4){
            clearTariffingResult();
            return;
        }

        if(value in tariffsCache){
            $('#error').hide();
            $('#tariff-not-found').hide();
            $('#tariffing-operator').text(tariffsCache[value].destination);
            $('#tariffing-rate').text(tariffsCache[value].rate + ' \u20ac/min');
            $('#tariffing-result').show();
            return;
        }

        var data = {
            code: value.replace('+', ''),
            _token: $("#tariffing input[name='_token']").val()
        };

        currentPhoneQuery = data.code;

        var url = $( "input[name$='url']" ).val();
        $.ajax({
            url: url + '?rand=' + Math.random(),
            method: "POST",
            data: data,
            dataType : "json",
            success: function(data){
                if($('#insert_field').val() != '+' + currentPhoneQuery){
                    return false;
                }

                if(data.status == 'error'){
                    $('#error').show();
                }
                if(data.status == 'not found'){
                    $('#tariff-not-found').show();
                }

                if(data.status == 'success'){
                    if(data.rate && data.rate.rate ){
                        $('#error').hide();
                        $('#tariff-not-found').hide();
                        $('#tariffing-operator').text(data.rate.destination);
                        $('#tariffing-rate').text(data.rate.rate + ' \u20ac/min');
                        $('#tariffing-result').show();
                        tariffsCache[value] = data.rate;
                    }else{
                        clearTariffingResult();
                    }
                }
                else{
                    clearTariffingResult();
                }
            },
            error:function(data){
                clearTariffingResult();
            }
        });
        event.preventDefault();
    })
/**********END send code country**************/

});
