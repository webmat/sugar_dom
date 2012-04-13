/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function(el, document) {

  test("creating plain DOM elements", function() {
    ok( el('p').nodeName.match(/p/i), 'can create classic elements' );
    ok( el('div').nodeName.match(/div/i), 'can create classic elements' );
    ok( el('video').nodeName.match(/video/i), 'can create HTML5 elements' );
  });

  test("el doesn't attach the root element", function() {
    ok( !el('p').parentNode );
  });
}(el, document));
