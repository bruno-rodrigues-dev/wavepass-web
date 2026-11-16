import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Cadastro from '../pages/Cadastro/Cadastro'
import ErrorBoundary from '../components/ErrorBoundary'
import Erro from "../pages/Erro/Erro"
import NotFound from "../pages/NotFound/NotFound"
import Home from "../pages/Home/Home";;

function AppRoutes() {
    return (
        <ErrorBoundary>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/erro" element={<Erro />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ErrorBoundary>
    )
}

export default AppRoutes