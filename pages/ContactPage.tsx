import React from 'react'
import ContactCard from './Components/C/ContactCard'
import ContactMainSec from './Components/C/ContactMainSec'
import Layout from './Components/L/Layout'
import ContactForm from './Components/C/ContactForm'
import AboutLastSec from './Components/A/AboutLastSec'

const ContactPage = () => {
  return (
    <Layout>
    <ContactMainSec />
    <ContactCard />
    <ContactForm />
    <AboutLastSec />
    </Layout>
  )
}

export default ContactPage
