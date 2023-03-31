import { useFileReader } from "@/hooks/fileReader"
import { useRippleHighlight } from "@/hooks/rippleHighlight"
import Image from "next/image"
import { ChangeEvent, InputHTMLAttributes } from "react"
import { FiUpload } from "react-icons/fi"
import styles from "./Uploader.module.scss"

interface UploaderProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  onChange?(value: FileList, event: ChangeEvent<HTMLInputElement>): void
}

export default function Uploader({
  id,
  placeholder,
  onChange,
  ...rest
}: UploaderProps) {
  const { previews, isLoading, readFiles } = useFileReader()
  const ripplesEffectPointerDownHandler = useRippleHighlight()

  async function changeUploaderHandler(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      if (onChange) onChange(event.target.files, event)

      await readFiles(event.target.files)
    }
  }

  return (
    <div className={styles.uploader}>
      <label htmlFor={id} onPointerDown={ripplesEffectPointerDownHandler}>
        <p>{placeholder ?? "Выберите файл"}</p>
        <span>
          <FiUpload />
        </span>
      </label>
      {previews && previews.length > 0 && (
        <div className={styles.uploaderPreviews}>
          <ul className={styles.uploaderPreviewsList}>
            {previews.map((previw) => (
              <li key={previw.id} className={styles.uploaderPreviewsListItem}>
                <Image
                  src={previw.base64}
                  alt={previw.name}
                  fill
                  sizes="100vw"
                />
              </li>
            ))}
          </ul>
        </div>
      )}

      <input type="file" id={id} onChange={changeUploaderHandler} {...rest} />
    </div>
  )
}
