import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Cadastro from '../pages/Cadastro/Cadastro'
import ErrorBoundary from '../components/ErrorBoundary'
import Erro from "../pages/Erro/Erro"
import NotFound from "../pages/NotFound/NotFound"
import Home from "../pages/Home/Home"
import Evento from "../pages/Evento/Evento";;

function AppRoutes() {
    return (
        <ErrorBoundary>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/erro" element={<Erro />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/evento/:id" element={<Evento />} />
            </Routes>
        </ErrorBoundary>
    )
}

export default AppRoutes



