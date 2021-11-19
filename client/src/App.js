import { BrowserRouter as Router } from "react-router-dom";
import Layouts from "./components/navigational/layouts.component";
import "./scss/layouts/App.scss";

const App = () => {
  return (
    <div className='app'>
    <Router>
      <Layouts />
      </Router>
      </div>
  );
};

export default App;
