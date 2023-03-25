import RadioSelect from "@/components/Radio"
import { useHeaderActionsProfileContext } from "@/context/HeaderActionsProfileContext"
import { Cities } from "@/typescript/enums"
import { ChangeEvent, useState } from "react"
import { HeaderActionsProfileMenuProps } from "./index"
import HeaderActionsProfileMenuWrapper from "./Wrapper"

export default function HeaderActionsProfileCity({
  backButtonClickHandler,
}: HeaderActionsProfileMenuProps) {
  const [{ city }, setHeaderActionsProfileContext] =
    useHeaderActionsProfileContext()

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    setHeaderActionsProfileContext((prev) => ({
      ...prev,
      city: event.target.value as Cities,
    }))
  }

  return (
    <HeaderActionsProfileMenuWrapper
      title="Выберите город"
      backButtonClickHandler={backButtonClickHandler}
    >
      <ul>
        <li>
          <RadioSelect
            label="Москва"
            id={Cities.Moscow}
            name="address"
            value={Cities.Moscow}
            checked={city === Cities.Moscow}
            onChange={changeHandler}
          />
        </li>
        <li>
          <RadioSelect
            label="Санкт-Петербург"
            id={Cities.SaintPetersburg}
            name="address"
            value={Cities.SaintPetersburg}
            checked={city === Cities.SaintPetersburg}
            onChange={changeHandler}
          />
        </li>
        <li>
          <RadioSelect
            label="Новосибирск"
            id={Cities.Novosibirsk}
            name="address"
            value={Cities.Novosibirsk}
            checked={city === Cities.Novosibirsk}
            onChange={changeHandler}
          />
        </li>
        <li>
          <RadioSelect
            label="Барнаул"
            id={Cities.Barnaul}
            name="address"
            value={Cities.Barnaul}
            checked={city === Cities.Barnaul}
            onChange={changeHandler}
          />
        </li>
      </ul>
    </HeaderActionsProfileMenuWrapper>
  )
}
