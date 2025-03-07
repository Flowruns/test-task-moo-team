import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import CompanyPage from "./pages/CompanyPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";

function App() {

    // Возвращаем JSX элемент, который содержит структуру приложения
    return (
        <BrowserRouter basename="/test-task-owlApp">
            <Routes>
                <Route path="/" element={<Navigate to="/info" />} />
                <Route path="/info" element={<CompanyPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    );
}

// Экспортируем компонент App
export default App;