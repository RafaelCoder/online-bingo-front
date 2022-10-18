import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Matches from "./pages/Matches";
import Matche from "./pages/Match";
import NotFound from "./pages/NotFound";

export default function AppRouter() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<Home />} />
            <Route path="matches" element={<Matches />} />
            <Route path="match/:id" element={<Matche />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </Router>
  );
}
