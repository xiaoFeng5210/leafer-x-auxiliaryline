import { App, Group } from '@leafer-ui/core'

interface Config {
  itemClassName: string[]
}

export class AuxiliaryLine {
  private app: App
  private config: Config
  private allItems: any[] = []
  constructor(app: App, config: Config) {
    this.app = app
    this.config = config
    this.allItems = this.findAllItems()
    console.log('all items', this.allItems)
    this.listenItemDrag()
  }

  findAllItems() {
    return this.config.itemClassName.reduce((acc, item) => {
      acc.push(...this.app.tree.find(item))
      return acc
    }, [])
  }
  /**
   * 监听元素的拖拽事件
   */
  listenItemDrag() {
    this.allItems.forEach(item => {
      item.on('drag', (e: any) => {
        const { x, y } = e
        console.log('drag', x, y)
      })
    })
  }
}
