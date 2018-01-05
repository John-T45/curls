import centerY from './centerY'


export default function (containerRect, boxRect, {width, height}) {
  let left = 'auto'
  let right = 'auto'

  if (containerRect.right + boxRect.width < width) {
    left = containerRect.right
  } else if (containerRect.left - boxRect.width > -1) {
    left = containerRect.left - boxRect.width
  } else {
    // left = containerRect.left + ((containerRect.width - boxRect.width) / 2)
    right = 0
  }

  const Y = centerY(containerRect, boxRect, height)
  return {left, right, ...Y}
}
