import React from 'react';
import TeamCard from '../Teaminfo/TeamInfo';

import './teamlist.css';

const TeamList = () => {
    return (
        <div className="team-container">
            <div className="team-header">
                <span>team</span>
            </div>
            <div className="teams-info-container">
                <TeamCard/>
                <TeamCard/>
                <TeamCard/>
                <TeamCard/>              
            </div>
        </div>
    );
}

export default TeamList;