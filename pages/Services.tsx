import React from 'react'
import ServicesCard from './Components/S/ServicesCard'
import Layout from './Components/L/Layout'
import ServicesMainSec from './Components/S/ServicesMainSec'
import HomeSection6 from './Components/H/HomeSection6'
import ServicesUserSec from './Components/S/ServicesUserSec'
import HomeSection9 from './Components/H/HomeSection9'
import ServicesLastSec from './Components/S/ServicesLastSec'

const Services = () => {
  return (
    <Layout>
        <ServicesMainSec />
        <ServicesCard />
        <HomeSection6 />
        <ServicesUserSec />
        <HomeSection9 />
        <ServicesLastSec />
    </Layout>
  )
}

export default Services
