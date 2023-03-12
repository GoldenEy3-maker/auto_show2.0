import { NextPage } from "next"
import MainLayout from "@/layouts/MainLayout"
import styles from "@/styles/pages/News.module.scss"
import ToolPanel from "@/components/ToolPanel"
import axi from "@/axios/instance"
import { NewsType } from "@/typescript/types"
import { FilterNames } from "@/typescript/enums"
import News from "@/components/News"

interface NewsPageProps {
  news: NewsType[]
}

const NewsPage: NextPage<NewsPageProps> = ({ news }) => {
  return (
    <MainLayout title="Next 12 - News Page">
      <main className={styles.newsPage}>
        <h1 className="page-title">Новости</h1>
        <ToolPanel
          loadingTemplate={<p>Loading...</p>}
          prefetchedData={news}
          queryKey="news"
          apiURL="/news"
          searchPlaceholder="Поиск новостей"
          filtersList={[
            {
              name: FilterNames.ByName,
              label: "По названию"
            },
            {
              name: FilterNames.ByDate,
              label: "По дате",
              isDefault: true
            }
          ]}
        >
          {(data) => (
            <News data={data}/>
          )}
        </ToolPanel>
      </main>
    </MainLayout>
  )
}

NewsPage.getInitialProps = async (context) => {
  const { data } = await axi.get("/news")

  return { news: data }
}

export default NewsPage