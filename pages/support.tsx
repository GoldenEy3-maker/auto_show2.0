import InputElement from "@/components/Input"
import SelectElement from "@/components/Select"
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
    }
  )

  function changeSelectHandler(value: SupportTopics) {
    setSelectedTopic(value)
  }

  function changeInputsHandler(event: ChangeEvent<HTMLInputElement>) {
    setInputsState((prev) => ({
      ...prev,
      [event.target.name as SupportInputs]: event.target.value,
    }))
  }

  return (
    <MainLayout title="Next 12 - Support Page">
      <main className="support-page">
        <h1 className="page-title _centered">Поддержка</h1>
        <form className={formStyles.form}>
          <div className={formStyles.formInputs}>
            <InputElement
              type="text"
              id={SupportInputs.UserFirstName}
              name={SupportInputs.UserFirstName}
              leadingIcon={<BsPerson />}
              placeholder="Имя"
              value={inputsState["user-first-name"]}
              onChange={changeInputsHandler}
            />
            <InputElement
              type="text"
              id={SupportInputs.UserLastName}
              name={SupportInputs.UserLastName}
              leadingIcon={<BsPerson />}
              placeholder="Фамилия"
              value={inputsState["user-last-name"]}
              onChange={changeInputsHandler}
            />
            <InputElement
              type="text"
              id={SupportInputs.UserMiddleName}
              name={SupportInputs.UserMiddleName}
              leadingIcon={<BsPerson />}
              placeholder="Отчество"
              value={inputsState["user-middle-name"]}
              onChange={changeInputsHandler}
            />
            <InputElement
              type="tel"
              id={SupportInputs.UserTel}
              name={SupportInputs.UserTel}
              leadingIcon={<MdOutlineLocalPhone />}
              placeholder="Номер телефона"
              value={inputsState["user-tel"]}
              onChange={changeInputsHandler}
            />
            <InputElement
              type="email"
              id={SupportInputs.UserEmail}
              name={SupportInputs.UserEmail}
              leadingIcon={<HiOutlineMail />}
              placeholder="Email"
              value={inputsState["user-email"]}
              onChange={changeInputsHandler}
            />
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
          </div>
        </form>
      </main>
    </MainLayout>
  )
}
