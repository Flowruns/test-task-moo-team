import axios from "axios";

/**
 * Функция с фейковым запросом на сервер для отправки данных логина и пароля
 * @param email - значение поля ввода для адреса электронной почты
 * @param password - значение поля ввода для пароля
 */
export const loginUser = async (email, password) => {

    // Имитация задержки, как у реального запроса
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Проверка введенных данных
    if (email === "aleksei@example.com" && password === "lkJlkn8hj") {

        // Запрос к локальному JSON файлу
        const response = await axios.get('/api/login.json');

        // Возвращаем данные запроса, которые содержат токен
        return response.data;
    } else {

        // Если email или пароль неверные, выбрасываем ошибку с сообщением
        throw new Error("Неверный email или пароль.");
    }
};