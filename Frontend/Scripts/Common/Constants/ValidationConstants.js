const urlRegex = /^(https?:\/\/)?([\w.]+)\.([a-z]{2,6}\.?)(\/[\w.]*)*\/?$/;

const required = value => (value ? undefined : 'Заполните это поле');

const positiveNumber = value => (isNaN(value) || value <= 0 ? 'Значение должно быть положительным числом' : undefined);

const url = value => (urlRegex.test(value) ? undefined : 'Значение должно быть url-адресом');

export { required, positiveNumber, url };
