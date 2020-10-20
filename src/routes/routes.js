import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { 
    ChracterList,
    ChracterDetails
} from '../components/pages/';

export default function App() {
    
    return (
        <Router>
          <Switch>
              <Route path='/' exact={true} component={ChracterList}/>
              <Route path='/details/:id' component={ChracterDetails}/>
          </Switch>
        </Router>
    )
}

