# Separatist
**Separatist** is a small npm package that ensures you automatically insert your own symbol or symbols into a string. 
The version of the package is **1.x** and that won't change soon.

# Installation
```shell
npm install separatist
```

# Example
```js
const separatist = require('separatist'); // Require package

const sentence = "A super long sentence that will allow me to make my life choices"; // String
const number = 5; // Integer
const separator = "-"; // Default separator is \n, that means the text is coming down to the new line (in my language)

const final = separatist(sentence, number, separator) // Split the string
```