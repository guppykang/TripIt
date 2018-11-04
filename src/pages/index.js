import React from 'react';
import { Link } from 'gatsby';

<<<<<<< HEAD
import Layout from '../components/layout';
import Image from '../components/image';
import FontPage from '../components/Trips/fontPage';
import SearchBox from '../components/searchbox';
||||||| merged common ancestors
import Layout from '../components/layout'
import Image from '../components/image'
import SearchBox from '../components/searchbox'
=======
import Layout from '../components/layout';
import Image from '../components/image';
import FontPage from '../components/Trips/fontPage';
>>>>>>> 4c284878620e3de2ee5607d050c58a5177a9ef05

const IndexPage = () => (
  <Layout>
    <h1>Trip List goes here...</h1>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <FontPage />
    <Link to="/viewTrip/map/">Map</Link>
    <Link to="/create-trip/">Create Trip</Link>
  </Layout>
)

export default IndexPage;
