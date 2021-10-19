import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service =  ({ service }) => {
    const { name, img,id } = service;
    return (
        <div className=" col-lg-4 col-md-4  col-sm-12">
              <div className="Cart">
                <div className="cart-details">
                  <img className="w-75 h-75" src={img} alt="" />
                </div>
                <div className="text-area fw-bolder text-white">
                 
                    
                    <Link to={`/booking/${id}`}>
                    <button className="btn btn-success">Book:{name.toLowerCase()}</button>
                    </Link>
                   
                 
                 </div>
              </div>
              </div>
    );
};

export default Service;