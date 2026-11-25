import ErrorBoundary from "./components/ErrorBoundary";
import AppRoutes from "./routes/AppRoutes";
import Chatbot from "./components/Chatbot/Chatbot";

function App() {
    return (
        <ErrorBoundary>
            <AppRoutes />
            <Chatbot />
        </ErrorBoundary>  
    );
}

export default App;