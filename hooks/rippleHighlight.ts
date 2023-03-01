import { PointerEvent } from 'react'

export function useRippleHighlight() {
	const animationDuration = 400

	function handleRippleEffectPointerDownEvent(event: PointerEvent<HTMLElement>) {
		const target = event.currentTarget
		const otherInteractionNodes = target.querySelectorAll('button, input, a')

		if (otherInteractionNodes.length) {
			const isClickedOnOtherInteractionNode = Array.from(otherInteractionNodes).some((node) => (event.target as HTMLElement).closest(node.tagName))

			if (isClickedOnOtherInteractionNode) return
		}

		const diameter = Math.max(target.clientWidth, target.clientHeight)

		const x = event.clientX - target.getBoundingClientRect().left
		const y = event.clientY - target.getBoundingClientRect().top

		const ripple = document.createElement('span')

		ripple.style.animationDuration = animationDuration + 'ms'
		ripple.style.left = x + 'px'
		ripple.style.top = y + 'px'
		ripple.style.width = ripple.style.height = diameter + 'px'

		ripple.classList.add('ripple-element')
		ripple.dataset.rippleElement = 'true'

		target.appendChild(ripple)

		setTimeout(() => {
			ripple.remove()
		}, animationDuration)
	}

	return handleRippleEffectPointerDownEvent
}