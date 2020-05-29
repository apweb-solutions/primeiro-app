import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import { Img } from 'gatsby-image'

const Menu = () => {
  /*
    const {Logo } = useStaticQuery(graphql
    query {
        logo: file(relativePath: { eq: "images/gatsby-icon.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }    
     ) 
*/
    return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="./">
          Logo
      </Link>
        <ul className="navbar-nav mr-auto">
           <li className="nav-item"><Link to="./" className="nav-link">Home</Link></li>  
           <li className="nav-item"><Link to="/gallery" className="nav-link">Galeria de Fotos</Link></li>  
           <li className="nav-item"><Link to="/about" className="nav-link">Sobre nós</Link></li>
           <li className="nav-item"><Link to="/contact" className="nav-link">Contato</Link></li>
        </ul>   
    </nav>
    )
}

export default Menu