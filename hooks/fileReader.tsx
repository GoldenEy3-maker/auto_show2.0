import { useState } from "react"

export type FilePreviewState = {
  id: string
  name: string
  base64: string
}

export function useFileReader(): {
  previews: FilePreviewState[] | undefined
  isLoading: boolean
  readFiles: (files: FileList) => Promise<void>
} {
  const [previews, setPreviews] = useState<FilePreviewState[] | undefined>(
    undefined
  )
  const [isLoading, setIsLoading] = useState(false)

  function handleFileChosen(file: File) {
    return new Promise<FilePreviewState>((resolve, reject) => {
      const reader = new FileReader()

      reader.onloadstart = () => setIsLoading(true)
      reader.onloadend = () => {
        resolve({
          id: crypto.randomUUID(),
          name: file.name,
          base64: reader.result as string,
        })
        setIsLoading(false)
      }
      reader.onerror = (e) => {
        reject(e)
        setIsLoading(false)
      }

      reader.readAsDataURL(file)
    })
  }

  async function readFiles(files: FileList) {
    const result = await Promise.all(
      Array.from(files).map(async (file) => await handleFileChosen(file))
    )

    setPreviews(result)
  }

  // async function readFile(file: File) {
  //   const result = await handleFileChosen(file)

  //   setFilePreview(result as string)
  // }

  return { previews, isLoading, readFiles }
}
