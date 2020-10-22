import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";
import { GlobalStyles } from "../styles/globals";
import {
    ChracterList,
    ChracterDetails
} from '../components/pages/';
import {
    Button
} from '../components/atoms/';

export default function App() {
    
    const [theme, setTheme] = useState(lightTheme);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Button
                onClick={() => chooseTheme(theme, setTheme)}
                label='Change mode'
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

export const chooseTheme = (theme, setTheme) => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
}
