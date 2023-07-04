import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import Modal from "./Modal";


// // PROJECTS
// // 4 latest projects, 2x2 flex grid,  with a event when clicked on a project component that opens a modal window with the details using motion

const Projects = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    // useEffect(() => {
    //     if (!modal) {
    //         return <Modal toggleModal={toggleModal} /> 
    //     } else {
    //         return null
    //     }

    // }, [modal])

    const projectVariant = {
        hover: {
            scale: 1.1,
            transition: {
                duration: 0.6,
            }
        },
        tap: {
            scale:0.9999,
        }
    }

    return (
        <div className="projects_grid">
            <motion.div className="project_card" onClick={toggleModal} whileHover="hover" whileTap="tap" variants={projectVariant}>
                <Image  className="project_img" src="/assets/images/test1.jpg" alt="project" width={1100} height={750} />
                <div className="project_info">
                    <h3 className="project_title">Project 1</h3>
                    <p className="project_desc">Project description</p>
                </div>
            </motion.div>
            <motion.div className="project_card" whileHover="hover" whileTap="tap" variants={projectVariant}>
                <Image  className="project_img" src="/assets/images/test1.jpg" alt="project" width={1100} height={750} />
                <div className="project_info">
                    <h3 className="project_title">Project 2</h3>
                    <p className="project_desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id neque animi nisi eveniet vero ipsum quas quia excepturi aperiam esse modi pariatur similique, voluptates, distinctio, dolores doloremque! Amet, aperiam optio?</p>
                </div>
            </motion.div>
            <motion.div className="project_card" whileHover="hover" whileTap="tap" variants={projectVariant}>
                <Image  className="project_img" src="/assets/images/test1.jpg" alt="project" width={1100} height={750} />
                <div className="project_info">
                    <h3 className="project_title">Project 3</h3>
                    <p className="project_desc">Project description</p>
                </div>
            </motion.div>
            <motion.div className="project_card" whileHover="hover" whileTap="tap" variants={projectVariant}>
                <Image  className="project_img" src="/assets/images/test1.jpg" alt="project" width={1100} height={750} />
                <div className="project_info">
                    <h3 className="project_title">Project 4</h3>
                    <p className="project_desc">Project description</p>
                </div>
            </motion.div>
        </div>
    )
}

export default Projects;
