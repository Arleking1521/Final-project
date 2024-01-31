import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import Header from "./Components/Header";
import "./style/style.css"
import Footer from "./Components/Footer";




function App() {
  return (
      <BrowserRouter>
          <Header/>
          <div className="main">
              <AppRouter/>
          </div>
          <Footer/>
      </BrowserRouter>

  );
}

export default App;
