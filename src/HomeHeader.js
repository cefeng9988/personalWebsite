import React from "react";
import {Link} from 'react-router-dom';
import './App.css';

const HomeHeader = () => {
    return (
        <div id={"homeHeader"}>
            <Link className={"homeHeaderTitle"} to={'/'}> Chen Eric Feng </Link>
            <div id={"routeTextFlex"}>
                <Link className={"routeTextStyle"} to={'/'}> Home </Link>
                <Link className={"routeTextStyle"} to={'/Experiences'}> Experiences </Link>
                <Link className={"routeTextStyle"} to={'/CV/Education'}> CV / Education </Link>
                <Link className={"routeTextStyle"} to={'/AboutMe'}> About Me </Link>
            </div>
        </div>
    )
}

export default HomeHeader;