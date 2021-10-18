import React from 'react';

const Contact = () => {
    return (
        <div>
            <div class="contact-item d-flex mb-3">
           
                       <div class="icon fs-4 text-white">
                           <i class="fas fa-envelope"></i>
                       </div>
                       <div class="text ms-3">
                           <h3 class="fs-4 text-white">Email</h3>
                           <p class="text-white">hasnatulalam056@gmail.com</p>
                       </div>
                   </div>
              
              
            
                    <div class="contact-item d-flex mb-3">
                        
                   
                        <div class="icon fs-4 text-white">
                            <i class="fas fa-phone text-white"></i>
                        </div>
                        <div class="text ms-3">
                            <h3 class="fs-5 text-white">Phone</h3>
                            <p class="text-white">01852730124</p>
                        </div>
                    </div>
                
             
                <div class="contact-item d-flex mb-3">
                    <div class="icon fs-4 text-white">
                        <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="text ms-3">
                        <h3 class="fs-5 text-white">Visit Hospital</h3>
                        <p class="text-white">Rangunia,Chittagong</p>
                    </div> 
            </div> 
        </div>
    );
};

export default Contact;