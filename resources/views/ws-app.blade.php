<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN">
<html lang="{{ App::getLocale() }}" dir="ltr"
	  xmlns:content="http://purl.org/rss/1.0/modules/content/"
	  xmlns:dc="http://purl.org/dc/terms/"
	  xmlns:foaf="http://xmlns.com/foaf/0.1/"
	  xmlns:og="http://ogp.me/ns#"
	  xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
	  xmlns:sioc="http://rdfs.org/sioc/ns#"
	  xmlns:sioct="http://rdfs.org/sioc/types#"
	  xmlns:skos="http://www.w3.org/2004/02/skos/core#"
	  xmlns:xsd="http://www.w3.org/2001/XMLSchema#">
<head  profile="http://www.w3.org/1999/xhtml/vocab">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta charset="utf-8">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="alternate" type="application/rss+xml" title="Global Tobacco RSS" href="http://globaltobako.com/pl/rss.xml" />

{{--
	<title>	@if(count($seo)) {{ $seo[0]->getTranslate('meta_title') }} @else Global Tobacco1 @endif</title>
--}}
{{--	<meta name="description" content="@if(isset($seo)){{ $seo{0}->getTranslate('meta_description') }} @else Табачні вироби @endif">
	<meta name="keywords" content="@if(isset($seo)) {{ $seo{0}->getTranslate('meta_keywords') }} @else Табачні вироби різних сортів @endif">--}}
	<link rel="shortcut icon" href="{{ asset('/img/favicon/favicon.ico') }}" type="image/x-icon">
	<link rel="apple-touch-icon" href="{{ asset('/img/favicon/apple-touch-icon.png') }}">
	<link rel="apple-touch-icon" sizes="72x72" href="{{ asset('img/favicon/apple-touch-icon-72x72.png') }}">
	<link rel="apple-touch-icon" sizes="114x114" href="{{ asset('/img/favicon/apple-touch-icon-114x114.png') }}">

	<link href="{{ asset('/css/frontend/theme.css') }}" rel="stylesheet" type="text/css" media="all">
	<link href="{{ asset('/css/frontend/form_two.css') }}" rel="stylesheet" type="text/css" media="all" />
	<link href="{{ asset('/css/frontend/form.css') }}" rel="stylesheet" type="text/css" media="all" />
	<link type="text/css" rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css" media="all" />
	<link href="{{ asset('/libs/owl.carousel.css') }}" rel="stylesheet" type="text/css" media="all" />
	<link href="{{ asset('/libs/owl.theme.css') }}" rel="stylesheet" type="text/css" media="all" />
	<link href="{{ asset('/css/frontend/main.css') }}" rel="stylesheet" type="text/css" media="all" />
	<link href="{{ asset('/css/plugins/sweetalert.css') }}" rel="stylesheet">

	<!-- HTML5 element support for IE6-8 -->
	<!--[if lt IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

	<script src="{{ asset('/js/frontend/jquery.js') }}"></script>
	<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.js"></script>

	<script src="{{ asset('/js/frontend/modernizr.js') }}"></script>

</head>
<body class="html front not-logged-in one-sidebar sidebar-first page-node i18n-pl" >
	<div id="skip-link">
		<a href="#main-content" class="element-invisible element-focusable">Skip to main content</a>
	</div>
	<div class="wrapper">
		<header>
			<h1 class="logo">
				<a href="/pl" title="Home" rel="home"><span>Global</span><span> Tobacco</span></a>
			</h1>
			<div class="language-switcher">
				<section id="block-locale-language" class="block block-locale clearfix">
					<ul class="language-switcher-locale-url">

						@foreach($langs as $lang)
							<li class="{{ $lang->lang }}@if(App::getLocale() == $lang->lang) active @endif"><a href="{{str_replace(url(App::getLocale()), url($lang->lang), Request::url())}}">{{$lang->lang}}</a></li>
						@endforeach

					</ul>
				</section>
			</div>
		</header>

			@yield('content')

		<footer></footer>
	</div>

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
	<script src="{{ asset('/js/frontend/bootstrap.js') }}"></script>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAYcm7rpoj87BtQPk8Q4TjddJQxcLx71mk"></script>
	<script src="{{ asset('/js/frontend/jquery.parallax.js') }}"></script>
	<script src="{{ asset('/libs/owl.carousel.min.js') }}"></script>
	<script src="{{ asset('/js/frontend/config.js') }}"></script>
	<script src="{{ asset('/js/frontend/common.js') }}"></script>

{{-- /JS --}}
</body>
</html>