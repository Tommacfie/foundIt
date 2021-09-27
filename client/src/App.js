import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Layouts from './components/navigational/layouts.component';

// export const myContext = React.createContext('hello');

const App = () => {

  return (
    <Router>
      <Layouts />
    </Router>
  );
};

export default App;
