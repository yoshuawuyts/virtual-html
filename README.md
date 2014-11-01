## virtual-html

Convert given HTML into [Virtual DOM](http://npmjs.org/virtual-dom) object

## Install

```bash
$ npm install virtual-html
```

## Usage

```js
var html = '<div class="foo bar" style="color: red; background: yellow;" data-yo="123">yo</div>';

var virtual = require('virtual-html')

virtual(html, function (error, dom) {
  if (error) throw error

  dom.tagName
  // => 'div'

  dom.children[0].text
  // => 'yo'

  dom.dataset.yo
  // => 123
})
```
