# rune.save.js

> **rune.save.js + svg.save.js**  
> Save a SVG Element as an Image (JPG, PNG, SVG and WebP). It works as standalone script and as [Rune.js](http://runemadsen.github.io/rune.js/) Plugin.

## Usage

1. Include the .js file on your document

```html
<!-- Include the Standalone Script -->
<script src="./path/rune.save.js"></script>

<!-- Or the Rune.js Plugin -->
<script src="./path/svg.save.js"></script>
```

2. Call the `save()` method

```javascript
// As standalone script
let drawing = new xSVG('#svgSketch');
    drawing.save();

// ---

// As Rune.js Plugin
const r = new Rune({
    container: "body",
    width: 600,
    height: 600
});
    /* ... */
    r.save();
```

## API

### save(file, quality, scale)

#### — *file*
String indicating the filename including the extension that will be used as the image format (i.e: *'myImage.png'*).  
Allowed image extensions are: svg, png, jpg, jpeg and webp (WebP only works on Chrome).  
The default value is: `'image.jpg'`

#### — *quality*
Number between 0 and 1 indicating the image quality to use for image formats that use lossy compression such as image/jpeg and image/webp.   
The default value is `0.92`

#### — *scale*
Number that indicates the multiplier used to create the raster image image size dimensions output. In the case that we have a `400x400` SVG file, and a scale multiplier of `3`, the output raster image will have a `1200x1200` size (x3).  
The default value is `2`


## License

MIT &copy; [Jorge Moreno](https://twitter.com/alterebro)
