import { PointerEvent } from 'react'

export function useRipplesHighlight() {
  const animationDuration = 700

  function handlePointerDownEvent(event: PointerEvent<HTMLElement>) {
    const target = event.currentTarget

    const otherInteractionNodes = target.querySelectorAll('button, input')

    if (otherInteractionNodes.length) {
      let isClickedOnOtherInteractionNode = false

      otherInteractionNodes.forEach(node => {
        if ((event.target as HTMLElement).closest(node.tagName)) {
          isClickedOnOtherInteractionNode = true
          return
        }
      })

      if (isClickedOnOtherInteractionNode) return
    }

    const x = event.clientX - target.getBoundingClientRect().left
    const y = event.clientY - target.getBoundingClientRect().top

    const ripples = document.createElement('span')

    ripples.classList.add('ripples-element')
    ripples.dataset.ripplesElement = 'true'

    ripples.style.left = x + 'px'
    ripples.style.top = y + 'px'
    ripples.style.animationDuration = animationDuration + 'ms'

    target.appendChild(ripples)

    setTimeout(() => {
      ripples.remove()
    }, animationDuration)
  }

  return handlePointerDownEvent
}