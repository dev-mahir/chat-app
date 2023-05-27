import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Conversation from "./components/Chat/Conversation";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />}>
					<Route path="/:ff" element={<Conversation />}></Route>
				</Route>
				<Route path="/login" element={<LoginPage />}></Route>
				<Route path="/register" element={<RegisterPage />}></Route>
			</Routes>
		</>
	);
}

export default App;
