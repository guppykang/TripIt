import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SearchBox from '../components/searchbox'

const IndexPage = () => (
  <Layout>
    <h1>Trip List goes here...</h1>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/viewTrip/map/">Map</Link>
    <Link to="/create-trip/">Create Trip</Link>
  </Layout>
)

export default IndexPage
