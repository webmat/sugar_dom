/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function(el, document) {

  test("creating element attributes", function() {
    var e = el('p', {'data-alice': 'bob'});
    var dataAttribute = e.attributes.getNamedItem('data-alice');
    ok(dataAttribute);
    equal(dataAttribute.value, 'bob');
  });

  // test("", function() {
  // });
}(el, document));
