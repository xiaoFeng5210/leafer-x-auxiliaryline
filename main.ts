import { IApp } from '@leafer-ui/interface'
import { AuxiliaryLine } from './package'
import { App as LeaferEditorApp, Line, Rect } from 'leafer-editor'

const app = new LeaferEditorApp({
    view: window,
    editor: {},
    zoom: {
        min: 0.2,
        max: 2,
    },
})

const rect = new Rect({
    className: 'block',
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    fill: '#32cd79',
    editable: true,
})

const rect2 = new Rect({
    className: 'block',
    x: 600,
    y: 400,
    width: 100,
    height: 100,
    fill: '#32c0ff',
    editable: true,
})
app.tree.add(rect)
app.tree.add(rect2)

const auxiliaryLine = new AuxiliaryLine(app as unknown as IApp, {
    itemClassName: ['.block']
})




