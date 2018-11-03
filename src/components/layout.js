import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import { StaticQuery, graphql } from 'gatsby'
import faunadb from 'faunadb'

import seed from '../faunaDB/seeds/seed';

import Header from './header'
import './layout.css'

// const client = new faunadb.Client({ secret: 'fnAC-8NuzGACAljfuLW0PrHYpkJf6lzrHNY-gWyV' });

// seed(client);

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
