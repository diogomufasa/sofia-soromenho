'use client'
import Feed from "@components/Feed"
import Projects from "@components/Projects"
import About from "@components/About"
import { motion } from 'framer-motion'
import { Disc2, ArrowRight } from 'lucide-react';
import Link from "next/link";

const Home = () => {


  const homeVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    
    },
      
    transition: {
        duration: 1.5,
      
      },

    whileInView: {
      opacity: 1,
    
    },
  }



  return (
    <>
    <motion.div
      initial="initial"
      animate="animate"
      transition="transition"
      className="hero"
      variants={homeVariant}
    >
      <h1 className="head_text text-center">Sofia Soromenho
      <br className="max-md:hidden" />
      <p className="sub text-center uppercase">Dancer Teacher Writer Choreogropher Phd </p>      
      </h1>  
    </motion.div>
    <hr className="hr"/>  
    <motion.div
    initial="initial"
    whileInView="whileInView"
    transition="transition"
    className="feed"
    variants={homeVariant}
    >
      <span className="title"><Disc2 className="animate-pulse inline" color="#f45d5d"/> current work</span>
      <Feed />
    </motion.div>
    <hr className="hr"/>  
    <motion.div
    initial="initial"
    whileInView="whileInView"
    transition="transition"
    className="projects"
    variants={homeVariant}
    >
      <span className="title mt-8">projects</span>  
    <Projects/>
    <button className="outline_btn mb-8"><Link href="/projects">see all projects<ArrowRight className="inline" size={16}/> </Link></button>
    </motion.div>
    <hr className="hr"/>
    <motion.div
    initial="initial"
    whileInView="whileInView"
    transition="transition"
    className="about"
    variants={homeVariant}
    >
      <span className="title">about</span>
      <About/>
    </motion.div>
    <hr className="hr"/>  

  </>
  )
}


export default Home