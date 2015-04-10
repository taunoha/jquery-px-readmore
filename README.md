jquery-px-readmore
================
Just another jQuery Readmore plugin for collapsing and expanding long blocks of text with "Read more" and "Read less" buttons.
It's a drop-in solution you can probably use with your existing HTML. There's no need for complicated sets of div's or smth smth. You can use this plugin purely through the markup API without writing a single line of JavaScript.


## How to use?
```html
<article data-readmore-max-height="200" data-readmore="Read more" data-readmore-less="Read less">
...
</article>
```
### Events
```js
$(document).on('closed.px.readmore', function(e) {
  var $this = $(e.relatedTarget); // Toggle button element
});

$(document).on('open.px.readmore', function(e) {
  var $this = $(e.relatedTarget); // Toggle button element
});

```
