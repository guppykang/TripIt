import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import Map from '../../components/maps'
import AddEvent from '../../components/Events/AddEvent'

const ViewMap = () => (
  <Layout>
    <Map/>
    <AddEvent />
    <Link to="/">Back to Trips</Link>
  </Layout>
)

export default ViewMap