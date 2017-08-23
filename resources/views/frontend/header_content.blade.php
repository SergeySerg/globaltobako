{{--Header-content section--}}
    <div class="header header-faq">
        <div class="container">
            <div class="row">
                <div class="col-xs-6">
                </div>
                <div class="col-xs-6">
                    <div class="lang text-right">
                        <a class="active-lang" href="#"><img src="{{ asset('/img/frontend/en.png') }}"></a>
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
            <nav id="menu1" class="bar bar-1 r-bar">
                <div class="container">
                    <div class="row">
                        <div class="col-md-1 col-sm-2 col-xs-6">
                            <div class="bar__module">
                                <a href="/{{ App::getLocale() }}"> <img class="logo logo-dark" alt="logo" src="{{ asset('/img/frontend/logo.png') }}"> <img class="logo logo-light" alt="logo" src="{{ asset('/img/frontend/logo-light.png') }}"> </a>
                            </div>
                        </div>
                        <div class="col-md-11 col-sm-8 col-xs-6 text-right text-left-xs text-left-sm">
                            <div class="bar__module">
                                <ul class="menu-horizontal menu-horizontal-faq text-left">
                                    @include('frontend.menu')
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
{{--/Header-content section--}}
