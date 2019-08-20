import React from 'react';
import { connect } from 'react-redux';
import { AddAction, ToggleAction, DeleteAction } from '../redux/action-creators/index';

class Todo extends React.Component
{
    render ()
    {
        const { onAdd, todos, onToggle, onDelete } = this.props;
        console.log(this.props.todos)
        return (
            <div>
                <h1>Todo List</h1>
                <input ref={e => this.input = e} />
                <button onClick={() =>
                {
                    onAdd(this.input.value); this.input.value = "";
                }}>Add</button>
                <ul>
                    {todos.map((item) =>
                    {
                        return (
                            <li key={item.id} onClick={() => onToggle(item.completed, item.id)} style={{ textDecoration: item.completed ? "line-through" : "none" }}>{item.text}
                                <button onClick={() => onDelete(item.id)}>Delete</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    };
};

const mapStateToProps = state =>
{
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = dispatch =>
{
    return {
        onAdd: (text) => dispatch(AddAction(text)),
        onToggle: (completed, id) => dispatch(ToggleAction(completed, id)),
        onDelete: (id) => dispatch(DeleteAction(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);