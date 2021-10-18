import React, { useEffect, useState } from 'react';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    // Loading Data 
    useEffect(() => {
        fetch('./Doctors.JSON')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setDoctors(data);
            })
    }, [])
    return (
        <div id="services">
        <div className="row">
         <div className="header fw-bolder w-75 text-danger ">
           <h1 className="text-center "><i>Our Hospital Services</i></h1>
           
          
           

         </div>
        {doctors.map((doctor) => (
            <div className="col-md-4 col-sm-12">
             <div className="cart">
              <div className="cart-details">
                <img className="w-50" src={doctor.img} alt="" />
              </div>
              <div className="text-area">
                <h4> CourseName:{doctor.name}</h4>
                <h4> InstructorName:{doctor.contact}</h4>
                  <p>{doctor.title}</p>
                  
                  <button className="btn btn-success">Details</button>
               
               </div>
            </div>
            </div> 
             ))};
        </div>
            </div>       
    );
};

export default Doctors;