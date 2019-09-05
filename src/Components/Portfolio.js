    
import React, { Component } from 'react';
//need to host some of my projects/ add a few more, my portfolio feels weak


class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div key={projects.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
               <img alt={projects.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects.title}</h5>
                     <p>{projects.category}</p>
                  </div>
                </div>
              
            </a>
          </div>
        </div>
      })

      
    }

    if(this.props.data){
      var projects2 = this.props.data.projects2.map(function(projects2){
        var projectImage = 'images/portfolio/'+projects2.image;
        return <div key={projects2.title} className="columns portfolio-item">
           <div className="item-wrap">
            <a href={projects2.url} title={projects2.title}>
               <img alt={projects2.title} src={projectImage} />
               <div className="overlay">
                  <div className="portfolio-item-meta">
                 <h5>{projects2.title}</h5>
                     <p>{projects2.category}</p>
                  </div>
                </div>
              
            </a>
          </div>
        </div>
      })

      
    }



    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check out some of my finished projects</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Here are some ideas and code I have been working on</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects2}
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;