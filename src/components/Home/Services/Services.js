import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';




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
           {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }

               </div>
            </div>
          
        
    );
};

export default Services;