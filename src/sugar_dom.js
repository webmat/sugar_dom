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

  var inconsistentAttributes = {
    'class': 'className',
    'for': 'htmlFor'
  };

  var setAttributes = function(element, attributes) {
    var a, alt, value;
    for (a in attributes) {
      value = attributes[a];

      if (null === value) {
        element.removeAttribute(a);

      // What won't we do to please IE.
      } else if (alt = inconsistentAttributes[a]) {
        element[alt] = value;

      // The normal scenario.
      } else {
        element.setAttribute( a, String(value) );
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

    var parsedTag = parseTag(tag);
    // Arbitrarily decided that the id in the tag name overrides the one in the
    // attributes,  if both are set.
    if (parsedTag.id) { attributes.id = parsedTag.id; }
    // Having classes in both places keeps them all, though.
    if (parsedTag['class']) {
      if (attributes['class']) {
        attributes['class'] = parsedTag['class'] + ' ' + attributes['class'];
      } else {
        attributes['class'] = parsedTag['class'];
      }
    }

    var element = document.createElement(parsedTag.tag);
    setAttributes(element, attributes);
    appendChildren(element, children);

    return element;
  };

  // Commit heresy in the name of easier testing :-)
  exports.el.parseTag = parseTag;

}(typeof exports === 'object' && exports || this, document));
