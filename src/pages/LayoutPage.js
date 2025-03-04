import React from 'react';
import Navigation from '../components/Navigation';
import { Box } from "@mui/material";
import endlessConstellation from '../endlessConstellation.svg';


// Стилизация для шаблонной страницы
const containerStyle = {
    justifyContent: 'center',
    color: 'white',
    backgroundImage: `url(${endlessConstellation})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
};

/**
 * Шаблонная страница
 * @param children - дочерний элемент
 * @returns {Element} - возвращаем JSX элемент, представляющий шаблонную страницу
 */
const LayoutPage = ({ children }) => {

    // Возвращаем JSX элемент, который содержит структуру шаблонной страницы
    return (
        <Box style={containerStyle}>
            <Navigation />
            {children}
        </Box>
    );
};


// Экспортируем страницу LayoutPage
export default LayoutPage;