export const validation = (values: any, errors?: any) => {
  const {first_name, second_name, login, email, password, phone, message, repeat_password} = values;

  let resultValidation = true;

  if (first_name) {
    errors.error_first_name = validationName(first_name);
  } else if (first_name === '') errors.error_first_name = 'Не задано имя';

  if (second_name) {
    errors.error_second_name = validationName(second_name);
  } else if (second_name === '') errors.error_second_name = 'Не задана фамилия';

  if (login) {
    if (login.length < 3 || login.length > 20) errors.error_login = 'Логин должен содержать от 3 до 20 символов';
    if (/[^\w_-]/.test(login)) errors.error_login = 'Содержит спецсимволы или пробел';
    if (!/[^\d]/.test(login)) errors.error_login = 'Логин не может состоять только из цифр';
  } else if (login === '') errors.error_login = 'Логин не задан';

  if (email) {
    let dog = false;
    let point = false;
    for (const char of email) {
      if (char === '@') dog = true;
      if (char === '.' && dog === true && email.indexOf('.') != email.indexOf('@') + 1) point = true;
    }
    if (!(dog && point)) errors.error_email = 'Некорректно задан email';
    if (/[а-яё]/.test(email)) errors.error_email = 'Email не может содержать кириллицу';
  } else if (email === '') errors.error_email = 'Email не задан';

  if (password) {
    if (password.length < 8 || password.length > 40)
      errors.error_password = 'Пароль должен содержать от 8 до 40 символов';
    if (!/[A-Z]/.test(password)) errors.error_password = 'Пароль должен содержать хотя бы одну заглавную букву';
    if (!/[\d]/.test(password)) errors.error_password = 'Пароль должен содержать хотя бы одну цифру';
  } else if (password === '') errors.error_password = 'Пароль не задан';

  if (repeat_password) {
    if (repeat_password != password) errors.error_repeat_password = 'Пароли не совпадают';
  } else if (repeat_password === '') errors.error_repeat_password = 'Повторите пароль';

  if (phone) {
    if (phone.length < 10 || phone.length > 15) errors.error_phone = 'Некорректная длина номера телефона';
    if (/[^\d+]/.test(phone)) {
      errors.error_phone = 'Номер телефона должен состоять из цифр и может начинаться с +';
    }
  } else if (phone === '') errors.error_phone = 'Не задан телефон';

  if (message === '') errors.error_message = 'Поле сообщения не должно быть пустым';

  Object.values(errors).forEach((error: any) => {
    if (error != '') resultValidation = false;
  });

  return resultValidation;
};

const validationName = (name: string) => {
  let error = '';

  const first_char = name.split('')[0];
  if (first_char != first_char.toUpperCase()) error = 'Первая буква должна быть заглавной';

  for (const char of name) {
    if (/[^а-яёА-ЯЁa-zA-Z-]/.test(char)) {
      error = 'Латиница или кириллица, без пробелов, цифр и спецсимволов (допустим только дефис)';
    }
  }

  return error;
};
