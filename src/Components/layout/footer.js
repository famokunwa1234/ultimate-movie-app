import React from 'react'

 function footer() {
    return (
        <div>
         <div className="row">
        <div className="col-md-12">
        <div className="footer p-3 mt-4 text-center bg-dark text-light">
         DEVELOPED BY:
         <span className="text-warning font-weight-normal">
          D ULTIMATE
         </span>
         ,Using <i className="fab fa-react" />React js &amp; redux js integrete with external movie data API
         <a href="https://www.omdpapi.com/"
         target="_blank"
           rel="noopener noreferrer">
             OMDB
         </a>
        </div>
        </div>
        </div>   
        </div>
    )
}

export default footer;