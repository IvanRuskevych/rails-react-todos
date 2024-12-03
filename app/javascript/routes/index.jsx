import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";

export default (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<p>Todos </p>} />
            <Route path="/todos/new" element={<p>New TodoForm</p>} />
            <Route path="/todos/:id/edit" element={<p>Edit TodoForm</p>} />
        </Routes>
    </Router>
);