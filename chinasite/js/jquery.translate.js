(function($){
  $.fn.translate = function(options) {
    var that = this;  
    var settings = {
      css: "translate",
      lang: "ru"
    };
    settings = $.extend(settings, options || {});
    if (settings.css.lastIndexOf(".", 0) !== 0)
      settings.css = "." + settings.css;      
    var t = settings.t;
    this.lang = function(l) {
      if (l) {
        settings.lang = l;
        this.translate(settings);
      }        
      return settings.lang;
    };
    this.get = function(index) {
      var res = index;
      try {
        res = t[index][settings.lang];
      }
      catch (err) {
        return index;
      }     
      if (res)
        return res;
      else
        return index;
    };
    this.g = this.get;
    this.find(settings.css).each(function(i) {
      var $this = $(this);
      var translate_key = $this.attr("data-translate-key");
      if (!translate_key) {
        translate_key = $this.html();
        $this.attr("data-translate-key", translate_key);
      }
      $this.html(that.get(translate_key));
    });
    return this;
  };
})(jQuery);
  var dict = {
    "инфо": {
      en: "home"
    },
    "о нас": {
      en: "about us"
    },
    "курсы": {
      en: "course"
    },
    "больше": {
      en: "more"
    },
    "факты": {
      en: "facts"
    },
    "ссылки": {
      en: "link"
    },
    "контакты": {
      en: "contact us"
    }
  }
  var translator = $('body').translate({lang: "ru", t:dict}); 
  $('.trn_btn').click(function(){
  translator.lang("en");
  });