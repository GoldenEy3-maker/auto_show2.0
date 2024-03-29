import Dilers from "@/components/Dilers"
import News from "@/components/News"
import PopularProducts from "@/components/PopularProducts"
import { Slider } from "@/components/Slider"
import ViewedProducts from "@/components/ViewedProducts"
import MainLayout from "@/layouts/MainLayout"
import styles from "@/styles/pages/Home.module.scss"
import { NewsType, ProductType } from "@/typescript/types"
import { NextPage } from "next"
import Image from "next/image"
import { useRouter } from "next/router"

const mokSliderData = [
  {
    id: 1,
    image: "https://via.placeholder.com/1024x500",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/1024x500",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/900x300",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/600x400",
  },
]

const mokPopularProducts: ProductType[] = [
  {
    _id: "1",
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000,
  },
  {
    _id: "2",
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000,
  },
  {
    _id: "3",
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000,
  },
  {
    _id: "4",
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000,
  },
  {
    _id: "5",
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000,
  },
  {
    _id: "6",
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000,
  },
]

const mokViewedProducts: ProductType[] = [
  {
    _id: "1",
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000,
  },
  {
    _id: "2",
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000,
  },
  {
    _id: "3",
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000,
  },
]

interface HomePageProps {
  news: NewsType[]
}

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <MainLayout title="Next 12 - Home Page">
      <main className={styles.homePage}>
        <section className="section">
          <h2 className="section-title">Добро пожаловать!</h2>
          <div className="section-content">
            <Slider data={mokSliderData}>
              {(slide) => (
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  // width={800}
                  // height={400}
                  draggable={false}
                  sizes="100vw"
                />
              )}
            </Slider>
          </div>
        </section>
        <Dilers />
        <section className="section">
          <h2 className="section-title _centered">Новости и статьи</h2>
          <div className="section-content">
            <News />
          </div>
        </section>
        {mokPopularProducts && (
          <section className="section">
            <h2 className="section-title _centered">Популярные автомобили</h2>
            <div className={"section-content" + " " + styles.homePagePopular}>
              <PopularProducts data={mokPopularProducts} />
            </div>
          </section>
        )}
        {mokViewedProducts && (
          <section className="section">
            <h2 className="section-title _centered">Вы смотрели</h2>
            <div className="section-content">
              <ViewedProducts data={mokViewedProducts} />
            </div>
          </section>
        )}
      </main>
    </MainLayout>
  )
}

// HomePage.getInitialProps = async (context) => {
//   const { data } = await axi.get("/news")
//
//   return { news: data }
// }

export default HomePage
