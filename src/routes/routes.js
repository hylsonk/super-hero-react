import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/globals";
import { useLocalStorage } from '../store/localStorage'
import {
    ChracterList,
    ChracterDetails
} from '../components/pages/';
import {
    LabelToggle
} from '../components/molecules/';

export default function App() {
    
    const [theme, setTheme] = useState(lightTheme);
    const [toggleTheme, setToggleTheme] = useLocalStorage('lightMode', true);
    const [themeText, setThemeText] = useState('Light');

    useEffect(() => {
        if(toggleTheme) {
            setTheme(lightTheme);
            setThemeText('Light');
        } else {
            setTheme(darkTheme);
            setThemeText('Dark');
        }
    },[toggleTheme])

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <LabelToggle
                label={themeText}
                checked={toggleTheme}
                idToggle='theme'
                forLabel='theme'
                onChange={() => setToggleTheme(!toggleTheme)}
                classNameLabel='label'
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
