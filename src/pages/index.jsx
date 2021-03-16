import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Tanner, a JAM stack developer and musician graduating from the University of Florida.</h2>
      <p>Need a better developer? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}
