import axios from 'axios';

export const loginUser = async (email, password) => {
    const response = await axios.post('/api/login.json', { email, password });
    if (!response.data.success) {
        throw new Error('Ошибка логина');
    }
    return response.data.data.token;
};