import "./App.css";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Header from "./Components/Header/Header.jsx";
import AboutMe from "./Components/AboutMe/AboutMe.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import Tecnologies from "./Components/Tecnologies/Tecnologies.jsx";
import background from "./Images/background-pattern.png";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <AboutMe />
      <Projects />
      <Tecnologies />
    </div>
  ) 
}

export default App;
