import CheckboxElement from '@/components/Checkbox/CheckboxElement'
import { LocalStorageNames } from '@/typescript/enums'
import { useEffect, useState } from 'react'

export default function HeaderActionsNotifyOffCheckbox() {
  const [isNotifyOff, setIsNotifyOff] = useState(false)

  function changeNotifyOffHandler() {
    setIsNotifyOff((prev) => {
      localStorage.setItem(LocalStorageNames.IsNotifyOff, String(!prev))

      return !prev
    })
  }

  useEffect(() => {
    const storedIsNotifyOff = localStorage.getItem(
      LocalStorageNames.IsNotifyOff
    )

    if (storedIsNotifyOff) {
      setIsNotifyOff(storedIsNotifyOff === 'false' ? false : true)
    }
  }, [])

  return (
    <CheckboxElement
      label='Отключить уведомления'
      id='notify-off'
      name='notify-off'
      onChange={changeNotifyOffHandler}
      checked={isNotifyOff}
      isSwitcher={true}
    />
  )
}
