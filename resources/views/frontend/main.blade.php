@extends('ws-app')

@section('header-content')

    <div class="header">
        <div class="container">
            <div class="row">
                <div class="col-xs-8">
                </div>
                <div class="col-xs-4">
                    <div class="lang text-right">
                        <a class="active-lang" href="#"><img src=""></a>
                        <ul class="langs">

                            @foreach($langs as $lang)
                                <li> <a href="{{str_replace(url(App::getLocale()), url($lang->lang), Request::url())}}"><img src="/{{ $lang->img }}" alt="{{ $lang->lang }}"></a></li>
                            @endforeach

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="nav-container">
        <div class="via-1490875280654" via="via-1490875280654" vio="111">
            <div class="bar bar--sm hidden">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-2 col-xs-3 col-sm-2">
                            <a href="/{{ App::getLocale() }}"> <img class="logo logo-dark" alt="logo" src="{{ asset('/img/frontend/logo.png') }}"> <img class="logo logo-light" alt="logo" src="{{ asset('/img/frontend/logo-light.png') }}"> </a>
                        </div>
                        <div class="col-xs-9 col-sm-10 text-right">
                            <a href="#" class="hamburger-toggle" data-toggle-class="#menu1;hidden-xs hidden-sm"> <i class="icon icon--sm stack-interface stack-menu"></i> </a>
                        </div>
                    </div>
                </div>
            </div>
            <nav id="menu1" class="bar bar-1 r-bar">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-2 col-md-1 col-sm-2">
                            <div class="bar__module">
                                <a href="/{{ App::getLocale() }}"> <img class="logo logo-dark" alt="logo" src="{{ asset('/img/frontend/logo_footer.png') }}"> <img class="logo logo-light" alt="logo" src="{{ asset('/img/frontend/logo-light.png') }}"> </a>
                            </div>
                        </div>
                        <div class="col-md-11 col-sm-12 text-right text-left-xs text-left-sm">
                            <div class="bar__module">
                                <ul class="menu-horizontal text-left">
                                    @include('frontend.menu')
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>

@endsection

