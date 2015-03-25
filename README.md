jquery-px-readmore
================
Just another jQuery Readmore plugin.

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
