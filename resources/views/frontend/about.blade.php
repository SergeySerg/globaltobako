@extends('ws-app')

@section('content')

<!-- .sliderPresent -->
<div class="sliderPresent">

    <div class="container">


        <div class="container__row">

            <div class="container__col">

                <div class="presenBox">
                    {!! $about[0]->getTranslate('title') !!}
                    {!! $about[0]->getTranslate('short_description') !!}
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
    <!-- .inform -->
    <div class="inform">

        <div class="container">

            <div class="title"><h2>{{ $categories_data['advantages']->getTranslate('title') ? $categories_data['advantages']->getTranslate('title') : 'Переваги' }}<span>{{ trans('base.company') }}</span></h2></div>

            <div class="container__row">

                @foreach($advantages as $advantage)

                    <div class="container__col">

                        <div class="inform__box">
                            <div class="inform__icon inform__icon--people"></div>
                            <h3> {{ $advantage->getTranslate('title') }}</h3>
                            {!! $advantage->getTranslate('short_description') !!}
                        </div>

                    </div>

                @endforeach

            </div>

        </div>

        <div class="informSlider">
            @foreach($advantages as $advantage)
                <div class="informSlider__box">
                    <div class="inform__box">
                        <div class="inform__icon inform__icon--people"></div>
                        <h3>{{ $advantage->getTranslate('title') }}</h3>
                        {!! $advantage->getTranslate('short_description') !!}                    </div>
                </div>
            @endforeach
        </div>

    </div>
    <!-- END .inform -->
@endif



@if(isset($team) AND count($team) !== 0 AND $categories_data['team']->active == 1)

    <!-- .command -->
    <div class="command">

        <div class="container">

            <div class="title"><h2>{{ $categories_data['team']->getTranslate('title') ? $categories_data['team']->getTranslate('title') : 'Команда' }}<span>{{ trans('base.company') }}</span></h2></div>

            <div class="commandSlider">
                @foreach($team as $item_team)
                    <div class="commandSlider__box">
                    <a href="javascript:void(0)"><img src="/{{ $item_team->getAttributeTranslate('Фото працівника') ? $item_team->getAttributeTranslate('Фото працівника') : " " }}" alt="{{ $item_team->getTranslate('title') }}" /></a>
                    <span>{{ $item_team->getTranslate('title') }}</span>
                    <i>“{{ $item_team->getAttributeTranslate('Посада') ? $item_team->getAttributeTranslate('Посада') : " " }}”</i>
                </div>
                @endforeach
            </div>

        </div>

    </div>
    <!-- END .command -->
@endif



<!-- .infoText -->
<div class="infoText">

    <div class="container">

        <div class="infoText__cont">
            <p>Компанія “GLOBAL TOBACCO INTERNATIONAL LTD” співпрацює з найбільшими компаніями різних країн і їх представництвами в Україні та має величезний досвід комплексного обслуговування підприємств. Компанія “GLOBAL TOBACCO” пропонує співпрацю на спеціальних умовах для гуртових компаній.</p>
        </div>

    </div>

</div>
<!-- END .infoText -->




<!-- .partners-main -->
<div class="partners-main partners-main--min">

    <div class="inclined inclined--top inclined--colorWhite"></div>

    <div class="container">

        <div class="presenBox presenBox--white">
            {!! $about[0]->getTranslate('title') !!}
            {!! $about[0]->getTranslate('description') !!}
            <a class="button" href="javascript:void(0)">{{ trans('base.detale') }}</a>
        </div>

    </div>

</div>
<!-- END .partners-main -->


@endsection