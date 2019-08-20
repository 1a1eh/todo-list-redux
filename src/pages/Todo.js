import React from 'react';
import { connect } from 'react-redux';
class Todo extends React.Component
{
    render ()
    {
        const { onAdd, todos, onToggle } = this.props;
        console.log(this.props.todos);

        return (
            <div>
                <h1>Todo List</h1>
                <input ref={e => this.input = e} />
                <button onClick={() =>
                {
                    let todoId = new Date().getTime();
                    onAdd(this.input.value, todoId); this.input.value = "";
                }}>Add</button>
                <ul>
                    {todos.map((item) =>
                    {
                        return <li key={item.id} onClick={() => onToggle(item.completed, item.id)} style={{textDecoration: item.completed ? "line-through": "none"}}>{item.text}</li>
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
        onAdd: (text,id) => dispatch({ type: "ADD", text, id}),
        onToggle: (completed,id) => dispatch({type: "TOGGLE", completed, id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);