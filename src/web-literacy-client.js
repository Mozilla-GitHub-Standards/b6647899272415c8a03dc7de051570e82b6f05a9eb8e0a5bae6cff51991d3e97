function WebLiteracyClient(options) {

  var DEFAULT_LANG = 'en';

  var self = this;

  // Options
  self.options = options = options || {};
  self.options.descriptionSuffix = options.descriptionSuffix || '_desc';

  // Get supported languages
  self.supportedLangs = function() {
    var keys = [];
    for (var lang in self.langs) {
      keys.push(lang);
    }
    return keys;
  };

  // Set language to English be default
  self.strings = self.langs.en;

  // Allow users to set language
  self.lang = function(l) {
    if (l && self.supportedLangs().indexOf(l) <= -1 ) {
      return console.error('Sorry, ' + l + 'is not a supported language in this release.');
    }
    else if (l) {
      self.strings = self.langs[l];
    }
    return self.strings;
  };

  self.term = function(tag) {
    return self.strings[tag] || self.langs[DEFAULT_LANG][tag];
  };

  self.description = function(tag) {
    return self.strings[tag + options.descriptionSuffix];
  };

  self.all = function() {
    return self.template.map(function(item) {
      return {
        term: self.strings[item.tag] || self.langs[DEFAULT_LANG][item.tag],
        tag: item.tag
      };
    });
  };

};

// Set up languages
WebLiteracyClient.prototype.langs = {};
