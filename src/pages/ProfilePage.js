import LayoutPage from "./LayoutPage";
import ProfileModule from "../modules/ProfileModule";


/**
 * Страница профиля пользователя
 * @returns {Element} - возвращаем JSX элемент, представляющий страницу профиля пользователя
 */
const ProfilePage = () => {

    // Возвращаем JSX элемент, который содержит структуру страницу профиля пользователя
    return (
        <LayoutPage>
            <ProfileModule />
        </LayoutPage>
    );
};

// Экспортируем страницу ProfilePage
export default ProfilePage;