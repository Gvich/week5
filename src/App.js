import BrowserRouter from "react-router-dom/es/BrowserRouter";
import AppRouter from "./Components/AppRouter";
import NavBar from "./Components/NavBar";

import './css/style.css'
import Foot from "./Components/Foot";


function App() {
  return (
      <BrowserRouter>
          <NavBar />
          <AppRouter />
          <Foot/>
      </BrowserRouter>
  );
}

export default App;
