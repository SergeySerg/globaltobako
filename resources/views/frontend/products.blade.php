@extends('ws-app')

@section('content')

        <!-- .sliderPresent -->
<div class="sliderPresent">

    <div class="container">

        <span class="fonText">{{ $categories_data[$type]->getTranslate('title') ? $categories_data[$type]->getTranslate('title') : 'ПРОДУКЦІЯ' }}</span>

        <div class="container__row">

            <div class="container__col">

                <div class="presenBox">
                    {!! $products[0]->getTranslate('title') !!}
                    {!! $products[0]->getTranslate('short_description') !!}
                </div>

            </div>

            <div class="container__col">
                <div class="slidPresen">
                    @foreach($products[0] -> getImages() as $imgProduct)
                        <div class="slidPresen__box">
                            <a href="javascript:void(0)"><img src="/{{ $imgProduct['full'] }}" alt="img" /></a>
                        </div>
                    @endforeach
                </div>
            </div>

        </div>

    </div>

</div>
<!-- END .sliderPresent -->


@if(isset($advantages) AND count($advantages) !== 0 AND $categories_data['advantages']->active == 1)

    <!-- .production-main -->
    <div class="production-main production-main--white">

        <div class="container">

            <div class="title"><h2>{{ $categories_data['directions']->getTranslate('title') ? $categories_data['directions']->getTranslate('title') : 'Напрямки виробництва' }}{{--<span>{{ trans('base.directions') }}</span>--}}</h2></div>

            <div class="container__row">

                @foreach($directions as $direction)
                    <div class="container__col">

                        <div class="prodBox">
                            <div class="prodBox__substrate"><img src="/{{ $direction->getAttributeTranslate('Фон') ? $direction->getAttributeTranslate('Фон') : asset("pictures/substrate/img-1.jpg") }}" alt="GLOBAL TOBACCO" /></div>
                            {!! $direction->getTranslate('title') !!}
                            <img src="/{{ $direction->getAttributeTranslate('Картинка продукту') ? $direction->getAttributeTranslate('Картинка продукту') : asset("pictures/production/img-1.png") }}" alt="GLOBAL TOBACCO" />
                            {!! $direction->getTranslate('short_description') !!}
                        </div>

                    </div>
                @endforeach

             </div>

            {{--<div class="container__row">

                <div class="container__col">

                    <div class="prodBox">
                        <div class="prodBox__substrate"><img src="pictures/substrate/img-1.jpg" alt="img" /></div>
                        <h3>GLOBAL TOBACCO</h3>
                        <h4>INTERNATIONAL</h4>
                        <img src="pictures/production/img-1.png" alt="img" />
                        <p>Український виробник тютюнових виробів. Компанія започаткована у 2007 році на базі Монастириської тютюнової фабрики.</p>
                    </div>

                </div>

                <div class="container__col">

                    <div class="prodBox">
                        <div class="prodBox__substrate"><img src="pictures/substrate/img-2.jpg" alt="img" /></div>
                        <h3>GLOBAL TOBACCO</h3>
                        <h4>INTERNATIONAL</h4>
                        <img src="pictures/production/img-1.png" alt="img" />
                        <p>Український виробник тютюнових виробів. Компанія започаткована у 2007 році на базі Монастириської тютюнової фабрики.</p>
                    </div>

                </div>

            </div>--}}

        </div>

    </div>
    <!-- END .production-main -->



    @foreach($directions as $direction)
         <!-- .boards -->
        <div class="boards">

            <div class="inclined inclined--bottomArrow inclined--colorWhite"></div>

            <div class="container">

                <span class="fonText">01</span>

                <div class="container__row">

                    <div class="container__col">

                        <div class="presenBox presenBox--white">
                            {!! $direction->getTranslate('title') !!}
                            {!! $direction->getTranslate('short_description') !!}>
                            <a class="button button--white" data-toggle="modal" data-target="#exampleModal" href="javascript:void(0)">{{ trans('base.order') }}</a>
                        </div>

                    </div>

                    <div class="container__col">

                        <div class="boardsSlider">
                            @foreach($direction -> getImages() as $imgDirectionProduct)
                                <div class="boardsSlider__box"><span><a href="javascript:void(0)"><img src="/{{ $imgDirectionProduct['min'] }}" alt="img" /></a></span></div>
                            @endforeach

                        </div>

                    </div>

                </div>

            </div>

        </div>
        <!-- END .boards -->
    <!-- .inform -->
    <div class="inform inform--indentLess">

        <div class="container">

            <div class="title"><h2>{{ $categories_data['factors']->getTranslate('title') ? $categories_data['factors']->getTranslate('title') : 'ДЕКІЛЬКА ФАКТОРІВ' }}{{--<span>{{ trans('base.directions') }}</span>--}}</h2></div>

            <div class="container__row">
                @foreach( $direction->article_children as $factor)
                    <div class="container__col">

                        <div class="inform__box">
                            <div class="inform__icon inform__icon--people"></div>
                            <h3>{{ $factor->getTranslate('title')}}</h3>
                            {!!  $factor->getTranslate('short_description') !!}
                        </div>

                    </div>
                @endforeach
            </div>

        </div>

        <div class="informSlider">
            @foreach( $direction->article_children as $factor)
                <div class="informSlider__box">
                    <div class="inform__box">
                        <div class="inform__icon inform__icon--people"></div>
                        <h3>{{ $factor->getTranslate('title')}}</h3>
                        {!!  $factor->getTranslate('short_description') !!}
                    </div>
                </div>
            @endforeach
        </div>

    </div>
    <!-- END .inform -->

    @endforeach
@endif

<!-- .logos -->
<div class="logos">

    <!-- <div class="inclined inclined--top inclined--colorWhite"></div> -->

    <div class="container">

        <span class="fonText">02</span>

        <div class="container__row">

            <div class="container__col">

                <div class="presenBox">
                    {!! $products[0]->getTranslate('title') !!}
                    {!! $products[0]->getTranslate('short_description') !!}
                    <a class="button" data-toggle="modal" data-target="#exampleModal" href="javascript:void(0)">{{ trans('base.detale') }}</a>
                </div>

            </div>

            <div class="container__col">

                <div class="logos-img"><a href="javascript:void(0)"><img src="{{ asset('pictures/logos/log-1.png') }}" alt="Logo" /></a></div>

            </div>

        </div>

    </div>

</div>
<!-- END .logos -->

@endsection