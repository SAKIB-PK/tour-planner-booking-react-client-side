import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Contact from '../Contact/Contact'
import Services from '../Services/Services'

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services item={6}/>
            <About/>
            <Contact/>
        </div>
    )
}

export default Home
