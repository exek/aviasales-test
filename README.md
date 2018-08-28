# Тестовое задание Aviasales [link](https://github.com/KosyanMedia/test-tasks/tree/master/aviasales)

[DEMO](https://aviasales-testapp.herokuapp.com/)

## Задачи

### Рендер билетов (#task1)

Используйте React для того чтобы отрендерить билеты с данными сортированные по цене из файла [tickets.json](https://github.com/KosyanMedia/test-tasks/blob/master/aviasales/tickets.json).

### Фильтрация билетов (#task2)

Фильтрация билетов в выдаче по количеству пересадок.

### Переключение валюты (#task3)

Логику переключения валюты (данные можете захардкодить, а можете и не😆).

### Верстка билета, фильтра, переключения валют (#task4)

Внутри команды мы используем Sketch (v49), поэтому исходники есть в [.sketch](https://github.com/KosyanMedia/test-tasks/blob/master/aviasales/search.sketch) и [.png](https://github.com/KosyanMedia/test-tasks/blob/master/aviasales/search.png). Если у вас нет нужных программ, то воспользуйтесь онлайн аналогами.

### Дополнительные задачи

- Респонсивность до 320px на ваш выбор (#task5);
- Сделать, чтобы json с билетами асинхронно подтягивался с локального сервера при инициализации (#task6).

## Реализация

Использованы библиотеки

- React
- redux
- reselect
- redux-thunk(для асинхронных экшенов по закгрузке билетов с сервера)
- styled-components(для стилизации компонентов)
- react-scripts(для простой анимации в выводе билетов)

# Install

To install dependencies

```shell
npm install
```

# Run

To run app

```shell
npm start
```
