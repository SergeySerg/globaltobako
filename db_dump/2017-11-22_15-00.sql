-- phpMyAdmin SQL Dump
-- version 4.0.10.10
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 22 2017 г., 15:56
-- Версия сервера: 5.5.45-log
-- Версия PHP: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `globaltobako_new_db`
--

-- --------------------------------------------------------

--
-- Структура таблицы `articles`
--

CREATE TABLE IF NOT EXISTS `articles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
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
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=34 ;

--
-- Дамп данных таблицы `articles`
--

INSERT INTO `articles` (`id`, `category_id`, `article_id`, `name`, `title`, `short_description`, `description`, `attributes`, `img`, `imgs`, `files`, `priority`, `date`, `meta_title`, `meta_description`, `meta_keywords`, `active`, `created_at`, `updated_at`) VALUES
(1, 14, 0, '', '<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;', '<p>Український виробник тютюнових виробів.Компанія започаткована у 2007 році на базі Монастириської тютюнової фабрики. Потужності виробництва дозволяють компанії надавати послуги з підготовки і переробки сировини. Сьогодні Глобал Тобако Інтернешнл активно розвиває цей напрямок і налагоджує зв&rsquo;язки з новими клієнтами.</p>@|;<p>Украинский производитель табачных изделий. Компания основана в 2007 году на базе Монастыриской табачной фабрики. Мощности производства позволяют компании предоставлять услуги по подготовке и переработке сырья. Сегодня Глобал Тобако Интернешнл активно развивает это направление и налаживает связи с новыми клиентами.</p>@|;<p>The Ukrainian producer of tobacco.<br />\nThe company was established in 2007 on the basis of Monastyryska tobacco factory. High-capacity production facilities allow the company to provide services of raw materials preparation and processing. Today Global Tobacco International is actively developing this area and establishing contacts with new customers.</p>@|;<p>Ukraiński producent wyrob&oacute;w tytoniowych.<br />\nKompania została założona w 2007 roku na bazie Monastyryskiej fabryki tytoniowej. Potęgi produkcji pozwalają kompanii nadawać usługi z przygotowania i przetwarzania surowca. Dziś Global Tobacco International aktywnie rozwija przedstawiony kierunek i nawiązuje związki z nowymi klientami.</p>@|;', '<p>Український виробник тютюнових виробів. Компанія започаткована у 2007 році на базі Монастириської тютюнової фабрики.Компанія &ldquo;GLOBAL TOBACCO&rdquo; співпрацює з найбільшими компаніями різних країн і їх представництвами в Україні та має величезний досвід комплексного обслуговування підприємств. Компанія &ldquo;GLOBAL TOBACCO&rdquo; пропонує співпрацю на спеціальних умовах для гуртових компаній.</p>@|;@|;<p>&nbsp;</p>\r\n\r\n<p>Ukrainian tobacco manufacturer. The company was founded in 2007 on the basis of the Monastyrist Tobacco Factory. GLOBAL TOBACCO Company cooperates with the largest companies of different countries and their representative offices in Ukraine and has a huge experience of comprehensive service of enterprises. The company &quot;GLOBAL TOBACCO&quot; offers cooperation on special terms for wholesale companies.</p>@|;<p>Ukraiński producent wyrob&oacute;w tytoniowych.<br />\r\nKompania została założona w 2007 roku na bazie Monastyryskiej fabryki tytoniowej. Potęgi produkcji pozwalają kompanii nadawać usługi z przygotowania i przetwarzania surowca. Dziś Global Tobacco International aktywnie rozwija przedstawiony kierunek i nawiązuje związki z nowymi klientami.</p>@|;', '{"\\u041a\\u0430\\u0440\\u0442\\u0438\\u043d\\u043a\\u0430 \\u043d\\u0430 \\u0433\\u043e\\u043b\\u043e\\u0432\\u043d\\u0456\\u0439 \\u21161":"upload\\/articles\\/1\\/img\\/1-5a135d0b7c901.jpg","\\u041a\\u0430\\u0440\\u0442\\u0438\\u043d\\u043a\\u0430 \\u043d\\u0430 \\u0433\\u043e\\u043b\\u043e\\u0432\\u043d\\u0456\\u0439 \\u21162":"upload\\/articles\\/1\\/img\\/1-5a135d7a5de70.jpg","\\u041a\\u0430\\u0440\\u0442\\u0438\\u043d\\u043a\\u0430 \\u043d\\u0430 \\u0433\\u043e\\u043b\\u043e\\u0432\\u043d\\u0456\\u0439 \\u21163":"upload\\/articles\\/1\\/img\\/1-5a1453e3202f1.jpg"}', '', '[{"full":"upload\\/articles\\/1\\/full\\/img-1(1).jpg","min":"upload\\/articles\\/1\\/min\\/img-1(1).jpg"},{"full":"upload\\/articles\\/1\\/full\\/img-1.jpg","min":"upload\\/articles\\/1\\/min\\/img-1.jpg"}]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-08-23 18:40:19', '2017-11-21 16:27:15'),
(7, 18, 0, '', 'GLOBAL TOBACCO@|;GLOBAL TOBACCO@|;GLOBAL TOBACCO@|;GLOBAL TOBACCO@|;', '<pre>\r\n\r\n&nbsp;</pre>\r\n\r\n<h2>GLOBAL TOBACCO</h2>\r\n\r\n<h3>INTERNATIONAL</h3>@|;<pre>\r\n\r\n&nbsp;</pre>\r\n\r\n<h2>GLOBAL TOBACCO</h2>\r\n\r\n<h3>INTERNATIONAL</h3>@|;<pre>\r\n\r\n&nbsp;</pre>\r\n\r\n<h2>GLOBAL TOBACCO</h2>\r\n\r\n<h3>INTERNATIONAL</h3>@|;<pre>\r\n\r\n&nbsp;</pre>\r\n\r\n<h2>GLOBAL TOBACCO</h2>\r\n\r\n<h3>INTERNATIONAL</h3>@|;', '@|;@|;@|;@|;', '{"\\u041b\\u043e\\u0433\\u043e\\u0442\\u0438\\u043f":"upload\\/articles\\/7\\/img\\/7-5a144c86c5f5d.png"}', '', '[]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-11-21 09:36:46', '2017-11-21 15:55:50'),
(8, 19, 0, '', 'Інновації@|;Инновации@|;Innovations@|;Innowacje@|;', '<p>Компанія GLOBAL TOBACO широко визнана в усьому світі як інноваційний лідер своєї галузі.</p>@|;<p>Компания GLOBAL TOBACCO широко признана во всем мире как инновационный лидер своей отрасли.</p>@|;<p>GLOBAL TOBACCO is widely recognized around the world as an innovative leader in its field.</p>@|;<p>GLOBAL TOBACCO jest powszechnie uznawany na całym świecie jako innowacyjny lider w swojej dziedzinie.</p>@|;', '@|;@|;@|;@|;', '{"\\u0406\\u043a\\u043e\\u043d\\u043a\\u0430":"upload\\/articles\\/8\\/img\\/8-5a13f5a937328.png"}', '', '', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-11-21 09:45:13', '2017-11-21 09:45:13'),
(9, 19, 0, '', 'Інновації@|;Инновации@|;Innovations@|;Innowacje@|;', '<p>Компанія GLOBAL TOBACO широко визнана в усьому світі як інноваційний лідер своєї галузі.</p>@|;<p>Компания GLOBAL TOBACCO широко признана во всем мире как инновационный лидер своей отрасли.</p>@|;<p>GLOBAL TOBACCO is widely recognized around the world as an innovative leader in its field.</p>@|;<p>GLOBAL TOBACCO jest powszechnie uznawany na całym świecie jako innowacyjny lider w swojej dziedzinie.</p>@|;', '@|;@|;@|;@|;', '{"\\u0406\\u043a\\u043e\\u043d\\u043a\\u0430":"upload\\/articles\\/9\\/img\\/9-5a13f629ea803.png"}', '', '[]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-11-21 09:45:13', '2017-11-21 09:47:22'),
(10, 19, 0, '', 'Інновації@|;Инновации@|;Innovations@|;Innowacje@|;', '<p>Компанія GLOBAL TOBACO широко визнана в усьому світі як інноваційний лідер своєї галузі.</p>@|;<p>Компания GLOBAL TOBACCO широко признана во всем мире как инновационный лидер своей отрасли.</p>@|;<p>GLOBAL TOBACCO is widely recognized around the world as an innovative leader in its field.</p>@|;<p>GLOBAL TOBACCO jest powszechnie uznawany na całym świecie jako innowacyjny lider w swojej dziedzinie.</p>@|;', '@|;@|;@|;@|;', '{"\\u0406\\u043a\\u043e\\u043d\\u043a\\u0430":"upload\\/articles\\/10\\/img\\/10-5a13f639a7f6c.png"}', '', '[]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-11-21 09:45:13', '2017-11-21 09:47:37'),
(11, 20, 0, '', '<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;@|;', '<p>Український виробник тютюнових виробів. Компанія започаткована у 2007 році на базі Монастириської тютюнової фабрики.</p>@|;<p>Украинский производитель табачных изделий. Компания основана в 2007 году на базе Монастыриской табачной фабрики.</p>@|;<p>Ukrainian tobacco manufacturer. The company was founded in 2007 on the basis of the Monastyrist Tobacco Factory.</p>@|;<p>Ukraiński producent tytoniu. Firma została założona w 2007 roku na bazie Monastyryjskiej Fabryki Tytoniu.</p>@|;', '<p>Український виробник тютюнових виробів. Компанія започаткована у 2007 році на базі Монастириської тютюнової фабрики.</p>\r\n\r\n<p>Компанія &ldquo;GLOBAL TOBACCO&rdquo; співпрацює з найбільшими компаніями різних країн і їх представництвами в Україні та має величезний досвід комплексного обслуговування підприємств. Компанія &ldquo;GLOBAL TOBACCO&rdquo; пропонує співпрацю на спеціальних умовах для гуртових компаній.</p>@|;<p>Украинский производитель табачных изделий. Компания основана в 2007 году на базе Монастыриской табачной фабрики.</p>\r\n\r\n<p>Компания &quot;GLOBAL TOBACCO&quot; сотрудничает с крупнейшими компаниями различных стран и их представительствами в Украине и имеет огромный опыт комплексного обслуживания предприятий. Компания &quot;GLOBAL TOBACCO&quot; предлагает сотрудничество на специальных условиях для оптовых компаний.</p>@|;<p>Ukrainian tobacco manufacturer. The company was founded in 2007 on the basis of the Monastyrist Tobacco Factory.</p>\r\n\r\n<p>GLOBAL TOBACCO Company cooperates with the largest companies of different countries and their representative offices in Ukraine and has a huge experience of comprehensive service of enterprises. The company &quot;GLOBAL TOBACCO&quot; offers cooperation on special terms for wholesale companies.</p>@|;<p>Ukraiński producent tytoniu. Firma została założona w 2007 roku na bazie Monastyryjskiej Fabryki Tytoniu.</p>\r\n\r\n<p>GLOBAL TOBACCO Firma wsp&oacute;łpracuje z największymi firmami z r&oacute;żnych kraj&oacute;w i ich przedstawicielstw na Ukrainie i ma ogromne doświadczenie w zintegrowanej obsłudze przedsiębiorstw. Firma &quot;GLOBAL TOBACCO&quot; oferuje wsp&oacute;łpracę na warunkach specjalnych dla firm hurtowych.</p>@|;', '', '', '', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-11-21 10:09:50', '2017-11-21 10:09:50'),
(12, 22, 0, '', 'Андрій Поребко@|;Андрей Поребко@|;Andrew Porebko@|;Andrew Porebko@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '{"\\u0424\\u043e\\u0442\\u043e \\u043f\\u0440\\u0430\\u0446\\u0456\\u0432\\u043d\\u0438\\u043a\\u0430":"upload\\/articles\\/12\\/img\\/12-5a14039ca7b36.jpg","\\u041f\\u043e\\u0441\\u0430\\u0434\\u0430":"\\u0414\\u0438\\u0440\\u0435\\u043a\\u0442\\u043e\\u0440@|;\\u0414\\u0438\\u0440\\u0435\\u043a\\u0442\\u043e\\u0440@|;Director@|;Dyrektor@|;"}', '', '[]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-11-21 10:41:21', '2017-11-21 10:44:44'),
(13, 22, 0, '', 'Андрій Поребко@|;Андрей Поребко@|;Andrew Porebko@|;Andrew Porebko@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '{"\\u0424\\u043e\\u0442\\u043e \\u043f\\u0440\\u0430\\u0446\\u0456\\u0432\\u043d\\u0438\\u043a\\u0430":"upload\\/articles\\/13\\/img\\/13-5a1404184582b.jpg","\\u041f\\u043e\\u0441\\u0430\\u0434\\u0430":"\\u041c\\u0435\\u043d\\u0435\\u0434\\u0436\\u0435\\u0440@|;\\u0414\\u0438\\u0440\\u0435\\u043a\\u0442\\u043e\\u0440@|;Manager@|;Manager@|;"}', '', '[]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-11-21 10:41:21', '2017-11-21 10:46:48'),
(14, 22, 0, '', 'Андрій Поребко@|;Андрей Поребко@|;Andrew Porebko@|;Andrew Porebko@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '{"\\u0424\\u043e\\u0442\\u043e \\u043f\\u0440\\u0430\\u0446\\u0456\\u0432\\u043d\\u0438\\u043a\\u0430":"upload\\/articles\\/14\\/img\\/14-5a1404290f555.jpg","\\u041f\\u043e\\u0441\\u0430\\u0434\\u0430":"\\u0414\\u0438\\u0440\\u0435\\u043a\\u0442\\u043e\\u0440@|;\\u0414\\u0438\\u0440\\u0435\\u043a\\u0442\\u043e\\u0440@|;Director@|;Dyrektor@|;"}', '', '[]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-11-21 10:41:21', '2017-11-21 10:47:05'),
(15, 22, 0, '', 'Андрій Поребко@|;Андрей Поребко@|;Andrew Porebko@|;Andrew Porebko@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '{"\\u0424\\u043e\\u0442\\u043e \\u043f\\u0440\\u0430\\u0446\\u0456\\u0432\\u043d\\u0438\\u043a\\u0430":"upload\\/articles\\/15\\/img\\/15-5a140437d10fa.jpg","\\u041f\\u043e\\u0441\\u0430\\u0434\\u0430":"\\u0414\\u0438\\u0440\\u0435\\u043a\\u0442\\u043e\\u0440@|;\\u0414\\u0438\\u0440\\u0435\\u043a\\u0442\\u043e\\u0440@|;Director@|;Dyrektor@|;"}', '', '[]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-11-21 10:41:21', '2017-11-21 10:47:19'),
(16, 22, 0, '', 'Андрій Поребко@|;Андрей Поребко@|;Andrew Porebko@|;Andrew Porebko@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '{"\\u0424\\u043e\\u0442\\u043e \\u043f\\u0440\\u0430\\u0446\\u0456\\u0432\\u043d\\u0438\\u043a\\u0430":"upload\\/articles\\/16\\/img\\/16-5a14044280e32.jpg","\\u041f\\u043e\\u0441\\u0430\\u0434\\u0430":"\\u0414\\u0438\\u0440\\u0435\\u043a\\u0442\\u043e\\u0440@|;\\u0414\\u0438\\u0440\\u0435\\u043a\\u0442\\u043e\\u0440@|;Director@|;Dyrektor@|;"}', '', '[]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-11-21 10:41:21', '2017-11-21 10:47:30'),
(20, 23, 0, '', '<h3>GLOBAL TOBACCO</h3><h4>INTERNATIONAL</h4>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;', '<p>Український виробник тютюнових виробів. Компанія започаткована у 2007 році на базі Монастириської тютюнової фабрики.</p>@|;<p>Украинский производитель табачных изделий. Компания основана в 2007 году на базе Монастыриской табачной фабрики.</p>@|;<p>Ukrainian tobacco manufacturer. The company was founded in 2007 on the basis of the Monastyrist Tobacco Factory.</p>@|;<p>Ukraiński producent tytoniu. Firma została założona w 2007 roku na bazie Monastyrist Tobacco Factory.</p>@|;', '@|;@|;@|;@|;', '{"\\u0424\\u043e\\u043d":"upload\\/articles\\/20\\/img\\/20-5a14327ed575f.jpg","\\u041a\\u0430\\u0440\\u0442\\u0438\\u043d\\u043a\\u0430 \\u043f\\u0440\\u043e\\u0434\\u0443\\u043a\\u0442\\u0443":"upload\\/articles\\/20\\/img\\/20-5a14327edcfed.png"}', '', '[{"full":"upload\\/articles\\/20\\/full\\/img-1.png","min":"upload\\/articles\\/20\\/min\\/img-1.png"},{"full":"upload\\/articles\\/20\\/full\\/img-2(1).png","min":"upload\\/articles\\/20\\/min\\/img-2(1).png"}]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-11-21 14:04:46', '2017-11-22 10:37:34'),
(21, 23, 0, '', '<h3>GLOBAL TOBACCO</h3><h4>INTERNATIONAL</h4>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;', '<p>Український виробник тютюнових виробів. Компанія започаткована у 2007 році на базі Монастириської тютюнової фабрики.</p>@|;<p>Украинский производитель табачных изделий. Компания основана в 2007 году на базе Монастыриской табачной фабрики.</p>@|;<p>Ukrainian tobacco manufacturer. The company was founded in 2007 on the basis of the Monastyrist Tobacco Factory.</p>@|;<p>Ukraiński producent tytoniu. Firma została założona w 2007 roku na bazie Monastyrist Tobacco Factory.</p>@|;', '@|;@|;@|;@|;', '{"\\u0424\\u043e\\u043d":"upload\\/articles\\/21\\/img\\/21-5a1432ccd90b0.jpg","\\u041a\\u0430\\u0440\\u0442\\u0438\\u043d\\u043a\\u0430 \\u043f\\u0440\\u043e\\u0434\\u0443\\u043a\\u0442\\u0443":"upload\\/articles\\/20\\/img\\/20-5a14327edcfed.png"}', '', '[{"full":"upload\\/articles\\/21\\/full\\/img-2(1).png","min":"upload\\/articles\\/21\\/min\\/img-2(1).png"},{"full":"upload\\/articles\\/21\\/full\\/img-2.png","min":"upload\\/articles\\/21\\/min\\/img-2.png"}]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-11-21 14:04:46', '2017-11-22 10:59:54'),
(22, 23, 0, '', '<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;', '<p>Український виробник тютюнових виробів. Компанія започаткована у 2007 році на базі Монастириської тютюнової фабрики.</p>@|;<p>Украинский производитель табачных изделий. Компания основана в 2007 году на базе Монастыриской табачной фабрики.</p>@|;<p>Ukrainian tobacco manufacturer. The company was founded in 2007 on the basis of the Monastyrist Tobacco Factory.</p>@|;<p>Ukraiński producent tytoniu. Firma została założona w 2007 roku na bazie Monastyrist Tobacco Factory.</p>@|;', '@|;@|;@|;@|;', '{"\\u0424\\u043e\\u043d":"upload\\/articles\\/20\\/img\\/20-5a14327ed575f.jpg","\\u041a\\u0430\\u0440\\u0442\\u0438\\u043d\\u043a\\u0430 \\u043f\\u0440\\u043e\\u0434\\u0443\\u043a\\u0442\\u0443":"upload\\/articles\\/20\\/img\\/20-5a14327edcfed.png"}', '', '[{"full":"upload\\/articles\\/22\\/full\\/img-1.png","min":"upload\\/articles\\/22\\/min\\/img-1.png"},{"full":"upload\\/articles\\/22\\/full\\/img-2.png","min":"upload\\/articles\\/22\\/min\\/img-2.png"}]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 0, '2017-11-21 14:04:46', '2017-11-21 19:43:36'),
(23, 23, 0, '', '<h3>GLOBAL TOBACCO</h3><h4>INTERNATIONAL</h4>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;', '<p>Український виробник тютюнових виробів. Компанія започаткована у 2007 році на базі Монастириської тютюнової фабрики.</p>@|;<p>Украинский производитель табачных изделий. Компания основана в 2007 году на базе Монастыриской табачной фабрики.</p>@|;<p>Ukrainian tobacco manufacturer. The company was founded in 2007 on the basis of the Monastyrist Tobacco Factory.</p>@|;<p>Ukraiński producent tytoniu. Firma została założona w 2007 roku na bazie Monastyrist Tobacco Factory.</p>@|;', '@|;@|;@|;@|;', '{"\\u0424\\u043e\\u043d":"upload\\/articles\\/23\\/img\\/23-5a1432e6f045a.jpg","\\u041a\\u0430\\u0440\\u0442\\u0438\\u043d\\u043a\\u0430 \\u043f\\u0440\\u043e\\u0434\\u0443\\u043a\\u0442\\u0443":"upload\\/articles\\/20\\/img\\/20-5a14327edcfed.png"}', '', '[{"full":"upload\\/articles\\/23\\/full\\/img-1.png","min":"upload\\/articles\\/23\\/min\\/img-1.png"},{"full":"upload\\/articles\\/23\\/full\\/img-2.png","min":"upload\\/articles\\/23\\/min\\/img-2.png"}]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 0, '2017-11-21 14:04:46', '2017-11-21 19:43:19'),
(24, 25, 20, '', 'Інновації@|;Инновации@|;Innovations@|;Innowacje@|;', '<p>Український виробник тютюнових виробів. Компанія започаткована у 2007 році на базі Монастириської тютюнової фабрики.</p>@|;<p>Украинский производитель табачных изделий. Компания основана в 2007 году на базе Монастыриской табачной фабрики.</p>@|;<p>Ukrainian tobacco manufacturer. The company was founded in 2007 on the basis of the Monastyrist Tobacco Factory.</p>@|;<p>Ukraiński producent tytoniu. Firma została założona w 2007 roku na bazie Monastyrist Tobacco Factory.</p>@|;', '@|;@|;@|;@|;', '{"\\u0406\\u043a\\u043e\\u043d\\u043a\\u0430":"upload\\/articles\\/24\\/img\\/24-5a14375ae9f10.png"}', '', '', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-11-21 14:25:30', '2017-11-21 14:25:31'),
(25, 23, 0, '', '<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;', '<p>Український виробник тютюнових виробів. Компанія започаткована у 2007 році на базі Монастириської тютюнової фабрики.</p>@|;<p>Украинский производитель табачных изделий. Компания основана в 2007 году на базе Монастыриской табачной фабрики.</p>@|;<p>Ukrainian tobacco manufacturer. The company was founded in 2007 on the basis of the Monastyrist Tobacco Factory.</p>@|;<p>Ukraiński producent tytoniu. Firma została założona w 2007 roku na bazie Monastyrist Tobacco Factory.</p>@|;', '@|;@|;@|;@|;', '{"\\u0424\\u043e\\u043d":"upload\\/articles\\/23\\/img\\/23-5a1432e6f045a.jpg","\\u041a\\u0430\\u0440\\u0442\\u0438\\u043d\\u043a\\u0430 \\u043f\\u0440\\u043e\\u0434\\u0443\\u043a\\u0442\\u0443":"upload\\/articles\\/20\\/img\\/20-5a14327edcfed.png"}', '', '[]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 0, '2017-11-21 14:04:46', '2017-11-21 14:31:08'),
(26, 25, 20, '', 'Інновації@|;Инновации@|;Innovations@|;Innowacje@|;', '<p>Український виробник тютюнових виробів. Компанія започаткована у 2007 році на базі Монастириської тютюнової фабрики.</p>@|;<p>Украинский производитель табачных изделий. Компания основана в 2007 году на базе Монастыриской табачной фабрики.</p>@|;<p>Ukrainian tobacco manufacturer. The company was founded in 2007 on the basis of the Monastyrist Tobacco Factory.</p>@|;<p>Ukraiński producent tytoniu. Firma została założona w 2007 roku na bazie Monastyrist Tobacco Factory.</p>@|;', '@|;@|;@|;@|;', '{"\\u0406\\u043a\\u043e\\u043d\\u043a\\u0430":"upload\\/articles\\/24\\/img\\/24-5a14375ae9f10.png"}', '', '[]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-11-21 14:25:30', '2017-11-21 14:29:35'),
(27, 25, 20, '', 'Інновації@|;Инновации@|;Innovations@|;Innowacje@|;', '<p>Український виробник тютюнових виробів. Компанія започаткована у 2007 році на базі Монастириської тютюнової фабрики.</p>@|;<p>Украинский производитель табачных изделий. Компания основана в 2007 году на базе Монастыриской табачной фабрики.</p>@|;<p>Ukrainian tobacco manufacturer. The company was founded in 2007 on the basis of the Monastyrist Tobacco Factory.</p>@|;<p>Ukraiński producent tytoniu. Firma została założona w 2007 roku na bazie Monastyrist Tobacco Factory.</p>@|;', '@|;@|;@|;@|;', '{"\\u0406\\u043a\\u043e\\u043d\\u043a\\u0430":"upload\\/articles\\/24\\/img\\/24-5a14375ae9f10.png"}', '', '[]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-11-21 14:25:30', '2017-11-22 11:32:31'),
(28, 25, 21, '', 'Інновації@|;Инновации@|;Innovations@|;Innowacje@|;', '<p>Український виробник тютюнових виробів. Компанія започаткована у 2007 році на базі Монастириської тютюнової фабрики.</p>@|;<p>Украинский производитель табачных изделий. Компания основана в 2007 году на базе Монастыриской табачной фабрики.</p>@|;<p>Ukrainian tobacco manufacturer. The company was founded in 2007 on the basis of the Monastyrist Tobacco Factory.</p>@|;<p>Ukraiński producent tytoniu. Firma została założona w 2007 roku na bazie Monastyrist Tobacco Factory.</p>@|;', '@|;@|;@|;@|;', '{"\\u0406\\u043a\\u043e\\u043d\\u043a\\u0430":"upload\\/articles\\/24\\/img\\/24-5a14375ae9f10.png"}', '', '[]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-11-21 14:25:30', '2017-11-21 14:30:00'),
(29, 25, 21, '', 'Інновації@|;Инновации@|;Innovations@|;Innowacje@|;', '<p>Український виробник тютюнових виробів. Компанія започаткована у 2007 році на базі Монастириської тютюнової фабрики.</p>@|;<p>Украинский производитель табачных изделий. Компания основана в 2007 году на базе Монастыриской табачной фабрики.</p>@|;<p>Ukrainian tobacco manufacturer. The company was founded in 2007 on the basis of the Monastyrist Tobacco Factory.</p>@|;<p>Ukraiński producent tytoniu. Firma została założona w 2007 roku na bazie Monastyrist Tobacco Factory.</p>@|;', '@|;@|;@|;@|;', '{"\\u0406\\u043a\\u043e\\u043d\\u043a\\u0430":"upload\\/articles\\/24\\/img\\/24-5a14375ae9f10.png"}', '', '[]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-11-21 14:25:30', '2017-11-21 14:30:11'),
(30, 25, 21, '', 'Інновації@|;Инновации@|;Innovations@|;Innowacje@|;', '<p>Український виробник тютюнових виробів. Компанія започаткована у 2007 році на базі Монастириської тютюнової фабрики.</p>@|;<p>Украинский производитель табачных изделий. Компания основана в 2007 году на базе Монастыриской табачной фабрики.</p>@|;<p>Ukrainian tobacco manufacturer. The company was founded in 2007 on the basis of the Monastyrist Tobacco Factory.</p>@|;<p>Ukraiński producent tytoniu. Firma została założona w 2007 roku na bazie Monastyrist Tobacco Factory.</p>@|;', '@|;@|;@|;@|;', '{"\\u0406\\u043a\\u043e\\u043d\\u043a\\u0430":"upload\\/articles\\/24\\/img\\/24-5a14375ae9f10.png"}', '', '[]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-11-21 14:25:30', '2017-11-21 14:30:23'),
(31, 21, 0, '', '<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;', '<p>Український виробник тютюнових виробів. Компанія започаткована у 2007 році на базі Монастириської тютюнової фабрики.</p>@|;<p>Украинский производитель табачных изделий. Компания основана в 2007 году на базе Монастыриской табачной фабрики.</p>@|;<p>Ukrainian tobacco manufacturer. The company was founded in 2007 on the basis of the Monastyrist Tobacco Factory.</p>@|;<p>Ukraiński producent tytoniu. Firma została założona w 2007 roku na bazie Monastyrist Tobacco Factory.</p>@|;', '@|;@|;@|;@|;', '', '', '', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-11-21 20:05:52', '2017-11-21 20:05:53'),
(32, 17, 0, '', '<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;', '<p>Український виробник тютюнових виробів. Компанія започаткована у 2007 році на базі Монастириської тютюнової фабрики.</p>@|;<p>Украинский производитель табачных изделий. Компания основана в 2007 году на базе Монастыриской табачной фабрики.</p>@|;<p>Ukrainian tobacco manufacturer. The company was founded in 2007 on the basis of the Monastyrist Tobacco Factory.</p>@|;<p>Ukraiński producent tytoniu. Firma została założona w 2007 roku na bazie Monastyrist Tobacco Factory.</p>@|;', '@|;@|;@|;@|;', '', '', '[{"full":"upload\\/articles\\/32\\/full\\/img-1(1).jpg","min":"upload\\/articles\\/32\\/min\\/img-1(1).jpg"},{"full":"upload\\/articles\\/32\\/full\\/img-1(2).jpg","min":"upload\\/articles\\/32\\/min\\/img-1(2).jpg"},{"full":"upload\\/articles\\/32\\/full\\/img-1.jpg","min":"upload\\/articles\\/32\\/min\\/img-1.jpg"}]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-11-21 21:13:29', '2017-11-22 09:36:12'),
(33, 16, 0, '', '<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;<h2>GLOBAL TOBACCO</h2><h3>INTERNATIONAL</h3>@|;', '<p>Будемо раді відповісти на усі Ваші запитання.</p>@|;<p>Будем рады ответить на все Ваши вопросы.</p>@|;<p>We will be glad to answer all your questions.</p>@|;<p>Chętnie odpowiemy na wszystkie Twoje pytania.</p>@|;', '@|;@|;@|;@|;', '', '', '[]', '', 0, '0000-00-00 00:00:00', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 1, '2017-11-22 12:30:55', '2017-11-22 12:31:43');

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
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
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=26 ;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `parent_id`, `article_parent`, `link`, `title`, `img`, `short_description`, `description`, `imgs`, `fields`, `date`, `active`, `meta_title`, `meta_description`, `meta_keywords`, `priority`, `created_at`, `updated_at`) VALUES
(14, 0, 0, 'about', 'Про компанію@|;О компании@|;About company@|;О nas@|;', '', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '[]', '{"base":["title","short_description","description","gallery","active","meta_title","meta_description","meta_keywords"],"attributes":{"Картинка на головній №1":{"type":"files","lang_active":false,"active":false},"Картинка на головній №2":{"type":"files","lang_active":false,"active":false},"Картинка на головній №3":{"type":"files","lang_active":false,"active":false}}}', '0000-00-00 00:00:00', 1, 'META Title about@|;@|;@|;@|;', 'META Description about@|;@|;@|;@|;', 'META Keywords, about@|;@|;@|;@|;', 9, '2017-08-23 17:13:44', '2017-11-21 21:05:37'),
(16, 0, 0, 'contact', 'Контакти@|;Контакты@|;Contacts@|;Kontakt@|;', '', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '[]', '{"base":["title","short_description","active"],"attributes":{}}', '0000-00-00 00:00:00', 1, '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 0, '2017-08-23 17:17:59', '2017-11-22 12:31:15'),
(17, 0, 0, 'products', 'Продукція@|;Продукция@|;Products@|;Produkty@|;', '', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '[]', '{"base":["title","short_description","gallery","active"],"attributes":{}}', '0000-00-00 00:00:00', 1, '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 7, '2017-08-23 17:20:32', '2017-11-21 21:12:00'),
(18, 0, 0, 'main', 'Головна@|;Главная@|;Main@|;Główna@|;', '', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '[]', '{"base":["title","short_description","active","meta_title","meta_description","meta_keywords"],"attributes":{"Логотип":{"type":"files","lang_active":false,"active":false}}}', '0000-00-00 00:00:00', 1, 'META Title MAIN@|;@|;@|;@|;', 'META Description MAIN@|;@|;@|;@|;', 'META Keywords@|;@|;@|;@|;', 10, '2017-11-21 09:32:07', '2017-11-21 20:13:27'),
(19, 0, 0, 'advantages', 'Переваги@|;Преимущества@|;Advantages@|;Korzyści@|;', '', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '[]', '{"base":["title","short_description","priority","active"],"attributes":{}}', '0000-00-00 00:00:00', 1, '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 8, '2017-11-21 09:41:33', '2017-11-21 16:37:25'),
(20, 0, 0, 'partners', 'Партнерам@|;Партнерам@|;Partners@|;Partnerzy@|;', '', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '[]', '{"base":["title","short_description","description","active"],"attributes":{}}', '0000-00-00 00:00:00', 1, '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 6, '2017-11-21 09:59:50', '2017-11-21 19:58:16'),
(21, 0, 0, 'opened', 'Ми відкриті@|;Мы открыты@|;We are opened@|;Jesteśmy otwarci@|;', '', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '[]', '{"base":["title","short_description","active"],"attributes":{}}', '0000-00-00 00:00:00', 1, '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 6, '2017-11-21 10:16:32', '2017-11-21 10:18:31'),
(22, 0, 0, 'team', 'Команда@|;Команда@|;The team@|;Zespół@|;', '', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '[]', '{"base":["title","priority","active"],"attributes":{"Посада":{"type":"input","lang_active":true,"active":false},"Фото працівника":{"type":"files","lang_active":false,"active":false}}}', '0000-00-00 00:00:00', 1, '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 5, '2017-11-21 10:26:06', '2017-11-21 10:42:32'),
(23, 0, 0, 'directions', 'Напрямки виробництва@|;Направления производства@|;Production directions@|;Kierunki produkcji@|;', '', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '[]', '{"base":["title","short_description","gallery","priority","active"],"attributes":{"Фон":{"type":"files","lang_active":false,"active":false},"Картинка продукту":{"type":"files","lang_active":false,"active":false}}}', '0000-00-00 00:00:00', 1, '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 4, '2017-11-21 10:52:06', '2017-11-21 14:06:51'),
(25, 23, 0, 'factors', 'Декілька факторів@|;Несколько факторов@|;Several factors@|;Kilka czynników@|;', '', '@|;@|;@|;@|;', '@|;@|;@|;@|;', '[]', '{"base":["title","short_description","priority","active","article_parent"],"attributes":{"Іконка":{"type":"files","lang_active":false,"active":false}}}', '0000-00-00 00:00:00', 1, '@|;@|;@|;@|;', '@|;@|;@|;@|;', '@|;@|;@|;@|;', 0, '2017-11-21 13:58:28', '2017-11-21 14:16:58');

-- --------------------------------------------------------

--
-- Структура таблицы `langs`
--

CREATE TABLE IF NOT EXISTS `langs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `lang` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `country` text COLLATE utf8_unicode_ci NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT '0',
  `img` text COLLATE utf8_unicode_ci NOT NULL,
  `priority` tinyint(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=14 ;

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
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  KEY `password_resets_email_index` (`email`),
  KEY `password_resets_token_index` (`token`)
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
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` text COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

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
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `page_id` int(11) NOT NULL DEFAULT '0',
  `name` text COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(55) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  `priority` int(11) NOT NULL DEFAULT '0',
  `lang_active` int(11) NOT NULL DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=26 ;

--
-- Дамп данных таблицы `texts`
--

INSERT INTO `texts` (`id`, `page_id`, `name`, `type`, `title`, `description`, `priority`, `lang_active`, `created_at`, `updated_at`, `deleted_at`) VALUES
(22, 0, 'phone', 'input', 'Контактный телефон', '+380 67 332-00-05', 0, 0, '2017-08-23 17:22:02', '2017-08-23 17:22:02', NULL),
(23, 0, 'email', 'input', 'Email', 'info@globaltobako.com', 0, 0, '2017-08-23 17:23:08', '2017-08-23 17:23:08', NULL),
(24, 0, 'address', 'input', 'Адрес', 'м. Луцьк, вул. Вахтангова, 12 а.@|;г. Луцк, ул. Вахтангова, 12 а@|;12 a, Vakhtangova St, Lutsk, Ukraine, 43006@|;m. Łuck, ul. E. wachtangowa, 12a.@|;', 0, 1, '2017-08-23 17:26:12', '2017-08-23 17:26:12', NULL),
(25, 0, 'map', 'input', 'Карта', 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2539.671356761501!2d30.517607904753675!3d50.46584425623309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1510561976674', 0, 0, '2017-08-23 18:58:34', '2017-11-22 12:11:16', NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=9 ;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(7, 'admin', 'info@globaltobako.com', '$2y$10$DjLl51axgKx40JHLEuj.1OnOeX4Y57DkQVAeR3vGwq2kRUSZM7boK', 'ATzR71jf8s1uoYnDr0Yq5QeOk1HRekFRiNli8zuNWSCskHGGosvSwqU4NfXM', '2017-08-23 16:32:04', '2017-08-23 16:57:56'),
(8, 'root', 'webtestingstudio@gmail.com', '$2y$10$wAiitX7gHFd80LOncnIlAO2MuTO8xkLnrybtelpOpRaS0yeVcCsAu', 'GbuzlmzBhQLXjgXG6GyHgJ5AHBj3M3Ft5l9UIsh2Z9rol49UIwMC1UUxFjlM', '2017-08-23 16:58:54', '2017-08-23 16:59:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
