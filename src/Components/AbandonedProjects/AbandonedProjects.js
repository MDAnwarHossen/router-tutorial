import React from 'react';
import Header from '../Header/Header';
import './AbandonedProjects.css';

const AbandonedProjects = (props) => {
    const {deletedProject, setDeletedProject, todo, setTodo} = props;
    const handleRetrieve = (key) =>{
        const findItem = deletedProject.find((a)=>{
            return a.myKey === key;
        });
        setTodo([...todo, findItem]);
        const filterItem = deletedProject.filter((a)=>{
            return a.myKey !== key;
        });
        setDeletedProject(filterItem);
    }
    return (
        <div>
            <Header></Header>
            <h2>Here is Abandoned Projects list</h2>
            <div className='delete-list-area'>
            {
                deletedProject.map((a)=>{
                    return <li key = {a.myKey}><button onClick = {()=>handleRetrieve(a.myKey)}>Retrieve</button><span className='span'>{a.Title}</span></li>
                })
            }
            </div>
        </div>
    );
};

export default AbandonedProjects;