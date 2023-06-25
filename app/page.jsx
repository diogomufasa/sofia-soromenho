import Feed from "@components/Feed"
import Projects from "@components/Projects"
import About from "@components/About"


const Home = () => {
  return (
    <>
    <section className="hero">
      <h1 className="head_text text-center">Sofia Soromenho
      <br className="max-md:hidden" />
      <p className="desc text-center text-indigo-400">Dancer Teacher Choreogropher Phd</p>      
      </h1>
    </section>  
    <Feed />    
    {/* <Projects/>
    <About/> */}

  </>

  )
}


export default Home