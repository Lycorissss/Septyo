import Navbar from '../component/navbar'
import Movie from '../component/Movie'
import Header from '../component/Header'
import About from '../component/About'
import Work from '../component/Work'
import Contact from '../component/Contact'
import Footer from '../component/Footer'

import RingLoader from "react-spinners/RingLoader";
import React, { useState, useEffect } from 'react';
const Home = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 4000)
    }, [])

    return (

        <>

            {
                loading ?
                    <div className="App" >
                        <RingLoader
                            color="#c1c2c2"
                            size={400}
                        />
                    </div>
                    :
                    <>
                        <Movie />
                        <section class="main-warp">
                            <Navbar />
                            <Header />
                            <About />
                            <Work />
                            <Contact />
                            <Footer />
                        </section>

                    </>
            }

        </>
    )
}

export default Home