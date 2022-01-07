import { boolean, date, object, ref, string } from 'yup'

export const schema = object().shape({
  email: string()
    .strict(true)
    .required('Заполните поле Email')
    .trim('TRIM. Такой почты не существует')
    .max(70, 'Максимальное кол сим 70')
    .email('Введите валидную почту'),
  password: string()
    .required('Введите пароль')
    .min(6, 'Минимальное кол символов 6'),
  confirmPassword: string()
    .required('Заполните поле')
    .oneOf([ref('password'), null], 'Пароль должен совподать'),
  name: string().required('Заполните поле'),
  surname: string().required('Заполните поле'),
  lastName: string().required('Заполните поле'),
  phone: string().required('Заполните поле'),
  termsAndConditions: boolean().oneOf(
    [true],
    'The terms and conditions must be accepted.',
  ),
  date: date().required('Заполните поле').max(new Date(), 'invalid date'),
})
