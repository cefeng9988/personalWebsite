import React,{Component} from 'react'
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import './TodoList.css';

export class AddTodo extends Component {
    state={
        title:''
    }

    onSubmit = (e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }

    //target.value here is pulling the value directly from input after onChange
    //is triggered and sets our state
    //the value variable is a regular variable stating the state's value
    onChange=(e)=>this.setState({ [e.target.name]: e.target.value });

    render(){
        return(
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input
                    type='text'
                    name='title'
                    style={{flex: '9', padding:'5px'}}
                    placeholder='Add Todo ...'
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type='submit'
                    value='Submit'
                    className='btn'
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

TodoItem.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export default AddTodo;