import { PointerEvent, useEffect, useRef, useState } from 'react'

export function useRippleHighlight() {
  const animationDuration = 700

  function handleRippleEffectPointerDownEvent(event: PointerEvent<HTMLElement>) {
    const target = event.currentTarget
    const otherInteractionNodes = target.querySelectorAll('button, input, a')

    if (otherInteractionNodes.length) {
      const isClickedOnOtherInteractionNode = Array.from(otherInteractionNodes).some((node) => (event.target as HTMLElement).closest(node.tagName))

      if (isClickedOnOtherInteractionNode) return
    }

    const x = event.clientX - target.getBoundingClientRect().left
    const y = event.clientY - target.getBoundingClientRect().top

    const ripple = document.createElement('span')

    ripple.style.animationDuration = animationDuration + 'ms'

    ripple.classList.add('ripple-element')
    ripple.dataset.rippleElement = 'true'

    ripple.style.left = x + 'px'
    ripple.style.top = y + 'px'
    ripple.style.setProperty('--width', target.offsetWidth + 'px')
    ripple.style.setProperty('--height', target.offsetHeight + 'px')

    target.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, animationDuration)

  }

  return handleRippleEffectPointerDownEvent
}