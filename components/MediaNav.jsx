import Link from "next/link";
import { useState, useEffect} from "react";
import { X } from "lucide-react";

const MediaNav = () => {
    const [isToggled, setToggled] = useState(true);

    useEffect(() => {
        if (isToggled) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isToggled]);


    return (
        <div className="media_nav__container">
            <div onClick={() => setToggled(!isToggled)}>
                <X size={24} />
            </div>
            <div className="media__links">
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