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
              width={50}
              height={50}
            />
            <h1 className="ml-2 text-2xl font-bold uppercase">Sofia Soromenho</h1>
        </Link>
      </div>

    </nav>

  )
}


export default Nav