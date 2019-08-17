import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Todo extends React.Component
{
    state = {
        input: ""
    }
    render ()
    {
        const { onAdd } = this.props;
        console.log(this.props)
        return (
            <div>
                <h1>Todo List</h1>
                <ul>
                    <li>
                        <Link to="/about">
                            About
                    </Link>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>
                        <Link to="/todo">
                            Todo
                    </Link>
                    </li>
                </ul>
                <div>
                    <ul>
                        {/* {this.props} */}
                    </ul>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state =>
{
    return {
        input: state.Reducer.input
    }
};
const mapDispatchToProps = dispatch =>
{
    return {
        onAdd: () => dispatch({ type: "ADD" })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);