export const validation = (values: any, errors: any) => {
  const {first_name, second_name, login, email, password, phone, message, repeat_password} = values;
  const valid = true;

  if (first_name) {
    const first_char = first_name.split('')[0];
    if (first_char != first_char.toUpperCase()) errors.first_name = 'Первая буква должна быть заглавной';
  } else errors.first_name = 'Не задано имя';

  if (second_name) {
    const first_char = second_name.split('')[0];
    if (first_char != first_char.toUpperCase()) errors.second_name = 'Первая буква должна быть заглавной';
  } else errors.second_name = 'Не задана фамилия';

  if (login) {
    if (login.length < 3 || login.length > 20) errors.login = 'Логин должен содержать от 3 до 20 символов';
    if (/[^\w_-]/.test(login)) errors.login = 'Содержит спецсимволы или пробел';
    if (!/[^\d]/.test(login)) errors.login = 'Логин не может состоять только из цифр';
  } else errors.login = 'Логин не задан';

  if (email) {
    let dog = false;
    let point = false;
    for (const char of email) {
      if (char === '@') dog = true;
      if (char === '.' && dog === true && email.indexOf('.') != email.indexOf('@') + 1) point = true;
    }
    if (!(dog && point)) errors.email = 'Некорректно задан email';
    if (/[а-яё]/.test(email)) errors.email = 'Email не может содержать кириллицу';
  } else errors.email = 'Email не задан';

  if (password) {
    if (password.length < 8 || login.password > 40) errors.password = 'Пароль должен содержать от 8 до 40 символов';
    if (!/[A-Z]/.test(password)) errors.password = 'Пароль должен содержать хотя бы одну заглавную букву';
    if (!/[\d]/.test(password)) errors.password = 'Пароль должен содержать хотя бы одну цифру';
  } else errors.password = 'Пароль не задан';

  if (repeat_password) {
    if (repeat_password != password) errors.repeat_password = 'Пароли не совпадают';
  } else errors.repeat_password = 'Повторите пароль';

  if (phone) {
    if (phone.length < 10 || phone.length > 15) errors.phone = 'Некорректная длина номера телефона';
    if (/[^\d+]/.test(phone)) {
      errors.phone = 'Номер телефона должен состоять из цифр и может начинаться с +';
    }
  } else errors.phone = 'Не задан телефон';

  if (message) {
  } else errors.message = 'Поле сообщения не должно быть пустым';
};