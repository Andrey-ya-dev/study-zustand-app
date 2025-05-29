# Study zustand state manager

[О приложение](#возможности-приложения)

### Стек:

- React, TS, CSS , ES lint, Zustand, React router, Vite, axios, ant-design

<details>
<summary>Команды для установки с нуля</summary>

### Vite

```
npm create vite@latest
```

### Zustand, React Router, Axios

```
npm install zustand react-router axios
```

### Ant-design

```
npm install antd --save
```

Патч для использования с react 19. (если не пофиксили)

```
npm install @ant-design/v5-patch-for-react-19 --save
```

</details>

## Установка и запуск

Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run dev
```

## Сборка

```
npm run build
```

## Просмотреть prod версию

```
npm run build
```

```
npm run preview
```

## Возможности приложения

Примеры использования со стейт менеджером zustand

### Counter example

- Увеличение/уменьшение значения
- Сохранение значения одного из счетчиков при перезагрузки страницы(zustand/persist)
- Увеличение при занчение счетчика больше 0 на 10 или уменьшение при значение счетчка меньше 0 на 10
- Сброс состояния счетчиков
- Сброс состояния 2х сторов(counter, [todo](#todo-example))

### Todo example

- Добавление todo
- Отметить выполненым
- Удаление todo

### Coffee app

- Загрузка списка напитков
- Добавление в корзину
- Добавление адреса
- Отправка заказа
- Сохранение состояния корзины и адреса при перезагрузке(zustand/persist)
- Поиск в инпуте по типу напитков с сохранением состояния в строке поиска
- Поиск напитков по тегу

## Что можно добавить в проект

- Модальное окно с навигацией при небольшом экране
- Дополнительные темы
- Storybook
- Тесты
