var virtual = require('./');
var test = require('prova');
var domify = require('domify');

var simple = '<div class="foo bar" style="color: red; background: yellow; background-image: url(http://f-oo.com/bar.jpg?qux=corge&span=eggs);" data-foo="bar" data-yo="hola" for="woot">yo</div>';
var dom = domify(simple);

test('creating virtual dom from HTML', function (t) {
  t.plan(8);

  virtual(simple, function (error, dom) {
    if (error) t.error(error);
    t.equal(dom.tagName.toLowerCase(), 'div');
    t.equal(dom.children[0].text, 'yo');
    t.equal(dom.properties.style.color, 'red');
    t.equal(dom.properties.style.background, 'yellow');
    t.equal(dom.properties.style['background-image'], 'url(http://f-oo.com/bar.jpg?qux=corge&span=eggs)');
    t.equal(dom.properties.dataset.foo, 'bar');
    t.equal(dom.properties.dataset.yo, 'hola');
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

test('should convert DOM to virtual DOM', function (t) {
  t.plan(1);

  var vDom = virtual(dom);
  t.equal(dom.tagName.toLowerCase(), 'div');
});
