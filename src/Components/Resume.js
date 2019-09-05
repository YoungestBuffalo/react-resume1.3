import React, { Component } from 'react';

//this section needs some editing, specifically the info,
//-formatting the skill boxes, sizing, position
//-info in the skill boxes, breif but connect to my experience
class Resume extends Component {
  render() {

    //pulls from the resumeData.json
    if(this.props.data){
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
        </div>
      })
     
    
    }
    
    //pulls from resume data, while making hoverable boxes
    if(this.props.data){
      var skills = this.props.data.skills.map(function(skills){
        var skillsImage = 'images/skills/'+skills.image;
        return <div key={skills.title} className="columns skills-item">
           <div className="item-wrap">
            <a href={skills.url} title={skills.title}>
               <img alt={skills.title} src={skillsImage} />
               <div className="overlay">
                  <div className="skills-item-meta">
                 <h5>{skills.title}</h5>
                     <p>{skills.category}</p>
                  </div>
                </div>
              
            </a>
          </div>
        </div>
      })
    }


    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>






      <div className="row skill">

      <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="three columns header-col">
            
         </div>

         <div className="nine columns main-col">

            

             <div className="row">

            <div className="row skill">

            

            <div id="skills-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
               <ul>{skills}</ul>
            </div>
          </div>
          </div>
          </div>
</div>
   </section>
    );
  }
}



export default Resume;