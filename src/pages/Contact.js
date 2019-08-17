import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Contact extends React.Component
{
    render ()
    {
        const { counter, onMinus } = this.props;
        return (
            <div>
                <h1>Contact</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/todo">Todo</Link></li>
                </ul>
                <h3>Counter: {counter}</h3>
                <button onClick={onMinus}>Minus</button>
            </div>
        )
    }
}


const mapStateToProps = state =>
{
    return {
        counter: state.Reducer.counter
    }
};
const mapDispatchToProps = dispatch =>
{
    return {
        onPlus: () => dispatch({ type: "PLUS" }),
        onMinus: () => dispatch({ type: "MINUS" })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);