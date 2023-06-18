import Feed from "@components/Feed"


const Home = () => {
  return (
    <div>
    <section className="hero">
      <h1 className="head_text text-center">Sofia Soromenho
      <br className="max-md:hidden" />
      <p className="desc text-center blue_gradient">Dancer</p>      
      {/* Animated arrow pointing down*/}
      <svg className="animate-bounce w-12 h-12 mx-auto mt-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#1f1f1f">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
      </h1>

      
  </section>  
  <Feed />
  </div>
  )
}


export default Home