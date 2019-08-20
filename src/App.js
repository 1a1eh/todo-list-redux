import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Todo from './pages/Todo';

export const App = () =>
{
    return (
        <div>
            <Router>
                <Route path="/" exact component={Dashboard} />
                <Route path="/todo"  component={Todo} />                
            </Router>
        </div>
    )
}