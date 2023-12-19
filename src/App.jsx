import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpContext from "./Context/SignUpContext";
import SignIn from "./Auth/Login/SignIn";
import NavBar from "./components/Nav/NavBar";
import Home from "./Pages/Home";
import LoginProvider from "./Context/LoginContext";
import Todo from "./Pages/Todo";

function App() {
  return (
    <div>
      <Router>
        <LoginProvider>
          <NavBar />

          <Routes>
            <Route path="/" element={<SignUpContext />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="home" element={<Home />} />
            <Route path="todo" element={<Todo />} />
          </Routes>
        </LoginProvider>
      </Router>
    </div>
  );
}

export default App;
