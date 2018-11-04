import React from 'react';
import './index.css';

import Layout from '../components/layout';
import FontPage from '../components/fontPage';
import AddTrip from '../components/Trips/AddTrip';

const IndexPage = () => (
  <Layout>
    <FontPage />
    <AddTrip />
  </Layout>
)

export default IndexPage;
