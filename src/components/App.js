import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';

const App = () => {
    return ( 
        <Router>
            <div>
            <ul className="ui three item menu">
                <li className="item"><NavLink to="/">Home</NavLink> </li>
                <li className="item"><NavLink to="/deposit">Deposit</NavLink> </li>
                <li className="item"><NavLink to="/withdraw">Withdraw</NavLink> </li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route exact path="/withdraw" component={Withdraw} />
            <Route exact path="/deposit" component={Deposit} />
            </div>
        </Router>
       
     );
}
 
export default App;