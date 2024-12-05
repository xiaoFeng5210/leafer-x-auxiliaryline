/**
 * 判断元素在视口里
 */
export function calculateElementsInView(x: number, y: number, bound: { width: number, height: number }, viewWidth: number, viewHeight: number) {
  const offsetLeft = bound.width + x
  const offsetTop = bound.height + y
  const offsetRight = viewWidth - x
  const offsetBottom = viewHeight - y

  if (offsetLeft > 0 && offsetTop > 0 && offsetRight > 0 && offsetBottom > 0) {
    return 1
  } else {
    return 0
  }
}
