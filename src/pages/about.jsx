import React from 'react'
import Layout from "../components/Layout"

const About = () => {
   const text = 'Nosso restaurante é bão'
    return (
        <Layout>
          <div className="container">
            <div className="row">
    <div className="col-12">{text}</div>
            </div>
          </div>  

        </Layout>    
     )
}

export default About