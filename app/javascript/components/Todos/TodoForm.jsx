import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const TodoForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState({ title: '', description: '', due_date: '', status: '' });

    useEffect(() => {
        if (id) {
            axios.get(`/api/v1/todos/${id}`).then((response) => {
                console.log(response.data)
                setTodo(response.data)
            });
        }
    }, [id]);

    const handleChange = (e) => {
        setTodo({ ...todo, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const method = id ? 'patch' : 'post';
        const url = id ? `/api/v1/todos/${id}` : '/api/v1/todos';
        axios[method](url, {...todo})
            .then(() => navigate('/todos'))
            .catch((error) => console.error(error));
    };


    return (
        <div className="container my-5">
            <h1>{id ? 'Edit Todo' : 'New Todo'}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={todo.title}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        name="description"
                        className="form-control"
                        value={todo.description}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Due Date</label>
                    <input
                        type="date"
                        name="due_date"
                        className="form-control"
                        value={todo.due_date}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select
                        name="status"
                        className="form-select"
                        value={todo.status}
                        onChange={handleChange}
                    >
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-success">
                    Save
                </button>
            </form>
        </div>
    );
};

export default TodoForm