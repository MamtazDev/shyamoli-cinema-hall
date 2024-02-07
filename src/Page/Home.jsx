import React from 'react'
import Banner from '../components/Home/Banner'
import NowShowoing from '../components/Home/NowShowoing'
import UpComingShow from '../components/Home/UpComingShow'

const Home = () => {
    return (
        <>
            <Banner />
            <NowShowoing />
            <UpComingShow />
        </>
    )
}

export default Home