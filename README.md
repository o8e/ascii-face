<h1 align="center">🤖 ascii face</h1>
<p align="center">Generate ASCII faces with colour</p>
<p align="center">
	<a href="https://www.npmjs.com/package/ascii-face"><img src="https://badge.fury.io/js/ascii-face.svg" alt="Downloads"></a>
</p>

![Standard](https://raw.githubusercontent.com/o8e/ascii-face/master/assets/img/example-mono.png)

![Colour](https://raw.githubusercontent.com/o8e/ascii-face/master/assets/img/example-color.png)

### Summary

A silly package I created whilst working on a side project. I needed faces for profile images, and thought why not have a unique set of text-based generated faces.

> There are 501,600 potential combinations

### Usage

For now it's a default export, so import it however you want.

```bash
npm install ascii-face -s
```

Standard

```js
import facegen from 'ascii-face'
const face = facegen()
// ...
```

Colour

```js
import facegen from 'ascii-face'
const face = facegen(true)
// ...
```
