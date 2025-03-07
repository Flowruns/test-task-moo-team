import LayoutPage from "./LayoutPage";
import ProfileModule from "../modules/ProfileModule";


/**
 * Страница профиля пользователя
 * @returns {JSX.Element} - возвращаем JSX элемент, представляющий страницу профиля пользователя
 */
const ProfilePage = () => {

    /**
     * Функция обновления страницы
     */
    const handleProfileClick = () => {

        // Перенаправляем пользователя на нужный маршрут
        window.location.href = '/profile';
    };

    // Возвращаем JSX элемент, который содержит структуру страницу профиля пользователя
    return (
        <LayoutPage onProfileClick={handleProfileClick}>
            <ProfileModule />
        </LayoutPage>
    );
};

// Экспортируем страницу ProfilePage
export default ProfilePage;