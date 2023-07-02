'use client'
import Feed from "@components/Feed"
import Projects from "@components/Projects"
import { motion } from 'framer-motion'
import { Disc2, ArrowRight } from 'lucide-react';
import Link from "next/link";

const Home = () => {
  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="hero"
    >
      <h1 className="head_text text-center">Sofia Soromenho
      <br className="max-md:hidden" />
      <p className="sub text-center uppercase">Dancer Teacher Writer Choreogropher Phd </p>      
      </h1>  
    </motion.div>
    <hr className="hr"/>  
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 2 }}
    className="feed"
    >
      <span className="title"><Disc2 className="animate-pulse inline" color="#f45d5d"/> current work</span>
      <Feed />
    </motion.div>
    <hr className="hr"/>  
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 2}}
    className="projects"
    >
      <span className="title">projects</span>  
    <Projects/>
    <button className="outline_btn"><Link href="/projects">see all projects<ArrowRight className="inline" size={16}/> </Link></button>
    </motion.div>

  </>
  )
}


export default Home