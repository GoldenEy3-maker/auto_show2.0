import { Slider } from "@/components/Slider"
import MainLayout from "@/layouts/MainLayout"
import styles from "@/styles/pages/Home.module.scss"
import Image from "next/image"

const mokSliderData = [
  {
    id: 1,
    image: {
      src: "https://via.placeholder.com/1024x500",
      width: 1024,
      height: 500,
    },
  },
  {
    id: 2,
    image: {
      src: "https://via.placeholder.com/1024x500",
      width: 1024,
      height: 500,
    },
  },
  {
    id: 3,
    image: {
      src: "https://via.placeholder.com/900x300",
      width: 900,
      height: 300,
    },
  },
  {
    id: 4,
    image: {
      src: "https://via.placeholder.com/600x400",
      width: 600,
      height: 400,
    },
  },
]

export default function HomePage() {
  return (
    <MainLayout title="Next 12 - Home Page">
      <main className="homePage">
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Добро пожаловать!</h2>
          <div className="sectionContent">
            <Slider data={mokSliderData}>
              {(slide) => (
                <Image
                  src={slide.image.src}
                  alt=""
                  width={slide.image.width}
                  height={slide.image.height}
                  draggable={false}
                />
              )}
            </Slider>
          </div>
        </section>
      </main>
    </MainLayout>
  )
}
