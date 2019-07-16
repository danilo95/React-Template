import React from 'react';
import Singleproject from '../Singleprojectinfo/Singleproject';
import './projectlist.css';

const ProyectList = () => {
    return ( 
        <div className="project-container">
            <div className="project-header">
                <span>Ongoing project</span>
                <span className="all-items"> All items</span>
            </div>
            <div className="projects-container">
                <Singleproject/>
                <Singleproject/>
                <Singleproject/>
                <Singleproject/>
                <Singleproject/>
                <Singleproject/>

            </div>
        </div>
     );
}
 
export default ProyectList;