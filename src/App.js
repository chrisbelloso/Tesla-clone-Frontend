import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MainView from "./views/MainView";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={ <MainView /> } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
