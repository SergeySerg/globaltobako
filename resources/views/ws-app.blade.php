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
	<title>Global Tobacco</title>
{{--
	<title>	@if(isset($static_page)){{ $static_page->getTranslate('meta_title') }}  @elseif(isset($seo)) {{ $seo->getTranslate('meta_title') }} @endif</title>
	<meta name="description" content="@if(isset($static_page)) {{ $static_page->getTranslate('meta_description') }} @elseif(isset($seo)){{ $seo->getTranslate('meta_description') }}@endif">
	<meta name="keywords" content="@if(isset($static_page)) {{ $static_page->getTranslate('meta_keywords') }} @elseif(isset($seo)) {{ $seo->getTranslate('meta_keywords') }}@endif">
--}}
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

	<script src="{{ asset('/js/frontend/jquery.js') }}"></script>
	<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min.js"></script>
	<script src="{{ asset('/js/frontend/common.js') }}"></script>
	<script src="{{ asset('/js/frontend/modernizr.js') }}"></script>
	<script>jQuery.extend(Drupal.settings, {"basePath":"\/","pathPrefix":"pl\/","ajaxPageState":{"theme":"global_tobacco","theme_token":"aVJELFg5m-MYbw7WFxJEzGZ8z18ftdfxGxuvQu0NK5o","js":{"sites\/all\/themes\/bootstrap\/js\/bootstrap.js":1,"sites\/all\/modules\/contrib\/jquery_update\/replace\/jquery\/1.10\/jquery.min.js":1,"misc\/jquery.once.js":1,"misc\/drupal.js":1,"\/\/netdna.bootstrapcdn.com\/bootstrap\/3.0.2\/js\/bootstrap.min.js":1,"misc\/textarea.js":1,"sites\/all\/modules\/contrib\/webform\/js\/webform.js":1,"sites\/all\/themes\/global_tobacco\/javascripts\/page-scroll-effects\/js\/modernizr.js":1,"sites\/all\/themes\/global_tobacco\/javascripts\/page-scroll-effects\/js\/velocity.min.js":1,"sites\/all\/themes\/global_tobacco\/javascripts\/page-scroll-effects\/js\/velocity.ui.min.js":1,"sites\/all\/themes\/global_tobacco\/javascripts\/page-scroll-effects\/js\/main.js":1,"sites\/all\/themes\/global_tobacco\/javascripts\/global_tobacco.lib.min.js":1},"css":{"modules\/system\/system.base.css":1,"modules\/field\/theme\/field.css":1,"sites\/all\/modules\/contrib\/views\/css\/views.css":1,"sites\/all\/modules\/contrib\/ctools\/css\/ctools.css":1,"sites\/all\/modules\/contrib\/webform\/css\/webform.css":1,"modules\/locale\/locale.css":1,"\/\/netdna.bootstrapcdn.com\/bootstrap\/3.0.2\/css\/bootstrap.min.css":1,"sites\/all\/themes\/bootstrap\/css\/overrides.css":1,"sites\/all\/themes\/global_tobacco\/css\/global_tobacco.min.css":1}},"urlIsAjaxTrusted":{"\/pl\/node\/1":true},"bootstrap":{"anchorsFix":"1","anchorsSmoothScrolling":"1","popoverEnabled":"1","popoverOptions":{"animation":1,"html":0,"placement":"right","selector":"","trigger":"click","title":"","content":"","delay":0,"container":"body"},"tooltipEnabled":"1","tooltipOptions":{"animation":1,"html":0,"placement":"auto left","selector":"","trigger":"hover focus","delay":0,"container":"body"}}});</script>

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

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-105973570-1', 'auto');
  ga('send', 'pageview');

</script>
	

{{-- /JS --}}
</body>
</html>