const urlRegex = /^(https?:\/\/)?([\w.]+)\.([a-z]{2,6}\.?)(\/[\w.]*)*\/?$/;

const required = value => (value ? null : 'Заполните это поле');

const positiveNumber = value => (isNaN(value) || value <= 0 ? 'Значение должно быть положительным числом' : null);

const url = value => (urlRegex.test(value) ? null : 'Значение должно быть url-адресом');

export { required, positiveNumber, url };
