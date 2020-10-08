import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
    return (
    <div className="App">
        <BrowserRouter>
            
            <Switch>

                <Route exact path="/" component={HomePage} />
            
                <Route path="/home" component={HomePage} />
            
                <Route path="/about" component={AboutPage} />

                <Route path="/portfolio" component={PortfolioPage} />
            
                <Route path="/contact" component={ContactPage} />
            
            </Switch>
            
        </BrowserRouter>
        
    </div>
    );
}

export default App;
