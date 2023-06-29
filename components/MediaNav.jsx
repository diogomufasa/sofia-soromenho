import Link from "next/link";
import { X } from "lucide-react";


// for each link, when clicked, toggle the menu if the link is linked to the current page

const MediaNav = (props) => {
    const { toggleMenu } = props;

    return (
        <div className="media_nav">
            <X className="close_icon" size={24}  onClick={toggleMenu}/>
            <div className="media_links">
                <Link href="/" className="link-hover">
                    Home
                </Link>            
                <Link href="/about" className="link-hover">
                    About
                </Link>
                <Link href="/gallery" className="link-hover" >
                    Gallery
                </Link>
                <Link href="/projects" className="link-hover">
                    Projects
                </Link>
                <Link href="/blog" className="link-hover">
                    Blog
                </Link>
            </div>
        </div>
    )
}

export default MediaNav