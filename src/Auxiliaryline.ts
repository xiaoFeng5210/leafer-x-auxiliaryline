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
  }

  findAllItems() {
    return this.config.itemClassName.reduce((acc, item) => {
      acc.concat(this.app.find(item))
      return acc
    }, [])
  }
}
