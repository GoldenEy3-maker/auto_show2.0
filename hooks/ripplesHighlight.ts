import { PointerEvent } from 'react'

export function useRipplesHighlight() {
  const animationDuration = 800

  function handlePointerDownEvent(event: PointerEvent<HTMLElement>) {
    const target = event.currentTarget
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