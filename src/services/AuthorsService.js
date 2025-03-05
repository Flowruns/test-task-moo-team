import axios from "axios";

/**
 * Запрос для получения данных авторов
 */
export const fetchAuthors = async () => {

    // Получаем токен из локального хранилища
    const token = localStorage.getItem('token');

    // Если токен не найден
    if (!token) {
        throw new Error('No token found');
    }

    try {

        // Запрос к локальному JSON файлу для получения списка авторов
        const response = await axios.get('/api/authors.json');

        // Если запрос успешно выполнен
        if (response.status === 200) {

            // Возвращаем данные авторов
            return response.data;
        } else {

            // Генерируем ошибку, если ответ не успешен
            throw new Error('Failed to fetch authors');
        }
    } catch (error) {

        // Логируем ошибку в консоль для отладки
        console.error('Error fetching authors:', error);

        // Пробрасываем ошибку дальше обработчикам
        throw error;
    }
};