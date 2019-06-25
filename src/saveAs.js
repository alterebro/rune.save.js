const saveAs = function(filename = 'image.jpg', scale = 2, quality = .92) {

    let _triggerID = 'rune-download-trigger';
    let _extensionsAllowed = ['svg', 'png', 'jpg', 'jpeg'];
    if (Boolean(window.chrome)) { _extensionsAllowed.push('webp') };

    // ------
    // Split filename
    let _file = filename.split('.');
    let _extension = _file[_file.length-1].toLowerCase();
    let _filename = filename.replace(_extension, '').replace(/.$/,'');

        if (_extensionsAllowed.indexOf(_extension) < 0 || !_filename) {
            throw new Error('Wrong filename. Please use "image-name.extension" format (Only svg, png and jpg image extensions allowed. Also WebP on Chrome)');
        }

    // ------
    // Attach trigger link to document
    if ( !document.getElementById(_triggerID) ) {

        _trigger = document.createElement('a');
        _trigger.id = _triggerID;
        _trigger.target = '_blank';
        _trigger.download = filename;
        document.body.appendChild(_trigger);

    } else {

        _trigger = document.getElementById(_triggerID);
    }

    // ------
    // ImageData from SVG
    let _svg = this.el.outerHTML;
    if (_extension == 'svg') {

        let _svgEncoded = _svg.replace( /"/g, '\'' ).replace( /[\r\n%#()<>?\[\\\]^`{|}]/g, encodeURIComponent )
        let _svgData = "data:image/svg+xml;utf8," + _svgEncoded;

            _trigger.href = _svgData;
            _trigger.click();

    } else {

        const types = {
            "png" : "image/png",
            "jpg" : "image/jpeg",
            "jpeg" : "image/jpeg",
            "webp" : "image/webp"
        }

        let _svg64 = btoa(_svg);
        let _svgData = "data:image/svg+xml;base64," + _svg64;

        let _canvas = document.createElement("canvas");
            _canvas.width = this.width*scale;
            _canvas.height = this.height*scale;
        let _ctx = _canvas.getContext("2d");
        let _img = document.createElement("img");
            _img.setAttribute("src", _svgData);
            _img.onload = function() {

                _ctx.drawImage( _img, 0, 0, _canvas.width, _canvas.height );
                let _graphic = _canvas.toDataURL(types[_extension], quality);
                    _trigger.href = _graphic;
                    _trigger.click();
            };
    }
}

module.exports = saveAs
