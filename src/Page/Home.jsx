import React from 'react'
import Banner from '../components/Home/Banner'
import NowShowoing from '../components/Home/NowShowoing'
import UpComingShow from '../components/Home/UpComingShow'
import CustomSlider from '../components/Home/CustomSlider'
import About from '../components/Home/About'

const Home = () => {
    return (
        <>
            <Banner />
            <NowShowoing />
            <UpComingShow />
            {/* <CustomSlider /> */}
            <About />
        </>
    )
}

export default Home