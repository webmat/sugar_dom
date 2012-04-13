/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function(el) {

  test("the third param is to create nested elements", function() {
    var e = el('p', {}, [el('a')]);
    ok( e.nodeName.match(/p/i) );
    equal( e.childNodes.length, 1, 'the parent element has a child');
    ok( e.childNodes[0].nodeName.match(/a/i) );
  });

  test("if the second param is an array, it's assumed that no attributes were specified", function() {
    var e = el('p', [el('a')]);
    equal( e.childNodes.length, 1, 'the parent element has a child');
    ok( e.childNodes[0].nodeName.match(/a/i) );
  });

  test("a string in the children creates a text node", function() {
    var e = el('p', ["my awesome paragraph"]);
    equal( e.childNodes.length, 1, 'the parent element has a child');
    equal( e.childNodes[0].textContent, 'my awesome paragraph' );
  });

}(el));
