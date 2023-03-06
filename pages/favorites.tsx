import MainLayout from '@/layouts/MainLayout'
import ToolPanel from "@/components/ToolPanel"
import { ProductItemType } from "@/typescript/types"

const mokFavoriteProducts: ProductItemType[] = [
  {
    _id: 1,
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000
  },
  {
    _id: 2,
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000
  },
  {
    _id: 3,
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000
  },
  {
    _id: 4,
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000
  },
  {
    _id: 5,
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000
  },
  {
    _id: 6,
    image: "https://via.placeholder.com/700x500",
    title: "Lorem ipsum dolor sit amet consectetur",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo laudantium vel nobis voluptates nemo excepturi, veniam accusamus totam itaque doloribus in modi! Accusantium magni dignissimos mollitia tempora, aut enim rem.",
    price: 50000000
  }
]

export default function FavoritesPage() {
  return (
    <MainLayout title='Next 12 - Favorites Page'>
      <main className='favorites-page'>
        <h1 className='page-title'>Избранное</h1>
        <ToolPanel data={mokFavoriteProducts}></ToolPanel>
      </main>
    </MainLayout>
  )
}