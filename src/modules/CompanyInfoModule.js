import React, { useEffect, useState } from 'react';
import CompanyInfo from "../components/CompanyInfo";
import { Box } from "@mui/material";
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
import LoginForm from "../components/LoginForm";


/**
 * Модуль для информации о компании
 * @returns {Element} - возвращаем модуль главного экрана
 */
const CompanyInfoModule = () => {

    // Состояние информации о компании
    const [info, setInfo] = useState('');

    // Состояние для хранения ошибки
    const [error, setError] = useState(null);

    // Состояние для определения режима входа
    const [isLoginMode] = useState(false);

    // Функция получения информации о компании
    const fetchInfo = async () => {

        // Выполняем HTTP-запрос к сервису получения информации о компании
        const response = await fetch(`${process.env.PUBLIC_URL}/api/info.json`);

        // Проверяем, успешен ли ответ. Если нет, выбрасываем ошибку
        if (!response.ok) {
            throw new Error('Ошибка при получении данных');
        }

        // Парсим ответ в формате JSON
        const data = await response.json();

        // Возвращаем объект информации о компании
        return data.data.info;
    };

    // Хук useEffect для загрузки информации о компании,
    // срабатывающий при монтировании компонента
    useEffect(() => {

        // Асинхронная функция для загрузки информации
        const loadInfo = async () => {
            try {

                // Получаем информацию о компании
                const infoData = await fetchInfo();

                // Обновляем состояние с полученной информацией
                setInfo(infoData);
            } catch (err) {

                // В случае ошибок обновляем состояние с ошибкой
                setError(err.message);
            }
        };

        // Вызываем функцию загрузки информации
        loadInfo();

        // Возврат для очистки состояния при размонтировании компонента
        return () => {

            // Очистка состояния информации
            setInfo('');

            // Очистка сообщения об ошибке при размонтировании
            setError(null);
        };
    }, []);

    // Если получаем ошибку - отображаем её пользователю
    if (error) {
        return <div className="error">{error}</div>;
    }

    // Возвращаем JSX элемент, который содержит структуру модуля информации о компании
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                {isLoginMode ? <LoginForm /> : (
                    <CompanyInfo text={info}>
                        <DiamondRoundedIcon sx={{ fontSize: 60, opacity: 0.5, mx: 2, my: 2 }} />
                    </CompanyInfo>
                )}
            </Box>
        </>
    );
};

// Экспортируем модуль CompanyInfoModule
export default CompanyInfoModule;