@extends('ws-app')

@section('content')
    <main>
        <a id="main-content"></a>
        <div class="tabs"></div>
        <div class="region region-content">
            <section id="block-views-nodequeue-1-block" class="block block-views clearfix">
                <div class="view view-nodequeue-1 view-id-nodequeue_1 view-display-id-block view-dom-id-65d6040dff07133be91bfc69fc01c5fe">
                    <div class="view-content">
                        <div id="scroll-wrap" class="scroll-wrap" data-hijacking="on" data-animation="none">
                            <section class="views-row views-row-1 views-row-odd views-row-first cd-section visible">
                                <div id="node-9" class="node node-page clearfix" about="/pl/node/9" typeof="foaf:Document">
                                    @foreach($about as $about_item)
                                        <div class="container">
                                            <h2 class="block-title" >{{ $about_item->getTranslate('title') }}</h2>
                                            <div class="field field-name-body field-type-text-with-summary field-label-hidden">
                                                <div class="field-items">
                                                    <div class="field-item even" property="content:encoded">
                                                        {!! $about_item->getTranslate("short_description") !!}
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="{{ $about_item->getAttributeTranslate('Ссылка на прайсы') }}" class="j-btn download-btn">
                                                <span class="icon-download-to-folder"></span>
                                                <span class="help">{{ $about_item->getAttributeTranslate('Текст кнопки') }}</span>
                                            </a>
                                        </div>
                                    @endforeach
                                    <div class="phone">
                                        <span class="icon-phone-symbol"></span>
                                        <span class="tel">{{ $texts->get('phone') }}</span>
                                    </div>
                                    <div class="cd-vertical-nav">
                                        <a href="#0" class="cd-next">
                                            <span class="title">{{ trans('base.more') }}</span>
                                            <span class="icon-down-arrow"></span>
                                        </a>
                                    </div>
                                    <ul class="bg-parallax">
                                        <li class="bg layer" style="background-image: url('{{ asset('img/frontend/bg-1.jpg') }}');" data-depth="0.1"></li>
                                        <li class="mask layer" style="background-image: url('{{ asset('img/frontend/letter-mask.svg') }}');" data-depth="0.00"></li>
                                    </ul>
                                </div>
                            </section>
                            <section class="views-row views-row-2 views-row-even cd-section">
                                <div id="node-8" class="node node-page clearfix" about="/pl/node/8" typeof="foaf:Document">
                                    @foreach($company as $company_item)
                                        <div class="container">
                                        <h2 class="block-title" >{{ $company_item->getTranslate('title') }}</h2>
                                        <div class="field field-name-body field-type-text-with-summary field-label-hidden">
                                            <div class="field-items">
                                                <div class="field-item even" property="content:encoded">
                                                    {!! $company_item->getTranslate("short_description") !!}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    @endforeach
                                    <div class="cd-vertical-nav">
                                        <a href="#0" class="cd-next">
                                            <span class="title">{{ trans('base.our_contacts') }}</span>
                                            <span class="icon-down-arrow"></span>
                                        </a>
                                    </div>
                                    <ul class="bg-parallax">
                                        <li class="bg layer" style="background-image: url('{{ asset('img/frontend/bg-2.jpg') }}');" data-depth="0.1"></li>
                                        <li class="mask layer" style="background-image: url('{{ asset('img/frontend/letter-mask.svg') }}');" data-depth="0.00"></li>
                                    </ul>
                                </div>
                            </section>
                            <section class="views-row views-row-4 views-row-even cd-section">
                                <div id="node-10" class="node r-node node-page clearfix" about="/pl/node/10" typeof="foaf:Document">
                                    <div class="container">
                                        <h2 class="block-title product-section-title">{{ $categories_data['products']->getTranslate('title') }}</h2>
                                        <div class="owl-carousel">
                                            @foreach($products as $product_item)
                                                <div class="col-md-12">
                                                    <div class="product-item">
                                                        <div class="product-img">
                                                            <img src="{{ $product_item->getAttributeTranslate('Картинка товара') }}" alt="{{ $product_item->getTranslate('title') }}">
                                                        </div>
                                                        <h3 class="block-title">{{ $product_item->getTranslate('title') }}</h3>
                                                    </div>
                                                </div>
                                            @endforeach
                                        </div>
                                    </div>
                                    <div class="cd-vertical-nav">
                                        <a href="#0" class="cd-next">
                                            <span class="title">Наші контакти</span>
                                            <span class="icon-down-arrow"></span>
                                        </a>
                                    </div>
                                    <ul class="bg-parallax">
                                        <li class="bg layer" style="background-image: url('{{ asset('img/frontend/bg-4.jpg') }}');" data-depth="0.1"></li>
                                        <li class="mask layer" style="background-image: url('{{ asset('img/frontend/letter-mask.svg') }}');" data-depth="0.00"></li>
                                    </ul>
                                </div>
                            </section>
                            <section class="views-row views-row-3 views-row-odd views-row-last cd-section">
                                <div id="node-1" class="node node-webform node-promoted clearfix" about="/pl/node/1" typeof="sioc:Item foaf:Document">
                                    <div class="container">
                                        <div class="contacts-wrap">
                                            <div class="right">
                                                <div class="wrap-form">
                                                    <section id="block-block-1" class="block block-block clearfix">
                                                        <h2 class="block-title">{{ trans('base.our_contacts') }}</h2>
                                                        <div class="contact">
                                                            <span class="icon-home"></span>
                                                            <span>{{ $texts->get('address') }}</span>
                                                        </div>
                                                        <div class="contact">
                                                            <span class="icon-phone-symbol"></span>
                                                            <span>{{ $texts->get('phone') }}</span>
                                                        </div>
                                                        <div class="contact">
                                                            <span class="icon-letter"></span>
                                                            <a href="mailto:{{ $texts->get('email') }}" class="email">{{ $texts->get('email') }}</a>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                            <div class="left">
                                                <h2 class="block-title">{{ trans('base.contacts') }}</h2>
                                                <form class="webform-client-form webform-client-form-1" action="/pl/node/1" method="post" id="webform-client-form-1" accept-charset="UTF-8">
                                                    <div>
                                                        <div class="form-item webform-component webform-component-textfield webform-component--name">
                                                            <label for="edit-submitted-name">{{ trans('base.name') }} </label>
                                                            <input placeholder="{{ trans('base.name') }}" class="form-control form-text" type="text" id="edit-submitted-name" name="submitted[name]" value="" size="60" maxlength="128" />
                                                        </div>
                                                        <div class="form-item webform-component webform-component-email webform-component--email">
                                                            <label for="edit-submitted-email">{{ trans('base.email') }}  </label>
                                                            <input class="email form-text form-email" placeholder="{{ trans('base.email') }} " type="email" id="edit-submitted-email" name="submitted[email]" size="60" />
                                                        </div>
                                                        <div  class="form-item webform-component webform-component-textarea webform-component--questions-or-suggestions">
                                                            <label for="edit-submitted-questions-or-suggestions">{{ trans('base.questions') }} </label>
                                                            <div class="form-textarea-wrapper resizable">
                                                              <textarea placeholder="{{ trans('base.questions') }}" rows="3" class="form-control form-textarea" id="edit-submitted-questions-or-suggestions" name="submitted[questions_or_suggestions]" cols="60">
                                                              </textarea>
                                                            </div>
                                                        </div>
                                                        <input type="hidden" name="details[sid]" />
                                                        <input type="hidden" name="details[page_num]" value="1" />
                                                        <input type="hidden" name="details[page_count]" value="1" />
                                                        <input type="hidden" name="details[finished]" value="0" />
                                                        <input type="hidden" name="form_build_id" value="form-pb8-f90ZvGuvN6x3ndp8pnkGSOyZsGkxyzWWHTQF_i4" />
                                                        <input type="hidden" name="form_id" value="webform_client_form_1" />
                                                        <button class="webform-submit button-primary j-btn btn btn-primary form-submit" name="op" value="&lt;span class=&quot;help&quot;&gt;Wysłać&lt;/span&gt;" type="submit"><span class="help">{{ trans('base.send') }} </span></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="map"></div>
                                    <ul class="bg-parallax" id="parallax-1">
                                        <li class="bg layer" style="background-image: url('{{ asset('img/frontend/bg-3.jpg') }}');" data-depth="0.20"></li>
                                        <li class="mask layer" style="background-image: url('{{ asset('img/frontend/letter-mask.svg') }}');" data-depth="0.00"></li>
                                    </ul>
                                    <a href="http://flexweb.pro/" target="_blank" class="mirro-logo" title="Web development studio">
                                        <img src="{{ asset('img/frontend/logo_flexweb.png') }}" alt="Flexweb"/>
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <a href="/pl/rss.xml" class="feed-icon" title="Subscribe to Global Tobacco RSS">
            <img typeof="foaf:Image" src="{{ asset('/img/frontend/feed.png') }}" width="16" height="16" alt="Subscribe to Global Tobacco RSS" />
        </a>
        <div id="sidebar-first" class="column sidebar">
            <div class="section"></div>
        </div>
    </main>
@endsection