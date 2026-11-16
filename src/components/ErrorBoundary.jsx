import { Component } from "react";
import Erro from "../pages/Erro/Erro";

class ErrorBoundary extends Component {
    state = { temErro: false };

    static getDerivedStateFromError() {
        return { temErro: true };
    }

    componentDidCatch(erro, info) {
        console.error(erro, info);
    }

    render() {
        if (this.state.temErro) return <Erro />;
        return this.props.children;
    }
}

export default ErrorBoundary;