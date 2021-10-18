import React, { useEffect, useState } from 'react';
import './Services.css'



const Services = () => {
    const [services, setServices] = useState([]);

    // Loading Data 
    useEffect(() => {
        fetch('./Services.JSON')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            })
    }, [])
    return (
        <div id="services">
          <div className="row">
           <div className="header fw-bolder w-75 text-danger ">
             <h1 className="text-center "><i>Our Hospital Services</i></h1>
             
            
             

           </div>
          {services.map((service) => (
              <div className="col-md-4 col-sm-12">
              <div className="cart">
                <div className="cart-details">
                  <img className="w-75 h-75" src={service.img} alt="" />
                </div>
                <div className="text-area fw-bolder text-white">
                 
                    <p>{service.name}</p>
                    
                    <button className="btn btn-success">Details</button>
                 
                 </div>
              </div>
              </div> 
                          
           
          ))};


               </div>
            </div>
          
        
    );
};

export default Services;