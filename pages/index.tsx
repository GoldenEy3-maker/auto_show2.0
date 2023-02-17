import MainLayout from '@/layouts/MainLayout'
import styles from '@/styles/pages/Home.module.scss'

export default function HomePage() {
  return (
    <MainLayout title='Next 12 - Home Page'>
      <main className='homePage'>
        <h1>Home Page</h1>
      </main>
    </MainLayout>
  )
}
