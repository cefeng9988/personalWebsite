import React, {Component} from 'react';
import './Home.css';

const Home = () => {
    return(
        <>
            <div id={'profileBio'}>
                <img src="/profilePic.jpeg" alt="image" className={"homePic"}/>
                <div id={'homeBio'}>
                    <div className={'homeBioHeader'}> Bio </div>
                    <div className={'homeBioBody'}> Biography body content filler. </div>
                </div>
            </div>
        </>
    )
}

export default Home;