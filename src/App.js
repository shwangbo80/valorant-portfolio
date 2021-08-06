import MainComponent from './Components/MainComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <MainComponent />
      </div>
    </Router>
  );
}

export default App;
