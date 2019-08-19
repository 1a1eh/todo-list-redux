import React from 'react';
import { connect } from 'react-redux';
// import { todos } from '../redux/reducers/reducer';
class Todo extends React.Component
{
    render ()
    {
        console.log(this.props)
        const { onAdd } = this.props;
        return (
            <div>
                <h1>Todo List</h1>
                <input ref={e => this.input = e} />
                <button onClick={() =>
                {
                    this.props.dispatch({
                        type: "ADD",
                        text: this.input.value
                    });
                    this.input.value = '';
                }
                }>Add</button>
                <ul>
                    {this.props.todos.map((item, index) =>
                    {
                        return <li key={index}>{item.text}</li>
                    })}
                </ul>
            </div>
        )
    }
}


const mapStateToProps = state =>
{
    return {
        todos: state.todos
    }
};
const mapDispatchToProps = dispatch =>
{
    return {
        onAdd: () => dispatch({ type: "ADD", data: Todo() })
    }
};

export default connect(mapStateToProps)(Todo);