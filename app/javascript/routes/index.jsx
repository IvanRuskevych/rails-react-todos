import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import TodoList from "../components/Todos/TodoList";
import TodoForm from "../components/Todos/TodoForm";

export default (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<TodoList />} />
            <Route path="/todos/new" element={<TodoForm />} />
            <Route path="/todos/:id/edit" element={<TodoForm />} />
        </Routes>
    </Router>
);