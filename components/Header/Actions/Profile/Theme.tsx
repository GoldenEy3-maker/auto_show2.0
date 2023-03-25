import RadioSelect from "@/components/Radio"
import { useHeaderActionsProfileContext } from "@/context/HeaderActionsProfileContext"
import { Themes } from "@/typescript/enums"
import { ChangeEvent, useEffect, useState } from "react"
import { HeaderActionsProfileMenuProps } from "./index"
import HeaderActionsProfileMenuWrapper from "./Wrapper"

export default function HeaderActionsProfileTheme({
  backButtonClickHandler,
}: HeaderActionsProfileMenuProps) {
  const [{ theme }, setHeaderActionsProfileContext] =
    useHeaderActionsProfileContext()

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    setHeaderActionsProfileContext((prev) => ({
      ...prev,
      theme: event.target.value as Themes,
    }))
  }

  return (
    <HeaderActionsProfileMenuWrapper
      title="Выберите тему"
      backButtonClickHandler={backButtonClickHandler}
    >
      <ul>
        <li>
          <RadioSelect
            label="Как в системе"
            id={Themes.System}
            value={Themes.System}
            name="theme"
            checked={theme === Themes.System}
            onChange={changeHandler}
          />
        </li>
        <li>
          <RadioSelect
            label="Темная"
            id={Themes.Dark}
            value={Themes.Dark}
            name="theme"
            checked={theme === Themes.Dark}
            onChange={changeHandler}
          />
        </li>
        <li>
          <RadioSelect
            label="Светлая"
            id={Themes.Light}
            value={Themes.Light}
            name="theme"
            checked={theme === Themes.Light}
            onChange={changeHandler}
          />
        </li>
      </ul>
    </HeaderActionsProfileMenuWrapper>
  )
}
