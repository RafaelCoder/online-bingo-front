import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Matches from "./pages/Matches";

export default function AppRouter() {
  return (
    <Router>
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/matches" element={<Matches />}></Route>
        </Routes>
      </main>
    </Router>
  );
}
