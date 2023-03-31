import PrimaryButton from "@/components/Button"
import InputElement from "@/components/Input"
import SelectElement from "@/components/Select"
import Textarea from "@/components/Textarea"
import Uploader from "@/components/Uploader"
import { FilePreviewState } from "@/hooks/fileReader"
import MainLayout from "@/layouts/MainLayout"
import formStyles from "@/styles/components/Form.module.scss"
import { ValueOf } from "@/typescript/utils"
import { ChangeEvent, useState } from "react"
import { BsPerson } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import { MdOutlineLocalPhone } from "react-icons/md"

const SupportInputs = {
  UserFirstName: "user-first-name",
  UserLastName: "user-last-name",
  UserMiddleName: "user-middle-name",
  UserTel: "user-tel",
  UserEmail: "user-email",
  AppealText: "appeal-text",
} as const
type SupportInputs = ValueOf<typeof SupportInputs>

type SupportTopics =
  | "Тема обращения 1"
  | "Тема обращения 2"
  | "Тема обращения 3"
  | "Тема обращения 4"
  | "Тема обращения 5"
  | "Тема обращения 6"

export default function SupportPage() {
  const [selectedTopic, setSelectedTopic] = useState<SupportTopics | "">("")
  const [inputsState, setInputsState] = useState<Record<SupportInputs, string>>(
    {
      "user-first-name": "",
      "user-last-name": "",
      "user-middle-name": "",
      "user-email": "",
      "user-tel": "",
      "appeal-text": "",
    }
  )
  const [attachedFiles, setAttachedFiles] = useState<FileList | undefined>(
    undefined
  )

  function changeSelectHandler(value: SupportTopics) {
    setSelectedTopic(value)
  }

  function changeInputsHandler(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInputsState((prev) => ({
      ...prev,
      [event.target.name as SupportInputs]: event.target.value,
    }))
  }

  function changeUploaderHandler(data: FileList) {
    setAttachedFiles(data)
  }

  return (
    <MainLayout title="Next 12 - Support Page">
      <main className="support-page">
        <h1 className="page-title _centered">Поддержка</h1>
        <form className={formStyles.form}>
          <fieldset className={formStyles.fieldset}>
            <legend>Клиентские данные:</legend>
            <div className={formStyles.formInputs}>
              <InputElement
                type="text"
                title="Имя"
                id={SupportInputs.UserFirstName}
                name={SupportInputs.UserFirstName}
                leadingIcon={<BsPerson />}
                placeholder="Имя"
                value={inputsState["user-first-name"]}
                onChange={changeInputsHandler}
              />
              <InputElement
                type="text"
                title="Фамилия"
                id={SupportInputs.UserLastName}
                name={SupportInputs.UserLastName}
                leadingIcon={<BsPerson />}
                placeholder="Фамилия"
                value={inputsState["user-last-name"]}
                onChange={changeInputsHandler}
              />
              <InputElement
                type="text"
                title="Отчество"
                id={SupportInputs.UserMiddleName}
                name={SupportInputs.UserMiddleName}
                leadingIcon={<BsPerson />}
                placeholder="Отчество"
                value={inputsState["user-middle-name"]}
                onChange={changeInputsHandler}
              />
              <InputElement
                type="tel"
                title="Номер телефона"
                id={SupportInputs.UserTel}
                name={SupportInputs.UserTel}
                leadingIcon={<MdOutlineLocalPhone />}
                placeholder="Номер телефона"
                value={inputsState["user-tel"]}
                onChange={changeInputsHandler}
              />
              <InputElement
                type="email"
                title="Email"
                id={SupportInputs.UserEmail}
                name={SupportInputs.UserEmail}
                leadingIcon={<HiOutlineMail />}
                placeholder="Email"
                value={inputsState["user-email"]}
                onChange={changeInputsHandler}
              />
            </div>
          </fieldset>
          <fieldset className={formStyles.fieldset}>
            <legend>Детали обращения:</legend>
            <div className={formStyles.formInputs}>
              <SelectElement
                options={[
                  "Тема обращения 1",
                  "Тема обращения 2",
                  "Тема обращения 3",
                  "Тема обращения 4",
                  "Тема обращения 5",
                  "Тема обращения 6",
                ]}
                id="choose-topic"
                placeholder="Выберите тему обращения"
                value={selectedTopic}
                changeHandler={changeSelectHandler}
              />
              <Uploader
                id="test-file"
                name="test-file"
                multiple
                onChange={changeUploaderHandler}
                accept="image/*"
              />
              <Textarea
                id={SupportInputs.AppealText}
                name={SupportInputs.AppealText}
                title="Расскажите подробнее"
                placeholder="Расскажите подробнее"
                value={inputsState["appeal-text"]}
                onChange={changeInputsHandler}
              />
            </div>
          </fieldset>
          <div className={formStyles.formFooter}>
            <PrimaryButton
              type="submit"
              title="Создать обращение"
              isBackgroundColor
            >
              Создать обращение
            </PrimaryButton>
          </div>
        </form>
      </main>
    </MainLayout>
  )
}
