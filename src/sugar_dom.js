/*
 * sugar_dom
 * https://github.com/webmat/sugar_dom
 *
 * Copyright (c) 2012 Mathieu Martin
 * Licensed under the MIT license.
 */

(function(exports, document) {

  var addProperties = function(element, properties) {
    var p, v;
    for (p in properties) {
      v = properties[p];
      element.setAttribute(p, '' + v);
    }
  };

  exports.el = function(tag, properties) {
    var element;
    if (!properties) { properties = {}; }

    element = document.createElement(tag);

    addProperties(element, properties);

    return element;
  };

}(typeof exports === 'object' && exports || this, document));
