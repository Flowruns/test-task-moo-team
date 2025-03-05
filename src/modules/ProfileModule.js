import React, { useEffect, useState } from 'react';
import {Avatar, Box, Typography} from "@mui/material";
import owlAvatar from '../owlAvatar.png';
import {fetchUserProfile} from "../services/UserProfileService";
import Button from "../UI/Button";
import RequestingWindow from "../components/RequestingWindow";
import {fetchQuotes} from "../services/QuotesService";
import {fetchAuthors} from "../services/AuthorsService";


/**
 * Модуль для профиля пользователя
 * @returns {Element} - возвращаем модуль профиля пользователя
 */
const ProfileModule = () => {

    // Состояние для имени пользователя
    const [fullname, setFullname] = useState('');

    // Состояние модального окна - по умолчанию закрыто
    const [modalOpen, setModalOpen] = useState(false);

    // Состояния для шагов обновления, идентификатора запроса, случайного автора и цитаты
    const [steps, setSteps] = useState(
        [{ message: 'requesting author ...', completed: false }, { message: 'requesting quote ...', completed: false }]);

    // Инициализируем состояние для хранения идентификатора таймера
    const [requestId, setRequestId] = useState(null);

    // Инициализируем состояние для случайного автора
    const [randomAuthor, setRandomAuthor] = useState(null);

    // Инициализируем состояние для случайной цитаты
    const [randomQuote, setRandomQuote] = useState(null);

    /**
     *  Функция для получения случайного автора и цитаты
     * @param authors - массив авторов
     * @param quotes - массив цитат
     */
    const getRandomAuthorAndQuote = (authors, quotes) => {

        // Генерируем случайный индекс для автора
        const randomAuthorIndex = Math.floor(Math.random() * authors.length);

        // Генерируем случайный индекс для цитаты
        const randomQuoteIndex = Math.floor(Math.random() * quotes.length);

        // Устанавливаем случайного автора в состояние
        setRandomAuthor(authors[randomAuthorIndex]);

        // Устанавливаем случайную цитату в состояние
        setRandomQuote(quotes[randomQuoteIndex]);
    };

    // Обработчик нажатия кнопки обновления
    const handleUpdateClick = async () => {

        // Открываем модальное окно
        setModalOpen(true);

        // Сбрасываем состояние шагов к "не завершено"
        setSteps(prevSteps => prevSteps.map((step, index) => ({ ...step, completed: false })));

        // Устанавливаем таймер для выполнения запросов через 5 секунд
        const authorRequestId = setTimeout(async () => {

            // Получаем запросом авторов
            const authorsData = await fetchAuthors();

            // Получаем запросом цитаты
            const quotesData = await fetchQuotes();

            // Если пришли успешные ответы из запросов
            if (authorsData.success && quotesData.success) {

                // Вызываем функцию рандомного выбора автора и цитаты
                getRandomAuthorAndQuote(authorsData.data.authors, quotesData.data.quotes);

                // Отмечаем первый шаг как завершенный
                setSteps(prevSteps => prevSteps.map((
                    step, index) => index === 0 ? { ...step, completed: true } : step));

                // Отмечаем второй шаг как завершенный
                setSteps(prevSteps => prevSteps.map((
                    step, index) => index === 1 ? { ...step, completed: true } : step));

                // Закрываем модалку через 2 секунды
                setTimeout(() => {

                    // Закрываем модальное окно
                    setModalOpen(false);
                }, 2000);
            }
        }, 5000);

        // Сохраняем идентификатор таймера в состояние
        setRequestId(authorRequestId);
    };

    // Обработчик нажатия кнопки отмены
    const handleCancelClick = () => {

        // Проверяем, установлен ли ID таймера
        if (requestId) {

            // Очищаем таймер, если он установлен
            clearTimeout(requestId);
        }

        // Закрываем модальное окно
        setModalOpen(false);
    };


    // Хук useEffect для загрузки информации о пользователе,
    // срабатывающий при монтировании компонента
    useEffect(() => {
        const getUserProfile = async () => {
            try {

                // Делаем запрос на сервер для получения информации о пользователя
                const profile = await fetchUserProfile();

                // Устанавливаем имя пользователя в состояние
                setFullname(profile.fullname);
            } catch {

                // Устанавливаем пустую строку в случае ошибки
                setFullname('');
            }
        };

        // Вызываем функцию для получения профиля
        getUserProfile();
    }, []);

    // Возвращаем JSX элемент, который содержит структуру модуля профиля пользователя
    return (
        <Box sx={{ display: "flex", justifyContent: 'flex-start', alignItems: 'top', mt: 3, ml: 3}}>

            <Avatar
                src={owlAvatar}
                sx={{
                    width: { xs: 80, md: 100, lg: 130 },
                    height: { xs: 80, md: 100, lg: 130 },
                    mt: 2,
                    mr: 3
                }}
            />

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', height: '100%' }}>
                <Typography sx={{ fontSize: '60px', mt: 0, mb: 1 }}>
                    Welcome, {fullname}!
                </Typography>
                <Button filled={true} text={'Update'} onClick={handleUpdateClick} />

                <Box sx={{ mt: 2, height: '100px', overflow: 'hidden' }}>
                    {randomAuthor && randomQuote ? (
                        <>
                            <Typography variant="h6">{randomAuthor.name}</Typography>
                            <Typography variant="body1">"{randomQuote.quote}"</Typography>
                        </>
                    ) : (
                        <Typography variant="h6" sx={{ visibility: 'hidden' }}>Loading...</Typography>
                    )}
                </Box>
            </Box>

            <RequestingWindow steps={steps} handleClose={handleCancelClick} open={modalOpen} />
        </Box>
    );
};

// Экспортируем модуль ProfileModule
export default ProfileModule;

