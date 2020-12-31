import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import '../../App.css';
import './TodoList.css';

export class TodoItem extends Component {
    //setting the todo text styles
    getStyle = () => {
        console.log("Marked complete", this.props.todo.completed," ", this.props.todo.id );
        return {
            backgroundColor: '#f4f4f4',
            color: 'black',
            padding: '10px',
            margin: '10px',
            borderBottom: '3px #ccc dashed',
            borderRadius: '30px',
            textDecoration: this.props.todo.completed ?
                'line-through' : 'none'
        }
    }

    render() {

        const {id, title, completed } =this.props.todo;
        return (
            //in-line styling needs double braces
            //.markComplete is passed a prop here so calling it will execute the
                //passed in function from TodoList.js then from App.js where its created.
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" checked={completed} onChange={()=>this.props.markComplete(id)} /> {' '}
                    {title}
                    <button onClick={()=>this.props.delTodo(id)} className={"buttonStyle"}> X </button>
                </p>
            </div>
        );
    }
}
//const can be used for in-line styling
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    Key: PropTypes.number,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
TodoItem.defaultProps={
    Key: 1
}

export default TodoItem;