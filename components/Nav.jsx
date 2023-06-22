'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";



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
      ) : (
        // Render a hamburger menu for mobile screens
        <div className="flex-col w-1/2 text-right">
        {!isToggled ? <Menu/> : <X/>}
        </div>
      )}


    </nav>

  )
}


export default Nav