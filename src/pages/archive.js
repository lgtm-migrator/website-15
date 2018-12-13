// @format
// @flow
import { graphql } from 'gatsby'

import { Div, H1, P } from 'glamorous'
import * as React from 'react'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import PostCardList from '../components/PostCardList'
import Layout from '../components/Layout.js'

const SiteIndex = (props: {
  location: Location,
  data: { posts: { edges?: React.Node } },
}) => (
  <Layout location={props.location}>
    <Div>
      <Helmet title="Post Archive" />
      <H1>Post Archive</H1>
      <P
        css={{
          fontSize: '80%',
        }}
      >
        Posts that have been retired for one reason or another.
      </P>
      <PostCardList postcards={props.data.posts.edges} />
      <Bio />
    </Div>
  </Layout>
)

export default SiteIndex

export const pageQuery = graphql`
  query {
    posts: allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: {
        fields: {
          sourceName: { eq: "posts" }
          draft: { eq: false }
          archived: { eq: true }
        }
      }
    ) {
      edges {
        node {
          ...postCardFragment
        }
      }
    }
  }
`
