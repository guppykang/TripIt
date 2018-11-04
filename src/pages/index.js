import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import FontPage from '../components/fontPage';

const IndexPage = () => (
  <Layout>
    <FontPage />
    <Link to="/create-trip/">Create Trip</Link>
  </Layout>
)

export default IndexPage;
