/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function(el, document) {

  test('is awesome', 1, function() {
    ok(el('p').nodeName.match(/p/i), 'should be thoroughly awesome');
  });

}(el, document));
