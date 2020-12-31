import React, {Component} from 'react';
import TodoItem from './TodoItem'
import AddTodo from "./AddTodo";

export class TodoList extends Component {
    state = {
        todos: [
            {
                id: 4,
                title: 'Take out the trash',
                completed: false
            },
            {
                id: 3,
                title: 'Morning stand-up meeting',
                completed: false
            },
            {
                id: 2,
                title: 'Water the plants',
                completed: false
            },
            {
                id: 1,
                title: 'Plan for dinner',
                completed: false
            }
        ]
    }

    //toggle completed
    markComplete = (id)=>{
        const found = this.state.todos.find((todo) =>todo.id===id); //.find() works on an array where you
        //match an index with the attributes after the arrow
        const foundIndex = this.state.todos.indexOf(found);

        //making a copy of todos then changing one index and setting state=newTodos
        const newTodos = this.state.todos.slice()
        newTodos[foundIndex].completed = !newTodos[foundIndex].completed

        this.setState({ todos: newTodos } );
    }

    //delete todo
    delTodo = (id)=>{
        const newState = this.state;
        const filteredTodos = newState.todos.filter(todo=>todo.id !== id);
        this.setState( {todos: filteredTodos } )

        console.log(this.state);
    }

    //add todo
    addTodo = (title)=>{
        const newTodo={
            id: (this.state.todos.length === 0)? 0 : this.state.todos[0].id + 1,
            title: title,
            completed: false
        }
        //the spread operator here works to incorporate everything already existing
        //in the array to our new array
        this.setState({todos: [newTodo, ...this.state.todos]});
    }


    render() {
        //the todo is just a variable representing each mapped element in todos
        //each time the prop is passed in it executes the Todoitem component
        console.log(this.state.todos);
        return (
            <>
                < AddTodo
                    addTodo = {this.addTodo}
                >
                    Correct Todo Test
                </AddTodo>
                <>
                { this.state.todos.map((todo)=>(
                     < TodoItem Key={todo.id}
                       todo={ todo }
                       markComplete={this.markComplete}
                       delTodo={this.delTodo}
                    />
                 ))
                }
                </>
            </>
        )
    }
}

export default TodoList;