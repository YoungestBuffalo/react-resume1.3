import React, { Component } from 'react';

class Header extends Component {
  render() {
// I like this section of the website with the format, need to make sure it scales 
//down when on moblie, or smaller monitor etc
//probably dont need the twitter link but whatever?
    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">
      

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
          
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>

      </nav>
      
      <div className="row banner" style={{position: 'absolute', top: 7 + '%', left: -30 + '%', width: 100 + '%', height: 80 + '%'}}>
         <div className="banner-text">
            <ul className="social">
            {networks}
            </ul>
         </div>
      </div>
      <div className="row banner" style={{position: 'absolute', top: 5 + '%', left: 20 + '%', width: 50 + '%', height: 80 + '%'}}>
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
         </div>
      </div>
      <hr></hr>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;