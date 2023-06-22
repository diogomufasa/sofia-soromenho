import '@/styles/globals.css'
import {Overpass_Mono} from '@next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Sofia Soromenho',
  description: 'Sofia Soromenho - Dancer, Performer, Choreographer',
  keywords: 'Sofia Soromenho, Dancer, Performer, Choreographer',
  author: 'Diogo Soromenho',
  copyright:'© 2023 Sofia Soromenho',

}

const font = Overpass_Mono({
  weights: [400, 700],
  display: 'swap',

})

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="main">
          <div className="gradient"/>
        </div>

        <main className='app'>
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}


export default RootLayout;