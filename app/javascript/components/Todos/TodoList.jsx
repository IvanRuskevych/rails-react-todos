import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('/api/v1/todos').then((response) => {
            console.log(response.data)
            setTodos(response.data)
        });
    }, []);

    const deleteTodo = (id) => {
        axios.delete(`/api/v1/todos/${id}`).then(() => setTodos(todos.filter((todo) => todo.id !== id)));
    };

    return (
        <div className="container my-5">
            <h1 className="text-center">Todo List</h1>
            <Link to="/todos/new" className="btn btn-primary mb-3">
                Add New Todo
            </Link>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{todo.title}</h5>
                            <p>{todo.description}</p>
                        </div>
                        <div>
                            <Link to={`/todos/${todo.id}/edit`} className="btn btn-warning btn-sm me-2">
                                Edit
                            </Link>
                            <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
