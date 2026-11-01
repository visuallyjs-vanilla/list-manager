const viewOptions = {
    groups: {
        "list": {
            template:`<div class="vjs-lm-group" data-vjs-list="true">
                <div class="vjs-lm-group-header">
                        <span class="vjs-lm-group-title">{{label}}</span>
                        <div class="vjs-lm-group-title-accent"></div>
                    </div>
                    <div data-vjs-group-content="true" class="vjs-lm-group-content"></div></div>`,
            layout: {
                type: "Column",
                options:{
                    padding:{
                        x:0,
                        y:0
                    }
                }
            },
            autoSize: true,
            elementsDraggable: false
        }
    },
    nodes: {
        "default": {
            template: `<div data-vjs-source="true" data-vjs-target="true" class="vjs-lm-node">
<div class="vjs-lm-node-header">
                        <span class="vjs-lm-node-icon">{{icon}}</span>
                        <span class="vjs-lm-node-label">{{label}}</span>
                    </div>
                    <div class="vjs-lm-node-type">{{type}}</div></div>`
            }
    },
    edges: {
        "default": {
            targetMarker:"PlainArrow",
            deleteButton:"hover" as const,
            paintStyle: {
                stroke: "#94a3b8",
                strokeWidth: 2,
                outlineWidth: 2,
                outlineStroke: "transparent"
            },
            hoverPaintStyle: {
                stroke: "#3b82f6",
                strokeWidth: 3
            }
        }
    }
}

export default viewOptions
