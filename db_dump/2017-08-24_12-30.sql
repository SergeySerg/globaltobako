-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Авг 24 2017 г., 12:27
-- Версия сервера: 5.5.50
-- Версия PHP: 5.6.23

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `tobacco_db`
--

-- --------------------------------------------------------

--
-- Структура таблицы `articles`
--

CREATE TABLE IF NOT EXISTS `articles` (
  `id` int(10) unsigned NOT NULL,
  `category_id` int(11) NOT NULL,
  `article_id` int(11) NOT NULL,
  `name` text COLLATE utf8_unicode_ci NOT NULL,
  `title` text COLLATE utf8_unicode_ci NOT NULL,
  `short_description` text COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `attributes` text COLLATE utf8_unicode_ci NOT NULL,
  `img` text COLLATE utf8_unicode_ci NOT NULL,
  `imgs` text COLLATE utf8_unicode_ci NOT NULL,
  `files` text COLLATE utf8_unicode_ci NOT NULL,
  `priority` int(11) NOT NULL DEFAULT '0',
  `date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `meta_title` text COLLATE utf8_unicode_ci NOT NULL,
  `meta_description` text COLLATE utf8_unicode_ci NOT NULL,
  `meta_keywords` text COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `articles`
--

INSERT INTO `articles` (`id`, `category_id`, `article_id`, `name`, `title`, `short_description`, `description`, `attributes`, `img`, `imgs`, `files`, `priority`, `date`, `meta_title`, `meta_description`, `meta_keywords`, `active`, `created_at`, `updated_at`) VALUES
(1, 14, 0, '', 'ТОВ Глобал Тобако Інтернешнл@|;ООО Глобал Тобако Интернешнл@|;Global Tobacco International Ltd@|;Sp. z o.o. Global Tobacco International@|;', '<p>Український виробник тютюнових виробів.<br />\r\nКомпанія започаткована у 2007 році на базі Монастириської тютюнової фабрики. Потужності виробництва дозволяють компанії надавати послуги з підготовки<br />\r\nі переробки сировини. Сьогодні Глобал Тобако Інтернешнл активно розвиває цей<br />\r\nнапрямок і налагоджує зв&rsquo;язки з новими клієнтами.</p>@|;<p>Украинский производитель табачных изделий.<br />\r\nКомпания основана в 2007 году на базе Монастыриской табачной фабрики. Мощности производства позволяют компании предоставлять услуги по подготовке и переработке сырья. Сегодня Глобал Тобако Интернешнл активно развивает это направление и налаживает связи с новыми клиентами.</p>@|;<p>The Ukrainian producer of tobacco.<br />\r\nThe company was established in 2007 on the basis of Monastyryska tobacco factory. High-capacity production facilities allow the company to provide services of raw materials preparation and processing. Today Global Tobacco International is actively developing this area and establishing contacts with new customers.</p>@|;<p>Ukraiński producent wyrob&oacute;w tytoniowych.<br />\r\nKompania została założona w 2007 roku na bazie Monastyryskiej fabryki tytoniowej. Potęgi produkcji pozwalają kompanii nadawać usługi z przygotowania i przetwarzania surowca. Dziś Global Tobacco International aktywnie rozwija przedstawiony kierunek i nawiązuje związki z nowymi klientami.</p>@|;', '@|;@|;@|;@|;', '{"\\u0421\\u0441\\u044b\\u043b\\u043a\\u0430 \\u043d\\u0430 \\u043f\\u0440\\u0430\\u0439\\u0441\\u044b":"http:\\/\\/globaltobako.com\\/sites\\/default\\/files\\/test.txt","\\u0422\\u0435\\u043a\\u0441\\u0442 \\u043a\\u043d\\u043e\\u043f\\u043a\\u0438":"\\u0417\\u0430\\u0432\\u0430\\u043d\\u0442\\u0430\\u0436\\u0438\\u0442\\u0438 \\u043f\\u0440\\u0430\\u0439\\u0441@|;\\u0421\\u043a\\u0430\\u0447\\u0430\\u0442\\u044c \\u043f\\u0440\\u0430\\u0439\\u0441@|;Download price@|;Pobierz cennik@|;"}', '', '[]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-08-23 18:40:19', '2017-08-23 21:35:23'),
(2, 15, 0, '', 'Історія компанії@|;История компании@|;The history of company@|;Historia kompanii@|;', '<p>ТОВ Глобал Тобако Інтернешнл &ndash; український виробник тютюнових виробів. Компанія започаткована у 2007 році на базі Монастириської тютюнової фабрики. Зараз підприємство запустило власне виробництво та облаштувало новий завод у Луцьку за адресою вул. Вахтангова, 12 а.</p>\r\n\r\n<p>З самого початку компанія Глобал Тобако Інтернешнл отримала усю необхідну сертифікацію на виготовлення та реалізацію готової продукції, а незадовго після того залучила до власного проекту іноземні інвестиції. Це дало новий поштовх активному розвитку бренду та сприяло розширенню його виробництва.<br />\r\nКінцева продукція Глобал Тобако Інтернешнл спрямована головним чином на задоволення потреб внутрішнього ринку. Тим не менше, підприємство завжди відкрите до співпраці з іноземними партнерами.</p>\r\n\r\n<p>Потужності виробництва дозволяють компанії надавати послуги з підготовки і переробки сировини.</p>@|;<p>ООО Глобал Тобако Интернешнл - украинский производитель табачных изделий. Компания основана в 2007 году на базе Монастыриской табачной фабрики. Сейчас предприятие запустило собственное производство и обустроило новый завод в Луцке по адресу ул. Вахтангова, 12 а.</p>\r\n\r\n<p>С самого начала компания Глобал Тобако Интернешнл получила всю необходимую сертификацию на изготовление и реализацию готовой продукции, а вскоре после этого привлекла к собственному проекту иностранные инвестиции. Это дало новый толчок активному развитию бренда и способствовало расширению его производства. Конечная продукция Глобал Тобако Интернешнл направлена главным образом на удовлетворение потребностей внутреннего рынка. Тем не менее, предприятие всегда открыто к сотрудничеству с иностранными партнерами.</p>\r\n\r\n<p>Мощности производства позволяют компании предоставлять услуги по подготовке и переработке сырья.</p>@|;<p>Global Tobacco International Ltd is a Ukrainian producer of tobacco. The company was established in 2007 on the basis of Monastyryska tobacco factory. Now the company has launched its own production and opened a new plant in Lutsk at 12a Vakhtangova st.</p>\r\n\r\n<p>From the very beginning, the company Global Tobacco International has received all the necessary certification for the manufacturing and sale of finished products and soon attracted foreign investment. This gave new impetus to the active development of the brand and promoted the expansion of its production. The finished products of Global Tobacco International are mainly for the domestic market. Nevertheless, the company is always open to cooperation with foreign partners.</p>\r\n\r\n<p>High-capacity production facilities allow the company to provide services of raw materials preparation and processing.</p>@|;<p>Sp. z o.o. Global Tobacco International &ndash; ukraiński producent wyrob&oacute;w tytoniowych. Kompania została założona w 2007 roku na bazie Monastyryskiej fabryki tytoniowej. Teraz przedsiębiorstwo zaczęło własną produkcję i zorganizowało nową fabrykę w Łucku przy ulicy Wachtanga, 12 а.</p>\r\n\r\n<p>Od samego początku kompania Global Tabacco International otrzymała całą niezbędną certyfikację na wyr&oacute;b i realizację gotowej produkcji, oraz wkr&oacute;tce po tym załączyła do własnego projektu cudzoziemskie inwestycje. To było bodźcem do aktywnego rozwoju znaku firmowego i sprzyjało rozszerzeniu jego produkcji. Końcowa produkcja Global Tabacco International jest skierowana gł&oacute;wnie na zadowolenie potrzeb rynku wewnętrznego. Tym bardziej, przedsiębiorstwo zawsze jest otwarte do wsp&oacute;łpracy z cudzoziemnymi partnerami.</p>\r\n\r\n<p>Potęgi produkcji pozwalają kompanii nadawać usługi z przygotowania i przetwarzania surowca.</p>@|;', '@|;@|;@|;@|;', '', '', '[]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-08-23 18:52:59', '2017-08-23 18:53:38'),
(3, 17, 0, '', 'Королівські сигари@|;Королевские сигары@|;Royal Cigars@|;Royal Cigars@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '{"\\u041a\\u0430\\u0440\\u0442\\u0438\\u043d\\u043a\\u0430 \\u0442\\u043e\\u0432\\u0430\\u0440\\u0430":"upload\\/articles\\/3\\/img\\/3-599e88f8ad584.jpg"}', '', '', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-08-24 08:06:16', '2017-08-24 08:06:16'),
(4, 17, 0, '', 'Королівські сигари@|;Королевские сигары@|;Royal Cigars@|;Royal Cigars@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '{"\\u041a\\u0430\\u0440\\u0442\\u0438\\u043d\\u043a\\u0430 \\u0442\\u043e\\u0432\\u0430\\u0440\\u0430":"upload\\/articles\\/4\\/img\\/4-599e892fa7da9.jpg"}', '', '', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-08-24 08:07:11', '2017-08-24 08:07:11'),
(5, 17, 0, '', 'Королівські сигари@|;Королевские сигары@|;Royal Cigars@|;Royal Cigars@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '{"\\u041a\\u0430\\u0440\\u0442\\u0438\\u043d\\u043a\\u0430 \\u0442\\u043e\\u0432\\u0430\\u0440\\u0430":"upload\\/articles\\/5\\/img\\/5-599e8ff63ecca.jpg"}', '', '', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-08-24 08:36:06', '2017-08-24 08:36:06'),
(6, 17, 0, '', 'Королівські сигари@|;Королевские сигары@|;Royal Cigars@|;Royal Cigars@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '{"\\u041a\\u0430\\u0440\\u0442\\u0438\\u043d\\u043a\\u0430 \\u0442\\u043e\\u0432\\u0430\\u0440\\u0430":"upload\\/articles\\/6\\/img\\/6-599e901e506d8.jpg"}', '', '', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-08-24 08:36:46', '2017-08-24 08:36:46');

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(10) unsigned NOT NULL,
  `parent_id` int(11) NOT NULL,
  `article_parent` int(11) NOT NULL,
  `link` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `img` text COLLATE utf8_unicode_ci NOT NULL,
  `short_description` text COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `imgs` text COLLATE utf8_unicode_ci NOT NULL,
  `fields` text COLLATE utf8_unicode_ci NOT NULL,
  `date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `meta_title` text COLLATE utf8_unicode_ci NOT NULL,
  `meta_description` text COLLATE utf8_unicode_ci NOT NULL,
  `meta_keywords` text COLLATE utf8_unicode_ci NOT NULL,
  `priority` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `parent_id`, `article_parent`, `link`, `title`, `img`, `short_description`, `description`, `imgs`, `fields`, `date`, `active`, `meta_title`, `meta_description`, `meta_keywords`, `priority`, `created_at`, `updated_at`) VALUES
