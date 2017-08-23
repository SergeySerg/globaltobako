{{--Item Menu--}}
@if(isset($about) AND count($about) !== 0  AND $categories_data['about']->active == 1)
    <li> <a class="r-menu-link" data-scroll-id="about-us" href="/{{ App::getLocale() }}#about-us">{{ $categories_data['about']->getTranslate('title') }}</a> </li>
@endif
    <li> <a class="r-menu-link" data-scroll-id="prices" href="/{{ App::getLocale() }}#prices">{{ $categories_data['price']->getTranslate('title') }}</a> </li>
@if(isset($download) AND count($download) !== 0 AND $categories_data['download']->active == 1)
    <li> <a class="r-menu-link" data-scroll-id="download" href="/{{ App::getLocale() }}#download">{{ $categories_data['download']->getTranslate('title') }}</a> </li>
@endif
    <li> <a class="r-menu-link" href="/{{ App::getLocale() }}/payment">{{ $texts->get('recharge') }}</a> </li>
@if(isset($contact) AND count($contact) !== 0 AND $categories_data['contact']->active == 1)
    <li> <a class="r-menu-link" data-scroll-id="contacts" href="/{{ App::getLocale() }}#contacts">{{ $categories_data['contact']->getTranslate('title') }}</a> </li>
@endif
{{--/Item Menu--}}