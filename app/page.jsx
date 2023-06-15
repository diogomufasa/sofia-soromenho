import Feed from "@components/Feed"


const Home = () => {
  return (
    <div>
    <section className="hero">
      <h1 className="head_text text-center">Sofia Soromenho
      <br className="max-md:hidden" />
      <p className="desc text-center blue_gradient">Dancer</p>

      </h1>
  </section>      
  <Feed />
  </div>
  )
}


export default Home