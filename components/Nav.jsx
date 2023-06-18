import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";



const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
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
    </nav>

  )
}


export default Nav