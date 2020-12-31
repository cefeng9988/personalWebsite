import TodoHeader from './TodoHeader';
import React from "react";
import { Route } from 'react-router-dom';
import TodoList from "./TodoList";
import About from "./About";
import './TodoList.css';

const TodoListComponent = () => {
    return(
        <div className={'TodoListComponent'}>
            <TodoHeader/>
            <div className={'todoListContainer'}>
                <Route
                    exact path='/Experiences/SWE-Internships' component={TodoList}
                />
                <Route
                    path='/Experiences/SWE-Internships/about' component={About}
                />
            </div>
        </div>
    )
}

export default TodoListComponent;

