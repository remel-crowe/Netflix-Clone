import "./App.css";
import HomeScreen from "./pages/Homescreen";
import LoginScreen from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = null;
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />}></Route>
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
