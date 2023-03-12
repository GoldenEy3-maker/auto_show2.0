import Dilers from "@/components/Dilers"
import News from "@/components/News"
import { Slider } from "@/components/Slider"
import MainLayout from "@/layouts/MainLayout"
import styles from "@/styles/pages/Home.module.scss"
import { NewsData, NewsType, ProductType } from "@/typescript/types"
import Image from "next/image"
import PopularProducts from "@/components/PopularProducts"
import ViewedProducts from "@/components/ViewedProducts"
import { NextPage } from "next"
import axi from "@/axios/instance"

const mokSliderData = [
  {
    id: 1,
    image: "https://via.placeholder.com/1024x500"
  },
  {
    id: 2,
    image: "https://via.placeholder.com/1024x500"
  },
  {
    id: 3,
    image: "https://via.placeholder.com/900x300"
  },
  {
    id: 4,
    image: "https://via.placeholder.com/600x400"
  }
]

const mokNewsData: NewsData[] = [
  {
    id: 1,
    image: "https://via.placeholder.com/1000x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    date: new Date("2023-02-20T20:30")
  },
  {
    id: 2,
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    date: new Date("2023-02-20T20:30")
  },
  {
    id: 3,
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    date: new Date("2023-02-20T20:30")
  },
  {
    id: 4,
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    date: new Date("2023-02-20T20:30")
  },
  {
    id: 5,
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    date: new Date("2023-02-20T20:30")
  },
  {
    id: 6,
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    date: new Date("2023-02-20T20:30")
  }
]

const mokPopularProducts: ProductType[] = [
  {
    _id: "1",
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000
  },
  {
    _id: "2",
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000
  },
  {
    _id: "3",
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000
  },
  {
    _id: "4",
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000
  },
  {
    _id: "5",
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000
  },
  {
    _id: "6",
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000
  }
]

const mokViewedProducts: ProductType[] = [
  {
    _id: "1",
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000
  }, {
    _id: "2",
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000
  }, {
    _id: "3",
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000
  }
]

interface HomePageProps {
  news: NewsType[]
}

const HomePage: NextPage<HomePageProps> = ({ news }) => {
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
        <Dilers/>
        <section className="section">
          <h2 className="section-title _centered">Новости и статьи</h2>
          <div className="section-content">
            <News data={news}/>
          </div>
        </section>
        {mokPopularProducts && (
          <section className="section">
            <h2 className="section-title _centered">Популярные автомобили</h2>
            <div className={"section-content" + " " + styles.homePagePopular}>
              <PopularProducts data={mokPopularProducts}/>
            </div>
          </section>
        )}
        {mokViewedProducts && (
          <section className="section">
            <h2 className="section-title _centered">Вы смотрели</h2>
            <div className="section-content">
              <ViewedProducts data={mokViewedProducts}/>
            </div>
          </section>
        )}
      </main>
    </MainLayout>
  )
}

HomePage.getInitialProps = async (context) => {
  const { data } = await axi.get("/news")

  return { news: data }
}


export default HomePage


