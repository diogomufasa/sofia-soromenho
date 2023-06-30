import Link from "next/link";
import { X } from "lucide-react";


// for each link, when clicked, toggle the menu if the link is linked to the current page

const MediaNav = (props) => {
    const { toggleMenu, navLinks } = props;

    return (
        <div className="media_nav" onClick={toggleMenu}>
            <X className="close_icon" size={24}  />
            <div className="media_links">
                <Link href="/" className="link-hover">
                    Home
                </Link>            
                {navLinks.map(link => (
                <Link href={link.href} className="link-hover">
                    {link.text}
                </Link>
          ))}
            </div>
        </div>
    )
}

export default MediaNav