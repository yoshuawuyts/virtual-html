var virtual = require('./');
var test = require("prova");

var simple = '<div class="foo bar" style="color: red; background: yellow;">yo</div>';

test('creating virtual dom from HTML', function (t) {
  t.plan(2);

  virtual(simple, function (error, dom) {
    if (error) t.error(error);
    t.equal(dom.tagName, 'div');
    t.equal(dom.children[0].text, 'yo');
  });
});
