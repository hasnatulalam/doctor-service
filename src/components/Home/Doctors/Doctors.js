import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';


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
        <div id="doctors">
        <div className="row">
         <div className="header fw-bolder w-75 text-danger ">
           <h1 className="text-center "><i>Our Doctors Are Always Ready</i></h1>
           
          
           

         </div>
         {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }
            
        </div>
            </div>       
    );
};

export default Doctors;