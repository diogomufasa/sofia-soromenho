import Feed from "@components/Feed"
import Projects from "@components/Projects"
import { Disc2, ArrowRight } from 'lucide-react';
import Link from "next/link";

const Home = () => {
  return (
    <>
    <section className="hero">
      <h1 className="head_text text-center">Sofia Soromenho
      <br className="max-md:hidden" />
      <p className="sub text-center">Dancer Teacher Choreogropher Phd</p>      
      </h1>
    </section>    
    <div className='feed'>

      <span className="title"><Disc2 className="animate-pulse inline" color="#f45d5d"/> Current Project</span>
      <Feed />
    </div>  
    <div className="projects">
      <span className="title">Projects</span>  
    <Projects/>
    <button className="outline_btn"><Link href="/projects">see all projects<ArrowRight className="inline" size={16}/> </Link></button>
    </div>
  </>
  )
}


export default Home