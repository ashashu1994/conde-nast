import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/home";
import './assets/main.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
