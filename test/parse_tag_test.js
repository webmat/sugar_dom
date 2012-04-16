/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function(parseTag) {

  test("plain tag name", function() {
    var e = parseTag('p');
    equal(e.tag, 'p');
    ok(! e.id);
    ok(! e['class']);
  });

  test("a tag with an id", function() {
    var e = parseTag('p#my_id');
    equal(e.tag, 'p');
    equal(e.id, 'my_id');
    ok(! e['class']);
  });

  test("tag with one class", function() {
    var e = parseTag('p.class1');
    ok(! e.id);
    equal(e.tag, 'p');
    equal(e['class'], 'class1');
  });

  test("tag with one class and an id", function() {
    var e = parseTag('p#my_id.class1');
    equal(e.tag, 'p');
    equal(e.id, 'my_id');
    equal(e['class'], ['class1']);
  });

  test("tag with multiple classes", function() {
    var e = parseTag('p.class1.class2');
    equal(e.tag, 'p');
    ok(! e.id);
    equal(e['class'], 'class1 class2');
  });

  test("tag with multiple classes and an id", function() {
    var e = parseTag('p#my_id.class1.class2');
    equal(e.tag, 'p');
    equal(e.id, 'my_id');
    equal(e['class'], 'class1 class2');
  });

}(el.parseTag));
