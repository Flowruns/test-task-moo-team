import React, { useEffect, useState } from 'react';
import {Avatar, Box, Typography} from "@mui/material";
import owlAvatar from '../owlAvatar.png';
import {fetchUserProfile} from "../services/UserProfileService";
import Button from "../UI/Button";


/**
 * Модуль для профиля пользователя
 * @returns {Element} - возвращаем модуль профиля пользователя
 */
const ProfileModule = () => {

    // Состояние для имени пользователя
    const [fullname, setFullname] = useState('');

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
                setFullname(''); // Устанавливаем пустую строку в случае ошибки
            }
        };

        getUserProfile();
    }, []);

    // Возвращаем JSX элемент, который содержит структуру модуля профиля пользователя
    return (
        <Box sx={{ display: "flex", justifyContent: 'left', alignItems: 'center', mt: 3, ml: 3}}>
            <Avatar
                src={owlAvatar}
                sx={{
                    width: { xs: 60, md: 80, lg: 120 },
                    height: { xs: 60, md: 80, lg: 120},
                    alignSelf: 'center',
                    mr: 5
                }}
            />

            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', height: '100%' }}>
            <Typography sx={{ fontSize: '60px', mt: 0, mb: 1 }}>
                Welcome, {fullname}!
            </Typography>
                <Button filled={true} text={'Update'}/>
            </Box>
        </Box>
    );
};

// Экспортируем модуль ProfileModule
export default ProfileModule;