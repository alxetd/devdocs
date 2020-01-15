# HTML
## Consider a responsive site design that requires a full-width image in all responsive states. What would be the correct way to code this to ensure the page loads the smallest image required to fill the space?
### Answer
The key attributes here are srcset and sizes. These attributes allow the developer to specify multiple image sizes for one <img>, for example:
```html
<img src="https://example.com/images/image.png" srcset="https://example.com/images/image-1024.png 1024w, https://example.com/images/image-512.png 512w" sizes="100vw">
```
By using srcset and sizes, the browser will then intelligently select the correct image source to be used based on the size of the visitor’s viewport.

Any suggestions of changing the image source using JavaScript based on the size of the viewport should be seen as a red flag. This indicates the developer has not been keeping current with CSS feature support and/or best practices.
