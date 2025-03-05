import React from 'react';
import { Button as MuiButton } from "@mui/material";


/**
 * Стилизованный UI компонент кнопки
 * @param {Object} props - Пропсы компонента
 * @param {string} props.text - Текст кнопки
 * @param {function} [props.onClick] - Функция обработчик клика
 * @param {boolean} [props.filled=false] - Признак заполненной кнопки
 * @returns {JSX.Element} - JSX элемент кнопки
 */
const Button = ({ text, onClick, filled = false }) => {

    // Вариант кнопки
    const buttonVariant = filled ? "contained" : "outlined";

    // Возвращаем JSX элемент, который содержит структуру кнопки
    return (
        <MuiButton
            variant={buttonVariant}
            type="submit"
            onClick={onClick}
            sx={{
                width: 'fit-content',
                border: filled ? 'none' : `1px solid #5EDBB0`,
                justifyContent: 'center',
                fontWeight: 'medium',
                fontSize: { xs: 12, md: 16, lg: 18 },
                paddingX: 2,
                color: 'white',
                m: 1,
                backgroundColor: filled ? '#5EDBB0' :'transparent',
                minHeight: 40,
                borderRadius: 2,
                borderWidth: 1,
                textTransform: 'none',
                '&:hover, &:focus': {
                    borderWidth: 1,
                },
            }}
        >
            {text}
        </MuiButton>
    );
};

// Экспортируем компонент Button
export default Button;