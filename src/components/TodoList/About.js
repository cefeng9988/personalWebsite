import React from 'react'
import './TodoList.css'

function About() {
    return(
        <React.Fragment>
            <h1 className={'aboutPageHeader'}>About</h1>
            <p className={'aboutPage'}>This is my Todo List</p>
            <p className={'aboutPage'}>v1.5.0</p>
            <p className={'aboutPage'}>by Eric Feng</p>
        </React.Fragment>
    )
}

export default About;