//function based component
import React from 'react';
import './TodoList.css'
import {Link} from 'react-router-dom';

const TodoHeader=() =>{
    return (
        <div className='todoHeaderStyle'>
            <h1> Todo List </h1>
            <Link className={'linkStyle'} to={'/Experiences/SWE-Internships'}>Todo List</Link> | <Link className={'linkStyle'} to={'/Experiences/SWE-Internships/about'}>About</Link>
        </div>
    )
}

export default TodoHeader;