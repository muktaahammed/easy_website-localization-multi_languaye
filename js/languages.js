
var arrLang = new Array();
arrLang['en'] = new Array();
arrLang['bn'] = new Array();

// English content
arrLang['en']['home'] = 'Home';
arrLang['en']['about'] = 'About Us';
arrLang['en']['contact'] = 'Contact Us';
arrLang['en']['link_portfolio'] = 'My Porfolio';

// Khmer content (Cambodian Language)
// Please change to your own language
arrLang['bn']['home'] = 'হোম';
arrLang['bn']['about'] = 'অ্যবাউট';
arrLang['bn']['contact'] = 'যোগাযোগ';

arrLang['bn']['link_portfolio'] = 'আমার ওয়েব সাইট';

// Process translation
$(function () {
    $('.translate').click(function () {
        var lang = $(this).attr('id');

        $('.lang').each(function (index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});
  