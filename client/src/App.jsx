import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizPage from "./pages/QuizBody/QuizBody";
import Categories from "./pages/Category/Category";
import Tracker from "./pages/Tracker/Tracker";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Categories />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/tracker" element={<Tracker />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