@section('content')

    @if(isset($download) AND count($download) !== 0 AND $categories_data['download']->active == 1)
        
        <section id="download" class="r-section cover switchable text-center-xs bg--secondary imagebg download-section">
            <div class="background-image-holder r-background-image-holder"> <img alt="background" src="{{ asset('/img/frontend/nav_bg.png') }}"> </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">

                        @if($download->getAttributeTranslate('Картинка'))
                            <img alt="Image download" src="{{ $download->getAttributeTranslate('Картинка') }}">
                        @else
                            <img alt="Image download" src="{{ asset('/img/frontend/my_bg_img2.png') }}">
                        @endif

                    </div>
                    <div class="col-sm-6 col-md-6 mt--3">
                        <div class="download-wrap">
                            <img src="{{ asset('/img/frontend/xomobile_logo.png') }}" alt="" class="download-logo">
                            <div class="lead r-lead download-lead">{!! $download->getTranslate('short_description') ? $download->getTranslate('short_description') : '' !!}</div>
                            <div class="download-link-wrap">

                                @foreach($images as $image_download)
                                    <a href="{{ $image_download->getAttributeTranslate('Cсылка на скачивание') ? $image_download->getAttributeTranslate('Cсылка на скачивание') : '#' }}" target="_blank" class="download-link"><img src="{{ $image_download->getAttributeTranslate('Картинка кнопки') }}"></a>
                                @endforeach

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    @endif

    <section id="prices" class="text-center bg--secondary find-section">
        <div class="container">
            <div class="row">
                <h4 class="tariff-title text-center">{{ $texts->get('find_name') }}</h4>
                <form action="" id="tariffing" method="post">
                    <div class="col-md-12">
                        <div id="tariffing-result">
                            <div id="error" style="display: none">{{ $texts->get('connection_error') }}</div>
                            <div id="tariff-not-found" style="display: none;">{{ $texts->get('tariff_not_found') }}</div>
                            <div id="tariffing-operator"></div>
                            <div id="tariffing-rate"></div>
                        </div>
                    </div>
                    <div class="col-md-offset-3 col-md-6 col-md-offset-3">
                        <input class="validate-required validate-email r-white" type="text" name="code" id="insert_field" placeholder="{{ $texts->get('find_placeholder') }}">
                        <input type="hidden" name="url" value="/{{ App::getLocale() }}/rate"/>
                        <input type="hidden" name="_token" value="{{csrf_token()}}"/>
                    </div>
                </form>
            </div>
        </div>
    </section>

    @if(isset($about) AND count($about) !== 0  AND $categories_data['about']->active == 1)

        <section id="about-us" class="cover unpad--bottom switchable text-center-xs bg--secondary imagebg about-us">
            <div class="background-image-holder"> <img alt="background" src="{{ asset('/img/frontend/about_us_bg.png') }}"> </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <h4 class="about-us-title text-center">{{ $categories_data['about']->getTranslate('title') }}</h4>
                            <div class="lead about-us-lead">
                                {!!  $about->getTranslate('description') ? $about->getTranslate('description') : ''!!}
                            </div>
                        </div>
                    </div>
                </div>
        </section>

    @endif

    @if(isset($solutions) AND count($solutions) !== 0  AND $categories_data['solutions']->active == 1)

        <section id="decision" class="text-center bg--secondary find-section">
        <div class="container">
            <div class="row">
                <h4 class="section-name text-center">{{ $categories_data['solutions']->getTranslate('title') }}</h4>
               
               @foreach($solutions as $solution)
                    <div class="col-sm-6 col-md-4">
                    <div class="decision-block">
                        <div class="decision-img" style="background-image: url('{{ asset( $solution->getAttributeTranslate('Картинка')) }}')"></div>
                        <div class="decision-name_wrap">
                            <h4 class="decision-name">{{ $solution->getTranslate('title') }}</h4>
                        </div>
                        <a href="/{{ App::getLocale() }}/{{ $categories_data['solutions']->link }}/{{ $solution->id }}" class="decision-more">{{ $texts->get('more') }}</a>
                    </div>
                </div>

                @endforeach
            </div>
        </div>
    </section>

    @endif

    <section class="cover unpad--bottom switchable text-center-xs bg--secondary imagebg">
        <div class="background-image-holder"> <img alt="background" src="{{ asset('/img/frontend/slider_bg.png') }}"> </div>
        
        @if(isset($slider) AND count($slider) !== 0  AND $categories_data['slider']->active == 1)

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h4 class="slider-title text-center">{{ $categories_data['slider']->getTranslate('title') }}</h4>
                    </div>
                    <div class="owl-carousel">

                        @foreach($slider as $slide)
                            <div class="slide-img-bg" style="background-image: url('{{ asset( $slide->getAttributeTranslate('Картинка')) }}');">
                                <div class="slide-text">
                                    <h2 class="slide-title">{{ $slide->getTranslate('title') }}</h2>
                                    <div class="lead r-lead">{!!  $slide->getTranslate('short_description') ? $slide->getTranslate('short_description') : ''!!}</div>
                                </div>
                            </div>
                        @endforeach

                    </div>
                </div>
            </div>

        @endif

    </section>

    @if(isset($video) AND count($video) !== 0 AND $categories_data['video']->active == 1)

        <section class="switchable r-switchable r-switchable-video text-center">
            <div class="background-image-holder"><img alt="background" src="{{ asset('/img/frontend/phone_in_hand_bg.jpg') }}"> </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <h1 class="video-title">{{ $video->getTranslate('title') }}</h1>
                        <div class="lead r-lead">{!! $video->getTranslate('short_description') ? $video->getTranslate('short_description') : '' !!}</div>
                        <p class="lead r-lead"><a href="{{ $video->getAttributeTranslate('Cсылка на ютуб') ? $video->getAttributeTranslate('Cсылка на ютуб') : "https://www.youtube.com" }}"><i class="socicon socicon-youtube icon icon--lg"></i></a></p>
                    </div>
                </div>
            </div>
        </section>

    @endif

    @if(isset($price) AND count($price) !== 0 AND $categories_data['price']->active == 1)

        <section class="r-switchable">
            <div class="container">
                <div class="row">
                    <h2 class="section-name text-center">{{ $categories_data['price']->getTranslate('title') }}</h2>
                    
                    @foreach($price as $price_item)
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <div class="feature feature-5 boxed boxed--lg boxed--border">

                                @if($benefit->getAttributeTranslate('Картинка'))

                                    <div class="col-xs-12 col-md-3">
                                        <div class="r-feature-img" style="background-image: url('{{ asset( $price_item->getAttributeTranslate('Картинка')) }}')"></div>
                                    </div>
                                    <div class="col-xs-12 col-md-9">

                                @else
                                    <div class="col-xs-12">
                                @endif

                                    <div class="feature__body">
                                        <h4>{{ $price_item->getTranslate('title') }}</h4>
                                        {!! $price_item->getTranslate('short_description') ? $price_item->getTranslate('short_description') : '' !!}
                                    </div>
                                </div>
                            </div>
                        </div>

                    @endforeach

                </div>
            </div>
        </section>

    @endif

    <section id="benefits">

        @if(isset($benefits) AND count($benefits) !== 0 AND $categories_data['benefits']->active == 1)
            
            <div class="container" >
                <div class="row">
                    <h4 class="section-name text-center">{{ $categories_data['benefits']->getTranslate('title') }}</h4>
                    
                    @foreach($benefits as $benefit)
                        <div class="col-sm-6 col-md-3">
                            <div class="feature feature-5 boxed boxed--lg boxed--border boxed-r">
                                
                                @if($benefit->getAttributeTranslate('Картинка'))
                                    <div class="col-md-12">
                                        <div class="r-feature-img" style="background-image: url('{{ asset( $benefit->getAttributeTranslate('Картинка')) }}')"></div>
                                    </div>
                                    <div class="col-md-12">

                                        @else
                                            <div class="col-md-12">

                                            @endif

                                            <div class="feature__body">
                                                <h4>{{ $benefit->getTranslate('title') }}</h4>
                                                {!! $benefit->getTranslate('short_description') ? $benefit->getTranslate('short_description') : ''!!}  </div>
                                            </div>

                                            @if($benefit->getAttributeTranslate('Флажок') == 1)
                                                <div class="free-block">{{ $benefit->getAttributeTranslate('Текст во флажке') ? $benefit->getAttributeTranslate('Текст во флажке') : 'Free' }}</div>
                                            @endif

                                    </div>
                            </div>

                            @endforeach

                        </div>
                </div>

        @endif

    </section>

    @if(isset($contact) AND count($contact) !== 0 AND $categories_data['contact']->active == 1)

        <section id="contacts" class="switchable r-switchable bg--secondary">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <h4 class="r-black">{{ $categories_data['contact']->getTranslate('title') }}</h4>
                        <div class="lead contact-lead">{!! $contact->getTranslate('short_description') ? $contact->getTranslate('short_description') : '' !!}</div>
                    </div>
                    <div class="col-sm-6">
                        <div class="row">
                            <form action="" id="callback" method="post">
                                <div class="col-xs-12"><input type="text" name="name" class="validate-required" placeholder="{{ $texts->get('your_name') }}"> </div>
                                <div class="col-xs-12"><input type="email" name="email" class="validate-required validate-email" placeholder="E-mail"> </div>
                                <div class="col-xs-12"><textarea rows="8" name="text" class="validate-required" placeholder="{{ $texts->get('message') }}"></textarea> </div>
                                <div class="col-xs-12"> <button type="submit" id="submit-send" class="btn btn--primary type--uppercase">{{ $texts->get('send') }}</button> </div>
                                <input type="hidden" name="_token" value="{{csrf_token()}}"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    @endif
    
@endsection