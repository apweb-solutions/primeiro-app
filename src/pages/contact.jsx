import React from 'react'
import Layout from "../components/Layout"

const Contact = () => {
    const text = 'Página de contato'
     return (
         <Layout>
     <div className="container">
       <div className="row">
         <div className="col-12">
     <h1>{text}</h1>   
          <div className="col-6">
              <ul class="list-group">
                 <li>Email</li>
                 <li>Telefone</li>
                 <li>Localização</li>  
              </ul>
              </div>   
             
             </div>
      </div>
     </div>
         </Layout>    
      )
 }
 
 export default Contact