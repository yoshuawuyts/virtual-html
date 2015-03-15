var virtual = require('./');
var test = require("prova");

var simple = '<div class="foo bar" style="color: red; background: yellow; background-image: url(http://f-oo.com/bar.jpg?qux=corge&span=eggs);" data-foo="bar" data-yo="hola">yo</div>';

test('creating virtual dom from HTML', function (t) {
  t.plan(7);

  virtual(simple, function (error, dom) {
    if (error) t.error(error);
    t.equal(dom.tagName.toLowerCase(), 'div');
    t.equal(dom.children[0].text, 'yo');
    t.equal(dom.properties.style.color, 'red');
    t.equal(dom.properties.style.background, 'yellow');
    t.equal(dom.properties.style['background-image'], 'url(http://f-oo.com/bar.jpg?qux=corge&span=eggs)');
    t.equal(dom.properties.dataset.foo, 'bar');
    t.equal(dom.properties.dataset.yo, 'hola');
  });
});
