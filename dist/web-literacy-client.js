// if the module has no dependencies, the above pattern can be simplified to
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.WebLiteracyClient = factory();
  }
}(this, function() {
function WebLiteracyClient(options) {

  var DEFAULT_LANG = 'en';

  var self = this;

  // Options
  self.options = options = options || {};
  options.descriptionSuffix = options.descriptionSuffix || '_desc';

  // Set language to English be default
  self.strings = self.langs.en;

  // Allow users to set language
  self.lang = function(l) {
    if (l) {
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

WebLiteracyClient.prototype.template = [
  {
    "term": "Navigation",
    "description": "Using software tools to browse the web",
    "tag": "weblit-Navigation",
    "deprecates": []
  },
  {
    "term": "Web Mechanics",
    "description": "Understanding the web ecosystem",
    "tag": "weblit-WebMechanics",
    "deprecates": []
  },
  {
    "term": "Search",
    "description": "Locating information, people and resources via the web",
    "tag": "weblit-Search",
    "deprecates": []
  },
  {
    "term": "Credibility",
    "description": "Critically evaluating information found on the web",
    "tag": "weblit-Credibility",
    "deprecates": []
  },
  {
    "term": "Security",
    "description": "Keeping systems, identities, and content safe",
    "tag": "weblit-Security",
    "deprecates": []
  },
  {
    "term": "Composing for the web",
    "description": "Creating and curating content for the web",
    "tag": "weblit-Composing",
    "deprecates": []
  },
  {
    "term": "Remixing",
    "description": "Modifying existing web resources to create something new",
    "tag": "weblit-Remix",
    "deprecates": []
  },
  {
    "term": "Design and Accessibility",
    "description": "Creating universally effective communications through web resources",
    "tag": "weblit-DesignAccessibility",
    "deprecates": []
  },
  {
    "term": "Coding/scripting",
    "description": "Creating interactive experiences on the web",
    "tag": "weblit-CodingScripting",
    "deprecates": []
  },
  {
    "term": "Infrastructure",
    "description": "Understanding the Internet stack",
    "tag": "weblit-Infrastructure",
    "deprecates": []
  },
  {
    "term": "Sharing and Collaborating",
    "description": "Jointly creating and providing access to web resources",
    "tag": "weblit-SharingCollaborating",
    "deprecates": []
  },
  {
    "term": "Collaborating",
    "description": "Creating web resources with others",
    "tag": "weblit-Collaborating",
    "deprecates": []
  },
  {
    "term": "Community Participation",
    "description": "Getting involved in web communities and understanding their practices",
    "tag": "weblit-Community",
    "deprecates": []
  },
  {
    "term": "Privacy",
    "description": "Examining the consequences of sharing data online",
    "tag": "weblit-Privacy",
    "deprecates": []
  },
  {
    "term": "Open Practices",
    "description": "Helping to keep the Web democratic and universally accessible",
    "tag": "weblit-OpenPractices",
    "deprecates": []
  }
];
WebLiteracyClient.prototype.langs["en"] = {
  "WBLIT-MAP": "Web Literacy Map",
  "WBLIT-VERSION": "1.0.0",
  "weblit-Navigation": "Navigation",
  "weblit-Navigation_desc": "Using software tools to browse the web",
  "weblit-WebMechanics": "Web Mechanics",
  "weblit-WebMechanics_desc": "Understanding the web ecosystem",
  "weblit-Search": "Search",
  "weblit-Search_desc": "Locating information, people and resources via the web",
  "weblit-Credibility": "Credibility",
  "weblit-Credibility_desc": "Critically evaluating information found on the web",
  "weblit-Security": "Security",
  "weblit-Security_desc": "Keeping systems, identities, and content safe",
  "weblit-Composing": "Composing for the web",
  "weblit-Composing_desc": "Creating and curating content for the web",
  "weblit-Remix": "Remixing",
  "weblit-Remix_desc": "Modifying existing web resources to create something new",
  "weblit-DesignAccessibility": "Design and Accessibility",
  "weblit-DesignAccessibility_desc": "Creating universally effective communications through web resources",
  "weblit-CodingScripting": "Coding/scripting",
  "weblit-CodingScripting_desc": "Creating interactive experiences on the web",
  "weblit-Infrastructure": "Infrastructure",
  "weblit-Infrastructure_desc": "Understanding the Internet stack",
  "weblit-SharingCollaborating": "Sharing and Collaborating",
  "weblit-SharingCollaborating_desc": "Jointly creating and providing access to web resources",
  "weblit-Collaborating": "Collaborating",
  "weblit-Collaborating_desc": "Creating web resources with others",
  "weblit-Community": "Community Participation",
  "weblit-Community_desc": "Getting involved in web communities and understanding their practices",
  "weblit-Privacy": "Privacy",
  "weblit-Privacy_desc": "Examining the consequences of sharing data online",
  "weblit-OpenPractices": "Open Practices",
  "weblit-OpenPractices_desc": "Helping to keep the Web democratic and universally accessible"
};
return WebLiteracyClient;

}));
