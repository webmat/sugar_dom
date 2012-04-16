/*
 * sugar_dom
 * https://github.com/webmat/sugar_dom
 *
 * Copyright (c) 2012 Mathieu Martin
 * Licensed under the MIT license.
 */

(function(exports, document) {

  // Can't only use split(/(#|\.)/) because IE (even 9) doesn't include the
  // separators in the results.
  var parseTag = function(rawTag) {
    var parts = rawTag.split(/#|\./),
        tag   = {tag: parts.shift()};

    if (rawTag.match(/#/)) { tag.id = parts.shift(); }
    if (parts.length) { tag['class'] = parts.join(' '); }

    return tag;
  };

  var setAttributes = function(element, attributes) {
    var a, v;
    for (a in attributes) {
      v = attributes[a];
      if (null === v) {
        element.removeAttribute(a);
      } else {
        element.setAttribute(a, String(v) );
      }
    }
  };

  var appendChildren = function(element, children) {
    if (typeof children === 'string') {
      children = [children];
    }
    for (var i in children) {
      var child = children[i];
      if (typeof child === 'string') {
        child = document.createTextNode(child);
      }
      element.appendChild(child);
    }
  };

  exports.el = function(tag, attributes, children) {
    // only second parameter omitted
    if ( attributes instanceof Array || typeof attributes === 'string' ) {
      children = attributes;
      attributes = {};
    }
    if ( !children ) { children = []; }
    if ( !attributes ) { attributes = {}; }

    var element = document.createElement(tag);

    setAttributes(element, attributes);
    appendChildren(element, children);

    return element;
  };

  // Commit heresy in the name of easier testing :-)
  exports.el.parseTag = parseTag;

}(typeof exports === 'object' && exports || this, document));
