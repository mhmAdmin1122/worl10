import React from 'react'
import Layout from './Components/L/Layout'
import TeamDetailMainPage from './Components/T/TeamDetailMainPage'
import TeamDetailUserSec from './Components/T/TeamDetailUserSec'
import UserExperience from './Components/U/UserExperience'
import AboutLastSec from './Components/A/AboutLastSec'

const TeamDetail = () => {
  return (
    <Layout>
        <TeamDetailMainPage />
        <TeamDetailUserSec />
        <UserExperience />
        <AboutLastSec />
    </Layout>
  )
}

export default TeamDetail
