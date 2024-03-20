import React from 'react'
import Layout from './Components/L/Layout'
import ProjectPageMainSec from './Components/P/ProjectPageMainSec'
import ProjectPageImgSec from './Components/P/ProjectPageImgSec'
import ClientLogos from './Components/C/ClientLogos'
import AboutLastSec from './Components/A/AboutLastSec'

const ProjectPage = () => {
  return (
    <Layout>
        <ProjectPageMainSec />
        <ProjectPageImgSec />
        <ClientLogos />
        <AboutLastSec />
    </Layout>
  )
}

export default ProjectPage
