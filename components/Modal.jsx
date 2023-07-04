import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

const Modal = (props) => {
    const toggleModal = props.toggleModal;

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} className="modal">
            <motion.div className="overlay z-40" onClick={toggleModal}></motion.div>

            <div className="modal_content">            
            <motion.button className="close_icon" onClick={toggleModal}>
            <X size={24}/>
            </motion.button>
                <Image src="/assets/images/test1.jpg" alt="project" width={900} height={700} />
                <div className="modal_info">
                    <h1 className="modal_title">Modal</h1>
                    <p className="modal_desc">Modal content</p>
                </div>    
            </div>
        </motion.div>

    )
}

export default Modal