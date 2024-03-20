import React from 'react'
import Layout from './Components/L/Layout'
import AboutMainSec from './Components/A/AboutMainSec'
import HomeSection2 from './Components/H/HomeSection2'
import HomeSection3 from './Components/H/HomeSection3'
import HomeSection5 from './Components/H/HomeSection5'
import ClientFeedback from './Components/C/ClientFeedback'
import HomeSection10 from './Components/H/HomeSection10'
import HomeSection11 from './Components/H/HomeSection11'
import AboutLastSec from './Components/A/AboutLastSec'

const About = () => {
  return (
    <Layout >
        <AboutMainSec />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection5 />
        <ClientFeedback />
        <HomeSection10 />
        <HomeSection11 />
        <AboutLastSec />
    </Layout>
  )
}

export default About;

