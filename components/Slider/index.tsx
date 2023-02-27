import { useStateRef } from "@/hooks/stateRef"
import { getRefValue } from "@/utils/refValue"
import React, { ReactNode, useEffect, useRef, useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import PrimaryButton from "../Button/PrimaryButton"
import styles from "./Slider.module.scss"

interface SliderProps<DataType> {
  data: DataType[]
  minSwipeRequired?: number
  children(data: DataType): ReactNode
}

export function Slider<DataType>({
  data,
  minSwipeRequired,
  children,
}: SliderProps<DataType>) {
  const MIN_SWIPE_REQUIRED = minSwipeRequired ?? 40

  const [activeSlideIdx, setActiveSlideIdx] = useState(0)
  const currentOffsetXRef = useRef(0)
  const startXRef = useRef(0)
  const minOffsetXRef = useRef(0)
  const trackWidthRef = useRef(0)
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0)
  const maxContainerWidthRef = useRef(0)

  const sliderTrackRef = useRef<HTMLDivElement>(null)
  const sliderContainerRef = useRef<HTMLDivElement>(null)

  function swipeStartHandler(event: React.PointerEvent<HTMLElement>) {
    const trackElement = getRefValue(sliderTrackRef)
    trackElement.style.transition = "none"
    trackWidthRef.current = trackElement.getBoundingClientRect().width
    minOffsetXRef.current =
      trackElement.getBoundingClientRect().width - trackElement.scrollWidth

    currentOffsetXRef.current = getRefValue(offsetXRef)
    startXRef.current = event.clientX

    document.addEventListener("pointermove", swipeMoveHandler)
    document.addEventListener("pointerup", swipeEndHandler)
  }

  function swipeMoveHandler(event: PointerEvent) {
    const currentOffsetX = getRefValue(currentOffsetXRef)
    const startX = getRefValue(startXRef)
    const newOffsetX = currentOffsetX - (startX - event.clientX)

    setOffsetX(newOffsetX)
  }

  function swipeEndHandler(event: PointerEvent) {
    const trackElement = getRefValue(sliderTrackRef)
    trackElement.style.transition = "transform 400ms ease"

    const currentOffsetX = getRefValue(currentOffsetXRef)
    const trackWidth = getRefValue(trackWidthRef)
    let newOffsetX = getRefValue(offsetXRef)

    const diff = currentOffsetX - newOffsetX
    const maxOffsetX = 0
    const minOffsetX = getRefValue(minOffsetXRef)

    if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
      if (diff > 0) {
        newOffsetX = Math.floor(newOffsetX / trackWidth) * trackWidth
      } else {
        newOffsetX = Math.ceil(newOffsetX / trackWidth) * trackWidth
      }
    } else {
      newOffsetX = Math.round(newOffsetX / trackWidth) * trackWidth
    }

    if (newOffsetX > maxOffsetX) newOffsetX = maxOffsetX

    if (newOffsetX < minOffsetX) newOffsetX = minOffsetX

    setOffsetX(newOffsetX)
    setActiveSlideIdx(Math.abs(newOffsetX / trackWidth))

    document.removeEventListener("pointermove", swipeMoveHandler)
    document.removeEventListener("pointerup", swipeEndHandler)
  }

  function slideNext() {
    setActiveSlideIdx((prevIndex) => {
      let nextIndex = prevIndex + 1

      if (nextIndex > data.length - 1) {
        nextIndex = 0
      }

      setOffsetX(-(maxContainerWidthRef.current * nextIndex))

      return nextIndex
    })
  }

  function slidePrev() {
    setActiveSlideIdx((prevIndex) => {
      let nextIndex = prevIndex - 1

      if (nextIndex < 0) {
        nextIndex = data.length - 1
      }

      setOffsetX(-(maxContainerWidthRef.current * nextIndex))

      return nextIndex
    })
  }

  useEffect(() => {
    const trackElement = getRefValue(sliderTrackRef)
    const containerElement = getRefValue(sliderContainerRef)

    const items = Array.from(trackElement.children) as HTMLDivElement[]
    let maxWidth = items[0].getBoundingClientRect().width

    items.forEach((item) => {
      const { width } = item.getBoundingClientRect()

      if (width > maxWidth) maxWidth = width

      item.style.width = "100%"
    })

    containerElement.style.width = maxWidth + "px"
    maxContainerWidthRef.current = maxWidth
  }, [])

  useEffect(() => {
    const trackElement = getRefValue(sliderTrackRef)
    const containerElement = getRefValue(sliderContainerRef)
    const items = Array.from(trackElement.children) as HTMLDivElement[]
    const { height } = items[activeSlideIdx].getBoundingClientRect()

    containerElement.style.height = height + "px"
  }, [activeSlideIdx])

  return (
    <div className={styles.slider}>
      <PrimaryButton
        className={styles.sliderButton}
        type="button"
        title="Предыдущий слайд"
        onClick={slidePrev}
      >
        <IoIosArrowBack />
      </PrimaryButton>
      <div className={styles.sliderContainer} ref={sliderContainerRef}>
        <div
          className={styles.sliderTrack}
          ref={sliderTrackRef}
          onPointerDown={swipeStartHandler}
          style={{
            transform: `translate3D(${offsetX}px, 0 ,0)`,
          }}
        >
          {data.length > 0 &&
            data.map((slide, idx) => (
              <div key={idx} className={styles.sliderItem}>
                {children(slide)}
              </div>
            ))}
        </div>
      </div>
      <PrimaryButton
        type="button"
        className={styles.sliderButton}
        title="Следующий слайд"
        onClick={slideNext}
      >
        <IoIosArrowForward />
      </PrimaryButton>
    </div>
  )
}
