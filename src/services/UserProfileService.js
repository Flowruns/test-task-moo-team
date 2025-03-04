import axios from "axios";

/**
 * Запрос для получения данных пользователя
 */
export const fetchUserProfile = async () => {

    // Получаем токен из локального хранилища
    const token = localStorage.getItem('token');

    // Если токен не найден
    if (!token) {

        // Генерируем ошибку
        throw new Error('No token found');
    }

    try {

        // Запрос к локальному JSON файлу
        const response = await axios.get('/api/profile.json');

        // Если запрос успешно выполнен
        if (response.data.success) {

            // Возвращаем данные пользователя
            return response.data.data;

            // Иначе генерируем ошибку
        } else {

            // Генерируем ошибку, если ответ не успешен
            throw new Error('Failed to fetch user profile');
        }
    } catch (error) {

        // Логируем ошибку в консоль для отладки
        console.error('Error fetching user profile:', error);

        // Пробрасываем ошибку дальше обработчикам
        throw error;
    }
};