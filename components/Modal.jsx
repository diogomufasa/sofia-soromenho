import { motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";

const Modal = (props) => {

    const { toggleModal } = props;

    return (           
        <motion.div         
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}> 
        <motion.div className="overlay" onClick={toggleModal}></motion.div>
        <motion.div className="modal">
            <div className="modal_content">            
            <motion.button className="modal_close" onClick={toggleModal}>
                <X size={24}/>            
            </motion.button>
                <Image src="/assets/images/test1.jpg" className="modal_img" alt="project" width={690} height={150} />            

                <div className="modal_info">
                    <h1 className="modal_title">Modal</h1>
                    <p className="modal_desc">Modal  Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus et, quia mollitia dolorem fugit facilis hic repellendus. Quo veniam, deleniti earum, rerum voluptatibus ex culpa facere iure eos dicta molestiae!</p>
                </div>    
            </div>
        </motion.div>
        </motion.div>
    )
}

export default Modal