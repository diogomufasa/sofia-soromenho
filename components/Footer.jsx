import React from 'react'
import {Heart} from 'lucide-react'

const Footer = () => {
  return (
    <footer className="flex-between w-full mb-10 mt-16 sm:px-10 pt-3 glassmorphism">
      <div className="flex-between w-1/2">
        <p className="text-center">© 2023 Sofia Soromenho</p>
      </div>


      <div className="text-right">
        <p className="text-center gap-1">Built with <Heart className="inline-block" size={20} /> by</p> 
        <a href="https://github.com/diogomufasa" target="_blank" rel="noopener noreferrer">
          Diogo Soromenho
        </a>
      </div>
    </footer>

  )
}

export default Footer