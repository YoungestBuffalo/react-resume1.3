import React, { Component } from 'react';

class Testimonials extends Component {
  render() {
//not sure if this section is important, need to figure out how to fill up this space
//got rid of the top menu option for "testimonials" 
//it could be pretty to scroll past but it doesnt seem like it needs a link from the top

    if(this.props.data){
      var testimonials = this.props.data.testimonials.map(function(testimonials){
        return  <li key={testimonials.user}>
            <blockquote>
               <p>{testimonials.text}</p>
               <cite>{testimonials.user}</cite>
            </blockquote>
         </li>
      })
    }

    return (
      <section id="testimonials">
      <div className="text-container">
         <div className="row">

          

            <div className="ten columns flex-container">
                  <ul className="slides">
                      {testimonials}
                  </ul>
               </div>
            </div>
         </div>
   </section>
    );
  }
}

export default Testimonials;