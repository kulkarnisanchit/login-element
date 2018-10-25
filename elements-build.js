const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
    const files = [
        './dist/login-element/runtime.js',
        './dist/login-element/polyfills.js',
        './dist/login-element/scripts.js',
        './dist/login-element/main.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/login-element.js');
    await fs.copyFile('./dist/login-element/styles.css', 'elements/styles.css')
    await fs.copy('./dist/login-element/assets/', 'elements/assets/' )
    
})()