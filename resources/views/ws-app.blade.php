<!DOCTYPE html>
<html lang="{{ App::getLocale() }}">
<head>
	<meta charset="utf-8">
	<title>	@if(isset($static_page)){{ $static_page->getTranslate('meta_title') }}  @elseif(isset($seo)) {{ $seo->getTranslate('meta_title') }} @endif</title>
	<meta name="description" content="@if(isset($static_page)) {{ $static_page->getTranslate('meta_description') }} @elseif(isset($seo)){{ $seo->getTranslate('meta_description') }}@endif">
	<meta name="keywords" content="@if(isset($static_page)) {{ $static_page->getTranslate('meta_keywords') }} @elseif(isset($seo)) {{ $seo->getTranslate('meta_keywords') }}@endif">

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<link rel="shortcut icon" href="{{ asset('/img/favicon/favicon.ico') }}" type="image/x-icon">
	<link rel="apple-touch-icon" href="{{ asset('/img/favicon/apple-touch-icon.png') }}">
	<link rel="apple-touch-icon" sizes="72x72" href="{{ asset('img/favicon/apple-touch-icon-72x72.png') }}">
	<link rel="apple-touch-icon" sizes="114x114" href="{{ asset('/img/favicon/apple-touch-icon-114x114.png') }}">

	<link href="{{ asset('/css/frontend/stack-interface.css') }}" rel="stylesheet" type="text/css" media="all">
	<link href="{{ asset('/css/frontend/socicon.css') }}" rel="stylesheet" type="text/css" media="all" />
	<link href="{{ asset('/css/frontend/iconsmind.css') }}" rel="stylesheet" type="text/css" media="all" />
	<link href="{{ asset('/css/frontend/bootstrap.css') }}" rel="stylesheet" type="text/css" media="all" />
	<link href="{{ asset('/css/frontend/stack-interface.css') }}" rel="stylesheet" type="text/css" media="all" />
	<link href="{{ asset('/css/frontend/theme-serpent.css') }}" rel="stylesheet" type="text/css" media="all" />
	<link href="{{ asset('/css/frontend/font-awesome.min.css') }}" rel="stylesheet" type="text/css" media="all" />
	<link href="{{ asset('/libs/owl-carousel/owl.carousel.css') }}" rel="stylesheet" type="text/css" media="all" />
	<link href="{{ asset('/libs/owl-carousel/owl.theme.css') }}" rel="stylesheet" type="text/css" media="all" />
	<link href="{{ asset('/libs/owl-carousel/owl.transitions.css') }}" rel="stylesheet" type="text/css" media="all" />
	<link href="{{ asset('/libs/unitegallery/dist/css/unite-gallery.css') }}" rel="stylesheet">
	<link href="{{ asset('/css/frontend/custom.css') }}?ver={{ $version }}" rel="stylesheet" type="text/css" media="all" />
	<link href="{{ asset('/css/plugins/sweetalert.css') }}" rel="stylesheet">

	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
</head>

