import './App.css'
import About from './components/about/About'
import Follow from './components/follow/Follow'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Setvices from './components/servises/Setvices'
import Articles from './components/articles/articles'
import Register from './components/register/Register'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Setvices />
        <Follow />
        <Articles />
        <Register />
      </main>
      <Footer />
    </>
  )
}

export default App
