# sugar_dom

JavaScript templating engines are so 2012. sugar_dom comes from the future!

The inspiration for sugar_dom is a post by [Neil Jenkins, on Fastmail's blog][sugared_dom].

[sugared_dom]: http://blog.fastmail.fm/2012/02/20/building-the-new-ajax-mail-ui-part-2-better-than-templates-building-highly-dynamic-web-pages/


## Why?

The philosophy behind sugar_dom is to have the browser do as little work as possible.
When using a typical templating engine, the overall process looks like this:

1. Load the template from a script tag or somewhere else;
1. Insert your data into it, creating one huge string;
1. Insert the result into the DOM;
1. The browser parses that new string, creating DOM nodes;
1. Optionally, you traverse the DOM again to attach your event handlers.

With sugar_dom, the process is the following:

1. Create DOM nodes in your JavaScript code;
1. Optionally attach event handlers to your DOM nodes;
1. Insert your parent DOM node into the DOM.

This philosophy leads to a very simple library, which in turns has the following advantages:

- Microscopic file size, around 1k minified;
- It's fast;
- It has less moving parts than a full-fledged templating engine;
- Lets you attach event handlers right when you build your DOM nodes.


## How?

sugar_dom is simply syntactic sugar around creating DOM nodes. So not only is it
incredibly small, but it's simply JavaScript. Although the syntactic sugar aims
at being [cross-browser](#browser_support), so you don't need to know the tricks.

Since it's simply JavaScript, sugar_dom doesn't require any special trick to
pass templates around (script tags with a special type, dynamically loaded files or hidden nodes).


## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/webmat/sugar_dom/master/dist/sugar_dom.min.js
[max]: https://raw.github.com/webmat/sugar_dom/master/dist/sugar_dom.js

In your web page:

```html
<script src="dist/sugar_dom.min.js"></script>
<script>
  var link = el('a.awesome-class', {'href': '/account'}, ['My Awesome Account']);
  document.querySelectAll('body').appendChild( link );
</script>
```


## Documentation

At it's simplest form, create an empty 'p' node and insert it into the DOM:


### The basics

```javascript
var p = el('p');
some_element.appendChild(p);
```

Pure DOM elements can of course be inserted with tools like jQuery:

```javascript
$('section.main').append( el('p') );
```


### el() arguments

`el` takes up to 3 arguments, the last two being optional.

```javascript
el(tag, attributes, children)
```

*tag* is a string with the name of the tag to create, and optionally an id and
class names, written in a CSS selector syntax.

*attributes* is an optional object of attributes for the tag. The attribute
names use the HTML syntax, not the DOM syntax.
In other words, `{'class': 'my-class'}` rather than `{className: 'my-class'}`.

*children* is an array of DOM nodes (created with el() or not) or plain strings.
Plain strings will of course create a text node. As a convenience, if children is
a string rather than an array, one child text node will be created.
The children are appended in the order they are specified.

The parent node (the first call to el()) is not inserted in the DOM. It's up to
you to do that. However any specified child is automatically appended to its parent
node, so you only have to insert the parent node into the DOM.

<h3 id="examples">A Few Examples</h3>

```javascript
el('p').outerHTML // => <p></p>
el('p#id.my-class').outerHTML // => <p id="id" class="my-class"></p>
el('div.section', {'data-role': 'page'}).outerHTML // => <p data-role="page"></p>
el('a', {href: '/account'}, 'My Account').outerHTML // => <a href="/account">My Account</a>

el('form', {action: '/posts', _method: 'POST'}, [
  el('input#post_title.wide', {name: 'post_title', placeholder: "Your awesome post"}),
  el('text_area#post_body', {name: 'post_body'})
]).outerHTML;
/* =>
<form action="/posts" _method="POST">
  <input id="post_title" name="post_title" placeholder="Your awesome post" class="wide"></input>
  <textarea name="post_body" class="wide"></textarea>
</form>
*/
```


<h3 id="browser_support">Support</h3>

sugar_dom is tested on Chrome, Firefox, Safari (desktop and mobile),
Opera desktop, PhantomJS,
and on the scourge or the Internet: IE 7+ (via IE 9's developer tools).

## Contributing

Feel free to submit [issues][issues] and [pull requests][pull].

[issues]: https://github.com/webmat/sugar_dom/issues
[pull]: https://github.com/webmat/sugar_dom/pulls

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality.
Lint and test your code using [grunt][grunt].

[grunt]: https://github.com/cowboy/grunt

_Also, please don't edit files in the "dist" subdirectory as they are generated
via grunt. You'll find source code in the "src" subdirectory._

## Release History

_(Coming soon)_

## License
Copyright (c) 2012 Mathieu Martin
Licensed under the MIT license.
