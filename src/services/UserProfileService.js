// src/api/userProfile.js
import axios from 'axios';

export const fetchUserProfile = async (token) => {
    const response = await axios.get(`/api/profile.json?token=${token}`);
    if (!response.data.success) {
        throw new Error('Ошибка получени яданных профиля');
    }
    return response.data.data;
};