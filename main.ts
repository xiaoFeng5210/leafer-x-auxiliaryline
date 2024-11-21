import { Leafer, Rect } from 'leafer-ui'


const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    fill: '#32cd79',
    draggable: true
})

const rect2 = new Rect({
    x: 600,
    y: 400,
    width: 100,
    height: 100,
    fill: '#32c0ff',
    draggable: true
})



leafer.add(rect)
leafer.add(rect2)

console.log(rect2.getBounds())

