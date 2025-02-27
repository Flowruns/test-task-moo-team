import React, { useState } from 'react';
import './App.css';
import {CompanyInfoModule} from "./modules/CompanyInfoModule";

// Страница о компании
function App() {

    // Возвращаем JSX элемент, который содержит структуру страницы информации о компании
    return (
        <div className="App">
            <h1>Company Info</h1>
            <CompanyInfoModule>
                <p>Дополнительная информация о компании</p>
            </CompanyInfoModule>
        </div>
    );
}

// Экспортируем страницу о компании
export default App;