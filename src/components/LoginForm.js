import React from 'react';
import { Box, TextField } from "@mui/material";
import Button from "../UI/Button";


/**
 * Компонент ввода логина и пароля
 * @param email - Значение поля ввода для адреса электронной почты
 * @param setEmail - Функция для обновления состояния email
 * @param password - Значение поля ввода для пароля
 * @param setPassword - Функция для обновления состояния пароля
 * @param handleLogin - Функция, которая обрабатывает процесс входа в систему
 * @param error - Сообщение об ошибке, если вход не удался
 * @returns {Element} - Возвращает JSX элемент, представляющий форму для ввода логина и пароля
 */
const LoginForm = ({ email, setEmail, password, setPassword, handleLogin, error }) => {

    // Возвращаем JSX элемент, который содержит структуру формы для ввода логина и пароля
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={e => setEmail(e.target.value)}
                sx={{
                    '& .MuiInputBase-input': {
                        color: 'white',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#5EDBB0',
                        },
                        '&:hover fieldset': {
                            borderColor: '#5EDBB0',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#5EDBB0',
                        }
                    }
                }}
            />
            <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                sx={{
                    '& .MuiInputBase-input': {
                        color: 'white',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#5EDBB0',
                        },
                        '&:hover fieldset': {
                            borderColor: '#5EDBB0',
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#5EDBB0',
                        }
                    }
                }}
            />
            <Button text={'Submit'} onClick={handleLogin} filled={true} />
            {error && <div className="error">{error}</div>}
        </Box>
    );
};

// Экспортируем компонент LoginForm
export default LoginForm;