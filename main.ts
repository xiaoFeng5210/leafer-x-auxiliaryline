import { Leafer, Rect, App } from 'leafer-ui'
import { AuxiliaryLine } from './src'

const app = new App({
    view: window
})

const leafer = new Leafer()
app.add(leafer)


const rect = new Rect({
    className: 'block',
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    fill: '#32cd79',
    draggable: true
})

const rect2 = new Rect({
    className: 'block',
    x: 600,
    y: 400,
    width: 100,
    height: 100,
    fill: '#32c0ff',
    draggable: true,
})

leafer.add(rect)
leafer.add(rect2)

const auxiliaryLine = new AuxiliaryLine(app, {
    itemClassName: ['.block']
})




