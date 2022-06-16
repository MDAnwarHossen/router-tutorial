import React from 'react';
import Header from '../Header/Header';
import './CompletedProjects.css';

const CompletedProjects = (props) => {
    const {completedProject} = props;
    
   
    return (
        <div>
            <Header></Header>
            <h2>Here is Completed project list</h2>
            <div className='complete-list-area'>
            {
                completedProject.map((a)=>{
                   return <li key = {a.myKey}>{a.Title}</li>
                })
            }
            </div>
        </div>
    );
};

export default CompletedProjects;