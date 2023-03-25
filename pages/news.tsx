import News from "@/components/News"
import ToolPanel from "@/components/ToolPanel"
import MainLayout from "@/layouts/MainLayout"
import styles from "@/styles/pages/News.module.scss"
import { FilterNames } from "@/typescript/enums"
import { NextPage } from "next"

const NewsPage: NextPage = () => {
  return (
    <MainLayout title="Next 12 - News Page">
      <main className={styles.newsPage}>
        <h1 className="page-title">Новости</h1>
        <ToolPanel
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
          {(filter, filterMode, searchValue) => (
            <News filter={filter} filterMode={filterMode} searchValue={searchValue}/>
          )}
        </ToolPanel>
      </main>
    </MainLayout>
  )
}


export default NewsPage