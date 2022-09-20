import React from 'react'
import Nav from '../Nav/Nav'
import './HomeScreen.css'
import Banner from './../Banner/Banner';
import Row from '../Row/Row';
import requests from '../../../api/requests';


function HomeScreen() {
  return (
    <div className="homeScreen">
        <Nav />

        <Banner />

        <Row title="NEXTLIX ORIGINAL" fetchUrl={requests.fetchNetlixOriginals} isLargeRow/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action Movies " fetchUrl={requests.fetchActionMovies}/>
        <Row title="Comdy Movies" fetchUrl={requests.fetchComdyMovies}/>
        <Row title="Horror Movies " fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Roman Movies " fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Document Movies " fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default HomeScreen