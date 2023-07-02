


// // PROJECTS
// // 4 latest projects, 2x2 flex grid,  with a event when clicked on a project component that opens a modal window with the details 

const Projects = () => {
    return (
        <div className="projects_grid">
            <div className="project">
                <img src="/assets/images/1.jpg" alt="project" />
                <div className="project_info">
                    <h3>Project 1</h3>
                    <p>Project description</p>
                </div>
            </div>
            <div className="project">
                <img src="/assets/images/2.jpg" alt="project" />
                <div className="project_info">
                    <h3>Project 2</h3>
                    <p>Project description</p>
                </div>
            </div>
            <div className="project">
                <img src="/assets/images/3.jpg" alt="project" />
                <div className="project_info">
                    <h3>Project 3</h3>
                    <p>Project description</p>
                </div>
            </div>
            <div className="project">
                <img src="/assets/images/4.jpg" alt="project" />
                <div className="project_info">
                    <h3>Project 4</h3>
                    <p>Project description</p>
                </div>
            </div>
        </div>
    )
}

export default Projects;
