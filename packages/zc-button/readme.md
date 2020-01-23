# zc-button
This is a customisable button with a hover animation built with [StencilJS](https://stenciljs.com/), that allows for the user to define their own text, background colour and text colour.

## Example Usage

### With Node
```html
<head>
    <script src='node_modules/zc-button/dist/zc-button.js'></script>
</head>
<body>
    <zc-button button-text="Click Me" button-background="red" button-text-style="white"></zc-button>
</body>
</html>
```

### With Script Tag
```html
<head>
    <script src='https://unpkg.com/zc-button@1.0.0/dist/zc-button.js'></script>
</head>
<body>
    <zc-button button-text="Click Me" button-background="red" button-text-style="white"></zc-button>
</body>
</html>
```

By leaving either the `button-background` or `button-text-style` empty it will default to `white` for the background and `#5851ff` for the text!

## Properties

| Property           | Attribute           | Description               | Type     |
| ------------------ | ------------------- | ------------------------- | -------- |
| `buttonBackground` | `button-background` | Button background colour  | `string` |
| `buttonText`       | `button-text`       | The text for the button   | `string` |
| `buttonTextStyle`  | `button-text-style` | The button text colour    | `string` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
