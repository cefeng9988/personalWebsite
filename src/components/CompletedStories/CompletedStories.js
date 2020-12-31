import React, {Component} from 'react';
import EachStory from './EachStory';
import './CompletedStories.css';

class CompletedStories extends Component {
    state={
        stories:[
            {
                sprint: 9.4,
                number: 36444,
                title: '** Update High Education Questions content ',
                points: 2,
                description: 'Content update from "Higher Education" to ' +
                    'more specific, "Master, etc."'
            },
            {
                sprint: 9.4,
                number: 35910,
                title: '* Update content to inform Customer they are quoting with Liberty Mutual ',
                points: 2,
                description: 'Content update to change title of Basics to "Welcome to Liberty Mutual!"' +
                    ' and to make sure Liberty Mutual stays on the same line for different screen sizes.'
            },
            {
                sprint: 10.1,
                number: 38314,
                title: '*Update "Save & continue" to "Save and continue" in Neptune ',
                points: 2,
                description: 'Content update all buttons that say "Save & Continue" to' +
                    ' "Save and Continue".'
            },
            {
                sprint: 10.1,
                number: 37051,
                title: '** Make Wayfinding Header Pill Optional ',
                points: 2,
                description: 'Updated the Header Pill to become a reusable component and created' +
                    ' a knob in the Sale UI Library to demonstrate and toggling.'
            },
            {
                sprint: 10.2,
                number: 36976,
                title: '* Add Wayfinding Header to Bind ',
                points: 3,
                description: 'Adding Wayfinding Header and implementing Header Pill toggle in Bind ' +
                    'within Neptune.'
            },
            {
                sprint: 10.2,
                number: 38307,
                title: '* Update Casing, Modal Titles & Full Coverage Content in Barker ',
                points: 3,
                description: 'Updating casing and implementing A/B Test on Modal Content Update.'
            },
            {
                sprint: 10.4,
                number: 40249,
                title: '** Fix Mobile Wayfinding Entry Text Size ',
                points: 3,
                description: 'Fixing text size for Basics page label: "Welcome to Liberty Mutual! Tell us..." ' +
                    'Initially changed labelStyle="h3-light" with isWayfindingOn and isMobile logic then turns out to be ' +
                    'overlapping CSS on the div so we changed it to be a span.'
            },
            {
                sprint: 10.4,
                number: 40226,
                title: '* Update Ensighten Sequencing API in Barker ',
                points: 3,
                description: 'Updating the API call from "track" to "sendAsync", started off by looking at the diff ' +
                    'in the PR with the same changes in Sales Payment. Using that reference we made the changes accordingly and made ' +
                    'sure to also adjust the README.'
            },
            {
                sprint: 10.5,
                number: 40772,
                title: '* License Plate Lookup Cleanup ',
                points: 3,
                description: 'Updating font sizes for License Plate lookup success label and update license plate state and number fields ' +
                    'to match component in Sales UI Library.'
            },
            {
                sprint: 10.6,
                number: 42166,
                title: '* Add loan start and length on Assumption Modal in Barker ',
                points: 3,
                description: 'Updated QPS Barker page to display either default loan/lease length and start date or the edited loan/lease ' +
                    'length and start date. Also created a function to parse dates from numerical to spelled out display within utils with its ' +
                    'own unit test.'
            },
            {
                sprint: 11.2,
                number: 44094,
                title: '** Limit Number of License Plate Characters ',
                points: 3,
                description: 'Updated License Plate input field in both Neptune and Endor so it only excepts 10 characters. I used the field ' +
                    'maxLength={10} which is built in JavaScript to the <input/> field. I was also able to use the React testing library to ' +
                    'unit test. The unit test consisted of a screen.getByRole to select the input field then a userEvent.type to mimick user typing ' +
                    'and finally a expect().toHaveValue to test the 10 character limit.'
            },
            {
                sprint: 11.3,
                number: 45084,
                title: '** Remove Dashcap ',
                points: 2,
                description: 'Dashcap test failed to generate positive results so we went ahead and removed all code that went into this test.' +
                    'The process involved going through previous pull requests for reference and removing code within Neptune.'
            },
            {
                sprint: 11.3,
                number: 44904,
                title: '** Back link changed for MI in Trillium ',
                points: 2,
                description: 'For MI, users enter health insurance information before hitting Trillium. The current back link says "Back to current insurance" ' +
                    'which is not accurate, instead we made a change to say "Back to health insurance".'
            },
            {
                sprint: 11.3,
                number: 42537,
                title: '** Update Sales UI Library Version ',
                points: 2,
                description: 'Updated wayfinding version from the Sales UI Library(mono-repo) header pill with the visual focus has been updated in ' +
                    'Neptune, Barker, Trillium, Juno. Trillium PR was released with story 44904 otherwise it was a triple repository, PR and prod release.'
            }
        ]
    }


    //need curly braces for any JavaScript logic(.reverse etc...)
    //need parenthesis for HTML(that's all the <> stuff)
    //Look into HTML elements(<span>, <p> etc...)
    render() {
        let pointsArray = 0;
        this.state.stories.map((story)=>(pointsArray += story.points));
        return (
            <div>
                <div className={'storyHeader'}>
                    <h1> Completed Stories </h1>
                    <div className={'totalPoints'}> Total Points Completed: {pointsArray} points </div>
                </div>
                <div className={'storyContainer'}>
                    {
                    this.state.stories.reverse().map((story) => (
                        <EachStory
                            sprint={story.sprint}
                            number={story.number}
                            title={story.title}
                            points={story.points}
                            description={story.description}
                        />
                    ))
                    }
                </div>
            </div>
        )
    }
}

export default CompletedStories;