import React from 'react';
import { Box } from "@mui/material";
import Button from "../UI/Button";
import {Link, useLocation} from "react-router-dom";


/**
 * Компонент с кнопки логина и возврата на главную страницу
 * @returns {Element} - возвращаем компонент кнопок с навигацией
 */
const Navigation = ({onProfileClick}) => {

    // Получаем текущий маршрут
    const location = useLocation()

    // Возвращаем JSX элемент, который содержит структуру кнопок навигации
    return (
        <Box sx={{ display: "flex", justifyContent: 'left', alignItems: 'center', ml: 2 }}>
            <Link to="/info">
                <Button text={'About us'} filled={false} />
            </Link>
            {location.pathname === '/profile' && (
                <Button text={'Profile'} filled={false} onClick={onProfileClick} />
            )}
            <Link to="/login">
                <Button text={'Sign in'} filled={false} />
            </Link>
        </Box>
    );
};

// Экспортируем компонент Navigation
export default Navigation;