(14, 0, 0, 'about', 'Про нас@|;О нас@|;About us@|;О nas@|;', '', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '[]', '{"base":["title","short_description","active"],"attributes":{"Ссылка на прайсы":{"type":"input","lang_active":false,"active":false},"Текст кнопки":{"type":"input","lang_active":true,"active":false}}}', '0000-00-00 00:00:00', 1, '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 0, '2017-08-23 17:13:44', '2017-08-23 21:10:40'),
(15, 0, 0, 'company', 'Історія компанії@|;История компании@|;History of the company@|;Historia firmy@|;', '', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '[]', '{"base":["title","short_description","active"],"attributes":{}}', '0000-00-00 00:00:00', 1, '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 0, '2017-08-23 17:16:16', '2017-08-23 18:53:25'),
(16, 0, 0, 'contact', 'Контакти@|;Контакты@|;Contacts@|;Kontakt@|;', '', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '', '{"base":[],"attributes":{}}', '1970-01-01 01:00:00', 1, '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 0, '2017-08-23 17:17:59', '2017-08-23 17:17:59'),
(17, 0, 0, 'products', 'Продукція@|;Продукция@|;Products@|;Produkty@|;', '', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '[]', '{"base":["title","priority","active"],"attributes":{"Картинка товара":{"type":"files","lang_active":false,"active":false}}}', '0000-00-00 00:00:00', 1, '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 0, '2017-08-23 17:20:32', '2017-08-24 09:17:02');

-- --------------------------------------------------------

--
-- Структура таблицы `langs`
--

CREATE TABLE IF NOT EXISTS `langs` (
  `id` int(10) unsigned NOT NULL,
  `lang` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `country` text COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `img` text COLLATE utf8_unicode_ci NOT NULL,
  `priority` tinyint(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `langs`
--

INSERT INTO `langs` (`id`, `lang`, `country`, `active`, `img`, `priority`, `created_at`, `updated_at`) VALUES
(10, 'ua', 'Украина', 1, 'upload/langs/ua/ua-1503508005.png', 0, '2017-08-23 17:06:08', '2017-08-23 17:06:45'),
(11, 'ru', 'Россия', 1, 'upload/langs/ru/ru-1503508041.png', 0, '2017-08-23 17:07:21', '2017-08-23 17:07:21'),
(12, 'en', 'США', 1, 'upload/langs/en/en-1503508073.png', 0, '2017-08-23 17:07:53', '2017-08-23 17:07:53'),
(13, 'pl', 'Польша', 1, 'upload/langs/pl/pl-1503508190.jpg', 0, '2017-08-23 17:09:19', '2017-08-23 17:09:50');

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `migration` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`migration`, `batch`) VALUES
('2014_10_12_000000_create_users_table', 1),
('2014_10_12_100000_create_password_resets_table', 1),
('2016_09_14_124503_create_articles_table', 1),
('2016_09_14_124813_create_categories_table', 1),
('2016_09_14_124942_create_langs_table', 1),
('2016_10_06_124518_create_texts_table', 1),
('2016_11_04_094627_create_comments_table', 1),
('2016_12_26_140118_change_text_table_soft', 1),
('2017_01_02_155628_create_orders_table', 1),
('2017_02_06_120655_create_settings_table', 2),
('2017_02_13_144141_add_parent_id_categories', 3),
('2017_02_13_174128_add_article_id', 4),
('2017_02_13_174631_add_article_id', 5),
('2017_02_14_110847_add_article_parrent_category', 6),
('2017_02_14_111446_add_article_parrent_category', 7),
('2017_02_24_163342_add_field_img', 8);

-- --------------------------------------------------------

--
-- Структура таблицы `password_resets`
--

CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `password_resets`
--

INSERT INTO `password_resets` (`email`, `token`, `created_at`) VALUES
('webdesignstudio@gmail.com', 'fbde7c2090b1432792a7b0caee4dcfa185c155d6cc24beff39508ff5271224ba', '2017-02-06 14:40:36');

-- --------------------------------------------------------

--
-- Структура таблицы `settings`
--

CREATE TABLE IF NOT EXISTS `settings` (
  `id` int(10) unsigned NOT NULL,
  `name` text COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `settings`
--

INSERT INTO `settings` (`id`, `name`, `title`, `description`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'config.email', 'Почта для входящих сообщений', 'webtestingstudio@gmail.com', '0000-00-00 00:00:00', '2017-04-11 19:28:57', NULL),
(2, 'tariffing', 'Ссылка на API с тарифами', 'http://manager.xomobile.com/dialer/rates?id=2', '2017-04-19 14:49:05', '2017-08-23 17:04:34', '2017-08-23 17:04:34');

-- --------------------------------------------------------

--
-- Структура таблицы `texts`
--

CREATE TABLE IF NOT EXISTS `texts` (
  `id` int(10) unsigned NOT NULL,
  `page_id` int(11) NOT NULL DEFAULT '0',
  `name` text COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(55) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `priority` int(11) NOT NULL DEFAULT '0',
  `lang_active` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `texts`
--

INSERT INTO `texts` (`id`, `page_id`, `name`, `type`, `title`, `description`, `priority`, `lang_active`, `created_at`, `updated_at`, `deleted_at`) VALUES
(22, 0, 'phone', 'input', 'Контактный телефон', '+380 67 332-00-05', 0, 0, '2017-08-23 17:22:02', '2017-08-23 17:22:02', NULL),
(23, 0, 'email', 'input', 'Email', 'info@globaltobako.com', 0, 0, '2017-08-23 17:23:08', '2017-08-23 17:23:08', NULL),
(24, 0, 'address', 'input', 'Адрес', 'м. Луцьк, вул. Вахтангова, 12 а.@|;г. Луцк, ул. Вахтангова, 12 а@|;12 a, Vakhtangova St, Lutsk, Ukraine, 43006@|;m. Łuck, ul. E. wachtangowa, 12a.@|;', 0, 1, '2017-08-23 17:26:12', '2017-08-23 17:26:12', NULL),
(25, 0, 'map', 'input', 'Карта', '343', 0, 0, '2017-08-23 18:58:34', '2017-08-23 18:58:34', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(7, 'admin', 'info@globaltobako.com', '$2y$10$DjLl51axgKx40JHLEuj.1OnOeX4Y57DkQVAeR3vGwq2kRUSZM7boK', 'ATzR71jf8s1uoYnDr0Yq5QeOk1HRekFRiNli8zuNWSCskHGGosvSwqU4NfXM', '2017-08-23 16:32:04', '2017-08-23 16:57:56'),
(8, 'root', 'webtestingstudio@gmail.com', '$2y$10$wAiitX7gHFd80LOncnIlAO2MuTO8xkLnrybtelpOpRaS0yeVcCsAu', 'GbuzlmzBhQLXjgXG6GyHgJ5AHBj3M3Ft5l9UIsh2Z9rol49UIwMC1UUxFjlM', '2017-08-23 16:58:54', '2017-08-23 16:59:00');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `langs`
--
ALTER TABLE `langs`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`),
  ADD KEY `password_resets_token_index` (`token`);

--
-- Индексы таблицы `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `texts`
--
ALTER TABLE `texts`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=18;
--
-- AUTO_INCREMENT для таблицы `langs`
--
ALTER TABLE `langs`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT для таблицы `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `texts`
--
ALTER TABLE `texts`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
