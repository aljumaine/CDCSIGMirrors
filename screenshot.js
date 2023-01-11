document.querySelector('button').addEventListener('click', function() {
    html2canvas(document.querySelector('.specific'), {
        onrendered: function(canvas) {
            // document.body.appendChild(canvas);
            return Canvas2Image.saveAsPNG(canvas);
        }
    });
});

html2canvas(document.querySelector("#capture")).then(canvas => {
    document.body.appendChild(canvas)
});