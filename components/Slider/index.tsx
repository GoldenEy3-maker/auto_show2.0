import { useStateRef } from "@/hooks/stateRef"
import { getRefValue } from "@/utils/refValue"
import { setDynamicCls } from "@/utils/setCls"
import React, { ReactNode, useEffect, useRef, useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import PrimaryButton from "../Button"
import styles from "./Slider.module.scss"
import { convertAst } from "tsutils"

interface SliderProps<DataType> {
  data: DataType[]
  minSwipeRequired?: number

  children(data: DataType): ReactNode
}

export function Slider<DataType>({
                                   data,
                                   minSwipeRequired,
                                   children
                                 }: SliderProps<DataType>) {
  const MIN_SWIPE_REQUIRED = minSwipeRequired ?? 40
  const maxOffsetX = 0

  const [activeSlideIdx, setActiveSlideIdx] = useState(0)
  const currentOffsetXRef = useRef(0)
  const startXRef = useRef(0)
  const minOffsetXRef = useRef(0)
  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLUListElement>(null)

  function swipeStartHandler(event: React.PointerEvent<HTMLElement>) {
    const trackElement = getRefValue(trackRef)
    const containerElement = getRefValue(containerRef)
    trackElement.style.transition = "none"

    minOffsetXRef.current =
      containerElement.getBoundingClientRect().width - trackElement.scrollWidth

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
    const trackElement = getRefValue(trackRef)
    const containerElement = getRefValue(containerRef)
    const containerWidth = containerElement.getBoundingClientRect().width
    trackElement.style.transition = "transform 400ms ease"

    const currentOffsetX = getRefValue(currentOffsetXRef)
    let newOffsetX = getRefValue(offsetXRef)

    const diff = currentOffsetX - newOffsetX

    const minOffsetX = getRefValue(minOffsetXRef)

    if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
      if (diff > 0) {
        newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth
      } else {
        newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth
      }
    } else {
      newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth
    }

    if (newOffsetX > maxOffsetX) newOffsetX = maxOffsetX

    if (newOffsetX < minOffsetX) newOffsetX = minOffsetX

    setOffsetX(newOffsetX)
    setActiveSlideIdx(Math.floor(Math.abs(newOffsetX / containerWidth)))

    document.removeEventListener("pointermove", swipeMoveHandler)
    document.removeEventListener("pointerup", swipeEndHandler)
  }

  function slideNext() {
    const trackElement = getRefValue(trackRef)
    const containerElement = getRefValue(containerRef)
    const containerWidth = containerElement.getBoundingClientRect().width
    trackElement.style.transition = "transform 400ms ease"

    setActiveSlideIdx((prevIndex) => {
      let nextIndex = prevIndex + 1

      if (nextIndex > data.length - 1) {
        nextIndex = 0
      }

      setOffsetX(-(containerWidth * nextIndex))

      return nextIndex
    })
  }

  function slidePrev() {
    const trackElement = getRefValue(trackRef)
    const containerElement = getRefValue(containerRef)
    const containerWidth = containerElement.getBoundingClientRect().width
    trackElement.style.transition = "transform 400ms ease"

    setActiveSlideIdx((prevIndex) => {
      let nextIndex = prevIndex - 1

      if (nextIndex < 0) {
        nextIndex = data.length - 1
      }

      setOffsetX(-(containerWidth * nextIndex))

      return nextIndex
    })
  }

  function clickDotHandler(idx: number) {
    const containerElement = getRefValue(containerRef)
    const containerWidth = containerElement.getBoundingClientRect().width

    setActiveSlideIdx(idx)
    setOffsetX(-(containerWidth * idx))
  }

  useEffect(() => {
    const trackElement = getRefValue(trackRef)

    function resizeWindowHandler() {
      const { width } = trackElement.getBoundingClientRect()

      trackElement.style.transition = "none"

      setOffsetX(-(width * activeSlideIdx))
    }

    window.addEventListener("resize", resizeWindowHandler)

    return () => window.removeEventListener("resize", resizeWindowHandler)
  }, [activeSlideIdx, setOffsetX])

  return (
    <div className={styles.slider}>
      <div className={styles.sliderWrapper}>
        <PrimaryButton
          className={styles.sliderButton}
          type="button"
          title="Предыдущий слайд"
          onClick={slidePrev}
        >
          <IoIosArrowBack/>
        </PrimaryButton>
        <div className={styles.sliderContainer} ref={containerRef}>
          <ul
            className={styles.sliderTrack}
            ref={trackRef}
            onPointerDown={swipeStartHandler}
            style={{
              transform: `translate3D(${offsetX}px, 0 ,0)`
            }}
          >
            {data.length > 0 &&
              data.map((slide, idx) => (
                <li key={idx} className={styles.sliderItem}>
                  <div className={styles.sliderItemWrapper}>
                    {children(slide)}
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <PrimaryButton
          type="button"
          className={styles.sliderButton}
          title="Следующий слайд"
          onClick={slideNext}
        >
          <IoIosArrowForward/>
        </PrimaryButton>
      </div>
      <div className={styles.sliderDots}>
        <ul className={styles.sliderDotsList}>
          {data.length > 0 &&
            data.map((slide, idx) => (
              <li
                key={idx}
                className={setDynamicCls({
                  stClasses: [styles.sliderDotsItem],
                  dnClasses: [[styles._active]],
                  conditions: [activeSlideIdx === idx]
                })}
              >
                <PrimaryButton
                  type="button"
                  className={styles.sliderDotsItemButton}
                  onClick={() => clickDotHandler(idx)}
                >
                  <span className={styles.sliderDotsItemButtonIcon}></span>
                </PrimaryButton>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
