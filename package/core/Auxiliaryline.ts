import { IApp, IUI } from '@leafer-ui/interface'

interface Config {

}

export class AuxiliaryLine {
  private app: IApp
  private config: Config

  constructor(app: IApp, config?: Config) {
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
    this.config = config || {}
    this.getElementsInViewport()
  }

  /**
   * 获取视口所有的元素的方法
   */
  getElementsInViewport() {
    const elements = this.app.tree.find(ele => {
      const itemBoundingBox = ele.getLayoutBounds('box', this.app.tree)
      console.log('itemBoundingBox', itemBoundingBox)
      
      return 1
    })
  }
}
