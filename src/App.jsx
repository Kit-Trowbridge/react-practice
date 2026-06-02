import Hello from "./components/Hello";
import Profile from "./components/Profile";
import Product from "./components/Product"
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";

function App() {
  return (
    <>
      <Hello name="World" />
      <img className="logo" src={makersLogo}></img>
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
