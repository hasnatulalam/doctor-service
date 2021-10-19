import { faFacebookF, faInstagramSquare, faTwitterSquare, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Aboutus = () => {
    return (
        <div>
            <div className="col-md-4 ">
              
                     
               
           
                      <h4 className="text center fw-bolder text-white"><i>About Us</i></h4>
                        <p className="text-white">“Only a doctor can teach how to love life.” · “I gave up my life to learn how to save yours.</p>
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