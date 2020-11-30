// import PropTypes from "prop-types";
import React from "react"
import { graphql, Link } from "gatsby"

import Page from "../components/Page"

const Blog = ({ data }) => {
  const blogData = data.allMarkdownRemark.nodes

  return (
    <Page>
      <h2>Blog</h2>

      {blogData.map(blog => (
        <Link key={blog.id} to={`/blog/${blog.slug}`}>
          <h3>
            {blog.frontmatter.title} <span>— {blog.frontmatter.date}</span>
          </h3>
          <p>{blog.excerpt}</p>
        </Link>
      ))}
    </Page>
  )
}

Blog.propTypes = {
  // : PropTypes.string
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      totalCount
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          templateKey
          date(formatString: "MMMM DD, YYYY")
          description
        }
      }
    }
  }
`

export default Blog
