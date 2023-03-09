import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  
  return (
    <div>
      <Route exact path={"/"} render={() => <HomePage/>} ></Route>
    </div>
  );
}

export default App;
