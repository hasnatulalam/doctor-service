import { faFacebookF, faInstagramSquare, faTwitterSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Aboutus = () => {
    return (
        <div>
            <div className="col-md-4 ">
              
                     
               
           
                      <h4 className="text center fw-bolder"><i>About Us</i></h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore repudiandae doloremque voluptate consectetur nulla sed, labore culpa facilis saepe commodi!</p>
                        <div className='d-flex justify-content-evenly' style={{fontSize:'2em'}}>
                            <FontAwesomeIcon icon={faFacebookF}/>
                            <FontAwesomeIcon icon={faInstagramSquare}/>
                            <FontAwesomeIcon icon={faTwitterSquare}/>
                            <FontAwesomeIcon icon={faWhatsappSquare}/>
                        </div>
                    
                    </div>
                   
        </div>
    );
};

export default Aboutus;