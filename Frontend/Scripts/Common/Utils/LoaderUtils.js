import { STATUS_ERROR, STATUS_NO_RESULTS, STATUS_SUCCESS } from 'Constants/StatusConstants';

const defineIcon = status => {
  switch (status) {
    case STATUS_SUCCESS:
      return 'success';
    case STATUS_ERROR:
      return 'error';
    case STATUS_NO_RESULTS:
    default:
      return 'no-result';
  }
};

const defineMessage = status => {
  switch (status) {
    case STATUS_SUCCESS:
      return 'Успешно';
    case STATUS_ERROR:
      return 'Ошибка сервера';
    case STATUS_NO_RESULTS:
      return 'Нет данных';
    default:
      return 'Загрузка...';
  }
};

export { defineIcon, defineMessage };
