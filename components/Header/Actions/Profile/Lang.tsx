import RadioSelect from "@/components/Radio"
import { useHeaderActionsProfileContext } from "@/context/HeaderActionsProfileContext"
import { Langs } from "@/typescript/enums"
import { ChangeEvent, useState } from "react"
import { HeaderActionsProfileMenuProps } from "./index"
import HeaderActionsProfileMenuWrapper from "./Wrapper"

export default function HeaderActionsProfileLang({
  backButtonClickHandler,
}: HeaderActionsProfileMenuProps) {
  const [{ lang }, setHeaderActionsProfileContext] =
    useHeaderActionsProfileContext()

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    setHeaderActionsProfileContext((prev) => ({
      ...prev,
      lang: event.target.value as Langs,
    }))
  }

  return (
    <HeaderActionsProfileMenuWrapper
      title="Выберите язык"
      backButtonClickHandler={backButtonClickHandler}
    >
      <ul>
        <li>
          <RadioSelect
            label="Русский"
            value={Langs.Ru}
            id={Langs.Ru}
            name="lang"
            checked={lang === Langs.Ru}
            onChange={changeHandler}
          />
        </li>
        <li>
          <RadioSelect
            label="German"
            value={Langs.De}
            id={Langs.De}
            name="lang"
            checked={lang === Langs.De}
            onChange={changeHandler}
          />
        </li>
        <li>
          <RadioSelect
            label="English (UK)"
            value={Langs.EnGB}
            id={Langs.EnGB}
            name="lang"
            checked={lang === Langs.EnGB}
            onChange={changeHandler}
          />
        </li>
        <li>
          <RadioSelect
            label="English (US)"
            value={Langs.En}
            id={Langs.En}
            name="lang"
            checked={lang === Langs.En}
            onChange={changeHandler}
          />
        </li>
      </ul>
    </HeaderActionsProfileMenuWrapper>
  )
}
