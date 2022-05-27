import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import "./app.css";
import rotatePhone from "./img/rotatePhone.png"

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <div id="turn">
        <img src={rotatePhone} alt="" />
        <h1>Please rotate your devices!</h1>
      </div>
      <div id="container">
        <Toggle />
        <Intro />
        <About />
        <ProductList />
        <Contact />
      </div>
    </div>
  );
};

export default App;
