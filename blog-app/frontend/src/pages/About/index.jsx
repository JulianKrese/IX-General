import React from "react"

import Navbar from "../../components/Navbar";
import Heading from "../../components/Heading";
import SubHeading from "../../components/SubHeading";

import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <div>
        <Navbar />
        <Heading />
        <SubHeading subHeading={"About Me"}/>
        <div>
            nothing here yet
        </div>
        <Footer />
    </div>
  )
}
