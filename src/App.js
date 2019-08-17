import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import About from './pages/About';
import Todo from './pages/Todo';

export const App = () =>
{
    return (
        <div style={{textAlign: "center"}}>
            <Router>
                <Route path="/" exact component={Dashboard} />
                <Route path="/contact"  component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/todo"  component={Todo} />                
            </Router>
        </div>
    )
}