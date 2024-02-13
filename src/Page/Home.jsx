import React from 'react'
import Banner from '../components/Home/Banner'
import NowShowoing from '../components/Home/NowShowoing'
import UpComingShow from '../components/Home/UpComingShow'
import CustomSlider from '../components/Home/CustomSlider'
import About from '../components/Home/About'
import Gallary from '../components/Home/Gallary'
import Connect from '../components/Home/Connect'

const Home = () => {
    return (
        <>
            <Banner />
            <NowShowoing />
            <UpComingShow />
            <About />
            <Gallary />
            <Connect />
        </>
    )
}

export default Home