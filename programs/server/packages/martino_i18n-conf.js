(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var _ = Package.underscore._;

/* Package-scope variables */
var Conf, I18NConf;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/martino_i18n-conf/packages/martino_i18n-conf.js          //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/martino:i18n-conf/lib/i18nconf.js                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var defaultOptions = {                                                                                                // 1
                                                                                                                      // 2
    defaultLanguage: 'en',                                                                                            // 3
                                                                                                                      // 4
    serverSide: true,                                                                                                 // 5
                                                                                                                      // 6
    languages: ['en'],                                                                                                // 7
                                                                                                                      // 8
    autoConfLanguage: true,                                                                                           // 9
                                                                                                                      // 10
    persistLanguage: true,                                                                                            // 11
                                                                                                                      // 12
    persistCookieName: 'martino:i18n-conf:lang',                                                                      // 13
                                                                                                                      // 14
    persistCookieExpiration: 2147483647                                                                               // 15
                                                                                                                      // 16
};                                                                                                                    // 17
                                                                                                                      // 18
                                                                                                                      // 19
Conf = function (options, lang) {                                                                                     // 20
                                                                                                                      // 21
    this.version = "0.3.4";                                                                                           // 22
                                                                                                                      // 23
    this.language = null;                                                                                             // 24
                                                                                                                      // 25
    this._isLanguageSet = false;                                                                                      // 26
                                                                                                                      // 27
    this.languageDep = new Deps.Dependency();                                                                         // 28
                                                                                                                      // 29
    this.options = _.clone(defaultOptions);                                                                           // 30
                                                                                                                      // 31
    this.langChangeCbs = [];                                                                                          // 32
                                                                                                                      // 33
    this.configureCbs = [];                                                                                           // 34
                                                                                                                      // 35
    this.init();                                                                                                      // 36
                                                                                                                      // 37
    if (options) {                                                                                                    // 38
        this.configure(options);                                                                                      // 39
    }                                                                                                                 // 40
                                                                                                                      // 41
    if (lang) {                                                                                                       // 42
        this.setLanguage(lang);                                                                                       // 43
    }                                                                                                                 // 44
                                                                                                                      // 45
    return this;                                                                                                      // 46
                                                                                                                      // 47
};                                                                                                                    // 48
                                                                                                                      // 49
Conf.prototype.Conf = Conf;                                                                                           // 50
                                                                                                                      // 51
Conf.prototype.configure = function (options) {                                                                       // 52
                                                                                                                      // 53
    var self = this;                                                                                                  // 54
                                                                                                                      // 55
    var opts = options || {};                                                                                         // 56
                                                                                                                      // 57
    this.options = _.extend(this.options, opts);                                                                      // 58
                                                                                                                      // 59
    // Check for inconsistent configuration options                                                                   // 60
    if (this.options.languages && this.options.languages.length < 1) {                                                // 61
        console.log("Warning: languages parameter empty, configuring with languages = ['en'] ");                      // 62
        this.options.languages = ['en'];                                                                              // 63
    }                                                                                                                 // 64
                                                                                                                      // 65
    if (this.options.defaultLanguage && !this.isLanguageSupported(this.options.defaultLanguage)) {                    // 66
        console.log("Warning: default language not supported ");                                                      // 67
        this.options.defaultLanguage = this.options.languages[0];                                                     // 68
    }                                                                                                                 // 69
                                                                                                                      // 70
    _.each(this.configureCbs, function (cb) {                                                                         // 71
        cb.call(self, self.options);                                                                                  // 72
    });                                                                                                               // 73
                                                                                                                      // 74
};                                                                                                                    // 75
                                                                                                                      // 76
Conf.prototype.onLanguageChange = function (cb) {                                                                     // 77
    this.langChangeCbs.push(cb);                                                                                      // 78
};                                                                                                                    // 79
                                                                                                                      // 80
Conf.prototype.onConfigure = function (cb) {                                                                          // 81
    this.configureCbs.push(cb);                                                                                       // 82
};                                                                                                                    // 83
                                                                                                                      // 84
