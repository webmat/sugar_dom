/*
 * sugar_dom
 * https://github.com/webmat/sugar_dom
 *
 * Copyright (c) 2012 Mathieu Martin
 * Licensed under the MIT license.
 */

(function(exports, document) {

  var setAttributes = function(element, attributes) {
    var a, v;
    for (a in attributes) {
      v = attributes[a];
      if (null === v) {
        element.removeAttribute(a);
      } else {
        element.setAttribute(a, '' + v);
      }
    }
  };

  exports.el = function(tag, attributes) {
    var element;
    if (!attributes) { attributes = {}; }

    element = document.createElement(tag);

    setAttributes(element, attributes);

    return element;
  };

}(typeof exports === 'object' && exports || this, document));
