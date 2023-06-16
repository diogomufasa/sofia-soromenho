import '@/styles/globals.css'
import {Comfortaa} from '@next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Sofia Soromenho',
  description: 'Sofia Soromenho - Dancer, Performer, Choreographer',
  keywords: 'Sofia Soromenho, Dancer, Performer, Choreographer',
}

const comfortaa = Comfortaa({
  weights: [400, 700],
  display: 'swap',
})

const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
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