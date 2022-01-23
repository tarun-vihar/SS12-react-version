import logo from "./logo.svg";
import "./App.css";
import "./css/bootstrap.min.css";

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import HomeScreen from "./Screens/HomeScreen";
import Header from "./Component/Header";
import Building from "./Screens/Building";
import BuildingScreen from "./Screens/BuildingScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact></Route>
            <Route path="/building/:id" element={<BuildingScreen />}></Route>
          </Routes>
        </Container>
      </main>
    </Router>
  );
}

export default App;
