# rune.save.js

> **rune.save.js + svg.save.js**  
> Save a SVG Element as an Image (JPG, PNG, SVG and WebP). It works as standalone script and as [Rune.js](http://runemadsen.github.io/rune.js/) Plugin.

## Installation

```
npm i rune.save.js
```

It's also available on *unpkg* :

- **Rune.js Plugin** : https://unpkg.com/rune.save.js/dist/rune.save.js
- **Standalone Script** : https://unpkg.com/rune.save.js/dist/svg.save.js

## Usage

1. Include the .js file on your document

```html
<!-- Include the Rune.js Plugin from your file system or unpkg -->
<script src="./path/rune.save.js"></script>
<script src="https://unpkg.com/rune.save.js/dist/rune.save.js"></script>

<!-- Or the Standalone Script from your file system or unpkg -->
<script src="./path/svg.save.js"></script>
<script src="https://unpkg.com/rune.save.js/dist/svg.save.js"></script>
```

2. Call the `save()` method

```javascript
// As Rune.js Plugin
const r = new Rune({
    container: "body",
    width: 600,
    height: 600
});
/* ... your code ... */
r.save();

// ---

// As standalone script, create a new exportable SVG Object (xSVG)
// then call the save method
let drawing = new xSVG('#svgSketch');
    drawing.save();
```

3. Options

```javascript
// 3 optional parameters : filename, scale, quality
// Example :

let sketch = new xSVG('#svgSketch');
    sketch.save('sketch.png', 3);

// Image exported as PNG with filename 'sketch.png'
// and output dimensions as 3x the SVG source size
```


## API

### save(file, scale, quality)

#### — *file*
String indicating the filename including the extension that will be used as the image format (i.e: *'myImage.png'*).  
Allowed image extensions are: svg, png, jpg, jpeg and webp (WebP only works on Chrome).  
The default value is: `'image.jpg'`

#### — *scale*
Number that indicates the multiplier used to create the raster image image size dimensions output. In the case that we have a `400x400` SVG file, and a scale multiplier of `3`, the output raster image will have a `1200x1200` size (x3).  
The default value is `2`

#### — *quality*
Number between 0 and 1 indicating the image quality to use for image formats that use lossy compression such as image/jpeg and image/webp.   
The default value is `0.92`



## License

MIT &copy; [Jorge Moreno](https://twitter.com/alterebro)
