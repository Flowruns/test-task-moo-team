import React from 'react';
import LoginFormModule from "../modules/LoginFormModule";
import LayoutPage from "./LayoutPage";


/**
 * Страница с формами ввода логина и пароля
 * @returns {Element} - возвращаем JSX элемент, представляющий страницу логина и пароля
 */
const LoginPage = () => {

    // Возвращаем JSX элемент, который содержит структуру страницы ввода логина и пароля
    return (
        <LayoutPage>
            <LoginFormModule />
        </LayoutPage>
    );
};

// Экспортируем страницу LoginPage
export default LoginPage;