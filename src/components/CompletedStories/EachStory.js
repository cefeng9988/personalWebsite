import React from 'react';
import PropTypes from 'prop-types';
import './CompletedStories.css';

const EachStory = (props) =>{
    const { sprint, number, title, points, description } = props;
    return(
        <div className={'eachStoryStyle'}>
            <p className={'boldText'}>
                Sprint: {sprint}
            </p>
            <p>
                DS-{number} {title}({points})
            </p>
            <p>
                {description}
            </p>
        </div>
    );
}

EachStory.propTypes = {
    sprint: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    points: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default EachStory;