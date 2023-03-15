import { NextPage } from "next"
import MainLayout from "@/layouts/MainLayout"
import styles from "@/styles/pages/News.module.scss"
import ToolPanel from "@/components/ToolPanel"
import { FilterNames } from "@/typescript/enums"
import News from "@/components/News"
import { trpc } from "@/utils/trpc"

const NewsPage: NextPage = () => {

  return (
    <MainLayout title="Next 12 - News Page">
      <main className={styles.newsPage}>
        <h1 className="page-title">Новости</h1>
        <ToolPanel
          loadingTemplate={<p>Loading...</p>}
          query={trpc.news.list}
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


export default NewsPage