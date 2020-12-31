import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Experiences from "./Pages/Experiences/Experiences";
import Home from "./Pages/Home/Home";
import HomeHeader from "./HomeHeader";
import './App.css';
import LibertyInternship from "./Pages/Experiences/LibertyInternship/LibertyInternship";

export class App extends Component {
//every return can only have 1 child, every child needs 1 parent
    render() {
        return (
            <Router>
                <HomeHeader/>

                <Route exact path='/' component={Home}/>
                <Route exact path='/Experiences' component={Experiences}/>

                <Route path='/Experiences/SWE-Internships' component={LibertyInternship}/>

                <div className={"phantomFooter"}/>
                <div className="footer">
                        <p className={"footerText"}>
                            © 2020 Chen Eric Feng, Liberty Mutual Intern
                        </p>
                </div>
            </Router>
        );
    }
}

export default App;