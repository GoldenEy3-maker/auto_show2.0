import PrimaryButton from "@/components/Button"
import CheckboxElement from "@/components/Checkbox"
import InputElement from "@/components/Input"
import Textarea from "@/components/Textarea"
import MainLayout from "@/layouts/MainLayout"
import formStyles from "@/styles/components/Form.module.scss"
import { ValueOf } from "@/typescript/utils"
import { NextPage } from "next"
import { ChangeEvent, FormEvent, useState } from "react"
import { BsPerson } from "react-icons/bs"
import { HiOutlineMail } from "react-icons/hi"
import { MdOutlineLocalPhone } from "react-icons/md"

const FeedbackInputs = {
  UserFirstName: "user-first-name",
  UserLastNmae: "user-last-name",
  UserMiddleName: "user-middle-name",
  UserTel: "user-tel",
  UserEmail: "user-email",
  Details: "details",
} as const

const FeedbackCheckboxes = {
  GetCall: "get-call",
  SendEmail: "send-email",
} as const

type FeedbackCheckboxes = ValueOf<typeof FeedbackCheckboxes>
type FeedbackInputs = ValueOf<typeof FeedbackInputs>

const FeedbackPage: NextPage = () => {
  const [checkboxesState, setCheckboxesState] = useState<
    Record<FeedbackCheckboxes, boolean>
  >({
    "get-call": false,
    "send-email": false,
  })
  const [inputsState, setInputsState] = useState<
    Record<FeedbackInputs, string>
  >({
    "user-first-name": "",
    "user-last-name": "",
    "user-middle-name": "",
    "user-tel": "",
    "user-email": "",
    details: "",
  })

  function submitFormHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  function changeCheckboxHandler(event: ChangeEvent<HTMLInputElement>) {
    setCheckboxesState((prev) => ({
      ...prev,
      [event.target.name as FeedbackCheckboxes]:
        !prev[event.target.name as FeedbackCheckboxes],
    }))
  }

  function changeInputHandler(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInputsState((prev) => ({
      ...prev,
      [event.target.name as FeedbackInputs]: event.target.value,
    }))
  }

  return (
    <MainLayout title="Next 12 - Feedback Page">
      <main>
        <h1 className="page-title _centered">Обратная связь</h1>
        <form className={formStyles.form} onSubmit={submitFormHandler}>
          <div className={formStyles.formInputs}>
            <InputElement
              type="text"
              title="Имя"
              placeholder="Имя"
              leadingIcon={<BsPerson />}
              id={FeedbackInputs.UserFirstName}
              name={FeedbackInputs.UserFirstName}
              value={inputsState["user-first-name"]}
              onChange={changeInputHandler}
            />
            <InputElement
              type="text"
              title="Фамилия"
              placeholder="Фамилия"
              leadingIcon={<BsPerson />}
              id={FeedbackInputs.UserLastNmae}
              name={FeedbackInputs.UserLastNmae}
              value={inputsState["user-last-name"]}
              onChange={changeInputHandler}
            />
            <InputElement
              type="text"
              title="Отчество"
              placeholder="Отчество"
              leadingIcon={<BsPerson />}
              id={FeedbackInputs.UserMiddleName}
              name={FeedbackInputs.UserMiddleName}
              value={inputsState["user-middle-name"]}
              onChange={changeInputHandler}
            />
            <InputElement
              type="tel"
              title="Номер телефона"
              placeholder="Номер телефона"
              leadingIcon={<MdOutlineLocalPhone />}
              id={FeedbackInputs.UserTel}
              name={FeedbackInputs.UserTel}
              value={inputsState["user-tel"]}
              onChange={changeInputHandler}
            />
            <InputElement
              type="email"
              title="Email"
              placeholder="Email"
              leadingIcon={<HiOutlineMail />}
              id={FeedbackInputs.UserEmail}
              name={FeedbackInputs.UserEmail}
              onChange={changeInputHandler}
            />
            <Textarea
              title="Опишите цель вашего обращения"
              placeholder="Опишите цель вашего обращения"
              id={FeedbackInputs.Details}
              name={FeedbackInputs.Details}
              value={inputsState.details}
              onChange={changeInputHandler}
            />
          </div>
          <div className={formStyles.formCheckboxes}>
            <CheckboxElement
              label="Получить звонок от менеджера"
              id={FeedbackCheckboxes.GetCall}
              name={FeedbackCheckboxes.GetCall}
              checked={checkboxesState["get-call"]}
              onChange={changeCheckboxHandler}
              isReversedLabel={true}
            />
            <CheckboxElement
              label="Прислать ответ на почту"
              id={FeedbackCheckboxes.SendEmail}
              name={FeedbackCheckboxes.SendEmail}
              checked={checkboxesState["send-email"]}
              onChange={changeCheckboxHandler}
              isReversedLabel={true}
            />
          </div>
          <div className={formStyles.formFooter}>
            <PrimaryButton
              type="submit"
              title="Отправить"
              isBackgroundColor={true}
            >
              Отправить
            </PrimaryButton>
          </div>
        </form>
      </main>
    </MainLayout>
  )
}

export default FeedbackPage
