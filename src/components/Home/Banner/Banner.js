import React from 'react';
import { Card, Carousel } from 'react-bootstrap';
import './Banner.css'



 

const Banner = () => {
    return (
        <div className="banner">
            <Carousel>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/PgKCN1n/home-slider1.png"
                        alt="First slide"
                    />
                    <Carousel.Caption  >
                      <div className="row">
                          <div className="col-md-4">
                          
                          <Card style={{ width: '16rem' }}>
  <Card.Body>
  
    <div>
    <img src="https://i.ibb.co/nfFngGb/bed1.jpg" style={{ height: '50px', width: '100px' }} alt="" />
    <h1 className="text-primary">850</h1>
    <h2 className="text-primary">Patients Beds</h2>
    </div>
  </Card.Body>
</Card>
                                
 
                          </div>
                          <div className="col-md-4 ">

                          <Card style={{ width: '16rem' }}>
  <Card.Body>
  
    <div>
    <img src="https://i.ibb.co/TBJs1VG/patents.jpg" style={{ height: '50px', width: '100px' }} alt="" />
    <h1 className="text-primary">2500+</h1>
    <h2 className="text-primary">Patients</h2>
    </div>
  </Card.Body>
</Card>
                          </div>
                          <div className="col-md-4 ">
                            
                          <Card style={{ width: '16rem'}}>
  <Card.Body>
  
    <div>
    <img src="https://i.ibb.co/StNc6hL/doctor-nurses.jpg" style={{ height: '50px', width: '100px' }} alt="" />
    <h1 className="text-primary">750+</h1>
    <h2 className="text-primary">Doctor</h2>
    </div>
  </Card.Body>
</Card>
                          </div>
                          
                      </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/LCRCL5V/home-slider2.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <div className="row">
                          <div className="col-md-4">
                          
                          <Card style={{ width: '16rem' }}>
  <Card.Body>
  
    <div>
    <img src="https://i.ibb.co/nfFngGb/bed1.jpg" style={{ height: '50px', width: '100px' }} alt="" />
    <h1 className="text-primary">850</h1>
    <h2 className="text-primary">Patients Beds</h2>
    </div>
  </Card.Body>
</Card>
                                
 
                          </div>
                          <div className="col-md-4 ">

                          <Card style={{ width: '16rem' }}>
  <Card.Body>
  
    <div>
    <img src="https://i.ibb.co/TBJs1VG/patents.jpg" style={{ height: '50px', width: '100px' }} alt="" />
    <h1 className="text-primary">2500+</h1>
    <h2 className="text-primary">Patients</h2>
    </div>
  </Card.Body>
</Card>
                          </div>
                          <div className="col-md-4 ">
                            
                          <Card style={{ width: '16rem'}}>
  <Card.Body>
  
    <div>
    <img src="https://i.ibb.co/StNc6hL/doctor-nurses.jpg" style={{ height: '50px', width: '100px' }} alt="" />
    <h1 className="text-primary">750+</h1>
    <h2 className="text-primary">Doctor</h2>
    </div>
  </Card.Body>
</Card>
                          </div>
                          
                      </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/T1ftdL3/home-slider3.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                    <div className="row">
                          <div className="col-md-4">
                          
                          <Card style={{ width: '16rem' }}>
  <Card.Body>
  
    <div>
    <img src="https://i.ibb.co/nfFngGb/bed1.jpg" style={{ height: '50px', width: '100px' }} alt="" />
    <h1 className="text-primary">850</h1>
    <h2 className="text-primary">Patients Beds</h2>
    </div>
  </Card.Body>
</Card>
                                
 
                          </div>
                          <div className="col-md-4 ">

                          <Card style={{ width: '16rem' }}>
  <Card.Body>
  
    <div>
    <img src="https://i.ibb.co/TBJs1VG/patents.jpg" style={{ height: '50px', width: '100px' }} alt="" />
    <h1 className="text-primary">2500+</h1>
    <h2 className="text-primary">Patients</h2>
    </div>
  </Card.Body>
</Card>
                          </div>
                          <div className="col-md-4 ">
                            
                          <Card style={{ width: '16rem'}}>
  <Card.Body>
  
    <div>
    <img src="https://i.ibb.co/StNc6hL/doctor-nurses.jpg" style={{ height: '50px', width: '100px' }} alt="" />
    <h1 className="text-primary">750+</h1>
    <h2 className="text-primary">Doctor</h2>
    </div>
  </Card.Body>
</Card>
                          </div>
                          
                      </div>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;