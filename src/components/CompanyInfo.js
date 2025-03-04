import React from 'react';
import {Box, Typography} from "@mui/material";

/**
 * Компонент с информацией о компании
 * @param text - текст
 * @param children - дочерний элемент
 * @returns {Element} - возвращаем компонент с информацией о компании
 */
const CompanyInfo = ({ text, children }) => {

    // Возвращаем JSX элемент, который содержит структуру информации о компании
    return (
        <Box sx={{color: 'white', textAlign: 'center'}}>
            <Typography sx={{fontSize: '60px', mt: 5, mb: 5}}>Company Info</Typography>
        <Box >
            {/* Используем свойство dangerouslySetInnerHTML для отображения контента, содержащий HTML-тег */}
            <Box className="info-text" dangerouslySetInnerHTML={{ __html: text }}  />
            {children}
        </Box>
        </Box>
    );
};

// Экспортируем компонент CompanyInfo
export default CompanyInfo;