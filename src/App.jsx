import Profile from "./components/Profile";
import Product from "./components/Product";
import TypeLogger from "./components/TypeLogger";
import ClickListener from "./components/ClickListener";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <>
      {/* <TypeLogger /> <br />
      <ClickListener /> */}
      {/* <Profile 
        name="Quackie Makers"
        job="Makers' favourite rubber duck"
        birthdate="2013"
      /> */}
      {/* <Product 
        name="Air Fryer K2000"
        description="The best air fryer to fry all things, even Mars bars"
        price={2000}
      /> */}
      <Counter />
    </>
  );
}

export default App;
