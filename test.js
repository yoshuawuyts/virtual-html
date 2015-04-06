var virtual = require('./');
var test = require("prova");

var simple = '<div class="foo bar" style="color: red; background: yellow; background-image: url(http://f-oo.com/bar.jpg?qux=corge&span=eggs);" data-foo="bar" data-yo="hola" data-two-word="hello" for="woot">yo</div>';

test('creating virtual dom from HTML', function (t) {
  t.plan(10);

  virtual(simple, function (error, dom) {
    if (error) t.error(error);
    t.equal(dom.tagName.toLowerCase(), 'div');
    t.equal(dom.children[0].text, 'yo');
    t.equal(dom.properties.className, 'foo bar');
    t.equal(dom.properties.style.color, 'red');
    t.equal(dom.properties.style.background, 'yellow');
    t.equal(dom.properties.style['background-image'], 'url(http://f-oo.com/bar.jpg?qux=corge&span=eggs)');
    t.equal(dom.properties.dataset.foo, 'bar');
    t.equal(dom.properties.dataset.yo, 'hola');
    t.equal(dom.properties.dataset.twoWord, 'hello');
    t.equal(dom.properties.htmlFor, 'woot');
  });
});

test('returns a virtual dom from HTML', function (t) {
  t.plan(1);

  var dom = virtual(simple);
  t.equal(dom.tagName.toLowerCase(), 'div');
});

test('should throw if an error is found and no callback is provided', function (t) {
  t.plan(1);
  t.throws(virtual.bind(null, null));
});

test('should not include unnecessary keys in properties', function (t) {
  t.plan(6);

  var dom = virtual(simple);
  t.notOk('' in dom.properties.style);
  t.notOk(dom.properties['class']);
  t.notOk(dom.properties['for']);
  t.notOk(dom.properties['data-foo']);
  t.notOk(dom.properties['data-yo']);
  t.notOk(dom.properties['data-two-word']);
});
