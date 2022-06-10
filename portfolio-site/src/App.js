import Navbar from './Navbar';
import Home from './Home';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import PostDetails from './PostDetails';
import NotHere from './NotHere';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/posts/:id">
              <PostDetails />
            </Route>
            <Route path="*">
              <NotHere />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
