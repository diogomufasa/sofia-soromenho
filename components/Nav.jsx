'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect} from "react";
import { Menu } from "lucide-react";
import MediaNav from "./MediaNav";
import { NAV_LINKS } from "@constant";


const Nav = () => {
  const [isSticky, setSticky] = useState(false);
  const [isCollapsed, setCollapsed] = useState(false);
  const [isToggled, setToggled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setSticky(window.scrollY > 500);
    });

    // Check if the screen is less than 768px
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setCollapsed(mediaQuery.matches);

    // Check if the screen width has changed (resize event)
    const resizeHandler = () => setCollapsed(mediaQuery.matches);
    mediaQuery.addEventListener("change", resizeHandler);
    
  }, []);

  const toggleMenu = () => {
    setToggled(!isToggled);
  }

  const navLinks =  NAV_LINKS;

  return (
    <nav className={isSticky ? 'nav stickyNav' : 'nav'}>
      <div className="flex-between w-1/2">
        <Link href="/" className="flex-between">
            <Image
              src="/assets/images/logo.png"
              alt="logo"
              width={70}
              height={70}
            />
        </Link>
        </div>
        {!isCollapsed ? (
        <div className="flex-between w-1/2 text-right">
          {navLinks.map((link) => (
            <Link href={link.href} className="link_hover">
              {link.text}
            </Link>
          ))}
      </div>
      ) : (
        <div>
          {!isToggled ? <Menu className="menu_icon" size={24} onClick={toggleMenu} /> : <MediaNav toggleMenu={toggleMenu} navLinks={navLinks}/>}
        </div>
      )}
    </nav>

  )
}

  
export default Nav