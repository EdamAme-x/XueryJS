# XueryJS
Next-generation ultra-compact &amp; ultra-fast library for WEB & SSR.
Any application can be built.

[Playground](https://codepen.io/EdamAme-x/pen/NWogMrr)

![icon](./assets/Xuery.png)

**Only 2 steps to operate**

#### Only *2KB*
#### Gzip: *900B*

# Comparison

|Name|Size|
|---|---|
|React|130 KB|
|jQuery|87 KB|
|Vue.js|65 KB|
|PReact|13 KB|
|XueryJS|2 KB|

```html
<script src="https://xueryjs.deno.dev/runtime/client.js"></script>
```

## In

```js
$("body > #app").in(div({}, "Hi ", span({}, "mom!")))
```

## Out
```js
$("body > #app").in(div({}, "Hello"))
const text = $("body > #app").out.innerText; // proxy to element object
console.log(text); // Hello
```

## Component
```js
const buttonEl = (props) => {
  return button({
    $click: () => {
      alert("hi " + props.name)
    }
  }, "Click here")
}

$("body > #app").in(
  div({}, "Hi ",
    span({}, "mom"),
    buttonEl({
      name: "dad"
    })
  )
)
```

## Attrs Tips

```js
const buttonEl = (props) => {
  return button({
    $click: () => {
      alert("hi " + props.name)
    },
    style: {
      borderRadius: "5px"
    }
  }, "Click here")
}

$("body > *")[0].in(
  div({}, "Hi ",
    span({}, "mom"),
    buttonEl({
      name: "dad"
    })
  )
) // Some Element
```


