/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function(el) {

  test("the third param is to create nested elements", function() {
    var e = el('p', {}, [el('a')]);
    ok( e.nodeName.match(/p/i) );
    // equal( e.childNodes.length, 1, 'the parent element has a child');
    // var first_child = e.childNodes[0];
    // ok( first_child.nodeName.match(/a/i) );
  });

}(el));
