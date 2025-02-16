import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import NotFound from "./pages/not_found/NotFound.tsx";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";

function App() {
    return (
      <Routes>
        <Route
          path="/portfolio/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  }

export default App;
