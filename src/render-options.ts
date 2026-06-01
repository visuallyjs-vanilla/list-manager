import { ListManagerPlugin } from "@visuallyjs/browser-ui"
import viewOptions from "./view-options.ts"

const renderOptions = {
    plugins:[
        ListManagerPlugin.type
    ],
    zoomToFit:true,
    view: viewOptions
}

export default renderOptions
