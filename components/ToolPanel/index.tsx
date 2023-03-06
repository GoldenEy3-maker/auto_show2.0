import styles from "./ToolPanel.module.scss"
import { ProductItemType } from "@/typescript/types"
import { BiFilterAlt } from "react-icons/bi"
import PrimaryButtonContextMenu from "@/components/Button/Context"
import RadioSelect from "@/components/Radio"

interface ToolPanelProps {
  data: ProductItemType[]
}

export default function ToolPanel({ data }: ToolPanelProps) {
  return (
    <div className="toolPanel">
      <div className="toolPanelFilter">
        <PrimaryButtonContextMenu type="button" buttonContent={<BiFilterAlt/>} title="Фильтры">
          <RadioSelect label="По названию"/>
          <RadioSelect label="По цене"/>
          <RadioSelect label="По дате"/>
          <span className={styles.toolPanelContextMenuSeparator}></span>
          <RadioSelect label="По возрастанию"/>
          <RadioSelect label="По убыванию"/>
        </PrimaryButtonContextMenu>
      </div>
    </div>
  )
}