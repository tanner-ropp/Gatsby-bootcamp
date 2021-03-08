import React from "react"
import { Link } from 'gatsby'
import Footer from "../components/footer"
import Header from "../components/Header"

export default function Home() {
  return (
    <div>
      <Header/>
      <h1>Hello.</h1>
      <h2>I'm Tanner, a JAM stack developer and musician graduating from the University of Florida.</h2>
      <p>Need a better developer? <Link to="/contact">Contact <em>me.</em></Link></p>
      <Footer/>
    </div>
  )
}
