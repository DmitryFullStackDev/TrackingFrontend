import { object, string } from 'yup'

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
})
