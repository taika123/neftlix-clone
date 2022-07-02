import React from 'react'
import Nav from '../Nav/Nav'
import './HomeScreen.css'
import Banner from './../Banner/Banner';


function HomeScreen() {
  return (
    <div className="homeScreen">
        <Nav />

        <Banner />

        {/* Row */}
    </div>
  )
}

export default HomeScreen