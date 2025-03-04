import React from 'react';
import LayoutPage from "./LayoutPage";
import CompanyInfoModule from "../modules/CompanyInfoModule";


/**
 * Страница с информацией о компании (главная страница)
 * @returns {Element} - возвращаем JSX элемент, представляющий страницу информации о компании
 */
function CompanyPage() {

    // Возвращаем JSX элемент, который содержит структуру страницы информации о компании
    return (
        <LayoutPage>
            <CompanyInfoModule />
        </LayoutPage>
    );
}

// Экспортируем страницу CompanyPage
export default CompanyPage;