import MainLayout from '@/layouts/MainLayout'
import styles from '@/styles/pages/Home.module.scss'

export default function HomePage() {
  return (
    <MainLayout title='Next 12 - Home Page'>
      <main className='homePage'>
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
          inventore vel eaque ex cumque tempora non ducimus consectetur
          accusamus ipsa enim, hic laudantium eligendi excepturi! Alias ullam
          eaque rem maxime.
        </p>
      </main>
    </MainLayout>
  )
}
