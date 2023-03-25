import { TextareaHTMLAttributes } from "react"
import styles from './Textarea.module.scss'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function Textarea({ ...rest }: TextareaProps) {
  return (
    <div className={styles.textarea}>
      <textarea {...rest} />
    </div>
  )
}
