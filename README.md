<h1 align="center">🤖 ascii face</h1>
<p align="center">Generate ASCII faces with colour</p>

![Standard](https://github.com/o8e/ascii-face/raw/master/src/assets/img/example-mono.png)

![Colour](https://github.com/o8e/ascii-face/raw/master/src/assets/img/example-color.png)

### Summary

A silly package I created whilst working on a side project. I needed faces for profile images, and thought why not have a unique set of text-based generated faces.

#### There are `501,600` potential combinations

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
