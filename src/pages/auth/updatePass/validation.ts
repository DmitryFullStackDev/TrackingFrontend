import { object, ref, string } from 'yup'

export const schema = object().shape({
  password: string()
    .required('Введите пароль')
    .min(6, 'Минимальное кол символов 6'),
  confirmPassword: string()
    .required('Заполните поле')
    .oneOf([ref('password'), null], 'Пароль должен совподать'),
})
