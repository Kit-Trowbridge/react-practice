import Hello from "./components/Hello";
import Profile from "./components/Profile";
import Product from "./components/Product";
import TypeLogger from "./components/TypeLogger";
import ClickListener from "./components/ClickListener";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";

function App() {
  return (
    <>
      <TypeLogger />
      <Hello name="World" />
      <img className="logo" src={makersLogo}></img> <br />
      <ClickListener />
      <Profile 
        name="Quackie Makers"
        job="Makers' favourite rubber duck"
        birthdate="2013"
      />
      <Product 
        name="Air Fryer K2000"
        description="The best air fryer to fry all things, even Mars bars"
        price={2000}
      />
    </>
  );
}

export default App;
