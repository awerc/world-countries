import Status from '../constants/StatusConstants';

const defineIcon = status => {
  switch (status) {
    case Status.SUCCESS:
      return 'success';
    case Status.ERROR:
      return 'error';
    case Status.NO_RESULTS:
    default:
      return 'no-result';
  }
};

const defineMessage = status => {
  switch (status) {
    case Status.SUCCESS:
      return 'Успешно';
    case Status.ERROR:
      return 'Ошибка сервера';
    case Status.NO_RESULTS:
      return 'Нет данных';
    default:
      return 'Загрузка...';
  }
};

export { defineIcon, defineMessage };
