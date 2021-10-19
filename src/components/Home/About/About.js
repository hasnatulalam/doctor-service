import React from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance, faCarSide, faCity, faClinicMedical, faFileMedical, faPills, faWarehouse } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  

    return (
        <div id="about">
        <section className="my-5 container">
            <div className="row">
            
                <div className="col-md-5 mb-3">
                    <img className="img-fluid" src="https://i.ibb.co/Mptzj8M/about.jpg" alt="" />
                </div>
                <div className="col-md-6 mb-2">
                {/* <h4 className="text center"><i>About Hospital</i></h4> */}
                   
                    <div className="text-center">
                    <h3 className="fw-bolder text-center text-danger"><i>We always provide <br /> best service in this town</i> </h3>
                    </div>
                   
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum suscipit quis aliquam assumenda possimus ea ipsum rerum et laudantium exercitationem voluptatem incidunt est cumque dolor commodi culpa delectus eaque ut sequi placeat, atque tempora omnis neque quod. Sequi earum odio eius quisquam voluptate architecto non dolores, corrupti hic vero repudiandae.</p>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <div className="overflow-hidden w-25">
                            <h6>Pharmacy</h6>
                            <FontAwesomeIcon icon={faPills} style={{ fontSize: '4em',color:'blue' }}></FontAwesomeIcon>
                            
                            
                        </div>
                        <div className="overflow-hidden w-25">
                            <h6>Ambulance</h6>
                            <FontAwesomeIcon icon={faAmbulance} style={{ fontSize: '4em',color:'blue' }}></FontAwesomeIcon>
                          
                        </div>
                        <div className="overflow-hidden w-25">
                            <h6>Our Cabin</h6>
                            <FontAwesomeIcon icon={faClinicMedical} style={{ fontSize: '4em',color:'blue' }}></FontAwesomeIcon>
                        
                        </div>  
                    </div>

                </div>
            </div>
        </section>
        </div>
    );
};

export default About;