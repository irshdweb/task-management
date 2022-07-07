import { BrowserRouter, Routes, Route } from "react-router-dom";
import './scss/style.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Task from "./pages/Task";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="" element={<Task />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
