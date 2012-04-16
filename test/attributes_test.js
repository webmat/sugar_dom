/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function(el) {

  test("creating an element with attributes", function() {
    var e = el('p', {id: 'my-id', 'class': 'my-class', 'data-alice': 'bob'});

    var dataAttribute = e.attributes.getNamedItem('data-alice');
    ok(dataAttribute);
    equal(dataAttribute.value, 'bob');

    equal(e.id, 'my-id');
    equal(e.className, 'my-class');
  });

  test("attributes named differently by the DOM are not an issue as long as you use the HTML naming", function() {
    var e;
    e = el('p', {'class': 'my-class1 my-class2'});
    equal(e.className, 'my-class1 my-class2');

    e = el('label', {'for': 'my-input'});
    equal(e.htmlFor, 'my-input');
  });

  test("setting an attribute to null removes it from the element", function() {
    var e = el('a', {href: null});
    ok( !e.href );
  });
}(el));
