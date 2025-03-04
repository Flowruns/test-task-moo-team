import React, { useState } from 'react';
import { loginUser } from "../services/AuthService";
import LoginForm from "../components/LoginForm";
import {useNavigate} from 'react-router-dom';


/**
 * Модуль для форм ввода логина и пароля пользователем
 * @returns {Element} си пароля пользователем
 */
const LoginFormModule = () => {

    const navigate = useNavigate();

    // Состояние для хранения введённого email
    const [email, setEmail] = useState('');

    // Состояние для хранения введённого пароля
    const [password, setPassword] = useState('');

    // Состояние для хранения сообщения об ошибке
    const [error, setError] = useState(null);

    // Асинхронная функция для обработки входа пользователя
    const handleLogin = async () => {
        try {
            // Выполняем вход, вызывая функцию loginUser с введёнными email и паролем
            const response = await loginUser(email, password);

            // Проверяем успешность аутентификации
            if (response.success) {

                // Получаем токен из ответа
                const token = response.data.token;

                // Сохраняем токен в localStorage
                localStorage.setItem('token', token);

                // Сбрасываем состояние ошибки при успешном входе
                setError(null);

                // Перенаправляем пользователя на страницу профиля
                navigate('/profile');

            } else {

                // В случае некорректного ответа, задаём сообщение об ошибке
                setError('Ошибка аутентификации. Проверьте свои данные.');
            }
        } catch (err) {

            // В случае возникновения ошибки, обновляем состояние с сообщением об ошибке
            setError(err.message);
        }
    };

    // Возвращаем JSX элемент, который содержит структуру модуля форм ввода логина и пароля
    return (
        <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            error={error}
        />
    );
};

// Экспортируем модуль LoginFormModule
export default LoginFormModule;