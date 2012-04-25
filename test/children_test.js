/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function(el) {
  var textFor = function(element) {
    if (element.textContent) { return element.textContent; }
    return element.innerText;
  };

  test("the third param is to create nested elements", function() {
    var e = el('p', {}, [el('a')]);
    ok( e.nodeName.match(/p/i) );
    equal( e.childNodes.length, 1, 'the parent element has a child');
    var child = e.childNodes[0];
    ok( child.nodeName.match(/a/i) );
    equal( child.parentNode, e );
  });

  test("if the second param is an array, it's assumed that no attributes were specified", function() {
    var e = el('p', [el('a')]);
    equal( e.childNodes.length, 1, 'the parent element has a child');
    ok( e.childNodes[0].nodeName.match(/a/i) );
  });

  test("a string in the children creates a text node", function() {
    var e = el('p', ["my awesome paragraph"]);
    equal( e.childNodes.length, 1, 'the parent element has a child');
    equal( textFor(e), 'my awesome paragraph' );
  });

  test("a string can replace the children array, as a shortcut", function() {
    var e = el('p', "my awesome paragraph");
    equal( e.childNodes.length, 1, 'the parent element has a child');
    equal( textFor(e), 'my awesome paragraph' );
  });

  test("empty children attributes are skipped", function(){
    var e = el('div', [el('p'), null, undefined]);
    equal( e.childNodes.length, 1, 'the parent element has exactly 1 child');
  });

}(el));