Conf.prototype.setLanguage = function (lang) {                                                                        // 85
                                                                                                                      // 86
    var self = this;                                                                                                  // 87
    var oldLang = this._language;                                                                                     // 88
    var newLang = lang;                                                                                               // 89
                                                                                                                      // 90
    if (!this.isLanguageSupported(lang)) {                                                                            // 91
        console.log("Warning: refusing to set a non supported language [" + lang + "].");                             // 92
        return;                                                                                                       // 93
    }                                                                                                                 // 94
                                                                                                                      // 95
    if (oldLang == newLang && this._isLanguageSet) {                                                                  // 96
        console.log("Warning: asked to change language to [" + lang + "] but this is already the current language."); // 97
        return;                                                                                                       // 98
    }                                                                                                                 // 99
                                                                                                                      // 100
    this._language = lang;                                                                                            // 101
                                                                                                                      // 102
    _.each(this.langChangeCbs, function (cb) {                                                                        // 103
        cb.call(self, oldLang, newLang);                                                                              // 104
    });                                                                                                               // 105
                                                                                                                      // 106
    this._isLanguageSet = true;                                                                                       // 107
                                                                                                                      // 108
    if (this.options.persistLanguage && this.options.setPersistedLanguage) {                                          // 109
        this.options.setPersistedLanguage.call(this, lang);                                                           // 110
    }                                                                                                                 // 111
                                                                                                                      // 112
    this.languageDep.changed();                                                                                       // 113
};                                                                                                                    // 114
                                                                                                                      // 115
Conf.prototype.getLanguage = function () {                                                                            // 116
                                                                                                                      // 117
    this.languageDep.depend();                                                                                        // 118
                                                                                                                      // 119
    var lang = null;                                                                                                  // 120
                                                                                                                      // 121
    lang = this._language;                                                                                            // 122
                                                                                                                      // 123
    if (!lang) {                                                                                                      // 124
        lang = this.getDefaultLanguage();                                                                             // 125
    }                                                                                                                 // 126
                                                                                                                      // 127
    return lang;                                                                                                      // 128
};                                                                                                                    // 129
                                                                                                                      // 130
Conf.prototype.getDefaultLanguage = function () {                                                                     // 131
                                                                                                                      // 132
    if (this.options.getDefaultLanguage) {                                                                            // 133
        return this.options.getDefaultLanguage.call(this);                                                            // 134
    }                                                                                                                 // 135
                                                                                                                      // 136
    return this.options.defaultLanguage;                                                                              // 137
                                                                                                                      // 138
};                                                                                                                    // 139
                                                                                                                      // 140
Conf.prototype.isLanguageSupported = function (lang, exactMatch) {                                                    // 141
                                                                                                                      // 142
    lang = this.normalizeLanguage(lang);                                                                              // 143
                                                                                                                      // 144
    var bestLang = this.getBestMatchingLanguage(lang);                                                                // 145
                                                                                                                      // 146
    if (lang == bestLang) {                                                                                           // 147
        return true;                                                                                                  // 148
    }                                                                                                                 // 149
                                                                                                                      // 150
    if (!exactMatch && lang.substr(0, 2) == bestLang) {                                                               // 151
        return true;                                                                                                  // 152
    }                                                                                                                 // 153
                                                                                                                      // 154
    return false;                                                                                                     // 155
                                                                                                                      // 156
};                                                                                                                    // 157
                                                                                                                      // 158
