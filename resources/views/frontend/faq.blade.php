@extends('ws-app')

@include('frontend.header_content')

@section('content')

    <section id="faq" class="cover switchable text-center-xs bg--secondary imagebg download-section">
        <div class="faq-top-bg"></div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 faq-bg">
                    <ul class="breadcrumb">
                        <li><a href="/{{ App::getLocale() }}">{{ trans('base.home') }}</a></li>
                        <li> > {{ $categories_data['faq']->getTranslate('title')}}</li>
                    </ul>
                    <h1 class="page-name">{{ $categories_data['faq']->getTranslate('title')}}</h1>

                    @forelse($faq as $faq_item)

                        <div class="question-block">
                            <div class="question"><i class="fa fa-angle-down" aria-hidden="true"></i>{{ $faq_item->getTranslate('title') }}</div>
                            <div class="answer">
                                {!! $faq_item->getTranslate('short_description') ? $faq_item->getTranslate('short_description') : '' !!}
                            </div>
                        </div>

                    @empty
                        Нет записей
                    @endforelse

                </div>
            </div>
        </div>
    </section>
    
@endsection

