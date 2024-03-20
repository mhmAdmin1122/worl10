import React from 'react'
import Layout from './Components/L/Layout'
import ProjectDetailMainPage from './Components/P/ProjectDetailMainPage'
import ProjectDetailDescSec from './Components/P/ProjectDetailDescSec'
import AboutLastSec from './Components/A/AboutLastSec'

const ProjectDetailPage = () => {
  return (
    <Layout>
      <ProjectDetailMainPage /> 
      <ProjectDetailDescSec />
      <AboutLastSec />
    </Layout>
  )
}

export default ProjectDetailPage
