import React from 'react';
import { Box } from "@mui/material";
import Button from "../UI/Button";
import {Link, useLocation} from "react-router-dom";


/**
 * Компонент с кнопки логина и возврата на главную страницу
 * @returns {Element} - возвращаем компонент кнопок с навигацией
 */
const Navigation = ({onProfileClick, onSignOut}) => {

    // Получаем текущий маршрут
    const location = useLocation()

    // Функция обработчик клика на кнопку 'Profile'
    const handleProfileClick = () => {

        if (onProfileClick) {

            // Передаем действие, чтобы сбросить обновить страницу
            onProfileClick();
        }
    };

    // Возвращаем JSX элемент, который содержит структуру кнопок навигации
    return (
        <Box sx={{ display: "flex", justifyContent: 'left', alignItems: 'center', ml: 1 }}>
            <Link to="/info">
                <Button text={'About us'} filled={false} />
            </Link>
            {location.pathname === '/profile' && (
                <Button text={'Profile'} filled={false} onClick={handleProfileClick}/>
            )}
            {location.pathname === '/profile' ? (
                <Button text={'Sign out'} filled={false} onClick={onSignOut} />
            ) : (
                <Link to="/login">
                    <Button text={'Sign in'} filled={false}/>
                </Link>
            )}
        </Box>
    );
};

// Экспортируем компонент Navigation
export default Navigation;