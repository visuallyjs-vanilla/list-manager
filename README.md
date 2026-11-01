# VisuallyJs Vanilla Template

https://visuallyjs.com/demonstrations/template

This is a starter app you can use as a base to build your own apps. It contains examples of how to configure:

- a zoomable and pannable canvas
- the JSX used to render nodes
- the appearance and event bindings for edges
- a miniview component
- a controls component, providing buttons to undo/redo, zoom to fit, etc
- a palette from which you can drag new nodes onto the canvas
- how to setup plugins in the canvas.

![Screenshot](https://static.visuallyjs.com/img/app-card/template-2400.png)

## Run locally

```sh
nvm use v22.13.1
npm install
npm run dev
```

Run `npm run build` to check and build the app. This standalone app uses `@visuallyjs/browser-ui`.
