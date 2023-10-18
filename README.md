# XueryJS
Next-generation ultra-compact &amp; ultra-fast 
Any application can be built.

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
|XueryJS|1KB|

```html
<script src="https://cdn.ame-x.net/Xuery.min.js"></script>
```

## In

```js
$("body > #app").in(div({}, "Hi ", span({}, "mom!")))
```

## Out
```js
const buttonEl = (props) => {
  return button({
    $click: () => {
      alert("hi " + props.name)
    }
  }, "Click here")
}

$("body > #app")[0].in(
  div({}, "Hi ",
    span({}, "mom"),
    buttonEl({
      name: "dad"
    })
  )
)
```
