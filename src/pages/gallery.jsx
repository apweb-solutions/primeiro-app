import React from 'react'
import Layout from "../components/Layout"

const Gallery = () => {
   const text = 'Galeria de Fotos'
    return (
        <Layout>
          <div className="container">
            <div className="row">
             <h1>{text}</h1>   
             <div className="col-12"></div>
            </div>
          </div>  

        </Layout>    
     )
}

export default Gallery