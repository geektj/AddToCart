import './App.css';
import Home from '../src/components/container/home';
import ItemDesc from './components/itemdesc';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header';
import Cart from './components/cart';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/:category/:productId" component={ItemDesc}/>
            <Route path="/cart" component={Cart} />
          </Switch>     
        </div>
      </Router>
      {/* <Home /> */}
    </div>
  );
}

export default App;
