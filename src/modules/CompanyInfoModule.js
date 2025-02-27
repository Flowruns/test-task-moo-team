import React, { useEffect, useState } from 'react';
import CompanyInfo from "../components/CompanyInfo"; // Импортируем новый компонент


/**
 * Модуль главного экрана с информацией о компании
 * @param children - дочерние элементы
 * @returns {Element} - возвращаем компонент главного экрана
 */
export const CompanyInfoModule = ({ children }) => {

    // Состояние для информации о компании
    const [info, setInfo] = useState('');

    // Состояние для ошибки запроса
    const [error, setError] = useState(null);

    /**
     * Функция получения информации о компании
     */
    const fetchInfo = async () => {

        // Отправляем запрос для получения информации
        const response = await fetch('/api/info.json');

        // Если ответ не успешный
        if (!response.ok) {

            // Генерируем текст ошибки
            throw new Error('Ошибка при получении данных');
        }

        // Преобразуем полученные данные в JSON формат
        // Ожидаем, пока данные будут преобразованы из текста в объект JSON
        const data = await response.json();

        // Возвращаем конкретное поле 'info' из полученного объекта данных
        return data.data.info;
    };

    // Загружаем информацию о компании при монтировании компонента
    useEffect(() => {
        const loadInfo = async () => {
            try {
                const infoData = await fetchInfo();
                setInfo(infoData);
            } catch (err) {
                setError(err.message);
            }
        };
        loadInfo();
    }, []);

    // Если получаем ошибку - отображаем её
    if (error) {
        return <div className="error">{error}</div>;
    }

    // Возвращаем JSX элемент, который содержит структуру модуля информации о компании
    return <CompanyInfo text={info}>{children}</CompanyInfo>;
};