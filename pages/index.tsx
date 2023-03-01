import PrimaryButton from "@/components/Button/PrimaryButton"
import Dilers from "@/components/Dilers"
import PrimaryLink from "@/components/Link/PrimaryLink"
import News from "@/components/News"
import { Slider } from "@/components/Slider"
import MainLayout from "@/layouts/MainLayout"
import styles from "@/styles/pages/Home.module.scss"
import { NewsData } from "@/typescript/types"
import Image from "next/image"
import { SiBmw } from "react-icons/si"

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

const mokNewsData: NewsData[] = [
  {
    id: 1,
    img: {
      src: "https://via.placeholder.com/300x250",
      width: 300,
      height: 250,
    },
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    date: new Date("2023-02-20T20:30"),
  },
  {
    id: 2,
    img: {
      src: "https://via.placeholder.com/300x250",
      width: 300,
      height: 250,
    },
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    date: new Date("2023-02-20T20:30"),
  },
  {
    id: 3,
    img: {
      src: "https://via.placeholder.com/300x250",
      width: 300,
      height: 250,
    },
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    date: new Date("2023-02-20T20:30"),
  },
  {
    id: 4,
    img: {
      src: "https://via.placeholder.com/300x250",
      width: 300,
      height: 250,
    },
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    date: new Date("2023-02-20T20:30"),
  },
  {
    id: 5,
    img: {
      src: "https://via.placeholder.com/300x250",
      width: 300,
      height: 250,
    },
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    date: new Date("2023-02-20T20:30"),
  },
  {
    id: 6,
    img: {
      src: "https://via.placeholder.com/300x250",
      width: 300,
      height: 250,
    },
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    date: new Date("2023-02-20T20:30"),
  },
  {
    id: 7,
    img: {
      src: "https://via.placeholder.com/300x250",
      width: 300,
      height: 250,
    },
    title: "Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    date: new Date("2023-02-20T20:30"),
  },
  {
    id: 8,
    img: {
      src: "https://via.placeholder.com/300x250",
      width: 300,
      height: 250,
    },
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    date: new Date("2023-02-20T20:30"),
  },
]

export default function HomePage() {
  return (
    <MainLayout title="Next 12 - Home Page">
      <main className={styles.homePage}>
        <section className="section">
          <h2 className="section-title">Добро пожаловать!</h2>
          <div className="section-content">
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
        <Dilers />
        <section className="section">
          <h2 className="section-title _centered">Новости и статьи</h2>
          <div className="section-content">
            <News data={mokNewsData} />
          </div>
        </section>
      </main>
    </MainLayout>
  )
}
