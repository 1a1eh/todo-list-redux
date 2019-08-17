import React from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends React.Component
{
    render ()
    {
        return (
            <div>
                <h1>Dashboard</h1>
                <ul>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                    <Link to="/todo">
                        <li>TodoList</li>
                    </Link>
                </ul>
            </div>
        )
    }
}