import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import Map from '../../components/maps'

const ViewMap = () => (
  <Layout>
    <Map/>
    <Link to="/viewTrip/create-destination/">New Destination</Link>
    <Link to="/">Back to Trips</Link>
  </Layout>
)

export default ViewMap