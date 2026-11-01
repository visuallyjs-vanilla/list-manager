import './style.css'

import renderOptions from "./render-options";
import {createSurface, ControlsComponent} from "@visuallyjs/browser-ui"
import modelOptions from "./model-options.ts";

const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = '<div class="vjs-list-manager"></div>'
const canvas = app.querySelector<HTMLDivElement>('.vjs-list-manager')!

const surface = createSurface(canvas, renderOptions, modelOptions)

surface.model.load({
    url:"/dataset.json"
})


const controls=document.createElement('div')
controls.style.cssText='position:absolute;top:16px;left:16px;z-index:10'
canvas.append(controls)
new ControlsComponent(controls,surface)
