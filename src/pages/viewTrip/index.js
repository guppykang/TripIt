import React from 'react'
import { Link } from 'gatsby'

import Layout from '../../components/layout'
import Map from '../../components/maps'
import AddEvent from '../../components/Events/AddEvent'

const ViewMap = (props) => (
  <Layout>
    {/* {props.location.pathname} */}
    <Map/>
    <AddEvent />
    <Link to="/">Back to Trips</Link>
  </Layout>
)

export default ViewMap
