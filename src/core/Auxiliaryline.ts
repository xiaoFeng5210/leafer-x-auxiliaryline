import { IApp, IUI } from '@leafer-ui/interface'

interface Config {
  itemClassName: string[]
}

export class AuxiliaryLine {
  private app: IApp
  private config: Config
  private allItems: any[] = []

  constructor(app: IApp, config: Config) {
    if (!app.isApp) {
      throw new Error('Leafer target must be an App')
    }

    if (!app.tree) {
      throw new Error('tree layer is required')
    }

    if (!app.editor) {
      throw new Error('Leafer editor plugin is required')
    }

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
