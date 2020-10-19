import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import api from '../services/api';
import { ChracterList } from '../components/pages/';

export default function App() {
    
    load()
    

    return (
        <Router>
          <ChracterList/>
        </Router>
    )
}

export const load = () =>{
    api.get('70')
        .then((response) => console.log(response))
        .catch((err) => {
            console.error(err);
        });
}

