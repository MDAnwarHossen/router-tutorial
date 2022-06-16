import React, { useState } from 'react';
import Header from '../Header/Header';
import "./Todo.css";

const Todo = (props) => {
    const {todo, setTodo, completedProject, setCompletedProject, deletedProject, setDeletedProject} = props;
    
    const initialState = {Title: '', isCompleted: false};
    const [text, setText] = useState(initialState);
    const handleText = (e) => {
        e.preventDefault();
        const duplicateText = {...text};
        duplicateText[e.target.name] = e.target.value;
        duplicateText.myKey = new Date() * 1;
        setText(duplicateText);
    }
    const handleClick = () =>{
        setTodo([...todo, text]);
        setText(initialState);
    }
    const handleComplete = (key) =>{
        const dupliArray = [...todo];
        const findObject = dupliArray.find((a)=>{
            return a.myKey === key
        });
        findObject.isCompleted = true;
        setTodo(dupliArray);
        const isFound = completedProject.findIndex((a)=>{
            return a.myKey === findObject.myKey;
        });
        if (isFound < 0 && findObject.isCompleted ===true) {
            setCompletedProject([...completedProject, findObject])
         }  
    }
    const handleDelete = (key) =>{
        const dupliArray = [...todo];
        const filteredItems = dupliArray.filter((a)=>{
            return a.myKey !== key;
        });
        const findItem = dupliArray.find((a)=>{
            return a.myKey === key;
        })
        if (findItem.isCompleted === false) {
            setDeletedProject([...deletedProject, findItem]) 
        }
        setTodo(filteredItems);
    }
    return (
        <div>
            <Header></Header>
            <h2>Make a Todo list</h2>
            <input type="text" name="Title" value = {text.Title} placeholder='write here' onChange={handleText}/>
            <input type="button" value="Submit" onClick={handleClick}/>

            <div className='list-area'>
                {todo.sort((a, b)=>{
                    let myNumber = 0;
                    if (a.Title === b.Title && a.isCompleted === b.isCompleted) {
                    myNumber = 0;
                    }else if(a.Title > b.Title && a.isCompleted > b.isCompleted){
                    myNumber = 1;
                    }else if (a.Title < b.Title && a.isCompleted > b.isCompleted) {
                    myNumber = 1;
                    }
                    else if (a.Title > b.Title && a.isCompleted < b.isCompleted) {
                    myNumber = -1;
                    }
                    else if (a.Title < b.Title && a.isCompleted < b.isCompleted) {
                    myNumber = -1;
                    }
                    else if (a.Title < b.Title && a.isCompleted === b.isCompleted) {
                    myNumber = -1;
                    }
                return myNumber; 
                }).map((a)=>{
                    let output
                    if (a.Title.length > 1) {
                        if (a.isCompleted === true) {
                            output = <li key={a.myKey}><button onClick={()=>{handleDelete(a.myKey)}}>Delete</button> <button>Complete</button><span className='span delete'> <del>{a.Title}</del></span></li>
                          }else{
                            output = <li key={a.myKey}><button onClick={()=>{handleDelete(a.myKey)}}>Delete</button> <button onClick={() => handleComplete(a.myKey)}>Complete</button><span className='span'> {a.Title}</span></li>
                          }
                    }
                    return output;
                })}
            </div>
        </div>
    );
};
export default Todo;