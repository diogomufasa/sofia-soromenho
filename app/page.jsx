import Feed from "@components/Feed"


const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Sofia Soromenho
      <br className="max-md:hidden" />
      <p className="desc text-center blue_gradient">Dancer</p>
      </h1>
      <Feed />
    </section>
  )
}


export default Home