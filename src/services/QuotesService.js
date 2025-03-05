import axios from "axios";

/**
 * Запрос для получения данных цитат
 */
export const fetchQuotes = async () => {

    // Получаем токен из локального хранилища
    const token = localStorage.getItem('token');

    // Если токен не найден
    if (!token) {
        throw new Error('No token found');
    }

    try {
        // Запрос к локальному JSON файлу для получения цитат
        const response = await axios.get('/api/quotes.json');

        // Если запрос успешно выполнен
        if (response.status === 200) {

            // Возвращаем данные цитат
            return response.data;
        } else {

            // Генерируем ошибку, если ответ не успешен
            throw new Error('Failed to fetch quotes');
        }
    } catch (error) {

        // Логируем ошибку в консоль для отладки
        console.error('Error fetching quotes:', error);

        // Пробрасываем ошибку дальше обработчикам
        throw error;
    }
};