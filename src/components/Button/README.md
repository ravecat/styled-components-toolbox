## Button

A basic button. Buttons are used as triggers for actions in forms, toolbars, dialog footers and as stand-alone action triggers.

### API

| Property   | Description                 | Type    | Default |
| ---------- | --------------------------- | ------- | ------- |
| _disabled_ | disabled state of button    | boolean | `false` |
| _href_     | redirect url of link button | string  | -       |

`<Button>Hello world!</Button>` will be rendered into `<button><span>Hello world!</span></button>`, and all the properties which are not listed above will be transferred to the `<button>` tag.

`<Button href="http://example.com">Hello world!</Button>` will be rendered into `<a href="http://example.com"><span>Hello world!</span></a>`
