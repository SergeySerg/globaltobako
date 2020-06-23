@extends('ws-app')

@section('content')

        <!-- .contacts -->
<div class="contacts">

    <div class="container">

        <span class="fonText">{{ $categories_data[$type]->getTranslate('title') ? $categories_data[$type]->getTranslate('title') : '��������' }}</span>

        <div class="container__row">

            <div class="container__col">

                <div class="presenBox">
                    {!! $contact[0]->getTranslate('title') !!}
                    {!! $contact[0]->getTranslate('short_description') !!}
                </div>

                <ul class="contacts__address">
                    <li><a href="tel:{{ $texts->get('phone') }}" class="address-phone">{{ $texts->get('phone') }}</a></li>
                    <li><span class="address-info">{{ $texts->get('address') }}</span></li>
                    <li><a class="address-email" href="mailto:{{ $texts->get('email') }}">{{ $texts->get('email') }}</a></li>
                </ul>

            </div>

            <div class="container__col">

                <form class="contForm" id="callback">
                    <h3>{{ trans('base.contacts') }}</h3>
                    <p>{{ trans('base.require_field') }}</p>

                    <div class="contForm__cont">
                        <div class="contForm__box"><input  required type=text name="name" placeholder="{{ trans('base.name') }}" /></div>
                        <div class="contForm__box"><input type="email" required name="email" placeholder="{{ trans('base.email') }}" /></div>
                        <div class="contForm__box"><textarea required name="text" placeholder="{{ trans('base.text') }}"></textarea></div>
                        <input type="hidden" name="_token" value="{{csrf_token()}}"/>
                    </div>
                    <input type="hidden" name="url" value="/{{ App::getLocale() }}/{{ $type }}"/>
                    <button id="submit-send" class="button">{{ trans('base.send') }}</button>

                </form>

            </div>

        </div>

    </div>

</div>
<!-- END .contacts -->




<!-- .map -->
<div class="map">

    <div class="map__cont">
        <iframe src="{{ $texts->get('map') }}" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>

    <div class="inclined inclined--top inclined--colorBeige"></div>

</div>
<!-- END .map -->

@endsection