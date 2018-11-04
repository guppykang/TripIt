import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import EventForm from '../components/EventForm'


const CreateTrip = () => (
  <Layout>
    <EventForm />
    <Link to='/viewTrip/map/'>Cancel</Link>
  </Layout>
)

export default CreateTrip