<body data-smooth-scroll-offset="77">
	<div class="button-menu"><div class="menu-i icon"></div></div>
	<div class="main-container">
		<div class="menu-fix">
			<div class="container">
				<div class="row">
					<div class="col-xs-4 col-md-5">
						<a href="/{{ App::getLocale() }}"> <img class="menu-fix_logo" alt="logo" src="{{ asset('/img/frontend/logo.png') }}"></a>
					</div>
					<div class="col-xs-8 col-md-7 text-right">
						<ul class="menu-horizontal text-right">
							@include('frontend.menu')
						</ul>

					</div>
				</div>
			</div>
		</div>

		@yield('header-content')

		@yield('content')

		<footer class="r-footer text-center-xs space--xs">
			<div class="container">
				<div class="row">
					<div class="col-sm-2 col-md-2 col-lg-2">
						<a href="/{{ App::getLocale() }}"><img class="logo r-logo" alt="logo" src="{{ asset('/img/frontend/logo_footer.png') }}"> </a>
					</div>
					<div class="col-xs-12 col-sm-5 col-md-4 col-lg-4 text-center-xs">
						<ul class="menu-horizontal r-footer-menu text-left-md">
							@if(isset($faq) AND count($faq) !== 0  AND  $categories_data['faq']->active == 1)
								<li> <a class="r-menu-link"  href="/{{ App::getLocale() }}/faq">FAQ</a> </li>
							@endif
							<li> <a class="r-menu-link" data-scroll-id="prices" href="/{{ App::getLocale() }}#prices">{{ $categories_data['price']->getTranslate('title') }}</a> </li>
							@if(isset($download) AND count($download) !== 0 AND $categories_data['download']->active == 1)
								<li> <a class="r-menu-link" data-scroll-id="download" href="/{{ App::getLocale() }}#download">{{ $categories_data['download']->getTranslate('title') }}</a> </li>
							@endif
							@if(isset($contact) AND count($contact) !== 0 AND $categories_data['contact']->active == 1)
								<li> <a class="r-menu-link" data-scroll-id="contacts" href="/{{ App::getLocale() }}#contacts">{{ $categories_data['contact']->getTranslate('title') }}</a> </li>
							@endif
						</ul>
					</div>
					<div class="col-xs-12 col-sm-5 col-md-5 col-lg-5">
						<ul class="menu-horizontal r-footer-menu text-right">

							@if($categories_data['page']->active == 1)

								@if(is_object($page) AND count($page) > 1)

									@foreach($page as $page_item)
										<li> <a class="r-menu-link"  href="/{{ App::getLocale() }}/{{ $categories_data['page']->link }}/{{ $page_item->id }}">{{ $page_item->getTranslate('title') }}</a> </li>
									@endforeach

								@elseif(count($page) == 1)
										<li> <a class="r-menu-link"  href="/{{ App::getLocale() }}/{{ $categories_data['page']->link }}/{{$page->id}}">{{$page->getTranslate('title')}}</a> </li>
								@endif

							@endif

						</ul>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-1 col-lg-1">
						<ul class="social-list list-inline list--hover text-right">

							@foreach( $social as $social_item)
								<li class="social-list-item"><a target="_blank" href="{{ $social_item->getAttributeTranslate('Ссылка на сеть') }}">{!! $social_item->getAttributeTranslate('Картинка соц. сети') !!}</a></li>
							@endforeach
							
						</ul>
					</div>
					<div class="col-xs-12 col-sm-12">
						<div class="copyright text-center">2017 xomobile.com</div>
					</div>
				</div>
			</div>
		</footer>

	</div>
	<div id="overlay"></div><!-- Пoдлoжкa -->

{{--Файл переводов--}}
	<script>
		var trans = {
			'base.success': '{{ trans('base.success_send_contact') }}',
			'base.error': '{{ trans('base.error_send_contact') }}',
		};
	</script>
{{--/Файл переводов--}}
{{-- JS --}}
	<script src="{{ asset('/js/plugins/sweetalert.min.js') }}"></script>
	<script src="{{ asset('/js/frontend/common.js') }}?ver={{ $version }}"></script>
	<script src="{{ asset('/js/frontend/parallax.js') }}"></script>
	<script src="{{ asset('/js/frontend/countdown.min.js') }}"></script>
	<script src="{{ asset('/js/frontend/smooth-scroll.min.js') }}"></script>
	<script src="{{ asset('/libs/owl-carousel/owl.carousel.min.js') }}"></script>
	<script src="{{ asset('/libs/unitegallery/dist/js/unitegallery.js') }}"></script>
	<script src="{{ asset('/libs/unitegallery/dist/themes/tilesgrid/ug-theme-tilesgrid.js') }}"></script>
	<script src="{{ asset('/js/frontend/scripts.js') }}?ver={{ $version }}"></script>
{{-- /JS --}}
</body>
</html>