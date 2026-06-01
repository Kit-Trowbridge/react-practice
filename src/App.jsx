import Hello from "./components/Hello";
import Profile from "./components/Profile";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";

function App() {
  return (
    <>
      <Hello name="World" />
      <img className="logo" src={makersLogo}></img>
      <Profile />
    </>
  );
}

export default App;
