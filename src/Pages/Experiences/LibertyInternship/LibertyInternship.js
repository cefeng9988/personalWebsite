import React from 'react';
import './LibertyInternship.css';
import TodoListComponent from '../../../components/TodoList/TodoListComponent';
import CompletedStories from '../../../components/CompletedStories/CompletedStories';

const LibertyInternship = () => {
    return (
        <>
            <h1 className={'expLMHeader'}> Liberty Mutual SWE Internship 2020 </h1>

            <div className={'expLMIntroText'}> I was a full-time Software Engineer intern at Liberty Mutual Insurance
                for 7 months, from May 26, 2020 to December 31, 2020. I was a full-stack developer on the auto web application
                using ReactJS, CSS, and graphQL. I was on a team of 8: 5 devs, a PO, a scrum master and an embedded UX
                product designer. We worked in an agile environment with daily morning stand-ups, two week sprints and
                CI/CD pipelines. During my internship I had the opportunity to pair program and drive on stories with
                the other developers, compete in a virtual intern hackathon and give 2 end-of-sprint demos. We completed
                14 sprints in the duration of my 7 months and worked across 8 full-stack repositories.</div>
            <div className={'expLMIntroText'}>Networking was
                a key part of my internship. Across Liberty Home, Investment and fellow interns, I was able to meet Home POs, IDP and
                LMI analysts, scrum masters and have a 1on1 with Digital's Senior Director of Product Owners. It has
                been a rewarding 7 months and I am looking forward to a second internship with Liberty Mutual summer of
                2021!</div>

            <div id={"circleTextGriding"}>
                <div className={"circleText"}> 7 Months </div>
                <div className={"circleText"}> 1 Intern Hackathon </div>
                <div className={"circleText"}> 14 Sprints </div>
                <div className={"circleText"}> 2 Sprint Demos </div>
                <div className={"circleText"}> 8 Repositories </div>
            </div>

            {/*<div id={"expLMStandUpGriding"}>*/}
            {/*    <img src="/standUp2.jpeg" alt="image" className={"standUpPicSize"}/>*/}
            {/*    <img src="/standUp1.jpeg" alt="image" className={"standUpPicSize"}/>*/}
            {/*</div>*/}

            <div className={'expLMBodyHeader'}> Internship Side Projects </div>
            <div className={'expLMBodyText'}>During my internship, I was able to start developing my website that you
                are seeing now as well as a few smaller components. These side-projects really helped to solidify into
                practice what I learned through pair programming.</div>

            <div id={'componentGriding'}>
                <div>
                    <CompletedStories/>
                    <div className={'componentText'}>
                        <div className={'componentTextPadding'}> This component is a record of all the stories I drove on and
                            completed throughout my internship. It was developed as a two-part component: a main class component
                            with each completed story stored in its state and passed to another component that formats each
                            story to be rendered. Each story element has a sprint, number, title, points and description field.</div>
                    </div>
                </div>
                <div>
                    <TodoListComponent/>
                    <div className={'componentText'}>
                        <div className={'componentTextPadding'}> This component is a Todo List with functioning add, remove and check completed capabilities.
                            It was developed as a class component along with a helper functional component. The individual todos
                            are saved in the state of the main class component and passed to our helper function for styling. The rest
                            of the capabilities are built-in functions within the class.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LibertyInternship;