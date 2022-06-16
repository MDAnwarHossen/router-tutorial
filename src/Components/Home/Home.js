import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import AbandonedProjects from '../AbandonedProjects/AbandonedProjects';
import CompletedProjects from '../CompletedProjects/CompletedProjects';
import Todo from "../Todo/Todo";

const Home = () => {
    const [todo, setTodo] = useState([]);
    const [completedProject, setCompletedProject] = useState([]);
    const [deletedProject, setDeletedProject] = useState([]);
    return (
        <div>
            <Routes>
                <Route path="/" element={<Todo todo = {todo} setTodo = {setTodo} completedProject = {completedProject} setCompletedProject = {setCompletedProject} deletedProject = {deletedProject} setDeletedProject = {setDeletedProject}/>} />
                <Route path="cp" element={<CompletedProjects completedProject = {completedProject}/>}/>
                <Route path="ap" element={<AbandonedProjects deletedProject = {deletedProject} setDeletedProject = {setDeletedProject} todo = {todo} setTodo = {setTodo}/>}/>
            </Routes>
        </div>
    );
};

export default Home;