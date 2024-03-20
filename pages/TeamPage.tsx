import React from 'react'
import TeamMainPage from './Components/T/TeamMainPage';
import HomeSection5 from './Components/H/HomeSection5';
import Layout from './Components/L/Layout';
import TeamExperiencesSec from './Components/T/TeamExperiencesSec';
import HomeSection10 from './Components/H/HomeSection10';
import ClientLogos from './Components/C/ClientLogos';
import AboutLastSec from './Components/A/AboutLastSec';

const TeamPage = () => {
  return (
    <Layout>
      <TeamMainPage />
      <HomeSection5 />
      <TeamExperiencesSec />
      <HomeSection10 />
      <ClientLogos />
      <AboutLastSec />
    </Layout>
  )
}

export default TeamPage;