/*
 * sugar_dom
 * https://github.com/webmat/sugar_dom
 *
 * Copyright (c) 2012 Mathieu Martin
 * Licensed under the MIT license.
 */

(function(exports, document) {

  exports.el = function(tag) {
    return document.createElement(tag);
  };

}(typeof exports === 'object' && exports || this, document));
