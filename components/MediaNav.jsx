import Link from "next/link";
import { X } from "lucide-react";
import { motion } from "framer-motion";


// for each link, when clicked, toggle the menu if the link is linked to the current page

const MediaNav = (props) => {
    const { toggleMenu, navLinks } = props;

    return (
        <motion.div       
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} className="media_nav" onClick={toggleMenu}>
            <X className="close_icon" size={24}  />
            <div className="media_links">
                <Link href="/" className="link_hover">
                    Home
                </Link>            
                {navLinks.map(link => (
                <Link href={link.href} className="link_hover">
                    {link.text}
                </Link>
          ))}
            </div>
        </motion.div>
    )
}

export default MediaNav