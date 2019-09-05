import React, { Component } from 'react';

class Contact extends Component {
  render() {
//Need to figure out the tweets section on the bottom portion. Links arent working,
//format is strange
//also need to check how to get the email to work directly

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="" method="post" id="contactForm" name="contactForm">
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">
                  <h4 className="widget-title">Thanks for visiting!</h4>
                  <ul id="twitter">

                   <li>
                        <span>
                        Check out madsierraphotography! Mads is a local Pittsburgh artist who works mostly in portrait photography. She took all of the photos on the site!
                        <div></div>
                        <a href="https://www.madsierraphotography.com/">Here is a link to her site!</a>
                        </span>
                        <b><a href="#">7/18/2019</a></b>
                     </li>
                    
                     <li>
                        <span>
                        "Sometime the best way to solve your own problems... Is to help someone else" - Iroh
                        
                        </span>
                        <b><a href="#">7/16/2019</a></b>
                     </li>

                     
                  </ul>
		         </div>
            </aside>
      </div>
   </section>
    );
  }
}
export default Contact;