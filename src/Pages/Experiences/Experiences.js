import React from 'react';
import './experiences.css';
import {Link} from "react-router-dom";

const Experiences = () => {
    return (
        <>
            <div className={'spacer'}></div>
            <div id={'linkRowGriding'}>
                <Link className={'sweLink'} to={'/Experiences/SWE-Internships'}> Software Engineering Internships </Link>
                <Link className={'portfolioLink'}> Equities Portfolio Management </Link>
                <Link className={'designLink'}> Website Design </Link>
            </div>
            <div className={'spacer'}></div>
            <div id={'linkRowGriding'}>
                <Link className={'hackathonLink'}> Hackathon Projects </Link>
                {/*<Link className={'projManLink'}> Project Management </Link>*/}
                <div className={'comingSoonLink'}> Coming Soon </div>
                <div className={'comingSoonLink'}> Coming Soon </div>
            </div>
        </>
    )
}

export default Experiences;