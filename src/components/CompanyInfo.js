import React from 'react';
import {Box} from "@mui/material";

/**
 * Компонент с информацией о компании
 * @param text - текст
 * @param children - дочерний элемент
 */
const CompanyInfo = ({ text, children }) => {

    // Возвращаем JSX элемент, который содержит структуру информации о компании
    return (
        <Box className="info">
            <Box className="info-text" dangerouslySetInnerHTML={{ __html: text }} />
            {children}
        </Box>
    );
};

// Экспортируем компонент с информацией о компании
export default CompanyInfo;