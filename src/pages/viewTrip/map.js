import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import Map from '../../components/maps'
import AddTrip from '../../components/Trips/addTrip'

const ViewMap = () => (
  <Layout>
    <Map/>
    <AddTrip />
    <Link to="/">Back to Trips</Link>
  </Layout>
)

export default ViewMap