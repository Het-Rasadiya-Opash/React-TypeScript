import "./App.css";
import FunctionalComp from "./components/FunctionalComp";
import PropsType from "./components/PropsType";
import ReusableComponent from "./components/ReusableComponent";
import UseStateType from "./components/useStateType";

const App = () => {
  return (
    <>
      <FunctionalComp />
      <PropsType name="het" age={22} isAdmin={true} />
      <UseStateType />
      <br />
      <ReusableComponent
        text="Click Me"
        color="red"
        onClick={() => alert("Hii...")}
      />
    </>
  );
};

export default App;
