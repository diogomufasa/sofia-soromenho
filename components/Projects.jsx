import { useState, useEffect } from "react";
import { motion } from "framer-motion";


// // PROJECTS
// // 4 latest projects, 2x2 flex grid,  with a event when clicked on a project component that opens a modal window with the details 

const Projects = () => {
    return (
        <div className="projects_grid">
            <div className="project_card">
                <img className="project_img" src="/assets/images/test1.jpg" alt="project" />
                <div className="project_info">
                    <h3 className="project_title">Project 1</h3>
                    <p className="project_desc">Project description</p>
                </div>
            </div>
            <div className="project_card">
                <img className="project_img" src="/assets/images/test1.jpg" alt="project" />
                <div className="project_info">
                    <h3 className="project_title">Project 2</h3>
                    <p className="project_desc">Project description</p>
                </div>
            </div>
            <div className="project_card">
                <img className="project_img" src="/assets/images/test1.jpg" alt="project" />
                <div className="project_info">
                    <h3 className="project_title">Project 3</h3>
                    <p className="project_desc">Project description</p>
                </div>
            </div>
            <div className="project_card">
                <img className="project_img" src="/assets/images/test1.jpg" alt="project" />
                <div className="project_info">
                    <h3 className="project_title">Project 4</h3>
                    <p className="project_desc">Project description</p>
                </div>
            </div>
        </div>
    )
}

export default Projects;
