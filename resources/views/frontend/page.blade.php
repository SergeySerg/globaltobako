@extends('ws-app')

@include('frontend.header_content')

@section('content')

    <section id="faq" class="cover switchable text-center-xs bg--secondary imagebg download-section">
        <div class="faq-top-bg"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 faq-bg">

                    @if( $static_page['active'] == 1)

                        <ul class="breadcrumb">
                            <li><a href="/{{ App::getLocale() }}">{{ trans('base.home') }}</a></li>
                            <li> > {{ $static_page->getTranslate('title') }}</li>
                        </ul>

                        <div class="page-content">{!!$static_page->getTranslate('description')!!}</div>

                        @if($static_page->getImages())

                            <div class="static-gallery">
                                <div id="page-gallery-{{$static_page->id}}" class="flex-gallery" style="display:none;">

                                    @foreach($static_page->getImages() as $imgSrc)

                                        <img alt="" src="/{{ $imgSrc['min'] }}"
                                             data-image="/{{ $imgSrc['full'] }}">

                                    @endforeach

                                </div>
                            </div>

                        @endif

                    @else

                        <ul class="breadcrumb">
                            <li><a href="/{{ App::getLocale() }}">{{ trans('base.home') }}</a></li>
                        </ul>
                        <div class="page-content">Page not found</div>

                    @endif
                    
                </div>
            </div>
        </div>
    </section>

@endsection