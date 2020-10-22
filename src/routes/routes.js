import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/globals";
import {
    ChracterList,
    ChracterDetails
} from '../components/pages/';
import {
    LabelToggle
} from '../components/molecules/';

export default function App() {
    
    const [theme, setTheme] = useState(lightTheme);
    const [toggleTheme, setToggleTheme] = useState(true);
    const [themeText, setThemeText] = useState('Light');

    useEffect(()=> {
        setTheme(toggleTheme ? lightTheme : darkTheme);
        setThemeText(toggleTheme ? 'Light' : 'Dark');
    },[toggleTheme]);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <LabelToggle
                label={themeText}
                checked={toggleTheme}
                idToggle='theme'
                forLabel='theme'
                onChange={() => setToggleTheme(!toggleTheme)}
            />
            <Router>
                <Switch>
                    <Route path='/' exact={true} component={ChracterList} />
                    <Route path='/details/:id' component={ChracterDetails} />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}
