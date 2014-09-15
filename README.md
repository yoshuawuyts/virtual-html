## virtual-html

Convert given HTML into Virtual DOM object

## Install

```bash
$ npm install virtual-html
```

## Usage

```js
var html = '<div class="foo bar" style="color: red; background: yellow;">yo</div>';

var virtual = require('virtual-html')
var tree

virtual(html, function (error, dom) {
  if (error) throw error

  dom.tagName
  // => 'div'

  dom.children[0].text
  // => 'yo'

})
```
