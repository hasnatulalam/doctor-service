import React from 'react';
import Aboutus from './Aboutus';
import Contact from './Contact';
import QuickLinks from './QuickLinks';


const Footer = () => {
    return (
        
            <div className="row bg-primary mt-5">
                
                <div className="col-lg-4">
             <h4 className="text-white">Contact us</h4>
            <Contact></Contact>
            </div>
            <div className="col-lg-4">
            <h4 className="text-white">QuickLinks</h4>
            <QuickLinks></QuickLinks>
            </div>
          <div className="col-lg-4">
         
              <Aboutus></Aboutus>
          </div>
                </div>
               
               

            
         
           
       
    );
};

export default Footer;