import formStyles from '@/styles/components/Form.module.scss'
import { FormEvent } from 'react'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import PrimaryButton from '../Button'
import InputElement from '../Input'

export default function FooterForm() {
  function submitFormHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
  }

  return (
    <form className={formStyles.form} onSubmit={submitFormHandler}>
      <div className={formStyles.formInputs}>
        <InputElement
          type='text'
          title='Имя'
          name='user-name'
          id='user-name'
          placeholder='Имя'
          leadingIcon={<BsPerson />}
        />
        <InputElement
          type='email'
          title='Email'
          name='email'
          id='email'
          placeholder='Email'
          leadingIcon={<HiOutlineMail />}
        />
      </div>
      <footer className={formStyles.formFooter}>
        <PrimaryButton type='submit' title='Подписаться' isBackgroundColor>
          Подписаться
        </PrimaryButton>
      </footer>
    </form>
  )
}
