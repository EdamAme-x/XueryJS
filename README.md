# XueryJS
Next-generation ultra-compact &amp; ultra-fast 
Any application can be built.

**Only 2 steps to operate**

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

$("body > #app").in(
  div({}, "Hi ",
    span({}, "mom"),
    buttonEl({
      name: "dad"
    })
  )
)
```