Conf.prototype.getBestMatchingLanguage = function (lang) {                                                            // 159
                                                                                                                      // 160
    var resultLang;                                                                                                   // 161
                                                                                                                      // 162
    if (!lang) {                                                                                                      // 163
        lang = this.getLanguage();                                                                                    // 164
    }                                                                                                                 // 165
                                                                                                                      // 166
    lang = this.normalizeLanguage(lang);                                                                              // 167
                                                                                                                      // 168
    if (_.contains(this.options.languages, lang)) {                                                                   // 169
        resultLang = lang;                                                                                            // 170
    }                                                                                                                 // 171
                                                                                                                      // 172
    if (!resultLang) {                                                                                                // 173
        lang = lang.substr(0, 2);                                                                                     // 174
        if (_.contains(this.options.languages, lang)) {                                                               // 175
            resultLang = lang;                                                                                        // 176
        }                                                                                                             // 177
    }                                                                                                                 // 178
                                                                                                                      // 179
    if (!resultLang) {                                                                                                // 180
        resultLang = this.getDefaultLanguage();                                                                       // 181
    }                                                                                                                 // 182
                                                                                                                      // 183
    return resultLang;                                                                                                // 184
                                                                                                                      // 185
};                                                                                                                    // 186
                                                                                                                      // 187
Conf.prototype.isLanguageSet = function () {                                                                          // 188
                                                                                                                      // 189
    return this._isLanguageSet;                                                                                       // 190
                                                                                                                      // 191
};                                                                                                                    // 192
                                                                                                                      // 193
Conf.prototype.getPersistedLanguage = function () {                                                                   // 194
                                                                                                                      // 195
    var persistedLanguage = null;                                                                                     // 196
                                                                                                                      // 197
    if (this.options.getPersistedLanguage) {                                                                          // 198
        persistedLanguage = this.options.getPersistedLanguage.call(this);                                             // 199
    }                                                                                                                 // 200
    return (persistedLanguage === '' || !persistedLanguage) ? null : persistedLanguage;                               // 201
};                                                                                                                    // 202
                                                                                                                      // 203
Conf.prototype.setPersistedLanguage = function (lang) {                                                               // 204
                                                                                                                      // 205
    if (this.isLanguageSupported(lang) && this.options.setPersistedLanguage) {                                        // 206
        this.options.setPersistedLanguage.call(this, lang);                                                           // 207
        return lang;                                                                                                  // 208
    }                                                                                                                 // 209
                                                                                                                      // 210
    return null;                                                                                                      // 211
                                                                                                                      // 212
};                                                                                                                    // 213
                                                                                                                      // 214
Conf.prototype.removePersistedLanguage = function () {                                                                // 215
                                                                                                                      // 216
    if (this.options.removePersistedLanguage) {                                                                       // 217
        this.options.removePersistedLanguage.call(this);                                                              // 218
    }                                                                                                                 // 219
                                                                                                                      // 220
};                                                                                                                    // 221
                                                                                                                      // 222
Conf.prototype.reset = function (full) {                                                                              // 223
                                                                                                                      // 224
    this.removePersistedLanguage();                                                                                   // 225
                                                                                                                      // 226
    this.options = defaultOptions;                                                                                    // 227
                                                                                                                      // 228
    this.language = null;                                                                                             // 229
                                                                                                                      // 230
    this._isLanguageSet = false;                                                                                      // 231
                                                                                                                      // 232
    if (full) {                                                                                                       // 233
                                                                                                                      // 234
        this.langChangeCbs = [];                                                                                      // 235
        this.configureCbs = [];                                                                                       // 236
                                                                                                                      // 237
    }                                                                                                                 // 238
                                                                                                                      // 239
                                                                                                                      // 240
};                                                                                                                    // 241
                                                                                                                      // 242
Conf.prototype.normalizeLanguage = function (lang) {                                                                  // 243
                                                                                                                      // 244
    // Normalize navlang to lc-cc                                                                                     // 245
    lang = lang.toLowerCase();                                                                                        // 246
    lang = lang.replace('_', '-');                                                                                    // 247
    return lang;                                                                                                      // 248
                                                                                                                      // 249
};                                                                                                                    // 250
                                                                                                                      // 251
Conf.prototype.init = function () {                                                                                   // 252
};                                                                                                                    // 253
                                                                                                                      // 254
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/martino:i18n-conf/lib/i18nconf_init.js                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
I18NConf = new Conf();                                                                                                // 1
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['martino:i18n-conf'] = {}, {
  I18NConf: I18NConf
});

})();
