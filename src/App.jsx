import { useState } from 'react'
import Profile from './assets/components/profile.jsx'
import Blogmain from './assets/components/blogmain.jsx'
import Blogarchive from './assets/components/archives.jsx'
import './App.css'

function App() {

  return (
    <>
    
      <section id="heading">
        <title>Amelia Reed's Blog</title>
        <div id="title">
          <h1>Amelia Reed's Blog</h1>
          <h2>Hello! I'm Amelia Reed. Welcome to my blog!</h2>
        </div>
      </section>

      <section id="navigation">

      </section>

      <section id="context">
        <section id="information">
          <Profile/>
        </section>

        <section id="blog-area">
          <Blogmain/>
        </section>

        <section id="blog-archive">
          <Blogarchive/>
        </section>
      </section>

      <footer>
        <p>Disclaimer: Any similarities or resemblances to anyhis site and person is not based on </p>
        <p>background image from <a target="_blank" href='https://www.vecteezy.com/vector-art/36335804-abstract-background-elegant-gradient-purple-smooth-liquid-color-design-vector-template-good-for-modern-website-wallpaper-cover-design'>Vecteezy</a></p>
      </footer>

    </>
  )
}

export default App
