# rune.save.js

> **rune.save.js + svg.save.js**  
> Export any SVG Element and save them as image (JPG, PNG, SVG and WebP). It works as standalone script and as [Rune.js](http://runemadsen.github.io/rune.js/) Plugin.

## Installation

```
npm i rune.save.js
```

It's also available on *unpkg* :

- **Rune.js Plugin** : https://unpkg.com/rune.save.js/dist/rune.save.js
- **Standalone Script** : https://unpkg.com/rune.save.js/dist/svg.save.js

## Usage

**Include the .js file on your HTML document**

```html
<!-- Include the Rune.js Plugin using the path to your downloaded file or the unpkg CDN url -->
<script src="./path/rune.save.js"></script>
<script src="https://unpkg.com/rune.save.js/dist/rune.save.js"></script>

<!-- Or the Standalone Script from your file system or unpkg -->
<script src="./path/svg.save.js"></script>
<script src="https://unpkg.com/rune.save.js/dist/svg.save.js"></script>
```

**Call the `save()` method passing the filename as parameter.** ( i.e: *'sketch.png'* to be saved as PNG. )

```javascript
// As Rune.js Plugin
const r = new Rune({
    container: "body",
    width: 600,
    height: 600
});
// ...
// Use the extension of the desired filetype: svg, jpg, png (webp also on Chrome)
r.save('myImage.jpg');

// ---

// As standalone script, create a new exportable SVG Object (xSVG)
// passing the CSS selector string for the target SVG element as parameter.
// Then call the save method.
let drawing = new xSVG('#svgSketch');
    drawing.save();
```

**Options**

```javascript
// The save method has three optional parameters : filename, scale & quality
// Example :

let sketch = new xSVG('#svgSketch');
    sketch.save('sketch.png', 3, .5);

// Image exported as PNG with filename 'sketch.png'
// with output file dimensions 3 times the SVG source size
// and a 0.5 over 1 image quality. (Options explained below)
```

## API

### save(file, scale, quality)

#### — *file*
`String` indicating the filename including the extension that will be used as the image format (i.e: *'myImage.png'*).  
Allowed image extensions are: svg, png, jpg, jpeg and webp (WebP only works on Chrome).  
The default value is: `'image.jpg'`

#### — *scale*
`Number` that indicates the multiplier used to create the raster image image size dimensions output. In the case that we have a `400x400` SVG file, and a scale multiplier of `3`, the output raster image will have a `1200x1200` size (x3).  
The default value is `2`

#### — *quality*
`Number` between 0 and 1 indicating the image quality to use for image formats that use lossy compression such as `image/jpeg` and `image/webp`.  
The default value is `0.92`



## License

MIT &copy; [Jorge Moreno](https://twitter.com/alterebro)
