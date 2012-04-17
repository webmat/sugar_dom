/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function(el) {

  test("can create elements by specifying ids and classes with CSS-like syntax in the first param", function() {
    var e = el('p#my_id.class1.class2');
    ok( e.nodeName.match(/p/i) );
    equal(e.id, 'my_id');
    equal(e.className, 'class1 class2');
  });

  test("classes specified in the tag name and in the attributes are all added to the resulting element", function() {
    var e = el('p.class1', {'class': 'class2'});
    equal(e.className, 'class1 class2');
  });

  // test("the id specified in the tag name overrides an id specified in the attributes", function() {
  // });

}(el));
