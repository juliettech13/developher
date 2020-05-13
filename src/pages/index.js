import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Steps from '../components/Steps';
import Footer from '../components/Footer'


const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Programming 101" />
      <Steps />
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>
    <Footer />
  </>
)

export default IndexPage
