import { Rect, App } from 'leafer-ui'
import { IApp } from '@leafer-ui/interface'
import { AuxiliaryLine } from './src'
import '@leafer-in/editor'

const app = new App({
    view: window,
    editor: {}
})

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
    draggable: true
})
const auxiliaryLine = new AuxiliaryLine(app as unknown as IApp, {
    itemClassName: ['.block']
})




