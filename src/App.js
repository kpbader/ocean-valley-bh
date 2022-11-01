import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/home";
import Nav from "./components/Nav/nav";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/ocean-valley-bh" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
