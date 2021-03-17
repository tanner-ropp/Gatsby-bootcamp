import React from 'react';
import Layout from '../components/Layout'
import { graphql, Link, useStaticQuery } from 'gatsby'

function BlogPage(props) {

    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    
    return (
        <Layout>
            <h1>Blog</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <h2>
                                <Link to={`/blog/${edge.node.fields.slug}`}>
                                    {edge.node.frontmatter.title}
                                </Link>
                            </h2>
                            <p>{edge.node.frontmatter.date}</p>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    );
}

export default BlogPage;